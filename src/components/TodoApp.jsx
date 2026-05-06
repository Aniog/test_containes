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

  const addTodo = (e) => {
    e.preventDefault()
    const trimmed = input.trim()
    if (!trimmed) return
    setTodos((prev) => [...prev, { id: nextId++, text: trimmed, completed: false }])
    setInput('')
  }

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    )
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id))
  }

  const clearCompleted = () => {
    setTodos((prev) => prev.filter((t) => !t.completed))
  }

  const filteredTodos = useMemo(() => {
    if (filter === 'Active') return todos.filter((t) => !t.completed)
    if (filter === 'Completed') return todos.filter((t) => t.completed)
    return todos
  }, [todos, filter])

  const activeCount = todos.filter((t) => !t.completed).length
  const completedCount = todos.filter((t) => t.completed).length

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-950 via-indigo-900 to-blue-900 flex items-start justify-center pt-16 pb-16 px-4">
      <div className="w-full max-w-lg">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-white/10 rounded-xl p-2.5">
            <ClipboardList className="w-7 h-7 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white tracking-tight">My Tasks</h1>
            <p className="text-indigo-300 text-sm mt-0.5">
              {activeCount} task{activeCount !== 1 ? 's' : ''} remaining
            </p>
          </div>
        </div>

        {/* Add Todo Form */}
        <form onSubmit={addTodo} className="flex gap-2 mb-6">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a new task..."
            className="flex-1 bg-white/10 border border-white/20 text-white placeholder-indigo-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition"
          />
          <button
            type="submit"
            disabled={!input.trim()}
            className="bg-indigo-500 hover:bg-indigo-400 disabled:opacity-40 disabled:cursor-not-allowed text-white rounded-xl px-4 py-3 transition flex items-center gap-1.5 font-medium text-sm"
          >
            <Plus className="w-4 h-4" />
            Add
          </button>
        </form>

        {/* Filter Tabs */}
        <div className="flex gap-1 bg-white/10 rounded-xl p-1 mb-4">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`flex-1 py-2 rounded-lg text-sm font-medium transition ${
                filter === f
                  ? 'bg-white text-indigo-900 shadow'
                  : 'text-indigo-200 hover:text-white'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Todo List */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden">
          {filteredTodos.length === 0 ? (
            <div className="py-16 text-center">
              <CheckCircle2 className="w-12 h-12 text-indigo-400 mx-auto mb-3 opacity-60" />
              <p className="text-indigo-300 text-sm">
                {filter === 'Completed' ? 'No completed tasks yet.' : 'No tasks here. Add one above!'}
              </p>
            </div>
          ) : (
            <ul>
              {filteredTodos.map((todo, index) => (
                <li
                  key={todo.id}
                  className={`flex items-center gap-3 px-4 py-3.5 group transition hover:bg-white/5 ${
                    index !== filteredTodos.length - 1 ? 'border-b border-white/10' : ''
                  }`}
                >
                  {/* Toggle Button */}
                  <button
                    onClick={() => toggleTodo(todo.id)}
                    className="flex-shrink-0 text-indigo-300 hover:text-indigo-100 transition"
                    aria-label={todo.completed ? 'Mark as active' : 'Mark as completed'}
                  >
                    {todo.completed ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    ) : (
                      <Circle className="w-5 h-5" />
                    )}
                  </button>

                  {/* Task Text */}
                  <span
                    className={`flex-1 text-sm leading-relaxed transition ${
                      todo.completed
                        ? 'line-through text-indigo-400 opacity-60'
                        : 'text-white'
                    }`}
                  >
                    {todo.text}
                  </span>

                  {/* Delete Button */}
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="flex-shrink-0 text-transparent group-hover:text-red-400 hover:text-red-300 transition"
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
        {todos.length > 0 && (
          <div className="flex items-center justify-between mt-4 px-1">
            <span className="text-indigo-400 text-xs">
              {completedCount} of {todos.length} completed
            </span>
            {completedCount > 0 && (
              <button
                onClick={clearCompleted}
                className="text-xs text-indigo-400 hover:text-red-400 transition font-medium"
              >
                Clear completed ({completedCount})
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
