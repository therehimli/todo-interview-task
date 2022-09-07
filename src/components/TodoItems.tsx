import React from 'react'
import TodoList from './TodoList'

interface TodoItemsProps {
  toggleComplete: ToggleComplete
  todos: Array<Todo>
  onRemoveTodo: RemoveTodo
  editTodo: EditTodo
}

export const TodoItems: React.FC<TodoItemsProps> = ({
  todos,
  toggleComplete,
  onRemoveTodo,
  editTodo,
}) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoList
          key={todo.text}
          todo={todo}
          toggleComplete={toggleComplete}
          onRemoveTodo={onRemoveTodo}
          editTodo={editTodo}
        />
      ))}
    </ul>
  )
}

export default TodoItems
