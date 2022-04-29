import "../scss/scssComponents/CheckAge.scss";
import logo from "../assets/img/logo.png";
import { useContext } from "react";
import { ageContext } from "../context/AgeContext";

function CheckAge() {
    const {state,checkAgeSmall , checkAgeBig} = useContext(ageContext)
    const {checkSmall} = state
  return (
    <>
      <div className="checkAge">
        <div className="checkAge-Form">
          <img src={logo} />
          <p>Please provide information.</p>
          <span>{checkSmall ? "You are under 18 years of age to access the website. Please come back later!" : ""}</span>
          <h5>YOU ARE 18 YEARS OLD?</h5>
          <div className="checkAge-Form-Button">
            <button onClick={() => checkAgeBig()}>Enough 18 years old</button>
            <button onClick={() => checkAgeSmall()}>Under 18 years old</button>
          </div>
          <h6>
          The website only introduces wine products to people over 18 years old.
          </h6>
        </div>
      </div>
    </>
  );
}

export default CheckAge;
