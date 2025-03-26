// src/App.jsx
import {useContext, useEffect} from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import ThemeButton from "./components/ThemeButton";
import '../src/index.css'
import { ThemeContext } from "./context/ThemeContext";

const App = () => {
  const { theme } = useContext(ThemeContext);

  // Apply dark or light theme class to the body element
  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark-theme");
      document.body.classList.remove("light-theme");
    } else {
      document.body.classList.add("light-theme");
      document.body.classList.remove("dark-theme");
    }
  }, [theme]);

  return (
    <div className={`App ${theme === "dark" ? "dark-theme" : ""}`}>
          <div className="App">
            <ThemeButton />
            <ProductList />
            <Cart />
          </div>
    </div>
  );
};

export default App;
