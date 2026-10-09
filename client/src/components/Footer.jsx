import React from "react";
import "../styles/Footer.css";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2023 Bit-Universe</p>
      <a
        href="https://github.com/gajigaji04/Bit-Universe"
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
