import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    history : [{ prompt: "hellow" , ans: "how are you ? how can i help you" }] 
}

const historySlice = createSlice({

name : 'history' , 
initialState , 
reducer : {

    addToHistory : (state , action ) =>{

    }

}

})

export const {addToHistory} = historySlice.actions ; 

export default historySlice.reducer