import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useContext(CartContext);

  return (
    <div className="cart">
      <h2 className="cart__title">Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p className="cart__empty-message">El carrito está vacío.</p>
      ) : (
        <ul className="cart__items">
          {cart.map((product) => (
            <li key={product.id} className="cart__item">
              <h3 className="cart__item-name">{product.name}</h3>
              <p className="cart__item-price">
                ${product.price} x {product.quantity}
              </p>
              <button
                onClick={() => removeFromCart(product.id)}
                className="cart__item-button"
              >
                Eliminar
              </button>
              <div className="cart__item-quantity-controls">
                <button
                  onClick={() => updateQuantity(product.id, product.quantity - 1)}
                  className="cart__item-button"
                >
                  -
                </button>
                <button
                  onClick={() => updateQuantity(product.id, product.quantity + 1)}
                  className="cart__item-button"
                >
                  +
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <h3 className="cart__total">Total: ${totalPrice}</h3>
    </div>
  );
};

export default Cart;
