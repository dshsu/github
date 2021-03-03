import React, { Component } from "react";
import { Link } from "react-router-dom";

class LogoutComponent extends Component {
  render() {
    return (
      <div>
        <h1> You have logged out.</h1>
        Come back soon! <br />
        To log in again, go <Link to="/login">here.</Link>
      </div>
    );
  }
}

export default LogoutComponent;
