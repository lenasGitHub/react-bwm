import React, { Component } from "react";

import { connect } from "react-redux";
import * as actions from "../../../actions";

import { RentalDetialsInfo } from "./RentalDetialsInfo";

class RentalDetials extends Component {
  componentWillMount() {
    const rentalId = this.props.match.params.id;
    this.props.dispatch(actions.fetchRetnalById(rentalId));
  }
  render() {
    const rental = this.props.rental;
    if (rental._id) {
      return (
        <section id="rentalDetails">
          <div className="upper-section">
            <div className="row">
              <div className="col-md-6">
                <img src={rental.image} alt="" />
              </div>
              <div className="col-md-6">
                <img src={rental.image} alt="" />
              </div>
            </div>
          </div>

          <div className="details-section">
            <div className="row">
              <div className="col-md-8">
                <RentalDetialsInfo rental={rental} />
              </div>
              <div className="col-md-4"> BOOKING</div>
            </div>
          </div>
        </section>
      );
    } else {
      return <h1>Loading..</h1>;
    }
  }
}

function mapStateToProps(state) {
  return {
    rental: state.rental.data
  };
}
export default connect(mapStateToProps)(RentalDetials);
