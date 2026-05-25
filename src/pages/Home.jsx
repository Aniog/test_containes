import React from 'react'
import TodoManager from '../components/todo/TodoManager'

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <TodoManager />
    </div>
  )
}
