import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import LoginForm from "./LoginForm";

import * as actions from "actions";

class Login extends Component {
  constructor() {
    super();

    this.loginUser = this.loginUser.bind(this);
  }

  loginUser(userDate) {
    this.props.dispatch(actions.login(userDate));
  }
  render() {
    const { isAuth, errors } = this.props.auth;
    const { successRegister } = this.props.location.state || false;

    if (isAuth) {
      return <Redirect to={{ pathname: "/rentals" }} />;
    }
    return (
      <section id="login">
        <div className="bwm-form">
          <div className="row">
            <div className="col-md-5">
              {successRegister && (
                <div className="alert alert-success">
                  <p>
                    {" "}
                    You have been succesfuly registered, please login now.{" "}
                  </p>
                </div>
              )}
              <h1>Login</h1>
              <LoginForm submitCb={this.loginUser} errors={errors} />
            </div>
            <div className="col-md-6 ml-auto">
              <div className="image-container">
                <h2 className="catchphrase">
                  Hundreds of awesome places in reach of few clicks.
                </h2>
                <img src="" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps)(Login);
