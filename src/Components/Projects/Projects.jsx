import React, { useState, useEffect } from "react";
import feather from "feather-icons";
import "./Projects.css";

// Project data
const projectData = [
  {
    title: "Portfolio Website",
    desc: "A clean and minimalist portfolio website to showcase projects and skills.",
    category: ["react", "html-css-js"], // ✅ Updated to support multiple categories
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    image:
      "https://res.cloudinary.com/dqhk94co9/image/upload/v1747643080/ScreenShot_Tool_-20250519135156_ush76t.png",
    languages: "React",
    methods: "Flexbox, CSS Grid, Responsive Design",
    demo: "https://your-portfolio-demo.com",
    code: "https://github.com/yourusername/portfolio-website",
  },
  {
    title: "Weather App",
    desc: "Weather application using the OpenWeather API with vanilla JavaScript.",
    category: "html-css-js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    image:
      "https://res.cloudinary.com/dqhk94co9/image/upload/v1749276686/Screenshot_2025-06-07_114054_glmqyy.png",
    languages: "HTML, CSS, JavaScript",
    methods: "API Integration, Responsive Design",
    demo: "https://weathernova-html-css-js.netlify.app/",
    code: "https://codepen.io/Veeresh-Baitigeri/pen/xbGLrWa",
  },
  {
    title: "Food Munch-Restaurant Website",
    desc: "A responsive website for a food delivery service...",
    category: "html-css-bootstrap",
    icon: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/food-munch-img.png",
    image:
      "https://res.cloudinary.com/dqhk94co9/image/upload/v1749270375/Screenshot_2025-06-07_095455_wjmez3.png",
    languages: "HTML, CSS, Bootstrap, JavaScript",
    methods:
      "Responsive Design, Bootstrap Components, CSS Styling, Basic JavaScript for Modal",
    demo: "https://veereshfoodmunh.ccbp.tech/",
    code: "https://codepen.io/Veeresh-Baitigeri/pen/emNEEvb",
  },
  {
    title: "Aha Interface Clone",
    desc: "A pixel-perfect clone of the Aha.io interface using HTML, CSS, and JavaScript.",
    category: "html-css-js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    image:
      "https://res.cloudinary.com/dqhk94co9/image/upload/v1747639817/veereshaha.ccbp.tech__Nest_Hub_Max_h8o4oy.png",
    languages: "HTML, CSS, JavaScript",
    methods: "Responsive Design, Flexbox, CSS Grid",
    demo: "https://veereshaha.ccbp.tech/",
    code: "https://codepen.io/Veeresh-Baitigeri/pen/ByyEgMj",
  },
  {
    title: "Guess The Number",
    desc: "A fun number guessing game using JavaScript DOM manipulation.",
    category: "html-css-js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    image:
      "https://res.cloudinary.com/dqhk94co9/image/upload/v1749280033/Screenshot_2025-06-07_123650_wqkfqv.png",
    languages: "HTML, CSS, JavaScript",
    methods: "DOM Manipulation, Math.random, Conditional Logic",
    demo: "https://tryguessing.ccbp.tech/",
    code: "https://codepen.io/Veeresh-Baitigeri/pen/gbpxxeR",
  },
  {
    title: "Showroom Website (Cars & Bikes)",
    desc: "Responsive showroom website with theme toggle and listing features.",
    category: "html-css-js-bootstrap",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    image:
      "https://res.cloudinary.com/dqhk94co9/image/upload/v1749281569/Screenshot_2025-06-07_130028_ilsiz1.png",
    languages: "HTML, CSS, JavaScript, Bootstrap",
    methods: "Theme Switching, Grid Layout, Font Awesome",
    demo: "https://veereshcarsglo.ccbp.tech/",
    code: "https://codepen.io/Veeresh-Baitigeri/pen/pvJrWQj",
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    feather.replace();
  }, [activeCategory, showAll]);

  // Category filtering: support both string and array
  const filteredProjects =
    activeCategory === "all"
      ? projectData
      : projectData.filter((project) => {
          if (Array.isArray(project.category)) {
            return project.category.includes(activeCategory);
          }
          return project.category === activeCategory;
        });

  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 3);

  return (
    <section className="portfolio-section" id="portfolio">
      <div className="container">
        <h2 className="section-title">My Projects</h2>

        <div className="tabs">
          <button
            className={`tab-btn ${activeCategory === "all" ? "active" : ""}`}
            onClick={() => {
              setActiveCategory("all");
              setShowAll(false);
            }}
          >
            All Projects
          </button>
          <button
            className={`tab-btn ${
              activeCategory === "html-css-js" ? "active" : ""
            }`}
            onClick={() => {
              setActiveCategory("html-css-js");
              setShowAll(false);
            }}
          >
            HTML-CSS-JS
          </button>
          <button
            className={`tab-btn ${activeCategory === "react" ? "active" : ""}`}
            onClick={() => {
              setActiveCategory("react");
              setShowAll(false);
            }}
          >
            REACT
          </button>
        </div>

        <div className="projects-grid">
          {displayedProjects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.desc}</p>
                <div className="project-tech">
                  <div className="tech-item">
                    <span className="tech-label">Languages: </span>
                    <span className="tech-value">{project.languages}</span>
                  </div>
                  <div className="tech-item">
                    <span className="tech-label">Tech Stack: </span>
                    <span className="tech-value">{project.methods}</span>
                  </div>
                </div>
                <div className="project-links">
                  <a
                    href={project.demo}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i data-feather="external-link"></i> Live Demo
                  </a>
                  <a
                    href={project.code}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i data-feather="code"></i> Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length > 3 && (
          <div className="view-more-wrapper">
            <button
              className="view-more-btn"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "View Less" : "View More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
