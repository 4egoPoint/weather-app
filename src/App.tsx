


import './App.css';
import Cloud from './components/Cloud';
import Content from './components/Content';
import Details from './components/Details';
import Search from './components/Search';
import Sun from './components/Sun';
import{useState} from "react"


let city: string = "London"
const apiKey: string = "508105b0d2468eacc04c337659224a22"

let humidityData:number

const search = async () => {
   let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
   let data = await response.json()
   humidityData = data.main.humidity
}

function App() {


   return (
      <div className="app">
         <div className="app__window">

            <Search />

            <Content />

            <Details />
         </div>


         <Cloud />
         <Sun />
      </div>
   );
}

export default App;
