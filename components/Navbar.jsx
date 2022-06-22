import React from 'react'
import Link from 'next/link'
import {AiOutlineShoppingCart} from "react-icons/ai"

const Navbar = () => {
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">
        My Headphones
        </Link>
      </p>

      <button className='cart-icon' onClick='' type='button'>
        <AiOutlineShoppingCart/>
        <span className="cart-item-qty">2</span>
      </button>
    </div>
  )
}

export default Navbar