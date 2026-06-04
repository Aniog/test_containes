import { useState, useEffect, useCallback } from 'react'
import { fetchPlans, createPlan, updatePlan, deletePlan } from '../api/fitnessPlans.js'

const FITNESS_TYPES = [
  { value: 'strength', label: '力量训练' },
  { value: 'cardio', label: '有氧运动' },
  { value: 'flexibility', label: '柔韧性训练' },
  { value: 'hiit', label: 'HIIT 高强度间歇' },
  { value: 'yoga', label: '瑜伽' },
  { value: 'crossfit', label: 'CrossFit' },
]

const FITNESS_TYPE_COLORS = {
  strength: 'bg-red-100 text-red-700',
  cardio: 'bg-blue-100 text-blue-700',
  flexibility: 'bg-green-100 text-green-700',
  hiit: 'bg-orange-100 text-orange-700',
  yoga: 'bg-purple-100 text-purple-700',
  crossfit: 'bg-yellow-100 text-yellow-700',
}

const emptyExercise = () => ({ exercise_name: '', sets: 3, reps: 10 })
const emptyDay = () => ({ day_name: '', scheduled_time: '', exercises: [emptyExercise()] })
const emptyPlan = () => ({ name: '', fitness_type: 'strength', description: '', training_days: [emptyDay()] })

