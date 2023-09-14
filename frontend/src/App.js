import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from "./screens/Home";
import Signup from "./screens/Signup";
import Login from "./screens/Login";
import CartProvider from "./components/ContextReducer";
import Cart, { MyOrder } from "./screens/Cart";

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/createuser" element={<Signup />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/myorders" element={<MyOrder />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
