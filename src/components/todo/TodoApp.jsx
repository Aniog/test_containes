import { useState } from 'react'
import { ListTodo } from 'lucide-react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import TodoFooter from './TodoFooter'

const TodoApp = () => {
  const [todos, setTodos] = useState([])

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    }
    setTodos((prev) => [newTodo, ...prev])
  }

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const clearCompleted = () => {
    setTodos((prev) => prev.filter((todo) => !todo.completed))
  }

  const completedCount = todos.filter((todo) => todo.completed).length
  const totalCount = todos.length

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8 px-4">
      <div className="max-w-xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-8">
          <ListTodo className="w-8 h-8 text-indigo-600" />
          <h1 className="text-3xl font-bold text-slate-800">Todo App</h1>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-6">
            <TodoInput onAdd={addTodo} />
          </div>

          <div className="border-t border-slate-100">
            {totalCount === 0 ? (
              <div className="p-12 text-center">
                <p className="text-slate-400 text-lg">No todos yet</p>
                <p className="text-slate-300 text-sm mt-1">Add a task to get started!</p>
              </div>
            ) : (
              <TodoList
                todos={todos}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
              />
            )}
          </div>

          {totalCount > 0 && (
            <TodoFooter
              totalCount={totalCount}
              completedCount={completedCount}
              onClearCompleted={clearCompleted}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default TodoApp
