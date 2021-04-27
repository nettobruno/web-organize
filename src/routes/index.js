// Dependencies
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { useSelector } from 'react-redux';

// Pages
import Welcome from '../pages/Welcome';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Page404 from '../pages/Page404';

export default function App() {
  const { token } = useSelector((state) => state.auth);

  return (
    <Router basename="/">
      {!token && (
        <Switch>
          <Route path="/" exact>
            <Welcome />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/register">
            <Register />
          </Route>

          <Route path="/404">
            <Page404 />
          </Route>

          <Redirect to="/404" />
        </Switch>
      )}

      {token && (
        <Switch>
          <Route path="/" exact>
            <Welcome />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/register">
            <Register />
          </Route>

          <Route path="/home">
            <Home />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>

          <Route path="/404">
            <Page404 />
          </Route>

          <Redirect to="/404" />
        </Switch>
      )}
    </Router>
  );
}
