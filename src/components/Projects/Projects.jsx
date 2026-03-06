import { projectsData } from "../../util/helper";

const projectCards = [
  ...projectsData.map((p, i) => ({
    emoji: ["assets/portfolio-dashboard.png", "assets/grounds-for-debate.png", "assets/program.png"][i] || "🔷",
    tags: p.tech.slice(0, 2).map((t, ti) => ({
      label: t,
      color: ["#fb923c", "#ef4444", "#eab308", "#38bdf8", "#818cf8"][ti % 5],
    })),
    title: p.title,
    desc: p.description,
    github: p.github,
    link: p.link,
    viewColor: "#fb923c",
  })),
];

function Projects() {
  const displayed = projectCards.slice(0, 6);

  return (
    <section className="projects-section">
      <div className="section-bg-dots" />
      <div className="section-inner">
        <div className="projects-header">
          <span className="section-badge">Portfolio</span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            A collection of my recent work showcasing creativity and technical
            expertise
          </p>
        </div>

        <div className="projects-grid">
          {displayed.map((p, i) => (
            <div key={i} className="project-card">
              <div className="project-card-img">
                {p.emoji.includes("/") || p.emoji.includes(".") ? (
                  <img src={p.emoji} alt={p.title} />
                ) : (
                  <span>{p.emoji}</span>
                )}
              </div>
              <div className="project-card-body">
                <div className="project-tags">
                  {p.tags.map(({ label, color }) => (
                    <span
                      key={label}
                      className="project-tag"
                      style={{
                        background: `${color}20`,
                        color,
                        border: `1px solid ${color}40`,
                      }}
                    >
                      {label}
                    </span>
                  ))}
                </div>
                <h3>{p.title}</h3>
                <p>
                  {p.desc.length > 100 ? p.desc.slice(0, 100) + "..." : p.desc}
                </p>
                <div className="project-card-footer">
                  <a
                    href={p.link || "#"}
                    className="project-view-link"
                    style={{ color: p.viewColor }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project →
                  </a>
                  <div className="project-icon-links">
                    {p.github && (
                      <a
                        href={p.github}
                        className="project-icon-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="GitHub"
                      >
                        ⌥
                      </a>
                    )}
                    {p.link && (
                      <a
                        href={p.link}
                        className="project-icon-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Live"
                      >
                        ↗
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <a
            href="https://github.com/Jpangi"
            className="btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            View All Projects →
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;