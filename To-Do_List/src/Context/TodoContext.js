import {createContext, useContext} from "react"

const TodoContext = ( {
        todos : {
            id : 1 , 
            todo : "to - do", 
            completed : false 
        } , 

        addTodo : (todo) => {} , 
        deleteTodo : ( id ) => {} , 
        updateTodo : ( id , todo ) => {} , 
        toggleTodo : ( id , todo ) => {}

} )

export default TodoContext

export const TodoProvider = TodoContext.Provider 
