import { useState, useEffect, useCallback } from 'react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from './config.jsx'
import './App.css'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)
const TABLE = 'TodoItems'
const FILTERS = ['All', 'Active', 'Completed']

const getRows = (res) => res?.data?.list ?? []
const getEntity = (res) => res?.data ?? null

function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')
  const [filter, setFilter] = useState('All')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchTodos = useCallback(async () => {
    setLoading(true)
    setError(null)
    const { data: res, error: err } = await client
      .from(TABLE)
      .select('*')
      .order('created_at', { ascending: false })
    if (err) { setError(err.message); setLoading(false); return }
    setTodos(getRows(res))
    setLoading(false)
  }, [])

  useEffect(() => { fetchTodos() }, [fetchTodos])

  const addTodo = useCallback(async () => {
    const trimmed = input.trim()
    if (!trimmed) return
    setInput('')
    const { data: res, error: err } = await client
      .from(TABLE)
      .insert({ data: { text: trimmed, completed: false, created_at: new Date().toISOString() } })
      .select()
      .single()
    if (err) { setError(err.message); return }
    const created = getEntity(res)
    if (created) setTodos(prev => [created, ...prev])
  }, [input])

  const handleKeyDown = (e) => { if (e.key === 'Enter') addTodo() }

  const toggleTodo = useCallback(async (todo) => {
    const fields = todo.data ?? {}
    const { data: res, error: err } = await client
      .from(TABLE)
      .update({ data: { ...fields, completed: !fields.completed } })
      .eq('id', todo.id)
      .select()
      .single()
    if (err) { setError(err.message); return }
    const updated = getEntity(res)
    if (updated) setTodos(prev => prev.map(t => t.id === updated.id ? updated : t))
  }, [])

  const deleteTodo = useCallback(async (todo) => {
    const { error: err } = await client
      .from(TABLE)
      .delete()
      .eq('id', todo.id)
      .select()
      .maybeSingle()
    if (err) { setError(err.message); return }
    setTodos(prev => prev.filter(t => t.id !== todo.id))
  }, [])

  const clearCompleted = useCallback(async () => {
    const completed = todos.filter(t => (t.data ?? t).completed)
    await Promise.all(
      completed.map(todo =>
        client.from(TABLE).delete().eq('id', todo.id).select().maybeSingle()
      )
    )
    setTodos(prev => prev.filter(t => !(t.data ?? t).completed))
  }, [todos])

  const filtered = todos.filter(t => {
    const completed = (t.data ?? t).completed
    if (filter === 'Active') return !completed
    if (filter === 'Completed') return completed
    return true
  })

  const activeCount = todos.filter(t => !(t.data ?? t).completed).length
  const completedCount = todos.filter(t => (t.data ?? t).completed).length

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-950 via-indigo-950 to-slate-900 flex items-start justify-center pt-16 pb-16 px-4">
      <div className="w-full max-w-lg">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-5xl font-extrabold tracking-widest text-white uppercase">Todo</h1>
          <p className="text-indigo-300 mt-1 text-sm">{activeCount} task{activeCount !== 1 ? 's' : ''} remaining</p>
        </div>

        {/* Error Banner */}
        {error && (
          <div className="mb-4 px-4 py-3 bg-red-500/20 border border-red-400/40 rounded-xl text-red-300 text-sm flex items-center justify-between">
            <span>{error}</span>
            <button onClick={() => setError(null)} className="ml-3 text-red-300 hover:text-white">✕</button>
          </div>
        )}

        {/* Input */}
        <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-5 py-4 mb-4 shadow-lg">
          <span className="text-indigo-300 text-xl select-none">✦</span>
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="What needs to be done?"
            className="flex-1 bg-transparent text-white placeholder-indigo-300/60 outline-none text-base"
          />
          <button
            onClick={addTodo}
            disabled={!input.trim()}
            className="bg-indigo-500 hover:bg-indigo-400 disabled:opacity-40 disabled:cursor-not-allowed text-white text-sm font-semibold px-4 py-1.5 rounded-xl transition-colors duration-150"
          >
            Add
          </button>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-1 mb-4">
          {FILTERS.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`flex-1 py-2 rounded-xl text-sm font-semibold transition-all duration-150 ${
                filter === f
                  ? 'bg-indigo-500 text-white shadow'
                  : 'text-indigo-200 hover:text-white hover:bg-white/10'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Todo List */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden shadow-lg">
          {loading ? (
            <div className="py-14 text-center text-indigo-300/70 text-sm animate-pulse">Loading tasks…</div>
          ) : filtered.length === 0 ? (
            <div className="py-14 text-center text-indigo-300/70 text-sm">
              {filter === 'Completed' ? 'No completed tasks yet.' : filter === 'Active' ? 'All tasks are done!' : 'No tasks yet. Add one above!'}
            </div>
          ) : (
            <ul>
              {filtered.map((todo, idx) => {
                const fields = todo.data ?? todo
                return (
                  <li
                    key={todo.id}
                    className={`flex items-center gap-4 px-5 py-4 group transition-colors duration-100 hover:bg-white/5 ${
                      idx !== filtered.length - 1 ? 'border-b border-white/10' : ''
                    }`}
                  >
                    {/* Checkbox */}
                    <button
                      onClick={() => toggleTodo(todo)}
                      aria-label={fields.completed ? 'Mark as active' : 'Mark as completed'}
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all duration-150 ${
                        fields.completed
                          ? 'bg-indigo-500 border-indigo-500'
                          : 'border-indigo-400/50 hover:border-indigo-400'
                      }`}
                    >
                      {fields.completed && (
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </button>

                    {/* Text */}
                    <span className={`flex-1 text-base transition-all duration-150 ${
                      fields.completed ? 'line-through text-indigo-300/40' : 'text-white'
                    }`}>
                      {fields.text}
                    </span>

                    {/* Delete */}
                    <button
                      onClick={() => deleteTodo(todo)}
                      aria-label="Delete task"
                      className="opacity-0 group-hover:opacity-100 text-indigo-300/60 hover:text-red-400 transition-all duration-150 p-1 rounded-lg hover:bg-red-400/10"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </li>
                )
              })}
            </ul>
          )}
        </div>

        {/* Footer */}
        {completedCount > 0 && (
          <div className="mt-4 flex justify-end">
            <button
              onClick={clearCompleted}
              className="text-sm text-indigo-300/70 hover:text-red-400 transition-colors duration-150 px-3 py-1.5 rounded-xl hover:bg-red-400/10"
            >
              Clear completed ({completedCount})
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
