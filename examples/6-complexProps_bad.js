import _ from 'lodash';

import React, { Component, PureComponent } from 'react';
import logo from './logo.svg';
import './App.css';

// See actions of ProjectTable in beyond/ProjectsBody.js

class Tester extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    const { data } = this.props;

    // Avoids rerender, but the check is expensive - no real performance gain in most cases
    return _.isEqual(data, nextProps.data);
  }
  render() {
    console.log('Child is rerendering');
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">I am a child component</h1>
      </header>
    );
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      data1: { a: 1, c: 3 },
      data2: { b: 2, d: 4 }
    };
  }
  componentDidMount() {
    setInterval(() => {
      const { counter } = this.state;
      this.setState({ counter: counter + 1 });
    }, 1000);
  }
  render() {
    console.log('Parent is rerendering');

    const { data1, data2 } = this.state;

    return (
      <div className="App">
        <Tester data={{ ...data1, ...data2 }} />
      </div>
    );
  }
}

export default App;
