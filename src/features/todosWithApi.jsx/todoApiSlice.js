// slices/recipes.js
import {createSlice} from '@reduxjs/toolkit'

export const initialState = {
    loading: false,
    hasErrors: false,
    todoData: []
}

// A slice for recipes with our three reducers
const TodoSlice = createSlice({
    name: 'todoData',
    initialState,
    reducers: {

    

        getTodos: state => {
            state.loading = true
        },
        getTodosSuccess: (state, {payload}) => {
            state.todoData = payload
            state.loading = false
            state.hasErrors = false
        },
                                                                                            addTodo: (state, action) => {

          state.todos = [
              ...state.todoData,
              action.payload
          ]
      },
        getTodosFailure: state => {
            state.loading = false                                    
            state.hasErrors = true
        },
     

    }
})

// Three actions generated from the slice
export const {getTodos, getTodosSuccess, getTodosFailure} = TodoSlice.actions

// A selector
export const TodosSelector = state => state.todoalldata

// The reducer
export default TodoSlice.reducer

// Asynchronous thunk action
export function fetchTodos() {
    return async dispatch => {
        dispatch(getTodos())

        try {
            const response = await fetch('http://localhost:3004/Todos')
            const data = await response.json()
       
            dispatch(getTodosSuccess(data))
        } catch (error) {
            dispatch(getTodosFailure())
        }
    }
}


// add todo 



export async function addTodo(title) {
    try {
           await fetch('http://localhost:3004/Todos', {
            method: "POST",
            body: JSON.stringify({title}),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }

        }).then(response => response.json())

        .then(json => console.log(json));
    


        
    } catch (error) {
        console.log(error)
    }
}




export async function updateTodo({id,title}) {
  try {
        await fetch(`http://localhost:3004/Todos/${id}`, {
          method: "PUT",
          body: JSON.stringify({title}),
          headers: {
              "Content-type": "application/json; charset=UTF-8"
          }

      }).then(response => response.json())
        .then(json => console.log(json));
      


      
  } catch (error) {
      console.log(error)
  }
}



export async function deleteTodo(index) {
    console.log(index)
    try {
          await fetch(`http://localhost:3004/Todos/${index}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
  
        }).then(response => response.json())
          .then(json => console.log(json));
        
  
  
        
    } catch (error) {
        console.log(error)
    }
  }
  