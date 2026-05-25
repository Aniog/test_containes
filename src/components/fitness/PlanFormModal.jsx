import { useState, useEffect } from 'react'
import { X, Plus, Trash2 } from 'lucide-react'

const emptyExercise = () => ({ exercise_name: '', sets: '', reps: '' })
const emptyDay = () => ({ day_name: '', exercises: [emptyExercise()] })

const PlanFormModal = ({ plan, onClose, onSave }) => {
  const [planName, setPlanName] = useState('')
  const [description, setDescription] = useState('')
  const [days, setDays] = useState([emptyDay()])
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    if (plan) {
      const d = plan.data || {}
      setPlanName(d.plan_name || '')
      setDescription(d.description || '')
      setDays(
        (d.training_days || []).map(day => ({
          day_name: day.day_name || '',
          exercises: (day.exercises || []).map(ex => ({
            exercise_name: ex.exercise_name || '',
            sets: String(ex.sets ?? ''),
            reps: String(ex.reps ?? ''),
          })),
        }))
      )
    }
  }, [plan])

  const updateDay = (di, field, value) => {
    setDays(prev => prev.map((d, i) => i === di ? { ...d, [field]: value } : d))
  }

  const updateExercise = (di, ei, field, value) => {
    setDays(prev => prev.map((d, i) => {
      if (i !== di) return d
      return {
        ...d,
        exercises: d.exercises.map((ex, j) => j === ei ? { ...ex, [field]: value } : ex),
      }
    }))
  }

  const addDay = () => setDays(prev => [...prev, emptyDay()])
  const removeDay = (di) => setDays(prev => prev.filter((_, i) => i !== di))
  const addExercise = (di) => setDays(prev => prev.map((d, i) => i === di ? { ...d, exercises: [...d.exercises, emptyExercise()] } : d))
  const removeExercise = (di, ei) => setDays(prev => prev.map((d, i) => i !== di ? d : { ...d, exercises: d.exercises.filter((_, j) => j !== ei) }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSaving(true)
    const payload = {
      plan_name: planName.trim(),
      description: description.trim(),
      training_days: days.map(d => ({
        day_name: d.day_name.trim(),
        exercises: d.exercises.map(ex => ({
          exercise_name: ex.exercise_name.trim(),
          sets: Number(ex.sets),
          reps: Number(ex.reps),
        })),
      })),
    }
    await onSave(payload)
    setSaving(false)
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-lg max-h-[90vh] flex flex-col">
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <h2 className="font-semibold text-gray-900">{plan ? '编辑计划' : '新建计划'}</h2>
          <button onClick={onClose} className="p-1.5 text-gray-400 hover:text-gray-600 rounded-md hover:bg-gray-100 transition-colors">
            <X className="w-4 h-4" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="overflow-y-auto flex-1 px-5 py-4 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">计划名称 *</label>
            <input
              required
              value={planName}
              onChange={e => setPlanName(e.target.value)}
              placeholder="例：增肌计划"
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">描述</label>
            <input
              value={description}
              onChange={e => setDescription(e.target.value)}
              placeholder="简短描述（可选）"
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700">训练日</label>
              <button type="button" onClick={addDay} className="flex items-center gap-1 text-xs text-blue-600 hover:text-blue-700 font-medium">
                <Plus className="w-3.5 h-3.5" /> 添加训练日
              </button>
            </div>

            {days.map((day, di) => (
              <div key={di} className="border border-gray-200 rounded-lg p-3 space-y-2">
                <div className="flex items-center gap-2">
                  <input
                    required
                    value={day.day_name}
                    onChange={e => updateDay(di, 'day_name', e.target.value)}
                    placeholder="训练日名称，例：胸背日"
                    className="flex-1 border border-gray-200 rounded-md px-2.5 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  {days.length > 1 && (
                    <button type="button" onClick={() => removeDay(di)} className="p-1.5 text-gray-400 hover:text-red-500 rounded transition-colors">
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                <div className="space-y-1.5">
                  {day.exercises.map((ex, ei) => (
                    <div key={ei} className="flex items-center gap-1.5">
                      <input
                        required
                        value={ex.exercise_name}
                        onChange={e => updateExercise(di, ei, 'exercise_name', e.target.value)}
                        placeholder="动作名称"
                        className="flex-1 border border-gray-200 rounded-md px-2.5 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <input
                        required
                        type="number" min="1"
                        value={ex.sets}
                        onChange={e => updateExercise(di, ei, 'sets', e.target.value)}
                        placeholder="组数"
                        className="w-14 border border-gray-200 rounded-md px-2 py-1.5 text-xs text-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <span className="text-xs text-gray-400">组</span>
                      <input
                        required
                        type="number" min="1"
                        value={ex.reps}
                        onChange={e => updateExercise(di, ei, 'reps', e.target.value)}
                        placeholder="次数"
                        className="w-14 border border-gray-200 rounded-md px-2 py-1.5 text-xs text-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <span className="text-xs text-gray-400">次</span>
                      {day.exercises.length > 1 && (
                        <button type="button" onClick={() => removeExercise(di, ei)} className="p-1 text-gray-400 hover:text-red-500 rounded transition-colors">
                          <X className="w-3 h-3" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>

                <button type="button" onClick={() => addExercise(di)} className="flex items-center gap-1 text-xs text-gray-500 hover:text-blue-600 transition-colors">
                  <Plus className="w-3 h-3" /> 添加动作
                </button>
              </div>
            ))}
          </div>
        </form>

        <div className="px-5 py-4 border-t border-gray-100 flex justify-end gap-2">
          <button type="button" onClick={onClose} className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
            取消
          </button>
          <button
            onClick={handleSubmit}
            disabled={saving}
            className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors font-medium"
          >
            {saving ? '保存中…' : '保存'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default PlanFormModal
