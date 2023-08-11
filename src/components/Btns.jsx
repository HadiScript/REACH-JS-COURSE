import React from "react";

const Btns = ({ cartsCount, switchToCart }) => {
  return (
    <div className="buttons">
      <button onClick={switchToCart}> {cartsCount} Cart</button>
      <button> 12 Orders </button>
    </div>
  );
};

export default Btns;
