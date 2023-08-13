// src/components/ShoppingCart.js
import React from "react";
import { useCart } from "../../context/cartContext/cartContext";
import { availableItems } from "../../dummyItem";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import "./cart.scss";

const ShoppingCart = () => {
  const { cartState, dispatch } = useCart();

  const addToCart = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  const removeFromCart = (itemId) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: itemId });
  };

  const cartItemsCount = cartState.cartItems.length;
  const subtotal = cartState.cartItems.reduce(
    (total, item) => total + item.price,
    0
  );

  return (
    <div className="shoppingCart">
      <Navbar />
      <h1>Shopping Cart</h1>
      <div className="checkout">
        <div className="cartItems">
          <h2>Cart Items</h2>

          <div className="cartItem">
            {cartState.cartItems?.map((item, index) => (
              <div className="singleProduct" key={`cart-${item.id} - ${index}`}>
                <div className="productInfo">
                  <img src={item.img} alt="imgErr" />
                  <p>{item.name}</p>
                  <p>$ {item.price}</p>
                </div>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
                <hr className="HR" />
              </div>
            ))}
          </div>
        </div>
        <div className="subTotal">
          <p>Total Items in Cart: {cartItemsCount}</p>
          <p>Subtotal: ${subtotal.toFixed(2)}</p>
          <button>checkout</button>
        </div>
      </div>
      <div className="availableItems">
        <h2>Available Items</h2>

        <div className="availableItem">
          {availableItems.map((item) => (
            <div className="singleItem" key={item.id}>
              <img src={item.img} alt="imgErr" />
              <p>{item.name}</p>
              <p>$ {item.price}</p>
              <button onClick={() => addToCart(item)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ShoppingCart;
