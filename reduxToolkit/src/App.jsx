import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './Components/AddTodo'
import TodoList from './Components/TodoList'

function App() {
  const [editabletodo, setEditabletodo] = useState(null)

  return (
    <>
      
    <AddTodo editabletodo= {editabletodo} setEditabletodo={setEditabletodo} />
    <TodoList editabletodo= {editabletodo} setEditabletodo={setEditabletodo} />

    </>
  )
}

export default App
