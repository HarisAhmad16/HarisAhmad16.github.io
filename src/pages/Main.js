import React from "react";
import Navbar from "../components/Navbar";
import Home from "../components/Home";

class Main extends React.Component {
    render() {
      return(
        <React.Fragment>
          <Navbar />
          <Home />
        </React.Fragment>
      )
    }
  }
  
export default Main;