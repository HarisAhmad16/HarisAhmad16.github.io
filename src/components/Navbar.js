import React from 'react';
// eslint-disable-next-line
import styles from '../styles/navbar.css';

class Navbar extends React.Component {
    render() {
        return (
            <div>
                <input class="menu-icon" type="checkbox" id="menu-icon" name="menu-icon"/>
  	            <label for="menu-icon"></label>
  	            <nav class="nav"> 		
  		            <ul class="pt-5">
  			            <li><a href="#">About Me</a></li>
  			            <li><a href="#">Experience</a></li>
  			            <li><a href="#">Projects</a></li>
  			            <li><a href="#">Contact</a></li>
  		            </ul>
  	            </nav>
            </div>
        )
    }
}

export default Navbar;