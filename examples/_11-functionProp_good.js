import _ from 'lodash';

import React, { Component, PureComponent } from 'react';
import logo from './logo.svg';
import './App.css';

// defaultFilter in beyond/GlobalSearch.js as a prop to the wrapped component

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

// Beware memory usage! Memoize mantains a cache for each value returned by its second argument
// In this example, the cache has a max size of two elements (true and false) - which is great :)
const getFunc = _.memoize(
  counter => childName => {
    if (counter < 5) return `${childName} says: The counter is small`;
    return `${childName} says: The counter is big`;
  },
  counter => counter < 5
);

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
        <Tester func={getFunc(counter)} />
      </div>
    );
  }
}

export default App;
