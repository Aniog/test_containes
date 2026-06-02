import { Trash2 } from 'lucide-react'

const TodoItem = ({ item, onToggle, onDelete }) => {
  const fields = item?.data ?? {}

  return (
    <li className="flex items-center gap-3 px-4 py-3 hover:bg-slate-50 transition-colors duration-150 group">
      <input
        type="checkbox"
        checked={fields.completed ?? false}
        onChange={() => onToggle(item)}
        className="w-4 h-4 rounded accent-indigo-600 cursor-pointer flex-shrink-0"
        aria-label={`Mark "${fields.title}" as ${fields.completed ? 'incomplete' : 'complete'}`}
      />
      <span
        className={`flex-1 text-sm leading-relaxed break-words ${
          fields.completed
            ? 'line-through text-slate-400'
            : 'text-slate-700'
        }`}
      >
        {fields.title}
      </span>
      <button
        onClick={() => onDelete(item.id)}
        className="opacity-0 group-hover:opacity-100 flex-shrink-0 p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all duration-150"
        aria-label={`Delete "${fields.title}"`}
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </li>
  )
}

export default TodoItem
