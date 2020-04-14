import React, {useContext} from 'react'
import {TodoContext} from '../contexts/TodoContext';

function TodoDetail({todo}) {
    const {dispatch} = useContext(TodoContext);
    

    const deleteTodoItem = () => {
        dispatch({type: 'DELETE_TODO', id: todo.id})
    }
    
    return (
        <>
             <li class="list-group-item d-flex justify-content-between align-items-center" onClick={deleteTodoItem} style={{cursor:'pointer'}}>
                  {todo.title}
                  <span class="badge badge-primary badge-pill">{todo.date}</span>
             </li>
        </>
    )
}

export default TodoDetail
