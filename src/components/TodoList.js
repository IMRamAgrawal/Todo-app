import React, { useState } from 'react'

function todoList(props) {
    const{removeTodo,todo,EditTodo,editid} = props;
  
  return (
      <div className='todo-row'>
        {todo.inputtext}
        <button className='style1' onClick={()=>{removeTodo(todo.id)}}>Delete</button>
        <button className='style2' onClick={()=>{EditTodo(todo.id)}}>Edit</button>
    </div>
  )
}

export default todoList