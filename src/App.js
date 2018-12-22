import React, { Component } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";

import { Provider } from "react-redux";

import Header from "./components/shared/Header";
import RentalListing from "./components/rental/rental-listing/RentalListing";
import RentalDetials from "./components/rental/rentl-detials/RentalDetials";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import "./App.css";

import * as actions from "./actions";
import { ProtectedRoute } from "./components/shared/auth/ProtectedRoute";
import { LoggedInRoute } from "./components/shared/auth/LoggedInRoute";

const store = require("./reducers").init();
class App extends Component {
  componentWillMount() {
    store.dispatch(actions.checkAuthState());
  }

  logout() {
    store.dispatch(actions.logout());
  }
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Header logout={this.logout} />
            <div className="container">
              <Route exact path="/" render={() => <Redirect to="/rentals" />} />
              <Route exact path="/login" component={Login} />
              <LoggedInRoute exact path="/register" component={Register} />
              <Route exact path="/rentals" component={RentalListing} />
              <ProtectedRoute
                exact
                path="/rentals/:id"
                component={RentalDetials}
              />
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
