import React, { Component, PureComponent } from 'react';
import logo from './logo.svg';
import './App.css';

class Tester extends PureComponent {
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
        <Tester a={data1.a} b={data2.b} c={data1.c} d={data2.d} />
      </div>
    );
  }
}

export default App;
