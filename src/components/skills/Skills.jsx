export default function Skills({ skillsData }) {
  return (
    <section className="skills-section">
      <h2 className="skills-title">Skills</h2>

      <div className="skills-container">
        {skillsData.map((skill) => (
          <div key={skill} className="skill-badge">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
