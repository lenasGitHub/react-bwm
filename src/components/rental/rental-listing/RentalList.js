import React, { Component } from "react";

import { RenralCard } from "./RentalCard";

class RentalList extends Component {
  renderReantal() {
    return this.props.rentals.map((rental, index) => {
      return <RenralCard key={index} rental={rental} />;
    });
  }

  render() {
    return <div className="row">{this.renderReantal()}</div>;
  }
}

export default RentalList;
