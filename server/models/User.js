const { pool } = require("../config/db");

// password 컬럼은 절대 응답에 포함하지 않음
const COLUMNS = "id, username, email, created_at AS createdAt";

exports.findAll = async () => {
  const [rows] = await pool.query(`SELECT ${COLUMNS} FROM users ORDER BY id`);
  return rows;
};

exports.findById = async (id) => {
  const [rows] = await pool.query(`SELECT ${COLUMNS} FROM users WHERE id = ?`, [
    id,
  ]);
  return rows[0] || null;
};

// passwordHash는 컨트롤러에서 bcrypt로 해싱한 값
exports.create = async ({ username, email, passwordHash }) => {
  const [result] = await pool.query(
    "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
    [username, email, passwordHash]
  );
  return exports.findById(result.insertId);
};

exports.update = async (id, { username, email, passwordHash }) => {
  const [result] = await pool.query(
    `UPDATE users
        SET username = COALESCE(?, username),
            email    = COALESCE(?, email),
            password = COALESCE(?, password)
      WHERE id = ?`,
    [username ?? null, email ?? null, passwordHash ?? null, id]
  );
  return result.affectedRows ? exports.findById(id) : null;
};

exports.remove = async (id) => {
  const [result] = await pool.query("DELETE FROM users WHERE id = ?", [id]);
  return result.affectedRows > 0;
};
