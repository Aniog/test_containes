import React, { useState, useEffect, useCallback } from 'react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../../config.jsx'
import { Plus, Trash2, Check, X } from 'lucide-react'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const getRows = (response) => response?.data?.list ?? []
const getEntity = (response) => response?.data ?? null
const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || 'Request failed'
}

export default function TodoApp() {
  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState('')
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  const fetchTodos = useCallback(async () => {
    setStatus('loading')
    setError(null)
    try {
      const { data: response, error: fetchError } = await client
        .from('Todo Items')
        .select('*')
        .order('created_at', { ascending: false })

      if (fetchError) throw fetchError
      
      const todoList = getRows(response)
      setTodos(todoList)
      setStatus('ready')
    } catch (err) {
      console.error('Error fetching todos:', err)
      setError(err.message || 'Failed to load todos')
      setStatus('error')
    }
  }, [])

  useEffect(() => {
    fetchTodos()
  }, [fetchTodos])

  const addTodo = async (e) => {
    e.preventDefault()
    if (!newTodo.trim()) return

    setError(null)
    setStatus('submitting')

    try {
      const { data: response, error: createError } = await client
        .from('Todo Items')
        .insert({
          data: {
            title: newTodo.trim(),
            completed: false,
            created_at: new Date().toISOString(),
          },
        })
        .select()
        .single()

      if (createError || response?.success === false) {
        throw new Error(getErrorMessage(response, createError))
      }

      const createdTodo = getEntity(response)
      setTodos((current) => [createdTodo, ...current])
      setNewTodo('')
      setStatus('ready')
    } catch (err) {
      console.error('Error adding todo:', err)
      setError(err.message || 'Failed to add todo')
      setStatus('error')
    }
  }

  const toggleTodo = async (todo) => {
    const todoData = todo.data || {}
    const isCompleted = !todoData.completed

    try {
      const { data: response, error: updateError } = await client
        .from('Todo Items')
        .update({
          data: {
            ...todoData,
            completed: isCompleted,
            completed_at: isCompleted ? new Date().toISOString() : null,
          },
        })
        .eq('id', todo.id)
        .select()
        .single()

      if (updateError || response?.success === false) {
        throw new Error(getErrorMessage(response, updateError))
      }

      const updatedTodo = getEntity(response)
      setTodos((current) =>
        current.map((item) => (item.id === updatedTodo.id ? updatedTodo : item))
      )
    } catch (err) {
      console.error('Error toggling todo:', err)
      setError(err.message || 'Failed to update todo')
    }
  }

  const deleteTodo = async (todoId) => {
    try {
      const { data: response, error: deleteError } = await client
        .from('Todo Items')
        .delete()
        .eq('id', todoId)
        .select()
        .maybeSingle()

      if (deleteError || response?.success === false) {
        throw new Error(getErrorMessage(response, deleteError))
      }

      setTodos((current) => current.filter((item) => item.id !== todoId))
    } catch (err) {
      console.error('Error deleting todo:', err)
      setError(err.message || 'Failed to delete todo')
    }
  }

  const clearCompleted = async () => {
    const completedTodos = todos.filter((todo) => todo.data?.completed)
    
    if (completedTodos.length === 0) return

    try {
      // Delete all completed todos
      for (const todo of completedTodos) {
        await client
          .from('Todo Items')
          .delete()
          .eq('id', todo.id)
      }

      // Refresh the list to ensure consistency
      await fetchTodos()
    } catch (err) {
      console.error('Error clearing completed todos:', err)
      setError(err.message || 'Failed to clear completed todos')
    }
  }

  const completedCount = todos.filter((todo) => todo.data?.completed).length
  const activeCount = todos.length - completedCount

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-blue-600 text-white p-6">
            <h1 className="text-3xl font-bold text-center">Todo App</h1>
            <p className="text-blue-100 text-center mt-2">
              Stay organized and get things done
            </p>
          </div>

          {/* Add Todo Form */}
          <div className="p-6 border-b border-gray-200">
            <form onSubmit={addTodo} className="flex gap-3">
              <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="What needs to be done?"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                disabled={status === 'submitting'}
              />
              <button
                type="submit"
                disabled={status === 'submitting' || !newTodo.trim()}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                <Plus className="w-5 h-5" />
                {status === 'submitting' ? 'Adding...' : 'Add'}
              </button>
            </form>
          </div>

          {/* Stats */}
          <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
            <div className="flex justify-between items-center text-sm text-gray-600">
              <span>{activeCount} active task{activeCount !== 1 ? 's' : ''}</span>
              <span>{completedCount} completed</span>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mx-6 mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-800 text-sm">{error}</p>
            </div>
          )}

          {/* Todo List */}
          <div className="divide-y divide-gray-200">
            {status === 'loading' && todos.length === 0 ? (
              <div className="p-8 text-center text-gray-500">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
                Loading todos...
              </div>
            ) : todos.length === 0 ? (
              <div className="p-8 text-center text-gray-500">
                <p className="text-lg">No todos yet!</p>
                <p className="text-sm mt-2">Add your first task above to get started.</p>
              </div>
            ) : (
              todos.map((todo) => {
                const todoData = todo.data || {}
                return (
                  <div
                    key={todo.id}
                    className={`p-4 flex items-center gap-4 hover:bg-gray-50 transition-colors ${
                      todoData.completed ? 'opacity-75' : ''
                    }`}
                  >
                    <button
                      onClick={() => toggleTodo(todo)}
                      className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                        todoData.completed
                          ? 'bg-green-500 border-green-500 text-white'
                          : 'border-gray-300 hover:border-green-500'
                      }`}
                    >
                      {todoData.completed && <Check className="w-4 h-4" />}
                    </button>
                    
                    <div className="flex-1 min-w-0">
                      <p
                        className={`text-gray-900 ${
                          todoData.completed ? 'line-through text-gray-500' : ''
                        }`}
                      >
                        {todoData.title}
                      </p>
                      {todoData.completed && todoData.completed_at && (
                        <p className="text-xs text-gray-400 mt-1">
                          Completed {new Date(todoData.completed_at).toLocaleDateString()}
                        </p>
                      )}
                    </div>
                    
                    <button
                      onClick={() => deleteTodo(todo.id)}
                      className="flex-shrink-0 p-2 text-gray-400 hover:text-red-500 transition-colors"
                      title="Delete todo"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                )
              })
            )}
          </div>

          {/* Footer Actions */}
          {todos.length > 0 && (
            <div className="p-6 bg-gray-50 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">
                  {todos.length} total task{todos.length !== 1 ? 's' : ''}
                </span>
                {completedCount > 0 && (
                  <button
                    onClick={clearCompleted}
                    className="px-4 py-2 text-sm text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors flex items-center gap-2"
                  >
                    <X className="w-4 h-4" />
                    Clear completed ({completedCount})
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}