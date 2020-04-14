import React, {useState, useContext} from 'react'
import {TodoContext} from '../contexts/TodoContext';

function AddTodo() {

    const {dispatch} = useContext(TodoContext);

    const [title, setTitle] = useState('');
    const [date, setDate]   = useState('');

    const onSubmit = (e) => {
         e.preventDefault();
         dispatch({type: 'ADD_TODO', title, date})
        
    }

    return (
        <div className='container mt-5'>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <input type='text'
                    placeholder='Title'
                    className='form-control'
                    onChange={(e)=>setTitle(e.target.value)}
                    />
                 </div>


                 <div className='form-group'>
                    <input type='date'
                    className='form-control'
                    onChange={(e)=>setDate(e.target.value)}
                    />
                 </div>

               <button className='btn btn-danger'>Add todo</button>    

            </form>
        </div>
    )
}

export default AddTodo
