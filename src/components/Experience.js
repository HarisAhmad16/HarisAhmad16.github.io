import React from "react";
import '../styles/experience.css';
import Section from "./Section";
import ccs from '../images/ccs.jpg'
import article from '../images/article.jpg'
import bgc from '../images/bgc.jpeg'
import prince from '../images/prince.png'
import dd from '../images/dailydime.png'
import ct from '../images/consumable.png'

class Experience extends React.Component {
  render() {
    return (
      <div id="experience" className="experience">
        <div>
          <h2 className="exptitle">Work Experience</h2>
          <Section
            heading="Coast Capital Savings"
            subheading="Software Developer Co-op"
            details={[
              "Developed a multi-threaded program to analyze over 100,000 credit card statuses, resulting in a condition correction for all stolen, damaged, inactive, or lost credit cards",
              "Created scripts in Python that evaluated and exported banking data into CSV files to help underly the businesses current needs and a variety of differences of monetary value",
              "Performed multiple data fixes by re-evaluating records from the Oracle database and JAR files, resolving a total financial impact of up to $500,000",
              "Corrected the interest payment in the core banking system by configuring the penalty rate API, resolving incorrect charges to 1200 bank members"
            ]}
            imageUrl={ccs}
            ifProject={false}
          />
          <Section
            heading="ARTICLE"
            subheading="Full Stack Software Engineer Co-op"
            details={[
              "Utilized Topics and Brokers from Apache Kafka to handle concurrent scan requests and real time processing of box counts, resulting in a 40% increase in time of obtaining warehouse data",
              "Designed the user interface of a warehouse tool connected to RF Scanners using Vue & TypeScript, resulting in an enhanced user experience and enabling easy usability",
              "Developed endpoints in Spring Boot to seamlessly redirect and validate box information, thereby leading to reduced errors and improved data accuracy of 1000+ scans",
              "Created tests in JUnit and Jest to replicate the interactions and designs specified in the Figma prototype, achieving an overall test coverage of 80%",
              "Contributed to meetings on migrating the Monolithic architecture to Microservices, addressing necessary changes and database connections to align with the company's growth"
            ]}
            imageUrl={article}
            ifProject={false}
          />
          <h2 className="exptitle">Projects</h2>
          <Section
            heading="BGC Engineering Inventory System"
            subheading="An app to track/scan BGC's inventory"
            details={[
              "Leveraged barcode data to create an inventory system for the company, BGC Engineering, reducing the time spent handling each stock through scanning and CRUD functionality",
              "Integrated the Google Maps API displaying a visual graphic of the location of an item resulting in the management being able to track and locate it",
              "Secured the system through user authorization and authentication with Passport.js and BCrypt hashing allowing members to correctly sign in and create accounts based off of current company position"
            ]}
            imageUrl={bgc}
            ifProject={true}
            technologies="React, JavaScript, Express, Node.js, PostgreSQL, Heroku, Github"
          />
          <Section
            heading="DailyDime"
            subheading="An android finance app"
            details={[
              "Developed a mobile app for managing personal finances through visualizations and illustrations to the user about their spending and saving habits",
              "Utilized Firebase for secure user authentication and saving financial data for user-specific accounts",
              "Incorporated Kotlin MVVM architecture for a modular structure and creating an easier way of adjusting the codebase"
            ]}
            imageUrl={dd}
            ifProject={true}
            technologies="Kotlin, Java, Firebase, Github"
          />
          <Section
            heading="Prince's Grand Escape"
            subheading="A 2D OS Research Game Project"
            details={[
              "Devised a game application for a research project with 3 other members to teach operating systems concepts to other students",
              "Implemeneted quiz pop ups and drag and drops on task attempts to illustrate OS topics and gave the user freedom to move around to decide on their path to escape",
              "Leveraged Docker for application containerization and utilized SFU services to host the game through Netlify"
            ]}
            imageUrl={prince}
            ifProject={true}
            technologies="TypeScript, Express, React-Three-Fiber, PostgreSQL, Docker, Netlify, Github"
          />
          <Section
            heading="Consumables Tracker"
            subheading="A Desktop App to track groceries"
            details={[
              "Developed a REST API using Spring Boot and a Swing-based GUI to facilitate a client-to-server communication for managing consumable user data",
              "Utilized Object Oriented Programming and a MVC architecture to accommodate the type of consumables, ensuring redundancy is limited"
            ]}
            imageUrl={ct}
            ifProject={true}
            technologies="Java, Spring Boot, Swing, Github"
          />
        </div>
      </div>
    );
  }
}

export default Experience;