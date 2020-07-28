import React, { Component } from 'react';
import HomePage from './components/HomePage';
import Projects from './components/Projects';
import Experience from './components/Experience';
import About from './components/About';

class App extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
        <h1> Hello World</h1>
        <HomePage />
        <About />
        <Projects />
        <Experience />
      </div>
    );
  }
}
export default App;
