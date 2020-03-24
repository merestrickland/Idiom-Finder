import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <NavBar />
      <Route path='/' exact component={IdiomsList} />
      <Route path='/user' component={CreateUser} />

    </Router>
  );
}

export default App;
