import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/section.css';

const Section = ({ heading, details, imageUrl, subheading }) => {
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
          <p>
            {details}
          </p>
        </div>
      </div>
    </main>
  );
};

Section.propTypes = {
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default Section;
