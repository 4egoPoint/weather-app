

import "./style/content.css"

const Content = () => {
   return (
      <div className="content">
         <img src={require('../images/mist.png')} className="content__weather-img"></img>
         <div className="content__temperature">22°C</div>
         <div className="content__city">London</div>
      </div>
   )
}

export default Content