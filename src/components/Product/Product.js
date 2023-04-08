import React from "react";

const Product = ({ product }) => {
  const { img, title } = product;
  console.log(product);
  return (
    <div className="card w-90 bg-base-100 shadow-xl" style={{ padding: "4px" }}>
      <figure>
        <img src={img} alt="img" style={{ width: "350px", height: "350px" }} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
      </div>
    </div>
  );
};

export default Product;
