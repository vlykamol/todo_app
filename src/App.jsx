import React, { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos((todos) => {
      return [...todos, {task: newTodo, isCompleted : false}];
    });
  };

  const removeTodo = (index) => {
    setTodos((todos) => todos.filter((td, key) => key !== index));
  };

  const completTodo = (index) => {
    setTodos((todos) => todos.map((td, key) => {
      return key === index ? {...td, isCompleted : !td.isCompleted} : td
    }))
  }

  return (
    <div className="text-white flex flex-col justify-center items-center">
      <h1 className="text-4xl font-sans  py-5">Todo List</h1>
      <hr className="w-full h-auto my-5 bg-white" />
      <div className="flex gap-2 justify-center my-5 mx-2 w-full max-w-sm md:w-96">
      <input
        className="p-2 bg-transparent rounded border-2 border-solid border-white"
        type="text"
        value={todo}
        placeholder={`TASK..`}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        className="bg-slate-500 p-2 rounded hover:bg-slate-600"
        onClick={() => {
          if (todo) {
            addTodo(todo);
          } else {
            window.alert(`task can't be empty`);
          }
          setTodo("");
        }}
      >
        ADD Task
      </button>
      </div>
      <div className="w-full max-w-sm md:w-96">
      <ul className="flex flex-col mx-2 my-5">
        {todos.map((todo, index) => {
          return (
            <li
              className="flex gap-2 justify-between items-center my-1" 
              key={index}>
              <p className={`${todo.isCompleted ? `bg-slate-700 line-through decoration-wavy` : `bg-slate-300 text-slate-900` } grow p-2 rounded`}>{todo.task}</p>
              <div className="flex gap-2 grow-0">
              <button
                className={`${todo.isCompleted ? `bg-slate-500` : `bg-slate-500/20` }  p-2 rounded hover:bg-slate-600`}
                onClick={() => completTodo(index)}>{todo.isCompleted ? `UnDone` : `Done`}</button>
              <button 
                className="bg-neutral-700 p-2 rounded hover:bg-neutral-600"
                onClick={() => removeTodo(index)}>Remove</button>
              </div>
            </li>
          );
        })}
      </ul>
      </div>
    </div>
  );
}

export default App;
