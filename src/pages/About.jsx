import { skillsData } from "../util/helper";

const skillBars = [
  { label: "Web Development", pct: 95, color: "linear-gradient(90deg, #38bdf8, #818cf8)" },
  { label: "UI/UX Design", pct: 90, color: "linear-gradient(90deg, #818cf8, #f472b6)" },
  { label: "Backend Development", pct: 88, color: "linear-gradient(90deg, #22d3ee, #10b981)" },
  { label: "Mobile Development", pct: 85, color: "linear-gradient(90deg, #fb923c, #ef4444)" },
];


function About() {
  return (
    <section className="about-section">
      <div className="section-bg-dots" />
      <div className="section-inner">
        <div className="about-header">
          <span className="section-badge">About Me</span>
          <h2 className="section-title">
            Know More <span className="gradient-text">About Me</span>
          </h2>
          <p className="section-subtitle">
            A passionate developer with a love for creating beautiful and
            functional applications
          </p>
        </div>

        <div className="about-grid">
          <div className="about-image-area">
            <div className="about-img-frame">
              <img
                src="assets/profile-pic.jpeg"
                alt="Profile"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentNode.innerHTML =
                    '<div class="about-img-placeholder">👨‍💻</div>';
                }}
              />
            </div>


          </div>

          <div className="about-content">
            <h2>
              I'm Jacob Pangilinan, a{" "}
              <span className="gradient-text">Software Engineer</span>
            </h2>

            <p>
              I'm a Software Engineer who came up through Business Management
              Analysis, and that path shaped how I think about code. I don't
              just build features, I understand the processes, the
              inefficiencies, and the people behind them. That foundation drives
              me to write clean, purposeful applications that create real
              impact."
            </p>

            <div className="skills-section">
              <h3>Tech Stack</h3>
              <div className="skills-icon-grid">
                {skillsData.map((icon, i) => (
                  <div key={i} className="skill-icon-card">
                    {icon}
                  </div>
                ))}
              </div>
            </div>

            <div className="about-buttons">
              <a href="mailto:jacob@example.com" className="btn-primary">
                Hire Me →
              </a>
              <a href="assets/Jacob_Pangilinan_Resume_Final.pdf" target="_blank" download className="btn-secondary">
                📄 Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;