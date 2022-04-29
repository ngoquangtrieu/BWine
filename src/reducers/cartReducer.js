import { ADD_CART, REMOVE_CART, TONGLE_AMOUNT ,CLEAR_CART , COUNT_CART_TOTAL ,CHANGE_BAR} from "../action";

const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_CART: {
      const { color, name, image, price, id, amount } = action.payload;
      let checkTongleAmount = 0
      const temCart = state.listCart.map((item) => {
        if (id === item.id && color === item.color) {
            checkTongleAmount = 1
            let newAmount = item.amount + amount
          return {
            ...item,
            amount: newAmount,
          };
        }
        return item
      });
      if(checkTongleAmount == 1){
          return{
              ...state,listCart:temCart
          }
      }else{
          return{
              ...state, listCart:[...state.listCart , {id : id , color : color , name : name , image : image , price : price , amount :amount}]
          }
      }
    }
    case REMOVE_CART: {
      const temCart = state.listCart.filter(
        (item) => (`${item.id}${item.color}` !== action.payload )
      );
      return {
        ...state,
        listCart: temCart,
      };
    }
    case TONGLE_AMOUNT: {
      const { id,color ,value } = action.payload;
      const temCart = state.listCart.map((item) => {
        if (item.id === id && item.color === color) {
          if (value === "inc") {
            let newAmount = item.amount + 1;
            return { ...item, amount: newAmount };
          }
          if (value === "dec") {
            let newAmount = item.amount - 1;
            if (newAmount < 1) {
              newAmount = 1;
            }
            return { ...item, amount: newAmount };
          }
        }
        return item;
      });
      return {
        ...state,
        listCart: temCart,
      };
    }
    case CLEAR_CART:{
      return{
        ...state , listCart:[]
      }
    }
    case COUNT_CART_TOTAL:{
      const {totalItem , totalAmount} = state.listCart.reduce((total , itemCart) => {
        const {amount , price} = itemCart
        total.totalItem += amount
        total.totalAmount += price * amount
        return total
      },{totalItem:0 , totalAmount:0})
      return{
        ...state , totalItem:totalItem , totalAmount:totalAmount
      }
    }
    case CHANGE_BAR : {
      return{
        ...state , bar : !state.bar
      }
    }
    default: {
      return state;
    }
  }
};

export default cartReducer;
