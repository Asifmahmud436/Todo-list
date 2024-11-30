// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Todo from './todo'
import React from 'react'
function App() {
  // const [count, setCount] = useState(0)
  const [todoArray,setTodoArray] = React.useState(null) 

  
  return (
    <>
      <form >
        <textarea name="todoInfo" id="todoInfo" defaultValue='Write a Todo here'></textarea>
        <p>Pririty List:</p>
        <label>
          <input type="radio" name="color" id="important" value='important' />
          Important
        </label>
        <label>
          <input type="radio" name="color" id="later" value='later'/>
          Can be done later
        </label>
        <br />
        Finshed?<br />
        <label>
          <input type="checkbox" name="completion" id="finished" value='finished' />
          Done
        </label>
        <label>
          <input type="checkbox" name="completion" id="not_finished" value='not finished' />
          Not Done
        </label><br />
        <input type="submit" value="Add Task" />
      </form>
      <Todo/>
    </>
  )
}

export default App
