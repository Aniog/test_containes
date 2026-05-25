import React from 'react'
import TodoItem from './TodoItem.jsx'

const getSchemaData = (entity) => entity?.data ?? {}

export default function TodoList({ items, onToggle, onDelete }) {
  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center">
          <svg
            className="w-8 h-8 text-slate-400 dark:text-slate-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            />
          </svg>
        </div>
        <p className="text-slate-500 dark:text-slate-400 font-medium">
          No tasks yet
        </p>
        <p className="text-slate-400 dark:text-slate-500 text-sm mt-1">
          Add a new task above to get started
        </p>
      </div>
    )
  }

  return (
    <ul className="space-y-2">
      {items.map((item) => {
        const fields = getSchemaData(item)
        return (
          <TodoItem
            key={item.id}
            id={item.id}
            title={fields.title}
            completed={fields.completed}
            onToggle={() => onToggle(item)}
            onDelete={() => onDelete(item.id)}
          />
        )
      })}
    </ul>
  )
}
