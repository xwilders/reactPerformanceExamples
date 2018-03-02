import React, { Component, PureComponent } from 'react';
import logo from './logo.svg';
import './App.css';

// See projectCategories in beyond/ProjectsBody.js

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

const emptyRow = {};

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

    const { row } = this.props;

    return (
      <div className="App">
        <Tester defaultValue={row || emptyRow} />
      </div>
    );
  }
}

export default App;
