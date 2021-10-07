import React, { useState } from "react"

const CountButton = (props) =>{
    const [currentCount , setCurrentCount] = useState(0)

    const handleClick = () => {
       setCurrentCount(currentCount + props.incrementBy)
    }

    const divStyle={
        color: "white",
        backgroundColor: "red",
        margin: "20px",
        border: "2px solid black",
        borderRadius : "12px",
    }
    const buttonStyle={
        border:"2px solid black",
        background : props.buttonColor,
        color: props.color,
    }
    return(
      <div style={divStyle}>
          <button style={buttonStyle} onClick={handleClick}>+{props.incrementBy}</button>
          <div>{currentCount}</div>
      </div>
    )
}

export default CountButton