import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import Reactlogo from '../pictures/react-logo.png';
import '../styles/Footer.css';

class Footer extends Component {

  render(){
    return (
      <ul id="footer">
        <li className="footer-content">&copy; Copyright Anthony Greenwell</li>
        <li className="footer-content">Made with &#9825; & React <Image src={Reactlogo} className='footer-image' alt='react' title='React' /></li>
      </ul>
    )
  }
}

export default Footer;
