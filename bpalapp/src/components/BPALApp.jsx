import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HeaderComponent from "./Header";
import LogoutComponent from "./Logout";
import FooterComponent from "./footer";
import FullCollection from "./FullCollection";
import LoginComponent from "./Login";
import WelcomeComponent from "./Welcome";
import AuthenticatedRoute from "./AuthenticatedRoute";

class BPALApp extends Component {
  render() {
    return (
      <div className="BPALApp">
        <Router>
          <HeaderComponent />
          <Switch>
            <AuthenticatedRoute path="/display" component={FullCollection} />
            <Route path="/" exact component={LoginComponent} />
            <Route path="/login" component={LoginComponent} />
            <AuthenticatedRoute
              path="/welcome/:name"
              component={WelcomeComponent}
            />
            <AuthenticatedRoute path="/logout" component={LogoutComponent} />
            <Route component={ErrorComponent} />
          </Switch>
          <FooterComponent />
        </Router>
      </div>
    );
  }
}

function ErrorComponent() {
  return <div>This is not the page you're looking for</div>;
}

export default BPALApp;
