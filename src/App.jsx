
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "./App.css";
import myPhoto from "./assets/dk.png";
import githubIcon from "./assets/github.png";
import linkedinIcon from "./assets/linkedin.png";

function App() {
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    let lastScroll = window.scrollY;

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="main-container">

      {/* NAVBAR */}
      <nav
        className={`navbar ${
          showNavbar ? "navbar-show" : "navbar-hide"
        }`}
      >
        <h1 className="logo">DK</h1>

       <ul className="nav-links">

  <li
    onClick={() =>
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }
  >
    Home
  </li>

  <li
    onClick={() =>
      document
        .getElementById("about")
        .scrollIntoView({
          behavior: "smooth",
        })
    }
  >
    About
  </li>

  <li
    onClick={() =>
      document
        .getElementById("skills")
        .scrollIntoView({
          behavior: "smooth",
        })
    }
  >
    Skills
  </li>

  <li
    onClick={() =>
      document
        .getElementById("projects")
        .scrollIntoView({
          behavior: "smooth",
        })
    }
  >
    Projects
  </li>

  <li
    onClick={() =>
      document
        .getElementById("contact")
        .scrollIntoView({
          behavior: "smooth",
        })
    }
  >
    Contact
  </li>

</ul>
      </nav>

      {/* HERO SECTION */}
      <section className="hero-section">

        <div className="hero-container">

          {/* IMAGE */}
          <motion.div
            className="image-section"
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              src={myPhoto}
              alt="Dhinesh Kumar"
              className="profile-image"
            />
          </motion.div>

          {/* CONTENT */}
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2>Hello, I'm</h2>

            <h1>DHINESH KUMAR K</h1>

            <h3>FULL STACK DEVELOPER</h3>

            <p>
              Passionate Full Stack Developer focused on
              building modern, responsive and high-performance
              web applications with clean UI and powerful
              backend systems.
            </p>

            <div className="hero-buttons">

  <button
    className="primary-btn"
    onClick={() =>
      document
        .getElementById("projects")
        .scrollIntoView({ behavior: "smooth" })
    }
  >
    View Projects
  </button>

  <button
    className="secondary-btn"
    onClick={() =>
      document
        .getElementById("contact")
        .scrollIntoView({ behavior: "smooth" })
    }
  >
    Contact Me
  </button>

  <a
    href="/resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="resume-btn"
  >
    Resume
  </a>

</div>
          </motion.div>

        </div>

      </section>

      {/* ABOUT */}
      <section id="about" className="about-section">

        <motion.div
          className="about-card"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2>About Me</h2>

          <p>
            I am a Full Stack Developer who enjoys
            creating modern web applications and
            engaging digital experiences. I focus on
            frontend development, backend systems,
            APIs and database management.
          </p>
        </motion.div>

      </section>

      {/* SKILLS */}
      <section id="skills" className="skills-section">

        <h2>Skills</h2>

        <div className="skills-grid">

          <div className="skill-box">HTML</div>
          <div className="skill-box">CSS</div>
          <div className="skill-box">Java</div>
          <div className="skill-box">JavaScript</div>
          <div className="skill-box">React</div>
          <div className="skill-box">Spring Boot</div>
          <div className="skill-box">MySQL</div>
          <div className="skill-box">GitHub</div>

        </div>

      </section>

      {/* PROJECTS */}
      <section id="projects" className="project-section">

        <h2>Projects</h2>

        <div className="project-grid">

          <motion.div
            className="project-card"
            whileHover={{ scale: 1.05 }}
          >
            <h3>E-Commerce Website</h3>

            <p>
              Shopping website with authentication,
              product filtering and cart management.
            </p>
          </motion.div>

          <motion.div
            className="project-card"
            whileHover={{ scale: 1.05 }}
          >
            <h3>Portfolio Website</h3>

            <p>
              Interactive portfolio website with
              responsive design and animations.
            </p>
          </motion.div>

          <motion.div
            className="project-card"
            whileHover={{ scale: 1.05 }}
          >
            <h3>Department Store App</h3>

            <p>
              Full stack application built using
              React, Node.js and MongoDB.
            </p>
          </motion.div>

        </div>

      </section>

      {/* CONTACT */}
      <section id="contact" className="contact-section">

  <h2>Let's Connect</h2>

  <p>📞 Phone: +91 9566950257</p>

  <p>📧 Email: dhineshkumarkd10@gmail.com</p>

  <div className="social-icons">

    <a
      href="https://github.com/dhineshkumardk-git"
      target="_blank"
      rel="noreferrer"
    >
      <img
        src={githubIcon}
        alt="GitHub"
        className="social-icon"
      />
    </a>

    <a
      href="https://www.linkedin.com/in/dhinesh-kumar-k-6b416037b/"
      target="_blank"
      rel="noreferrer"
    >
      <img
        src={linkedinIcon}
        alt="LinkedIn"
        className="social-icon"
      />
    </a>

  </div>

</section>

    </div>
  );
}

export default App;

