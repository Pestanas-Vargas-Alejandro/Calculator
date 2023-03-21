import { useState } from 'react'
import './App.css'

const buttonsClases = "btn btn-outline-secondary w-100 p-3"
const buttonClases = "btn btn-outline-secondary w-100 p-5"

function App() {
  const [operator, setOperator] = useState('')
  const [number1, setNumber1] = useState('')
  const [clearScreen, setClearScreen] = useState(false)
  const [screen, setScreen] = useState('0')

  const handleButtonClick = (e) => {
    const {value} = e.target;
    /* if (value === '.') {
      if (screen.indexOf(value) !== -1)
      return;
    } METODO MEDIANTE INDEX OF*/

    if (value === '.') {
      if (screen.includes('.'))
      return;
    } /*METODO MEDIANTE INCLUDE*/

    if (value === 'C'){
      setScreen('0')
      return;
    }

  /* APARTIR DE AQUI SE MUESTRA LO QUE PRESIONO EN PANTALLA*/
    if (clearScreen){
      setScreen(value);
      setClearScreen(false)
      return;
    }

   if (screen === '0' && value !== '.') {
      setScreen(value)
    } else {
      setScreen (`${screen}${value}`)
    } 
  }

  const handleDelButtonClick = () => {
    /*if (screen.length === 1) {
      setScreen('0')
    }else{
      setScreen(screen.slice (0, -1))
    } METODO CON ELSE */ 

    if (screen.length === 1) {
      setScreen('0')
      return;
    }
    setScreen(screen.slice (0, -1)) /* METODO SIN ELSE */
  }

  const handleOperationButtonClick = (e) => {
    setOperator (e.target.value)
    setNumber1 (screen);
    setClearScreen(true);
  }

  const handleEqualButtonClick = () => {
    const a = +number1;
    const b = +screen;
    console.log(number1);
    switch (operator) {
      case '+':
        setScreen ((a + b).toString());
        break;
      case '-':
          setScreen ((a - b).toString());
        break;
      case '*':
          setScreen ((a * b).toString());
        break;
      case '/':
          setScreen ((a / b).toString());
        break;     
      default:
        break;
    }
  }

  return (
    <div className="container mt-5">
      <h1>Calculator</h1>
      <table className="mt-5">
        {/*FIrst row*/}
        <tr>
          <td colSpan={4}>
            <div className='card'> {screen}
              <div className='card-body'>
              </div>
            </div>
          </td>
        </tr>
        {/*Second row*/}
        <tr>
          <td> <button type='button' className={buttonsClases} value = "C" onClick = {(e) => {handleButtonClick (e)}} >C</button> </td>
          <td> <button type='button' className={buttonsClases} value = "/" onClick={(e) => handleOperationButtonClick (e)}>/</button></td>
          <td> <button type='button' className={buttonsClases} value = "*" onClick={(e) => handleOperationButtonClick (e)}>*</button></td>
          <td> <button type='button' className={buttonsClases} value = "-" onClick={(e) => handleOperationButtonClick (e)}>-</button></td>
        </tr>
        {/*Three row*/}
        <tr>
          <td> <button type='button' className={buttonsClases} value = "7" onClick = {(e) => {handleButtonClick (e)}} >7</button></td>
          <td> <button type='button' className={buttonsClases} value = "8"  onClick = {(e) => {handleButtonClick (e)}} >8</button></td>
          <td> <button type='button' className={buttonsClases} value = "9" onClick = {(e) => {handleButtonClick (e)}} >9</button></td>
          <td rowSpan={2}> <button type='button' className={buttonClases} value = "+" onClick={(e) => handleOperationButtonClick (e)}>+</button></td>
        </tr>
        {/*Four row*/}
        <tr>
          <td> <button type='button' className={buttonsClases} value = "4" onClick = {(e) => {handleButtonClick (e)}} >4</button></td>
          <td> <button type='button' className={buttonsClases} value = "5" onClick = {(e) => {handleButtonClick (e)}} >5</button></td>
          <td> <button type='button' className={buttonsClases} value = "6" onClick = {(e) => {handleButtonClick (e)}} >6</button></td>
        </tr>
        {/*Five row*/}
        <tr>
          <td> <button type='button' className={buttonsClases} value = "1" onClick = {(e) => {handleButtonClick (e)}} >1</button></td>
          <td> <button type='button' className={buttonsClases} value = "2" onClick = {(e) => {handleButtonClick (e)}} >2</button></td>
          <td> <button type='button' className={buttonsClases} value = "3" onClick = {(e) => {handleButtonClick (e)}} >3</button></td>
          <td rowSpan={2}> <button type='button' className={buttonClases} onClick = {handleEqualButtonClick}>=</button></td>
        </tr>
        {/*Six row*/}
        <tr>
          <td colSpan={1}> <button type='button' className={buttonsClases} onClick = {handleDelButtonClick} >Del</button></td>
          <td> <button type='button' className={buttonsClases} value = "0" onClick = {(e) => {handleButtonClick (e)}} >0</button> </td>
          <td> <button type='button' className={buttonsClases} value = "." onClick = {(e) => {handleButtonClick (e)}}>.</button> </td>
        </tr>
      </table>
    </div>
  )
}

export default App
