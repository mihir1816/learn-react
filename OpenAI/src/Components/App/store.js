import { configureStore } from '@reduxjs/toolkit';
import historyReducer from './Slice'; // Ensure this path is correct

export const store = configureStore({
    reducer: {
        history: historyReducer // Key should be the same as the slice name
    }
});
