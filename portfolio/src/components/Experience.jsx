import React from "react";
import "./Experience.css";
import { FaBriefcase } from "react-icons/fa";

function Experience() {
  const experiences = [
    {
      year: "JUNE 2025 – Present",
      role: "Java Developer Intern",
      company: "Gsoft Solutions Pvt. Ltd.",
      details:
        "Working on real-time Java projects focusing on backend logic, debugging, and REST API integration using Spring Boot and MySQL.",
    },
    {
      year: "2024 – 2025",
      role: "Java Full Stack Developer (Academic Project)",
      company: "Quick Start Career",
      details:
        "Developed a full-stack job portal web app with user authentication, job posting, and dynamic REST APIs using Node.js, Express, React, and MySQL.",
    },
  ];

  return (
    <section id="experience" className="experience">
      <div className="container fade-in-up">
        <h2 className="experience-title">Professional Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-icon">
                <FaBriefcase />
              </div>
              <div className="timeline-content">
                <span className="year">{exp.year}</span>
                <h3>{exp.role}</h3>
                <h4>{exp.company}</h4>
                <p>{exp.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
