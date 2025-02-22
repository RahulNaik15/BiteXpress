import React, { useContext } from 'react'
import './fooddisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({category}) => {

const{food_list}=useContext(StoreContext)

  return (
      <div className='food-display' id='food-display'>
          <h2>Top Dishesh Near You</h2>
          <div className='food-display-list'>
              {food_list.map((item, index) => {
                  return <FoodItem key={index} id={item._id} name={item.name} rating={item.rating} description={item.description} price={item.price} image={item.image}></FoodItem>
              })}
          </div>
    </div>
  )
}

export default FoodDisplay