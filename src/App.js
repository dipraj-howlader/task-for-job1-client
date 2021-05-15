import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ScreenOne from './Components/ScreenOne/ScreenOne';
import ScreenTwo from './Components/ScreenTwo/ScreenTwo';

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/screenOne">
          <ScreenOne></ScreenOne>
          </Route>
          <Route path="/screenTwo">
            <ScreenTwo></ScreenTwo>
          </Route>
          <Route path="/">
            <ScreenOne></ScreenOne>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;