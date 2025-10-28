import React from "react";
import "./Projects.css";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "Online Job Portal",
      description:
        "A full-featured job portal where HRs can post jobs and candidates can apply online. Integrated authentication, job filtering, and REST APIs for seamless user experience.",
      tech: "React.js • Node.js • Express • MySQL • REST API • Postman",
      liveLink: "https://quickstartcareer.in/",
      github: "https://github.com/SaurabhTilak05/OnlineJobPortalApplication",
    },
    {
      title: "Department & Employee Management System",
      description:
        "A Java-based desktop application for managing employee and department records using file handling operations — add, view, update, delete, and search.",
      tech: "Node.js • Express • EJS • MySQL",
        liveLink: "https://quickstartcareer.in/",
      github: "https://github.com/SaurabhTilak05/NodeJS/tree/master/EmplDeptMiniProject",
    },
    {
      title: "Diwali Celebration Website",
      description:
        "An interactive festive website built with React and custom animations — showcasing glowing diyas, lights, and celebratory effects.",
      tech: "React.js • CSS • Animation",
      liveLink: "https://saurabhtilak05.github.io/Diwali_Project/",
      github: "https://github.com/SaurabhTilak05/Diwali_Project",
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container fade-in-up">
        <h2 className="projects-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <div key={i} className="project-card">
              <div className="project-content">
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <span className="tech-stack">{p.tech}</span>
              </div>
              <div className="project-links button-group">
                {p.liveLink && (
                  <a
                    href={p.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                  >
                    Live <FaExternalLinkAlt className="icon" />
                  </a>
                )}
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn github-btn"
                >
                  GitHub <FaGithub className="icon" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
