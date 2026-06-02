import { useState, useEffect, useCallback } from 'react'
import { fetchTodos, createTodo, updateTodo, deleteTodo } from '../api/todos.js'

export function useTodos() {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const loadTodos = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const rows = await fetchTodos()
      console.log('Loaded todos:', rows)
      setTodos(rows)
    } catch (err) {
      console.error('Failed to load todos:', err)
      setError(err.message || 'Failed to load todos')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    loadTodos()
  }, [loadTodos])

  const addTodo = useCallback(async (title) => {
    const trimmed = title.trim()
    if (!trimmed) return
    try {
      const created = await createTodo(trimmed)
      console.log('Created todo:', created)
      setTodos((prev) => [created, ...prev])
    } catch (err) {
      console.error('Failed to create todo:', err)
      setError(err.message || 'Failed to add todo')
    }
  }, [])

  const toggleTodo = useCallback(async (todo) => {
    const fields = todo.data ?? {}
    const updated = { ...fields, completed: !fields.completed }
    setTodos((prev) =>
      prev.map((t) =>
        t.id === todo.id ? { ...t, data: updated } : t
      )
    )
    try {
      const result = await updateTodo(todo.id, updated)
      console.log('Toggled todo:', result)
      setTodos((prev) =>
        prev.map((t) => (t.id === result.id ? result : t))
      )
    } catch (err) {
      console.error('Failed to toggle todo:', err)
      setError(err.message || 'Failed to update todo')
      await loadTodos()
    }
  }, [loadTodos])

  const removeTodo = useCallback(async (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id))
    try {
      await deleteTodo(id)
      console.log('Deleted todo:', id)
    } catch (err) {
      console.error('Failed to delete todo:', err)
      setError(err.message || 'Failed to delete todo')
      await loadTodos()
    }
  }, [loadTodos])

  const clearCompleted = useCallback(async () => {
    const completed = todos.filter((t) => t.data?.completed)
    setTodos((prev) => prev.filter((t) => !t.data?.completed))
    try {
      await Promise.all(completed.map((t) => deleteTodo(t.id)))
      console.log('Cleared completed todos:', completed.length)
    } catch (err) {
      console.error('Failed to clear completed:', err)
      setError(err.message || 'Failed to clear completed todos')
      await loadTodos()
    }
  }, [todos, loadTodos])

  return {
    todos,
    loading,
    error,
    addTodo,
    toggleTodo,
    removeTodo,
    clearCompleted,
    reload: loadTodos,
  }
}
