import './App.css'

function App() {
  return (
    <div className="container mt-5">
      <h1>Calculator</h1>
      <table className="mt-5">
        {/*FIrst row*/}
        <tr>
          <td colSpan={4}>
            <div className='card'> 0
              <div className='card-body'>
              </div>
            </div>
          </td>
        </tr>
        {/*Second row*/}
        <tr>
          <td> <button type='button' className='btn btn-outline-secondary w-100 p-3'> C</button> </td>
          <td> <button type='button' className='btn btn-outline-secondary w-100 p-3'>/</button></td>
          <td> <button type='button' className='btn btn-outline-secondary w-100 p-3'>*</button></td>
          <td> <button type='button' className='btn btn-outline-secondary w-100 p-3'>-</button></td>
        </tr>
        {/*Three row*/}
        <tr>
          <td> <button type='button' className='btn btn-outline-secondary w-100 p-3'>7</button></td>
          <td> <button type='button' className='btn btn-outline-secondary w-100 p-3'>8</button></td>
          <td> <button type='button' className='btn btn-outline-secondary w-100 p-3'>9</button></td>
          <td rowSpan={2}> <button type='button' className='btn btn-outline-secondary w-100 p-5'>+</button></td>
        </tr>
        {/*Four row*/}
        <tr>
          <td> <button type='button' className='btn btn-outline-secondary w-100 p-3'>4</button></td>
          <td> <button type='button' className='btn btn-outline-secondary w-100 p-3'>5</button></td>
          <td> <button type='button' className='btn btn-outline-secondary w-100 p-3'>6</button></td>
        </tr>
        {/*Five row*/}
        <tr>
          <td> <button type='button' className='btn btn-outline-secondary w-100 p-3'>1</button></td>
          <td> <button type='button' className='btn btn-outline-secondary w-100 p-3'>2</button></td>
          <td> <button type='button' className='btn btn-outline-secondary w-100 p-3'>3</button></td>
          <td rowSpan={2}> <button type='button' className='btn btn-outline-secondary w-100 p-5'>=</button></td>
        </tr>
        {/*Six row*/}
        <tr>
          <td colSpan={1}> <button type='button' className='btn btn-outline-secondary w-100 p-3'>Del</button></td>
          <td> <button type='button' className='btn btn-outline-secondary w-100 p-3'>0</button> </td>
          <td> <button type='button' className='btn btn-outline-secondary w-100 p-3'>.</button> </td>
        </tr>
      </table>
    </div>
  )
}

export default App
