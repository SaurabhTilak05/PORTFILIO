import React from "react";
import "./About.css";
import profile from "../assets/profile.jpg";

function About() {
  return (
    <section id="about" className="about">
      <div className="container about-container fade-in-up">
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Hello! I’m <b>Tilak Saurabh</b>, currently <b>pursuing my MCA (Master of Computer Applications)</b> 
            with a strong passion for <b>software development</b> and <b>problem-solving</b>. 
            I have a solid foundation in <b>Java</b> and <b>Full Stack Web Development</b> using 
            technologies like <b>React.js, Node.js, Express.js, and MySQL</b>.
          </p>

          <p>
            I enjoy creating clean, responsive, and user-focused applications that make a real impact. 
            My academic projects and personal work have helped me develop a deep understanding of 
            both <b>frontend</b> and <b>backend</b> technologies, as well as strong analytical and teamwork skills.
          </p>

          <p>
            As a motivated fresher, I’m seeking an opportunity to begin my professional journey, 
            contribute to impactful projects, and learn from experienced mentors while continuously 
            enhancing my technical expertise.
          </p>

          <a href="#skills" className="btn">View My Skills</a>
        </div>

        <div className="about-img-container">
          <img src={profile} alt="Tilak Saurabh" className="about-img" />
        </div>
      </div>
    </section>
  );
}

export default About;
