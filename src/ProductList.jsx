import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <a href={`/product/${product.id}`}>
            <img src={product.images[0]} alt={product.title} />
            <h2>{product.title}</h2>
            <p>${product.price}</p>
          </a>
          <button className="button">Подробнее</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
