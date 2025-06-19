import React, { useState, useEffect } from "react";
import "./AboutMe.css";

const tabData = {
  education: (
    <ul className="about-tab-list">
      <li className="about-tab-item">
        <h4 className="about-tab-title">
          Bachelor of Science in Mathematics, Statistics, and Accounts
        </h4>
        <span className="about-tab-date">
          Government College (Autonomous), Anantapuramu (2019–2022)
        </span>
        <p className="about-tab-text">CGPA: 7.89</p>
      </li>
      <li className="about-tab-item">
        <h4 className="about-tab-title">
          Pre-University Course in Mathematics, Economics, and Commerce
        </h4>
        <span className="about-tab-date">
          A.P Model School Junior College, C. Belegal (2017–2019)
        </span>
        <p className="about-tab-text">CGPA: 6.92</p>
      </li>
      <li className="about-tab-item">
        <h4 className="about-tab-title">Secondary School Education (SSC)</h4>
        <span className="about-tab-date">
          Z.P.H. School, Waddepally, Telangana (2016–2017)
        </span>
        <p className="about-tab-text">GPA: 7.8</p>
      </li>
    </ul>
  ),
  experience: (
    <ul className="about-tab-list">
      <li className="about-tab-item">
        <h4 className="about-tab-title">
          Full-Stack Developer (Training & Projects)
        </h4>
        <span className="about-tab-date">
          Self-Learning & Course Work (2022–Present)
        </span>
        <p className="about-tab-text">
          Completed a full-stack development course focused on React, Node.js,
          Express, and MongoDB. Gained strong practical skills by building
          multiple hands-on projects such as a personal finance tracker, code
          snippet manager, and portfolio website.
        </p>
      </li>
      <li className="about-tab-item">
        <h4 className="about-tab-title">Independent Project Builder</h4>
        <span className="about-tab-date">
          Personal Development (2023–Present)
        </span>
        <p className="about-tab-text">
          Focused on building real-world web applications to apply and improve
          development skills. Created and maintained full-stack projects with
          features like user authentication, CRUD operations, responsive UI, and
          local storage integration.
        </p>
      </li>
    </ul>
  ),

  interests: (
    <ul className="about-tab-list">
      <li className="about-tab-item">
        <h4 className="about-tab-title">Technical:</h4>
        <p className="about-tab-text">
          Full-Stack Web Development, HTML, CSS, JavaScript, React, Node.js,
          Python, API Development, Project Building, and Problem Solving.
        </p>
      </li>
      <li className="about-tab-item">
        <h4 className="about-tab-title">Personal:</h4>
        <p className="about-tab-text">
          I enjoy watching and playing cricket, creating content on YouTube,
          exploring new tech tools, watching developer and AI-related videos,
          and constantly learning new technologies and frameworks.
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
              Frontend Project Experience
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
