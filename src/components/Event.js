import { useContext } from "react";
import { emailContext } from "../context/EmailContext";
import "../scss/scssComponents/Event.scss";

function Event() {
    const {state, changeEmail , checkEmailDo} = useContext(emailContext)
    const {email , checkEmail} = state
    console.log(checkEmail);
  return (
    <>
      <div className="event">
        <h1>Sign Up - Get More Offers</h1>
        <div className="event-list">
          <h4>
            Register as a member of BWine to receive many special offers only
            for members.
          </h4>
          <div className={`event-list-form ${checkEmail === false ? "vibrate" : null}`} >
            <input value={email} onChange={(e) => changeEmail(e.target.value)} placeholder="Email" />
            <button onClick={() => checkEmailDo()}>SEND</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Event;
