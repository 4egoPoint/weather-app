

import React from "react"
import "./style/details.css"

const Details = () => {
   return (
      <div className="details">
         <div className="details__humidity">
            <img className="details__humidity-img" src={require(".././images/humidity.png")} alt="humidity" />
            <div className="details__humidity-wrap">
               <div className="details__humidity-number">{}%</div>
               <div className="details__humidity-text">humidity</div>
            </div>
         </div>
         <div className="details__wind">
            <img className="details__wind-img" src={require(".././images/wind.png")} alt="wind" />
            <div className="details__wind-wrap">
               <div className="details__wind-number">{} km/h</div>
               <div className="details__wind-text">wind speed</div>
            </div>
         </div>
      </div>
   )
}

export default Details