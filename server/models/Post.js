const { pool } = require("../config/db");

const COLUMNS = "id, title, content, created_at AS createdAt, updated_at AS updatedAt";

exports.findAll = async () => {
  const [rows] = await pool.query(
    `SELECT ${COLUMNS} FROM posts ORDER BY id DESC`
  );
  return rows;
};

exports.findById = async (id) => {
  const [rows] = await pool.query(`SELECT ${COLUMNS} FROM posts WHERE id = ?`, [
    id,
  ]);
  return rows[0] || null;
};

exports.create = async ({ title, content }) => {
  const [result] = await pool.query(
    "INSERT INTO posts (title, content) VALUES (?, ?)",
    [title, content]
  );
  return exports.findById(result.insertId);
};

exports.update = async (id, { title, content }) => {
  const [result] = await pool.query(
    "UPDATE posts SET title = COALESCE(?, title), content = COALESCE(?, content) WHERE id = ?",
    [title ?? null, content ?? null, id]
  );
  return result.affectedRows ? exports.findById(id) : null;
};

exports.remove = async (id) => {
  const [result] = await pool.query("DELETE FROM posts WHERE id = ?", [id]);
  return result.affectedRows > 0;
};
