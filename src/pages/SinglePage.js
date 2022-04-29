import { useContext } from "react"
import { useParams } from "react-router-dom"
import AddressSingle from "../components/AddressSingle"
import SingleContent from "../components/SingleContent"
import { productsContext } from "../context/ProductsContext"



function SinglePage (){
    const {state} = useContext(productsContext)
    const {productsMain} = state

    const { id } = useParams()

    const product = productsMain.find((item) => {
        return item.id === id
    })
    
    return(
        <>
            <AddressSingle title={`${product.name}`} />
            <SingleContent product={product}/>
        </>
    )
}

export default SinglePage