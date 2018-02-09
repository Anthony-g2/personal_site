import React, { Component } from 'react';
import '../styles/Header.css';
import { Row, Col } from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
      <div id="header">
        <Row>
          <Col xs={12}>
            <p className="main-title"> Anthony Greenwell II </p>
          </Col>
        </Row>
        <Row>
          <Col xs={2} xsOffset={2} >
            <p className="content"> Web Developer </p>
          </Col>
          <Col xs={1}>
            <p className="seperator"> | </p>
          </Col>
          <Col xs={2}>
            <p className="content"> Deep Thinker </p>
          </Col>
          <Col xs={1}>
            <p className="seperator"> | </p>
          </Col>
          <Col xs={2}>
            <p className="content"> King of the North </p>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Header;
