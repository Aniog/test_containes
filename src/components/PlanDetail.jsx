import { useState, useEffect, useCallback } from 'react'
import { getRows, getEntity } from '../api/fitnessClient'
import ExerciseList from './ExerciseList'

export default function PlanDetail({ plan, client }) {
  const [days, setDays] = useState([])
  const [loading, setLoading] = useState(true)
  const [newDayName, setNewDayName] = useState('')
  const [addingDay, setAddingDay] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const fetchDays = useCallback(async () => {
    setLoading(true)
    const { data: res, error } = await client
      .from('Training Days')
      .select('*')
      .eq('plan_id', plan.id)
      .order('sort_order', { ascending: true })
    if (error) console.error('fetchDays error', error)
    setDays(getRows(res))
    setLoading(false)
  }, [plan.id, client])

  useEffect(() => {
    fetchDays()
  }, [fetchDays])

  const handleAddDay = async (e) => {
    e.preventDefault()
    if (!newDayName.trim()) return
    setSubmitting(true)
    const { data: res, error } = await client
      .from('Training Days')
      .insert({ data: { plan_id: plan.id, name: newDayName.trim(), sort_order: days.length } })
      .select()
      .single()
    if (error) { console.error(error); setSubmitting(false); return }
    const created = getEntity(res)
    if (created) setDays((prev) => [...prev, created])
    setNewDayName('')
    setAddingDay(false)
    setSubmitting(false)
  }

  const handleDeleteDay = async (dayId) => {
    if (!confirm('确认删除该训练日？')) return
    const { error } = await client.from('Training Days').delete().eq('id', dayId)
    if (error) { console.error(error); return }
    setDays((prev) => prev.filter((d) => d.id !== dayId))
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="bg-white rounded-lg border border-gray-200 px-4 py-3">
        <h2 className="text-base font-bold text-gray-900">{plan.data?.name}</h2>
        {plan.data?.description && (
          <p className="text-sm text-gray-500 mt-0.5">{plan.data.description}</p>
        )}
      </div>

      {loading ? (
        <p className="text-sm text-gray-400 px-1">加载中…</p>
      ) : (
        <>
          {days.map((day) => (
            <div key={day.id} className="bg-white rounded-lg border border-gray-200">
              <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
                <span className="text-sm font-semibold text-gray-800">{day.data?.name}</span>
                <button
                  onClick={() => handleDeleteDay(day.id)}
                  className="text-gray-300 hover:text-red-500 text-xs"
                  title="删除训练日"
                >
                  ✕
                </button>
              </div>
              <ExerciseList dayId={day.id} client={client} />
            </div>
          ))}

          <div className="bg-white rounded-lg border border-gray-200 px-4 py-3">
            {addingDay ? (
              <form onSubmit={handleAddDay} className="flex gap-2">
                <input
                  autoFocus
                  value={newDayName}
                  onChange={(e) => setNewDayName(e.target.value)}
                  placeholder="训练日名称，如：第一天 - 胸部"
                  className="border border-gray-300 rounded px-3 py-1.5 text-sm flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  disabled={submitting || !newDayName.trim()}
                  className="bg-blue-600 text-white rounded px-3 py-1.5 text-sm hover:bg-blue-700 disabled:opacity-50 shrink-0"
                >
                  {submitting ? '…' : '添加'}
                </button>
                <button
                  type="button"
                  onClick={() => { setAddingDay(false); setNewDayName('') }}
                  className="text-gray-400 hover:text-gray-600 text-sm px-2"
                >
                  取消
                </button>
              </form>
            ) : (
              <button
                onClick={() => setAddingDay(true)}
                className="text-blue-600 text-sm hover:underline"
              >
                + 添加训练日
              </button>
            )}
          </div>
        </>
      )}
    </div>
  )
}
