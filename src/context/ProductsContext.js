import {
  FILTER_PRODUCTS,
  TO_LIST_VIEW,
  TO_GRID_VIEW,
  CHANGE_FILTER,
  CHANGE_SORT,
  GET_DATA,
  CLEAR_FILTER,
  CHANGE_IMAGE
} from "../action";
import React, { useEffect, useReducer } from "react";
import productsReducer from "../reducers/productsReducer";
import { productsMain } from "../constants/constants";

const productsContext = React.createContext();

const initialState = {
  productsMain: productsMain,
  productsFilter: [],
  found: 0,
  valueSort: "",
  gridView: true,
  indexImage:0,
  filter: {
    category: "All",
    company: "All",
    colors: "All",
    price: 0,
    search: "",
    maxPrice: 0,
    freeShip: false,
  },
};

const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productsReducer, initialState);

  useEffect(() => {
    dispatch({ type: GET_DATA });
  }, []);

  useEffect(() => {
    dispatch({ type: FILTER_PRODUCTS });
  }, [state.filter]);

  const toListView = () => {
    dispatch({ type: TO_LIST_VIEW });
  };

  const toGridView = () => {
    dispatch({ type: TO_GRID_VIEW });
  };

  const changeFilter = (data, type) => {
    dispatch({ type: CHANGE_FILTER, payload: { data, check: type } });
  };

  const changeSort = (value) => {
    dispatch({ type: CHANGE_SORT, payload: value });
  };

  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  const changeImage = (index) => {
    dispatch({type: CHANGE_IMAGE , payload:index})
  }

  return (
    <productsContext.Provider
      value={{
        state,
        toListView,
        toGridView,
        changeFilter,
        changeSort,
        clearFilter,
        changeImage
      }}
    >
      {children}
    </productsContext.Provider>
  );
};

export { productsContext, ProductsProvider };
