import { Trash2 } from 'lucide-react'

const TodoItem = ({ item, onToggle, onDelete, disabled }) => {
  const fields = item?.data ?? {}

  return (
    <li className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200 group transition-all duration-200 hover:border-slate-300">
      <input
        type="checkbox"
        checked={fields.completed ?? false}
        onChange={() => onToggle(item)}
        disabled={disabled}
        className="w-5 h-5 rounded accent-indigo-600 cursor-pointer flex-shrink-0 disabled:opacity-50"
      />
      <span
        className={`flex-1 text-base transition-all duration-200 ${
          fields.completed
            ? 'line-through text-slate-400'
            : 'text-slate-700'
        }`}
      >
        {fields.title}
      </span>
      <button
        onClick={() => onDelete(item.id)}
        disabled={disabled}
        aria-label="Delete task"
        className="opacity-0 group-hover:opacity-100 p-1.5 rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-50 transition-all duration-200 disabled:opacity-30"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </li>
  )
}

export default TodoItem
