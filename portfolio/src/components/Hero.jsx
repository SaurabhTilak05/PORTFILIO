import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Hero.css";

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="overlay"></div>
      <div className="container hero-container fade-in-up">
        <h1>
          Hi, I'm <span className="highlight">Tilak Saurabh</span>
        </h1>

        <TypeAnimation
          sequence={[
            "React Developer 💻",
            2000,
            "Java Programmer ☕",
            2000,
            "Full Stack Learner 🚀",
            2000,
          ]}
          speed={50}
          repeat={Infinity}
          className="typing"
        />

        <p className="intro-text">
          Passionate about building creative, efficient, and modern web applications.  
          Currently pursuing MCA and eager to start my journey as a Full Stack Developer.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn">View My Work</a>
          <a href="#contact" className="btn btn-outline">Contact Me</a>
        </div>

        <div className="social-icons">
          <a href="https://github.com/SaurabhTilak05" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/saurabh-tilak-502ab6350/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:tilaksaurabh@example.com">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
