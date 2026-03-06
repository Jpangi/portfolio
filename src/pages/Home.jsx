import { Link } from "react-router";
import ProfilePic from "../components/images/ProfilePic";

const skillTags = [
  { label: "HTML5", color: "#ef4444" },
  { label: "CSS3", color: "#3b82f6" },
  { label: "JavaScript", color: "#eab308" },
  { label: "Python", color: "#06b6d4" },
  { label: "React", color: "#6366f1" },
  { label: "Node.js", color: "#22c55e" },
  { label: "PostgreSql", color: "#a83232" },
  { label: "MongoDB", color: "#6da832" },
  { label: "Django", color: "#a89932" },
];

function Home() {
  return (
    <section className="hero-section">
      <div className="hero-bg" />
      <div className="hero-dots" />

      <div className="hero-content">
        <div className="hero-available">
          <span className="hero-dot" />
          Available for freelance work
        </div>

        <p className="hero-greeting">Hey there! I'm</p>
        <h1 className="hero-name">Jacob<br/>Pangilinan</h1>

        <p className="hero-role">
          I'm a <span>Software Engineer</span>
        </p>

        <p className="hero-description">
          Creating stunning, accessible, and high-performance web experiences
          that bring your ideas to life. Specialized in modern frameworks
          and cutting-edge technologies.
        </p>

        <div className="hero-skills-row">
          {skillTags.map(({ label, color }) => (
            <span
              key={label}
              className="hero-skill-tag"
              style={{ background: color }}
            >
              {label}
            </span>
          ))}
        </div>

        <div className="hero-buttons">
          <Link to="/Projects" className="btn-primary">View My Work →</Link>
          <Link to="/Contact" className="btn-secondary">Let's Talk 💬</Link>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-avatar-wrapper">
          <div className="hero-avatar-ring">
            <ProfilePic />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Home;