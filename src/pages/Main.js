import React from "react";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import About from "../components/About";
import Experience from "../components/Experience";

class Main extends React.Component {
    render() {
      return(
        <React.Fragment>
          <Navbar />
          <Home />
          <About />
          <Experience />
        </React.Fragment>
      )
    }
  }
  
export default Main;