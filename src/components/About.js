import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import '../styles/about.css';

class About extends React.Component {
  render() {
    return (
      <div id="about" className="about">
        <div class="aboutcard">
          <h1 className="title">About Me</h1>
          <div class="line"></div>
          <h3 className="details">
            Hello! I'm a dedicated fourth-year Computer Science student at Simon Fraser University actively seeking my third software engineering internship. My academic journey has been enriched by a variety of courses, and the experiences within the teams I've worked with have been instrumental in shaping my current skill set. My passion for technology extends beyond the classroom, as I am keen on staying up to date with the latest developments in the field. I am actively seeking opportunities to contribute my skills and enthusiasm to a company that will allow me to grow and learn as a Software Engineer.
          </h3>

          <h3 className="lowdetails">
            Feel free to connect with me or reach out to discuss opportunities, sharing insights or explore new collaborations together!
          </h3>
          <div className="social-icons">
            <a href="mailto:mha149@sfu.ca" className="mail-icon">
              <FontAwesomeIcon icon={faEnvelope} size="4x" />
            </a>
            <a href="https://www.linkedin.com/in/harisahmad16/" target="_blank" rel="noopener noreferrer" className="linkedin-icon">
              <FontAwesomeIcon icon={faLinkedin} size="4x" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
