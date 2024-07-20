import React from "react";
import "./Projects.css";

function Project({ title, description, image, websiteLink, githubLink }) {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-img-top" />
      <div className="card1-body">
        <h5 className="card1-title">{title}</h5>
        <p className="card1-text">{description}</p>
        <a
          href={websiteLink}
          className="card1-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          View
        </a>
        <a
          href={githubLink}
          className="card1-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}

export default Project;
