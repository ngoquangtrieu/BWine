import { Link } from "react-router-dom";
import "../scss/scssParts/Header.scss";
import logo from "../assets/img/logo.png";
import { useContext } from "react";
import { userContext } from "../context/UserContext";
import { cartContext } from "../context/CartContext";

function Header() {
  const { loginWithRedirect, logout, user } = useContext(userContext);
  const { state  , changeBar} = useContext(cartContext);
  const { totalItem , bar } = state;
  return (
    <>
      <div className="header">
        <div className="header-logo">
          <img src={logo} />
        </div>
        <ul className="header-listPageLeft">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Products">Products</Link>
          </li>
        </ul>
        <ul className="header-listPageRight">
          <li className="pageCart">
            <Link to="/Cart">
              Cart<i className="fa-solid fa-cart-shopping"></i>
              <div className="totalItem">
                <span>{totalItem}</span>
              </div>
            </Link>
          </li>
          {user != undefined ? (
            <li className="page">
              <div className="pageRight" onClick={logout}>
                Logout<i className="fa-solid fa-user-check"></i>
              </div>
            </li>
          ) : (
            <li className="page">
              <div className="pageRight" onClick={loginWithRedirect}>
                Login<i className="fa-solid fa-user"></i>
              </div>
            </li>
          )}
        </ul>
        <div className="header-menu">
          <i className="fa-solid fa-bars" onClick={() => changeBar()}></i>
        </div>
      </div>
      <div className={`bar ${bar ? "transform" : null}`}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Products">Products</Link>
          </li>
        </ul>
        <ul>
          <li className="pageCart">
            <Link to="/Cart">
              Cart<i className="fa-solid fa-cart-shopping"></i>
              <div className="totalItem">
                <span>{totalItem}</span>
              </div>
            </Link>
          </li>
          {user != undefined ? (
            <li className="page">
              <div className="pageRight" onClick={logout}>
                Logout<i className="fa-solid fa-user-check"></i>
              </div>
            </li>
          ) : (
            <li className="page">
              <div className="pageRight" onClick={loginWithRedirect}>
                Login<i className="fa-solid fa-user"></i>
              </div>
            </li>
          )}
        </ul>
      </div>
    </>
  );
}

export default Header;
