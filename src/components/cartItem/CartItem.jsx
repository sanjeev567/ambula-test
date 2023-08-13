// CartItem.js
import React from "react";

const CartItem = ({ item, onRemove }) => {
  return (
    <div className="cart-item">
      <span>{item.name}</span>
      <span>Quantity: {item.quantity}</span>
      <button onClick={() => onRemove(item.id)}>Remove</button>
    </div>
  );
};

export default CartItem;
