import './App.css'
import TodoList from '@/components/todos/TodoList'
import { CheckSquare } from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 px-4 py-12">
      <div className="w-full max-w-lg mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2.5 bg-emerald-500 rounded-xl shadow-md">
            <CheckSquare size={24} className="text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-800 leading-tight">My Tasks</h1>
            <p className="text-xs text-slate-400 font-medium">Stay organized, stay productive</p>
          </div>
        </div>

        {/* Todo App */}
        <TodoList />

        {/* Footer */}
        <p className="text-center text-xs text-slate-400 mt-10">
          © {new Date().getFullYear()} My Tasks App
        </p>
      </div>
    </div>
  )
}

export default App
