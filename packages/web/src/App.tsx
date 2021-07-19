import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import './App.css';
import '@fontsource/roboto';
import HomePage from './pages/Home';
import RankingPage from './pages/Ranking';
import { AppBar, Toolbar } from '@material-ui/core';

function App() {
  return (
    <Router>
      <AppBar position={'static'}>
        <Toolbar>
          <Link to={'/'}>Home</Link >
          <Link to={'/ranking'}>Ranking</Link>
        </Toolbar>
      </AppBar>
    
      <Switch>
        <Route exact path='/'>
          <HomePage></HomePage>
        </Route>
        <Route path={'/ranking'}>
          <RankingPage></RankingPage>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
