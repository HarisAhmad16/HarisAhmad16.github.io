import React from "react";
import '../styles/experience.css';
import Section from "./Section";
import ccs from '../images/ccs.jpg'
import article from '../images/article.jpg'

class Experience extends React.Component {
  render() {
    return (
      <div id="experience" className="experience">
        <div>
          <h2>Work Experience</h2>
          <Section
            heading="COAST CAPITAL SAVINGS"
            subheading="Software Developer"
            details="Software Developer"
            imageUrl={ccs}
          />
          <Section
            heading="ARTICLE"
            subheading="Full Stack Software Engineer"
            details="Full Stack Software Engineer"
            imageUrl={article}
          />
        </div>
      </div>
    );
  }
}

export default Experience;
