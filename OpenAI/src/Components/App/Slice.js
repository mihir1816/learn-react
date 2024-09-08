import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    history: [{ prompt: "hello", response: "how are you? How can I help you?" }] // Ensure this is an array
};

const historySlice = createSlice({
    name: 'history',
    initialState,
    reducers: {
        addToHistory: (state, action) => {
            const { input_prompt, display_info } = action.payload;
            
            console.log('State before:', state);
            console.log('Payload:', action.payload);
            state.history.push({ prompt: input_prompt, response: display_info }); // Push to the array
            
            console.log('State after:', state);
        }
    }
});

export const { addToHistory } = historySlice.actions;
export default historySlice.reducer;
