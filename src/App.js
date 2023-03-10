import "./App.css";

import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginApp from "./LoginApp";
import AppContainer from "./AppContainer";
import Home from "./Home";
import { Grid } from "@mui/material";
import LoanDetails from "./LoanDetails";
import Settlement from "./Settlement";
import PayNow from "./PayNow";
import ReportDelay from "./ReportDelay";

function App() {
  return (
    <div className="App">
      <Grid container>
        <Grid item xs={12} sm={4} className="app-layout">
          <Router>
            <Routes>
              <Route exact path="/" element={<AppContainer />}></Route>
              <Route exact path="/loan-details" element={<LoanDetails />}></Route>
              <Route exact path="/home" element={<Home />}></Route>
              <Route exact path="/pay-now" element={<PayNow />}></Route>
              <Route exact path="/settlement" element={<Settlement />}></Route>
              <Route exact path="/report-delay" element={<ReportDelay />}></Route>
              <Route exact path="/loan-details-approved" element={<LoanDetails />}></Route>
              
            </Routes>
          </Router>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
