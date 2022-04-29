import { Link } from "react-router-dom";
import "../scss/scssComponents/SingleContent.scss";
import AddToCart from "./AddtoCart";
import SingleImage from "./SingleImage";

function SingleContent(props) {
  const singleProducts = props.product;
  return (
    <>
      <div className="singleContent">
        <Link className="backToProducts" to="/products">
          BACK TO PRODUCTS
        </Link>
        <div className="singleContent-infor">
          <div className="singleContent-infor-img">
            <SingleImage images={singleProducts.images} image={singleProducts.image}/>
          </div>
          <div className="singleContent-infor-text">
            <h2>{singleProducts.name}</h2>
            <span>
              {singleProducts.stars} <i className="fa-solid fa-star"></i> (
              {singleProducts.reviews} Reviewers)
            </span>
            <h5>
              {"$"}
              {singleProducts.price / 100}
            </h5>
            <p className="singleContent-infor-text-description">{singleProducts.description}</p>
            <p className="singleContent-infor-text-available">
              <span>Available :</span>
              {singleProducts.stock > 0 ? "In stock" : "Out of stock"}
            </p>
            <p className="singleContent-infor-text-sku">
              <span>SKU :</span>
              {singleProducts.id}
            </p>
            <p className="singleContent-infor-text-brand">
              <span>Brand :</span>
              {singleProducts.company}
            </p>
            <hr />
            <AddToCart
              colors={singleProducts.colors}
              name={singleProducts.name}
              price={singleProducts.price}
              image={singleProducts.images}
              id={singleProducts.id}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleContent;
