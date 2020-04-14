import React, {useReducer, createContext, useEffect} from 'react'
import { TodoReducer } from '../reducers/TodoReducer';
export const TodoContext = createContext();

function TodoContextProvider(props) {
    const [todos, dispatch] = useReducer(TodoReducer, [], ()=>{
        const todoforstorage = localStorage.getItem('todos')
        return todoforstorage ? JSON.parse(todoforstorage) : [] 
    })

    useEffect(()=>{
       localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])


    return (
        <>
           <TodoContext.Provider value={{todos, dispatch}}>
                {props.children}
           </TodoContext.Provider> 
        </>
    )
}

export default TodoContextProvider
