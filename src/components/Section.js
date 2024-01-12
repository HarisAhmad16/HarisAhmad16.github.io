import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/section.css';

const Section = ({ heading, details, imageUrl, subheading, ifProject, technologies }) => {
  const [isHovered, setHovered] = useState(false);

  return (
    <main>
      <div className={`card ${isHovered ? 'hovered' : ''}`} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
        <img src={imageUrl} alt="" />
        <div className="card-content">
          <h2 className='heading'>
            {heading}
          </h2>
          <h3 className='subheading'>
            {subheading}
          </h3>
          <ul>
            {details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
          {ifProject && <p>Technologies: {technologies} </p>}
        </div>
      </div>
    </main>
  );
};

Section.propTypes = {
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string.isRequired,
  details: PropTypes.arrayOf(PropTypes.string).isRequired,
  imageUrl: PropTypes.string.isRequired,
  ifProject: PropTypes.bool.isRequired,
  technologies: PropTypes.string
};

export default Section;
