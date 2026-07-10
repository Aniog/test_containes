import { useState, useEffect, useCallback } from 'react'
import { getRows, getEntity } from '../api/fitnessClient'

export default function ExerciseList({ dayId, client }) {
  const [exercises, setExercises] = useState([])
  const [loading, setLoading] = useState(true)
  const [adding, setAdding] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [form, setForm] = useState({ name: '', sets: '', reps: '' })

  const fetchExercises = useCallback(async () => {
    setLoading(true)
    const { data: res, error } = await client
      .from('Exercises')
      .select('*')
      .eq('day_id', dayId)
      .order('sort_order', { ascending: true })
    if (error) console.error('fetchExercises error', error)
    setExercises(getRows(res))
    setLoading(false)
  }, [dayId, client])

  useEffect(() => {
    fetchExercises()
  }, [fetchExercises])

  const handleAdd = async (e) => {
    e.preventDefault()
    const name = form.name.trim()
    const sets = parseInt(form.sets, 10)
    const reps = parseInt(form.reps, 10)
    if (!name || !sets || !reps) return
    setSubmitting(true)
    const { data: res, error } = await client
      .from('Exercises')
      .insert({ data: { day_id: dayId, name, sets, reps, sort_order: exercises.length } })
      .select()
      .single()
    if (error) { console.error(error); setSubmitting(false); return }
    const created = getEntity(res)
    if (created) setExercises((prev) => [...prev, created])
    setForm({ name: '', sets: '', reps: '' })
    setAdding(false)
    setSubmitting(false)
  }

  const handleDelete = async (exId) => {
    const { error } = await client.from('Exercises').delete().eq('id', exId)
    if (error) { console.error(error); return }
    setExercises((prev) => prev.filter((ex) => ex.id !== exId))
  }

  return (
    <div className="px-4 py-3 flex flex-col gap-2">
      {loading ? (
        <p className="text-xs text-gray-400">加载中…</p>
      ) : (
        <>
          {exercises.length === 0 && !adding && (
            <p className="text-xs text-gray-400">暂无动作</p>
          )}

          {exercises.length > 0 && (
            <table className="w-full text-sm">
              <thead>
                <tr className="text-xs text-gray-400 border-b border-gray-100">
                  <th className="text-left pb-1 font-normal">动作名称</th>
                  <th className="text-center pb-1 font-normal w-16">组数</th>
                  <th className="text-center pb-1 font-normal w-16">次数</th>
                  <th className="w-6"></th>
                </tr>
              </thead>
              <tbody>
                {exercises.map((ex) => (
                  <tr key={ex.id} className="border-b border-gray-50 last:border-0">
                    <td className="py-1.5 text-gray-800">{ex.data?.name}</td>
                    <td className="py-1.5 text-center text-gray-700">{ex.data?.sets}</td>
                    <td className="py-1.5 text-center text-gray-700">{ex.data?.reps}</td>
                    <td className="py-1.5 text-right">
                      <button
                        onClick={() => handleDelete(ex.id)}
                        className="text-gray-300 hover:text-red-500 text-xs"
                        title="删除"
                      >
                        ✕
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {adding ? (
            <form onSubmit={handleAdd} className="flex flex-wrap gap-2 mt-1">
              <input
                autoFocus
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                placeholder="动作名称"
                className="border border-gray-300 rounded px-2 py-1 text-sm flex-1 min-w-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="number"
                min="1"
                value={form.sets}
                onChange={(e) => setForm((f) => ({ ...f, sets: e.target.value }))}
                placeholder="组数"
                className="border border-gray-300 rounded px-2 py-1 text-sm w-16 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="number"
                min="1"
                value={form.reps}
                onChange={(e) => setForm((f) => ({ ...f, reps: e.target.value }))}
                placeholder="次数"
                className="border border-gray-300 rounded px-2 py-1 text-sm w-16 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                disabled={submitting || !form.name.trim() || !form.sets || !form.reps}
                className="bg-blue-600 text-white rounded px-3 py-1 text-sm hover:bg-blue-700 disabled:opacity-50"
              >
                {submitting ? '…' : '添加'}
              </button>
              <button
                type="button"
                onClick={() => { setAdding(false); setForm({ name: '', sets: '', reps: '' }) }}
                className="text-gray-400 hover:text-gray-600 text-sm px-2"
              >
                取消
              </button>
            </form>
          ) : (
            <button
              onClick={() => setAdding(true)}
              className="text-blue-600 text-xs hover:underline self-start mt-1"
            >
              + 添加动作
            </button>
          )}
        </>
      )}
    </div>
  )
}
