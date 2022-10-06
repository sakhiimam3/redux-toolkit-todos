import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {addTodo} from "../Todolist/todoSlice"
import Todoitems from './todoitems';
export function Todo() {
  const dispatch=useDispatch()
  const [todo,setTodo]=useState('')
  // const count = useSelector(selectCount);
  // const dispatch = useDispatch();
  
  const  handelAdd =()=>{
      if(todo !== ""){
          dispatch(addTodo(todo))
      }
      else{
           alert("add todo first")
      }
      setTodo('')
  }


  return (
    <>
                <div className='todo'>
                  <div>
                  <input type="text"  value={todo} name="todos" onChange={(e)=>setTodo(e.target.value)} placeholder='add todo' /> <button className='add_btn' onClick={handelAdd}>Add Todo</button>  <NavLink to="/"><button  className='add_btn'>Back</button></NavLink> 
                  <Todoitems /> 
                </div>
            
                  </div>
               
               
            
    </>
  );
}


export default Todo