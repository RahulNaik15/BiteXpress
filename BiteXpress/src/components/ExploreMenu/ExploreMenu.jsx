import React from 'react'
import './exploremenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
          <h1>Explore Our Menu</h1>
          <p className='explore-menu-text'>Discover a variety of delicious dishes crafted with fresh ingredients. From sizzling starters to mouthwatering mains and delightful desserts, we've got something for every craving!</p>
          <div className='explore-menu-list'>
              {menu_list.map((item,index) => {
                  return (
                      <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-item'>
                          <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="images"></img>
                          {/* <p>{item.menu_name}</p> */}
                      </div>
                  )
              })}
      </div>
      <hr/>
    </div>
  )
}

export default ExploreMenu