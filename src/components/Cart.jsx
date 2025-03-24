// src/components/Cart.jsx
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useContext(CartContext);

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <ul>
          {cart.map((product) => (
            <li key={product.id}>
              <h3>{product.name}</h3>
              <p>${product.price} x {product.quantity}</p>
              <button onClick={() => removeFromCart(product.id)}>Eliminar</button>
              <div>
                <button onClick={() => updateQuantity(product.id, product.quantity - 1)}>-</button>
                <button onClick={() => updateQuantity(product.id, product.quantity + 1)}>+</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ${totalPrice}</h3>
    </div>
  );
};

export default Cart;
