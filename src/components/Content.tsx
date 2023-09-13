

import "./style/content.css"
import { useEffect } from 'react';

type ContentDataType = {
   temperature?:number
   mainWeather?:string
   currentCity?: string
}

const Content = ({ temperature, mainWeather, currentCity} : ContentDataType) => {
   return (
      <div className="content">
         <img src={require('../images/mist.png')} className="content__weather-img"></img>
         <div className="content__temperature">{temperature}°C</div>
         <div className="content__city">{currentCity}</div>
      </div>
   )
}

export default Content