import { configureStore } from '@reduxjs/toolkit';
import todoSlice from '../features/Todolist/todoSlice';
import todoApiSlice from '../features/todosWithApi.jsx/todoApiSlice';
export const store = configureStore({
  reducer: {
    todoData: todoSlice,
    todoalldata:todoApiSlice
  },
});
