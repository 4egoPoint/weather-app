


import './App.css';
import Cloud from './components/Cloud';
import Content from './components/Content';
import Details from './components/Details';
import Search from './components/Search';
import Sun from './components/Sun';
import { useState, useEffect } from "react"


const apiKey: string = "508105b0d2468eacc04c337659224a22"



function App() {
   const [inputValue, setInputValue] = useState<string>("")
   const [cityValue, setCityValue] = useState<string>("London")



   useEffect(() => {
      const search = async () => {
         let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}`)
         let data = await response.json()
      }
   }, [])

   return (
      <div className="app">
         <div className="app__window">

            <Search inputValue={inputValue} setCityValue={setCityValue} setInputValue={setInputValue} />

            <Content />

            <Details />
         </div>


         <Cloud />
         <Sun />
      </div>
   );
}

export default App;
