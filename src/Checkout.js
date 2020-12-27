import React from "react";
import { useStateValue } from "./StateProvider";
import logo from "./checkoutimage.jpg";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";

export default function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img className="checkout_ad" src={logo} alt=""></img>
        {basket.length === 0 ? (
          <div>
            <h2>Your Shopping Basket is Empty</h2>
            <p>
              You have a no item in a basket. To buy one or "Add to Basket" next
              to the item".
            </p>
            <hr></hr>
          </div>
        ) : (
          <div>
            <h2 className="checkout_title">Your Shopping Basket </h2>
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout_right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}
