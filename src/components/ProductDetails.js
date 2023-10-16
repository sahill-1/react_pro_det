import React from "react";
import products from "./ProductAPI"
import { useParams } from "react-router-dom";
const ProductDetails = ({ match }) => {
    const {id} = useParams()
  const productId = parseInt(id, 10);
  const product = products.find((item) => item.id === productId);

  if (!product) {
    return <div>Product not found</div>;
  }
  return (
    <div>
      <h2>{product.name}</h2>
      <h3>{product.brand}</h3>
      <h5>{product.price}</h5>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetails;
