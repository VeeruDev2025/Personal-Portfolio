import React, { useState, useEffect } from "react";
import feather from "feather-icons";
import "./Projects.css";

// Sample projects data
const projectData = [
  {
    title: "Portfolio Website",
    desc: "A clean and minimalist portfolio website to showcase projects and skills.",
    category: "html-css-js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    image:
      "https://res.cloudinary.com/dqhk94co9/image/upload/v1747643080/ScreenShot_Tool_-20250519135156_ush76t.png",
    languages: "HTML, CSS, JavaScript",
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
    desc: "A responsive website for a food delivery service, highlighting why to choose them, an explore menu section, and delivery and payment options.",
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
    desc: "A fun number guessing game using JavaScript DOM manipulation and random number logic.",
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
    title: "Showroom Website (Cars & Bikes) with Theme Toggle",
    desc: "A responsive vehicle showroom website featuring car and bike listings, worker profiles, a contact section, and a user-switchable light and dark theme.",
    category: "html-css-js-bootstrap",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    image:
      "https://res.cloudinary.com/dqhk94co9/image/upload/v1749281569/Screenshot_2025-06-07_130028_ilsiz1.png",
    languages: "HTML, CSS, JavaScript, Bootstrap",
    methods:
      "Responsive Design, Flexbox, CSS Grid (implied by layout), Font Awesome, Cloudinary, JavaScript Theme Switching (Light/Dark Mode)",
    demo: "https://veereshcarsglo.ccbp.tech/",
    code: "https://codepen.io/Veeresh-Baitigeri/pen/pvJrWQj",
  },
  {
    title: "ToDo List",
    desc: "A simple and interactive ToDo list app to manage daily tasks efficiently.",
    category: "html-css-js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
    languages: "HTML, CSS, JavaScript",
    methods: "DOM Manipulation, Local Storage",
    demo: "https://your-todo-list-demo.com",
    code: "https://github.com/yourusername/todo-list",
  },
  {
    title: "Recipe Finder",
    desc: "An interactive recipe finder app that allows users to search and view recipes with images.",
    category: "html-css-js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    languages: "HTML, CSS, JavaScript",
    methods: "DOM Manipulation, Image URLs, Search Filtering",
    demo: "https://your-recipe-finder-demo.com",
    code: "https://github.com/yourusername/recipe-finder",
  },
  {
    title: "Interactive Quiz",
    desc: "A timed quiz app with multiple-choice questions and score tracking.",
    category: "html-css-js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    image:
      "https://images.unsplash.com/photo-1584697964154-0d2c8e0e4f68?auto=format&fit=crop&w=800&q=80",
    languages: "HTML, CSS, JavaScript",
    methods: "DOM Manipulation, Event Handling, Timer",
    demo: "https://your-interactive-quiz-demo.com",
    code: "https://github.com/yourusername/interactive-quiz",
  },
];

const Projects = () => {
  // State for active category tab
  const [activeCategory, setActiveCategory] = useState("all");
  // State to control showing all projects or just first 3
  const [showAll, setShowAll] = useState(false);

  // Initialize feather icons every time activeCategory or showAll changes
  useEffect(() => {
    feather.replace();
  }, [activeCategory, showAll]);

  // Filter projects based on activeCategory
  const filteredProjects =
    activeCategory === "all"
      ? projectData
      : projectData.filter((p) => p.category === activeCategory);

  // Decide which projects to display depending on showAll toggle
  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 3);

  return (
    <section className="portfolio-section" id="portfolio">
      <div className="container">
        <h2 className="section-title">My Projects</h2>

        {/* Tabs for filtering projects by category */}
        <div className="tabs">
          <button
            className={`tab-btn ${activeCategory === "all" ? "active" : ""}`}
            onClick={() => {
              setActiveCategory("all");
              setShowAll(false); // Reset showAll when switching tabs
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
              setShowAll(false); // Reset showAll when switching tabs
            }}
          >
            HTML-CSS-JS
          </button>
          <button
            className={`tab-btn ${activeCategory === "react" ? "active" : ""}`}
            onClick={() => {
              setActiveCategory("react");
              setShowAll(false); // Reset showAll when switching tabs
            }}
          >
            REACT
          </button>
        </div>

        {/* Grid container for projects */}
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

        {/* Conditionally show "View More" button if more than 3 projects */}
        {filteredProjects.length > 3 && (
          <div className="view-more-wrapper">
            {/* View More / View Less button toggles showAll state */}
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
