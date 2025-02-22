import React from 'react'
import './fooditem.css' 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar} from "@fortawesome/free-solid-svg-icons";

const FoodItem = ({id,name,price,rating,description,image}) => {
  return (
    <div className='food-item'>
          <div className='food-item-img-container'>
              <img className='food-item-image' src={image} alt=""></img>
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