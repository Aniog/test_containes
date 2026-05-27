import { useState, useMemo } from 'react'
import { Plus, Trash2, Check, Circle, ClipboardList, Sun, Moon } from 'lucide-react'

const FILTERS = ['全部', '待完成', '已完成']

const CATEGORIES = [
  { label: '工作', color: 'bg-blue-500' },
  { label: '生活', color: 'bg-green-500' },
  { label: '学习', color: 'bg-purple-500' },
  { label: '其他', color: 'bg-orange-500' },
]

let nextId = 1

export default function TodoApp() {
  const [todos, setTodos] = useState([
    { id: nextId++, text: '完成项目报告', completed: false, category: '工作', createdAt: new Date() },
    { id: nextId++, text: '去超市购物', completed: false, category: '生活', createdAt: new Date() },
    { id: nextId++, text: '阅读《深度工作》', completed: true, category: '学习', createdAt: new Date() },
  ])
  const [input, setInput] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('工作')
  const [filter, setFilter] = useState('全部')
  const [darkMode, setDarkMode] = useState(false)

  const addTodo = () => {
    const text = input.trim()
    if (!text) return
    setTodos(prev => [
      { id: nextId++, text, completed: false, category: selectedCategory, createdAt: new Date() },
      ...prev,
    ])
    setInput('')
  }

  const toggleTodo = (id) => {
    setTodos(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t))
  }

  const deleteTodo = (id) => {
    setTodos(prev => prev.filter(t => t.id !== id))
  }

  const clearCompleted = () => {
    setTodos(prev => prev.filter(t => !t.completed))
  }

  const filtered = useMemo(() => {
    if (filter === '待完成') return todos.filter(t => !t.completed)
    if (filter === '已完成') return todos.filter(t => t.completed)
    return todos
  }, [todos, filter])

  const completedCount = todos.filter(t => t.completed).length
  const totalCount = todos.length
  const progress = totalCount === 0 ? 0 : Math.round((completedCount / totalCount) * 100)

  const getCategoryColor = (label) => CATEGORIES.find(c => c.label === label)?.color || 'bg-gray-400'

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-100'}`}>
      <div className="max-w-lg mx-auto px-4 py-10">

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center shadow-lg">
              <ClipboardList className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>我的待办</h1>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{new Date().toLocaleDateString('zh-CN', { month: 'long', day: 'numeric', weekday: 'long' })}</p>
            </div>
          </div>
          <button
            onClick={() => setDarkMode(d => !d)}
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${darkMode ? 'bg-gray-700 text-yellow-400 hover:bg-gray-600' : 'bg-white text-gray-600 hover:bg-gray-100 shadow'}`}
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>

        {/* Progress Card */}
        <div className={`rounded-2xl p-5 mb-6 shadow-sm ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <div className="flex justify-between items-center mb-3">
            <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>今日进度</span>
            <span className={`text-sm font-bold ${darkMode ? 'text-violet-400' : 'text-violet-600'}`}>{completedCount}/{totalCount} 已完成</span>
          </div>
          <div className={`w-full h-2.5 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
            <div
              className="h-2.5 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className={`text-xs mt-2 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>{progress}% 完成率</p>
        </div>

        {/* Input Area */}
        <div className={`rounded-2xl p-4 mb-6 shadow-sm ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <div className="flex gap-2 mb-3">
            {CATEGORIES.map(cat => (
              <button
                key={cat.label}
                onClick={() => setSelectedCategory(cat.label)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                  selectedCategory === cat.label
                    ? `${cat.color} text-white shadow-sm`
                    : darkMode ? 'bg-gray-700 text-gray-400 hover:bg-gray-600' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && addTodo()}
              placeholder="添加新任务..."
              className={`flex-1 px-4 py-2.5 rounded-xl text-sm outline-none transition-colors ${
                darkMode
                  ? 'bg-gray-700 text-white placeholder-gray-500 focus:bg-gray-600'
                  : 'bg-gray-50 text-gray-800 placeholder-gray-400 focus:bg-gray-100'
              }`}
            />
            <button
              onClick={addTodo}
              className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-white shadow hover:shadow-md hover:scale-105 transition-all"
            >
              <Plus className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className={`flex gap-1 rounded-xl p-1 mb-4 ${darkMode ? 'bg-gray-800' : 'bg-white shadow-sm'}`}>
          {FILTERS.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${
                filter === f
                  ? 'bg-gradient-to-r from-violet-500 to-indigo-600 text-white shadow-sm'
                  : darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Todo List */}
        <div className="space-y-2">
          {filtered.length === 0 && (
            <div className={`text-center py-12 ${darkMode ? 'text-gray-600' : 'text-gray-400'}`}>
              <ClipboardList className="w-12 h-12 mx-auto mb-3 opacity-30" />
              <p className="text-sm">暂无任务</p>
            </div>
          )}
          {filtered.map(todo => (
            <div
              key={todo.id}
              className={`flex items-center gap-3 p-4 rounded-2xl shadow-sm transition-all group ${
                darkMode ? 'bg-gray-800 hover:bg-gray-750' : 'bg-white hover:shadow-md'
              } ${todo.completed ? 'opacity-60' : ''}`}
            >
              <button
                onClick={() => toggleTodo(todo.id)}
                className={`w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center border-2 transition-all ${
                  todo.completed
                    ? 'bg-gradient-to-br from-violet-500 to-indigo-600 border-transparent'
                    : darkMode ? 'border-gray-600 hover:border-violet-400' : 'border-gray-300 hover:border-violet-400'
                }`}
              >
                {todo.completed
                  ? <Check className="w-3.5 h-3.5 text-white" />
                  : <Circle className="w-3 h-3 opacity-0 group-hover:opacity-30" />
                }
              </button>

              <div className="flex-1 min-w-0">
                <p className={`text-sm font-medium truncate ${
                  todo.completed
                    ? darkMode ? 'line-through text-gray-500' : 'line-through text-gray-400'
                    : darkMode ? 'text-gray-100' : 'text-gray-800'
                }`}>
                  {todo.text}
                </p>
              </div>

              <span className={`px-2 py-0.5 rounded-full text-xs font-medium text-white flex-shrink-0 ${getCategoryColor(todo.category)}`}>
                {todo.category}
              </span>

              <button
                onClick={() => deleteTodo(todo.id)}
                className={`w-7 h-7 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all ${
                  darkMode ? 'text-gray-500 hover:text-red-400 hover:bg-gray-700' : 'text-gray-400 hover:text-red-500 hover:bg-red-50'
                }`}
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        {/* Footer */}
        {completedCount > 0 && (
          <div className="mt-4 text-center">
            <button
              onClick={clearCompleted}
              className={`text-xs px-4 py-2 rounded-lg transition-colors ${
                darkMode ? 'text-gray-500 hover:text-red-400 hover:bg-gray-800' : 'text-gray-400 hover:text-red-500 hover:bg-red-50'
              }`}
            >
              清除已完成 ({completedCount})
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
