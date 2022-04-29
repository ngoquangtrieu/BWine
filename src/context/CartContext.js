import React, { useEffect } from "react";
import { useReducer } from "react";
import { ADD_CART,REMOVE_CART,TONGLE_AMOUNT,CLEAR_CART ,COUNT_CART_TOTAL , CHANGE_BAR} from "../action";
import cartReducer from "../reducers/cartReducer";
const cartContext = React.createContext();

const getLocalStorage = () => {
  let listCart = localStorage.getItem("listCart")
  if(listCart){
    return JSON.parse(localStorage.getItem("listCart"))
  }else{
    return []
  }
}

const initialState = {
  listCart: getLocalStorage(),
  shipCost: 668,
  totalItem:0,
  totalAmount:0,
  bar:false
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addCart = (color, name, image, price, id , amount ) => {
    dispatch({ type: ADD_CART, payload: { color, name, image, price, id , amount } });
  };

  const removeCart = (id ) => {
    dispatch({type : REMOVE_CART , payload : id })
  }

  const tongleAmount = (id ,color , value) => {
    dispatch({type : TONGLE_AMOUNT , payload : {id ,color , value}})
  }

  const clearCart = () => {
    dispatch({type : CLEAR_CART })
  }

  const changeBar = () => {
    dispatch({type : CHANGE_BAR})
  }

  useEffect(() => {
    localStorage.setItem('listCart',JSON.stringify(state.listCart))
    dispatch({type : COUNT_CART_TOTAL})
  },[state.listCart])

  return (
    <cartContext.Provider value={{ state, addCart , removeCart ,tongleAmount , clearCart ,changeBar}}>
      {children}
    </cartContext.Provider>
  );
};

export { cartContext, CartProvider };