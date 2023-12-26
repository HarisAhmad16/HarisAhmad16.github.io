import React from "react";
import '../styles/section.css'; // Import the section-specific styles

class Section extends React.Component {
  render() {
    return (
      <div className="section">
        <div className="clip-text clip-text_fifteen clip-text--cover">
          {this.props.title}
        </div>
      </div>
    );
  }
}

export default Section;
 