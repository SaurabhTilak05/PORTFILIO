import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          © {new Date().getFullYear()} <span className="highlight">Tilak Saurabh</span> | Designed & Developed with ❤️
        </p>

        <div className="footer-icons">
          <a
            href="https://github.com/SaurabhTilak05"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/saurabh-tilak-502ab6350/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
          >
            <FaLinkedin />
          </a>
          <a
            href="saurbhtilak6@gmal.com"
            className="icon-link"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
