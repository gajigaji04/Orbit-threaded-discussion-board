const fs = require("fs");
const path = require("path");
const mysql = require("mysql2/promise");

const DB_NAME = process.env.DB_NAME || "bit_universe";

const connectionOptions = {
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT) || 3306,
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
};

// 앱 전체에서 공유하는 커넥션 풀
const pool = mysql.createPool({
  ...connectionOptions,
  database: DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  dateStrings: true,
});

// DB와 테이블이 없으면 생성 (서버 시작 시 1회 실행)
async function initDatabase() {
  const conn = await mysql.createConnection({
    ...connectionOptions,
    multipleStatements: true,
  });
  try {
    await conn.query(
      `CREATE DATABASE IF NOT EXISTS \`${DB_NAME}\` DEFAULT CHARACTER SET utf8mb4`
    );
    await conn.query(`USE \`${DB_NAME}\``);
    const schema = fs.readFileSync(
      path.join(__dirname, "../db/schema.sql"),
      "utf8"
    );
    await conn.query(schema);
  } finally {
    await conn.end();
  }
}

module.exports = { pool, initDatabase, DB_NAME };
