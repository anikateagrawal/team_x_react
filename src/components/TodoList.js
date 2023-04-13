import React from 'react'

const Todo=[
    {name:'sleeping',isdone:true},
    {name:'playing',isdone:true},
    {name:'eating',isdone:false},
    {name:'instagram',isdone:false}
]

const TodoList = () => {
  return (
    <div>
        <ul>
            {
                
            Todo.map((todo)=>{
               return <li>{todo.name}, <input type={'checkbox'} defaultChecked={todo.isdone}></input></li>
            })
            }
        </ul>  
    </div>
  )
}

export default TodoList