import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo, updateTodo } from '../Slicer/todoSlice'


function AddTodo({ editabletodo ,  setEditabletodo }) {

    const [input, setInput] = useState("")
    const dispatch = useDispatch()

    useEffect(() => {
      if(  editabletodo ){
         setInput(editabletodo.text )
      } else {
          setInput("")
      }
    }, [editabletodo])
    
    const addTodoHandler = (e)=>{
        e.preventDefault() 

        if (!input.trim()) return; 

        if( editabletodo === null){
          dispatch( addTodo(input)) ; 
          setInput("")
        } else {
          const newtodo = { ...editabletodo , text : input }
          dispatch( updateTodo( newtodo ) )
          setEditabletodo(null)
          setInput("")
        }

        
    }

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
    <input
      type="text"
      className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      placeholder="Enter a Todo..."
      value={input}
      onChange={(e) => setInput(e.target.value)}
    />
    <button
      type="submit" value="edit"
      className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
    >
       {editabletodo ? 'Update Todo' : 'Add Todo'}
    </button>
  </form>
  )
}

export default AddTodo