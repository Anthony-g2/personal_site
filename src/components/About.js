import React, { Component } from 'react';
import { Row, Col, Image, Popover, OverlayTrigger, Table } from 'react-bootstrap';
import linkedIn from '../pictures/linkedin.png';
import github from '../pictures/github.png';
import email from '../pictures/email.png';
import Anthony from '../pictures/Anthony.JPG';
import Gear from '../pictures/gear.png';
import Server from '../pictures/server.png';
import Computer from '../pictures/computer.png';
import '../styles/About.css';

class About extends Component {
  render(){
    const popoverTop = (
      <Popover id="popover-positioned-bottom" title="Looking forward to hearing from you!">
        <a href="mailto:ant.greenwell2@gmail.com?Subject=Re:%20Web%20Design%20with%20Anthony%20Greenwell">
          <Image className="f-icon" src={email} alt="email" title="Email" responsive />
        </a>
        <a href="https://www.linkedin.com/in/anthony-greenwell/">
          <Image className="f-icon" src={linkedIn} alt="linkedIn" title="LinkedIn" responsive />
        </a>
        <a href="https://github.com/Anthony-g2">
          <Image className="f-icon" src={github} alt="github" title="Github" responsive />
        </a>
      </Popover>
    );
    return (
        <Row id="about">
          <Col xs={12} className="page-title">
            <p className="content-title">About Me</p>
          </Col>
          <Col xs={12} md={4} id="a-image">
            <Image className="about-image" src={Anthony} alt="me" title="Me" thumbnail />
            <strong>
                <p className="content">
                  Click <OverlayTrigger trigger="click" placement="bottom" overlay={popoverTop}>
                      <span className="span-link">here</span>
                    </OverlayTrigger> to contact me!
                </p>
            </strong>
          </Col>
          <Col xs={12} md={8}>
            <p className="content">
              I am a Bay Area native with a passion for solving problems and
              thinking outside of the box. With software programming, I'm able
              to put that passion to work while also showing it through my work.
            </p>
            <br />
            <Row id="about-skills">
              <Col xs={12} md={4}>
                <Image src={Computer} alt="front_end" title="Front-End" className="skill-img" />
                <p className="sub-title">
                  Front-End
                </p>
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
                <ul className="skill-list">
                  <li className="small content">Bootstrap+Materialize</li>
                  <li className="small content">Debugging</li>
                  <li className="small content">UX+UI</li>
                  <li className="small content">Sass</li>
                  <li className="small content">Git</li>
                </ul>
              </Col>
            </Row>
            <br />
          </Col>
        </Row>
    )
  }
}

export default About;
