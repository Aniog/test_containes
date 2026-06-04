import { useState, useEffect, useCallback } from 'react'
import { Plus, Trash2, ChevronDown, ChevronUp, Dumbbell, Calendar, Clock, Save, X, Edit2 } from 'lucide-react'
import { fetchPlans, createPlan, updatePlan, deletePlan } from '../api/fitnessPlans.js'

const FITNESS_TYPES = ['strength', 'cardio', 'flexibility', 'hiit', 'yoga', 'crossfit']
const FITNESS_TYPE_LABELS = {
  strength: '力量训练', cardio: '有氧运动', flexibility: '柔韧性',
  hiit: 'HIIT', yoga: '瑜伽', crossfit: 'CrossFit',
}
const DAY_TYPES = ['Training', 'Rest', 'Recovery']
const DAY_TYPE_LABELS = { Training: '训练日', Rest: '休息日', Recovery: '恢复日' }
const FOCUS_AREAS = ['Full Body', 'Upper Body', 'Lower Body', 'Core', 'Cardio']
const FOCUS_AREA_LABELS = {
  'Full Body': '全身', 'Upper Body': '上肢', 'Lower Body': '下肢', 'Core': '核心', 'Cardio': '有氧',
}
const INTENSITIES = ['Low', 'Medium', 'High']
const INTENSITY_LABELS = { Low: '低', Medium: '中', High: '高' }
const INTENSITY_COLORS = {
  Low: 'bg-green-100 text-green-700',
  Medium: 'bg-yellow-100 text-yellow-700',
  High: 'bg-red-100 text-red-700',
}

const emptyExercise = () => ({ exercise_name: '', sets: 3, reps: 10, intensity: 'Medium' })
const emptyDay = () => ({
  training_date: new Date().toISOString().slice(0, 10),
  training_time: '15:00',
  day_type: 'Training',
  focus_area: 'Full Body',
  exercises: [emptyExercise()],
})
const emptyPlan = () => ({ name: '', fitness_type: 'strength', training_days: [emptyDay()] })

