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
    console.log('Adding todo:', trimmed)
    setTodos(prev => [{ id: nextId++, text: trimmed, completed: false }, ...prev])
    setInput('')
  }

  const toggleTodo = (id) => {
    console.log('Toggling todo id:', id)
    setTodos(prev =>
      prev.map(t => (t.id === id ? { ...t, completed: !t.completed } : t))
    )
  }

  const deleteTodo = (id) => {
    console.log('Deleting todo id:', id)
    setTodos(prev => prev.filter(t => t.id !== id))
  }

  const clearCompleted = () => {
    console.log('Clearing completed todos')
    setTodos(prev => prev.filter(t => !t.completed))
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
    <div className="min-h-screen bg-gradient-to-br from-violet-950 via-indigo-950 to-slate-900 flex items-start justify-center pt-16 pb-16 px-4">
      <div className="w-full max-w-lg">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-violet-500 rounded-xl p-2.5">
            <ClipboardList className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white tracking-tight">My Tasks</h1>
            <p className="text-violet-300 text-sm mt-0.5">
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
            className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-transparent transition text-sm"
          />
          <button
            onClick={addTodo}
            disabled={!input.trim()}
            className="bg-violet-500 hover:bg-violet-400 disabled:opacity-40 disabled:cursor-not-allowed text-white rounded-xl px-4 py-3 transition-colors flex items-center gap-1.5 font-medium text-sm"
          >
            <Plus className="w-4 h-4" />
            Add
          </button>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-1 bg-white/5 rounded-xl p-1 mb-4">
          {FILTERS.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${
                filter === f
                  ? 'bg-violet-500 text-white shadow'
                  : 'text-white/50 hover:text-white/80'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Todo List */}
        <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
          {filtered.length === 0 ? (
            <div className="py-16 text-center">
              <p className="text-white/30 text-sm">
                {filter === 'Completed'
                  ? 'No completed tasks yet.'
                  : filter === 'Active'
                  ? 'No active tasks. Great job!'
                  : 'No tasks yet. Add one above!'}
              </p>
            </div>
          ) : (
            <ul>
              {filtered.map((todo, idx) => (
                <li
                  key={todo.id}
                  className={`flex items-center gap-3 px-4 py-3.5 group transition-colors hover:bg-white/5 ${
                    idx !== filtered.length - 1 ? 'border-b border-white/10' : ''
                  }`}
                >
                  <button
                    onClick={() => toggleTodo(todo.id)}
                    className="flex-shrink-0 text-white/40 hover:text-violet-400 transition-colors"
                    aria-label={todo.completed ? 'Mark as active' : 'Mark as completed'}
                  >
                    {todo.completed
                      ? <CheckCircle2 className="w-5 h-5 text-violet-400" />
                      : <Circle className="w-5 h-5" />
                    }
                  </button>

                  <span
                    className={`flex-1 text-sm leading-relaxed ${
                      todo.completed ? 'line-through text-white/30' : 'text-white/90'
                    }`}
                  >
                    {todo.text}
                  </span>

                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="flex-shrink-0 text-white/20 hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100"
                    aria-label="Delete task"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Clear Completed */}
        {completedCount > 0 && (
          <div className="mt-4 flex justify-end">
            <button
              onClick={clearCompleted}
              className="text-sm text-white/40 hover:text-red-400 transition-colors flex items-center gap-1.5"
            >
              <Trash2 className="w-3.5 h-3.5" />
              Clear {completedCount} completed task{completedCount !== 1 ? 's' : ''}
            </button>
          </div>
        )}

        {/* Stats */}
        <div className="mt-6 grid grid-cols-3 gap-3">
          {[
            { label: 'Total', value: todos.length, color: 'text-white' },
            { label: 'Active', value: activeCount, color: 'text-violet-300' },
            { label: 'Done', value: completedCount, color: 'text-emerald-400' },
          ].map(stat => (
            <div key={stat.label} className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
              <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
              <p className="text-white/40 text-xs mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
