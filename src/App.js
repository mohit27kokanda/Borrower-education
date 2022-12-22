import './App.css';

import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LoginApp from './LoginApp';
import AppContainer from './AppContainer';
import Home from './Home'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={< AppContainer />}></Route>
          <Route exact path='/login' element={< LoginApp />}></Route>
          <Route exact path='/home' element={< Home />}></Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
