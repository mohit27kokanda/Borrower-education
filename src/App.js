import './App.css';

import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LoginApp from './LoginApp';
import AppContainer from './AppContainer';

function App() {
  return (
    <div className="App">
      <Router>
      

      <AppContainer/>
      <Routes>
                 <Route exact path='/' element={< LoginApp />}></Route>
                 <Route exact path='/login' element={< LoginApp />}></Route>
                 {/* <Route exact path='/contact' element={< Contact />}></Route> */}
          </Routes>
      </Router>
      
    </div>
  );
}

export default App;
