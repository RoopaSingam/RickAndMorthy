import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import "./Home.css";
import App from "./App";
import App2 from "./App2";

function Home() {
  return (
    <Router>
      <div>
        <nav>
          <div>
            <ul>
              <li>
                <Link to={"/charectors"}>Charectors</Link>
              </li>
              <li>
                <Link to={"/episodes"}>Episodes</Link>
              </li>
            </ul>
          </div>
        </nav>
        <Switch>
          <Route path="/charectors" component={App} />
          <Route path="/episodes" component={App2} />
        </Switch>
      </div>
    </Router>
  );
}

export default Home;
