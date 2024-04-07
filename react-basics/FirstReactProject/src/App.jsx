import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [todos,setTodos]=useState([{
    title:"Go To Gym",
    description: "At 6:30",
    completed: false
  },{
    title:"Study DSA",
    description: "At 7:30",
    completed: false
  }]);

  function addTodo(title,description){
    setTodos([...todos,{
      title: title,
      description: description
    }])
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const description = event.target.description.value;
    event.target.title.value = '';
    event.target.description.value = '';
    addTodo(title,description)
  };

  return (

      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Title"
          />
          <textarea
            name="description"
            placeholder="Description"
          />
          <button type="submit">Submit</button>
        </form>
      

        {
          todos.map(function(todo){
            return <Todo title={todo.title} description={todo.description}></Todo>
          })
        }

      </div>
  )
}


function Todo(props){
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>
}


export default App
