import React from "react";
import "./Skills.css";

function Skills() {
  const skills = [
    "Core Java", "Advanced Java", "Spring Boot", 
    "HTML", "CSS", "JavaScript", 
    "React.js", "Node.js", "Express.js", 
    "MySQL", "Git", "GitHub", 
    "REST API", "Postman", "JIRA"
  ];

  return (
    <section id="skills" className="skills">
      <div className="container fade-in-up">
        <h2 className="section-title">My Skills</h2>
        <p className="skills-intro">
          Here are some of the technologies and tools I’ve learned and practiced while building my projects.
        </p>
        <div className="skills-grid">
          {skills.map((skill, i) => (
            <div key={i} className="skill-card">
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
