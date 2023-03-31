import React, { useState } from 'react'
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
const[listtodo, setListTodo] =  useState([])
const [inputtext,setInputtext] = useState("")
const [editid,setEditid] = useState(null)

const addlist =(inputtext)=>{
if(!editid){
    let id = 1;
      if(listtodo.length>0){
        id = listtodo[0].id + 1;}
        let todo = {id: id, inputtext: inputtext}
  setListTodo([todo,...listtodo])
  }
if(editid){
    let edittodo = 
listtodo.map((todo)=>(todo.id===editid)?(todo={id: todo.id, inputtext: inputtext}):{id: todo.id, inputtext:todo.inputtext})
setListTodo(edittodo)
setInputtext("")
setEditid(null)
}
}
const removeTodo = (id) =>{
let updatedTodos = listtodo.filter((todo)=> todo.id !== id);
  setListTodo(updatedTodos);
}
const handleSubmit=()=>{
  if(inputtext !== "") addlist(inputtext);
  setInputtext("")
}

const EditTodo = (id) =>{
  
let EditTodos = listtodo.find((todo)=> todo.id === id);
 setInputtext(EditTodos.inputtext);
 setEditid(id)

}


  return (
    <>
    <div className='container'>
      Todo List App
     {/* <TodoForm listtodo={listtodo} addlist={addlist} /> */}
     <div className="todoForm">
    <input type="text" placeholder='write todo here' value={inputtext} onChange={(e)=>{setInputtext(e.target.value)}}></input>
    <button type="submit" onClick={handleSubmit}>{editid ? "Edit" : "Go"}</button>
    </div>

     {listtodo.map((todo)=>{
      return(
        <TodoList listtodo={listtodo} addlist={addlist} todo={todo} key={todo.id} removeTodo={removeTodo} EditTodo={EditTodo} editid={editid}/>
      )
     })}
    </div>
    </>
  );
}

export default App;
