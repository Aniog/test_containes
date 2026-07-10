import { useState } from 'react'
import { client, getEntity } from '../api/fitnessClient'
import ExerciseList from './ExerciseList'

export default function PlanDetail({ plan, onPlanUpdated }) {
  const [addingDay, setAddingDay] = useState(false)
  const [newDayName, setNewDayName] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const planData = plan.data ?? {}
  const trainingDays = planData.training_days ?? []

  const updatePlan = async (newDays) => {
    const { data: res, error } = await client
      .from('Fitness Plans')
      .update({ data: { ...planData, training_days: newDays } })
      .eq('id', plan.id)
      .select()
      .single()
    if (error) { console.error(error); return }
    const updated = getEntity(res)
    if (updated) onPlanUpdated(updated)
  }

  const handleAddDay = async (e) => {
    e.preventDefault()
    if (!newDayName.trim()) return
    setSubmitting(true)
    const newDays = [...trainingDays, { day_name: newDayName.trim(), exercises: [] }]
    await updatePlan(newDays)
    setNewDayName('')
    setAddingDay(false)
    setSubmitting(false)
  }

  const handleDeleteDay = async (dayIndex) => {
    if (!confirm('确认删除该训练日？')) return
    const newDays = trainingDays.filter((_, i) => i !== dayIndex)
    await updatePlan(newDays)
  }

  const handleExercisesChanged = async (dayIndex, newExercises) => {
    const newDays = trainingDays.map((day, i) =>
      i === dayIndex ? { ...day, exercises: newExercises } : day
    )
    await updatePlan(newDays)
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="bg-white rounded-lg border border-gray-200 px-4 py-3">
        <h2 className="text-base font-semibold text-gray-900">{planData.plan_name}</h2>
        {planData.description && (
          <p className="text-sm text-gray-500 mt-0.5">{planData.description}</p>
        )}
      </div>

      {trainingDays.map((day, dayIndex) => (
        <div key={dayIndex} className="bg-white rounded-lg border border-gray-200">
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
            <span className="text-sm font-medium text-gray-800">{day.day_name}</span>
            <button
              onClick={() => handleDeleteDay(dayIndex)}
              className="text-gray-300 hover:text-red-500 text-xs"
              title="删除训练日"
            >
              ✕
            </button>
          </div>
          <div className="px-4 py-3">
            <ExerciseList
              exercises={day.exercises ?? []}
              onExercisesChanged={(newExercises) => handleExercisesChanged(dayIndex, newExercises)}
            />
          </div>
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
              className="flex-1 border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              disabled={submitting || !newDayName.trim()}
              className="bg-blue-600 text-white rounded px-3 py-1.5 text-sm hover:bg-blue-700 disabled:opacity-50"
            >
              {submitting ? '添加中…' : '添加'}
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
    </div>
  )
}
