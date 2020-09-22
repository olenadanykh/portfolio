/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import './assets/App.scss';
import Home from './components/Home';
import NavBar from './components/Navbar';
import Footer from './components/Footer';


class App extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <Router>
        <Route path="/">
          <div>
            <NavBar />
            <Route exact path="/"><Home /></Route>
            <Footer />
          </div>
        </Route>
        <Switch>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact-me">
            <Contact />
          </Route>
          <Route path="/home">
            <Home />
          </Route>


        </Switch>
      </Router>
    );
  }
}
export default App;
