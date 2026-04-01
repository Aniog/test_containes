import { useState } from 'react'
import { Plus, Trash2, CheckCircle2, Circle, ClipboardList } from 'lucide-react'

const FILTERS = ['All', 'Active', 'Completed']

export default function TodoApp() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Build a React app', completed: true },
    { id: 2, text: 'Style with Tailwind CSS', completed: false },
    { id: 3, text: 'Deploy to production', completed: false },
  ])
  const [input, setInput] = useState('')
  const [filter, setFilter] = useState('All')

  const addTodo = () => {
    const trimmed = input.trim()
    if (!trimmed) return
    setTodos(prev => [{ id: Date.now(), text: trimmed, completed: false }, ...prev])
    setInput('')
  }

  const toggleTodo = (id) =>
    setTodos(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t))

  const deleteTodo = (id) =>
    setTodos(prev => prev.filter(t => t.id !== id))

  const clearCompleted = () =>
    setTodos(prev => prev.filter(t => !t.completed))

  const filtered = todos.filter(t => {
    if (filter === 'Active') return !t.completed
    if (filter === 'Completed') return t.completed
    return true
  })

  const activeCount = todos.filter(t => !t.completed).length
  const completedCount = todos.filter(t => t.completed).length

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-start justify-center pt-16 px-4">
      <div className="w-full max-w-lg">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-indigo-600 text-white p-2.5 rounded-xl shadow-md">
            <ClipboardList size={22} />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800 leading-tight">My Todo List</h1>
            <p className="text-sm text-gray-400">{activeCount} task{activeCount !== 1 ? 's' : ''} remaining</p>
          </div>
        </div>

        {/* Input */}
        <div className="flex gap-2 mb-6">
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && addTodo()}
            placeholder="Add a new task..."
            className="flex-1 px-4 py-3 rounded-xl border border-gray-200 bg-white shadow-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition"
          />
          <button
            onClick={addTodo}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-3 rounded-xl shadow-sm transition flex items-center gap-1.5 font-medium"
          >
            <Plus size={18} />
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
                  ? 'bg-white text-indigo-600 shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Todo List */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {filtered.length === 0 ? (
            <div className="py-14 text-center text-gray-400">
              <ClipboardList size={36} className="mx-auto mb-3 opacity-30" />
              <p className="text-sm">No tasks here yet.</p>
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
                    aria-label="Toggle complete"
                  >
                    {todo.completed
                      ? <CheckCircle2 size={22} className="text-indigo-500" />
                      : <Circle size={22} />}
                  </button>
                  <span className={`flex-1 text-sm ${todo.completed ? 'line-through text-gray-400' : 'text-gray-700'}`}>
                    {todo.text}
                  </span>
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="opacity-0 group-hover:opacity-100 text-gray-300 hover:text-red-500 transition"
                    aria-label="Delete task"
                  >
                    <Trash2 size={16} />
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
              className="text-sm text-gray-400 hover:text-red-500 transition flex items-center gap-1.5"
            >
              <Trash2 size={14} />
              Clear {completedCount} completed
            </button>
          </div>
        )}

        <p className="text-center text-xs text-gray-300 mt-8">© {new Date().getFullYear()} My Todo App</p>
      </div>
    </div>
  )
}
