import React, { Component } from "react";
import AuthenticationService from "./Authentication.js";

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      hasLoginFailed: false,
      showSuccessMessage: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.loginClicked = this.loginClicked.bind(this);
  }
  handleChange(event) {
    console.log(event.target.name);
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  loginClicked() {
    //diana,dummy
    if (this.state.username === "diana" && this.state.password === "dummy") {
      AuthenticationService.registerSuccessfulLogin(
        this.state.username,
        this.state.password
      );
      this.props.history.push(`/welcome/${this.state.username}`);
      // this.setState({showSuccessMessage:true})
      // this.setState({hasLoginFailed:false})
      console.log("successful");
    } else {
      this.setState({ showSuccessMessage: false });
      this.setState({ hasLoginFailed: true });
      console.log("fail");
    }

    console.log(this.state);
  }
  render() {
    return (
      <div>
        <h1>Login</h1>
        <div className="container">
          {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/> */}
          {this.state.hasLoginFailed && (
            <div className="alert alert-warning">Invalid Credentials</div>
          )}
          {/* <ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/>  */}
          {this.state.showSuccessMessage && <div>Login Successful!</div>}
          User Name:{" "}
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          Password:{" "}
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button className="btn btn-login" onClick={this.loginClicked}>
            Login
          </button>
        </div>
      </div>
    );
  }
}

export default LoginComponent;
