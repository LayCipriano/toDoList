import React from 'react'
import '../../App.css'

export const Todo = ({ todo, removeTodo, completeTodo }) => {
  return (
    <div className='to-do'>
        <div className='conteudo' style={{textDecoration: todo.isCompleted ? "line-through" : ""}}>
            <p className='text-Todo'>{todo.text}</p>
            <p className='category-Todo'>{todo.category}</p>
        </div>
        <div className="btn">
            <button className='complete' onClick={() => completeTodo (todo.id)}>Completar</button>
            <button className='remove' onClick={() => removeTodo(todo.id)}>x</button>
        </div>
    </div>
    );
}