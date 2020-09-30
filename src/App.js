import React , { useState } from "react";
import Button from "./components/Button"

export default function App() {
  const [operant1 , setOperant1] = useState(0)
  const [operant2 , setOperant2] = useState(0)
  const [operator , setOperator] = useState("")
  const handleOperant = (event) => {
    if(operator) { 
      setOperant2(parseInt(operant2+event.target.value))
    } else {
      setOperant1(parseInt(operant1+event.target.value))
    }
  }
  const handleOperator = (event) => {
    setOperator(event.target.value)
  }
  const handleResult = () => {
    switch (operator) {
      case "+":
        setOperant1(operant1+operant2)
        break;
      
      case "-":
        setOperant1(operant1-operant2)
        break
      
      case "*":
        setOperant1(operant1*operant2)
        break

      case "/":
        setOperant1(operant1/operant2)
        break
    
      default:
        break;

    }
    setOperator("")
  }
  return (
    <div className="App">
      <div>{operator ? operant2 : operant1}</div>
      <div>
      <Button onClick={handleOperant} symbol="1"/>
      <Button onClick={handleOperant} symbol="2"/>
      <Button onClick={handleOperant} symbol="3"/>
      <Button onClick={handleOperator} symbol="/"/>
      </div>
      <div>
      <Button onClick={handleOperant} symbol="4"/>
      <Button onClick={handleOperant} symbol="5"/>
      <Button onClick={handleOperant} symbol="6"/>
      <Button onClick={handleOperator} symbol="*"/>
      </div>
      <div>
      <Button onClick={handleOperant} symbol="7"/>
      <Button onClick={handleOperant} symbol="8"/>
      <Button onClick={handleOperant} symbol="9"/>
      <Button onClick={handleOperator} symbol="-"/>
      </div>
      <div>
      <Button onClick={handleOperant} symbol="0"/>
      <Button onClick={handleOperator} symbol="+"/>
      <Button onClick={handleResult} symbol="="/>
      </div>
    </div>
  );
}
