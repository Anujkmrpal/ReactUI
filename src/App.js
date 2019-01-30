import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import './App.css';
import Writereview from './container/writereview';
import Showreview from './container/showreview';
import { BrowserRouter as Router, Route,Link } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Route exact path="/" component={Writereview} />
        <Route path="/show" component={Showreview} />
      </div>
      </Router>
    );
  }
}

export default App;
