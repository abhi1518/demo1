import React from "react";
//  
import Home from './Home';
import About from './About';
import Contact from './Contact';
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

export default function Na() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}