import { useState, useEffect, useCallback } from 'react'
import { Plus, Trash2, ChevronDown, ChevronUp, Dumbbell, Calendar, Clock, Save, X, Edit2 } from 'lucide-react'
import { fetchPlans, createPlan, updatePlan, deletePlan } from '../api/fitnessPlans.js'

// ─── Schema-driven constants ────────────────────────────────────────────────
const FITNESS_TYPE_OPTIONS = ['strength', 'cardio', 'flexibility', 'hiit', 'yoga', 'crossfit']
const FITNESS_TYPE_LABELS = {
  strength: '力量训练', cardio: '有氧运动', flexibility: '柔韧性',
  hiit: 'HIIT', yoga: '瑜伽', crossfit: 'CrossFit',
}

const DAY_TYPE_OPTIONS = ['Training', 'Rest', 'Recovery']
const DAY_TYPE_LABELS = { Training: '训练日', Rest: '休息日', Recovery: '恢复日' }

const SCHEDULED_TIME_OPTIONS = ['Morning', 'Afternoon', 'Evening']
const SCHEDULED_TIME_LABELS = { Morning: '上午', Afternoon: '下午', Evening: '晚上' }
const SCHEDULED_TIME_ICONS = { Morning: '🌅', Afternoon: '☀️', Evening: '🌙' }

const EXERCISE_TYPE_OPTIONS = ['Strength', 'Cardio', 'Mobility', 'Stretching']
const EXERCISE_TYPE_LABELS = { Strength: '力量', Cardio: '有氧', Mobility: '灵活性', Stretching: '拉伸' }

const EXERCISE_NAME_OPTIONS = ['Push-up', 'Squat', 'Plank', 'Burpee', 'Running']
const EXERCISE_NAME_LABELS = { 'Push-up': '俯卧撑', Squat: '深蹲', Plank: '平板支撑', Burpee: '波比跳', Running: '跑步' }

const INTENSITY_OPTIONS = ['Low', 'Medium', 'High']
const INTENSITY_LABELS = { Low: '低', Medium: '中', High: '高' }
const INTENSITY_COLORS = {
  Low: 'bg-green-100 text-green-700 border-green-200',
  Medium: 'bg-yellow-100 text-yellow-700 border-yellow-200',
  High: 'bg-red-100 text-red-700 border-red-200',
}

// ─── Default factories ───────────────────────────────────────────────────────
const today = () => new Date().toISOString().slice(0, 10)

const emptyExercise = () => ({
  exercise_date: today(),
  exercise_type: 'Strength',
  exercise_name: 'Squat',
  intensity: 'Medium',
  sets: 3,
  reps: 10,
})

const emptyDay = () => ({
  training_date: today(),
  day_type: 'Training',
  scheduled_time: 'Afternoon',
  exercises: [emptyExercise()],
})

const emptyPlan = () => ({
  name: '',
  fitness_type: 'strength',
  training_days: [emptyDay()],
})

// ─── Reusable field components ───────────────────────────────────────────────
function FieldLabel({ label, description }) {
  return (
    <div className="mb-1">
      <span className="block text-xs font-medium text-gray-700">{label}</span>
      {description && <span className="block text-xs text-gray-400 mt-0.5">{description}</span>}
    </div>
  )
}

function DateField({ label, description, value, onChange, required }) {
  return (
    <div>
      <FieldLabel label={label} description={description} />
      <div className="relative">
        <Calendar className="absolute left-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400 pointer-events-none" />
        <input
          type="date"
          value={value || ''}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          className="w-full border border-gray-300 rounded-md pl-7 pr-2 py-1.5 text-xs text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  )
}

function SelectField({ label, description, value, onChange, options, labelMap, required }) {
  return (
    <div>
      <FieldLabel label={label} description={description} />
      <select
        value={value || ''}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="w-full border border-gray-300 rounded-md px-2 py-1.5 text-xs text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>{labelMap[opt] || opt}</option>
        ))}
      </select>
    </div>
  )
}

