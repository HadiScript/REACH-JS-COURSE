import React from "react";

const ProductList = ({ products, addToCart }) => {
  return (
    <div className="card-container">
      {products.map((x) => (
        <div className="card">
          <h3>{x.name}</h3>
          <p>{x.desc}</p>
          <h5 className="price"> {x.price} PKR </h5>

          <button onClick={() => addToCart(x)}>Add to cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
