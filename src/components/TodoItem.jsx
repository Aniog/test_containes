import { useState } from 'react'
import { Trash2, Check, Pencil, X } from 'lucide-react'

const TodoItem = ({ todo, onToggle, onDelete, onEdit }) => {
  const { title, completed } = todo.data ?? {}
  const [editing, setEditing] = useState(false)
  const [editValue, setEditValue] = useState(title ?? '')

  const handleEditSubmit = (e) => {
    e.preventDefault()
    const trimmed = editValue.trim()
    if (!trimmed || trimmed === title) {
      setEditing(false)
      setEditValue(title ?? '')
      return
    }
    onEdit(todo.id, trimmed)
    setEditing(false)
  }

  const handleEditCancel = () => {
    setEditing(false)
    setEditValue(title ?? '')
  }

  return (
    <li className="flex items-center gap-3 rounded-lg border border-slate-100 bg-white px-4 py-3 shadow-sm group transition-all hover:border-slate-200">
      <button
        onClick={() => onToggle(todo)}
        aria-label={completed ? 'Mark as active' : 'Mark as completed'}
        className={`flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
          completed
            ? 'bg-emerald-500 border-emerald-500 text-white'
            : 'border-slate-300 hover:border-indigo-400'
        }`}
      >
        {completed && <Check className="w-3 h-3" strokeWidth={3} />}
      </button>

      {editing ? (
        <form onSubmit={handleEditSubmit} className="flex flex-1 gap-2">
          <input
            autoFocus
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            className="flex-1 rounded border border-indigo-300 px-2 py-1 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            className="text-indigo-600 hover:text-indigo-800 text-xs font-medium px-2"
          >
            Save
          </button>
          <button
            type="button"
            onClick={handleEditCancel}
            className="text-slate-400 hover:text-slate-600"
          >
            <X className="w-4 h-4" />
          </button>
        </form>
      ) : (
        <>
          <span
            onDoubleClick={() => setEditing(true)}
            className={`flex-1 text-sm select-none cursor-default ${
              completed ? 'line-through text-slate-400' : 'text-slate-800'
            }`}
          >
            {title}
          </span>
          <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={() => setEditing(true)}
              aria-label="Edit todo"
              className="p-1 rounded text-slate-400 hover:text-indigo-500 hover:bg-indigo-50 transition-colors"
            >
              <Pencil className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onDelete(todo.id)}
              aria-label="Delete todo"
              className="p-1 rounded text-slate-400 hover:text-red-500 hover:bg-red-50 transition-colors"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          </div>
        </>
      )}
    </li>
  )
}

export default TodoItem
