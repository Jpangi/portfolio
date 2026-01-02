import React from "react";
import { FaGithub } from "react-icons/fa6";

function Projects() {
  const projectsData = [
    {
      title: "Portfolio",
      description:
        "full-stack web application for managing personal stock portfolios with user authentication, CRUD operations, and interactive data visualization. Built with the MEN stack (MongoDB, Express.js, Node.js) and EJS templating.",
      tech: ["Javascript", "Express", "GitHub", "Node.js", "CSS"],
      link: "https://grounds-for-debate.onrender.com/",
      github: "https://github.com/Jpangi/men-stack-stock-portfolio-app",
    },
    {
      title: "Grounds For Debate",
      description:
        "Coffee tracking web application that enables users to log, rate, and review their coffee beans while discovering top-rated beans from the community. Built using the MERN stack (MongoDB, Express, React, Node.js). Developed as sole programmer, handling all aspects of design, development, and deployment.",
      tech: ["Javascript", "Express", "React", "GitHub", "Node.js", "CSS"],
      link: "https://grounds-for-debate.onrender.com/",
      github: "https://github.com/Jpangi/grounds-for-debate",
    },
    {
      title: "Project 3",
      description:
        "Built a custom Odoo module that adds follow-up automation and smart controls to contact records. Includes scheduled jobs, role-based permissions, and UI enhancements.",
      tech: ["Python", "Express", "React", "GitHub", "Node.js", "CSS"],
      link: "Visit",
      github: "https://github.com/Jpangi/grounds-for-debate",
    },
  ];

  return (
    <div className="projects-container">
      <div className="projects-wrapper">
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <span className="project-icon">🔹</span>
                <h2 className="project-title">{project.title}</h2>
              </div>

              <p className="project-description">{project.description}</p>

              <div className="project-tech">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-item">
                    🔧 {tech} 
                  </span>
                ))}
              </div>

              <div className="project-footer">
                {project.github && (
                    
                  <a
                    href={project.github}
                    className="project-github"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub /> {project.github.includes("http") ? "Github" : project.github}
                  </a>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🔗 {project.link.includes("http") ? "Visit" : project.link}
                  </a>
                  
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
