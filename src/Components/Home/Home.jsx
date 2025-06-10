import React from "react";
import {
  FaStar,
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaEnvelope,
  FaDesktop,
  FaCode,
} from "react-icons/fa";
import { FaPython, FaReact } from "react-icons/fa";
import "./Home.css";

const Home = () => {
  return (
    <section className="home-section" id="home">
      <div className="container">
        <div className="home-grid">
          {/* Left Content */}
          <div className="left-content">
            <div className="tagline">
              <FaStar className="icon" />
              <span>Let's build something amazing</span>
            </div>

            <div className="heading-wrapper">
              <h1>
                Transforming <br />
                <span className="highlight">Ideas</span> into <br />
                Digital <span className="highlight">Experiences</span>
              </h1>
              <p>
                I'm VEERU, a passionate full stack web developer focused on
                building responsive, user-centric applications with clean,
                maintainable code. I turn complex problems into elegant
                solutions.
              </p>
            </div>

            <div className="buttons">
              <a
                href="https://drive.google.com/file/d/1Qiuxa3LUS1uvZpe7IdLH4bqOnLJq2Pp-/view?usp=sharing"
                className="btn primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV →
              </a>
              <a href="#contact" className="btn secondary">
                Contact Me
              </a>
            </div>

            <div className="features-grid">
              <a
                href="https://github.com/VeeruBhai77"
                target="_blank"
                rel="noopener noreferrer"
                className="feature"
              >
                <div className="feature-icon bg-black">
                  <FaGithub className="social" />
                </div>
                <p>GitHub</p>
              </a>
              <a
                href="https://www.linkedin.com/in/veeresh-b-b88531299/"
                target="_blank"
                rel="noopener noreferrer"
                className="feature"
              >
                <div className="feature-icon bg-linkedin">
                  <FaLinkedinIn className="social" />
                </div>
                <p>LinkedIn</p>
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="feature"
              >
                <div className="feature-icon bg-twitter">
                  <FaTwitter className="social" />
                </div>
                <p>Twitter</p>
              </a>
              <a
                href="mailto:veereshbaitigeri143@gmail.com"
                className="feature"
              >
                <div className="feature-icon bg-red">
                  <FaEnvelope className="social" />
                </div>
                <p>Email</p>
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="right-content">
            <div className="image-wrapper">
              <div className="image-bg"></div>
              <img
                src="https://res.cloudinary.com/dqhk94co9/image/upload/v1747374860/ChatGPT_Image_May_15__2025__07_00_18_PM-removebg-preview_tuxjh7.png"
                alt="Profile"
                className="profile-image"
                loading="lazy"
              />
              <div className="badge frontend">
                Frontend <FaDesktop className="badge-icon frontend-icon" />
              </div>
              <div className="badge backend">
                Backend <FaCode className="badge-icon backend-icon " />
              </div>
              <div className="badge python">
                Python <FaPython className="badge-icon python-icon" />
              </div>
              <div className="badge react">
                React <FaReact className="badge-icon react-icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
