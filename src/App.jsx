import { useState, useEffect, useCallback } from 'react'
import { Plus, Trash2, ChevronDown, ChevronUp, Edit2, X, Check, Dumbbell } from 'lucide-react'
import { fetchPlans, createPlan, updatePlan, deletePlan } from './api/fitnessPlans.js'
import './App.css'

const GOALS = ['增肌', '减脂', '塑形', '耐力', '力量', '综合']

const GOAL_COLORS = {
  '增肌': 'bg-blue-100 text-blue-700',
  '减脂': 'bg-orange-100 text-orange-700',
  '塑形': 'bg-purple-100 text-purple-700',
  '耐力': 'bg-green-100 text-green-700',
  '力量': 'bg-red-100 text-red-700',
  '综合': 'bg-gray-100 text-gray-700',
}

const emptyExercise = () => ({ exercise_name: '', sets: 3, reps: 10, weight_kg: '', notes: '' })
const emptyDay = () => ({ day_name: '', exercises: [emptyExercise()] })
const emptyPlan = () => ({ name: '', description: '', goal: '增肌', training_days: [emptyDay()] })

// ── Exercise Row ──────────────────────────────────────────────────────────────
function ExerciseRow({ ex, onChange, onRemove, canRemove }) {
  return (
    <div className="flex flex-wrap gap-2 items-center py-2 border-b border-gray-100 last:border-0">
      <input
        className="flex-1 min-w-[120px] border border-gray-200 rounded px-2 py-1 text-sm text-gray-800 focus:outline-none focus:border-blue-400"
        placeholder="动作名称"
        value={ex.exercise_name}
        onChange={e => onChange('exercise_name', e.target.value)}
      />
      <div className="flex items-center gap-1">
        <span className="text-xs text-gray-400">组</span>
        <input
          type="number" min={1} max={20}
          className="w-14 border border-gray-200 rounded px-2 py-1 text-sm text-gray-800 text-center focus:outline-none focus:border-blue-400"
          value={ex.sets}
          onChange={e => onChange('sets', parseInt(e.target.value) || 1)}
        />
      </div>
      <div className="flex items-center gap-1">
        <span className="text-xs text-gray-400">次</span>
        <input
          type="number" min={1} max={100}
          className="w-14 border border-gray-200 rounded px-2 py-1 text-sm text-gray-800 text-center focus:outline-none focus:border-blue-400"
          value={ex.reps}
          onChange={e => onChange('reps', parseInt(e.target.value) || 1)}
        />
      </div>
      <div className="flex items-center gap-1">
        <span className="text-xs text-gray-400">kg</span>
        <input
          type="number" min={0} step={0.5}
          className="w-16 border border-gray-200 rounded px-2 py-1 text-sm text-gray-800 text-center focus:outline-none focus:border-blue-400"
          placeholder="—"
          value={ex.weight_kg}
          onChange={e => onChange('weight_kg', e.target.value === '' ? '' : parseFloat(e.target.value))}
        />
      </div>
      {canRemove && (
        <button onClick={onRemove} className="p-1 text-gray-300 hover:text-red-400 transition-colors">
          <X size={14} />
        </button>
      )}
    </div>
  )
}

// ── Training Day Card ─────────────────────────────────────────────────────────
function TrainingDayCard({ day, dayIndex, onChange, onRemove, canRemove }) {
  const updateExercise = (exIdx, field, value) => {
    const exercises = day.exercises.map((ex, i) =>
      i === exIdx ? { ...ex, [field]: value } : ex
    )
    onChange({ ...day, exercises })
  }

  const addExercise = () => onChange({ ...day, exercises: [...day.exercises, emptyExercise()] })

  const removeExercise = (exIdx) => {
    onChange({ ...day, exercises: day.exercises.filter((_, i) => i !== exIdx) })
  }

  return (
    <div className="border border-gray-200 rounded-lg bg-white">
      <div className="flex items-center gap-2 px-3 py-2 border-b border-gray-100">
        <span className="text-xs font-medium text-gray-400 w-6">D{dayIndex + 1}</span>
        <input
          className="flex-1 text-sm font-medium text-gray-800 border-0 focus:outline-none bg-transparent placeholder-gray-300"
          placeholder="训练日名称（如：胸背日）"
          value={day.day_name}
          onChange={e => onChange({ ...day, day_name: e.target.value })}
        />
        {canRemove && (
          <button onClick={onRemove} className="p-1 text-gray-300 hover:text-red-400 transition-colors">
            <Trash2 size={14} />
          </button>
        )}
      </div>

      <div className="px-3 py-1">
        <div className="flex gap-4 text-xs text-gray-400 py-1 border-b border-gray-50 mb-1">
          <span className="flex-1">动作</span>
          <span className="w-14 text-center">组数</span>
          <span className="w-14 text-center">次数</span>
          <span className="w-16 text-center">重量</span>
          <span className="w-5" />
        </div>
        {day.exercises.map((ex, exIdx) => (
          <ExerciseRow
            key={exIdx}
            ex={ex}
            onChange={(field, value) => updateExercise(exIdx, field, value)}
            onRemove={() => removeExercise(exIdx)}
            canRemove={day.exercises.length > 1}
          />
        ))}
      </div>

      <div className="px-3 py-2">
        <button
          onClick={addExercise}
          className="flex items-center gap-1 text-xs text-blue-500 hover:text-blue-600 transition-colors"
        >
          <Plus size={12} /> 添加动作
        </button>
      </div>
    </div>
  )
}

