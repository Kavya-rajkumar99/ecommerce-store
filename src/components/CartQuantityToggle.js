import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const CartQuantityToggle = ({
  quantity,
  incrementHandler,
  decrementHandler,
}) => {
  return (
    <div className="cart-button">
      <div className="amount-toggle">
        <button onClick={decrementHandler}>
          <FaMinus className="cart-icon"/>
        </button>
        <div className="amount-style">{quantity}</div>
        <button onClick={incrementHandler}>
          <FaPlus className="cart-icon"/>
        </button>
      </div>
    </div>
  );
};

export default CartQuantityToggle;
