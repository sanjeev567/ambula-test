import React from "react";
import "./App.css";
import ShoppingCart from "./components/cart/Cart";
import Cart from "./components/cart/Cart";
import TodoApp from "./components/todo/Todo";
import { CartProvider } from "./context/cartContext/cartContext";
import { TodoContextProvider } from "./context/todoContext/todoContext";
import WeatherApp from "./components/whether/WhetherApp";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    // <TodoContextProvider>
    //   <TodoApp />
    // </TodoContextProvider>
    // <CartProvider>
    //   <div className="App">
    //     <ShoppingCart />
    //   </div>
    // </CartProvider>
    // <WeatherApp />
    // <Home />
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/weather" element={<WeatherApp />} />
        <Route
          path="/todo"
          element={
            <TodoContextProvider>
              <TodoApp />
            </TodoContextProvider>
          }
        />
        <Route
          path="/cart"
          element={
            <CartProvider>
              <div className="App">
                <ShoppingCart />
              </div>
            </CartProvider>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
