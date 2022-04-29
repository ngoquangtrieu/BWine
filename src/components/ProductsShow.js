import View from "./View";
import "../scss/scssComponents/ProductsShow.scss";
import { useContext } from "react";
import { productsContext } from "../context/ProductsContext";

function ProductsShow() {
  const {state,toListView , toGridView , changeSort} = useContext(productsContext)
  const {found , gridView} = state
  return (
    <>
      <div className="productsShow">
        <div className="productsShow-nav">
          <div className="productsShow-nav-icon">
            <i className={`fa-solid fa-border-all ${gridView ? "iconActive" : null}`} onClick={() => toGridView()}></i>
            <i className={`fa-solid fa-list ${gridView ? null : "iconActive"}`} onClick={() => toListView()}></i>
          </div>
          <span className="productsShow-nav-text">{found} Products Found</span>
          <div className="productsShow-nav-line"></div>
          <div className="productsShow-nav-filter">
            <span>Sort By</span>
            <select onChange={(e) => changeSort(e.target.value)}>
              <option value="priceLowest">Price (Lowest)</option>
              <option value="priceHighest">Price (Highest)</option>
              <option value="nameAZ">Name (A-Z)</option>
              <option value="nameZA">Name (Z-A)</option>
            </select>
          </div>
        </div>
        <View />
      </div>
    </>
  );
}

export default ProductsShow;
