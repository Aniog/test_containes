import { useState, useEffect, useCallback } from 'react'
import { Loader2, AlertCircle, Trash2 } from 'lucide-react'
import { fetchTodos, createTodo, updateTodo, deleteTodo } from '@/api/todos'
import TodoInput from '@/components/todo/TodoInput'
import TodoItem from '@/components/todo/TodoItem'
import TodoFilter from '@/components/todo/TodoFilter'
import TodoEmpty from '@/components/todo/TodoEmpty'

export default function TodoPage() {
  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState('all')
  const [loading, setLoading] = useState(false)
  const [fetching, setFetching] = useState(true)
  const [error, setError] = useState(null)

  const loadTodos = useCallback(async () => {
    setFetching(true)
    setError(null)
    try {
      const rows = await fetchTodos()
      setTodos(rows)
    } catch (err) {
      console.error('Failed to load todos:', err)
      setError(err.message || '加载失败，请重试')
    } finally {
      setFetching(false)
    }
  }, [])

  useEffect(() => {
    loadTodos()
  }, [loadTodos])

  const handleAdd = async (fields) => {
    setLoading(true)
    setError(null)
    try {
      const created = await createTodo(fields)
      setTodos((prev) => [created, ...prev])
    } catch (err) {
      console.error('Failed to create todo:', err)
      setError(err.message || '添加失败')
    } finally {
      setLoading(false)
    }
  }

  const handleToggle = async (item) => {
    const fields = item?.data ?? {}
    setLoading(true)
    try {
      const updated = await updateTodo(item.id, { ...fields, completed: !fields.completed })
      setTodos((prev) => prev.map((t) => (t.id === updated.id ? updated : t)))
    } catch (err) {
      console.error('Failed to toggle todo:', err)
      setError(err.message || '更新失败')
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id) => {
    setLoading(true)
    try {
      await deleteTodo(id)
      setTodos((prev) => prev.filter((t) => t.id !== id))
    } catch (err) {
      console.error('Failed to delete todo:', err)
      setError(err.message || '删除失败')
    } finally {
      setLoading(false)
    }
  }

  const handleClearCompleted = async () => {
    const completed = todos.filter((t) => t?.data?.completed)
    setLoading(true)
    try {
      await Promise.all(completed.map((t) => deleteTodo(t.id)))
      setTodos((prev) => prev.filter((t) => !t?.data?.completed))
    } catch (err) {
      console.error('Failed to clear completed:', err)
      setError(err.message || '清除失败')
    } finally {
      setLoading(false)
    }
  }

  const filtered = todos.filter((t) => {
    const completed = t?.data?.completed
    if (filter === 'active') return !completed
    if (filter === 'completed') return completed
    return true
  })

  const counts = {
    all: todos.length,
    active: todos.filter((t) => !t?.data?.completed).length,
    completed: todos.filter((t) => t?.data?.completed).length,
  }

  const completedCount = counts.completed

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50 px-4 py-10">
      <div className="max-w-2xl mx-auto space-y-5">
        {/* Header */}
        <div className="text-center space-y-1 pb-2">
          <h1 className="text-3xl font-bold text-indigo-950 tracking-tight">我的任务</h1>
          <p className="text-sm text-gray-400">
            {counts.active > 0
              ? `还有 ${counts.active} 项任务待完成`
              : todos.length > 0
              ? '所有任务已完成 🎉'
              : '开始规划你的一天吧'}
          </p>
        </div>

        {/* Input */}
        <TodoInput onAdd={handleAdd} loading={loading} />

        {/* Error */}
        {error && (
          <div className="flex items-center gap-2 bg-red-50 border border-red-200 text-red-600 text-sm rounded-xl px-4 py-3">
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            {error}
          </div>
        )}

        {/* Filter */}
        <TodoFilter filter={filter} onChange={setFilter} counts={counts} />

        {/* List */}
        <div className="space-y-2.5">
          {fetching ? (
            <div className="flex justify-center py-16">
              <Loader2 className="w-7 h-7 text-violet-400 animate-spin" />
            </div>
          ) : filtered.length === 0 ? (
            <TodoEmpty filter={filter} />
          ) : (
            filtered.map((item) => (
              <TodoItem
                key={item.id}
                item={item}
                onToggle={handleToggle}
                onDelete={handleDelete}
                loading={loading}
              />
            ))
          )}
        </div>

        {/* Footer */}
        {completedCount > 0 && !fetching && (
          <div className="flex justify-end pt-1">
            <button
              onClick={handleClearCompleted}
              disabled={loading}
              className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-red-400 transition-colors"
            >
              <Trash2 className="w-3.5 h-3.5" />
              清除已完成 ({completedCount})
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
