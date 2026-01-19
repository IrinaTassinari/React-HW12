
import { useState } from 'react'
import './App.css'
import ValueDisplay from './components/ValueDisplay'

function App() {

const [value,setValue] = useState('')

  return (
    <div className='box'>
      <h2>Введите текст:</h2>
     <input 
     type="text"  
     value = {value} 
     onChange={(e) => setValue(e.target.value)}/>
     <ValueDisplay value={value}/>
    </div>
  )
}

export default App
