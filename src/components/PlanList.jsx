import { useState } from 'react'
import { client, getEntity } from '../api/fitnessClient'

export default function PlanList({ plans, loading, selectedPlanId, onSelect, onCreated, onDeleted }) {
  const [newName, setNewName] = useState('')
  const [newDesc, setNewDesc] = useState('')
  const [adding, setAdding] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!newName.trim()) return
    setSubmitting(true)
    await onCreated(newName.trim(), newDesc.trim())
    setNewName('')
    setNewDesc('')
    setAdding(false)
    setSubmitting(false)
  }

  const handleDelete = async (e, planId) => {
    e.stopPropagation()
    if (!confirm('确认删除该计划？')) return
    const { error } = await client.from('Fitness Plans').delete().eq('id', planId)
    if (error) { console.error(error); return }
    onDeleted(planId)
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200">
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
        <span className="text-sm font-semibold text-gray-700">我的计划</span>
        <button
          onClick={() => setAdding((v) => !v)}
          className="text-blue-600 text-sm hover:underline"
        >
          {adding ? '取消' : '+ 新建'}
        </button>
      </div>

      {adding && (
        <form onSubmit={handleSubmit} className="px-4 py-3 border-b border-gray-100 flex flex-col gap-2">
          <input
            autoFocus
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="计划名称"
            className="border border-gray-300 rounded px-3 py-1.5 text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            value={newDesc}
            onChange={(e) => setNewDesc(e.target.value)}
            placeholder="简介（可选）"
            className="border border-gray-300 rounded px-3 py-1.5 text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            disabled={submitting || !newName.trim()}
            className="bg-blue-600 text-white rounded px-3 py-1.5 text-sm hover:bg-blue-700 disabled:opacity-50"
          >
            {submitting ? '创建中…' : '创建'}
          </button>
        </form>
      )}

      <ul>
        {loading && (
          <li className="px-4 py-3 text-sm text-gray-400">加载中…</li>
        )}
        {!loading && plans.length === 0 && (
          <li className="px-4 py-3 text-sm text-gray-400">暂无计划</li>
        )}
        {plans.map((plan) => (
          <li
            key={plan.id}
            onClick={() => onSelect(plan.id)}
            className={`flex items-center justify-between px-4 py-3 cursor-pointer border-b border-gray-50 last:border-0 hover:bg-gray-50 ${
              selectedPlanId === plan.id ? 'bg-blue-50' : ''
            }`}
          >
            <div className="min-w-0">
              <p className={`text-sm font-medium truncate ${selectedPlanId === plan.id ? 'text-blue-700' : 'text-gray-800'}`}>
                {plan.data?.name}
              </p>
              {plan.data?.description && (
                <p className="text-xs text-gray-400 truncate">{plan.data.description}</p>
              )}
            </div>
            <button
              onClick={(e) => handleDelete(e, plan.id)}
              className="ml-2 text-gray-300 hover:text-red-500 text-xs shrink-0"
              title="删除"
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
