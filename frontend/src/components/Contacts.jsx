import React, { useState } from "react";
import axios from "axios";
import "./Contacts.css";
import GitHubLogo from "../images/github.jpg";
import LinkedInLogo from "../images/linkedin.jpg";
import LeetCodeLogo from "../images/leetcode.jpg";
import GeeksLogo from "../images/gfg.jpg";

function Contacts() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [notification, setNotification] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://chetan-dabbe-backend.onrender.com/send-email", formData);
      console.log(response.data);  
      setFormData({ name: "", email: "", message: "" });
      setNotification("Email sent successfully!");
      setTimeout(() => {
        setNotification(null);
      }, 7000);  // Hide the notification after 3 seconds
    } catch (error) {
      console.error("Error sending email:", error);
      setNotification("Failed to send email. Please try again later.");
    }
  };

  return (
    <div className="mainCont">
      <h1 style={{ textAlign: "center", color: "#ffcc00" }}>Contact me</h1>
      {notification && <div className="notification">{notification}</div>}
      <div className="container">
        <div className="left_cont">
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <br />
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <br />

            <label htmlFor="email">Your Email</label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <br />

            <label htmlFor="message">Message (Optional)</label>
            <br />
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <br />

            <button type="submit">Send</button>
          </form>
        </div>
      </div>
      <div className="footer">
        <p className="logo-name">CHETAN DABBE</p>
        <div className="footer-links">
          <a href="https://github.com/ChetanDabbe">
            <img src={GitHubLogo} alt="GitHub" className="images" />
          </a>
          <a
            href="https://www.linkedin.com/in/chetan-dabbe-0ba454252/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={LinkedInLogo} alt="LinkedIn" className="images" />
          </a>
          <a
            href="https://leetcode.com/u/ChetanDabbe25/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={LeetCodeLogo} alt="LeetCode" className="images" />
          </a>
          <a
            href="https://www.geeksforgeeks.org/user/chetanda0fpc/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={GeeksLogo} alt="Geeks for Geeks" className="images" />
          </a>
        </div>
        <p>&copy; 2024. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Contacts;
