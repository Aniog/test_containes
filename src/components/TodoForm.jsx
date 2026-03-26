import React, { useState, useEffect } from 'react'
import { Plus, X, Calendar, Tag } from 'lucide-react'

const TodoForm = ({ isOpen, onClose, onSubmit, editingItem = null }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    priority: 'medium',
    due_date: '',
    tags: ''
  })

  useEffect(() => {
    if (editingItem) {
      setFormData({
        title: editingItem.data?.title || '',
        description: editingItem.data?.description || '',
        priority: editingItem.data?.priority || 'medium',
        due_date: editingItem.data?.due_date || '',
        tags: editingItem.data?.tags ? editingItem.data.tags.join(', ') : ''
      })
    } else {
      setFormData({
        title: '',
        description: '',
        priority: 'medium',
        due_date: '',
        tags: ''
      })
    }
  }, [editingItem, isOpen])

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!formData.title.trim()) {
      alert('Please enter a task title')
      return
    }

    // Format the data according to schema
    const submitData = {
      title: formData.title.trim(),
      description: formData.description.trim(),
      priority: formData.priority,
      completed: editingItem?.data?.completed || false,
      due_date: formData.due_date || null,
      tags: formData.tags ? formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag) : []
    }

    onSubmit(submitData)
    onClose()
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-lg font-semibold text-gray-900">
            {editingItem ? 'Edit Task' : 'Add New Task'}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* Title */}
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
              Task Title *
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter task title..."
              required
            />
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              placeholder="Add more details..."
            />
          </div>

          {/* Priority */}
          <div>
            <label htmlFor="priority" className="block text-sm font-medium text-gray-700 mb-1">
              Priority
            </label>
            <select
              id="priority"
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>

          {/* Due Date */}
          <div>
            <label htmlFor="due_date" className="block text-sm font-medium text-gray-700 mb-1">
              <Calendar size={16} className="inline mr-1" />
              Due Date
            </label>
            <input
              type="date"
              id="due_date"
              name="due_date"
              value={formData.due_date}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Tags */}
          <div>
            <label htmlFor="tags" className="block text-sm font-medium text-gray-700 mb-1">
              <Tag size={16} className="inline mr-1" />
              Tags
            </label>
            <input
              type="text"
              id="tags"
              name="tags"
              value={formData.tags}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="work, personal, urgent (comma separated)"
            />
            <p className="text-xs text-gray-500 mt-1">Separate multiple tags with commas</p>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors flex items-center justify-center gap-2"
            >
              <Plus size={16} />
              {editingItem ? 'Update Task' : 'Add Task'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default TodoForm