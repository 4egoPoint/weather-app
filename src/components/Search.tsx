
import { BiSearchAlt } from "react-icons/bi"

import "./style/search.css"

const Search = () => {
   return (
      <div className="search">
         <input className="search__input" type="text" placeholder='city' />
         <button className="search__btn"><BiSearchAlt /></button>
      </div>
   )
}

export default Search