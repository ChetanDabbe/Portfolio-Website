import React from "react";
import "./App.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from "./components/Navbar";
import Chetan from "./images/Chetan.jpeg";
import About from "./components/About.jsx";
import Skill from "./components/Skill.jsx";
import Project from "./components/Projects.jsx";
// import Footer from "./components/Footer.jsx";
import image from "./images/golden.png";
import image_p from "./images/Portfolio.png";
import bank_i from "./images/bank.png";
import real from "./images/real_estate.jpg";
import Contact from "./components/Contacts.jsx";

const projects = [
  {
    title: "Personal Portfolio",
    description:
      "A personal portfolio showcasing my projects, skills and creative journey. Built with HTML, CSS, Javascript, React and Node.js",
    image: image_p,
    websiteLink: "https://example.com",
    githubLink: "https://github.com/example",
  },
  {
    title: "Golden Days Universal School",
    description:
      "Website for School using HTML, CSS, JavaScript, Bootstrap, Node.js, MongoDB",
    image: image,
    websiteLink: "https://golden-days-universal-school.onrender.com/",
    githubLink:
      "https://github.com/ChetanDabbe/Golden-Days-Universal-School/tree/master",
  },
  {
    title: "Real Estate Price Prediction",
    description:
      "Predicting real estate prices using Python with Pandas, Scikit-learn, and NumPy.",

    image: real,
    websiteLink: "https://example.com",
    githubLink: "https://github.com/ChetanDabbe/Real-Estate-Price-Prediction",
  },
  {
    title:"Bank Statement Analyzer",
    description:"Analyzing bank statements to extract insights and categorize transactions using HTML, CSS, MySQL, Django",
    image:bank_i,
    websiteLink: "https://example.com",
    githubLink: "https://github.com/ChetanDabbe/Bank-Statement-Analyzer",
  },
];

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <div className="frame2">
          <div className="details">
            <p id="firstLine">&nbsp;Hi, I am</p>
            <h1 style={{ color: "#00FFFF" }} className="animated-heading">Chetan Dabbe</h1>
            <h3 style={{ color: "#FF8C73" }}>Web Developer & DSA Enthusiast</h3>
            <p style={{ textAlign: "justify" }}>
              Innovative Full Stack Developer with expertise in building dynamic
              web applications and optimizing user experiences. Skilled in both
              front-end and back-end technologies, with a strong foundation in
              data structures for efficient algorithm development and
              problem-solving.
            </p>
          </div>
          <div className="photo">
            <img src={Chetan} alt="Chetan Dabbe" id="image1" />
          </div>
        </div>
        <div id="about_cont">
        <About />
        </div>
        
        <div id="skill_cont">
        <Skill />
        </div>

        <div className="main" id="project_cont">
          <h1>Projects</h1>
          <div className="projects-container">
            {projects.map((project, index) => (
              <Project
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
                websiteLink={project.websiteLink}
                githubLink={project.githubLink}
              />
            ))}
          </div>
        </div>
        <div id="Contact">
            <Contact/>
        </div>
      </div>
    </>
  );
}

export default App;
