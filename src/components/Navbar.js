import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const cartCount = useSelector((state) => state.cart.cart.length);

  return (
    <nav>
      <div
        style={{
          width: "40%",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <Link to="/" style={{ color: "#3090FC" }}>
          Ecomm App
        </Link>
        <Link to="/">Products</Link>
        <Link to="/add-product">Add Product</Link>
      </div>
      <div>
        <Link to="/cart">
          Cart <FaShoppingCart /> ({cartCount})
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
