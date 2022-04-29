import { brands } from "../constants/constants";
import "../scss/scssComponents/Brand.scss";

function Brand() {
  return (
    <>
      <div className="brand">
        <h1>Brand Discover</h1>
        <h6>Proudly representing some of the world's finest manufacturers.</h6>
        <ul>
          {brands.map((brand) => (
            <li key={brand.id}>
              <div className="brandImage">
                <img src={brand.image} />
              </div>
              <p>{brand.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Brand;
