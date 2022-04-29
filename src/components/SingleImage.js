import { useContext } from "react";
import { productsContext } from "../context/ProductsContext";
import "../scss/scssComponents/SingleImage.scss"

function SingleImage({ images = [[]], image }) {
    const {state , changeImage} = useContext(productsContext)
    const {indexImage} = state
  return (
    <>
      <div className="imgMain">
        <img src={images[indexImage].url} />
      </div>
      <div className="listImg">
        {images.map((item, index) => {
          return (
            <img
              key={index}
              className={`${indexImage === index ? "borderImage" : null}`}
              onClick={() => changeImage(index)}
              src={item.url}
            />
          );
        })}
      </div>
    </>
  );
}

export default SingleImage;
