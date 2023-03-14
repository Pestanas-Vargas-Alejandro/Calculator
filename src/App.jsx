import { useState } from 'react'
import './App.css'

const buttonsClases = "btn btn-outline-secondary w-100 p-3"
const buttonClases = "btn btn-outline-secondary w-100 p-5"

function App() {
  const [screen, setScreen] = useState('0')
  const handleButtonClick = (e) => {
    const {value} = e.target;
    if (value === 'C'){
      setScreen('0')
      return;
    }
    console.log('Click')
   if (screen === '0') {
      setScreen(value)
    } else {
      setScreen (`${screen} ${value}`)
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
          <td> <button type='button' className={buttonsClases}>/</button></td>
          <td> <button type='button' className={buttonsClases}>*</button></td>
          <td> <button type='button' className={buttonsClases}>-</button></td>
        </tr>
        {/*Three row*/}
        <tr>
          <td> <button type='button' className={buttonsClases} value = "7" onClick = {(e) => {handleButtonClick (e)}} >7</button></td>
          <td> <button type='button' className={buttonsClases} value = "8"  onClick = {(e) => {handleButtonClick (e)}} >8</button></td>
          <td> <button type='button' className={buttonsClases} value = "9" onClick = {(e) => {handleButtonClick (e)}} >9</button></td>
          <td rowSpan={2}> <button type='button' className={buttonClases}>+</button></td>
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
          <td rowSpan={2}> <button type='button' className={buttonClases}>=</button></td>
        </tr>
        {/*Six row*/}
        <tr>
          <td colSpan={1}> <button type='button' className={buttonsClases}>Del</button></td>
          <td> <button type='button' className={buttonsClases}>0</button> </td>
          <td> <button type='button' className={buttonsClases}>.</button> </td>
        </tr>
      </table>
    </div>
  )
}

export default App
