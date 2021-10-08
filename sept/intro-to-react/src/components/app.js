import React from "react"
import CountButton from "./countButton"
import SearchBar from "./Search/SearchBar"


const App =() => {
    return (
      <div>
          <SearchBar />
            <SearchBar />
          <CountButton incrementBy={2}/>
          <CountButton incrementBy={5}/>

      </div>
    )
}

export default App