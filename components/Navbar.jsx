import React from "react";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Cart from "./Cart";
import { useStateContext } from "../Context/StateContext";

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">ElectroSmooth</Link>
      </p>

      <button
        className="cart-icon"
        onClick={() => setShowCart(true)}
        type="button"
      >
        <AiOutlineShoppingCart />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
