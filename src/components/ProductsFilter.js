import { useContext } from "react";
import { productsContext } from "../context/ProductsContext";
import "../scss/scssComponents/ProductsFilter.scss";

function ProductsFilter() {
  const { state , changeFilter , clearFilter} = useContext(productsContext);
  const { productsMain ,filter} = state;
  const {price , maxPrice , search , category , colors} = filter
  let Category = productsMain.map((item) => item.category);
  Category = new Set(Category);
  Category = ["All", ...Category];

  let Company = productsMain.map((item) => item.company);
  Company = new Set(Company);
  Company = ["All", ...Company];

  let Colors = productsMain.map((item) => item.colors).flat();
  Colors = new Set(Colors);
  Colors = ["All", ...Colors];

  return (
    <>
      <div className="productsFilter">
        <div className="productsFilter-search">
          <input placeholder="Search..." value={search} onChange={(e) => changeFilter(e.target.value , "search")}/>
        </div>
        <ul className="productsFilter-listCategory">
          <h4>Category</h4>
          {Category.map((item, index) => (
            <li key={index} onClick={() => changeFilter(item , "category")} className={`${item === category ? "activeCategory" : null}`}>
              <img
                src={`https://bizweb.dktcdn.net/thumb/small/100/414/103/themes/801817/assets/header_category${
                  index + 1
                }_image.jpg?1627285936801`}
              />
              {item}
            </li>
          ))}
        </ul>
        <ul className="productsFilter-company">
          <h4>Company</h4>
          <select onChange={(e) => changeFilter(e.target.value , "company")}>
            {Company.map((item) => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>
        </ul>
        <div className="productsFilter-listColors">
          <h4>Colors</h4>
          <ul>
            {Colors.map((item) => (
              <li key={item} className={`${item === colors ? "activeColor" : null}`} onClick={() => changeFilter(item , "colors")} style={{ background: `${item}` }}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="productsFilter-price">
          <h4>Price</h4>
          <p>{"$ "}{price/100}</p>
          <input type="range" min={0} value={price} name="price" max={maxPrice} onChange={(e) => changeFilter(e.target.value , "price")} />
        </div>
        <div className="productsFilter-ship">
          <h4>Free Shipping</h4>
          <input type="checkbox" onChange={(e) => changeFilter(e.target.checked , "freeShip")}/>
        </div>
        <div className="productsFilter-clear">
          <button onClick={() => clearFilter()}>Clear Filters</button>
        </div>
      </div>
    </>
  );
}

export default ProductsFilter;
