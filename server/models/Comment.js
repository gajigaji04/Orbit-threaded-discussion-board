const { pool } = require("../config/db");

const COLUMNS = "id, post_id AS postId, content, created_at AS createdAt";

// postId를 넘기면 해당 게시글의 댓글만 조회
exports.findAll = async (postId) => {
  if (postId) {
    const [rows] = await pool.query(
      `SELECT ${COLUMNS} FROM comments WHERE post_id = ? ORDER BY id`,
      [postId]
    );
    return rows;
  }
  const [rows] = await pool.query(`SELECT ${COLUMNS} FROM comments ORDER BY id`);
  return rows;
};

exports.findById = async (id) => {
  const [rows] = await pool.query(
    `SELECT ${COLUMNS} FROM comments WHERE id = ?`,
    [id]
  );
  return rows[0] || null;
};

exports.create = async ({ postId, content }) => {
  const [result] = await pool.query(
    "INSERT INTO comments (post_id, content) VALUES (?, ?)",
    [postId, content]
  );
  return exports.findById(result.insertId);
};

exports.update = async (id, { content }) => {
  const [result] = await pool.query(
    "UPDATE comments SET content = ? WHERE id = ?",
    [content, id]
  );
  return result.affectedRows ? exports.findById(id) : null;
};

exports.remove = async (id) => {
  const [result] = await pool.query("DELETE FROM comments WHERE id = ?", [id]);
  return result.affectedRows > 0;
};
