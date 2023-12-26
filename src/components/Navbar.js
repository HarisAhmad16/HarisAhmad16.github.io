import React from "react";
import '../styles/navbar.css';

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <div className="navbar-container">
          <a href="/">HOME</a>
          <a href="/about">ABOUT</a>
          <a href="/experience">EXPERIENCE</a>
        </div>
      </div>
    );
  }
}

export default Navbar;
