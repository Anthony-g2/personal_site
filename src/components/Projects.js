import React, { Component } from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import Junket from '../pictures/junket.png';
import GA_Eats from '../pictures/ga_eats.png';
import '../styles/Projects.css';


class Projects extends Component {
  render(){
    return (
      <div id="project">
          <Row>
            <Col xs={12} className="page-title">
              <p className="content-title">Projects</p>
            </Col>
          </Row>
          <Row>
          <Col xs={12} md={4}>
            <Image className="project-image" src={Junket} alt="project1" title="Junket" thumbnail />
          </Col>
          <Col xs={12} md={8}>
            <strong>
              <p className="sub-title">
                Junket!
              </p>
            </strong>
            <p className="small content">
              Social media site created so users can post tips and comments on cities througout the world.
            </p>
            <br />
            <a href="https://github.com/Anthony-g2/vagabond">
              <p className="p-content nav-link">
                Github Repository
              </p>
            </a>
            <a href="https://vast-falls-69882.herokuapp.com/">
              <p className="p-content nav-link">
                Go to Site
              </p>
            </a>
          </Col>
        </Row>
        <hr className="main-hr"/>
        <Row>
          <Col xs={12} md={4}>
            <Image className="project-image" src={GA_Eats} alt="project2" title="GA Eats" thumbnail />
          </Col>
          <Col xs={12} md={8}>
            <strong>
              <p className="sub-title">
                GA Eats SF
              </p>
            </strong>
            <p className="small content">
              Web app designed to let users log their favorite restaurants and where to find them.
            </p>
            <br />
            <a href="https://github.com/Anthony-g2/GA_eats">
              <p className="p-content nav-link">
                Github Repository
              </p>
            </a>
            <a href="https://tranquil-woodland-73750.herokuapp.com/">
              <p className="p-content nav-link">
                Go to Site
              </p>
            </a>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Projects;
