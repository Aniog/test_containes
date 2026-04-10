import { Trash2 } from 'lucide-react'

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100 group transition-all hover:shadow-md">
      <input
        type="checkbox"
        checked={todo.data.completed}
        onChange={() => onToggle(todo)}
        className="w-5 h-5 rounded accent-indigo-500 cursor-pointer flex-shrink-0"
        aria-label={`Mark "${todo.data.title}" as ${todo.data.completed ? 'incomplete' : 'complete'}`}
      />
      <span
        className={`flex-1 text-base transition-all ${
          todo.data.completed ? 'line-through text-gray-400' : 'text-gray-700'
        }`}
      >
        {todo.data.title}
      </span>
      <button
        onClick={() => onDelete(todo.id)}
        className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-500 transition-all p-1 rounded"
        aria-label={`Delete "${todo.data.title}"`}
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </div>
  )
}

export default TodoItem
