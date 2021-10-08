import React, { useState } from "react";
import "./SearchBar.css"

const products = [
  "tooth paste",
  "mouth wash",
  "mouth guard",
  "dental guard",
]


const SearchBar = (props) => {
  const[searchValue, setSearchValue] = useState("the searh avlue")

  const handlerInput = (event) => {
    setSearchValue(event.target.value)
  }

  const handlerClearClick = () => {
    setSearchValue("")
  }

  const shouldDisplayButton = searchValue.length > 0

  const filteredProducts = products.filter((product)=>{
     return product.includes(searchValue)
  })

    return (
    <div>
      <input type="text" value={searchValue} onChange={handlerInput} />
      {shouldDisplayButton && <button onClick={handlerClearClick} >clear</button>}

      <ul>
         {filteredProducts.map((product) =>{
             return <li key={product}>{product}</li>
         })}
      </ul>
      
    </div>
  )
}
export default SearchBar