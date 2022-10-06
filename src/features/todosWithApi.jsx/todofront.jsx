import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import our fetchRecipes thunk
import {addTodo} from "./todoApiSlice"
import Todoitems from './todoitems';


const TodoApiFront=() =>{
  const [todo,setTodo]=useState('')


  const addTodos=()=>{
         if(todo !== ""){

          addTodo(todo)
    
          
         }
         else{
             alert("Please fill ")
         }
         setTodo('')
  }
 


  return (
    <>
                <div className='todo'>
                  <div>
                  <input type="text"  value={todo} name="todos" onChange={(e)=>setTodo(e.target.value)} placeholder='add todo' /> <button className='add_btn' onClick={addTodos}>Add Todo</button>  <NavLink to="/"><button  className='add_btn'>Back</button></NavLink>
                  <Todoitems /> 
                </div>
            
                  </div>
               
               
            
    </>
  );
}


export default TodoApiFront