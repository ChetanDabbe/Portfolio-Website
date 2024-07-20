import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const handleToggleMobileNav = () => {
    setShowMobileNav(!showMobileNav);
  };

  const handleDownload = async () => {
    try {
      const response = await fetch("https://chetan-dabbe-backend.onrender.com/download");
      const blob = await response.blob();

      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "Chetan_resume.pdf");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading resume:", error);
    }
  };

  const closeMobileNav = () => {
    setShowMobileNav(false);
  };

  return (
    <>
      <nav>
        <div className="navbar">
          <div className="nav-links">
            <a href="/">Home</a>
            <a href="#about_cont">About Me</a>
            <a href="#skill_cont">Skills</a>
            <a href="#project_cont">Projects</a>
            <a href="#Contact">Contact me</a>
          </div>
          <button className="resume-button" onClick={handleDownload}>
            Resume
          </button>
        </div>
        <div className="menu-btn" onClick={handleToggleMobileNav}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            className="center-icon"
          >
            <path
              fill="currentColor"
              d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
            />
          </svg>
          </div>
        {showMobileNav && (
          <div className="nav-mobile">
            <a href="/" onClick={closeMobileNav}>Home</a>
            <a href="#about_cont" onClick={closeMobileNav}>About Me</a>
            <a href="#skill_cont" onClick={closeMobileNav}>Skills</a>
            <a href="#project_cont" onClick={closeMobileNav}>Projects</a>
            <a href="#Contact" onClick={closeMobileNav}>Contact me</a>
            <button className="resume-button2" onClick={handleDownload}>
              Resume
            </button>
          </div>
          
        )}
      </nav>
    </>
  );
}

export default Navbar;
