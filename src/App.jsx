// src/App.jsx
import React from "react";
import { CartProvider } from "./context/CartContext";
import { ThemeProvider } from "./context/ThemeContext";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import ThemeButton from "./components/ThemeButton";

const App = () => {
  return (
    <ThemeProvider>
      <CartProvider>
        <div className="App">
          <ThemeButton />
          <ProductList />
          <Cart />
        </div>
      </CartProvider>
    </ThemeProvider>
  );
};

export default App;
