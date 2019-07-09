import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import MoviesList from './MoviesList';
import MovieDetail from './MovieDetail';

const App = () => (
  <Router>
    <div className="App">
      <header className="App-header">
        <Link to="/emdb">
          <h1 id="logo">[emdb]</h1>
        </Link>
      </header>
      <Switch>
        <Route exact path="/emdb" component={MoviesList} />
        <Route path="/emdb/:id" component={MovieDetail} />
      </Switch>
    </div>
  </Router>
);

export default App;
