import React, { Component } from 'react';
import { Table, Col, Row, Image } from 'react-bootstrap';
import Gear from '../pictures/gear.png';
import Server from '../pictures/server.png';
import Computer from '../pictures/computer.png';
import Resume from '../pictures/resume.pdf';
import '../styles/Skills.css'

class Skills extends Component {
  render(){
    return (
      <div id="skills">
        <Row>
          <Col xs={12} className="page-title">
            <p className="content-title">Résumé</p>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <embed src={Resume} width="100%" height="1200vh" />
          </Col>
        </Row>
      </div>
    )
  }
}

export default Skills;
