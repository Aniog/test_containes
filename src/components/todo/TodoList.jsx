import React from 'react'
import TodoItem from './TodoItem.jsx'
import { ClipboardList } from 'lucide-react'

export default function TodoList({ todos, loading, onToggle, onDelete, onUpdate, filter }) {
  if (loading) {
    return (
      <div className="space-y-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white rounded-xl border border-slate-200 p-4 animate-pulse">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-slate-200" />
              <div className="flex-1 h-4 bg-slate-200 rounded" />
              <div className="w-16 h-5 bg-slate-200 rounded-full" />
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (todos.length === 0) {
    const messages = {
      all: { title: 'No tasks yet', sub: 'Add your first task above to get started.' },
      active: { title: 'No active tasks', sub: 'All tasks are completed!' },
      completed: { title: 'No completed tasks', sub: 'Complete some tasks to see them here.' },
    }
    const msg = messages[filter] || messages.all

    return (
      <div className="bg-white rounded-xl border border-slate-200 p-10 text-center">
        <ClipboardList className="w-10 h-10 text-slate-300 mx-auto mb-3" />
        <p className="text-slate-700 font-medium">{msg.title}</p>
        <p className="text-slate-400 text-sm mt-1">{msg.sub}</p>
      </div>
    )
  }

  return (
    <div className="space-y-2">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  )
}
