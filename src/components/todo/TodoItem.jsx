import React, { useState } from 'react';
import { Check, Edit2, Trash2, Calendar, AlertCircle } from 'lucide-react';
import { format, parseISO } from 'date-fns';

const TodoItem = ({ todo, onToggle, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title);
  const [editDescription, setEditDescription] = useState(todo.description || '');
  const [editPriority, setEditPriority] = useState(todo.priority);
  const [editDueDate, setEditDueDate] = useState(todo.due_date || '');

  const handleSaveEdit = () => {
    onUpdate(todo.id, {
      title: editTitle.trim(),
      description: editDescription.trim(),
      priority: editPriority,
      due_date: editDueDate || null
    });
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setEditTitle(todo.title);
    setEditDescription(todo.description || '');
    setEditPriority(todo.priority);
    setEditDueDate(todo.due_date || '');
    setIsEditing(false);
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'text-red-600 bg-red-100';
      case 'medium':
        return 'text-yellow-600 bg-yellow-100';
      case 'low':
        return 'text-slate-600 bg-slate-100';
      default:
        return 'text-slate-600 bg-slate-100';
    }
  };

  const getPriorityText = (priority) => {
    switch (priority) {
      case 'high':
        return '高';
      case 'medium':
        return '中';
      case 'low':
        return '低';
      default:
        return '中';
    }
  };

  const isOverdue = todo.due_date && !todo.completed && new Date(todo.due_date) < new Date();

  const formatDate = (dateString) => {
    try {
      const date = parseISO(dateString);
      return format(date, 'MM月dd日');
    } catch (error) {
      return dateString;
    }
  };

  return (
    <div className={`bg-white rounded-xl shadow-sm border transition-all duration-200 hover:shadow-md ${
      todo.completed ? 'border-green-200 bg-green-50/30' : 'border-slate-100'
    }`}>
      <div className="p-6">
        {isEditing ? (
          // 编辑模式
          <div className="space-y-4">
            <input
              type="text"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              className="w-full px-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-sky-300"
              placeholder="任务标题"
            />
            <textarea
              value={editDescription}
              onChange={(e) => setEditDescription(e.target.value)}
              className="w-full px-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-sky-300 resize-none"
              placeholder="任务描述（可选）"
              rows="2"
            />
            <div className="flex gap-4">
              <select
                value={editPriority}
                onChange={(e) => setEditPriority(e.target.value)}
                className="px-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-300"
              >
                <option value="low">低优先级</option>
                <option value="medium">中优先级</option>
                <option value="high">高优先级</option>
              </select>
              <input
                type="date"
                value={editDueDate}
                onChange={(e) => setEditDueDate(e.target.value)}
                className="px-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-300"
              />
            </div>
            <div className="flex gap-2 justify-end">
              <button
                onClick={handleCancelEdit}
                className="px-4 py-2 text-slate-600 hover:text-slate-800 transition-colors"
              >
                取消
              </button>
              <button
                onClick={handleSaveEdit}
                disabled={!editTitle.trim()}
                className="px-4 py-2 bg-sky-500 hover:bg-sky-600 disabled:bg-slate-300 text-white rounded-lg transition-colors"
              >
                保存
              </button>
            </div>
          </div>
        ) : (
          // 显示模式
          <div className="flex items-start gap-4">
            {/* 完成状态按钮 */}
            <button
              onClick={() => onToggle(todo.id)}
              className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                todo.completed
                  ? 'bg-green-500 border-green-500 text-white'
                  : 'border-slate-300 hover:border-sky-400'
              }`}
            >
              {todo.completed && <Check className="w-4 h-4" />}
            </button>

            {/* 内容区域 */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <h3 className={`font-medium text-lg leading-tight ${
                    todo.completed 
                      ? 'text-slate-500 line-through' 
                      : 'text-slate-800'
                  }`}>
                    {todo.title}
                  </h3>
                  
                  {todo.description && (
                    <p className={`mt-1 text-sm leading-relaxed ${
                      todo.completed 
                        ? 'text-slate-400 line-through' 
                        : 'text-slate-600'
                    }`}>
                      {todo.description}
                    </p>
                  )}

                  {/* 元信息 */}
                  <div className="flex items-center gap-4 mt-3">
                    {/* 优先级标签 */}
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(todo.priority)}`}>
                      <AlertCircle className="w-3 h-3 mr-1" />
                      {getPriorityText(todo.priority)}优先级
                    </span>

                    {/* 截止日期 */}
                    {todo.due_date && (
                      <span className={`inline-flex items-center text-xs ${
                        isOverdue 
                          ? 'text-red-600' 
                          : todo.completed 
                            ? 'text-slate-400' 
                            : 'text-slate-500'
                      }`}>
                        <Calendar className="w-3 h-3 mr-1" />
                        {formatDate(todo.due_date)}
                        {isOverdue && ' (已逾期)'}
                      </span>
                    )}
                  </div>
                </div>

                {/* 操作按钮 */}
                <div className="flex items-center gap-2 flex-shrink-0">
                  <button
                    onClick={() => setIsEditing(true)}
                    className="p-2 text-slate-400 hover:text-sky-600 hover:bg-sky-50 rounded-lg transition-all duration-200"
                    title="编辑"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onDelete(todo.id)}
                    className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200"
                    title="删除"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoItem;