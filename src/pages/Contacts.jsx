import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    alert("Message sent! I'll get back to you soon.");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section className="contact-section">
      <div className="section-bg-dots" />
      <div className="section-inner">
        <div className="contact-header">
          <span className="section-badge">Get In Touch</span>
          <h2 className="section-title">
            Let's Work <span className="gradient-text">Together</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind? Let's discuss how I can help bring your ideas to life
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <h3>Let's talk about your project</h3>
            <p>
              I'm always interested in hearing about new projects and opportunities.
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>

            <div className="contact-detail">
              <div className="contact-detail-icon" style={{ background: "linear-gradient(135deg,#38bdf8,#818cf8)" }}>
                ✉️
              </div>
              <div className="contact-detail-text">
                <span>Email</span>
                <strong>jacob.panilinan10@gmail.com</strong>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-detail-icon" style={{ background: "linear-gradient(135deg,#a78bfa,#ec4899)" }}>
                📞
              </div>
              <div className="contact-detail-text">
                <span>Phone</span>
                <strong>+1 (703) 232-890</strong>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-detail-icon" style={{ background: "linear-gradient(135deg,#22d3ee,#10b981)" }}>
                📍
              </div>
              <div className="contact-detail-text">
                <span>Location</span>
                <strong>California, USA</strong>
              </div>
            </div>

            <div className="contact-socials">
              <p>Follow me on social media</p>
              <div className="social-icons">
                <a href="https://github.com/Jpangi" className="social-icon" target="_blank" rel="noopener noreferrer" title="GitHub">⌥</a>
                <a href="https://www.linkedin.com/in/jacob-pangilinan/" className="social-icon" title="LinkedIn">in</a>
                <a href="#" className="social-icon" title="Twitter">𝕏</a>
              </div>
            </div>
          </div>

          <div className="contact-form-card">
            <div className="contact-form-row">
              <div className="form-group">
                <label>Your Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                />
              </div>
              <div className="form-group">
                <label>Your Email</label>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  type="email"
                />
              </div>
            </div>

            <div className="form-group">
              <label>Subject</label>
              <input
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Project Inquiry"
              />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
              />
            </div>

            <button className="btn-primary btn-send" onClick={handleSubmit}>
              Send Message →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;