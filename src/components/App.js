import React, { Component } from 'react';
import Header from './Header';
import Nav from './Nav';
import About from './About';
import Footer from './Footer';
import Projects from './Projects';
import Skills from './Skills';
import '../styles/App.css';
import { Grid } from 'react-bootstrap';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Grid className="app">
        <Header />
        <Nav />
        <hr className="main-hr"/>
        <div className="app-content">
          <Route exact path="/" component={About}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/skills" component={Skills}/>
        </div>
        <div className="app-footer">
          <Footer />
        </div>
      </Grid>
    );
  }
}

export default App;
