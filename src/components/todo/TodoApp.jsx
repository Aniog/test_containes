import React, { useState, useEffect, useCallback } from 'react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../../config.jsx'
import { Trash2, Plus, Check, X, AlertCircle, Circle, Minus } from 'lucide-react'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

// Helper functions for response handling
const getRows = (response) => response?.data?.list ?? []
const getEntity = (response) => response?.data ?? null
const getSchemaData = (entity) => entity?.data ?? {}
const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || 'Request failed'
}

// Priority configuration
const PRIORITY_CONFIG = {
  urgent: {
    label: '紧急',
    color: 'text-red-600',
    bgColor: 'bg-red-100',
    borderColor: 'border-red-300',
    icon: AlertCircle,
    order: 1
  },
  high: {
    label: '高',
    color: 'text-orange-600',
    bgColor: 'bg-orange-100',
    borderColor: 'border-orange-300',
    icon: Circle,
    order: 2
  },
  medium: {
    label: '中',
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
    borderColor: 'border-blue-300',
    icon: Minus,
    order: 3
  },
  low: {
    label: '低',
    color: 'text-gray-600',
    bgColor: 'bg-gray-100',
    borderColor: 'border-gray-300',
    icon: Circle,
    order: 4
  }
}

export default function TodoApp() {
  const [todos, setTodos] = useState([])
  const [newTodoTitle, setNewTodoTitle] = useState('')
  const [newTodoPriority, setNewTodoPriority] = useState('medium')
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)
  const [filter, setFilter] = useState('all') // 'all', 'active', 'completed'

  // Fetch todos from database
  const fetchTodos = useCallback(async () => {
    setStatus('loading')
    setError(null)
    try {
      const { data: response, error: fetchError } = await client
        .from('TodoItem')
        .select('*')
        .order('created_at', { ascending: false })

      if (fetchError) throw fetchError
      const rows = getRows(response)
      setTodos(rows)
      setStatus('ready')
    } catch (err) {
      setError(err.message || 'Failed to load todos')
      setStatus('error')
    }
  }, [])

  // Load todos on component mount
  useEffect(() => {
    fetchTodos()
  }, [fetchTodos])

  // Add new todo
  const addTodo = async (e) => {
    e.preventDefault()
    if (!newTodoTitle.trim()) return

    setError(null)
    try {
      const { data: response, error: createError } = await client
        .from('TodoItem')
        .insert({
          data: {
            title: newTodoTitle.trim(),
            completed: false,
            priority: newTodoPriority,
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
      setNewTodoTitle('')
      setNewTodoPriority('medium')
    } catch (err) {
      setError(err.message || 'Failed to add todo')
    }
  }

  // Toggle todo completion
  const toggleTodo = async (todo) => {
    const fields = getSchemaData(todo)
    const isCompleted = !fields.completed
    
    try {
      const { data: response, error: updateError } = await client
        .from('TodoItem')
        .update({
          data: {
            ...fields,
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
      setError(err.message || 'Failed to update todo')
    }
  }

  // Delete todo
  const deleteTodo = async (todoId) => {
    try {
      const { data: response, error: deleteError } = await client
        .from('TodoItem')
        .delete()
        .eq('id', todoId)
        .select()
        .maybeSingle()

      if (deleteError || response?.success === false) {
        throw new Error(getErrorMessage(response, deleteError))
      }

      setTodos((current) => current.filter((item) => item.id !== todoId))
    } catch (err) {
      setError(err.message || 'Failed to delete todo')
    }
  }

  // Clear all completed todos
  const clearCompleted = async () => {
    const completedTodos = todos.filter(todo => getSchemaData(todo).completed)
    
    try {
      // Delete all completed todos
      for (const todo of completedTodos) {
        await client
          .from('TodoItem')
          .delete()
          .eq('id', todo.id)
      }

      // Update local state
      setTodos((current) => current.filter(todo => !getSchemaData(todo).completed))
    } catch (err) {
      setError(err.message || 'Failed to clear completed todos')
    }
  }

  // Sort todos by priority and completion status
  const sortedTodos = [...todos].sort((a, b) => {
    const aFields = getSchemaData(a)
    const bFields = getSchemaData(b)
    
    // Completed items go to bottom
    if (aFields.completed !== bFields.completed) {
      return aFields.completed ? 1 : -1
    }
    
    // Sort by priority (urgent first)
    const aPriority = PRIORITY_CONFIG[aFields.priority || 'medium'].order
    const bPriority = PRIORITY_CONFIG[bFields.priority || 'medium'].order
    
    return aPriority - bPriority
  })

  // Filter todos based on current filter
  const filteredTodos = sortedTodos.filter(todo => {
    const fields = getSchemaData(todo)
    switch (filter) {
      case 'active':
        return !fields.completed
      case 'completed':
        return fields.completed
      default:
        return true
    }
  })

  const activeTodosCount = todos.filter(todo => !getSchemaData(todo).completed).length
  const completedTodosCount = todos.filter(todo => getSchemaData(todo).completed).length

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white min-h-screen">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Todo App
        </h1>

        {/* Add new todo form */}
        <form onSubmit={addTodo} className="mb-6">
          <div className="flex gap-2 mb-3">
            <input
              type="text"
              value={newTodoTitle}
              onChange={(e) => setNewTodoTitle(e.target.value)}
              placeholder="需要做什么？"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              disabled={status === 'loading'}
            />
            <select
              value={newTodoPriority}
              onChange={(e) => setNewTodoPriority(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              disabled={status === 'loading'}
            >
              <option value="urgent">🔴 紧急</option>
              <option value="high">🟠 高</option>
              <option value="medium">🔵 中</option>
              <option value="low">⚪ 低</option>
            </select>
            <button
              type="submit"
              disabled={!newTodoTitle.trim() || status === 'loading'}
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              添加
            </button>
          </div>
        </form>

        {/* Error message */}
        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            {error}
          </div>
        )}

        {/* Filter buttons */}
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1 rounded-lg text-sm ${
              filter === 'all'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            全部 ({todos.length})
          </button>
          <button
            onClick={() => setFilter('active')}
            className={`px-3 py-1 rounded-lg text-sm ${
              filter === 'active'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            进行中 ({activeTodosCount})
          </button>
          <button
            onClick={() => setFilter('completed')}
            className={`px-3 py-1 rounded-lg text-sm ${
              filter === 'completed'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            已完成 ({completedTodosCount})
          </button>
        </div>

        {/* Todo list */}
        {status === 'loading' && todos.length === 0 ? (
          <div className="text-center py-8 text-gray-500">加载中...</div>
        ) : filteredTodos.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            {filter === 'all' 
              ? '还没有任务，在上面添加一个吧！' 
              : `没有${filter === 'active' ? '进行中' : '已完成'}的任务。`}
          </div>
        ) : (
          <ul className="space-y-2">
            {filteredTodos.map((todo) => {
              const fields = getSchemaData(todo)
              const priorityConfig = PRIORITY_CONFIG[fields.priority || 'medium']
              const PriorityIcon = priorityConfig.icon
              
              return (
                <li
                  key={todo.id}
                  className={`flex items-center gap-3 p-3 border rounded-lg ${
                    fields.completed
                      ? 'bg-gray-50 border-gray-200'
                      : `bg-white ${priorityConfig.borderColor} border-l-4`
                  }`}
                >
                  <button
                    onClick={() => toggleTodo(todo)}
                    className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      fields.completed
                        ? 'bg-green-500 border-green-500 text-white'
                        : 'border-gray-300 hover:border-green-500'
                    }`}
                  >
                    {fields.completed && <Check className="w-4 h-4" />}
                  </button>
                  
                  {/* Priority indicator */}
                  <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs ${priorityConfig.bgColor} ${priorityConfig.color}`}>
                    <PriorityIcon className="w-3 h-3" />
                    <span>{priorityConfig.label}</span>
                  </div>
                  
                  <span
                    className={`flex-1 ${
                      fields.completed
                        ? 'text-gray-500 line-through'
                        : 'text-gray-800'
                    }`}
                  >
                    {fields.title}
                  </span>
                  
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="flex-shrink-0 p-1 text-red-500 hover:text-red-700 hover:bg-red-50 rounded"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </li>
              )
            })}
          </ul>
        )}

        {/* Footer with clear completed button */}
        {completedTodosCount > 0 && (
          <div className="mt-6 pt-4 border-t border-gray-200">
            <button
              onClick={clearCompleted}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 flex items-center gap-2"
            >
              <X className="w-4 h-4" />
              清除已完成 ({completedTodosCount})
            </button>
          </div>
        )}

        {/* Stats */}
        <div className="mt-4 text-sm text-gray-500 text-center">
          还有 {activeTodosCount} 个任务待完成
        </div>
      </div>
    </div>
  )
}