import { FaGithub } from "react-icons/fa6";

function ProjectsComponent({ projectsData }) {
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
                    <FaGithub />{" "}
                    {project.github.includes("http")
                      ? "Github"
                      : project.github}
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

export default ProjectsComponent;
