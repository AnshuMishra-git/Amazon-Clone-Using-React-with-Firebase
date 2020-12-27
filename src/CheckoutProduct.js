import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";
export default function CheckoutProduct({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const RemoveFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div>
      <div className="checkoutProduct">
        <img className="checkoutProduct_image" src={image} alt="" />
        <div className="checkoutProduct_info">
          <p className="checkoutProduct_title">
            {title}
            <br></br>
            <small>₹</small>
            <strong>{price}</strong>
          </p>
          <div className="CheckoutProduct_rating">
            {Array(rating)
              .fill()
              .map((_) => (
                <p>⭐</p>
              ))}
          </div>
        </div>
        <button id="BUTTON" onClick={RemoveFromBasket}>
          Remove From Basket
        </button>
      </div>
    </div>
  );
}
