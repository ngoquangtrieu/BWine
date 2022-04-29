import "../scss/scssComponents/AddToCart.scss";
import { useContext, useState } from "react";
import { cartContext } from "../context/CartContext";
import { Link } from "react-router-dom";


function AddToCart({ colors = [] ,name = "" , price = 0 , image = "" , id = ""}) {
  const [mainColor, setMainColor] = useState(colors[0]);
  const [amount , setAmount] = useState(1)

  const { addCart } = useContext(cartContext);
  return (
    <>
      <div className="inforTextColors">
        <span>Colors :</span>
        {colors.map((color, index) => {
          return (
            <button
              style={{ background: color }}
              key={index}
              value={color}
              onClick={() => setMainColor(color)}
            >
              {mainColor === color ? (
                <i className="fa-solid fa-check"></i>
              ) : null}
            </button>
          );
        })}
      </div>
      <div className="inforContainer">
        <button className="inforContainer-minus" onClick={() => (amount === 1 ? 1 : setAmount(amount - 1))}>
          <i className="fa-solid fa-minus"></i>
        </button>
        <h2>{amount}</h2>
        <button className="inforContainer-plus" onClick={() => setAmount(amount + 1)}>
          <i className="fa-solid fa-plus"></i>
        </button>
      </div>
      <Link to='/Cart' className="addToCart" onClick={() => {addCart(mainColor , name , image[0].url , price , id , amount)}}>Add to Cart</Link>
    </>
  );
}

export default AddToCart;