import TodoList from '@/components/todos/TodoList'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-2xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800 tracking-tight mb-2">My Todos</h1>
          <p className="text-gray-400 text-sm">Stay organized, get things done.</p>
        </div>

        {/* Todo App */}
        <TodoList />

        {/* Footer */}
        <p className="text-center text-xs text-gray-300 mt-12">
          © {new Date().getFullYear()} My Todos App
        </p>
      </div>
    </div>
  )
}

export default App
