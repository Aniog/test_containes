import { useState, useMemo } from 'react'
import { Plus, Trash2, CheckCircle2, Circle, ClipboardList } from 'lucide-react'

const FILTERS = ['All', 'Active', 'Completed']

let nextId = 1

export default function TodoApp() {
  const [todos, setTodos] = useState([
    { id: nextId++, text: 'Buy groceries', completed: false },
    { id: nextId++, text: 'Read a book', completed: true },
    { id: nextId++, text: 'Go for a walk', completed: false },
  ])
  const [input, setInput] = useState('')
  const [filter, setFilter] = useState('All')

  const addTodo = () => {
    const trimmed = input.trim()
    if (!trimmed) return
    setTodos(prev => [{ id: nextId++, text: trimmed, completed: false }, ...prev])
    setInput('')
    console.log('Todo added:', trimmed)
  }

  const toggleTodo = (id) => {
    setTodos(prev =>
      prev.map(t => (t.id === id ? { ...t, completed: !t.completed } : t))
    )
  }

  const deleteTodo = (id) => {
    setTodos(prev => prev.filter(t => t.id !== id))
    console.log('Todo deleted:', id)
  }

  const clearCompleted = () => {
    setTodos(prev => prev.filter(t => !t.completed))
    console.log('Cleared all completed todos')
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') addTodo()
  }

  const filtered = useMemo(() => {
    if (filter === 'Active') return todos.filter(t => !t.completed)
    if (filter === 'Completed') return todos.filter(t => t.completed)
    return todos
  }, [todos, filter])

  const activeCount = todos.filter(t => !t.completed).length
  const completedCount = todos.filter(t => t.completed).length

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-start justify-center pt-16 px-4 pb-16">
      <div className="w-full max-w-lg">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-indigo-600 text-white p-2.5 rounded-xl shadow-md">
            <ClipboardList className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 leading-tight">My Todos</h1>
            <p className="text-sm text-gray-500">
              {activeCount} task{activeCount !== 1 ? 's' : ''} remaining
            </p>
          </div>
        </div>

        {/* Input */}
        <div className="flex gap-2 mb-6">
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Add a new task..."
            className="flex-1 px-4 py-3 rounded-xl border border-gray-200 bg-white shadow-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition"
          />
          <button
            onClick={addTodo}
            disabled={!input.trim()}
            className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-300 text-white px-4 py-3 rounded-xl shadow-sm transition flex items-center gap-1.5 font-medium"
          >
            <Plus className="w-5 h-5" />
            Add
          </button>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-1 mb-4 bg-gray-100 p-1 rounded-xl">
          {FILTERS.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`flex-1 py-2 text-sm font-medium rounded-lg transition ${
                filter === f
                  ? 'bg-white text-indigo-700 shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {f}
              {f === 'Active' && activeCount > 0 && (
                <span className="ml-1.5 bg-indigo-100 text-indigo-700 text-xs px-1.5 py-0.5 rounded-full">
                  {activeCount}
                </span>
              )}
              {f === 'Completed' && completedCount > 0 && (
                <span className="ml-1.5 bg-green-100 text-green-700 text-xs px-1.5 py-0.5 rounded-full">
                  {completedCount}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Todo List */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {filtered.length === 0 ? (
            <div className="py-16 flex flex-col items-center gap-3 text-gray-400">
              <ClipboardList className="w-10 h-10 opacity-30" />
              <p className="text-sm font-medium">
                {filter === 'Completed' ? 'No completed tasks yet' : 'No tasks here'}
              </p>
            </div>
          ) : (
            <ul className="divide-y divide-gray-50">
              {filtered.map(todo => (
                <li
                  key={todo.id}
                  className="flex items-center gap-3 px-4 py-3.5 group hover:bg-gray-50 transition"
                >
                  <button
                    onClick={() => toggleTodo(todo.id)}
                    className="flex-shrink-0 text-gray-300 hover:text-indigo-500 transition"
                    aria-label={todo.completed ? 'Mark incomplete' : 'Mark complete'}
                  >
                    {todo.completed ? (
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                    ) : (
                      <Circle className="w-5 h-5" />
                    )}
                  </button>
                  <span
                    className={`flex-1 text-sm leading-relaxed ${
                      todo.completed
                        ? 'line-through text-gray-400'
                        : 'text-gray-800'
                    }`}
                  >
                    {todo.text}
                  </span>
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="flex-shrink-0 text-gray-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition"
                    aria-label="Delete task"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {completedCount > 0 && (
          <div className="mt-4 flex justify-end">
            <button
              onClick={clearCompleted}
              className="text-sm text-red-500 hover:text-red-700 font-medium transition flex items-center gap-1.5"
            >
              <Trash2 className="w-4 h-4" />
              Clear {completedCount} completed task{completedCount !== 1 ? 's' : ''}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
