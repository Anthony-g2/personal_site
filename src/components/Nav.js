import React, { Component } from 'react';
import '../styles/Nav.css';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render(){
    return (
      <Row className="nav-bar">
        <ul className="nav-list">
          <Col xs={4} md={3}>
            <li className="nav-item"><Link to="/" className="nav-link"> About </Link></li>
          </Col>
          <Col xsHidden md={1}>
            <p className="content seperator"> | </p>
          </Col>
          <Col xs={4} md={4}>
            <li className="nav-item"><Link to="/projects" className="nav-link"> Projects </Link></li>
          </Col>
          <Col xsHidden md={1}>
            <p className="content seperator"> | </p>
          </Col>
          <Col xs={4} md={3}>
            <li className="nav-item"><Link to="/skills" className="nav-link"> Skills </Link></li>
          </Col>
        </ul>
      </Row>
    )
  }
}

export default Nav;
