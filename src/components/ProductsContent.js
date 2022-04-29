import ProductsFilter from "./ProductsFilter"
import ProductsShow from "./ProductsShow"
import "../scss/scssComponents/ProductsContent.scss"



function ProductsContent(){
    return (
        <>
            <div className="productsContent">
                <ProductsFilter />
                <ProductsShow />
            </div>
        </>
    )
}

export default ProductsContent