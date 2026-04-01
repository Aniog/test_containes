import React, { useState, useEffect } from 'react'
import { Plus, Trash2, Check, X, Loader2, AlertCircle } from 'lucide-react'
import { fetchTodos, createTodo, updateTodo, deleteTodo } from '../api/todoApi'

const TodoApp = () => {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [newTodoTitle, setNewTodoTitle] = useState('')
  const [isAdding, setIsAdding] = useState(false)

  useEffect(() => {
    loadTodos()
  }, [])

  const loadTodos = async () => {
    try {
      setLoading(true)
      setError(null)
      
      const { data, error: fetchError } = await fetchTodos()
      
      if (fetchError) {
        setError(fetchError)
        return
      }
      
      setTodos(data)
    } catch (err) {
      setError('Failed to load todos')
      console.error('Load todos error:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleAddTodo = async (e) => {
    e.preventDefault()
    
    if (!newTodoTitle.trim()) return
    
    setIsAdding(true)
    
    try {
      const { data, error: createError } = await createTodo({
        title: newTodoTitle.trim(),
        completed: false
      })
      
      if (createError) {
        setError(createError)
        return
      }
      
      // Add new todo to the beginning of the list
      setTodos(prev => [data, ...prev])
      setNewTodoTitle('')
    } catch (err) {
      setError('Failed to add todo')
      console.error('Add todo error:', err)
    } finally {
      setIsAdding(false)
    }
  }

  const handleToggleComplete = async (id, currentCompleted) => {
    try {
      const todo = todos.find(t => t.id === id)
      if (!todo) return

      const { data, error: updateError } = await updateTodo(id, {
        title: todo.data.title,
        completed: !currentCompleted
      })
      
      if (updateError) {
        setError(updateError)
        return
      }
      
      // Update the todo in the list
      setTodos(prev => prev.map(todo => 
        todo.id === id ? data : todo
      ))
    } catch (err) {
      setError('Failed to update todo')
      console.error('Toggle complete error:', err)
    }
  }

  const handleDeleteTodo = async (id) => {
    try {
      const { error: deleteError } = await deleteTodo(id)
      
      if (deleteError) {
        setError(deleteError)
        return
      }
      
      // Remove todo from the list
      setTodos(prev => prev.filter(todo => todo.id !== id))
    } catch (err) {
      setError('Failed to delete todo')
      console.error('Delete todo error:', err)
    }
  }

  const handleClearCompleted = async () => {
    const completedTodos = todos.filter(todo => todo.data.completed)
    
    if (completedTodos.length === 0) return
    
    try {
      // Delete all completed todos
      const deletePromises = completedTodos.map(todo => deleteTodo(todo.id))
      await Promise.all(deletePromises)
      
      // Remove completed todos from the list
      setTodos(prev => prev.filter(todo => !todo.data.completed))
    } catch (err) {
      setError('Failed to clear completed todos')
      console.error('Clear completed error:', err)
    }
  }

  const completedCount = todos.filter(todo => todo.data.completed).length
  const totalCount = todos.length

  if (loading) {
    return (
      <div className="min-h-screen bg-purple-50 flex items-center justify-center">
        <div className="flex items-center gap-2 text-purple-600">
          <Loader2 className="animate-spin" size={20} />
          <span>Loading todos...</span>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-purple-50 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg border border-purple-100">
          {/* Header */}
          <div className="p-6 border-b">
            <h1 className="text-2xl font-bold text-purple-900 mb-2">Todo App</h1>
            <p className="text-purple-600">
              {totalCount === 0 ? 'No todos yet' : `${completedCount} of ${totalCount} completed`}
            </p>
          </div>

          {/* Add Todo Form */}
          <div className="p-6 border-b">
            <form onSubmit={handleAddTodo} className="flex gap-3">
              <input
                type="text"
                value={newTodoTitle}
                onChange={(e) => setNewTodoTitle(e.target.value)}
                placeholder="Add a new todo..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                disabled={isAdding}
              />
              <button
                type="submit"
                disabled={isAdding || !newTodoTitle.trim()}
                className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 transition-colors"
              >
                {isAdding ? (
                  <Loader2 className="animate-spin" size={16} />
                ) : (
                  <Plus size={16} />
                )}
                Add
              </button>
            </form>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mx-6 mt-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-red-700">
              <AlertCircle size={16} />
              <span>{error}</span>
              <button
                onClick={() => setError(null)}
                className="ml-auto text-red-500 hover:text-red-700"
              >
                <X size={16} />
              </button>
            </div>
          )}

          {/* Todo List */}
          <div className="p-6">
            {todos.length === 0 ? (
              <div className="text-center py-12 text-gray-500">
                <div className="text-4xl mb-4">📝</div>
                <p className="text-lg mb-2">No todos yet</p>
                <p className="text-sm">Add your first todo above to get started!</p>
              </div>
            ) : (
              <div className="space-y-3">
                {todos.map((todo) => (
                  <div
                    key={todo.id}
                    className={`flex items-center gap-3 p-4 rounded-lg border transition-all ${
                      todo.data.completed
                        ? 'bg-gray-50 border-gray-200'
                        : 'bg-white border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    <button
                      onClick={() => handleToggleComplete(todo.id, todo.data.completed)}
                      className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                        todo.data.completed
                          ? 'bg-purple-500 border-purple-500 text-white'
                          : 'border-gray-300 hover:border-purple-500'
                      }`}
                    >
                      {todo.data.completed && <Check size={14} />}
                    </button>
                    
                    <span
                      className={`flex-1 transition-all ${
                        todo.data.completed
                          ? 'text-gray-500 line-through'
                          : 'text-gray-900'
                      }`}
                    >
                      {todo.data.title}
                    </span>
                    
                    <button
                      onClick={() => handleDeleteTodo(todo.id)}
                      className="flex-shrink-0 p-2 text-gray-400 hover:text-red-500 rounded-lg hover:bg-red-50 transition-colors"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Clear Completed Button */}
            {completedCount > 0 && (
              <div className="mt-6 pt-4 border-t">
                <button
                  onClick={handleClearCompleted}
                  className="px-4 py-2 text-purple-600 hover:bg-purple-50 rounded-lg transition-colors flex items-center gap-2"
                >
                  <Trash2 size={16} />
                  Clear {completedCount} completed {completedCount === 1 ? 'task' : 'tasks'}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TodoApp