import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Todo from './features/Todolist/todo';
import './App.css';
import TodoApiFront from './features/todosWithApi.jsx/todofront';
import Home from './copmonents/home';


function App() {
  return (
      <>
       <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
      <Route path="/todo" element={<Todo />} />
      <Route path="/todoapi" element={<TodoApiFront />} />
    </Routes>
  </BrowserRouter>,
      

        
      </>
  );
}

export default App;
