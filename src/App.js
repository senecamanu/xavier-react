import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


//containers
import Home from './container/Home'
import About from './container/About'
import NotFound from './container/NotFound'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
              Learn React
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/about/xavier'>About</Link></li>
            </ul>
          </header>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about/:name' 
              component={(props) => <About {...props} 
              dev="xav"
              />} 
              />
            <Route component ={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;


