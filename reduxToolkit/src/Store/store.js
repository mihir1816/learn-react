import { configureStore } from '@reduxjs/toolkit' 
import todoSlice from '../Slicer/todoSlice'

export const store = configureStore({
    reducer : todoSlice.reducer 
} )