export default function FitnessPlanner() {
  const [plans, setPlans] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [showForm, setShowForm] = useState(false)
  const [editingPlan, setEditingPlan] = useState(null)
  const [form, setForm] = useState(emptyPlan())
  const [submitting, setSubmitting] = useState(false)
  const [filterType, setFilterType] = useState('all')
  const [expandedPlan, setExpandedPlan] = useState(null)

  const loadPlans = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const rows = await fetchPlans()
      setPlans(rows)
    } catch (err) {
      console.error('加载计划失败:', err)
      setError('加载失败，请刷新重试')
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
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name.trim()) return
    setSubmitting(true)
    try {
      if (editingPlan) {
        const updated = await updatePlan(editingPlan.id, form)
        setPlans(prev => prev.map(p => p.id === updated.id ? updated : p))
      } else {
        const created = await createPlan(form)
        setPlans(prev => [created, ...prev])
      }
      closeForm()
    } catch (err) {
      console.error('保存失败:', err)
      alert('保存失败: ' + err.message)
    } finally {
      setSubmitting(false)
    }
  }

  const handleDelete = async (plan) => {
    if (!confirm(`确定删除计划「${plan.data?.name}」吗？`)) return
    try {
      await deletePlan(plan.id)
      setPlans(prev => prev.filter(p => p.id !== plan.id))
      if (expandedPlan === plan.id) setExpandedPlan(null)
    } catch (err) {
      console.error('删除失败:', err)
      alert('删除失败: ' + err.message)
    }
  }

  // Form helpers
  const setField = (key, value) => setForm(f => ({ ...f, [key]: value }))

  const setDayField = (di, key, value) =>
    setForm(f => {
      const days = f.training_days.map((d, i) => i === di ? { ...d, [key]: value } : d)
      return { ...f, training_days: days }
    })

  const setExerciseField = (di, ei, key, value) =>
    setForm(f => {
      const days = f.training_days.map((d, i) => {
        if (i !== di) return d
        const exercises = d.exercises.map((ex, j) => j === ei ? { ...ex, [key]: value } : ex)
        return { ...d, exercises }
      })
      return { ...f, training_days: days }
    })

  const addDay = () => setForm(f => ({ ...f, training_days: [...f.training_days, emptyDay()] }))
  const removeDay = (di) => setForm(f => ({ ...f, training_days: f.training_days.filter((_, i) => i !== di) }))
  const addExercise = (di) => setForm(f => {
    const days = f.training_days.map((d, i) => i === di ? { ...d, exercises: [...d.exercises, emptyExercise()] } : d)
    return { ...f, training_days: days }
  })
  const removeExercise = (di, ei) => setForm(f => {
    const days = f.training_days.map((d, i) => {
      if (i !== di) return d
      return { ...d, exercises: d.exercises.filter((_, j) => j !== ei) }
    })
    return { ...f, training_days: days }
  })

  const filteredPlans = filterType === 'all'
    ? plans
    : plans.filter(p => p.data?.fitness_type === filterType)

  const getTypeLabel = (val) => FITNESS_TYPES.find(t => t.value === val)?.label || val

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-900">💪 健身计划系统</h1>
        <button
          onClick={openCreate}
          className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
        >
          + 新建计划
        </button>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Filter */}
        <div className="flex gap-2 flex-wrap mb-6">
          <button
            onClick={() => setFilterType('all')}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${filterType === 'all' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'}`}
          >
            全部
          </button>
          {FITNESS_TYPES.map(t => (
            <button
              key={t.value}
              onClick={() => setFilterType(t.value)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${filterType === t.value ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'}`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Plan List */}
        {loading ? (
          <div className="text-center py-16 text-gray-400">加载中...</div>
        ) : error ? (
          <div className="text-center py-16 text-red-500">{error}</div>
        ) : filteredPlans.length === 0 ? (
          <div className="text-center py-16 text-gray-400">
            <p className="text-4xl mb-3">🏋️</p>
            <p>暂无计划，点击「新建计划」开始吧</p>
          </div>
        ) : (
          <div className="space-y-3">
            {filteredPlans.map(plan => {
              const d = plan.data || {}
              const isExpanded = expandedPlan === plan.id
              return (
                <div key={plan.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                  {/* Plan Header */}
                  <div
                    className="flex items-center justify-between px-5 py-4 cursor-pointer hover:bg-gray-50 transition-colors"
                    onClick={() => setExpandedPlan(isExpanded ? null : plan.id)}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full shrink-0 ${FITNESS_TYPE_COLORS[d.fitness_type] || 'bg-gray-100 text-gray-600'}`}>
                        {getTypeLabel(d.fitness_type)}
                      </span>
                      <span className="font-semibold text-gray-900 truncate">{d.name}</span>
                      {d.description && (
                        <span className="text-sm text-gray-400 truncate hidden sm:block">{d.description}</span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 shrink-0 ml-3">
                      <span className="text-xs text-gray-400">{(d.training_days || []).length} 个训练日</span>
                      <button
                        onClick={e => { e.stopPropagation(); openEdit(plan) }}
                        className="text-xs text-blue-600 hover:text-blue-800 px-2 py-1 rounded hover:bg-blue-50 transition-colors"
                      >
                        编辑
                      </button>
                      <button
                        onClick={e => { e.stopPropagation(); handleDelete(plan) }}
                        className="text-xs text-red-500 hover:text-red-700 px-2 py-1 rounded hover:bg-red-50 transition-colors"
                      >
                        删除
                      </button>
                      <span className="text-gray-300 text-sm">{isExpanded ? '▲' : '▼'}</span>
                    </div>
                  </div>

                  {/* Expanded Training Days */}
                  {isExpanded && (
                    <div className="border-t border-gray-100 px-5 py-4 space-y-4 bg-gray-50">
                      {(d.training_days || []).length === 0 ? (
                        <p className="text-sm text-gray-400">暂无训练日</p>
                      ) : (
                        (d.training_days || []).map((day, di) => (
                          <div key={di} className="bg-white rounded-lg border border-gray-200 p-4">
                            <div className="flex items-center gap-3 mb-3">
                              <span className="font-medium text-gray-800">{day.day_name || `训练日 ${di + 1}`}</span>
                              {day.scheduled_time && (
                                <span className="text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full">
                                  🕐 {day.scheduled_time}
                                </span>
                              )}
                            </div>
                            {(day.exercises || []).length === 0 ? (
                              <p className="text-sm text-gray-400">暂无动作</p>
                            ) : (
                              <table className="w-full text-sm">
                                <thead>
                                  <tr className="text-gray-400 text-xs border-b border-gray-100">
                                    <th className="text-left pb-1 font-medium">动作</th>
                                    <th className="text-center pb-1 font-medium w-16">组数</th>
                                    <th className="text-center pb-1 font-medium w-20">每组次数</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {(day.exercises || []).map((ex, ei) => (
                                    <tr key={ei} className="border-b border-gray-50 last:border-0">
                                      <td className="py-1.5 text-gray-800">{ex.exercise_name}</td>
                                      <td className="py-1.5 text-center text-gray-600">{ex.sets} 组</td>
                                      <td className="py-1.5 text-center text-gray-600">{ex.reps} 次</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            )}
                          </div>
                        ))
                      )}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        )}
      </div>

      {/* Modal Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-start justify-center overflow-y-auto py-8 px-4">
          <div className="bg-white rounded-2xl w-full max-w-2xl shadow-xl">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-bold text-gray-900">{editingPlan ? '编辑计划' : '新建计划'}</h2>
              <button onClick={closeForm} className="text-gray-400 hover:text-gray-600 text-xl leading-none bg-transparent border-0 p-0">✕</button>
            </div>

            <form onSubmit={handleSubmit} className="px-6 py-5 space-y-5">
              {/* Basic Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">计划名称 *</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={e => setField('name', e.target.value)}
                    placeholder="如：12周增肌计划"
                    required
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">健身类型 *</label>
                  <select
                    value={form.fitness_type}
                    onChange={e => setField('fitness_type', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  >
                    {FITNESS_TYPES.map(t => (
                      <option key={t.value} value={t.value}>{t.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">计划描述</label>
                <input
                  type="text"
                  value={form.description}
                  onChange={e => setField('description', e.target.value)}
                  placeholder="简单描述一下这个计划..."
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Training Days */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-medium text-gray-700">训练日</label>
                  <button
                    type="button"
                    onClick={addDay}
                    className="text-xs text-blue-600 hover:text-blue-800 font-medium bg-transparent border-0 p-0 cursor-pointer"
                  >
                    + 添加训练日
                  </button>
                </div>

                <div className="space-y-4">
                  {form.training_days.map((day, di) => (
                    <div key={di} className="border border-gray-200 rounded-xl p-4 bg-gray-50">
                      <div className="flex items-center gap-3 mb-3">
                        <input
                          type="text"
                          value={day.day_name}
                          onChange={e => setDayField(di, 'day_name', e.target.value)}
                          placeholder={`训练日 ${di + 1}，如：周一`}
                          className="flex-1 border border-gray-300 rounded-lg px-3 py-1.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                        />
                        <input
                          type="time"
                          value={day.scheduled_time}
                          onChange={e => setDayField(di, 'scheduled_time', e.target.value)}
                          className="border border-gray-300 rounded-lg px-3 py-1.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                        />
                        {form.training_days.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeDay(di)}
                            className="text-red-400 hover:text-red-600 text-sm bg-transparent border-0 p-0 cursor-pointer shrink-0"
                          >
                            ✕
                          </button>
                        )}
                      </div>

                      {/* Exercises */}
                      <div className="space-y-2">
                        {day.exercises.map((ex, ei) => (
                          <div key={ei} className="flex items-center gap-2">
                            <input
                              type="text"
                              value={ex.exercise_name}
                              onChange={e => setExerciseField(di, ei, 'exercise_name', e.target.value)}
                              placeholder="动作名称，如：深蹲"
                              className="flex-1 border border-gray-300 rounded-lg px-3 py-1.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                            />
                            <div className="flex items-center gap-1 shrink-0">
                              <input
                                type="number"
                                value={ex.sets}
                                min={1} max={20}
                                onChange={e => setExerciseField(di, ei, 'sets', parseInt(e.target.value) || 1)}
                                className="w-14 border border-gray-300 rounded-lg px-2 py-1.5 text-sm text-gray-900 text-center focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                              />
                              <span className="text-xs text-gray-400">组</span>
                              <input
                                type="number"
                                value={ex.reps}
                                min={1} max={200}
                                onChange={e => setExerciseField(di, ei, 'reps', parseInt(e.target.value) || 1)}
                                className="w-14 border border-gray-300 rounded-lg px-2 py-1.5 text-sm text-gray-900 text-center focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                              />
                              <span className="text-xs text-gray-400">次</span>
                            </div>
                            {day.exercises.length > 1 && (
                              <button
                                type="button"
                                onClick={() => removeExercise(di, ei)}
                                className="text-red-400 hover:text-red-600 text-sm bg-transparent border-0 p-0 cursor-pointer shrink-0"
                              >
                                ✕
                              </button>
                            )}
                          </div>
                        ))}
                        <button
                          type="button"
                          onClick={() => addExercise(di)}
                          className="text-xs text-gray-500 hover:text-gray-700 mt-1 bg-transparent border-0 p-0 cursor-pointer"
                        >
                          + 添加动作
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex justify-end gap-3 pt-2 border-t border-gray-100">
                <button
                  type="button"
                  onClick={closeForm}
                  className="px-4 py-2 text-sm text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors border-0"
                >
                  取消
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-5 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50 rounded-lg transition-colors border-0"
                >
                  {submitting ? '保存中...' : '保存计划'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
