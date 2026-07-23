import React from 'react'

export default function TodoStats({ todos }) {
  const total = todos.length
  const completed = todos.filter((t) => t.data?.completed).length
  const active = total - completed
  const percent = total > 0 ? Math.round((completed / total) * 100) : 0

  if (total === 0) return null

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 mb-4">
      <div className="flex items-center justify-between mb-3">
        <div className="flex gap-5">
          <div className="text-center">
            <div className="text-xl font-bold text-slate-800">{total}</div>
            <div className="text-xs text-slate-400 font-medium">total</div>
          </div>
          <div className="w-px bg-slate-100" />
          <div className="text-center">
            <div className="text-xl font-bold text-emerald-600">{active}</div>
            <div className="text-xs text-slate-400 font-medium">active</div>
          </div>
          <div className="w-px bg-slate-100" />
          <div className="text-center">
            <div className="text-xl font-bold text-teal-600">{completed}</div>
            <div className="text-xs text-slate-400 font-medium">done</div>
          </div>
        </div>
        <div className="text-right">
          <span className="text-2xl font-bold text-emerald-600">{percent}%</span>
          <div className="text-xs text-slate-400">complete</div>
        </div>
      </div>
      <div className="w-full bg-slate-100 rounded-full h-2">
        <div
          className="h-2 rounded-full transition-all duration-700 bg-gradient-to-r from-emerald-500 to-teal-400"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  )
}
