import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navigation from "../Navigation";
import Footer from "../Footer";
import Home from "../Home";

import Projects from "../Projects";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Navigation />
          </div>
          <br />

          <div>
            <Projects />
          </div>
          <div>
            <Home />
          </div>

          <div>
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}
