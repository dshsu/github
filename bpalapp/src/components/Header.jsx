import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import AuthenticationService from "./Authentication.js";

class HeaderComponent extends Component {
  render() {
    const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
    console.log(isUserLoggedIn);

    return (
      <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div>
            <a href="http://localhost:3000/" className="navbar-brand">
              {" "}
              Home!
            </a>
          </div>
          <ul className="navbar-nav">
            {isUserLoggedIn && (
              <li>
                <Link className="nav-link" to="/welcome/:name">
                  Home
                </Link>
              </li>
            )}
            {isUserLoggedIn && (
              <li>
                {" "}
                <Link className="nav-link" to="/display">
                  Collection
                </Link>
              </li>
            )}
          </ul>
          <ul className="navbar-nav navbar-collapse jusify-content-end">
            {!isUserLoggedIn && (
              <li>
                {" "}
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            )}
            {isUserLoggedIn && (
              <li>
                {" "}
                <Link
                  className="nav-link"
                  to="/logout"
                  onClick={AuthenticationService.logout}
                >
                  Logout
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </header>
    );
  }
}
export default withRouter(HeaderComponent);
