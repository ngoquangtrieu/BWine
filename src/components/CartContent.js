import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../context/CartContext";
import "../scss/scssComponents/CartContent.scss";

function CartContent() {
  const { state , removeCart , tongleAmount , clearCart} = useContext(cartContext);

  const { listCart , shipCost , totalAmount} = state;
  const total = totalAmount + shipCost
  if (listCart.length === 0) {
    return (
      <>
        <div className="listCartNull">
          <h1>Your cart is empty</h1>
          <Link to="/Products">Fill it</Link>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="topicList">
        <span className="topicList-iteam topicIteamItem">Item</span>
        <span className="topicList-iteam topicIteamPrice">Price</span>
        <span className="topicList-iteam topicIteamQuantity">Quantity</span>
        <span className="topicList-iteam topicIteamSubtotal">Subtotal</span>
        <span className="topicList-iteam"></span>
      </div>
      <div className="showCart">
        <hr />
        {listCart.map((item, index) => {
          return (
            <li key={index} value={index}>
              <div className="showCart-infor">
                <img src={item.image} className="showCartImage" />
                <div className="showCart-infor-text">
                  <div className="showCart-infor-text-name">{item.name}</div>
                  <div className="showCart-infor-text-color">
                    Color :{" "}
                    <div
                      style={{
                        background: `${item.color}`,
                        width: "12px",
                        height: "12px",
                        borderRadius: "4px",
                        marginLeft: "4px",
                        transform: "translateY(2px)",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
              <span className="showCart-price">
                {"$"}
                {item.price / 100}
              </span>
              <div className="showCart-amount">
                <button onClick={() => tongleAmount(item.id ,item.color ,"dec")}>
                  <i className="fa-solid fa-minus"></i>
                </button>
                {item.amount}
                <button onClick={() => tongleAmount(item.id ,item.color ,"inc")}>
                  <i className="fa-solid fa-plus"></i>
                </button>
              </div>
              <span className="showCart-total">
                {"$"}
                {(item.amount * item.price) / 100}
              </span>
              <button className="showCart-garbage">
                <i onClick={() => removeCart(`${item.id}${item.color}`)} className="fa-solid fa-trash"></i>
              </button>
            </li>
          );
        })}
      </div>
      <div className="cartPay">
        <hr />
        <div className="cartPay-continueClear">
          <Link to="/Products">
            Continue Shopping
          </Link>
          <button onClick={() => clearCart()}>Clear Shopping Cart</button>
        </div>
        <div className="cartPay-format">
          <div className="cartPay-format-form">
            <h5>
              Subtotal :<span>{"$"}{totalAmount/100}</span>
            </h5>
            <p>
              Shipping Fee :<span>{"$"}{shipCost/100}</span>
            </p>
            <hr />
            <h4>
              Order Total : <span>{"$"}{total/100}</span>
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartContent;
