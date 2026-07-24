import { useState } from 'react'
import { Check, Trash2, Calendar, Tag, ChevronDown, ChevronUp } from 'lucide-react'
import { cn } from '@/lib/utils'

const PRIORITY_STYLES = {
  low: { badge: 'bg-green-100 text-green-700', dot: 'bg-green-400', label: '低' },
  medium: { badge: 'bg-yellow-100 text-yellow-700', dot: 'bg-yellow-400', label: '中' },
  high: { badge: 'bg-red-100 text-red-700', dot: 'bg-red-400', label: '高' },
}

export default function TodoItem({ item, onToggle, onDelete, loading }) {
  const [deleting, setDeleting] = useState(false)
  const fields = item?.data ?? {}
  const priority = fields.priority || 'medium'
  const ps = PRIORITY_STYLES[priority] || PRIORITY_STYLES.medium

  const handleDelete = async () => {
    setDeleting(true)
    await onDelete(item.id)
  }

  const isOverdue = fields.due_date && !fields.completed && new Date(fields.due_date) < new Date()

  return (
    <div
      className={cn(
        'group flex items-start gap-3 bg-white rounded-2xl border px-4 py-3.5 shadow-sm transition-all duration-200',
        fields.completed ? 'border-violet-100 opacity-60' : 'border-violet-100 hover:border-violet-300 hover:shadow-md',
        deleting && 'opacity-30 pointer-events-none'
      )}
    >
      {/* Checkbox */}
      <button
        onClick={() => onToggle(item)}
        disabled={loading}
        className={cn(
          'mt-0.5 flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-200',
          fields.completed
            ? 'bg-green-400 border-green-400'
            : 'border-violet-300 hover:border-violet-500 hover:bg-violet-50'
        )}
        aria-label={fields.completed ? '标记未完成' : '标记完成'}
      >
        {fields.completed && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
      </button>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <p className={cn(
          'text-sm font-medium text-indigo-950 leading-snug break-words',
          fields.completed && 'line-through text-gray-400'
        )}>
          {fields.title}
        </p>

        <div className="flex flex-wrap items-center gap-2 mt-1.5">
          {/* Priority badge */}
          <span className={cn('text-xs px-2 py-0.5 rounded-full font-medium', ps.badge)}>
            <span className={cn('inline-block w-1.5 h-1.5 rounded-full mr-1 align-middle', ps.dot)} />
            {ps.label}优先级
          </span>

          {/* Category */}
          {fields.category && (
            <span className="flex items-center gap-1 text-xs text-violet-600 bg-violet-50 px-2 py-0.5 rounded-full">
              <Tag className="w-3 h-3" />
              {fields.category}
            </span>
          )}

          {/* Due date */}
          {fields.due_date && (
            <span className={cn(
              'flex items-center gap-1 text-xs px-2 py-0.5 rounded-full',
              isOverdue ? 'text-red-600 bg-red-50' : 'text-gray-500 bg-gray-50'
            )}>
              <Calendar className="w-3 h-3" />
              {fields.due_date}
              {isOverdue && ' · 已逾期'}
            </span>
          )}
        </div>
      </div>

      {/* Delete */}
      <button
        onClick={handleDelete}
        disabled={loading || deleting}
        className="flex-shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 text-gray-300 hover:text-red-400 transition-all duration-150"
        aria-label="删除任务"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </div>
  )
}
