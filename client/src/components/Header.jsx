import React from "react";
import { Link } from "react-router-dom";
import { FiAlignJustify } from "react-icons/fi";
import { SiStardock } from "react-icons/si";
import "../styles/Header.css";

function Header({ toggleSidebar }) {
  return (
    <header className="header">
      <div className="content">
        {/* 사이드바 토글 버튼 */}
        <button
          onClick={toggleSidebar}
          className="sidebar-toggle-button"
          aria-label="사이드바 열기/닫기"
        >
          <FiAlignJustify />
        </button>

        {/* 헤더 타이틀 */}
        <Link to="/" className="headerTitle">
          <SiStardock className="headerLogoIcon" />
          Orbit
        </Link>
      </div>
    </header>
  );
}

export default Header;
