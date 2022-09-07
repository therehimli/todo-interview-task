import React from 'react'
import './App.scss'
import TodoForm from './components/TodoForm'
import TodoItems from './components/TodoItems'

function App() {
  const [todos, setTodos] = React.useState<Array<Todo>>([])

  const addTodo: AddTodo = (newTodo) => {
    if (newTodo !== '') {
      setTodos([...todos, { text: newTodo, complete: false }])
    }
  }

  const ToggleComplete: ToggleComplete = (selectedTodo) => {
    const updateTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return { ...todo, complete: !todo.complete }
      }
      return todo
    })
    setTodos(updateTodos)
  }

  const removeTodo: RemoveTodo = (todoToRemove) => {
    let updatedTodos: Array<Todo> = todos.filter(
      (todo) => todo.text != todoToRemove.text
    )
    setTodos(updatedTodos)
  }

  const editTodo: EditTodo = (todoToEdit) => {
    let todoToUpdateIndex: number = todos.findIndex(
      (todo) => todo.text == todoToEdit.text
    )
    console.log(todoToUpdateIndex)
  }

  return (
    <div className="todo-app">
      <h1>TODO APP</h1>
      <TodoForm addTodo={addTodo} />
      <TodoItems
        todos={todos}
        toggleComplete={ToggleComplete}
        onRemoveTodo={removeTodo}
        editTodo={editTodo}
      />
    </div>
  )
}

export default App
