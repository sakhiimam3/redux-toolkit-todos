import { useEffect, useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
// import {delteTodo,editTodo} from "./todoSlice"
import {TodosSelector,fetchTodos,updateTodo,deleteTodo} from "./todoApiSlice"


const Todoitems = () => {
  const dispatch =useDispatch()
    const [edit,setSdit]=useState(false)
    const {  loading, hasErrors,todoData}= useSelector(TodosSelector)



    useEffect(() => {
      dispatch(fetchTodos())
 },[todoData])
 

  // handle update 
const handleEdit=(index)=>{
 const editData=prompt("Enter your edit data")
  updateTodo({id :index,title:editData})
}  



  // handle update 
  const handleDelete=(index)=>{
    deleteTodo(index)
   }  


  return (
    <>
        <section>
                <ul>
                  {todoData?.map((item)=>
                     <li key={item.id}>  
                  
                     <span>{item.id + ")"}  : </span> {item.title}  &nbsp;  
                     <button className='edit_btn' onClick={()=>handleEdit(item.id)}>Edit</button> 
                     &nbsp; <button  className='btn-del' onClick={()=>handleDelete(item.id)} >Delete</button>
                     </li>
                  )}
                </ul>
        </section>
        
    </>
  )
}

export default Todoitems