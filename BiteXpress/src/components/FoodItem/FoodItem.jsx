import React, { useContext } from 'react'
import './fooditem.css' 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar} from "@fortawesome/free-solid-svg-icons";
import { icon1,icon2,icon3 } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';


const FoodItem = ({ id, name, price, rating, description, image }) => {
  
  
  const { cartItem, addToCart, removeFromCart } = useContext(StoreContext);
  return (
    <div className='food-item'>
        <div className='food-item-img-container'>
        <img className='food-item-image' src={image} alt=""></img>
        {!cartItem[id] 
          ?<img className='add' onClick={() => addToCart(id)} src={icon1} alt=""></img>
          : <div className='food-item-counter'>
            <img onClick={()=>removeFromCart(id)} src={icon2} alt=""></img>
            <p>{cartItem[id]}</p>
            <img onClick={()=>addToCart(id)} src={icon3} alt=""></img>
          </div>

        }
          </div>
          <div className='food-item-info'>
              <div className='food-item-name-rating'>
                <p>{name}</p>
                <div className="rating">
                    <span className="rating-value">{rating}</span>
                    <FontAwesomeIcon icon={faStar} />
                </div>
              </div>
              <p className='food-item-desc'>
                  {description}
              </p>
              <p className='food-item-price'>
                  ₹{price}
              </p>
          </div>
    </div>
  )
}

export default FoodItem