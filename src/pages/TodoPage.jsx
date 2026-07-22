import { useState, useEffect, useCallback } from 'react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'
import TodoInput from '../components/todo/TodoInput.jsx'
import TodoList from '../components/todo/TodoList.jsx'
import TodoFilter from '../components/todo/TodoFilter.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const getRows = (response) => response?.data?.list ?? []
const getEntity = (response) => response?.data ?? null
const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || '操作失败'
}

export default function TodoPage() {
  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState('all') // all | active | completed
  const [priorityFilter, setPriorityFilter] = useState('all')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchTodos = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const { data: response, error: fetchError } = await client
        .from('Todo Items')
        .select('*')
        .order('created_at', { ascending: false })

      if (fetchError) throw fetchError
      setTodos(getRows(response))
    } catch (err) {
      console.error('Fetch todos error:', err)
      setError(err.message || '加载失败')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchTodos()
  }, [fetchTodos])

  const handleCreate = async ({ title, priority, due_date, category }) => {
    const { data: response, error: createError } = await client
      .from('Todo Items')
      .insert({
        data: {
          title,
          completed: false,
          priority: priority || 'medium',
          due_date: due_date || undefined,
          category: category || undefined,
        },
      })
      .select()
      .single()

    if (createError || response?.success === false) {
      throw new Error(getErrorMessage(response, createError))
    }

    const created = getEntity(response)
    setTodos((prev) => [created, ...prev])
  }

  const handleToggle = async (todo) => {
    const fields = todo.data ?? {}
    const { data: response, error: updateError } = await client
      .from('Todo Items')
      .update({ data: { ...fields, completed: !fields.completed } })
      .eq('id', todo.id)
      .select()
      .single()

    if (updateError || response?.success === false) {
      console.error('Toggle error:', getErrorMessage(response, updateError))
      return
    }

    const updated = getEntity(response)
    setTodos((prev) => prev.map((t) => (t.id === updated.id ? updated : t)))
  }

  const handleDelete = async (todoId) => {
    const { data: response, error: deleteError } = await client
      .from('Todo Items')
      .delete()
      .eq('id', todoId)
      .select()
      .maybeSingle()

    if (deleteError || response?.success === false) {
      console.error('Delete error:', getErrorMessage(response, deleteError))
      return
    }

    setTodos((prev) => prev.filter((t) => t.id !== todoId))
  }

  const handleEdit = async (todo, newTitle) => {
    const fields = todo.data ?? {}
    const { data: response, error: updateError } = await client
      .from('Todo Items')
      .update({ data: { ...fields, title: newTitle } })
      .eq('id', todo.id)
      .select()
      .single()

    if (updateError || response?.success === false) {
      console.error('Edit error:', getErrorMessage(response, updateError))
      return
    }

    const updated = getEntity(response)
    setTodos((prev) => prev.map((t) => (t.id === updated.id ? updated : t)))
  }

  const handleClearCompleted = async () => {
    const completed = todos.filter((t) => t.data?.completed)
    await Promise.all(completed.map((t) => handleDelete(t.id)))
  }

  const filteredTodos = todos.filter((todo) => {
    const fields = todo.data ?? {}
    const statusMatch =
      filter === 'all' ||
      (filter === 'active' && !fields.completed) ||
      (filter === 'completed' && fields.completed)
    const priorityMatch =
      priorityFilter === 'all' || fields.priority === priorityFilter
    return statusMatch && priorityMatch
  })

  const activeCount = todos.filter((t) => !t.data?.completed).length
  const completedCount = todos.filter((t) => t.data?.completed).length

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
            ✅ 我的待办事项
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            {activeCount} 项待完成 · {completedCount} 项已完成
          </p>
        </div>

        {/* Input */}
        <TodoInput onCreate={handleCreate} />

        {/* Filter */}
        <TodoFilter
          filter={filter}
          setFilter={setFilter}
          priorityFilter={priorityFilter}
          setPriorityFilter={setPriorityFilter}
          completedCount={completedCount}
          onClearCompleted={handleClearCompleted}
        />

        {/* Error */}
        {error && (
          <div className="mb-4 rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        )}

        {/* List */}
        <TodoList
          todos={filteredTodos}
          loading={loading}
          onToggle={handleToggle}
          onDelete={handleDelete}
          onEdit={handleEdit}
          filter={filter}
        />
      </div>
    </div>
  )
}
