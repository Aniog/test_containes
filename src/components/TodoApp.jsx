import { useState } from 'react'
import { Plus, Trash2, Check, X } from 'lucide-react'

const TodoApp = () => {
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState('')

  // Add new todo
  const addTodo = (e) => {
    e.preventDefault()
    if (inputValue.trim() !== '') {
      const newTodo = {
        id: Date.now(),
        text: inputValue.trim(),
        completed: false
      }
      setTodos([...todos, newTodo])
      setInputValue('')
    }
  }

  // Delete todo
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  // Toggle completion
  const toggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  // Clear all completed tasks
  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed))
  }

  const completedCount = todos.filter(todo => todo.completed).length
  const totalCount = todos.length

  return (
    <div className="container mx-auto max-w-2xl px-4 py-8">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-6">
          <h1 className="text-3xl font-bold text-white text-center">
            Strikingly
          </h1>
          <p className="text-blue-100 text-center mt-2">
            Stay organized and get things done
          </p>
        </div>

        {/* Add Todo Form */}
        <div className="p-6 border-b border-gray-200">
          <form onSubmit={addTodo} className="flex gap-3">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Add a new task..."
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2"
            >
              <Plus size={20} />
              Add
            </button>
          </form>
        </div>

        {/* Stats */}
        {totalCount > 0 && (
          <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
            <div className="flex justify-between items-center text-sm text-gray-600">
              <span>
                {totalCount} task{totalCount !== 1 ? 's' : ''} total
              </span>
              <span>
                {completedCount} completed
              </span>
            </div>
            {completedCount > 0 && (
              <div className="mt-3">
                <button
                  onClick={clearCompleted}
                  className="bg-red-100 hover:bg-red-200 text-red-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center gap-2"
                >
                  <Trash2 size={16} />
                  Clear Completed ({completedCount})
                </button>
              </div>
            )}
          </div>
        )}

        {/* Todo List */}
        <div className="max-h-96 overflow-y-auto">
          {todos.length === 0 ? (
            <div className="p-12 text-center text-gray-500">
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-lg font-medium mb-2">No tasks yet</h3>
              <p className="text-sm">Add your first task above to get started!</p>
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
              {todos.map((todo) => (
                <div
                  key={todo.id}
                  className={`p-4 flex items-center gap-4 hover:bg-gray-50 transition-colors duration-200 ${
                    todo.completed ? 'bg-gray-50' : ''
                  }`}
                >
                  {/* Checkbox */}
                  <button
                    onClick={() => toggleComplete(todo.id)}
                    className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                      todo.completed
                        ? 'bg-green-500 border-green-500 text-white'
                        : 'border-gray-300 hover:border-green-400'
                    }`}
                  >
                    {todo.completed && <Check size={16} />}
                  </button>

                  {/* Todo Text */}
                  <span
                    className={`flex-1 transition-all duration-200 ${
                      todo.completed
                        ? 'text-gray-500 line-through'
                        : 'text-gray-800'
                    }`}
                  >
                    {todo.text}
                  </span>

                  {/* Delete Button */}
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="flex-shrink-0 p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all duration-200"
                  >
                    <X size={18} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default TodoApp