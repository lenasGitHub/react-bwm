import {
  FETCH_RENTAL,
  FETCH_RENTAL_BY_ID_SCCESS,
  FETCH_RENTAL_BY_ID_INIT
} from "./types";
const rentals = [
  {
    id: "1",
    title: "Central Apartment",
    city: "New York",
    street: "Times Sqaure",
    category: "apartment",
    image: "http://via.placeholder.com/350x250",
    bedrooms: 3,
    description: "Very nice apartment",
    dailyRate: 34,
    shared: false,
    createdAt: "24/12/2017"
  },
  {
    id: "2",
    title: "Central Apartment 2",
    city: "San Francisco",
    street: "Main street",
    category: "condo",
    image: "http://via.placeholder.com/350x250",
    bedrooms: 2,
    description: "Very nice apartment",
    dailyRate: 12,
    shared: true,
    createdAt: "24/12/2017"
  },
  {
    id: "3",
    title: "Central Apartment 3",
    city: "Bratislava",
    street: "Hlavna",
    category: "condo",
    image: "http://via.placeholder.com/350x250",
    bedrooms: 2,
    description: "Very nice apartment",
    dailyRate: 334,
    shared: true,
    createdAt: "24/12/2017"
  },
  {
    id: "4",
    title: "Central Apartment 4",
    city: "Berlin",
    street: "Haupt strasse",
    category: "house",
    image: "http://via.placeholder.com/350x250",
    bedrooms: 9,
    description: "Very nice apartment",
    dailyRate: 33,
    shared: true,
    createdAt: "24/12/2017"
  }
];

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

export const fetchRetnals = () => {
  return {
    type: FETCH_RENTAL,
    rentals
  };
};

export const fetchRetnalById = rentalId => {
  return function(dispatch) {
    dispatch(fetchRetnalByIdInit());
    setTimeout(() => {
      const rental = rentals.find(rental => rental.id === rentalId);
      dispatch(fetchRentalByIdSccess(rental));
    }, 1000);
    // return {
    //   type: FETCH_RENTAL_BY_ID,
    //   rental
    // };
  };
};
