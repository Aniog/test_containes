import React from 'react'
import { Check, Clock, Edit2, Trash2, Calendar, Tag } from 'lucide-react'

const TodoItem = ({ item, onToggle, onEdit, onDelete }) => {
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'text-red-600 bg-red-50 border-red-200'
      case 'medium': return 'text-yellow-600 bg-yellow-50 border-yellow-200'
      case 'low': return 'text-green-600 bg-green-50 border-green-200'
      default: return 'text-gray-600 bg-gray-50 border-gray-200'
    }
  }

  const formatDate = (dateString) => {
    if (!dateString) return null
    return new Date(dateString).toLocaleDateString()
  }

  return (
    <div className={`border rounded-lg p-4 transition-all duration-200 hover:shadow-md ${
      item.data?.completed ? 'bg-gray-50 border-gray-200' : 'bg-white border-gray-300'
    }`}>
      <div className="flex items-start gap-3">
        {/* Checkbox */}
        <button
          onClick={() => onToggle(item.id, !item.data?.completed)}
          className={`flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
            item.data?.completed
              ? 'bg-green-500 border-green-500 text-white'
              : 'border-gray-300 hover:border-green-400'
          }`}
        >
          {item.data?.completed && <Check size={12} />}
        </button>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1">
              <h3 className={`font-medium text-gray-900 ${
                item.data?.completed ? 'line-through text-gray-500' : ''
              }`}>
                {item.data?.title}
              </h3>
              
              {item.data?.description && (
                <p className={`text-sm mt-1 ${
                  item.data?.completed ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {item.data?.description}
                </p>
              )}
            </div>

            {/* Actions */}
            <div className="flex gap-1 flex-shrink-0">
              <button
                onClick={() => onEdit(item)}
                className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors"
                title="Edit task"
              >
                <Edit2 size={14} />
              </button>
              <button
                onClick={() => onDelete(item.id)}
                className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded transition-colors"
                title="Delete task"
              >
                <Trash2 size={14} />
              </button>
            </div>
          </div>

          {/* Meta information */}
          <div className="flex items-center gap-4 mt-3 text-xs">
            {/* Priority */}
            {item.data?.priority && (
              <span className={`px-2 py-1 rounded-full border text-xs font-medium ${getPriorityColor(item.data.priority)}`}>
                {item.data.priority}
              </span>
            )}

            {/* Due date */}
            {item.data?.due_date && (
              <div className="flex items-center gap-1 text-gray-500">
                <Calendar size={12} />
                <span>{formatDate(item.data.due_date)}</span>
              </div>
            )}

            {/* Tags */}
            {item.data?.tags && item.data.tags.length > 0 && (
              <div className="flex items-center gap-1 text-gray-500">
                <Tag size={12} />
                <span>{item.data.tags.join(', ')}</span>
              </div>
            )}

            {/* Created date */}
            {item.created_at && (
              <div className="flex items-center gap-1 text-gray-400">
                <Clock size={12} />
                <span>Created {formatDate(item.created_at)}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TodoItem