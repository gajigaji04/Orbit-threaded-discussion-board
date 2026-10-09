import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>Welcome to Bit-Universe</h2>
      <p>자유롭게 글을 쓰고 댓글로 소통하는 커뮤니티입니다.</p>
      <Link to="/posts">게시판 바로가기 →</Link>
    </div>
  );
}

export default Home;
