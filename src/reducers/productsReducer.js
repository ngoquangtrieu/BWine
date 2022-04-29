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

const productsReducer = (state, action) => {
  switch (action.type) {
    case GET_DATA: {
      let newProducts = [...state.productsMain];
      let maxPrice = Math.max.apply(
        Math,
        newProducts.map((item) => item.price)
      );
      return {
        ...state,
        productsFilter: newProducts,
        filter: { ...state.filter, price: maxPrice, maxPrice: maxPrice },
      };
    }
    case CHANGE_FILTER: {
      const { data, check } = action.payload;
      return {
        ...state,
        filter: { ...state.filter, [check]: data },
      };
    }
    case FILTER_PRODUCTS: {
      let newProducts = [...state.productsMain];
      const { category, company, colors, price, freeShip , search} = state.filter;
      if(search !== ""){
          newProducts = newProducts.filter((item) => {
              return item.name.indexOf(search) !== -1
          })
      }
      if (category !== "All") {
        newProducts = newProducts.filter((item) => {
          return item.category === category;
        });
      }
      if (company !== "All") {
        newProducts = newProducts.filter((item) => {
          return item.company === company;
        });
      }
      if (colors !== "All") {
        newProducts = newProducts.filter((item) => {
          return item.colors.find((color) => color === colors);
        });
      }
      newProducts = newProducts.filter((item) => {
        return item.price <= price;
      });
      if (freeShip === true) {
        newProducts = newProducts.filter((item) => {
          return item.shipping == freeShip;
        });
      }
      const found = newProducts.length;
      return {
        ...state,
        found: found,
        productsFilter: newProducts,
      };
    }
    case TO_LIST_VIEW: {
      return {
        ...state,
        gridView: false,
      };
    }
    case TO_GRID_VIEW: {
      return {
        ...state,
        gridView: true,
      };
    }
    case CHANGE_SORT: {
      let newProducts = [...state.productsMain];
      if (action.payload === "priceLowest") {
        newProducts = newProducts.sort((a, b) => {
          return a.price - b.price;
        });
        console.log(newProducts);
      }
      if (action.payload === "priceHighest") {
        newProducts = newProducts.sort((a, b) => {
          return b.price - a.price;
        });
      }
      if (action.payload === "nameAZ") {
        newProducts = newProducts.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
      }
      if (action.payload === "nameZA") {
        newProducts = newProducts.sort((a, b) => {
          return b.name.localeCompare(a.name);
        });
      }
      return {
        ...state,
        valueSort: action.payload,
        productsFilter: newProducts,
      };
    }
    case CLEAR_FILTER: {
      return {
        ...state,
        filter: {
          ...state.filter,
          seacrch: "",
          category: "All",
          company: "All",
          colors: "All",
          price: state.filter.maxPrice,
          freeShip: false,
        },
      };
    }
    case CHANGE_IMAGE :{
      return {
        ...state,
        indexImage:action.payload,
      }
    }
    default:
      return state;
  }
};

export default productsReducer;
