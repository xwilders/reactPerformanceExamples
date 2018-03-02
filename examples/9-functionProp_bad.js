import React, { Component, PureComponent } from 'react';
import logo from './logo.svg';
import './App.css';

// See EditProjectModal in beyond/ProjectsBody.js

class Tester extends PureComponent {
  render() {
    console.log('Child is rerendering');

    const { func } = this.props;

    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">{func('Child')}</h1>
      </header>
    );
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0
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

    const { counter } = this.state;

    return (
      <div className="App">
        <Tester
          func={childName => {
            if (counter < 5) return `${childName} says: The counter is small`;
            return `${childName} says: The counter is big`;
          }}
        />
      </div>
    );
  }
}

export default App;
