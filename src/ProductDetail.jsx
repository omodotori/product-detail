import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./App.css";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
      });      
  }, [id]);

  if (!product) {
    return <div className="loader"></div>;
  }

  return (
    <div className="product-detail">
      <img src={product.images[0]} alt={product.title} />
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>${product.price}</p>
    </div>
  );
}

export default ProductDetail;
