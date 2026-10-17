import React from "react";
import "../styles/Footer.css";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2023 Orbit</p>
      <a
        href="https://github.com/gajigaji04/Orbit-threaded-discussion-board"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
      >
        <FaGithub />
      </a>
    </footer>
  );
}

export default Footer;
