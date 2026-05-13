import React from 'react'
import { CheckSquare } from 'lucide-react'

export default function TodoHeader() {
  return (
    <div className="text-center mb-8">
      <div className="flex items-center justify-center gap-3 mb-2">
        <div className="bg-indigo-600 text-white p-2 rounded-xl">
          <CheckSquare className="w-7 h-7" />
        </div>
        <h1 className="text-4xl font-bold text-gray-800 tracking-tight">My Todos</h1>
      </div>
      <p className="text-gray-500 text-sm">Stay organized, stay productive</p>
    </div>
  )
}
