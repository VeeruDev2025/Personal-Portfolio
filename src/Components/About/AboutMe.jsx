import React, { useState, useEffect } from "react";
import "./AboutMe.css";

const tabData = {
  education: (
    <ul className="about-tab-list">
      <li className="about-tab-item">
        <h4 className="about-tab-title">
          Bachelor of Engineering in Computer Science
        </h4>
        <span className="about-tab-date">
          XYZ Institute of Technology (2018–2022)
        </span>
        <p className="about-tab-text">
          Focused on web development, databases, and software engineering
          principles.
        </p>
      </li>
      <li className="about-tab-item">
        <h4 className="about-tab-title">Online Certifications</h4>
        <span className="about-tab-date">Coursera & Udemy (2022–2023)</span>
        <p className="about-tab-text">
          Completed courses in React, Node.js, and Python for advanced web
          development.
        </p>
      </li>
    </ul>
  ),
  experience: (
    <ul className="about-tab-list">
      <li className="about-tab-item">
        <h4 className="about-tab-title">Full-Stack Web Developer</h4>
        <span className="about-tab-date">Freelance (2023–Present)</span>
        <p className="about-tab-text">
          Developed responsive web applications using React, Node.js, and
          MongoDB.
        </p>
      </li>
      <li className="about-tab-item">
        <h4 className="about-tab-title">Junior Developer</h4>
        <span className="about-tab-date">Tech Startup (2022–2023)</span>
        <p className="about-tab-text">
          Built and maintained RESTful APIs and optimized frontend performance.
        </p>
      </li>
    </ul>
  ),
  interests: (
    <ul className="about-tab-list">
      <li className="about-tab-item">
        <h4 className="about-tab-title">Technical:</h4>
        <p className="about-tab-text">
          React, Python, Cloud Computing, Open-Source Contribution
        </p>
      </li>
      <li className="about-tab-item">
        <h4 className="about-tab-title">Personal:</h4>
        <p className="about-tab-text">
          Photography, Trekking, Reading Tech Blogs, Gaming
        </p>
      </li>
    </ul>
  ),
};

export default function About() {
  const [activeTab, setActiveTab] = useState("education");

  // Scroll animation effect for fade-in
  useEffect(() => {
    function handleScroll() {
      const fadeInElements = document.querySelectorAll(".fade-in");
      fadeInElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.classList.add("visible");
        }
      });
    }
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // trigger on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          {/* Image Section */}
          <div className="about-image-wrapper fade-in">
            <div className="about-image-bg"></div>
            <img
              src="https://res.cloudinary.com/dqhk94co9/image/upload/v1747409824/ChatGPT_Image_May_15__2025__07_00_18_PM-removebg-preview77_iw1x68.png"
              alt="Veeru"
              className="about-profile-img"
              loading="lazy"
            />
            <div className="about-badge about-badge-project">
              <span className="about-badge-number">50+</span> Projects
            </div>
            <div className="about-badge about-badge-cert">
              <svg className="about-icon-cert" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12 2a10 10 0 0 0-8.84 14.67l-2.52 2.52a1 1 0 0 0 0 1.41 1 1 0 0 0 1.41 0l2.52-2.52A10 10 0 1 0 12 2zm-1 14h2v2h-2zm2.55-2.95l-.71-.71A2 2 0 0 1 12 11v-1h-2v1a4 4 0 0 0 1.46 3.05l.71.71H10v2h4v-2z"
                />
              </svg>
              Certified Full-Stack
            </div>
          </div>

          {/* Content Section */}
          <div className="about-content-section fade-in">
            <div className="about-subheading">
              <span className="about-subheading-line"></span> About Me
            </div>
            <h1 className="about-heading">
              Who is <span className="about-highlight">Veeru</span>?
            </h1>
            <p className="about-description">
              I'm Veeru, a passionate full-stack web developer with a knack for
              turning ideas into seamless digital experiences. Specializing in
              React, Python, and modern web technologies, I build responsive,
              user-centric applications with clean, maintainable code.
            </p>

            {/* Tabs */}
            <div className="about-tabs-wrapper">
              <div className="about-tab-buttons">
                {Object.keys(tabData).map((tab) => (
                  <button
                    key={tab}
                    className={`about-tab-button ${
                      activeTab === tab ? "active" : ""
                    }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>

              <div className="about-tab-content">{tabData[activeTab]}</div>
            </div>

            <a
              href="https://drive.google.com/uc?export=download&id=1Qiuxa3LUS1uvZpe7IdLH4bqOnLJq2Pp-"
              className="about-cv-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="about-cv-icon" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M5 20h14v-2H5v2zm7-18l-7 7h4v6h6v-6h4l-7-7z"
                />
              </svg>
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
