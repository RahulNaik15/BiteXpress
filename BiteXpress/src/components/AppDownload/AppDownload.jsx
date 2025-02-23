import React from 'react'
import './appdownload.css'
import {iphone,android} from '../../assets/assets';

const AppDownload = () => {
  return (
      <div className='app-download' id='app-download'>
          <p>For Better Experience Download <br></br> BiteXpress App</p>
          <div className='app-download-platform'>
              <img src={iphone} alt=""></img>
              <img src={android} alt=""></img> 
          </div>
    </div>
  )
}

export default AppDownload