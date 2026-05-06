import { useState, useMemo, useRef, useEffect } from 'react'
import './index.css'

const FILTERS = ['All', 'Active', 'Completed']

let nextId = 1

function generateId() {
  return nextId++
}

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className="flex items-center gap-3 px-5 py-4 border-b border-slate-100 group transition-colors hover:bg-slate-50">
      <button
        onClick={() => onToggle(todo.id)}
        aria-label={todo.completed ? 'Mark as active' : 'Mark as completed'}
        className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-1 ${
          todo.completed
            ? 'bg-gradient-to-br from-green-400 to-emerald-500 border-transparent'
            : 'border-slate-300 hover:border-green-400'
        }`}
      >
        {todo.completed && (
          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        )}
      </button>

      <span
        className={`flex-1 text-base transition-all ${
          todo.completed ? 'line-through text-slate-400' : 'text-slate-700'
        }`}
      >
        {todo.text}
      </span>

      <button
        onClick={() => onDelete(todo.id)}
        aria-label="Delete todo"
        className="opacity-0 group-hover:opacity-100 flex-shrink-0 w-7 h-7 rounded-md flex items-center justify-center text-slate-400 hover:text-red-500 hover:bg-red-50 transition-all focus:outline-none focus:opacity-100 focus:ring-2 focus:ring-red-300"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </li>
  )
}

function EmptyState({ filter }) {
  const messages = {
    All: { icon: '📝', title: 'No tasks yet', sub: 'Add a task above to get started!' },
    Active: { icon: '🎉', title: 'All done!', sub: 'No active tasks remaining.' },
    Completed: { icon: '⏳', title: 'Nothing completed yet', sub: 'Complete a task to see it here.' },
  }
  const { icon, title, sub } = messages[filter]
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <span className="text-5xl mb-4">{icon}</span>
      <p className="text-lg font-semibold text-slate-500">{title}</p>
      <p className="text-sm text-slate-400 mt-1">{sub}</p>
    </div>
  )
}

export default function App() {
  const [todos, setTodos] = useState([
    { id: generateId(), text: 'Buy groceries', completed: false },
    { id: generateId(), text: 'Read a book', completed: true },
    { id: generateId(), text: 'Go for a walk', completed: false },
  ])
  const [inputValue, setInputValue] = useState('')
  const [filter, setFilter] = useState('All')
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const filteredTodos = useMemo(() => {
    if (filter === 'Active') return todos.filter(t => !t.completed)
    if (filter === 'Completed') return todos.filter(t => t.completed)
    return todos
  }, [todos, filter])

  const activeCount = useMemo(() => todos.filter(t => !t.completed).length, [todos])
  const completedCount = useMemo(() => todos.filter(t => t.completed).length, [todos])

  const handleAdd = (e) => {
    e.preventDefault()
    const text = inputValue.trim()
    if (!text) return
    console.log('Adding todo:', text)
    setTodos(prev => [{ id: generateId(), text, completed: false }, ...prev])
    setInputValue('')
  }

  const handleToggle = (id) => {
    console.log('Toggling todo:', id)
    setTodos(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t))
  }

  const handleDelete = (id) => {
    console.log('Deleting todo:', id)
    setTodos(prev => prev.filter(t => t.id !== id))
  }

  const handleClearCompleted = () => {
    console.log('Clearing completed todos')
    setTodos(prev => prev.filter(t => !t.completed))
    if (filter === 'Completed') setFilter('All')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 flex flex-col items-center px-4 py-12">
      {/* Header */}
      <div className="w-full max-w-lg mb-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-slate-800">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">Tasks</span>
        </h1>
        <p className="text-slate-500 mt-2 text-sm">
          {activeCount === 0
            ? 'All tasks completed!'
            : `${activeCount} task${activeCount !== 1 ? 's' : ''} remaining`}
        </p>
      </div>

      {/* Main Card */}
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl shadow-slate-200/60 overflow-hidden">

        {/* Input */}
        <form onSubmit={handleAdd} className="flex items-center gap-3 px-5 py-4 border-b border-slate-100">
          <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-slate-200" />
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            placeholder="What needs to be done?"
            className="flex-1 text-base text-slate-700 placeholder-slate-400 bg-transparent outline-none"
          />
          <button
            type="submit"
            disabled={!inputValue.trim()}
            className="flex-shrink-0 px-4 py-1.5 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-semibold disabled:opacity-40 disabled:cursor-not-allowed hover:from-indigo-600 hover:to-purple-700 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-1"
          >
            Add
          </button>
        </form>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1 px-5 py-3 border-b border-slate-100 bg-slate-50/60">
          {FILTERS.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-indigo-300 ${
                filter === f
                  ? 'bg-white text-indigo-600 shadow-sm shadow-slate-200 font-semibold'
                  : 'text-slate-500 hover:text-slate-700 hover:bg-white/70'
              }`}
            >
              {f}
              {f === 'Active' && activeCount > 0 && (
                <span className="ml-1.5 inline-flex items-center justify-center w-4 h-4 rounded-full bg-indigo-100 text-indigo-600 text-xs font-bold">
                  {activeCount}
                </span>
              )}
              {f === 'Completed' && completedCount > 0 && (
                <span className="ml-1.5 inline-flex items-center justify-center w-4 h-4 rounded-full bg-purple-100 text-purple-600 text-xs font-bold">
                  {completedCount}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Todo List */}
        <ul className="divide-y divide-slate-50">
          {filteredTodos.length === 0 ? (
            <EmptyState filter={filter} />
          ) : (
            filteredTodos.map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={handleToggle}
                onDelete={handleDelete}
              />
            ))
          )}
        </ul>

        {/* Footer */}
        {todos.length > 0 && (
          <div className="flex items-center justify-between px-5 py-3 border-t border-slate-100 bg-slate-50/60">
            <span className="text-xs text-slate-400">
              {todos.length} total item{todos.length !== 1 ? 's' : ''}
            </span>
            <button
              onClick={handleClearCompleted}
              disabled={completedCount === 0}
              className="text-xs text-slate-400 hover:text-red-500 disabled:opacity-40 disabled:cursor-not-allowed transition-colors focus:outline-none focus:underline"
            >
              Clear completed{completedCount > 0 ? ` (${completedCount})` : ''}
            </button>
          </div>
        )}
      </div>

      {/* Tip */}
      <p className="mt-6 text-xs text-slate-400">
        Hover over a task to reveal the delete button
      </p>
    </div>
  )
}
