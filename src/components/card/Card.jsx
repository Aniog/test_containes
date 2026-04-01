import React, { useState } from 'react'
import { Calendar, User, Tag, Clock, CheckCircle2, Circle, MoreHorizontal } from 'lucide-react'
import { cn } from '@/lib/utils'

const Card = ({ card, onEdit, onDelete, onToggleComplete, className }) => {
  const [showMenu, setShowMenu] = useState(false)

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'urgent': return 'bg-red-500'
      case 'high': return 'bg-orange-500'
      case 'medium': return 'bg-yellow-500'
      case 'low': return 'bg-green-500'
      default: return 'bg-gray-400'
    }
  }

  const formatDate = (dateString) => {
    if (!dateString) return null
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
  }

  const isOverdue = (dateString) => {
    if (!dateString) return false
    return new Date(dateString) < new Date()
  }

  return (
    <div 
      className={cn(
        "bg-white rounded-lg shadow-sm border border-gray-200 p-3 mb-2 hover:shadow-md transition-shadow cursor-pointer group",
        card.data?.is_completed && "opacity-75",
        className
      )}
      onClick={() => onEdit && onEdit(card)}
    >
      {/* Priority indicator */}
      {card.data?.priority && card.data.priority !== 'medium' && (
        <div className={cn("w-full h-1 rounded-t-lg mb-2", getPriorityColor(card.data.priority))} />
      )}

      {/* Card header */}
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center gap-2 flex-1">
          <button
            onClick={(e) => {
              e.stopPropagation()
              onToggleComplete && onToggleComplete(card.id, !card.data?.is_completed)
            }}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            {card.data?.is_completed ? (
              <CheckCircle2 className="w-4 h-4 text-green-600" />
            ) : (
              <Circle className="w-4 h-4" />
            )}
          </button>
          <h3 className={cn(
            "font-medium text-gray-900 text-sm leading-tight flex-1",
            card.data?.is_completed && "line-through text-gray-500"
          )}>
            {card.data?.title || 'Untitled Card'}
          </h3>
        </div>
        
        <button
          onClick={(e) => {
            e.stopPropagation()
            setShowMenu(!showMenu)
          }}
          className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-gray-600 transition-all p-1 rounded"
        >
          <MoreHorizontal className="w-4 h-4" />
        </button>
      </div>

      {/* Card description */}
      {card.data?.description && (
        <p className="text-xs text-gray-600 mb-2 line-clamp-2">
          {card.data.description}
        </p>
      )}

      {/* Labels */}
      {card.data?.labels && card.data.labels.length > 0 && (
        <div className="flex flex-wrap gap-1 mb-2">
          {card.data.labels.map((label, index) => (
            <span
              key={index}
              className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
            >
              <Tag className="w-3 h-3" />
              {label}
            </span>
          ))}
        </div>
      )}

      {/* Card footer */}
      <div className="flex items-center justify-between text-xs text-gray-500">
        <div className="flex items-center gap-3">
          {/* Due date */}
          {card.data?.due_date && (
            <div className={cn(
              "flex items-center gap-1",
              isOverdue(card.data.due_date) && "text-red-600"
            )}>
              <Calendar className="w-3 h-3" />
              <span>{formatDate(card.data.due_date)}</span>
            </div>
          )}

          {/* Assigned user */}
          {card.data?.assigned_to && (
            <div className="flex items-center gap-1">
              <User className="w-3 h-3" />
              <span>{card.data.assigned_to}</span>
            </div>
          )}
        </div>

        {/* Created time */}
        <div className="flex items-center gap-1">
          <Clock className="w-3 h-3" />
          <span>{formatDate(card.created_at)}</span>
        </div>
      </div>

      {/* Dropdown menu */}
      {showMenu && (
        <div className="absolute right-0 top-8 bg-white border border-gray-200 rounded-lg shadow-lg py-1 z-10 min-w-32">
          <button
            onClick={(e) => {
              e.stopPropagation()
              onEdit && onEdit(card)
              setShowMenu(false)
            }}
            className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Edit Card
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              onDelete && onDelete(card.id)
              setShowMenu(false)
            }}
            className="w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50"
          >
            Delete Card
          </button>
        </div>
      )}
    </div>
  )
}

export default Card