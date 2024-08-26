import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(10)
  let [msg , setmsg]= useState(" ")

  const addone  = () => {
    if( count < 20 ){
      setCount(count + 1) ;
      setmsg("")
    } else {
      setmsg(" ERROR : you reach the maximum limit ")
    }
  }
  const reducevalue = () => {
    if( count > 0 ){
      setCount(count -1 )
      setmsg("")
    } else {
      setmsg("ERROR : you reach the minimum limit ")
    }
  }

  return (
    <>
    <h1>MY Counter </h1>
    <h3>value : {count}</h3>

    <button onClick={addone}>add</button>
    <button onClick={reducevalue}> reduce</button>
    <h4>{ msg}</h4>
    </>
  )
}

export default App
