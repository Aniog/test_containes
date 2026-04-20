import React from 'react'
import { CheckSquare } from 'lucide-react'

export default function TodoHeader() {
  return (
    <div className="text-center mb-8">
      <div className="flex items-center justify-center gap-3 mb-2">
        <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
          <CheckSquare className="w-6 h-6 text-white" />
        </div>
        <h1 className="text-4xl font-bold text-gray-800 tracking-tight">TodoApp</h1>
      </div>
      <p className="text-gray-500 text-sm">Stay organized, get things done</p>
    </div>
  )
}
