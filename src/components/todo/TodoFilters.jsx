import React from 'react'

const STATUS_FILTERS = [
  { value: 'all', label: 'All' },
  { value: 'active', label: 'Active' },
  { value: 'completed', label: 'Completed' },
]

const PRIORITY_FILTERS = [
  { value: 'all', label: 'All Priorities' },
  { value: 'high', label: 'High' },
  { value: 'medium', label: 'Medium' },
  { value: 'low', label: 'Low' },
]

export default function TodoFilters({ filter, setFilter, priorityFilter, setPriorityFilter }) {
  return (
    <div className="flex flex-wrap gap-2 mb-4 items-center justify-between">
      <div className="flex gap-1 bg-white rounded-lg border border-slate-200 p-1">
        {STATUS_FILTERS.map((f) => (
          <button
            key={f.value}
            onClick={() => setFilter(f.value)}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
              filter === f.value
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <select
        value={priorityFilter}
        onChange={(e) => setPriorityFilter(e.target.value)}
        className="px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-slate-600 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        {PRIORITY_FILTERS.map((f) => (
          <option key={f.value} value={f.value}>{f.label}</option>
        ))}
      </select>
    </div>
  )
}
