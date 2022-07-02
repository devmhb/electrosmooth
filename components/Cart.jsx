import React, { useRef } from 'react'
import Link from 'next/link';
import {AiOutlineMinus,AiOutlinePlus, AiOutlineLeft, AiOutlineShoppingCart} from 'react-icons/ai'
import {TiDeleteOutline} from 'react-icons/ti'
import toast from 'react-hot-toast'
import {useStateContext} from '../Context/StateContext'
import {urlFor} from '../lib/client'


const Cart = () => {
  const cartRef = useRef();
  const {totalPrice, totalQuantities , cartItems, setShowCart, toggleCartItemQuanitity, onRemove} = useStateContext()

  return (
    <div className="cart-wrapper">
      <div className="cart-container">
        <button 
        className="cart-heading"
        type='button'
        onClick={() => setShowCart(false)}>
        <AiOutlineLeft/>
        <span className="heading">Your Cart</span>
        <span className="cart-num-items">( {totalQuantities} item)</span>
        </button>
        
        {cartItems.length < 1 && (
          <div className="empty-cart">
            <AiOutlineShoppingCart size={120}/>
            <h3>Your Shopping Cart is Empty</h3>
            <Link href='/'>
              <button 
              className="btn"
              type='button' 
              onClick={() => setShowCart(false)}>
                  Continue Shopping
              </button>
            </Link>
          </div>
        )}

<div className="product-container">
          {cartItems.length >= 1 && cartItems.map((item) => (
            <div className="product" key={item._id}>
              <img src={urlFor(item?.image[0])} className="cart-product-image" />
              <div className="item-desc">
                <div className="flex top">
                  <h5>{item.name}</h5>
                  <h4>${item.price}</h4>
                </div>
                <div className="flex bottom">
                  <div>
                  <p className="quantity-desc">
                    <span className="minus" onClick={() => toggleCartItemQuanitity(item._id, 'dec') }>
                    <AiOutlineMinus />
                    </span>
                    <span className="num" onClick="">{item.quantity}</span>
                    <span className="plus" onClick={() => toggleCartItemQuanitity(item._id, 'inc') }><AiOutlinePlus /></span>
                  </p>
                  </div>
                  <button
                    type="button"
                    className="remove-item"
                    onClick={() => onRemove(item)}
                  >
                    <TiDeleteOutline />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {cartItems.length >= 1 && (
          <div className="cart-bottom">
            <div className="total">
              <h3>Subtotal:</h3>
              <h3>${totalPrice}</h3>
            </div>
            <div className="btn-container">
              <button type="button" className="btn" onClick=''>
                Pay with Stripe
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart