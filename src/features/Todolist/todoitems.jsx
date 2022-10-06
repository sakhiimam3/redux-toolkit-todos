import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import {delteTodo,editTodo} from "./todoSlice"
const Todoitems = () => {
      const [show,setShow]=useState(false)
    const  data=useSelector(state=>state.todoData.todos)
    const dispatch=useDispatch()
  

  const handleEdit=(index)=>{
   
    const editData=prompt("Enter your edit data")

       dispatch(editTodo({id :index,data:editData}))
       
  }  

  return (
    <>
        <section>
                <ul>
                  {data.map((item,index)=>
                     <li key={index}>  
                  
                     <span>{index + 1 + ")"}  : </span> {item}  &nbsp;  
                     <button className='edit_btn' onClick={()=>handleEdit(index)}>Edit</button> 
                     &nbsp; <button onClick={()=>dispatch(delteTodo(index))} className='btn-del' >Delete</button>
                     </li>
                  )}
                </ul>
        </section>
        
    </>
  )
}

export default Todoitems