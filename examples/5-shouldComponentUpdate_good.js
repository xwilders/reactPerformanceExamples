import _ from 'lodash';

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// See fluffy2/Table and _counter

class Tester extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    const { behaviour } = this.props;
    return _.get(nextProps, 'behaviour.id') !== behaviour.id;
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
    this.state = { counter: 0 };
  }
  componentDidMount() {
    setInterval(() => {
      const { counter } = this.state;
      this.setState({ counter: counter + 1 });
    }, 1000);
  }
  render() {
    console.log('Parent is rerendering');

    return (
      <div className="App">
        <Tester behaviour={{ id: 1 }} />
      </div>
    );
  }
}

export default App;
