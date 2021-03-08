import React from 'react'
import { connect } from "react-redux";
import { Route, Redirect, Switch } from "react-router-dom";

import { Auth, Home } from "./pages";
import './App.scss';

const App = props => {
  const { isAuth } = props;
  return (
    <Switch>
        <Route exact path={["/signin", "/signup"]} 
        render={(props) => <Auth isAuth={isAuth} {...props}/>}/>
        <Route
        path="/"
        render={() => (isAuth ? (
          window.redirectURL ? window.location = window.redirectURL + window.SSOToken : <Home />
        ):
        <Redirect to="/signin" />)
        }
        />
    </Switch>
    
  );
}

export default connect(({ user }) => ({ isAuth: user.isAuth }))(App);
