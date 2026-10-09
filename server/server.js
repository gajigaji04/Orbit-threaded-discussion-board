const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const fs = require("fs");
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const { initDatabase, DB_NAME } = require("./config/db");
const postRoutes = require("./routes/postRoutes");
const commentRoutes = require("./routes/commentRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = process.env.PORT || 5000;
const CLIENT_BUILD = path.join(__dirname, "../client/build");

// 1. 미들웨어 설정
app.use(cors());
app.use(helmet());
app.use(express.json());

// 2. API 라우트
app.get("/api/data", (req, res) => {
  res.json({ message: "Hello, world!" });
});

app.use("/api", postRoutes);
app.use("/api", commentRoutes);
app.use("/api", userRoutes);

// 정의되지 않은 API 경로는 index.html 대신 404 JSON 반환
app.use("/api", (req, res) => {
  res.status(404).json({ error: "Not Found" });
});

// 3. React 빌드 결과물 서빙 (client/build가 있을 때만)
if (fs.existsSync(CLIENT_BUILD)) {
  app.use(express.static(CLIENT_BUILD));
  app.get("*", (req, res) => {
    res.sendFile(path.join(CLIENT_BUILD, "index.html"));
  });
}

// 4. 공통 에러 핸들러
app.use((err, req, res, next) => {
  if (err.type === "entity.parse.failed") {
    return res.status(400).json({ error: "Invalid JSON body" });
  }
  if (err.code === "ER_DUP_ENTRY") {
    return res.status(409).json({ error: "Duplicate entry" });
  }
  console.error(err);
  res.status(500).json({ error: "Internal Server Error" });
});

// 5. DB 초기화 후 서버 실행
initDatabase()
  .then(() => {
    console.log(`✅ MySQL 연결 성공! (database: ${DB_NAME})`);
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MySQL 연결 실패:", err.message);
    console.error("   .env의 DB_HOST / DB_USER / DB_PASSWORD 값을 확인하세요.");
    process.exit(1);
  });
