const services = [
  {
    icon: "</>",
    bg: "linear-gradient(135deg, #38bdf8, #818cf8)",
    title: "Web Development",
    desc: "Building responsive, performant websites using modern frameworks and best practices. From landing pages to complex web applications.",
    features: ["Responsive Design", "Performance Optimization", "Cross-browser Compatibility"],
    color: "#38bdf8",
  },
    {
    icon: "🗄",
    bg: "linear-gradient(135deg, #22d3ee, #10b981)",
    title: "Backend Development",
    desc: "Robust and scalable server-side solutions with RESTful APIs, databases, and cloud integrations.",
    features: ["API Development", "Database Design", "Cloud Integration"],
    color: "#22d3ee",
  },
  {
    icon: "🎨",
    bg: "linear-gradient(135deg, #a78bfa, #ec4899)",
    title: "UI/UX Design",
    desc: "Creating intuitive and beautiful user interfaces that provide exceptional user experiences and drive engagement.",
    features: ["User Research", "Wireframing & Prototyping", "Visual Design"],
    color: "#a78bfa",
    featured: true,
  },
  {
    icon: "📱",
    bg: "linear-gradient(135deg, #fb923c, #ef4444)",
    title: "Mobile Apps",
    desc: "Cross-platform mobile applications with native performance using React Native and modern mobile frameworks.",
    features: ["iOS & Android", "Native Features", "App Store Deployment"],
    color: "#fb923c",
  },
];

function Services() {
  return (
    <section className="services-section">
      <div className="section-bg-dots" />
      <div className="section-inner">
        <div className="services-header">
          <span className="section-badge">Services</span>
          <h2 className="section-title">
            What I <span className="gradient-text">Offer</span>
          </h2>
          <p className="section-subtitle">
            Comprehensive web development services tailored to your needs
          </p>
        </div>

        <div className="services-grid">
          {services.map(({ icon, bg, title, desc, features, color, featured }) => (
            <div key={title} className={`service-card${featured ? " featured" : ""}`}>
              <div className="service-icon-wrap" style={{ background: bg }}>
                <span style={{ color: "white", fontWeight: 800, fontSize: "1.1rem" }}>{icon}</span>
              </div>
              <h3>{title}</h3>
              <p>{desc}</p>
              <ul className="service-features">
                {features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <a href="#" className="service-link" style={{ color }}>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;