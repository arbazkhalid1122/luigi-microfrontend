import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './views/home.js';
import Sample1 from './views/sample1.js';
import Sample2 from './views/sample2.js';
import { addInitListener } from '@luigi-project/client';
import './index.css';

class App extends Component {
  constructor(props) {
    super(props);
    addInitListener(() => {
      console.log('Luigi Client initialized.');
    });
  }
  render() {
    return (
    <h1>React js</h1>
    );
  }
}

render(<App />, document.getElementById('root'));
