import { useState } from 'react'
import { ChevronDown, ChevronUp, Edit2, Trash2, Dumbbell } from 'lucide-react'

const PlanCard = ({ plan, onEdit, onDelete }) => {
  const [expanded, setExpanded] = useState(false)
  const { plan_name, description, training_days = [] } = plan.data || {}

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <div className="bg-blue-50 p-2 rounded-md">
            <Dumbbell className="w-5 h-5 text-blue-600" />
          </div>
          <div className="min-w-0">
            <h3 className="font-semibold text-gray-900 truncate">{plan_name}</h3>
            {description && <p className="text-sm text-gray-500 truncate">{description}</p>}
            <p className="text-xs text-gray-400 mt-0.5">{training_days.length} 个训练日</p>
          </div>
        </div>
        <div className="flex items-center gap-1 ml-2 shrink-0">
          <button
            onClick={() => onEdit(plan)}
            className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
          >
            <Edit2 className="w-4 h-4" />
          </button>
          <button
            onClick={() => onDelete(plan.id)}
            className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors"
          >
            <Trash2 className="w-4 h-4" />
          </button>
          <button
            onClick={() => setExpanded(!expanded)}
            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-md transition-colors"
          >
            {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {expanded && training_days.length > 0 && (
        <div className="border-t border-gray-100 px-4 pb-4 pt-3 space-y-3">
          {training_days.map((day, di) => (
            <div key={di}>
              <p className="text-sm font-medium text-gray-700 mb-1.5">{day.day_name}</p>
              <div className="space-y-1">
                {(day.exercises || []).map((ex, ei) => (
                  <div key={ei} className="flex items-center justify-between bg-gray-50 rounded px-3 py-1.5 text-sm">
                    <span className="text-gray-700">{ex.exercise_name}</span>
                    <span className="text-gray-500 text-xs">{ex.sets} 组 × {ex.reps} 次</span>
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

export default PlanCard
