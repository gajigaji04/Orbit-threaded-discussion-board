# 🌌 Orbit

React + Express + MySQL 기반의 커뮤니티형 스레드 게시판 웹 애플리케이션입니다. 게시글과 댓글을 통해 사용자 간 소통을 지원합니다.

## ✨ 주요 기능

- 게시글 목록 조회, 작성, 상세 조회, 수정 및 삭제 API
- 댓글 작성, 조회, 수정 및 삭제 API
- 회원 가입, 회원 조회, 정보 수정 및 탈퇴 API
- bcrypt 기반 비밀번호 해싱
- 공통 에러 처리 및 입력값 검증
- MySQL 데이터베이스 및 테이블 초기화
- React 기반 SPA와 Express 서버 연동

## 🛠 기술 스택

| 구분            | 기술                         |
| --------------- | ---------------------------- |
| Frontend        | React, TypeScript, Vite      |
| Routing         | React Router                 |
| HTTP Client     | Axios                        |
| Server State    | TanStack Query               |
| Validation      | Zod                          |
| Backend         | Node.js, TypeScript, Express |
| Database        | MySQL 8.x                    |
| DB Driver       | mysql2/promise               |
| Security        | Helmet, CORS, bcryptjs       |
| Authentication  | JWT (구현 범위 확인 필요)    |
| Version Control | Git, GitHub                  |

> 기술 스택은 실제 `package.json`과 구현 상태를 기준으로 유지합니다.

## 📁 프로젝트 구조

```text
Orbit-threaded-discussion-board/
├── client/          # React 프론트엔드
├── server/          # Express 백엔드
├── docs/            # 프로젝트 및 설계 문서
├── .env.example     # 환경 변수 템플릿
├── package.json
└── README.md
```

## 🚀 시작하기

### 요구 사항

- Node.js
- MySQL 8.x

### 1. 저장소 클론

```bash
git clone https://github.com/gajigaji04/Orbit-threaded-discussion-board.git
cd Orbit-threaded-discussion-board
```

### 2. 환경 변수 설정

프로젝트 루트의 `.env.example`을 참고해 `.env` 파일을 생성하고 MySQL 접속 정보를 설정합니다.

```env
PORT=5000
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=orbit
```

### 3. 의존성 설치

```bash
npm run install:all
```

### 4. 개발 서버 실행

터미널 1 — 백엔드:

```bash
npm run dev
```

터미널 2 — 프론트엔드:

```bash
npm run client
```

- Frontend: http://localhost:3000
- Backend API: http://localhost:5000/api

### 5. 프로덕션 빌드 및 실행

```bash
npm run build
npm start
```

실제 명령어와 포트는 프로젝트의 `package.json` 및 환경 설정을 기준으로 확인합니다.

## 📚 문서

| 문서                                              | 설명                               |
| ------------------------------------------------- | ---------------------------------- |
| [프로젝트 개요](docs/01-project-overview.md)      | 프로젝트 목적, 요구사항, 주요 기능 |
| [시스템 아키텍처](docs/02-system-architecture.md) | 시스템 구성, 기술 스택, 요청 흐름  |
| [ERD](docs/03-erd.md)                             | 데이터베이스 구조 및 테이블 관계   |
| [API 명세서](docs/04-api-specification.md)        | API 엔드포인트 및 요청·응답 규격   |
| [디렉토리 구조](docs/05-directory-structure.md)   | 디렉토리와 주요 파일 설명          |
| [개발 가이드](docs/06-development-guide.md)       | 환경 설정, 실행, 빌드 및 테스트    |

## 🧭 향후 개선 사항

- JWT 로그인 및 인증·인가 기능
- 게시글과 댓글의 작성자 연결
- 게시글 수정 UI
- 게시글 목록 페이지네이션
- API 테스트 및 통합 테스트

## 👤 Contributors

- [@gajigaji04](https://github.com/gajigaji04)

## 📄 License

ISC License
