import React, { useState, useEffect } from 'react'
import { supabase } from '@/api/postgrest-client.js'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import TodoFooter from './TodoFooter'
import { CheckSquare } from 'lucide-react'

const SCHEMA_NAME = 'Todo Item'

const TodoApp = () => {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('all') // all | active | completed

  useEffect(() => {
    fetchTodos()
  }, [])

  const fetchTodos = async () => {
    setLoading(true)
    const { data: responseData, error } = await supabase.from(SCHEMA_NAME).select('*')
    if (error) {
      console.error('Fetch todos failed:', error)
      setLoading(false)
      return
    }
    const list = responseData?.data?.list || []
    console.log('Fetched todos:', list)
    setTodos(list)
    setLoading(false)
  }

  const handleAdd = async (title) => {
    const payload = { data: { title: title.trim(), completed: false } }
    const { data: responseData, error } = await supabase.from(SCHEMA_NAME).insert(payload).select()
    if (error || !responseData?.success) {
      console.error('Add todo failed:', error)
      return
    }
    console.log('Created todo:', responseData.data)
    setTodos(prev => [responseData.data, ...prev])
  }

  const handleToggle = async (id, currentCompleted) => {
    const todo = todos.find(t => t.id === id)
    if (!todo) return
    const payload = { data: { title: todo.data.title, completed: !currentCompleted } }
    const { data: responseData, error } = await supabase.from(SCHEMA_NAME).update(payload).eq('id', id).select()
    if (error || !responseData?.success) {
      console.error('Toggle todo failed:', error)
      return
    }
    console.log('Updated todo:', responseData.data)
    setTodos(prev => prev.map(t => t.id === id ? responseData.data : t))
  }

  const handleDelete = async (id) => {
    const { data: responseData, error } = await supabase.from(SCHEMA_NAME).delete().eq('id', id)
    if (error || !responseData?.success) {
      console.error('Delete todo failed:', error)
      return
    }
    const deletedId = responseData.data.id
    console.log('Deleted todo id:', deletedId)
    setTodos(prev => prev.filter(t => t.id !== deletedId))
  }

  const handleClearCompleted = async () => {
    const completedTodos = todos.filter(t => t.data?.completed)
    await Promise.all(completedTodos.map(t => handleDelete(t.id)))
  }

  const filteredTodos = todos.filter(t => {
    if (filter === 'active') return !t.data?.completed
    if (filter === 'completed') return t.data?.completed
    return true
  })

  const activeCount = todos.filter(t => !t.data?.completed).length
  const completedCount = todos.filter(t => t.data?.completed).length

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-indigo-50 flex flex-col items-center py-16 px-4">
      {/* Header */}
      <div className="flex items-center gap-3 mb-10">
        <div className="bg-violet-600 text-white p-2.5 rounded-xl shadow-md">
          <CheckSquare size={28} />
        </div>
        <h1 className="text-4xl font-bold text-gray-800 tracking-tight">My Todos</h1>
      </div>

      {/* Card */}
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl shadow-violet-100 border border-gray-100 overflow-hidden">
        <TodoInput onAdd={handleAdd} />

        {loading ? (
          <div className="flex justify-center items-center py-16">
            <div className="w-8 h-8 border-4 border-violet-200 border-t-violet-600 rounded-full animate-spin" />
          </div>
        ) : (
          <TodoList
            todos={filteredTodos}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        )}

        <TodoFooter
          activeCount={activeCount}
          completedCount={completedCount}
          filter={filter}
          onFilterChange={setFilter}
          onClearCompleted={handleClearCompleted}
        />
      </div>

      <p className="mt-8 text-sm text-gray-400">© {new Date().getFullYear()} My Todos App</p>
    </div>
  )
}

export default TodoApp
