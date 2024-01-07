import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import '../styles/about.css';

class About extends React.Component {
  render() {
    return (
      <div id="about" className="about">
        <h1 className="title">About Me</h1>
        <div className="intro-text">
          <h2 className="about-details">Hi, I'm a 4th year Computer Science student at Simon Fraser University. I'm passionate about everything software related and love to to create meaningful projects. Seeking for my 3rd internship, I would love to bring my talent to a company that strives to create a positive impact and values their work!</h2>
          <h2 className="about-connect">Feel free to connect with me or reach out to discuss opportunities, sharing insights or explore new collaborations together!</h2>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/harisahmad16/" target="_blank" rel="noopener noreferrer" className="linkedin-icon">
              <FontAwesomeIcon icon={faLinkedin} size="9x" style={{ color: '#0077B5' }} />
            </a>
            <a href="https://github.com/HarisAhmad16" target="_blank" rel="noopener noreferrer" className="github-icon">
              <FontAwesomeIcon icon={faGithub} size="9x" style={{ color: '#ffffff' }} />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
