import { useState , useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoProvider } from './Context/TodoContext'
import InputBox from './Components/InputBox'
import ItemList from './Components/ItemList'

function App() {

  const [todos, settodos] = useState([])

  const addTodo =  (todo) =>{
      settodos( ( prev ) => [ todo , ...prev ] )
  }

  const deleteTodo = ( id ) =>{
    settodos = ( (prev) => prev.filter(( mytodo) => mytodo.id  !== id ) )
  }

    const updateTodo = ( id , todo ) =>{
      settodos( (prev) => prev.map( (currtodo) => { currtodo.id === id ? todo : currtodo } ) )
    }

    const toggleTodo = ( id ) => {
      settodos( (prev) => prev.map( (currtodo )=> currtodo.id === id ? 
        { ...currtodo , completed : ! currtodo.completed } : currtodo ) )
    }

    useEffect(() => {
      const data = JSON.parse( localStorage.getItem("todos") )
        if( data && data.length > 0 ){
          settodos(data)
        }
    }, [])
    

    useEffect(() => {
      localStorage.setItem( "todos" , JSON.stringify(todos) )
    }, [todos])

  return (
    
    <TodoProvider value= {{ todos ,addTodo , deleteTodo , updateTodo , toggleTodo }}>
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                       <InputBox />

                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {
                          todos.map( ( todo )=>{
                            <div key={todo.id} className='w-full'  >
                              <ItemList todo={todo} />
                            </div>
                          } )
                        }
                        
                    </div>
                </div>
            </div>
    </TodoProvider>
      
    
  )
}

export default App
