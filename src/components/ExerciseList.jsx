import { useState } from 'react'

export default function ExerciseList({ exercises, onExercisesChanged }) {
  const [adding, setAdding] = useState(false)
  const [name, setName] = useState('')
  const [sets, setSets] = useState('')
  const [reps, setReps] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const handleAdd = async (e) => {
    e.preventDefault()
    if (!name.trim() || !sets || !reps) return
    setSubmitting(true)
    const newExercise = {
      exercise_name: name.trim(),
      sets: parseInt(sets, 10),
      reps: parseInt(reps, 10),
    }
    await onExercisesChanged([...exercises, newExercise])
    setName('')
    setSets('')
    setReps('')
    setAdding(false)
    setSubmitting(false)
  }

  const handleDelete = async (index) => {
    await onExercisesChanged(exercises.filter((_, i) => i !== index))
  }

  return (
    <div>
      {exercises.length > 0 && (
        <table className="w-full text-sm mb-3">
          <thead>
            <tr className="text-left text-xs text-gray-400 border-b border-gray-100">
              <th className="pb-1 font-medium">动作名称</th>
              <th className="pb-1 font-medium w-16 text-center">组数</th>
              <th className="pb-1 font-medium w-16 text-center">次数</th>
              <th className="pb-1 w-8"></th>
            </tr>
          </thead>
          <tbody>
            {exercises.map((ex, i) => (
              <tr key={i} className="border-b border-gray-50 last:border-0">
                <td className="py-1.5 text-gray-800">{ex.exercise_name}</td>
                <td className="py-1.5 text-center text-gray-600">{ex.sets}</td>
                <td className="py-1.5 text-center text-gray-600">{ex.reps}</td>
                <td className="py-1.5 text-right">
                  <button
                    onClick={() => handleDelete(i)}
                    className="text-gray-300 hover:text-red-500 text-xs"
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
        <form onSubmit={handleAdd} className="flex gap-2 items-center">
          <input
            autoFocus
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="动作名称"
            className="flex-1 border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="number"
            min="1"
            value={sets}
            onChange={(e) => setSets(e.target.value)}
            placeholder="组数"
            className="w-16 border border-gray-300 rounded px-2 py-1 text-sm text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="number"
            min="1"
            value={reps}
            onChange={(e) => setReps(e.target.value)}
            placeholder="次数"
            className="w-16 border border-gray-300 rounded px-2 py-1 text-sm text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            disabled={submitting || !name.trim() || !sets || !reps}
            className="bg-blue-600 text-white rounded px-3 py-1 text-sm hover:bg-blue-700 disabled:opacity-50 shrink-0"
          >
            {submitting ? '…' : '添加'}
          </button>
          <button
            type="button"
            onClick={() => { setAdding(false); setName(''); setSets(''); setReps('') }}
            className="text-gray-400 hover:text-gray-600 text-sm"
          >
            取消
          </button>
        </form>
      ) : (
        <button
          onClick={() => setAdding(true)}
          className="text-blue-500 text-xs hover:underline"
        >
          + 添加动作
        </button>
      )}
    </div>
  )
}
