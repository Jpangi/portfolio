import React from 'react';

function Projects() {

  const projectsData = [
    {
      title: "Grounds For Debate - Coffee Bean reviews",
      description: "Built a custom Odoo module that adds follow-up automation and smart controls to contact records. Includes scheduled jobs, role-based permissions, and UI enhancements.",
      tech: ["Javascript", "Express", "React", "GitHub", "Node.js"],
      link: "GitHub",
    },
    {
      title: "Grounds For Debate",
      description: "Your existing project from the original code.",
      tech: ["Javascript", "Express", "React", "GitHub", "Node.js"],
      link: "https://grounds-for-debate.onrender.com/",
    }
  ];

  return (
    <div className="projects-container">
      <div className="projects-wrapper">
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <span className="project-icon">🔹</span>
                <h2 className="project-title">
                  {project.title}
                </h2>
              </div>
              
              <p className="project-description">
                {project.description}
              </p>
              
              <div className="project-tech">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-item">
                    🔧 {tech} {techIndex < project.tech.length - 1 ? '·' : ''}
                  </span>
                ))}
              </div>
              
              <div className="project-footer">
                {project.isPrivate && (
                  <span className="project-private">
                    🔒 Private
                  </span>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🔗 {project.link.includes('http') ? 'Visit' : project.link}
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