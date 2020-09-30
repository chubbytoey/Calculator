import React from "react"

function Button({symbol , onClick}) {
  return (
    <button value={symbol} onClick={onClick}>{symbol}</button>
  )
}
export default Button