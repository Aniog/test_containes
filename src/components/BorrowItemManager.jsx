import React, { useState } from 'react'
import { Plus, Edit2, Trash2, Book, Calendar, Check, X } from 'lucide-react'

const BorrowItemManager = ({ items = [], onItemsChange }) => {
  const [showForm, setShowForm] = useState(false)
  const [editingIndex, setEditingIndex] = useState(null)
  const [formData, setFormData] = useState({
    book_title: '',
    book_author: '',
    book_isbn: '',
    borrow_date: '',
    due_date: '',
    return_date: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const newItem = {
      ...formData,
      // 确保日期格式正确
      borrow_date: formData.borrow_date,
      due_date: formData.due_date,
      return_date: formData.return_date || null
    }

    let updatedItems
    if (editingIndex !== null) {
      // 编辑现有条目
      updatedItems = [...items]
      updatedItems[editingIndex] = newItem
    } else {
      // 添加新条目
      updatedItems = [...items, newItem]
    }

    onItemsChange(updatedItems)
    resetForm()
  }

  const handleEdit = (index) => {
    const item = items[index]
    setFormData({
      book_title: item.book_title || '',
      book_author: item.book_author || '',
      book_isbn: item.book_isbn || '',
      borrow_date: item.borrow_date || '',
      due_date: item.due_date || '',
      return_date: item.return_date || ''
    })
    setEditingIndex(index)
    setShowForm(true)
  }

  const handleDelete = (index) => {
    if (confirm('确定要删除这个借阅条目吗？')) {
      const updatedItems = items.filter((_, i) => i !== index)
      onItemsChange(updatedItems)
    }
  }

  const handleReturn = (index) => {
    const today = new Date().toISOString().split('T')[0]
    const updatedItems = [...items]
    updatedItems[index] = {
      ...updatedItems[index],
      return_date: today
    }
    onItemsChange(updatedItems)
  }

  const resetForm = () => {
    setFormData({
      book_title: '',
      book_author: '',
      book_isbn: '',
      borrow_date: '',
      due_date: '',
      return_date: ''
    })
    setShowForm(false)
    setEditingIndex(null)
  }

  const isOverdue = (dueDate, returnDate) => {
    if (returnDate) return false // 已归还
    const today = new Date()
    const due = new Date(dueDate)
    return due < today
  }

  const getItemStatus = (item) => {
    if (item.return_date) {
      return { text: '已归还', color: 'bg-green-100 text-green-800' }
    } else if (isOverdue(item.due_date, item.return_date)) {
      return { text: '逾期', color: 'bg-red-100 text-red-800' }
    } else {
      return { text: '借阅中', color: 'bg-blue-100 text-blue-800' }
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
          <Book className="w-5 h-5 text-blue-600" />
          借阅条目管理 ({items.length} 本)
        </h3>
        <button
          onClick={() => {
            resetForm()
            setShowForm(true)
          }}
          className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700 flex items-center gap-1 text-sm transition-colors"
        >
          <Plus size={16} />
          添加书籍
        </button>
      </div>

      {/* 添加/编辑表单 */}
      {showForm && (
        <div className="bg-gray-50 p-4 rounded-lg border">
          <h4 className="text-md font-medium mb-3">
            {editingIndex !== null ? '编辑借阅条目' : '添加借阅条目'}
          </h4>
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  书籍标题 *
                </label>
                <input
                  type="text"
                  value={formData.book_title}
                  onChange={(e) => setFormData({...formData, book_title: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  作者 *
                </label>
                <input
                  type="text"
                  value={formData.book_author}
                  onChange={(e) => setFormData({...formData, book_author: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  ISBN号
                </label>
                <input
                  type="text"
                  value={formData.book_isbn}
                  onChange={(e) => setFormData({...formData, book_isbn: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  借出日期 *
                </label>
                <input
                  type="date"
                  value={formData.borrow_date}
                  onChange={(e) => setFormData({...formData, borrow_date: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  应还日期 *
                </label>
                <input
                  type="date"
                  value={formData.due_date}
                  onChange={(e) => setFormData({...formData, due_date: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                归还日期（可选）
              </label>
              <input
                type="date"
                value={formData.return_date}
                onChange={(e) => setFormData({...formData, return_date: e.target.value})}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
            </div>

            <div className="flex gap-2 pt-2">
              <button
                type="submit"
                className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700 text-sm transition-colors"
              >
                {editingIndex !== null ? '更新' : '添加'}
              </button>
              <button
                type="button"
                onClick={resetForm}
                className="bg-gray-500 text-white px-3 py-1 rounded-md hover:bg-gray-600 text-sm transition-colors"
              >
                取消
              </button>
            </div>
          </form>
        </div>
      )}

      {/* 借阅条目列表 */}
      <div className="space-y-2">
        {items.length === 0 ? (
          <div className="text-center py-8 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
            <Book className="w-12 h-12 text-gray-400 mx-auto mb-2" />
            <p className="text-gray-500">暂无借阅条目</p>
            <p className="text-gray-400 text-sm">点击上方按钮添加书籍</p>
          </div>
        ) : (
          items.map((item, index) => {
            const status = getItemStatus(item)
            return (
              <div key={index} className="bg-white p-4 rounded-lg border hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-medium text-gray-800">{item.book_title}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${status.color}`}>
                        {status.text}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">作者: {item.book_author}</p>
                    {item.book_isbn && (
                      <p className="text-sm text-gray-600 mb-2">ISBN: {item.book_isbn}</p>
                    )}
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>借出: {item.borrow_date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span className={isOverdue(item.due_date, item.return_date) ? 'text-red-600 font-medium' : ''}>
                          应还: {item.due_date}
                        </span>
                      </div>
                      {item.return_date && (
                        <div className="flex items-center gap-1">
                          <Check className="w-3 h-3 text-green-600" />
                          <span className="text-green-600">已还: {item.return_date}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-1 ml-4">
                    {!item.return_date && (
                      <button
                        onClick={() => handleReturn(index)}
                        className="p-1 text-green-600 hover:bg-green-50 rounded-md transition-colors"
                        title="标记为已归还"
                      >
                        <Check size={14} />
                      </button>
                    )}
                    <button
                      onClick={() => handleEdit(index)}
                      className="p-1 text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                      title="编辑"
                    >
                      <Edit2 size={14} />
                    </button>
                    <button
                      onClick={() => handleDelete(index)}
                      className="p-1 text-red-600 hover:bg-red-50 rounded-md transition-colors"
                      title="删除"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}

export default BorrowItemManager