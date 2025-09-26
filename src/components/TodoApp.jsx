import { useState } from 'react'
import TodoItem from './TodoItem'
import TodoInput from './TodoInput'

const TodoApp = () => {
  const [todos, setTodos] = useState([])
  const [nextId, setNextId] = useState(1)

  const addTodo = (text) => {
    if (text.trim() !== '') {
      const newTodo = {
        id: nextId,
        text: text.trim(),
        completed: false
      }
      setTodos([...todos, newTodo])
      setNextId(nextId + 1)
    }
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed))
  }

  const completedCount = todos.filter(todo => todo.completed).length
  const totalCount = todos.length

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <TodoInput onAddTodo={addTodo} />
      
      <div className="mt-6">
        {todos.length === 0 ? (
          <p className="text-gray-500 text-center py-8">
            No todos yet. Add one above!
          </p>
        ) : (
          <div className="space-y-2">
            {todos.map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onDelete={deleteTodo}
                onToggleComplete={toggleComplete}
              />
            ))}
          </div>
        )}
      </div>

      {todos.length > 0 && (
        <div className="mt-6 pt-4 border-t border-gray-200">
          <div className="flex justify-between items-center text-sm text-gray-600">
            <span>
              {totalCount - completedCount} of {totalCount} tasks remaining
            </span>
            {completedCount > 0 && (
              <button
                onClick={clearCompleted}
                className="text-red-600 hover:text-red-800 font-medium"
              >
                Clear completed ({completedCount})
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default TodoApp