import { CheckCircle2, Circle, List } from 'lucide-react'

const TodoFilter = ({ filter, onChange, counts }) => {
  const filters = [
    { key: 'all', label: 'All', icon: List, count: counts.all },
    { key: 'active', label: 'Active', icon: Circle, count: counts.active },
    { key: 'completed', label: 'Completed', icon: CheckCircle2, count: counts.completed },
  ]

  return (
    <div className="flex gap-1 bg-slate-100 p-1 rounded-xl">
      {filters.map(({ key, label, icon: Icon, count }) => (
        <button
          key={key}
          onClick={() => onChange(key)}
          className={`flex items-center gap-1.5 flex-1 justify-center px-3 py-2 rounded-lg text-xs font-medium transition cursor-pointer ${
            filter === key
              ? 'bg-white text-violet-700 shadow-sm'
              : 'text-slate-500 hover:text-slate-700'
          }`}
        >
          <Icon className="w-3.5 h-3.5" />
          {label}
          <span
            className={`ml-0.5 px-1.5 py-0.5 rounded-full text-xs font-semibold ${
              filter === key ? 'bg-violet-100 text-violet-600' : 'bg-slate-200 text-slate-500'
            }`}
          >
            {count}
          </span>
        </button>
      ))}
    </div>
  )
}

export default TodoFilter
