import { useState } from 'react'
import './App.css'

const buttonsClases = "btn btn-outline-secondary w-100 p-3"
const buttonClases = "btn btn-outline-secondary w-100 p-5"

function App() {
  const [screen, setScreen] = useState('0')
  const handleButtonClick9 = () => {
    if (screen === '0') {
      setScreen(9)
    } else {
      setScreen (`${screen}9`)
    }
  }

  const handleButtonClick8 = () => {
    if (screen === '0') {
      setScreen(8)
    } else {
      setScreen (`${screen}8`)
    }
  }

  const handleButtonClick7 = () => {
    if (screen === '0') {
      setScreen(7)
    } else {
      setScreen (`${screen}7`)
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
          <td> <button type='button' className={buttonsClases}> C</button> </td>
          <td> <button type='button' className={buttonsClases}>/</button></td>
          <td> <button type='button' className={buttonsClases}>*</button></td>
          <td> <button type='button' className={buttonsClases}>-</button></td>
        </tr>
        {/*Three row*/}
        <tr>
          <td> <button type='button' className={buttonsClases} onClick = {handleButtonClick7} >7</button></td>
          <td> <button type='button' className={buttonsClases} onClick = {handleButtonClick8} >8</button></td>
          <td> <button type='button' className={buttonsClases} onClick = {handleButtonClick9} >9</button></td>
          <td rowSpan={2}> <button type='button' className={buttonClases}>+</button></td>
        </tr>
        {/*Four row*/}
        <tr>
          <td> <button type='button' className={buttonsClases}>4</button></td>
          <td> <button type='button' className={buttonsClases}>5</button></td>
          <td> <button type='button' className={buttonsClases}>6</button></td>
        </tr>
        {/*Five row*/}
        <tr>
          <td> <button type='button' className={buttonsClases}>1</button></td>
          <td> <button type='button' className={buttonsClases}>2</button></td>
          <td> <button type='button' className={buttonsClases}>3</button></td>
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
