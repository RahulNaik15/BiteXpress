import React, { useContext } from 'react'
import './cart.css'
import {StoreContext} from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  const { cartItem, food_list, removeFromCart, getTotalCartAmount} = useContext(StoreContext);
  
  const navigate = useNavigate();
   
  return (
    <div className='cart'>
      <div className='cart-items'>
        <div className='cart-items-title'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br></br>
        <hr></hr>
        {food_list.map((item,index)=>{
          if (cartItem[item._id] > 0) {
            return (
            <div>
              <div className='cart-items-title cart-items-item'>
                <img className='cart-img' src={item.image}></img>
                <p>{item.name}</p>
                <p>₹ {item.price}</p>
                <p>{cartItem[item._id]}</p>
                <p>₹ {item.price * cartItem[item._id]}</p>
                <p onClick={()=>removeFromCart(item._id)} className='cross'>X</p>
              </div>
              <hr></hr>
            </div>
              
              
            )
          }
        })}
      </div>
      <div className='cart-bottom'>
        <div className='cart-total'>
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-detail">
              <p>Sub Total</p>
              <p>₹ {getTotalCartAmount()}</p>
            </div>
            <hr></hr>
            <div className="cart-total-detail">
              <p>Delivery Fee</p>
              <p>₹ {getTotalCartAmount()===0 ? 0 : 40 }</p>
            </div>
            <hr></hr>
            <div className="cart-total-detail">
              <b>Total</b>
              <b>₹ {getTotalCartAmount()===0 ? 0 : getTotalCartAmount()+40}</b>
            </div>
          </div>
          <button onClick={()=>navigate('/order')}>Proceed To Checkout</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have promo code, Enter it here</p>
            <div className="cart-promocode-input">
              <input type='text' placeholder='Promo Code'></input>
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart