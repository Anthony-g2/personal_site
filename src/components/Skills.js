import React, { Component } from 'react';
import { Table, Col, Row, Image } from 'react-bootstrap';
import Gear from '../pictures/gear.png';
import Server from '../pictures/server.png';
import Computer from '../pictures/computer.png';
import '../styles/Skills.css'

class Skills extends Component {
  render(){
    return (
      <div id="skills">
        <Row>
          <Col xs={12} className="page-title">
            <p className="content-title">Technical Skills</p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4}>
            <Image src={Computer} alt="front_end" title="Front-End" className="skill-img" />
            <p className="sub-title">
              Front-End
            </p>
            <hr />
            <ul className="skill-list">
            <li className="small content">HTML+CSS+JavaScript</li>
              <li className="small content">React.js</li>
              <li className="small content">jQuery</li>
              <li className="small content">AJAX</li>
              <li className="small content">Rails</li>
            </ul>
          </Col>
          <Col xs={12} md={4}>
            <Image src={Server} alt="Back_end" title="Back-End" className="skill-img" />
            <p className="sub-title">
              Back-End
            </p>
            <hr />
            <ul className="skill-list">
              <li className="small content">Mongoose</li>
              <li className="small content">Express.js</li>
              <li className="small content">Node.js</li>
              <li className="small content">Ruby</li>
              <li className="small content">SQL</li>
            </ul>
          </Col>
          <Col xs={12} md={4}>
            <Image src={Gear} alt="bonus" title="Bonus Skills" className="skill-img" />
            <p className="sub-title">
              Bonus
            </p>
            <hr />
            <ul className="skill-list">
              <li className="small content">Bootstrap+Materialize</li>
              <li className="small content">Debugging</li>
              <li className="small content">UX+UI</li>
              <li className="small content">Sass</li>
              <li className="small content">Git</li>
            </ul>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Skills;
