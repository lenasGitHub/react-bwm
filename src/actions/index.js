import axios from "axios";
import {
  FETCH_RENTAL_BY_ID_SCCESS,
  FETCH_RENTAL_BY_ID_INIT,
  FETCH_RENTAL_SCCESS
} from "./types";

const fetchRetnalByIdInit = () => {
  return {
    type: FETCH_RENTAL_BY_ID_INIT
  };
};
const fetchRentalByIdSccess = rental => {
  return {
    type: FETCH_RENTAL_BY_ID_SCCESS,
    rental
  };
};

const fetchRentalsSccess = rentals => {
  return {
    type: FETCH_RENTAL_SCCESS,
    rentals
  };
};

export const fetchRetnals = () => {
  return dispatch => {
    axios
      .get("/api/v1/rentals")
      .then(res => res.data)
      .then(rentals => dispatch(fetchRentalsSccess(rentals)));
  };
};

export const fetchRetnalById = rentalId => {
  return function(dispatch) {
    dispatch(fetchRetnalByIdInit());

    axios.get(`/api/v1/rentals/${rentalId}`).then(rental => {
      dispatch(fetchRentalByIdSccess(rental.data));
    });
    // setTimeout(() => {
    //   const rental = rentals.find(rental => rental.id === rentalId);
    //   dispatch(fetchRentalByIdSccess(rental));
    // }, 1000);
    // return {
    //   type: FETCH_RENTAL_BY_ID,
    //   rental
    // };
  };
};
