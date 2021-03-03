import React, { Component } from "react";
import { Link } from "react-router-dom";

class WelcomeComponent extends Component {
  render() {
    return (
      <div className="container">
        <h1>
          Welcome to You Have Too Much Perfume, {this.props.match.params.name}!
        </h1>
        <h4>
          Of course, you don't actually have too much perfume, it just needs to
          be managed better.
          <br />
          You can see your collection <Link to="/display">here</Link>.
        </h4>
      </div>
    );
  }
}

export default WelcomeComponent;
