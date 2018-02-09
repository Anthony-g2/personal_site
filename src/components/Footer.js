import React, { Component } from 'react';
import '../styles/Footer.css';

class Footer extends Component {

  render(){
    return (
      <ul id="footer">
        <li className="footer-content">&copy; Copyright Anthony Greenwell</li>
        <li className="footer-content">Made with &#9825;... and React ;)</li>
      </ul>
    )
  }
}

export default Footer;
