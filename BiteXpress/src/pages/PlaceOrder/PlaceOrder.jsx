import React, { useContext } from 'react'
import './placeorder.css'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {

  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <div>
      <form className='place-order'>
        <div className="place-order-left">
          <p className='title'>Delivery Information</p>
          <div className="multi-field">
            <input type='text' placeholder='First Name'></input>
            <input type='text' placeholder='Last Name'></input>
          </div>
          <input type='email' placeholder='Email Address'></input>
          <input type='text' placeholder='Street'></input>
          <div className="multi-field">
            <input type='text' placeholder='City'></input>
            <input type='text' placeholder='State'></input>
          </div>
          <div className="multi-field">
            <input type='text' placeholder='Zip Code'></input>
            <input type='text' placeholder='Country'></input>
          </div>
          <input type='text' placeholder='Phone'></input>
        </div>

        <div className="place-order-right">
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
          <button>Proceed To Payment</button>
        </div>
        </div>
      </form>
    </div>
  )
}

export default PlaceOrder