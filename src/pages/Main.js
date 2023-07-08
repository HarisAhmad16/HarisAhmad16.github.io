import React from "react";
import Intro from '../components/Intro'
import Navbar from "../components/Navbar";

class Main extends React.Component {
    render() {
      return(
        <React.Fragment>
          <Navbar />
          <Intro />
        </React.Fragment>
      )
    }
  }
  
  export default Main;