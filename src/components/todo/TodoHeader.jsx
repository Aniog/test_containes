import { CheckSquare } from 'lucide-react'

export default function TodoHeader() {
  return (
    <div className="flex items-center gap-3">
      <div className="bg-indigo-600 p-2 rounded-xl">
        <CheckSquare className="w-6 h-6 text-white" />
      </div>
      <div>
        <h1 className="text-3xl font-bold text-white leading-tight">My Todos</h1>
        <p className="text-sm text-gray-400">Stay organised, get things done</p>
      </div>
    </div>
  )
}
