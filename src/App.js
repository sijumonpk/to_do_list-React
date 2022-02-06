import React from 'react';
import './App.css';
import {useState} from 'react';

function App() {
  const [toDoList, setTodoList] = useState([]);
  const [toDo, setTodo] = useState('');
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e)=>setTodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>setTodoList([...toDoList, {text:toDo, status: true}])} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {toDoList.map((data, i)=>{
          console.log(data.text)

        return (<div className="todo" key={i}>
          <div className="left">
            <input onChange={(e)=>{
              console.log(e.target.value)
              
              
            }} value={data.status} type="checkbox" name="" id="" />
            <p>{data.text}</p>
          </div>
          <div className="right">
            <i className="fas fa-times"></i>
          </div>
        </div>);
        })}
      </div>
    </div>
  );
}

export default App;