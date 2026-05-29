import { useState, useMemo } from 'react'
import { Plus, Trash2, Check, Sun, Moon } from 'lucide-react'

const FILTERS = ['全部', '待完成', '已完成']

const CATEGORIES = [
  { label: '工作', dot: 'bg-sky-400', text: 'text-sky-500' },
  { label: '生活', dot: 'bg-emerald-400', text: 'text-emerald-500' },
  { label: '学习', dot: 'bg-violet-400', text: 'text-violet-500' },
  { label: '其他', dot: 'bg-amber-400', text: 'text-amber-500' },
]

let nextId = 1

export default function TodoApp() {
  const [todos, setTodos] = useState([
    { id: nextId++, text: '完成项目报告', completed: false, category: '工作' },
    { id: nextId++, text: '去超市购物', completed: false, category: '生活' },
    { id: nextId++, text: '阅读《深度工作》', completed: true, category: '学习' },
  ])
  const [input, setInput] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('工作')
  const [filter, setFilter] = useState('全部')
  const [dark, setDark] = useState(false)

  const addTodo = () => {
    const text = input.trim()
    if (!text) return
    setTodos(prev => [{ id: nextId++, text, completed: false, category: selectedCategory }, ...prev])
    setInput('')
  }

  const toggleTodo = (id) => setTodos(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t))
  const deleteTodo = (id) => setTodos(prev => prev.filter(t => t.id !== id))
  const clearCompleted = () => setTodos(prev => prev.filter(t => !t.completed))

  const filtered = useMemo(() => {
    if (filter === '待完成') return todos.filter(t => !t.completed)
    if (filter === '已完成') return todos.filter(t => t.completed)
    return todos
  }, [todos, filter])

  const completedCount = todos.filter(t => t.completed).length
  const totalCount = todos.length
  const progress = totalCount === 0 ? 0 : Math.round((completedCount / totalCount) * 100)

  const getCat = (label) => CATEGORIES.find(c => c.label === label) || CATEGORIES[3]

  const bg = dark ? 'bg-[#18181b]' : 'bg-[#f4f7f6]'
  const surface = dark ? 'bg-[#232326]' : 'bg-white'
  const border = dark ? 'border-[#2e2e32]' : 'border-[#e8edf0]'
  const textPrimary = dark ? 'text-[#f0f0f0]' : 'text-[#1a2332]'
  const textMuted = dark ? 'text-[#6b7280]' : 'text-[#9aa5b1]'
  const inputBg = dark ? 'bg-[#18181b] text-[#f0f0f0] placeholder-[#4b5563]' : 'bg-[#f4f7f6] text-[#1a2332] placeholder-[#b0bec5]'

  return (
    <div className={`min-h-screen ${bg} transition-colors duration-200`}>
      <div className="max-w-md mx-auto px-6 py-12">

        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className={`text-xs font-medium tracking-widest uppercase mb-1 ${textMuted}`}>
              {new Date().toLocaleDateString('zh-CN', { month: 'long', day: 'numeric', weekday: 'long' })}
            </p>
            <h1 className={`text-3xl font-semibold tracking-tight ${textPrimary}`}>待办事项</h1>
          </div>
          <button
            onClick={() => setDark(d => !d)}
            className={`w-8 h-8 flex items-center justify-center rounded-lg border transition-colors ${border} ${textMuted} hover:${textPrimary}`}
          >
            {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className={`text-xs ${textMuted}`}>{completedCount} / {totalCount} 已完成</span>
            <span className={`text-xs font-medium ${textMuted}`}>{progress}%</span>
          </div>
          <div className={`w-full h-1 rounded-full ${dark ? 'bg-[#2e2e32]' : 'bg-[#e8edf0]'}`}>
            <div
              className="h-1 rounded-full bg-sky-400 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Input */}
        <div className={`${surface} border ${border} rounded-xl p-4 mb-6`}>
          {/* Category selector */}
          <div className="flex gap-3 mb-3">
            {CATEGORIES.map(cat => (
              <button
                key={cat.label}
                onClick={() => setSelectedCategory(cat.label)}
                className={`flex items-center gap-1.5 text-xs font-medium transition-colors ${
                  selectedCategory === cat.label ? cat.text : textMuted
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${selectedCategory === cat.label ? cat.dot : (dark ? 'bg-[#3f3f46]' : 'bg-[#dde3e8]')}`} />
                {cat.label}
              </button>
            ))}
          </div>
          {/* Input row */}
          <div className="flex items-center gap-3">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && addTodo()}
              placeholder="添加新任务，按回车确认"
              className={`flex-1 text-sm bg-transparent outline-none ${inputBg} bg-transparent`}
            />
            <button
              onClick={addTodo}
              className="w-7 h-7 flex items-center justify-center rounded-lg bg-sky-400 text-white hover:bg-sky-500 transition-colors flex-shrink-0"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Filter tabs */}
        <div className={`flex border-b ${border} mb-1`}>
          {FILTERS.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`mr-6 pb-2.5 text-sm font-medium transition-colors border-b-2 -mb-px ${
                filter === f
                  ? `border-sky-400 text-sky-500`
                  : `border-transparent ${textMuted} hover:${textPrimary}`
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Todo list */}
        <div className="mt-1">
          {filtered.length === 0 && (
            <div className={`text-center py-16 ${textMuted}`}>
              <p className="text-sm">暂无任务</p>
            </div>
          )}
          {filtered.map((todo, i) => {
            const cat = getCat(todo.category)
            return (
              <div
                key={todo.id}
                className={`flex items-center gap-3 py-3.5 group ${
                  i < filtered.length - 1 ? `border-b ${border}` : ''
                }`}
              >
                {/* Checkbox */}
                <button
                  onClick={() => toggleTodo(todo.id)}
                  className={`w-5 h-5 rounded flex-shrink-0 flex items-center justify-center border transition-colors ${
                    todo.completed
                      ? 'bg-sky-400 border-sky-400'
                      : `border-[#c8d4dc] hover:border-sky-400 ${dark ? 'border-[#3f3f46] hover:border-sky-400' : ''}`
                  }`}
                >
                  {todo.completed && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
                </button>

                {/* Text */}
                <span className={`flex-1 text-sm transition-colors ${
                  todo.completed
                    ? `line-through ${textMuted}`
                    : textPrimary
                }`}>
                  {todo.text}
                </span>

                {/* Category dot */}
                <span className={`flex items-center gap-1 text-xs ${textMuted} flex-shrink-0`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${cat.dot}`} />
                  {todo.category}
                </span>

                {/* Delete */}
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className={`w-6 h-6 flex items-center justify-center rounded opacity-0 group-hover:opacity-100 transition-opacity ${textMuted} hover:text-red-400`}
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            )
          })}
        </div>

        {/* Footer */}
        {completedCount > 0 && (
          <div className="mt-6 pt-4 border-t border-dashed" style={{ borderColor: dark ? '#2e2e32' : '#e8edf0' }}>
            <button
              onClick={clearCompleted}
              className={`text-xs ${textMuted} hover:text-red-400 transition-colors`}
            >
              清除已完成（{completedCount} 项）
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
