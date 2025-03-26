import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Auriculares", price: 200 },
  { id: 3, name: "Mouse", price: 50 },
];

const ProductList = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-list">
      <h2 className="product-list__title">Productos Disponibles</h2>
      <ul className="product-list__items">
        {products.map((product) => (
          <li key={product.id} className="product-list__item">
            <h3 className="product-list__item-name">{product.name}</h3>
            <p className="product-list__item-price">${product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="product-list__item-button"
            >
              Agregar al carrito
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
