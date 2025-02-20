import React from 'react'
import './exploremenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = () => {
  return (
    <div className='explore-menu' id='explore-menu'>
          <h1>Explore Our Menu</h1>
          <p className='explore-menu-text'>Choose from a diverse menu featuring a delectable array of dishesh crafted with the finest ingredients and satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
          <div className='explore-menu-list'>
              {menu_list.map((item,index) => {
                  return (
                      <div key={index} className='explore-menu-item'>
                          <img src={item.menu_image} alt="images"></img>
                          <p>{item.menu_name}</p>
                      </div>
                  )
              })}
          </div>
    </div>
  )
}

export default ExploreMenu