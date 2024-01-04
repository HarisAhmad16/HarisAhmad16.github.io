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
          <h2 className="exptitle">Work Experience</h2>
          <Section
            heading="COAST CAPITAL SAVINGS"
            subheading="Software Developer Intern"
            details="As a member of the Core Banking Team, I had the opportunity to explore and deepen my understanding of the software responsible for managing our banking transactions and accounts. I actively contributed by performing various data fixes that addressed numerous financial impacts across different database records. In this role, I created Python scripts to export and evaluate monetary values in CSV format, enabling me to generate solutions and gather key insights for the business. I developed multi-threaded programs designed to check and resolve more than 100,000 incorrect credit card statuses. Also, I had the opportunity to expand my knowledge of APIs through one-on-one sessions which allowed me to apply this knowledge in correcting interest payment errors in the core banking system by configuring the penalty rate API, resolving incorrect charges for 1200 bank members."
            imageUrl={ccs}
          />
          <Section
            heading="ARTICLE"
            subheading="Full Stack Software Engineer Intern"
            details="As a member of the Warehouse Team, I participated in all areas of the software development lifecycle, including building solutions for web storefronts and internal supply chain applications, as well as creating test automation suites. The main project I worked on involved deploying a tool on an RF Scanner to address box-scanning issues for warehouse workers. I utilized various technologies such as Vue, TypeScript, Java, Spring Boot, Apache Kafka, and Docker. The tool's development was guided by Figma prototypes from the UI/UX team and tested using Jest and JUnit. I also had the opportunity to delve deeper into the business architectures and gain a more thorough understanding of the migration process from a Monolithic to Microservices architecture."
            imageUrl={article}
          />
        </div>
      </div>
    );
  }
}

export default Experience;
