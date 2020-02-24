import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import "./App.css";

import { Login } from "./Login";
import { Home } from "./Home";
import { history } from "./helpers";
import { PrivateRoute } from "./components";

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
