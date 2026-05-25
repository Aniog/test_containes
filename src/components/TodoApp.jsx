import React, { useState, useEffect, useCallback } from 'react'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Trash2 } from 'lucide-react'
import { fetchTodos, createTodo, updateTodo, deleteTodo, clearCompletedTodos } from '@/api/todo'

export default function TodoApp() {
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  const loadTodos = useCallback(async () => {
    setStatus('loading')
    try {
      const data = await fetchTodos()
      setTodos(data)
      setStatus('ready')
    } catch (err) {
      console.error(err)
      setError(err.message || 'Failed to load todos')
      setStatus('error')
    }
  }, [])

  useEffect(() => {
    loadTodos()
  }, [loadTodos])

  const handleAdd = async (e) => {
    e.preventDefault()
    if (!inputValue.trim()) return

    setStatus('submitting')
    try {
      await createTodo(inputValue.trim())
      setInputValue('')
      await loadTodos()
    } catch (err) {
      console.error(err)
      setError(err.message || 'Failed to add todo')
      setStatus('error')
    }
  }

  const handleToggle = async (todo) => {
    const isCompleted = todo.data.completed
    try {
      // Optimistic update
      setTodos(current => current.map(t => t.id === todo.id ? { ...t, data: { ...t.data, completed: !isCompleted } } : t))
      await updateTodo(todo, { completed: !isCompleted })
      await loadTodos() // Sync with server completely
    } catch (err) {
      console.error(err)
      setError(err.message || 'Failed to update todo')
      await loadTodos() // Revert on error
    }
  }

  const handleDelete = async (id) => {
    try {
      setTodos(current => current.filter(t => t.id !== id))
      await deleteTodo(id)
      await loadTodos()
    } catch (err) {
      console.error(err)
      setError(err.message || 'Failed to delete todo')
      await loadTodos()
    }
  }

  const handleClearCompleted = async () => {
    const completedIds = todos.filter(t => t.data.completed).map(t => t.id)
    if (completedIds.length === 0) return

    setStatus('submitting')
    try {
       setTodos(current => current.filter(t => !t.data.completed))
       await clearCompletedTodos(completedIds)
       await loadTodos()
    } catch (err) {
      console.error(err)
      setError(err.message || 'Failed to clear completed todos')
      await loadTodos()
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-lg border-0 ring-1 ring-slate-200">
        <CardHeader className="pb-4">
          <CardTitle className="text-2xl font-bold text-center text-slate-800">Todo List</CardTitle>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleAdd} className="flex gap-2 mb-6">
            <Input
              type="text"
              placeholder="What needs to be done?"
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
              className="flex-1 text-slate-900 border-slate-300 focus-visible:ring-slate-400 placeholder:text-slate-400 bg-white"
              disabled={status === 'loading'}
            />
            <Button type="submit" disabled={status === 'loading' || !inputValue.trim()} className="bg-slate-800 hover:bg-slate-700 text-white">
              Add
            </Button>
          </form>

          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          
          {status === 'loading' && todos.length === 0 && (
            <p className="text-center text-slate-500 py-4">Loading...</p>
          )}

          {todos.length === 0 && status !== 'loading' && !error && (
            <p className="text-center text-slate-500 py-4 italic">No tasks yet. Add one above!</p>
          )}

          <ul className="space-y-3">
            {todos.map(todo => (
              <li 
                key={todo.id} 
                className="flex items-center justify-between p-3 bg-white rounded-lg border border-slate-200 shadow-sm transition-all hover:shadow-md h-14"
              >
                <div className="flex items-center gap-3">
                  <Checkbox 
                    id={`todo-${todo.id}`} 
                    checked={todo.data.completed} 
                    onCheckedChange={() => handleToggle(todo)}
                    className="border-slate-300 text-slate-800 data-[state=checked]:bg-slate-800 data-[state=checked]:text-slate-50"
                  />
                  <label 
                    htmlFor={`todo-${todo.id}`}
                    className={`text-base cursor-pointer select-none transition-colors ${todo.data.completed ? 'line-through text-slate-400' : 'text-slate-700'}`}
                  >
                    {todo.data.title}
                  </label>
                </div>
                <Button 
                  type="button"
                  variant="ghost" 
                  size="icon" 
                  className="text-slate-400 hover:text-red-600 h-8 w-8 hover:bg-red-50 shrink-0"
                  onClick={() => handleDelete(todo.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </li>
            ))}
          </ul>
        </CardContent>
        
        {todos.length > 0 && (
          <CardFooter className="pt-4 border-t border-slate-100 flex justify-between items-center text-sm text-slate-500">
            <span>{todos.filter(t => !t.data.completed).length} items left</span>
            {todos.some(t => t.data.completed) && (
              <Button 
                type="button"
                variant="ghost" 
                size="sm" 
                onClick={handleClearCompleted}
                className="text-slate-500 hover:text-slate-800 h-8 px-2"
              >
                Clear completed
              </Button>
            )}
          </CardFooter>
        )}
      </Card>
    </div>
  )
}
