import { useState, useCallback, useId } from 'react'
import { Plus, Trash2, CheckCircle2, Circle, ClipboardList, Sparkles } from 'lucide-react'
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'
import TodoFilters from './TodoFilters'
import TodoFooter from './TodoFooter'

const FILTERS = ['All', 'Active', 'Completed']

export default function TodoApp() {
  const [todos, setTodos] = useState([
    { id: crypto.randomUUID(), text: 'Build an awesome TODO app', completed: true },
    { id: crypto.randomUUID(), text: 'Add new tasks with ease', completed: false },
    { id: crypto.randomUUID(), text: 'Mark tasks as completed', completed: false },
  ])
  const [filter, setFilter] = useState('All')

  const addTodo = useCallback((text) => {
    const trimmed = text.trim()
    if (!trimmed) return
    setTodos((prev) => [
      { id: crypto.randomUUID(), text: trimmed, completed: false },
      ...prev,
    ])
    console.log('Todo added:', trimmed)
  }, [])

  const deleteTodo = useCallback((id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id))
    console.log('Todo deleted:', id)
  }, [])

  const toggleTodo = useCallback((id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    )
    console.log('Todo toggled:', id)
  }, [])

  const clearCompleted = useCallback(() => {
    setTodos((prev) => prev.filter((t) => !t.completed))
    console.log('Cleared all completed todos')
  }, [])

  const filteredTodos = todos.filter((t) => {
    if (filter === 'Active') return !t.completed
    if (filter === 'Completed') return t.completed
    return true
  })

  const activeCount = todos.filter((t) => !t.completed).length
  const completedCount = todos.filter((t) => t.completed).length

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-100 flex flex-col items-center py-12 px-4">
      {/* Header */}
      <div className="w-full max-w-lg mb-8 text-center">
        <div className="flex items-center justify-center gap-3 mb-2">
          <div className="bg-violet-600 text-white p-2.5 rounded-xl shadow-lg">
            <ClipboardList className="w-6 h-6" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 tracking-tight">My Tasks</h1>
        </div>
        <p className="text-gray-500 text-sm">
          {activeCount === 0
            ? completedCount > 0
              ? 'All tasks completed!'
              : 'No tasks yet. Add one below!'
            : `${activeCount} task${activeCount !== 1 ? 's' : ''} remaining`}
        </p>
      </div>

      {/* Main Card */}
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Input */}
        <div className="p-5 border-b border-gray-100">
          <TodoInput onAdd={addTodo} />
        </div>

        {/* Filters */}
        <div className="px-5 pt-4">
          <TodoFilters filters={FILTERS} active={filter} onChange={setFilter} />
        </div>

        {/* Todo List */}
        <div className="divide-y divide-gray-100 min-h-[80px]">
          {filteredTodos.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-gray-400">
              <Sparkles className="w-8 h-8 mb-2 text-violet-300" />
              <p className="text-sm font-medium">
                {filter === 'Completed'
                  ? 'No completed tasks yet'
                  : filter === 'Active'
                  ? 'No active tasks'
                  : 'No tasks yet — add one above!'}
              </p>
            </div>
          ) : (
            filteredTodos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
              />
            ))
          )}
        </div>

        {/* Footer */}
        <TodoFooter
          activeCount={activeCount}
          completedCount={completedCount}
          onClearCompleted={clearCompleted}
        />
      </div>

      <p className="mt-6 text-xs text-gray-400">Click a task to mark it complete</p>
    </div>
  )
}
