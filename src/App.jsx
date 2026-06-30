import { useState, useEffect, useCallback } from 'react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from './config.jsx'
import TodoForm from './components/TodoForm.jsx'
import TodoList from './components/TodoList.jsx'
import FilterBar from './components/FilterBar.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const getRows = (response) => response?.data?.list ?? []
const getEntity = (response) => response?.data ?? null
const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || 'Request failed'
}

const STATUS_FILTERS = ['all', 'todo', 'in_progress', 'done']
const PRIORITY_FILTERS = ['all', 'high', 'medium', 'low']

export default function App() {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [statusFilter, setStatusFilter] = useState('all')
  const [priorityFilter, setPriorityFilter] = useState('all')
  const [showForm, setShowForm] = useState(false)
  const [editingTodo, setEditingTodo] = useState(null)

  const fetchTodos = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      let query = client.from('Todo Items').select('*').order('created_at', { ascending: false })
      const { data: response, error: fetchError } = await query
      if (fetchError) throw fetchError
      setTodos(getRows(response))
    } catch (err) {
      console.error('Failed to fetch todos:', err)
      setError(err.message || 'Failed to load tasks')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchTodos()
  }, [fetchTodos])

  const handleCreate = async (formData) => {
    const { data: response, error: createError } = await client
      .from('Todo Items')
      .insert({ data: formData })
      .select()
      .single()

    if (createError || response?.success === false) {
      throw new Error(getErrorMessage(response, createError))
    }

    const created = getEntity(response)
    setTodos((prev) => [created, ...prev])
    setShowForm(false)
  }

  const handleUpdate = async (id, formData) => {
    const { data: response, error: updateError } = await client
      .from('Todo Items')
      .update({ data: formData })
      .eq('id', id)
      .select()
      .single()

    if (updateError || response?.success === false) {
      throw new Error(getErrorMessage(response, updateError))
    }

    const updated = getEntity(response)
    setTodos((prev) => prev.map((t) => (t.id === updated.id ? updated : t)))
    setEditingTodo(null)
  }

  const handleStatusChange = async (todo, newStatus) => {
    const fields = todo.data ?? {}
    const { data: response, error: updateError } = await client
      .from('Todo Items')
      .update({ data: { ...fields, status: newStatus } })
      .eq('id', todo.id)
      .select()
      .single()

    if (updateError || response?.success === false) {
      console.error('Status update failed:', getErrorMessage(response, updateError))
      return
    }

    const updated = getEntity(response)
    setTodos((prev) => prev.map((t) => (t.id === updated.id ? updated : t)))
  }

  const handleDelete = async (id) => {
    const { data: response, error: deleteError } = await client
      .from('Todo Items')
      .delete()
      .eq('id', id)
      .select()
      .maybeSingle()

    if (deleteError || response?.success === false) {
      console.error('Delete failed:', getErrorMessage(response, deleteError))
      return
    }

    setTodos((prev) => prev.filter((t) => t.id !== id))
  }

  const filteredTodos = todos.filter((t) => {
    const fields = t.data ?? {}
    const statusMatch = statusFilter === 'all' || fields.status === statusFilter
    const priorityMatch = priorityFilter === 'all' || fields.priority === priorityFilter
    return statusMatch && priorityMatch
  })

  const counts = {
    all: todos.length,
    todo: todos.filter((t) => (t.data ?? {}).status === 'todo').length,
    in_progress: todos.filter((t) => (t.data ?? {}).status === 'in_progress').length,
    done: todos.filter((t) => (t.data ?? {}).status === 'done').length,
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-2xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-slate-900">My Tasks</h1>
            <p className="text-xs text-slate-500 mt-0.5">{counts.all} total · {counts.done} done</p>
          </div>
          <button
            onClick={() => { setShowForm(true); setEditingTodo(null) }}
            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
          >
            <span className="text-lg leading-none">+</span>
            Add Task
          </button>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-6">
        {/* Add / Edit Form */}
        {(showForm || editingTodo) && (
          <div className="mb-6">
            <TodoForm
              initial={editingTodo ? (editingTodo.data ?? {}) : null}
              onSubmit={editingTodo
                ? (data) => handleUpdate(editingTodo.id, data)
                : handleCreate
              }
              onCancel={() => { setShowForm(false); setEditingTodo(null) }}
            />
          </div>
        )}

        {/* Filter Bar */}
        <FilterBar
          statusFilter={statusFilter}
          priorityFilter={priorityFilter}
          onStatusChange={setStatusFilter}
          onPriorityChange={setPriorityFilter}
          statusFilters={STATUS_FILTERS}
          priorityFilters={PRIORITY_FILTERS}
          counts={counts}
        />

        {/* Todo List */}
        {loading ? (
          <div className="flex items-center justify-center py-16">
            <div className="w-8 h-8 border-2 border-indigo-600 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : error ? (
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-700 text-sm">
            {error}
          </div>
        ) : (
          <TodoList
            todos={filteredTodos}
            onEdit={setEditingTodo}
            onDelete={handleDelete}
            onStatusChange={handleStatusChange}
          />
        )}
      </main>
    </div>
  )
}
