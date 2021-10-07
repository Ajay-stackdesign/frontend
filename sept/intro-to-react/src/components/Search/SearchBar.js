import React, { useState } from "react"
import "./SearchBar.css"

const SearchBar = () => {
  const[searchValue, setSearchValue] = useState("the search value")

  const handlerInput = (event) => {
    setSearchValue(event.target.value)
  }

  const handlerClearClick = () => {
    setSearchValue("")
  }

  const shouldDisplayButton = searchValue.length > 0

  return(
    <div>
      <input type="number" value={searchValue} onChange={handlerInput} />
      {shouldDisplayButton && <button onClick={handlerClearClick} >Clear </button> }
    </div>
  )
}
export default SearchBar