import React from "react";
import "./Skills.css";

const skills = [
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  // {
  //   name: "MongoDB",
  //   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  // },
];

export default function Skills() {
  return (
    <section className="skills-section" id="skills">
      <h2 className="section-title">
        My <span className="highlight">Skills</span>
      </h2>
      <p className="section-subtitle">Technologies I work with</p>

      <div className="skills-wrapper">
        <div className="skills-fade-left"></div>
        <div className="skills-container">
          <div className="skills-track">
            {[...skills, ...skills].map((skill, index) => (
              <div className="skill-item" key={index}>
                <img src={skill.icon} alt={skill.name} />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="skills-fade-right"></div>
      </div>
    </section>
  );
}
