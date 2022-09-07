import React, { ChangeEvent, FormEvent } from 'react'

interface TodoFormProps {
  addTodo: AddTodo
}

export const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = React.useState<string>('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    addTodo(newTodo)
    setNewTodo('')
  }

  return (
    <form className="todo-form">
      <input
        type="text"
        value={newTodo}
        placeholder="ADD TODO"
        onChange={handleChange}
        className="todo-input"
      />
      <button type="submit" onClick={handleSubmit} className="todo-button">
        ADD TODO
      </button>
    </form>
  )
}

export default TodoForm
