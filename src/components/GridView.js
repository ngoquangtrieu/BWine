import { useContext } from "react"
import { Link } from "react-router-dom"
import { productsContext } from "../context/ProductsContext"
import "../scss/scssComponents/GridView.scss"



function GridView(){
    const {state} = useContext(productsContext)
    const {productsFilter} = state
    return(
        <>  
            <ul className="gridView">
                {productsFilter.map((item) => (
                    <li key={item.id}>
                        <img src={`${item.image}`}/>
                        <span>{item.name}</span>
                        <Link to={`/Products/${item.id}`}><i className="fa-solid fa-magnifying-glass"></i></Link>
                        <p>{"$"}{item.price/100}</p>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default GridView