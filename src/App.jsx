import { useState } from 'react'
import './App.css'
import Button from './components/Button';

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

  const buttonInfo = [
    [
      {
        classes: buttonsClases,
        value: 'C',
        handleClick: handleButtonClick,
        style: {},
        rows: 1
      },

      {
        classes: buttonsClases,
        value: '/',
        handleClick: handleOperationButtonClick,
        style: {},
        rows: 1
      },

      {
        classes: buttonsClases,
        value: '*',
        handleClick: handleOperationButtonClick,
        style: {},
        rows: 1
      },

      {
        classes: buttonsClases,
        value: '-',
        handleClick: handleOperationButtonClick,
        style: {},
        rows: 1
      }
    ],
    [
      {
        classes: buttonsClases,
        value: '7',
        handleClick: handleButtonClick,
        style: {},
        rows: 1
      },

      {
        classes: buttonsClases,
        value: '8',
        handleClick: handleButtonClick,
        style: {},
        rows: 1
      },

      {
        classes: buttonsClases,
        value: '9',
        handleClick: handleOperationButtonClick,
        style: {},
        rows: 1
      },

      {
        classes: buttonClases,
        value: '+',
        handleClick: handleOperationButtonClick,
        style: {},
        rows: 2
      }
    ],
    [  
      {
        classes: buttonsClases,
        value: '4',
        handleClick: handleButtonClick,
        style: {},
        rows: 1
      },

      {
        classes: buttonsClases,
        value: '5',
        handleClick: handleButtonClick,
        style: {},
        rows: 1
      },

      {
        classes: buttonsClases,
        value: '6',
        handleClick: handleButtonClick,
        style: {},
        rows: 1
      }
    ],
    [  
      {
        classes: buttonsClases,
        value: '1',
        handleClick: handleButtonClick,
        style: {},
        rows: 1
      },

      {
        classes: buttonsClases,
        value: '2',
        handleClick: handleButtonClick,
        style: {},
        rows: 1
      },

      {
        classes: buttonsClases,
        value: '3',
        handleClick: handleButtonClick,
        style: {},
        rows: 1
      },

      {
        classes: buttonClases,
        value: '=',
        handleClick: handleEqualButtonClick,
        style: {},
        rows: 2
      }
    ],
    [
      {
        classes: buttonsClases,
        value: 'Del',
        handleClick: handleButtonClick,
        style: {},
        rows: 1
      },

      {
        classes: buttonsClases,
        value: '0',
        handleClick: handleButtonClick,
        style: {},
        rows: 1
      },

      {
        classes: buttonsClases,
        value: '.',
        handleClick: handleButtonClick,
        style: {},
        rows: 1
      }
    ]  
  ]

  return (
    <div className="position-absolute top-50 start-50 translate-middle">
      <h1 class="text-center">Calculator</h1>
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
        {
        buttonInfo.map ((row) => {
          return (
            <tr>
              {
                row.map ((cell) => {
                  return (
                    <td rowSpan={cell.rows}>
                      <Button 
                        classes={cell.classes}
                        value={cell.value}
                        handleClick={cell.handleClick}
                        style={cell.style} />
                    </td>
                  )
                })
              }
            </tr>
          )
        })}
      </table>
    </div>
  )
}

export default App