export default function FitnessPlanner() {
  const [plans, setPlans] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [showForm, setShowForm] = useState(false)
  const [editingPlan, setEditingPlan] = useState(null)
  const [form, setForm] = useState(emptyPlan())
  const [saving, setSaving] = useState(false)
  const [expandedPlan, setExpandedPlan] = useState(null)

  const loadPlans = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const rows = await fetchPlans()
      setPlans(rows)
    } catch (e) {
      setError(e.message || '加载失败')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => { loadPlans() }, [loadPlans])

  const openCreate = () => {
    setEditingPlan(null)
    setForm(emptyPlan())
    setShowForm(true)
  }

  const openEdit = (plan) => {
    setEditingPlan(plan)
    setForm({ ...plan.data })
    setShowForm(true)
  }

  const closeForm = () => {
    setShowForm(false)
    setEditingPlan(null)
    setForm(emptyPlan())
    setError(null)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSaving(true)
    setError(null)
    try {
      if (editingPlan) {
        const updated = await updatePlan(editingPlan.id, form)
        setPlans((prev) => prev.map((p) => (p.id === updated.id ? updated : p)))
      } else {
        const created = await createPlan(form)
        setPlans((prev) => [created, ...prev])
      }
      closeForm()
    } catch (e) {
      setError(e.message || '保存失败')
    } finally {
      setSaving(false)
    }
  }

  const handleDelete = async (id) => {
    if (!window.confirm('确认删除此计划？')) return
    try {
      await deletePlan(id)
      setPlans((prev) => prev.filter((p) => p.id !== id))
      if (expandedPlan === id) setExpandedPlan(null)
    } catch (e) {
      setError(e.message || '删除失败')
    }
  }

  const setField = (key, val) => setForm((f) => ({ ...f, [key]: val }))

  const setDay = (di, key, val) =>
    setForm((f) => ({
      ...f,
      training_days: f.training_days.map((d, i) => (i === di ? { ...d, [key]: val } : d)),
    }))

  const addDay = () => setForm((f) => ({ ...f, training_days: [...f.training_days, emptyDay()] }))

  const removeDay = (di) =>
    setForm((f) => ({ ...f, training_days: f.training_days.filter((_, i) => i !== di) }))

  const setExercise = (di, ei, key, val) =>
    setForm((f) => ({
      ...f,
      training_days: f.training_days.map((d, i) =>
        i !== di ? d : {
          ...d,
          exercises: d.exercises.map((ex, j) => (j === ei ? { ...ex, [key]: val } : ex)),
        }
      ),
    }))

  const addExercise = (di) =>
    setForm((f) => ({
      ...f,
      training_days: f.training_days.map((d, i) =>
        i === di ? { ...d, exercises: [...d.exercises, emptyExercise()] } : d
      ),
    }))

  const removeExercise = (di, ei) =>
    setForm((f) => ({
      ...f,
      training_days: f.training_days.map((d, i) =>
        i === di ? { ...d, exercises: d.exercises.filter((_, j) => j !== ei) } : d
      ),
    }))

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 px-4 py-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Dumbbell className="w-6 h-6 text-blue-600" />
            <h1 className="text-xl font-bold text-gray-900">健身计划</h1>
          </div>
          <button
            onClick={openCreate}
            className="flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
          >
            <Plus className="w-4 h-4" />
            新建计划
          </button>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-6">
        {error && !showForm && (
          <div className="mb-4 bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-lg flex items-center justify-between">
            <span>{error}</span>
            <button onClick={() => setError(null)}><X className="w-4 h-4" /></button>
          </div>
        )}

        {showForm && (
          <div className="fixed inset-0 bg-black/40 z-50 flex items-start justify-center overflow-y-auto py-8 px-4">
            <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl">
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">
                  {editingPlan ? '编辑计划' : '新建计划'}
                </h2>
                <button onClick={closeForm} className="text-gray-400 hover:text-gray-600">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="px-6 py-5 space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">计划名称</label>
                    <input
                      required
                      value={form.name}
                      onChange={(e) => setField('name', e.target.value)}
                      placeholder="例：夏季增肌计划"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">健身类型</label>
                    <select
                      value={form.fitness_type}
                      onChange={(e) => setField('fitness_type', e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      {FITNESS_TYPES.map((t) => (
                        <option key={t} value={t}>{FITNESS_TYPE_LABELS[t]}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-semibold text-gray-800">训练日安排</h3>
                    <button
                      type="button"
                      onClick={addDay}
                      className="flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm font-medium"
                    >
                      <Plus className="w-4 h-4" />
                      添加训练日
                    </button>
                  </div>

                  <div className="space-y-4">
                    {form.training_days.map((day, di) => (
                      <div key={di} className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm font-medium text-gray-700">第 {di + 1} 天</span>
                          {form.training_days.length > 1 && (
                            <button type="button" onClick={() => removeDay(di)} className="text-red-400 hover:text-red-600">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          )}
                        </div>

                        <div className="grid grid-cols-2 gap-3 mb-3">
                          <div>
                            <label className="flex items-center gap-1 text-xs text-gray-500 mb-1">
                              <Calendar className="w-3 h-3" />日期
                            </label>
                            <input
                              type="date"
                              value={day.training_date}
                              onChange={(e) => setDay(di, 'training_date', e.target.value)}
                              className="w-full border border-gray-300 rounded-md px-2 py-1.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                          </div>
                          <div>
                            <label className="flex items-center gap-1 text-xs text-gray-500 mb-1">
                              <Clock className="w-3 h-3" />时间
                            </label>
                            <input
                              type="time"
                              value={day.training_time || ''}
                              onChange={(e) => setDay(di, 'training_time', e.target.value)}
                              className="w-full border border-gray-300 rounded-md px-2 py-1.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                          </div>
                          <div>
                            <label className="block text-xs text-gray-500 mb-1">日类型</label>
                            <select
                              value={day.day_type}
                              onChange={(e) => setDay(di, 'day_type', e.target.value)}
                              className="w-full border border-gray-300 rounded-md px-2 py-1.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                              {DAY_TYPES.map((t) => (
                                <option key={t} value={t}>{DAY_TYPE_LABELS[t]}</option>
                              ))}
                            </select>
                          </div>
                          <div>
                            <label className="block text-xs text-gray-500 mb-1">训练重点</label>
                            <select
                              value={day.focus_area}
                              onChange={(e) => setDay(di, 'focus_area', e.target.value)}
                              className="w-full border border-gray-300 rounded-md px-2 py-1.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                              {FOCUS_AREAS.map((a) => (
                                <option key={a} value={a}>{FOCUS_AREA_LABELS[a]}</option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-medium text-gray-600">动作列表</span>
                            <button
                              type="button"
                              onClick={() => addExercise(di)}
                              className="flex items-center gap-1 text-blue-600 hover:text-blue-700 text-xs font-medium"
                            >
                              <Plus className="w-3 h-3" />
                              添加动作
                            </button>
                          </div>

                          <div className="space-y-2">
                            {day.exercises.map((ex, ei) => (
                              <div key={ei} className="bg-white border border-gray-200 rounded-md p-3">
                                <div className="grid grid-cols-12 gap-2 items-end">
                                  <div className="col-span-4">
                                    <label className="block text-xs text-gray-400 mb-1">动作名称</label>
                                    <input
                                      required
                                      value={ex.exercise_name}
                                      onChange={(e) => setExercise(di, ei, 'exercise_name', e.target.value)}
                                      placeholder="如：深蹲"
                                      className="w-full border border-gray-300 rounded px-2 py-1.5 text-xs text-gray-900 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    />
                                  </div>
                                  <div className="col-span-2">
                                    <label className="block text-xs text-gray-400 mb-1 text-center">组数</label>
                                    <input
                                      type="number"
                                      min="1"
                                      required
                                      value={ex.sets}
                                      onChange={(e) => setExercise(di, ei, 'sets', parseInt(e.target.value) || 1)}
                                      className="w-full border border-gray-300 rounded px-2 py-1.5 text-xs text-gray-900 text-center focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    />
                                  </div>
                                  <div className="col-span-2">
                                    <label className="block text-xs text-gray-400 mb-1 text-center">次数</label>
                                    <input
                                      type="number"
                                      min="1"
                                      required
                                      value={ex.reps}
                                      onChange={(e) => setExercise(di, ei, 'reps', parseInt(e.target.value) || 1)}
                                      className="w-full border border-gray-300 rounded px-2 py-1.5 text-xs text-gray-900 text-center focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    />
                                  </div>
                                  <div className="col-span-3">
                                    <label className="block text-xs text-gray-400 mb-1 text-center">强度</label>
                                    <select
                                      value={ex.intensity}
                                      onChange={(e) => setExercise(di, ei, 'intensity', e.target.value)}
                                      className="w-full border border-gray-300 rounded px-2 py-1.5 text-xs text-gray-900 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    >
                                      {INTENSITIES.map((v) => (
                                        <option key={v} value={v}>{INTENSITY_LABELS[v]}</option>
                                      ))}
                                    </select>
                                  </div>
                                  <div className="col-span-1 flex justify-center pb-1">
                                    {day.exercises.length > 1 && (
                                      <button
                                        type="button"
                                        onClick={() => removeExercise(di, ei)}
                                        className="text-red-400 hover:text-red-600"
                                      >
                                        <X className="w-3.5 h-3.5" />
                                      </button>
                                    )}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {error && <p className="text-red-600 text-sm">{error}</p>}

                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={closeForm}
                    className="flex-1 border border-gray-300 text-gray-700 text-sm font-medium py-2 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    取消
                  </button>
                  <button
                    type="submit"
                    disabled={saving}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white text-sm font-medium py-2 rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <Save className="w-4 h-4" />
                    {saving ? '保存中…' : '保存计划'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {loading ? (
          <div className="text-center py-16 text-gray-400 text-sm">加载中…</div>
        ) : plans.length === 0 ? (
          <div className="text-center py-16">
            <Dumbbell className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-500 text-sm">还没有健身计划，点击「新建计划」开始吧</p>
          </div>
        ) : (
          <div className="space-y-3">
            {plans.map((plan) => {
              const d = plan.data || {}
              const isExpanded = expandedPlan === plan.id
              return (
                <div key={plan.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                  <div className="px-5 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3 min-w-0">
                      <button
                        onClick={() => setExpandedPlan(isExpanded ? null : plan.id)}
                        className="text-gray-400 hover:text-gray-600 flex-shrink-0"
                      >
                        {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                      </button>
                      <div className="min-w-0">
                        <h3 className="font-semibold text-gray-900 truncate">{d.name}</h3>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full font-medium">
                            {FITNESS_TYPE_LABELS[d.fitness_type] || d.fitness_type}
                          </span>
                          <span className="text-xs text-gray-400">
                            {(d.training_days || []).length} 个训练日
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <button onClick={() => openEdit(plan)} className="text-gray-400 hover:text-blue-600 p-1" title="编辑">
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button onClick={() => handleDelete(plan.id)} className="text-gray-400 hover:text-red-600 p-1" title="删除">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {isExpanded && (
                    <div className="border-t border-gray-100 px-5 py-4 space-y-4 bg-gray-50">
                      {(d.training_days || []).map((day, di) => (
                        <div key={di} className="bg-white rounded-lg border border-gray-200 p-4">
                          <div className="flex items-center gap-3 mb-3 flex-wrap">
                            <div className="flex items-center gap-1.5 text-sm text-gray-700">
                              <Calendar className="w-4 h-4 text-gray-400" />
                              <span className="font-medium">{day.training_date}</span>
                            </div>
                            {day.training_time && (
                              <div className="flex items-center gap-1.5 text-sm text-gray-700">
                                <Clock className="w-4 h-4 text-gray-400" />
                                <span>{day.training_time}</span>
                              </div>
                            )}
                            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                              {DAY_TYPE_LABELS[day.day_type] || day.day_type}
                            </span>
                            <span className="text-xs bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded-full">
                              {FOCUS_AREA_LABELS[day.focus_area] || day.focus_area}
                            </span>
                          </div>

                          {(day.exercises || []).length > 0 && (
                            <table className="w-full text-sm">
                              <thead>
                                <tr className="text-xs text-gray-400 border-b border-gray-100">
                                  <th className="text-left pb-1.5 font-medium">动作</th>
                                  <th className="text-center pb-1.5 font-medium">组数</th>
                                  <th className="text-center pb-1.5 font-medium">次数</th>
                                  <th className="text-center pb-1.5 font-medium">强度</th>
                                </tr>
                              </thead>
                              <tbody>
                                {day.exercises.map((ex, ei) => (
                                  <tr key={ei} className="border-b border-gray-50 last:border-0">
                                    <td className="py-1.5 text-gray-800 font-medium">{ex.exercise_name}</td>
                                    <td className="py-1.5 text-center text-gray-700">{ex.sets}</td>
                                    <td className="py-1.5 text-center text-gray-700">{ex.reps}</td>
                                    <td className="py-1.5 text-center">
                                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${INTENSITY_COLORS[ex.intensity] || 'bg-gray-100 text-gray-600'}`}>
                                        {INTENSITY_LABELS[ex.intensity] || ex.intensity}
                                      </span>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        )}
      </main>
    </div>
  )
}
