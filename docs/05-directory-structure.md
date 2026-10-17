# 디렉토리 구조

```text
Orbit-threaded-discussion-board/
├── client/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── styles/
│       ├── api.js
│       └── App.js
├── server/
│   ├── config/
│   ├── db/
│   ├── models/
│   ├── controllers/
│   ├── routes/
│   └── server.js
├── docs/
├── package.json
└── README.md
```

## 주요 디렉토리

| 경로                     | 역할              |
| ------------------------ | ----------------- |
| `client/src/components/` | 공통 UI 컴포넌트  |
| `client/src/pages/`      | 페이지별 화면     |
| `server/routes/`         | API 라우팅        |
| `server/controllers/`    | 요청 및 응답 처리 |
| `server/models/`         | 데이터베이스 쿼리 |
| `server/db/`             | SQL 스키마        |
| `docs/`                  | 프로젝트 문서     |
