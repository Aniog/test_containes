import React from 'react'

const FILTERS = [
  { value: 'all', label: '全部' },
  { value: 'active', label: '进行中' },
  { value: 'completed', label: '已完成' },
]

export default function TodoFilter({ filter, onChange }) {
  return (
    <div className="flex gap-1 bg-white rounded-xl shadow-sm border border-slate-100 p-1 mt-4">
      {FILTERS.map((f) => (
        <button
          key={f.value}
          type="button"
          onClick={() => onChange(f.value)}
          className={`flex-1 text-sm font-medium py-1.5 rounded-lg transition-colors ${
            filter === f.value
              ? 'bg-indigo-500 text-white shadow-sm'
              : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'
          }`}
        >
          {f.label}
        </button>
      ))}
    </div>
  )
}
