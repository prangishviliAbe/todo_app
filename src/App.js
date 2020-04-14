import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import TodoContextProvider from './contexts/TodoContext';


function App() {
  return (
    <div className="">
      <TodoContextProvider>
        <TodoList/>
        <AddTodo/>
       </TodoContextProvider>
    </div>
  );

}

export default App;
