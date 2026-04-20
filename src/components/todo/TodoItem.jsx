import React, { useState, useRef, useEffect } from 'react'
import { Trash2, Check, Pencil, X } from 'lucide-react'

export default function TodoItem({ item, onToggle, onDelete, onEdit }) {
  const { title, completed } = item.data ?? {}
  const [editing, setEditing] = useState(false)
  const [draft, setDraft] = useState(title)
  const [saving, setSaving] = useState(false)
  const inputRef = useRef(null)

  useEffect(() => {
    if (editing) {
      inputRef.current?.focus()
      inputRef.current?.select()
    }
  }, [editing])

  const enterEdit = () => {
    setDraft(title)
    setEditing(true)
  }

  const cancelEdit = () => {
    setDraft(title)
    setEditing(false)
  }

  const approveEdit = async () => {
    const trimmed = draft.trim()
    if (!trimmed) return
    if (trimmed === title) { setEditing(false); return }
    setSaving(true)
    try {
      await onEdit(item, trimmed)
      setEditing(false)
    } finally {
      setSaving(false)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') approveEdit()
    if (e.key === 'Escape') cancelEdit()
  }

  if (editing) {
    return (
      <li className="flex items-center gap-2 px-4 py-2 bg-indigo-50 border-l-4 border-indigo-400">
        <input
          ref={inputRef}
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={saving}
          placeholder="Enter a value…"
          className="flex-1 text-sm text-gray-800 bg-white border border-indigo-300 rounded-lg px-3 py-1.5 outline-none focus:ring-2 focus:ring-indigo-400 placeholder-gray-400"
        />
        <button
          onClick={approveEdit}
          disabled={saving || !draft.trim()}
          aria-label="Approve edit"
          className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-indigo-600 text-white text-xs font-semibold hover:bg-indigo-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        >
          <Check className="w-3.5 h-3.5" strokeWidth={3} />
          Save
        </button>
        <button
          onClick={cancelEdit}
          disabled={saving}
          aria-label="Cancel edit"
          className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-gray-100 text-gray-600 text-xs font-semibold hover:bg-gray-200 transition-colors"
        >
          <X className="w-3.5 h-3.5" />
          Cancel
        </button>
      </li>
    )
  }

  return (
    <li className="flex items-center gap-3 px-4 py-3 group hover:bg-gray-50 transition-colors">
      <button
        onClick={() => onToggle(item)}
        aria-label={completed ? 'Mark as incomplete' : 'Mark as complete'}
        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${
          completed
            ? 'bg-indigo-500 border-indigo-500'
            : 'border-gray-300 hover:border-indigo-400'
        }`}
      >
        {completed && <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />}
      </button>

      <span
        onDoubleClick={enterEdit}
        title="Double-click to edit"
        className={`flex-1 text-sm leading-relaxed break-words cursor-text select-none ${
          completed ? 'line-through text-gray-400' : 'text-gray-700'
        }`}
      >
        {title}
      </span>

      <button
        onClick={enterEdit}
        aria-label="Edit todo"
        className="w-7 h-7 flex items-center justify-center rounded-md text-gray-400 hover:text-indigo-500 hover:bg-indigo-50 transition-all flex-shrink-0 opacity-0 group-hover:opacity-100"
      >
        <Pencil className="w-3.5 h-3.5" />
      </button>

      <button
        onClick={() => onDelete(item.id)}
        aria-label="Delete todo"
        className="w-7 h-7 flex items-center justify-center rounded-md text-gray-400 hover:text-red-500 hover:bg-red-50 transition-all flex-shrink-0 opacity-0 group-hover:opacity-100"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </li>
  )
}
