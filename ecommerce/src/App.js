import { useState } from "react";
import "./App.css";
import CartSidebar from "./components/cart-sidebar";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductDetails from "./pages/product-details";
import Loader from "./components/loader";

function App() {
  const shouldShowCart = useSelector((state) => state.data.shouldShowCart);
  const isLoading = useSelector((state) => state.data.isLoading);

  return (
    <div className="App">
      <Navbar />
      {isLoading ? <Loader /> : null}
      {shouldShowCart ? <CartSidebar /> : null}
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/product/:id" element={<ProductDetails />}></Route>
        {/* <Route exact path="/about" element={<About />}></Route> */}
        {/* <Route exact path="/contact" element={<Contact />}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
