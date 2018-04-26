import React from "react";
import { Route, Switch } from "react-router";

import Home from "./containers/home";
import NotFound from "./containers/notfound";

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route component={NotFound} />
  </Switch>
);

export default App;
