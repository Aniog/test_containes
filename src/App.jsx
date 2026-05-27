import { useState, useEffect } from 'react'
import { fetchTodos, createTodo, updateTodo, deleteTodo, deleteCompletedTodos } from './api/todos'

function App() {
  const [todos, setTodos] = useState([])
  const [newTodoTitle, setNewTodoTitle] = useState('')
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    loadTodos()
  }, [])

  const loadTodos = async () => {
    try {
      const data = await fetchTodos()
      setTodos(data)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const handleAddTodo = async (e) => {
    e.preventDefault()
    if (!newTodoTitle.trim()) return

    setSubmitting(true)
    try {
      const newTodo = await createTodo(newTodoTitle.trim())
      setTodos([newTodo, ...todos])
      setNewTodoTitle('')
    } catch (error) {
      console.error(error)
    } finally {
      setSubmitting(false)
    }
  }

  const handleToggleComplete = async (todo) => {
    const fields = todo.data || {}
    try {
      const updated = await updateTodo(todo.id, {
        ...fields,
        completed: !fields.completed
      })
      setTodos(todos.map(t => t.id === todo.id ? updated : t))
    } catch (error) {
      console.error(error)
    }
  }

  const handleDeleteTodo = async (id) => {
    try {
      await deleteTodo(id)
      setTodos(todos.filter(t => t.id !== id))
    } catch (error) {
      console.error(error)
    }
  }

  const handleClearCompleted = async () => {
    try {
      await deleteCompletedTodos()
      setTodos(todos.filter(t => !(t.data || {}).completed))
    } catch (error) {
      console.error(error)
    }
  }

  const completedCount = todos.filter(t => (t.data || {}).completed).length

  return (
    <div className="min-h-screen bg-[#f0f7f4] flex items-start justify-center pt-20 px-4">
      <div className="w-full max-w-md">
        <div className="mb-8">
          <h1 className="text-3xl font-light text-[#2d5a4a] tracking-tight">清新清单</h1>
          <p className="text-sm text-[#6b8f7e] mt-1">简单记录每一天</p>
        </div>

        <form onSubmit={handleAddTodo} className="mb-8">
          <div className="relative">
            <input
              type="text"
              value={newTodoTitle}
              onChange={(e) => setNewTodoTitle(e.target.value)}
              placeholder="添加新任务..."
              className="w-full px-4 py-3.5 text-[15px] bg-white border border-[#d4e8df] rounded-xl focus:outline-none focus:border-[#7fb89a] placeholder:text-[#a8c5b5] transition-colors"
              disabled={submitting}
            />
          </div>
        </form>

        {loading ? (
          <div className="text-sm text-[#6b8f7e] py-8 text-center">加载中...</div>
        ) : todos.length === 0 ? (
          <div className="text-sm text-[#6b8f7e] py-8 text-center">暂无任务，添加一个吧</div>
        ) : (
          <div className="bg-white rounded-2xl border border-[#d4e8df] overflow-hidden mb-6">
            <ul>
              {todos.map((todo, index) => {
                const fields = todo.data || {}
                return (
                  <li
                    key={todo.id}
                    className={`group flex items-center px-4 py-4 ${index !== todos.length - 1 ? 'border-b border-[#e8f0eb]' : ''}`}
                  >
                    <button
                      onClick={() => handleToggleComplete(todo)}
                      className="mr-3.5 w-5 h-5 flex-shrink-0"
                    >
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                        fields.completed
                          ? 'bg-[#7fb89a] border-[#7fb89a]'
                          : 'border-[#b8d4c7] group-hover:border-[#7fb89a]'
                      }`}>
                        {fields.completed && (
                          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 10l4 4L19 6" />
                          </svg>
                        )}
                      </div>
                    </button>
                    <span className={`flex-1 text-[15px] transition-all ${fields.completed ? 'text-[#a8c5b5] line-through' : 'text-[#2d5a4a]'}`}>
                      {fields.title}
                    </span>
                    <button
                      onClick={() => handleDeleteTodo(todo.id)}
                      className="ml-3 text-[#c5d9cf] hover:text-[#7fb89a] opacity-0 group-hover:opacity-100 transition-all text-xl leading-none"
                    >
                      ×
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>
        )}

        {completedCount > 0 && (
          <button
            onClick={handleClearCompleted}
            className="text-xs text-[#6b8f7e] hover:text-[#2d5a4a] transition-colors px-3 py-1.5 rounded-lg hover:bg-white/60"
          >
            清除已完成 ({completedCount})
          </button>
        )}
      </div>
    </div>
  )
}

export default App
