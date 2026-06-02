import { useState } from 'react'
import { useTodos } from '../hooks/useTodos.js'
import TodoInput from '../components/todo/TodoInput.jsx'
import TodoList from '../components/todo/TodoList.jsx'
import TodoFooter from '../components/todo/TodoFooter.jsx'
import { CheckSquare, RefreshCw, AlertCircle } from 'lucide-react'

const TodoPage = () => {
  const [filter, setFilter] = useState('all')
  const { todos, loading, error, addTodo, toggleTodo, removeTodo, clearCompleted, reload } = useTodos()

  const completedCount = todos.filter((t) => t.data?.completed).length
  const totalCount = todos.length

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-start justify-center px-4 py-12">
      <div className="w-full max-w-lg">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-indigo-600 rounded-2xl shadow-lg mb-4">
            <CheckSquare className="w-7 h-7 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-slate-800 tracking-tight">My Tasks</h1>
          <p className="text-slate-500 text-sm mt-1">
            {totalCount === 0
              ? 'Start by adding a task below'
              : `${completedCount} of ${totalCount} tasks completed`}
          </p>
        </div>

        {/* Progress bar */}
        {totalCount > 0 && (
          <div className="mb-6 bg-slate-200 rounded-full h-1.5 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-500"
              style={{ width: `${(completedCount / totalCount) * 100}%` }}
            />
          </div>
        )}

        {/* Main card */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
          <div className="p-6 space-y-5">
            {/* Input */}
            <TodoInput onAdd={addTodo} disabled={loading} />

            {/* Error */}
            {error && (
              <div className="flex items-center gap-2 px-4 py-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span className="flex-1">{error}</span>
                <button
                  onClick={reload}
                  className="flex items-center gap-1 text-xs font-semibold hover:text-red-700 transition"
                >
                  <RefreshCw className="w-3 h-3" />
                  Retry
                </button>
              </div>
            )}

            {/* List */}
            {loading ? (
              <div className="flex flex-col items-center justify-center py-16 gap-3">
                <div className="w-8 h-8 border-3 border-indigo-200 border-t-indigo-600 rounded-full animate-spin" />
                <p className="text-sm text-slate-400">Loading tasks...</p>
              </div>
            ) : (
              <TodoList
                todos={todos}
                filter={filter}
                onToggle={toggleTodo}
                onDelete={removeTodo}
              />
            )}

            {/* Footer */}
            {!loading && todos.length > 0 && (
              <TodoFooter
                todos={todos}
                filter={filter}
                onFilterChange={setFilter}
                onClearCompleted={clearCompleted}
              />
            )}
          </div>
        </div>

        <p className="text-center text-xs text-slate-400 mt-6">
          Tasks are saved automatically
        </p>
      </div>
    </div>
  )
}

export default TodoPage
