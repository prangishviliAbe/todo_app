import React, { useContext } from 'react'
import TodoDetail from './TodoDetail';
import { TodoContext } from '../contexts/TodoContext';

function TodoList() {
    const { todos } = useContext(TodoContext);
    return (
        <div className='container mt-3'>
            <ul class="list-group">



            {
            todos.length > 0 ? 
                    todos.map((todo) => {
                        return (
                            <TodoDetail todo={todo} key={todo.id} />
                        )
                    })
            : 
            <h3>There is no todo</h3>
            }


               


            </ul>
        </div>
    )
}

export default TodoList
