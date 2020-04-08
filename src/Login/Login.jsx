import React, { Component } from "react";
import { connect } from "react-redux";

import { userActions } from "../actions";

import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.props.logout();

    this.state = {
      username: "",
      password: "",
      submitted: false
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ submitted: true });
    const { username, password } = this.state;
    if (username && password) {
      this.props.login(username, password);
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h3>Sign In</h3>

          <div className="form-group">
            <label>Username</label>
            <input
              onChange={this.handleChange}
              type="text"
              className="form-control"
              placeholder="Enter username"
              name="username"
              value={this.state.username}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              onChange={this.handleChange}
              type="password"
              className="form-control"
              placeholder="Enter password"
              name="password"
              value={this.state.password}
            />
          </div>

          <button type="submit" className="btn btn-primary btn-block">
            Submit
          </button>
          <p className="text-right">
            <a href="#">Register</a>
          </p>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { loggingIn } = state.authentication;
  return { loggingIn };
}

const actionCreators = {
  login: userActions.login,
  logout: userActions.logout
};

const connectedLoginPage = connect(mapStateToProps, actionCreators)(Login);

export { connectedLoginPage as Login };
