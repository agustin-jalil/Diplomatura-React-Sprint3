// src/components/ThemeButton.jsx
import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button 
      onClick={toggleTheme} 
      className={`App__theme-button ${theme === "dark" ? "dark-theme" : ""}`}
    >
      Cambiar a {theme === "light" ? "oscuro" : "claro"} tema
    </button>
  );
};

export default ThemeButton;
