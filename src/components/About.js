import React, { Component } from 'react';
import { Row, Col, Image, Popover, OverlayTrigger, Table } from 'react-bootstrap';
import linkedIn from '../pictures/linkedin.png';
import github from '../pictures/github.png';
import email from '../pictures/email.png';
import Anthony from '../pictures/Anthony.JPG';
import '../styles/About.css';

class About extends Component {
  render(){
    const popoverTop = (
      <Popover id="popover-positioned-top" title="Contact Me">
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
          <Col xs={12} md={4}>
            <Image className="about-image" src={Anthony} alt="me" title="Me" thumbnail />
          </Col>
          <Col xs={12} md={8}>
            <p className="content">
              I am a Bay Area native with a talent for speaking computer. I've
              always loved solving problems and looking for creative solutions.
              With software programming, I'm able to put this passion to use.
            </p>
            <br />
            <p className="sub-title">
              Hobbies
            </p>
            <Table hover bordered>
              <tbody>
                <tr>
                  <td className="small content">FIFA</td>
                  <td className="small content">Warrior Games</td>
                  <td className="small content">Game of Thrones</td>
                </tr>
                <tr>
                  <td className="small content">Goat Cheese</td>
                  <td className="small content">Breaking Bad</td>
                  <td className="small content">Hawiian Pizza</td>
                </tr>
              </tbody>
            </Table>
            <br />
            <strong>
                <p className="content">
                  Click <OverlayTrigger trigger="click" placement="top" overlay={popoverTop}>
                      <span className="span-link">here</span>
                    </OverlayTrigger> for ways to contact me!
                </p>
            </strong>

          </Col>
        </Row>
    )
  }
}

export default About;
