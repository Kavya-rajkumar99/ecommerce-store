import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";
import CartQuantityToggle from "./CartQuantityToggle";

const AddToCart = ({ product }) => {
  const { colors,stock } = product;
  const [color, setColor] = useState(colors[0]);
  const [quantity, setQuantity] = useState(1);

  const incrementHandler = () => {
    quantity < stock ? setQuantity(quantity + 1) : setQuantity(quantity);
  };
  const decrementHandler = () => {
    quantity > 1 ? setQuantity(quantity - 1) : setQuantity(quantity);
  };
  return (
    <Wrapper>
      <div className="colors">
        <p>
          Color :
          {colors.map((curColor, index) => (
            <button
              key={index}
              style={{ backgroundColor: curColor }}
              className={color === curColor ? "btnStyle active" : "btnStyle"}
              onClick={() => setColor(curColor)}
            >
              {color === curColor ? <FaCheck className="checkStyle" /> : null}
            </button>
          ))}
        </p>
      </div>
      <CartQuantityToggle
        quantity={quantity}
        incrementHandler={incrementHandler}
        decrementHandler={decrementHandler}
      />
      <NavLink to="/cart">
        <Button className="btn">Add To Cart</Button>
      </NavLink>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .colors p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }
  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }

  .amount-toggle {
    margin-top: 3rem;
    margin-bottom: 2rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.4rem;
    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }
    .cart-icon{
        display : flex;
    }
    .amount-style {
       font-size: 2.4rem;
       color: ${({ theme }) => theme.colors.btn};
    }
  }
`;
export default AddToCart;
