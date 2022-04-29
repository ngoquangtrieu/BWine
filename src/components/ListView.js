import { useContext } from "react"
import { Link } from "react-router-dom"
import { productsContext } from "../context/ProductsContext"
import "../scss/scssComponents/ListView.scss"



function ListView(){
    const {state} = useContext(productsContext)
    const {productsFilter} = state
    
    return(
        <>
            <ul className="listView">
                {productsFilter.map((item) => (
                    <li key={item.id}>
                        <img src={item.image} />
                        <div className="listViewInfor">
                            <h3>{item.name}</h3>
                            <span>{"$"}{item.price/100}</span>
                            <p>{item.description}</p>
                            <Link to={`/Products/${item.id}`}>Details</Link>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default ListView