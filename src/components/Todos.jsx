import React, { useState, useEffect, useCallback } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { Trash2, PlusCircle, CheckCircle2, Circle } from 'lucide-react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'
import { toast } from 'sonner'
import { cn } from '@/lib/utils'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const getRows = (response) => response?.data?.list ?? []
const getEntity = (response) => response?.data ?? null
const getSchemaData = (entity) => entity?.data ?? {}
const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || 'Request failed'
}

export default function Todos() {
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState('loading') // 'loading', 'ready', 'error'
  const [newTodoTitle, setNewTodoTitle] = useState('')
  const [isAdding, setIsAdding] = useState(false)

  const refreshTodos = useCallback(async () => {
    setStatus('loading')
    try {
      const { data: response, error } = await client
        .from('Todos')
        .select('*')
        .order('id', { ascending: false }) // Or something else, usually created_at but we don't have it explicitly. ID works enough for now.
        .range(0, 99)

      if (error || response?.success === false) {
        throw new Error(getErrorMessage(response, error))
      }

      setTodos(getRows(response))
      setStatus('ready')
    } catch (err) {
      toast.error(err.message || 'Failed to load todos')
      setStatus('error')
    }
  }, [])

  useEffect(() => {
    refreshTodos()
  }, [refreshTodos])

  const handleAddTodo = async (e) => {
    e.preventDefault()
    if (!newTodoTitle.trim()) return

    setIsAdding(true)
    try {
      const { data: response, error } = await client
        .from('Todos')
        .insert({
          data: {
            title: newTodoTitle.trim(),
            completed: false
          }
        })
        .select()
        .single()

      if (error || response?.success === false) {
        throw new Error(getErrorMessage(response, error))
      }

      const createdTodo = getEntity(response)
      setTodos((current) => [createdTodo, ...current])
      setNewTodoTitle('')
      toast.success('Todo added')
    } catch (err) {
      toast.error(err.message || 'Failed to add todo')
    } finally {
      setIsAdding(false)
    }
  }

  const handleToggleTodo = async (todo) => {
    const fields = getSchemaData(todo)
    const newCompletedState = !fields.completed

    // Optimistic update
    setTodos((current) =>
      current.map((t) =>
        t.id === todo.id ? { ...t, data: { ...t.data, completed: newCompletedState } } : t
      )
    )

    try {
      const { data: response, error } = await client
        .from('Todos')
        .update({
          data: {
            ...fields,
            completed: newCompletedState
          }
        })
        .eq('id', todo.id)
        .select()
        .single()

      if (error || response?.success === false) {
        throw new Error(getErrorMessage(response, error))
      }
    } catch (err) {
      // Revert optimistic update
      setTodos((current) =>
        current.map((t) =>
          t.id === todo.id ? { ...t, data: { ...t.data, completed: fields.completed } } : t
        )
      )
      toast.error(err.message || 'Failed to update todo status')
    }
  }

  const handleDeleteTodo = async (id) => {
    // Keep a copy in case we need to revert
    const todoToDelete = todos.find(t => t.id === id)
    
    // Optimistic delete
    setTodos((current) => current.filter((t) => t.id !== id))

    try {
      const { data: response, error } = await client
        .from('Todos')
        .delete()
        .eq('id', id)
        .select()
        .maybeSingle()

      if (error || response?.success === false) {
        throw new Error(getErrorMessage(response, error))
      }
      toast.success('Todo deleted')
    } catch (err) {
      // Revert
      if (todoToDelete) {
         setTodos((current) => [...current, todoToDelete].sort((a,b) => b.id - a.id)) // rough sorting
      }
      toast.error(err.message || 'Failed to delete todo')
    }
  }

  const handleClearCompleted = async () => {
    const completedTodos = todos.filter((t) => getSchemaData(t).completed)
    if (completedTodos.length === 0) return

    // Optimistic
    setTodos((current) => current.filter((t) => !getSchemaData(t).completed))

    let successCount = 0
    let failCount = 0

    // For simplicity, deleting one by one. Ideally would use `.in('id', ids)` but checking logic
    for (const todo of completedTodos) {
      try {
        const { data: response, error } = await client
           .from('Todos')
           .delete()
           .eq('id', todo.id)
           .select()
           .maybeSingle()
        if (error || response?.success === false) throw error;
        successCount++
      } catch (e) {
        failCount++
      }
    }
    
    if (failCount > 0) {
       toast.error(`Failed to delete ${failCount} items.`)
       refreshTodos() // Sync with server for the failed ones
    } else if (successCount > 0) {
       toast.success('Cleared completed todos')
    }
  }

  return (
    <Card className="w-full shadow-lg border-0 bg-white">
      <CardHeader className="bg-primary/5 border-b mb-6">
        <CardTitle className="text-3xl font-bold text-center text-primary">Todo List</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        
        <form onSubmit={handleAddTodo} className="flex gap-2">
          <Input 
            type="text" 
            placeholder="What needs to be done?" 
            value={newTodoTitle} 
            onChange={(e) => setNewTodoTitle(e.target.value)}
            disabled={isAdding}
            className="flex-1 text-lg py-6"
            autoFocus
          />
          <Button type="submit" disabled={isAdding || !newTodoTitle.trim()} className="py-6 px-6">
            <PlusCircle className="mr-2 h-5 w-5" />
            Add
          </Button>
        </form>

        <div className="space-y-3">
          {status === 'loading' && <div className="text-center text-muted-foreground py-8">Loading todos...</div>}
          
          {status === 'ready' && todos.length === 0 && (
             <div className="text-center text-muted-foreground py-12 flex flex-col items-center gap-3">
               <CheckCircle2 className="h-12 w-12 text-muted-foreground/30" />
               <p className="text-lg">No todos yet. You're all caught up!</p>
             </div>
          )}

          {status === 'ready' && todos.map((todo) => {
            const fields = getSchemaData(todo)
            return (
              <div 
                key={todo.id} 
                className={cn(
                  "flex items-center justify-between p-4 border rounded-xl transition-all shadow-sm group",
                  fields.completed ? "bg-muted/30 border-muted text-muted-foreground" : "bg-card hover:border-primary/50"
                )}
              >
                <div className="flex items-center gap-4 flex-1">
                  <button 
                    type="button"
                    onClick={() => handleToggleTodo(todo)}
                    className="text-muted-foreground hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary rounded-full transition-colors flex-shrink-0"
                  >
                     {fields.completed ? (
                       <CheckCircle2 className="h-7 w-7 text-green-500" />
                     ) : (
                       <Circle className="h-7 w-7 opacity-50 hover:opacity-100" />
                     )}
                  </button>
                  <span className={cn(
                    "text-lg transition-all break-words cursor-pointer select-none", 
                    fields.completed && "line-through opacity-70"
                  )}
                  onClick={() => handleToggleTodo(todo)}
                  >
                    {fields.title}
                  </span>
                </div>
                
                <Button 
                   variant="ghost" 
                   size="icon" 
                   onClick={() => handleDeleteTodo(todo.id)}
                   className="text-muted-foreground opacity-0 group-hover:opacity-100 focus:opacity-100 hover:text-destructive hover:bg-destructive/10 transition-all flex-shrink-0"
                   title="Delete todo"
                >
                   <Trash2 className="h-5 w-5" />
                   <span className="sr-only">Delete</span>
                </Button>
              </div>
            )
          })}
        </div>

        {todos.some(t => getSchemaData(t).completed) && (
          <div className="flex justify-end pt-6 border-t mt-8">
            <Button variant="outline" onClick={handleClearCompleted} className="text-sm border-destructive/20 text-destructive hover:bg-destructive/10">
              Clear Completed
            </Button>
          </div>
        )}

      </CardContent>
    </Card>
  )
}