import { createRoot } from "react-dom/client";
import profile from "./assets/images/profile.png";
document.addEventListener("DOMContentLoaded", () => {
  const nav = (
    <nav className="nav-container">
      <h4 className="dev-name">Raymarc Ariem</h4>
      <ul className="nav-list">
        <li className="nav-item">
          <a href="#" className="nav-link">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Project
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            About
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
  const hero = (
    <div className="hero-container">
      <div id="about-me" className="about-container">
        <h1>
          Hey, <br /> I'm Raymarc Dela Fuente Ariem
        </h1>
        <p>
          - a{" "}
          <b>
            3rd year Bachelor of Science in Information Technology at Isabela
            State University (ISU)
          </b>
          , <b>Jones Campus</b>, with a passion for software development and a
          drive to learn. As a student and aspiring developer, I've been working
          on various projects, to hone my skills and make a meaningful impact in
          the tech world.
        </p>
        <button
          className="scroll-btn"
          onClick={() => {
            const aboutSection = document.getElementById("about-me");
            if (aboutSection) {
              aboutSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          Learn More
        </button>
      </div>
      <div className="profile-container">
        <img src={profile} alt="Profile" className="profile-pic" />
      </div>
    </div>
  );
  createRoot(document.querySelector("header")).render(nav);
  createRoot(document.getElementById("root")).render(hero);
});
