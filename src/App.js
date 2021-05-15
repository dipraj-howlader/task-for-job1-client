import React, { createContext ,useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import ScreenOne from './Components/ScreenOne/ScreenOne';
import ScreenTwo from './Components/ScreenTwo/ScreenTwo';

export const UserContext = createContext();


const App = () => {
  
  const [loggedInUser, setLoggedInUser] =useState({
    isSignedIn: true,
    email: '',
    password: '',
    error :''
  })

  return (
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/screenOne">
          <ScreenOne></ScreenOne>
          </Route>
          <PrivateRoute path="/screenTwo">
            <ScreenTwo></ScreenTwo>
          </PrivateRoute>
          <Route path="/">
            <ScreenOne></ScreenOne>
          </Route>
        </Switch>
      </Router>
      </UserContext.Provider>
  );
};

export default App;