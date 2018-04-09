import React, { Component } from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import Junket from '../pictures/junket.png';
import GA_Eats from '../pictures/ga_eats.png';
import TJsSite from '../pictures/portfolio.png';
import MySite from '../pictures/personalsite.png';
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
              <Image className="project-image" src={TJsSite} alt="project1" title="Friends Landing Page" thumbnail />
            </Col>
            <Col xs={12} md={8}>
              <strong>
                <p className="sub-title">
                  Personal Website (Friend)
                </p>
              </strong>
              <p className="small content">
                Created a personal landing page for a friend using React. Modern style choices and mobile responsive design was the 
                main focus in this project.
              </p>
              <br />
              <a href="https://terrelpage.herokuapp.com/">
                <p className="p-content nav-link">
                  Go to Site
                </p>
              </a>
            </Col>
          </Row>
        <hr className="main-hr"/>
        <Row>
          <Col xs={12} md={4}>
            <Image className="project-image" src={MySite} alt="project2" title="My Personal Site" thumbnail />
          </Col>
          <Col xs={12} md={8}>
            <strong>
              <p className="sub-title">
                Personal Website
              </p>
            </strong>
            <p className="small content">
              Created my own personal website using React. A centralized collection of my projects, skills and contact information.
            </p>
            <br />
            <a href="https://anthonygreenwell.herokuapp.com/">
              <p className="p-content nav-link">
                Go to Site
              </p>
            </a>
          </Col>
        </Row>
        <hr className="main-hr"/>
          <Row>
          <Col xs={12} md={4}>
            <Image className="project-image" src={Junket} alt="project3" title="Junket" thumbnail />
          </Col>
          <Col xs={12} md={8}>
            <strong>
              <p className="sub-title">
                Junket!
              </p>
            </strong>
            <p className="small content">
              Ruby on Rails application. It allowed users to create, log in to, and edit their own accounts. They can
              read, comment on and post facts about different international cities.
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
            <Image className="project-image" src={GA_Eats} alt="project4" title="GA Eats" thumbnail />
          </Col>
          <Col xs={12} md={8}>
            <strong>
              <p className="sub-title">
                GA Eats SF
              </p>
            </strong>
            <p className="small content">
              Single page web application which utilizes the Google mpa api and jQuery.
              Allows users to review and post tips on different restaurants while logging their locations on the map.
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
