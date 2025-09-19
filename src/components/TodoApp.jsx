import { useState, useEffect } from 'react'
import { Plus, Trash2, Check, CheckCircle2, Circle, Sparkles, Target, Calendar } from 'lucide-react'

const TodoApp = () => {
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [filter, setFilter] = useState('all') // all, active, completed

  // Load todos from localStorage on component mount
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos')
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos))
    }
  }, [])

  // Save todos to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  // Add new todo item
  const addTodo = () => {
    if (inputValue.trim() !== '') {
      const newTodo = {
        id: Date.now(),
        text: inputValue.trim(),
        completed: false,
        createdAt: new Date().toISOString(),
        priority: 'normal'
      }
      setTodos([...todos, newTodo])
      setInputValue('')
    }
  }

  // Delete todo item with animation
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  // Toggle todo completion status
  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  // Clear all completed tasks
  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed))
  }

  // Handle Enter key press in input
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo()
    }
  }

  // Filter todos based on current filter
  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed
    if (filter === 'completed') return todo.completed
    return true
  })

  const completedCount = todos.filter(todo => todo.completed).length
  const activeCount = todos.length - completedCount
  const completionPercentage = todos.length > 0 ? Math.round((completedCount / todos.length) * 100) : 0

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50 py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-violet-500 to-purple-600 rounded-3xl mb-6 shadow-lg">
            <Sparkles className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent mb-3">
            Todo Master
          </h1>
          <p className="text-gray-600 text-lg">
            Transform your productivity with beautiful task management
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
          {/* Progress Header */}
          {todos.length > 0 && (
            <div className="bg-gradient-to-r from-violet-500 to-purple-600 px-8 py-6">
              <div className="flex items-center justify-between text-white mb-4">
                <div className="flex items-center gap-3">
                  <Target className="w-6 h-6" />
                  <span className="text-lg font-semibold">Progress</span>
                </div>
                <span className="text-2xl font-bold">{completionPercentage}%</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-3 mb-2">
                <div 
                  className="bg-white rounded-full h-3 transition-all duration-500 ease-out"
                  style={{ width: `${completionPercentage}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-sm text-violet-100">
                <span>{activeCount} remaining</span>
                <span>{completedCount} completed</span>
              </div>
            </div>
          )}

          {/* Add Todo Section */}
          <div className="p-8 border-b border-gray-100">
            <div className="flex gap-4">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="What needs to be done today?"
                  className="w-full px-6 py-4 text-lg border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-violet-400 focus:ring-4 focus:ring-violet-100 transition-all duration-200 placeholder-gray-400 bg-gray-50/50"
                />
              </div>
              <button
                onClick={addTodo}
                disabled={!inputValue.trim()}
                className="px-8 py-4 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-2xl hover:from-violet-600 hover:to-purple-700 focus:outline-none focus:ring-4 focus:ring-violet-200 transition-all duration-200 flex items-center gap-3 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                <Plus className="w-6 h-6" />
                Add Task
              </button>
            </div>
          </div>

          {/* Filter Tabs */}
          {todos.length > 0 && (
            <div className="px-8 py-4 border-b border-gray-100">
              <div className="flex gap-2">
                {[
                  { key: 'all', label: 'All Tasks', count: todos.length },
                  { key: 'active', label: 'Active', count: activeCount },
                  { key: 'completed', label: 'Completed', count: completedCount }
                ].map(({ key, label, count }) => (
                  <button
                    key={key}
                    onClick={() => setFilter(key)}
                    className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 flex items-center gap-2 ${
                      filter === key
                        ? 'bg-violet-100 text-violet-700 shadow-md'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {label}
                    <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                      filter === key
                        ? 'bg-violet-200 text-violet-800'
                        : 'bg-gray-200 text-gray-600'
                    }`}>
                      {count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Todo List */}
          <div className="max-h-[500px] overflow-y-auto">
            {filteredTodos.length === 0 ? (
              <div className="p-16 text-center">
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-violet-100 to-purple-100 rounded-full flex items-center justify-center">
                  {todos.length === 0 ? (
                    <CheckCircle2 className="w-12 h-12 text-violet-400" />
                  ) : (
                    <Calendar className="w-12 h-12 text-violet-400" />
                  )}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {todos.length === 0 ? 'Ready to get started?' : `No ${filter} tasks`}
                </h3>
                <p className="text-gray-500 text-lg">
                  {todos.length === 0 
                    ? 'Add your first task above and start being productive!' 
                    : `All your ${filter} tasks will appear here`
                  }
                </p>
              </div>
            ) : (
              <div className="divide-y divide-gray-100">
                {filteredTodos.map((todo, index) => (
                  <div
                    key={todo.id}
                    className={`p-6 flex items-center gap-4 hover:bg-gradient-to-r hover:from-violet-50 hover:to-purple-50 transition-all duration-300 group ${
                      todo.completed ? 'bg-gray-50/50' : ''
                    }`}
                    style={{
                      animationDelay: `${index * 50}ms`
                    }}
                  >
                    <button
                      onClick={() => toggleTodo(todo.id)}
                      className={`flex-shrink-0 w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${
                        todo.completed
                          ? 'bg-gradient-to-r from-green-400 to-emerald-500 border-green-400 text-white shadow-lg'
                          : 'border-gray-300 hover:border-violet-400 hover:bg-violet-50'
                      }`}
                    >
                      {todo.completed && <Check className="w-4 h-4" />}
                    </button>
                    
                    <span
                      className={`flex-1 text-left transition-all duration-300 text-lg ${
                        todo.completed
                          ? 'text-gray-500 line-through'
                          : 'text-gray-800 group-hover:text-violet-700'
                      }`}
                    >
                      {todo.text}
                    </span>
                    
                    <button
                      onClick={() => deleteTodo(todo.id)}
                      className="flex-shrink-0 p-3 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all duration-200 transform hover:scale-110 opacity-0 group-hover:opacity-100"
                      title="Delete task"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer Actions */}
          {completedCount > 0 && (
            <div className="p-6 bg-gray-50/50 border-t border-gray-100">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 font-medium">
                  {completedCount} task{completedCount !== 1 ? 's' : ''} completed
                </span>
                <button
                  onClick={clearCompleted}
                  className="px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-xl hover:from-red-600 hover:to-pink-600 focus:outline-none focus:ring-4 focus:ring-red-200 transition-all duration-200 font-medium flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <Trash2 className="w-4 h-4" />
                  Clear Completed
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-gray-500">
          <p>Made with ❤️ for productivity enthusiasts</p>
        </div>
      </div>
    </div>
  )
}

export default TodoApp