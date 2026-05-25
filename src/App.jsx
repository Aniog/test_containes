import React, { useState, useEffect, useCallback } from 'react'
import { Plus, Trash2, CheckCircle2, Circle, X } from 'lucide-react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from './config.jsx'
import { cn } from './lib/utils'
import './App.css'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const getRows = (response) => response?.data?.list ?? []
const getEntity = (response) => response?.data ?? null
const getSchemaData = (entity) => entity?.data ?? {}

function App() {
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchTodos = useCallback(async () => {
    try {
      const { data: response, error: fetchError } = await client
        .from('TodoItem')
        .select('*')
        .order('created_at', { ascending: false })

      if (fetchError) throw fetchError
      setTodos(getRows(response))
    } catch (err) {
      console.error('Error fetching todos:', err)
      setError('Failed to load tasks')
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchTodos()
  }, [fetchTodos])

  const addTodo = async (e) => {
    e.preventDefault()
    if (!inputValue.trim()) return

    const newTodoTitle = inputValue.trim()
    setInputValue('')

    try {
      const { data: response, error: addError } = await client
        .from('TodoItem')
        .insert({
          data: {
            title: newTodoTitle,
            completed: false
          }
        })
        .select()
        .single()

      if (addError) throw addError
      const createdItem = getEntity(response)
      setTodos((prev) => [createdItem, ...prev])
    } catch (err) {
      console.error('Error adding todo:', err)
      setError('Failed to add task')
    }
  }

  const toggleTodo = async (todo) => {
    const fields = getSchemaData(todo)
    const newCompletedStatus = !fields.completed

    try {
      const { data: response, error: updateError } = await client
        .from('TodoItem')
        .update({
          data: {
            ...fields,
            completed: newCompletedStatus
          }
        })
        .eq('id', todo.id)
        .select()
        .single()

      if (updateError) throw updateError
      const updatedItem = getEntity(response)
      setTodos((prev) =>
        prev.map((t) => (t.id === todo.id ? updatedItem : t))
      )
    } catch (err) {
      console.error('Error toggling todo:', err)
      setError('Failed to update task')
    }
  }

  const deleteTodo = async (id) => {
    try {
      const { error: deleteError } = await client
        .from('TodoItem')
        .delete()
        .eq('id', id)

      if (deleteError) throw deleteError
      setTodos((prev) => prev.filter((t) => t.id !== id))
    } catch (err) {
      console.error('Error deleting todo:', err)
      setError('Failed to delete task')
    }
  }

  const clearCompleted = async () => {
    const completedTodos = todos.filter(t => getSchemaData(t).completed)
    if (completedTodos.length === 0) return

    try {
      // DataClient delete with eq can be used for bulk if supported, 
      // otherwise we might need to loop or use a different operator.
      // Standard Postgrest supports it.
      const { error: clearError } = await client
        .from('TodoItem')
        .delete()
        .eq('completed', true)

      if (clearError) throw clearError
      setTodos((prev) => prev.filter((t) => !getSchemaData(t).completed))
    } catch (err) {
      console.error('Error clearing completed:', err)
      setError('Failed to clear completed tasks')
    }
  }

  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-100 py-12 px-4">
      <div className="max-w-md mx-auto bg-neutral-800 rounded-xl shadow-2xl overflow-hidden border border-neutral-700">
        <header className="px-6 py-8 border-b border-neutral-700">
          <h1 className="text-3xl font-bold text-center tracking-tight">Todo App</h1>
        </header>

        <main className="p-6">
          <form onSubmit={addTodo} className="flex gap-2 mb-8">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="What needs to be done?"
              className="flex-1 bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-neutral-100 placeholder:text-neutral-500"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-2 flex items-center justify-center transition-colors disabled:opacity-50"
              disabled={!inputValue.trim()}
            >
              <Plus size={20} />
            </button>
          </form>

          {error && (
            <div className="bg-red-500/10 border border-red-500/50 text-red-500 px-4 py-2 rounded-lg mb-6 flex justify-between items-center">
              <span>{error}</span>
              <button onClick={() => setError(null)}>
                <X size={16} />
              </button>
            </div>
          )}

          {isLoading ? (
            <div className="flex justify-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : (
            <>
              <ul className="space-y-3">
                {todos.length === 0 ? (
                  <li className="text-center py-12 text-neutral-500">
                    No tasks yet. Add one above!
                  </li>
                ) : (
                  todos.map((todo) => {
                    const fields = getSchemaData(todo)
                    return (
                      <li
                        key={todo.id}
                        className={cn(
                          "flex items-center gap-3 p-3 rounded-lg bg-neutral-900/50 border border-neutral-700/50 transition-all hover:border-neutral-700 group",
                          fields.completed && "opacity-60"
                        )}
                      >
                        <button
                          onClick={() => toggleTodo(todo)}
                          className={cn(
                            "flex-shrink-0 transition-colors",
                            fields.completed ? "text-green-500" : "text-neutral-500 hover:text-blue-500"
                          )}
                        >
                          {fields.completed ? <CheckCircle2 size={24} /> : <Circle size={24} />}
                        </button>
                        <span
                          className={cn(
                            "flex-1 text-sm md:text-base cursor-pointer",
                            fields.completed && "line-through text-neutral-500"
                          )}
                          onClick={() => toggleTodo(todo)}
                        >
                          {fields.title}
                        </span>
                        <button
                          onClick={() => deleteTodo(todo.id)}
                          className="opacity-0 group-hover:opacity-100 p-1 text-neutral-500 hover:text-red-500 transition-all"
                        >
                          <Trash2 size={18} />
                        </button>
                      </li>
                    )
                  })
                )}
              </ul>

              {todos.length > 0 && (
                <div className="mt-8 pt-6 border-t border-neutral-700 flex justify-between items-center text-sm text-neutral-500">
                  <span>
                    {todos.filter((t) => !getSchemaData(t).completed).length} items left
                  </span>
                  <button
                    onClick={clearCompleted}
                    className="hover:text-red-500 transition-colors"
                  >
                    Clear completed
                  </button>
                </div>
              )}
            </>
          )}
        </main>
      </div>
    </div>
  )
}

export default App
