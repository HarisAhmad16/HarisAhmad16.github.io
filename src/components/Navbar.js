import React from "react";
import '../styles/navbar.css';

class Navbar extends React.Component {
  handleScrollTo = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  render() {
    return (
      <div className="navbar">
        <div className="navbar-container">
          <a href="/" onClick={(e) => this.handleScrollTo(e, "home")}>HOME</a>
          <a href="/about" onClick={(e) => this.handleScrollTo(e, "about")}>ABOUT</a>
          <a href="/experience" onClick={(e) => this.handleScrollTo(e, "experience")}>EXPERIENCE</a>
          <a>CONTACT</a>
        </div>
      </div>
    );
  }
}

export default Navbar;