function NumberField({ label, description, value, onChange, min = 1, required }) {
  return (
    <div>
      <FieldLabel label={label} description={description} />
      <input
        type="number"
        min={min}
        value={value || ''}
        onChange={(e) => onChange(parseInt(e.target.value) || min)}
        required={required}
        className="w-full border border-gray-300 rounded-md px-2 py-1.5 text-xs text-gray-900 text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  )
}

// ─── Exercise row form ───────────────────────────────────────────────────────
function ExerciseForm({ exercise, onChange, onRemove, canRemove }) {
  const set = (key, val) => onChange({ ...exercise, [key]: val })
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-3 space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-gray-600">动作</span>
        {canRemove && (
          <button type="button" onClick={onRemove} className="text-red-400 hover:text-red-600">
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
      {/* Row 1: date + type + name */}
      <div className="grid grid-cols-3 gap-2">
        <DateField
          label="动作日期"
          description="选择该动作的训练日期"
          value={exercise.exercise_date}
          onChange={(v) => set('exercise_date', v)}
          required
        />
        <SelectField
          label="动作类型"
          description="选择动作类型"
          value={exercise.exercise_type}
          onChange={(v) => set('exercise_type', v)}
          options={EXERCISE_TYPE_OPTIONS}
          labelMap={EXERCISE_TYPE_LABELS}
          required
        />
        <SelectField
          label="动作名称"
          description="选择动作名称"
          value={exercise.exercise_name}
          onChange={(v) => set('exercise_name', v)}
          options={EXERCISE_NAME_OPTIONS}
          labelMap={EXERCISE_NAME_LABELS}
          required
        />
      </div>
      {/* Row 2: intensity + sets + reps */}
      <div className="grid grid-cols-3 gap-2">
        <SelectField
          label="训练强度"
          description="选择训练强度"
          value={exercise.intensity}
          onChange={(v) => set('intensity', v)}
          options={INTENSITY_OPTIONS}
          labelMap={INTENSITY_LABELS}
          required
        />
        <NumberField
          label="组数"
          description="组数"
          value={exercise.sets}
          onChange={(v) => set('sets', v)}
        />
        <NumberField
          label="每组次数"
          description="每组重复次数"
          value={exercise.reps}
          onChange={(v) => set('reps', v)}
        />
      </div>
    </div>
  )
}

// ─── Training day form ───────────────────────────────────────────────────────
function TrainingDayForm({ day, dayIndex, onChange, onRemove, canRemove }) {
  const setDay = (key, val) => onChange({ ...day, [key]: val })

  const setExercise = (ei, updated) => {
    const exercises = day.exercises.map((ex, j) => (j === ei ? updated : ex))
    onChange({ ...day, exercises })
  }

  const addExercise = () => onChange({ ...day, exercises: [...day.exercises, emptyExercise()] })

  const removeExercise = (ei) =>
    onChange({ ...day, exercises: day.exercises.filter((_, j) => j !== ei) })

  return (
    <div className="border border-gray-200 rounded-xl p-4 bg-gray-50 space-y-4">
      {/* Day header */}
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-gray-700">第 {dayIndex + 1} 天</span>
        {canRemove && (
          <button type="button" onClick={onRemove} className="text-red-400 hover:text-red-600">
            <Trash2 className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Day-level fields: date + day_type + scheduled_time */}
      <div className="grid grid-cols-3 gap-3">
        <DateField
          label="训练日期"
          description="选择训练日期"
          value={day.training_date}
          onChange={(v) => setDay('training_date', v)}
          required
        />
        <SelectField
          label="日类型"
          description="选择训练日类型"
          value={day.day_type}
          onChange={(v) => setDay('day_type', v)}
          options={DAY_TYPE_OPTIONS}
          labelMap={DAY_TYPE_LABELS}
          required
        />
        <SelectField
          label="训练时段"
          description="选择计划训练时间"
          value={day.scheduled_time}
          onChange={(v) => setDay('scheduled_time', v)}
          options={SCHEDULED_TIME_OPTIONS}
          labelMap={SCHEDULED_TIME_LABELS}
          required
        />
      </div>

      {/* Exercises */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold text-gray-600">动作列表</span>
          <button
            type="button"
            onClick={addExercise}
            className="flex items-center gap-1 text-blue-600 hover:text-blue-700 text-xs font-medium"
          >
            <Plus className="w-3 h-3" />
            添加动作
          </button>
        </div>
        <div className="space-y-2">
          {day.exercises.map((ex, ei) => (
            <ExerciseForm
              key={ei}
              exercise={ex}
              onChange={(updated) => setExercise(ei, updated)}
              onRemove={() => removeExercise(ei)}
              canRemove={day.exercises.length > 1}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── Plan card (read view) ───────────────────────────────────────────────────
function PlanCard({ plan, onEdit, onDelete }) {
  const [expanded, setExpanded] = useState(false)
  const d = plan.data || {}

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="px-5 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3 min-w-0">
          <button
            onClick={() => setExpanded((v) => !v)}
            className="text-gray-400 hover:text-gray-600 flex-shrink-0"
          >
            {expanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </button>
          <div className="min-w-0">
            <h3 className="font-semibold text-gray-900 truncate">{d.name}</h3>
            <div className="flex items-center gap-2 mt-0.5 flex-wrap">
              <span className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full font-medium border border-blue-100">
                {FITNESS_TYPE_LABELS[d.fitness_type] || d.fitness_type}
              </span>
              <span className="text-xs text-gray-400">
                {(d.training_days || []).length} 个训练日
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1 flex-shrink-0">
          <button onClick={() => onEdit(plan)} className="text-gray-400 hover:text-blue-600 p-1.5 rounded-md hover:bg-blue-50" title="编辑">
            <Edit2 className="w-4 h-4" />
          </button>
          <button onClick={() => onDelete(plan.id)} className="text-gray-400 hover:text-red-600 p-1.5 rounded-md hover:bg-red-50" title="删除">
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {expanded && (
        <div className="border-t border-gray-100 px-5 py-4 space-y-4 bg-gray-50">
          {(d.training_days || []).map((day, di) => (
            <div key={di} className="bg-white rounded-lg border border-gray-200 p-4">
              {/* Day header */}
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <div className="flex items-center gap-1.5 text-sm text-gray-700">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <span className="font-medium">{day.training_date}</span>
                </div>
                <div className="flex items-center gap-1.5 text-sm text-gray-600">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span>{SCHEDULED_TIME_ICONS[day.scheduled_time]} {SCHEDULED_TIME_LABELS[day.scheduled_time] || day.scheduled_time}</span>
                </div>
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full border border-gray-200">
                  {DAY_TYPE_LABELS[day.day_type] || day.day_type}
                </span>
              </div>

              {/* Exercises table */}
              {(day.exercises || []).length > 0 && (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm min-w-[480px]">
                    <thead>
                      <tr className="text-xs text-gray-400 border-b border-gray-100">
                        <th className="text-left pb-2 font-medium">日期</th>
                        <th className="text-left pb-2 font-medium">动作</th>
                        <th className="text-left pb-2 font-medium">类型</th>
                        <th className="text-center pb-2 font-medium">组</th>
                        <th className="text-center pb-2 font-medium">次</th>
                        <th className="text-center pb-2 font-medium">强度</th>
                      </tr>
                    </thead>
                    <tbody>
                      {day.exercises.map((ex, ei) => (
                        <tr key={ei} className="border-b border-gray-50 last:border-0">
                          <td className="py-1.5 text-gray-500 text-xs">{ex.exercise_date}</td>
                          <td className="py-1.5 text-gray-800 font-medium">
                            {EXERCISE_NAME_LABELS[ex.exercise_name] || ex.exercise_name}
                          </td>
                          <td className="py-1.5 text-gray-600 text-xs">
                            {EXERCISE_TYPE_LABELS[ex.exercise_type] || ex.exercise_type}
                          </td>
                          <td className="py-1.5 text-center text-gray-700">{ex.sets ?? '—'}</td>
                          <td className="py-1.5 text-center text-gray-700">{ex.reps ?? '—'}</td>
                          <td className="py-1.5 text-center">
                            <span className={`text-xs px-2 py-0.5 rounded-full font-medium border ${INTENSITY_COLORS[ex.intensity] || 'bg-gray-100 text-gray-600 border-gray-200'}`}>
                              {INTENSITY_LABELS[ex.intensity] || ex.intensity}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

// ─── Plan form modal ─────────────────────────────────────────────────────────
function PlanFormModal({ editingPlan, onClose, onSaved }) {
  const [form, setForm] = useState(() =>
    editingPlan ? { ...editingPlan.data } : emptyPlan()
  )
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState(null)

  const setField = (key, val) => setForm((f) => ({ ...f, [key]: val }))

  const setDay = (di, updated) =>
    setForm((f) => ({
      ...f,
      training_days: f.training_days.map((d, i) => (i === di ? updated : d)),
    }))

  const addDay = () =>
    setForm((f) => ({ ...f, training_days: [...f.training_days, emptyDay()] }))

  const removeDay = (di) =>
    setForm((f) => ({ ...f, training_days: f.training_days.filter((_, i) => i !== di) }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSaving(true)
    setError(null)
    try {
      let result
      if (editingPlan) {
        result = await updatePlan(editingPlan.id, form)
      } else {
        result = await createPlan(form)
      }
      onSaved(result, !!editingPlan)
    } catch (e) {
      setError(e.message || '保存失败')
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center overflow-y-auto py-8 px-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl">
        {/* Modal header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-bold text-gray-900">
            {editingPlan ? '编辑计划' : '新建健身计划'}
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 p-1 rounded-md hover:bg-gray-100">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="px-6 py-5 space-y-6">
          {/* Top-level plan fields */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <FieldLabel label="计划名称" description="健身计划名称" />
              <input
                required
                value={form.name}
                onChange={(e) => setField('name', e.target.value)}
                placeholder="例：夏季增肌计划"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <SelectField
              label="健身类型"
              description="选择健身类型"
              value={form.fitness_type}
              onChange={(v) => setField('fitness_type', v)}
              options={FITNESS_TYPE_OPTIONS}
              labelMap={FITNESS_TYPE_LABELS}
              required
            />
          </div>

          {/* Training days */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-bold text-gray-800">训练日安排</h3>
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
                <TrainingDayForm
                  key={di}
                  day={day}
                  dayIndex={di}
                  onChange={(updated) => setDay(di, updated)}
                  onRemove={() => removeDay(di)}
                  canRemove={form.training_days.length > 1}
                />
              ))}
            </div>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-lg">
              {error}
            </div>
          )}

          <div className="flex gap-3 pt-1">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 border border-gray-300 text-gray-700 text-sm font-medium py-2.5 rounded-lg hover:bg-gray-50 transition-colors"
            >
              取消
            </button>
            <button
              type="submit"
              disabled={saving}
              className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white text-sm font-medium py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <Save className="w-4 h-4" />
              {saving ? '保存中…' : '保存计划'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

// ─── Main page ───────────────────────────────────────────────────────────────
export default function FitnessPlanner() {
  const [plans, setPlans] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [showForm, setShowForm] = useState(false)
  const [editingPlan, setEditingPlan] = useState(null)

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

  const openCreate = () => { setEditingPlan(null); setShowForm(true) }
  const openEdit = (plan) => { setEditingPlan(plan); setShowForm(true) }
  const closeForm = () => { setShowForm(false); setEditingPlan(null) }

  const handleSaved = (result, isEdit) => {
    if (isEdit) {
      setPlans((prev) => prev.map((p) => (p.id === result.id ? result : p)))
    } else {
      setPlans((prev) => [result, ...prev])
    }
    closeForm()
  }

  const handleDelete = async (id) => {
    if (!window.confirm('确认删除此计划？')) return
    try {
      await deletePlan(id)
      setPlans((prev) => prev.filter((p) => p.id !== id))
    } catch (e) {
      setError(e.message || '删除失败')
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-4 sticky top-0 z-10">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Dumbbell className="w-6 h-6 text-blue-600" />
            <h1 className="text-xl font-bold text-gray-900">健身计划</h1>
          </div>
          <button
            onClick={openCreate}
            className="flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors shadow-sm"
          >
            <Plus className="w-4 h-4" />
            新建计划
          </button>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-6">
        {error && (
          <div className="mb-4 bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-lg flex items-center justify-between">
            <span>{error}</span>
            <button onClick={() => setError(null)}><X className="w-4 h-4" /></button>
          </div>
        )}

        {loading ? (
          <div className="text-center py-20 text-gray-400 text-sm">加载中…</div>
        ) : plans.length === 0 ? (
          <div className="text-center py-20">
            <Dumbbell className="w-14 h-14 text-gray-200 mx-auto mb-4" />
            <p className="text-gray-500 text-sm font-medium">还没有健身计划</p>
            <p className="text-gray-400 text-xs mt-1">点击「新建计划」开始吧</p>
          </div>
        ) : (
          <div className="space-y-3">
            {plans.map((plan) => (
              <PlanCard
                key={plan.id}
                plan={plan}
                onEdit={openEdit}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}
      </main>

      {showForm && (
        <PlanFormModal
          editingPlan={editingPlan}
          onClose={closeForm}
          onSaved={handleSaved}
        />
      )}
    </div>
  )
}
