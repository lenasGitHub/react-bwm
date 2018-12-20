import React, { Component } from "react";

import { connect } from "react-redux";
import * as actions from "../../../actions";

class RentalDetials extends Component {
  componentWillMount() {
    const rentalId = this.props.match.params.id;
    this.props.dispatch(actions.fetchRetnalById(rentalId));
  }
  render() {
    const rental = this.props.rental;
    return <h1>im rental detials {rental.title}</h1>;
  }
}

function mapStateToProps(state) {
  return {
    rental: state.rental.data
  };
}
export default connect(mapStateToProps)(RentalDetials);
