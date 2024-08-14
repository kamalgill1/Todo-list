import React from "react";
import "./App.css";
import TodoInput from "./Componants/TodoInput";
import { useState } from "react";
import Navbar1 from "./Componants/Navbar1";
import TodoList from "./Componants/TodoList";

function App() {
  const [listTodo, setListTodo] = useState([]);

  const addList = (inputText) => {
    if(inputText !== '')
    setListTodo([...listTodo, inputText]);
  };

  const deleteListItem=(key)=>{
    let newListTodo=[...listTodo]
    new listTodo.Splice(key,1)
    setListTodo([...newListTodo])
  }
 
  return (
    <div>

      <div className="mainContainer">
        <div className="centerContainer">
          <Navbar1 />
          <TodoInput addList={addList} />
      {listTodo.map((listItem,i)=>{
        return(
          <TodoList key={i} index={i} item={listItem} deleteItem={deleteListItem}/>
        )
      })}
       
        </div>
      </div>
    </div>
  );
}

export default App;


// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [tasks, setTasks] = useState([]);
//   const [input, setInput] = useState('');

//   const addTask = () => {
//     if (input.trim()) {
//       setTasks([...tasks, { text: input, completed: false }]);
//       setInput('');
//     }
//   };

//   const toggleTask = (index) => {
//     const newTasks = tasks.map((task, i) => 
//       i === index ? { ...task, completed: !task.completed } : task
//     );
//     setTasks(newTasks);
//   };

//   const deleteTask = (index) => {
//     const newTasks = tasks.filter((_, i) => i !== index);
//     setTasks(newTasks);
//   };

//   return (
//     <div className="app">
//       <header className="header">
//         <h1>To-Do List</h1>
//       </header>
//       <div className="input-container">
//         <input 
//           type="text" 
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder="Add a new task"
//         />
//         <button onClick={addTask}>Add</button>
//       </div>
//       <ul className="task-list">
//         {tasks.map((task, index) => (
//           <li key={index} className={task.completed ? 'task completed' : 'task'}>
//             <span onClick={() => toggleTask(index)}>{task.text}</span>
//             <button onClick={() => deleteTask(index)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;