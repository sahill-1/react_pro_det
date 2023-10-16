import React from "react";
import { Link } from "react-router-dom";
import products from "./ProductAPI";
const ProductPage = () => {
  return (
    <>
      <h2>Products Page</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products.map((item) => {
          return (
            <>
              <div
                key={item.id}
                style={{
                  margin: "auto",
                  border: "1px solid red",
                  borderRadius: "10px",
                }}
              >
                <Link to={`/product/${item.id}`}>
                  <h5>{item.name}</h5>
                </Link>
                <h6>{item.brand}</h6>
                <h6>{item.price}</h6>
              </div>
            </>
          );
        })}
  
      </div>
      </>
  );
};

export default ProductPage;
