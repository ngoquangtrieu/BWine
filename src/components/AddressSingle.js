import { Link } from "react-router-dom"
import "../scss/scssComponents/AddressSingle.scss"


function AddressSingle(props){
    return(
        <>
            <div className="addressSingle">
                <Link to="/">Home</Link>
                <Link to="/Products">/ Products</Link>
                <span> / {props.title}</span>
            </div>
        </>
    )
}

export default AddressSingle