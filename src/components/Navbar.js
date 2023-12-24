import React from "react";
import '../styles/navbar.css';

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <div className="navbar-container">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/experience">Experience</a>
        </div>
      </div>
    );
  }
}

export default Navbar;