// ── Plan Form Modal ───────────────────────────────────────────────────────────
function PlanFormModal({ initial, onSave, onClose, saving, saveError }) {
  const [plan, setPlan] = useState(initial || emptyPlan())

  const updateDay = (dayIdx, newDay) => {
    setPlan(p => ({ ...p, training_days: p.training_days.map((d, i) => i === dayIdx ? newDay : d) }))
  }

  const addDay = () => setPlan(p => ({ ...p, training_days: [...p.training_days, emptyDay()] }))

  const removeDay = (dayIdx) => {
    setPlan(p => ({ ...p, training_days: p.training_days.filter((_, i) => i !== dayIdx) }))
  }

  const valid = plan.name.trim() && plan.training_days.every(d =>
    d.day_name.trim() && d.exercises.every(e => e.exercise_name.trim())
  )

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <h2 className="text-base font-semibold text-gray-800">
            {initial ? '编辑计划' : '新建计划'}
          </h2>
          <button onClick={onClose} className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
          {/* Basic info */}
          <div className="grid grid-cols-2 gap-3">
            <div className="col-span-2">
              <label className="block text-xs text-gray-500 mb-1">计划名称 *</label>
              <input
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 focus:outline-none focus:border-blue-400"
                placeholder="如：12周增肌计划"
                value={plan.name}
                onChange={e => setPlan(p => ({ ...p, name: e.target.value }))}
              />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">训练目标</label>
              <select
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 focus:outline-none focus:border-blue-400 bg-white"
                value={plan.goal}
                onChange={e => setPlan(p => ({ ...p, goal: e.target.value }))}
              >
                {GOALS.map(g => <option key={g} value={g}>{g}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">简介</label>
              <input
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 focus:outline-none focus:border-blue-400"
                placeholder="可选"
                value={plan.description}
                onChange={e => setPlan(p => ({ ...p, description: e.target.value }))}
              />
            </div>
          </div>

          {/* Training days */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium text-gray-500">训练日 ({plan.training_days.length})</span>
              <button
                onClick={addDay}
                className="flex items-center gap-1 text-xs text-blue-500 hover:text-blue-600 transition-colors"
              >
                <Plus size={12} /> 添加训练日
              </button>
            </div>
            <div className="space-y-3">
              {plan.training_days.map((day, dayIdx) => (
                <TrainingDayCard
                  key={dayIdx}
                  day={day}
                  dayIndex={dayIdx}
                  onChange={(newDay) => updateDay(dayIdx, newDay)}
                  onRemove={() => removeDay(dayIdx)}
                  canRemove={plan.training_days.length > 1}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-2 px-5 py-4 border-t border-gray-100">
          {saveError && (
            <span className="flex-1 text-xs text-red-500">{saveError}</span>
          )}
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm text-gray-500 hover:text-gray-700 transition-colors"
          >
            取消
          </button>
          <button
            onClick={() => {
              const sanitized = {
                ...plan,
                training_days: plan.training_days.map(d => ({
                  ...d,
                  exercises: d.exercises.map(e => ({
                    ...e,
                    weight_kg: e.weight_kg === '' || e.weight_kg === undefined ? null : Number(e.weight_kg),
                  })),
                })),
              }
              onSave(sanitized)
            }}
            disabled={!valid || saving}
            className="flex items-center gap-1.5 px-4 py-2 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            <Check size={14} />
            {saving ? '保存中…' : '保存'}
          </button>
        </div>
      </div>
    </div>
  )
}

// ── Plan Card ─────────────────────────────────────────────────────────────────
function PlanCard({ plan, onEdit, onDelete }) {
  const [expanded, setExpanded] = useState(false)
  const fields = plan.data || {}
  const days = fields.training_days || []
  const totalExercises = days.reduce((sum, d) => sum + (d.exercises?.length || 0), 0)

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
      <div className="px-4 py-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="text-sm font-semibold text-gray-800 truncate">{fields.name}</h3>
              <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${GOAL_COLORS[fields.goal] || 'bg-gray-100 text-gray-600'}`}>
                {fields.goal}
              </span>
            </div>
            {fields.description && (
              <p className="text-xs text-gray-400 mt-0.5 truncate">{fields.description}</p>
            )}
            <div className="flex items-center gap-3 mt-1.5 text-xs text-gray-400">
              <span>{days.length} 个训练日</span>
              <span>{totalExercises} 个动作</span>
            </div>
          </div>
          <div className="flex items-center gap-1 shrink-0">
            <button
              onClick={() => onEdit(plan)}
              className="p-1.5 text-gray-400 hover:text-blue-500 transition-colors"
            >
              <Edit2 size={14} />
            </button>
            <button
              onClick={() => onDelete(plan.id)}
              className="p-1.5 text-gray-400 hover:text-red-400 transition-colors"
            >
              <Trash2 size={14} />
            </button>
            <button
              onClick={() => setExpanded(e => !e)}
              className="p-1.5 text-gray-400 hover:text-gray-600 transition-colors"
            >
              {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>
          </div>
        </div>
      </div>

      {expanded && (
        <div className="border-t border-gray-100 px-4 py-3 space-y-3">
          {days.map((day, di) => (
            <div key={di}>
              <div className="text-xs font-medium text-gray-600 mb-1.5">
                D{di + 1} · {day.day_name}
              </div>
              <div className="space-y-1">
                {(day.exercises || []).map((ex, ei) => (
                  <div key={ei} className="flex items-center gap-2 text-xs text-gray-600">
                    <span className="flex-1 truncate">{ex.exercise_name}</span>
                    <span className="text-gray-400">{ex.sets}组 × {ex.reps}次</span>
                    {ex.weight_kg !== '' && ex.weight_kg !== undefined && (
                      <span className="text-gray-400">{ex.weight_kg}kg</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

// ── App ───────────────────────────────────────────────────────────────────────
export default function App() {
  const [plans, setPlans] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [modal, setModal] = useState(null) // null | { mode: 'create' | 'edit', plan?: object }
  const [saving, setSaving] = useState(false)
  const [saveError, setSaveError] = useState(null)
  const [deleteError, setDeleteError] = useState(null)

  const loadPlans = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const rows = await fetchPlans()
      setPlans(rows)
    } catch (err) {
      console.error('加载失败:', err)
      setError('加载失败，请刷新重试')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => { loadPlans() }, [loadPlans])

  const handleSave = async (planData) => {
    setSaving(true)
    setSaveError(null)
    try {
      if (modal.mode === 'create') {
        const created = await createPlan(planData)
        setPlans(prev => [created, ...prev])
      } else {
        const updated = await updatePlan(modal.plan.id, planData)
        setPlans(prev => prev.map(p => p.id === updated.id ? updated : p))
      }
      setModal(null)
    } catch (err) {
      console.error('保存失败:', err)
      setSaveError(err.message || '保存失败，请重试')
    } finally {
      setSaving(false)
    }
  }

  const handleDelete = async (id) => {
    if (!window.confirm('确认删除该计划？')) return
    setDeleteError(null)
    try {
      await deletePlan(id)
      setPlans(prev => prev.filter(p => p.id !== id))
    } catch (err) {
      console.error('删除失败:', err)
      setDeleteError(err.message || '删除失败，请重试')
    }
  }

  const handleEdit = (plan) => {
    const fields = plan.data || {}
    setModal({ mode: 'edit', plan, initial: fields })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Dumbbell size={18} className="text-blue-500" />
            <span className="text-sm font-semibold text-gray-800">健身计划</span>
          </div>
          <button
            onClick={() => setModal({ mode: 'create' })}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-500 text-white text-xs font-medium rounded-lg hover:bg-blue-600 transition-colors"
          >
            <Plus size={13} /> 新建计划
          </button>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-2xl mx-auto px-4 py-5">
        {loading && (
          <div className="text-center py-16 text-sm text-gray-400">加载中…</div>
        )}
        {error && (
          <div className="text-center py-16 text-sm text-red-400">{error}</div>
        )}
        {!loading && !error && plans.length === 0 && (
          <div className="text-center py-16">
            <Dumbbell size={32} className="text-gray-200 mx-auto mb-3" />
            <p className="text-sm text-gray-400">还没有计划，点击右上角新建</p>
          </div>
        )}
        {!loading && !error && plans.length > 0 && (
          <div className="space-y-3">
            {plans.map(plan => (
              <PlanCard
                key={plan.id}
                plan={plan}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}
      </main>

      {modal && (
        <PlanFormModal
          initial={modal.initial}
          onSave={handleSave}
          onClose={() => { setModal(null); setSaveError(null) }}
          saving={saving}
          saveError={saveError}
        />
      )}
    </div>
  )
}

