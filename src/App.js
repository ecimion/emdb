import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import MoviesList from './MoviesList';

const App = () => (
  <Router>
    <div className="App">
      <header className="App-header">
        <Link to="/">
          <h1>[emdb]</h1>
        </Link>
      </header>
      <Switch>
        <Route exact path="/" component={MoviesList} />
        <Route path="/test" component={Test} />
      </Switch>
    </div>
  </Router>
);

export default App;

const Test = () => (
  <h1>TEST</h1>
);
