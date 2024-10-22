import React, { useEffect } from "react";
import Carousal from "react-material-ui-carousel";
import "./ProductDetails.css";
import { useSelector, useDispatch } from "react-redux";
import { getProductDetails } from "../../actions/productAction";
import { useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const ProductDetails = ({ match }) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { loading, product, error } = useSelector(
    (state) => state.productDetails
  );

  useEffect(() => {
    dispatch(getProductDetails(id)); //provides properties that can be useful for accessing route parameters,path,url
  }, [dispatch, id]);

  const options = {
    edit: false,
    color: "rgba(20,20,20,0.1)",
    activeColor: "tomato",
    value: product.ratings,
    isHalf: true,
    size: window.innerWidth < 600 ? 20 : 25, // Dynamic size based on screen width
  };
  return (
    <>
      <div className="ProductDetails">
        <div>
          <Carousal>
            {product.images &&
              product.images.map((item, i) => (
                <img
                  className="CarousalImage"
                  key={item.url}
                  src={item.url}
                  alt={`${i} Slide`}
                />
              ))}
          </Carousal>
        </div>
        <div>
          <div className="details-1">
            <h2>{product.name}</h2>
            <p>Product # {product._id}</p>
          </div>
          <div className="details-2">
            <ReactStars {...options} />
            <span>({product.numOfReviews} Reviews)</span>
          </div>
          <div className="details-3">
            <h1>&#8377;{product.price}</h1>
            <div className="details-3-1">
              <div className="details-3-1-1">
                <button>-</button>
                <input type="number" value={1} />
                <button>+</button>
              </div>{" "}
              <button>Add To Cart</button>
            </div>

            <p>
                Status:{" "}
                <b className={product.Stock < 1 ? "redColor" : "greenColor"}>
                    {product.Stock < 1 ? "OutOfStock" : "InStock"}
                </b>
            </p>
          </div>

          <div className="details-4">
            Description : <p>{product.description}</p>
          </div>
          <button className="submitReview">Submit Review</button>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
