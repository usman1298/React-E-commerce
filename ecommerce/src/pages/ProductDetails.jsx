import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addItem, removeItem, addToCart, resetQuantity } from "../redux/cartAction";


function ProductDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [Details, setDetails] = useState([]);
  useEffect(() => {
    async function getProductDetails() {
      const response = await axios(`https://fakestoreapi.com/products/${id}`);
      setDetails(response.data);
      dispatch(resetQuantity());
    }

    getProductDetails();
  }, [id]);
  const toTitleCase = (text) => {
    if (text) {
      return text
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    } else {
      return "";
    }
  };
  const dispatch = useDispatch();
  const quantity = useSelector((state) => state.quantity);
  const handleAddItem = () => {
    dispatch(addItem());
  };

  const handleRemoveItem = () => {
    dispatch(removeItem());
  };

  const handleAddToCart = () => {
    dispatch(addToCart(Details, quantity));
    alert("Added to cart!");
    navigate("/products");
  };
  return (
    <>
    <h1 className="my-4 pro-d">Product Details</h1>
    <div className="ProductDetails">
      
        <img src={Details.image} width={350} alt={Details.title} />
      
        <div className="product-info mx-5">
          <h1>{Details.title}</h1>
          <h2>{toTitleCase(Details.category)}</h2>
          <h2>{Details.price}</h2>
          {Details.rating && typeof Details.rating === "object" ? (
            <h3>
              Rating: {Details.rating.rate} (Based on {Details.rating.count}{" "}
              ratings)
            </h3>
          ) : (
            <div>No rating available</div>
          )}
          <div className="product-quant">
            <button className="btn btn-primary" onClick={handleRemoveItem}>-</button>
            <h2 className="mx-3">{quantity}</h2>
            <button className="btn btn-primary" onClick={handleAddItem}>+</button>
          </div>
          <div className="Cart">
            <button className="btn btn-success my-3" onClick={handleAddToCart}>Add to Cart</button>
          </div>
          <p className="Description">{Details.description}</p>
        </div>
      
    </div>
    </>
  );
}

export default ProductDetails;