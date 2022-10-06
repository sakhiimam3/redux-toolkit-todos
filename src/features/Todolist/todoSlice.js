import {createSlice} from '@reduxjs/toolkit';
// import { fetchCount } from './counterAPI';

const initialState = {
    todos: [],
};




// export const incrementAsync = createAsyncThunk(
// 'counter/fetchCount',
// async (amount) => {
//     const response = await fetchCount(amount);
//     // The value we return becomes the `fulfilled` action payload
//     return response.data;
// }
// );

export const counterSlice = createSlice({
    name: 'todos',
    initialState,

    reducers: {
        addTodo: (state, action) => {

            state.todos = [
                ...state.todos,
                action.payload
            ]
        },
        delteTodo: (state, action) => {
            const remainingdata = state.todos.filter((item, i) => i !== action.payload)
            state.todos = remainingdata

        },

        editTodo: (state, action) => {
          console.log(action, "this edit click")
          const editData = state.todos.map((item, i) => i === action.payload.id ? action.payload.data : item )
          state.todos = editData

      }

        
    },
   
});

export const {addTodo, delteTodo,editTodo} = counterSlice.actions;


// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.

export default counterSlice.reducer;
