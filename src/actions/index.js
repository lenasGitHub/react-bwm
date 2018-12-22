import axiosService from "../services/axios-service";
import authService from "../services/auth-service";
import axios from "axios";
import {
  FETCH_RENTAL_BY_ID_SCCESS,
  FETCH_RENTAL_BY_ID_INIT,
  FETCH_RENTAL_SCCESS,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT
} from "./types";

const axiosInstance = axiosService.getInstance();

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
    axiosInstance
      .get("/rentals")
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

export const register = userData => {
  return axios
    .post("/api/v1/users/register", userData)
    .then(res => res.data, err => Promise.reject(err.response.data.errors));
};

const loginSuccess = () => {
  const username = authService.getUsername();

  return {
    type: LOGIN_SUCCESS,
    username
  };
};

const loginFailure = errors => {
  return {
    type: LOGIN_FAILURE,
    errors
  };
};
export const checkAuthState = () => {
  return dispatch => {
    if (authService.isAuthenticated()) {
      dispatch(loginSuccess());
    }
  };
};
export const login = userData => {
  return dispatch => {
    return axios
      .post("/api/v1/users/auth", userData)
      .then(res => res.data)
      .then(token => {
        authService.saveToken(token);
        // localStorage.setItem("auth_token", token);
        dispatch(loginSuccess());
      })
      .catch(({ response }) => {
        dispatch(loginFailure(response.data.errors));
      });
  };
};

export const logout = () => {
  authService.invalidateUser();

  return {
    type: LOGOUT
  };
};
