import React, { useState } from 'react'
import './fooditem.css' 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar} from "@fortawesome/free-solid-svg-icons";
import { icon1,icon2,icon3 } from '../../assets/assets';


const FoodItem = ({ id, name, price, rating, description, image }) => {
  
  const [itemCount, setItemCount] = useState(0);

  return (
    <div className='food-item'>
        <div className='food-item-img-container'>
        <img className='food-item-image' src={image} alt=""></img>
        {!itemCount ? <img className='add' onClick={()=>setItemCount(prev=>prev+1)} src={icon1} alt=""></img>
          : <div className='food-item-counter'>
            <img onClick={()=>setItemCount(prev=>prev-1)} src={icon2} alt=""></img>
            <p>{itemCount}</p>
            <img onClick={()=>setItemCount(prev=>prev+1)} src={icon3} alt=""></img>
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