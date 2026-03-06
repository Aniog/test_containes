import React, { useState } from 'react'
import { Check, Edit2, Trash2, Calendar, AlertCircle } from 'lucide-react'

const TodoItem = ({ todo, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editData, setEditData] = useState({
    title: todo.title,
    description: todo.description || '',
    priority: todo.priority,
    due_date: todo.due_date || ''
  })

  const handleToggleComplete = () => {
    onUpdate(todo.id, { ...todo, completed: !todo.completed })
  }

  const handleEdit = () => {
    setIsEditing(true)
  }

  const handleSave = () => {
    onUpdate(todo.id, { ...todo, ...editData })
    setIsEditing(false)
  }

  const handleCancel = () => {
    setEditData({
      title: todo.title,
      description: todo.description || '',
      priority: todo.priority,
      due_date: todo.due_date || ''
    })
    setIsEditing(false)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setEditData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'text-red-600 bg-red-50 border-red-200'
      case 'medium': return 'text-yellow-600 bg-yellow-50 border-yellow-200'
      case 'low': return 'text-green-600 bg-green-50 border-green-200'
      default: return 'text-gray-600 bg-gray-50 border-gray-200'
    }
  }

  const isOverdue = todo.due_date && new Date(todo.due_date) < new Date() && !todo.completed

  if (isEditing) {
    return (
      <div className="bg-white p-4 rounded-lg shadow-sm border border-blue-200">
        <div className="space-y-3">
          <input
            type="text"
            name="title"
            value={editData.title}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          
          <textarea
            name="description"
            value={editData.description}
            onChange={handleChange}
            placeholder="Description (optional)"
            rows="2"
            className="w-full px-3 py-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          />

          <div className="flex gap-3 flex-wrap">
            <select
              name="priority"
              value={editData.priority}
              onChange={handleChange}
              className="px-3 py-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
            
            <input
              type="date"
              name="due_date"
              value={editData.due_date}
              onChange={handleChange}
              className="px-3 py-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex gap-2">
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              Save
            </button>
            <button
              onClick={handleCancel}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`bg-white p-4 rounded-lg shadow-sm border transition-all ${
      todo.completed ? 'opacity-75 bg-gray-50' : ''
    } ${isOverdue ? 'border-red-200' : 'border-gray-200'}`}>
      <div className="flex items-start gap-3">
        <button
          onClick={handleToggleComplete}
          className={`mt-1 w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
            todo.completed
              ? 'bg-green-500 border-green-500 text-white'
              : 'border-gray-300 hover:border-green-500'
          }`}
        >
          {todo.completed && <Check className="w-3 h-3" />}
        </button>

        <div className="flex-1 min-w-0">
          <h3 className={`font-medium text-gray-900 ${
            todo.completed ? 'line-through text-gray-500' : ''
          }`}>
            {todo.title}
          </h3>
          
          {todo.description && (
            <p className={`text-sm text-gray-600 mt-1 ${
              todo.completed ? 'line-through' : ''
            }`}>
              {todo.description}
            </p>
          )}

          <div className="flex items-center gap-3 mt-2 flex-wrap">
            <span className={`px-2 py-1 text-xs font-medium rounded border ${getPriorityColor(todo.priority)}`}>
              {todo.priority} priority
            </span>
            
            {todo.due_date && (
              <div className={`flex items-center gap-1 text-xs ${
                isOverdue ? 'text-red-600' : 'text-gray-500'
              }`}>
                {isOverdue && <AlertCircle className="w-3 h-3" />}
                <Calendar className="w-3 h-3" />
                <span>{new Date(todo.due_date).toLocaleDateString()}</span>
              </div>
            )}
          </div>
        </div>

        <div className="flex gap-1">
          <button
            onClick={handleEdit}
            className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors"
          >
            <Edit2 className="w-4 h-4" />
          </button>
          <button
            onClick={() => onDelete(todo.id)}
            className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded transition-colors"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default TodoItem