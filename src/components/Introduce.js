import { useContext } from "react"
import { Link } from "react-router-dom"
import { emailContext } from "../context/EmailContext"
import "../scss/scssComponents/Introduce.scss"


function Introduce(){
    const {state} = useContext(emailContext)
    const {emailTrue , checkEmail} = state
    return(
        <>
            <div className="introduce">
                <div className="introduce-text">
                    <h1> BWine Zone<br/>Design With BAP</h1>
                    <p>If the pinnacle of music is opera, the alcoholic academic drink is wine. Over time, wine is no longer a luxury drink reserved for the elite, but has become close to the majority of Vietnamese people.</p>
                    <Link to="/Products">ShopNow</Link>
                </div>
                <div className="introduce-img">
                    <img src="https://i.pinimg.com/564x/19/d5/ec/19d5eca4bc29db780d8a5013e3a34b37.jpg"/>
                    <img src="https://i.pinimg.com/564x/2c/88/24/2c88240d67c9433c64e33eeb49f0a80a.jpg"/>
                </div>
                <div className={`introduce-notic ${checkEmail === true ? "showNotic" : null}`}>
                    <span>Email : <span>{emailTrue}</span> registered successfully !</span>
                </div>
            </div>
        </>
    )
}

export default Introduce