import { useState, useMemo } from 'react'
import { CheckCircle2, Circle, Trash2, Plus, ClipboardList } from 'lucide-react'

const FILTERS = ['All', 'Active', 'Completed']

export default function TodoApp() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Buy groceries', completed: false },
    { id: 2, text: 'Read a book', completed: true },
    { id: 3, text: 'Go for a walk', completed: false },
  ])
  const [input, setInput] = useState('')
  const [filter, setFilter] = useState('All')

  const addTodo = (e) => {
    e.preventDefault()
    const trimmed = input.trim()
    if (!trimmed) return
    setTodos((prev) => [
      { id: Date.now(), text: trimmed, completed: false },
      ...prev,
    ])
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
          <ClipboardList className="w-9 h-9 text-violet-300" />
          <h1 className="text-4xl font-bold tracking-widest text-white uppercase">
            Todo
          </h1>
        </div>

        {/* Add Todo Form */}
        <form onSubmit={addTodo} className="flex gap-3 mb-6">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a new task..."
            className="flex-1 bg-white/10 text-white placeholder-white/40 border border-white/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-transparent transition"
          />
          <button
            type="submit"
            className="bg-violet-500 hover:bg-violet-400 active:bg-violet-600 text-white rounded-xl px-4 py-3 flex items-center gap-1.5 text-sm font-semibold transition-colors shadow-lg shadow-violet-900/40"
          >
            <Plus className="w-4 h-4" />
            Add
          </button>
        </form>

        {/* Main Card */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl overflow-hidden shadow-2xl">
          {/* Filter Tabs */}
          <div className="flex border-b border-white/10">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`flex-1 py-3 text-sm font-medium transition-colors ${
                  filter === f
                    ? 'text-violet-300 border-b-2 border-violet-400 bg-white/5'
                    : 'text-white/50 hover:text-white/80'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Todo List */}
          <ul className="divide-y divide-white/10">
            {filteredTodos.length === 0 ? (
              <li className="py-12 text-center text-white/40 text-sm">
                {filter === 'Completed'
                  ? 'No completed tasks yet.'
                  : filter === 'Active'
                  ? 'No active tasks. Great job!'
                  : 'No tasks yet. Add one above!'}
              </li>
            ) : (
              filteredTodos.map((todo) => (
                <li
                  key={todo.id}
                  className="flex items-center gap-3 px-5 py-4 group hover:bg-white/5 transition-colors"
                >
                  <button
                    onClick={() => toggleTodo(todo.id)}
                    className="flex-shrink-0 text-white/60 hover:text-violet-400 transition-colors"
                    aria-label={todo.completed ? 'Mark incomplete' : 'Mark complete'}
                  >
                    {todo.completed ? (
                      <CheckCircle2 className="w-5 h-5 text-violet-400" />
                    ) : (
                      <Circle className="w-5 h-5" />
                    )}
                  </button>
                  <span
                    className={`flex-1 text-sm leading-relaxed transition-colors ${
                      todo.completed
                        ? 'line-through text-white/30'
                        : 'text-white/90'
                    }`}
                  >
                    {todo.text}
                  </span>
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="flex-shrink-0 text-white/20 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-all"
                    aria-label="Delete task"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </li>
              ))
            )}
          </ul>

          {/* Footer */}
          <div className="flex items-center justify-between px-5 py-3 border-t border-white/10 bg-white/5">
            <span className="text-xs text-white/40">
              {activeCount} item{activeCount !== 1 ? 's' : ''} left
            </span>
            {completedCount > 0 && (
              <button
                onClick={clearCompleted}
                className="text-xs text-white/40 hover:text-red-400 transition-colors"
              >
                Clear completed ({completedCount})
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
