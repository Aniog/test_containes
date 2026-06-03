import TodoItem from './TodoItem'
import { ClipboardList } from 'lucide-react'

const TABS = ['All', 'Active', 'Completed']

const TodoList = ({ todos, activeTab, onTabChange, onToggle, onDelete, onEdit, onClearCompleted }) => {
  const completedCount = todos.filter((t) => t.data?.completed).length
  const activeCount = todos.filter((t) => !t.data?.completed).length

  const filtered = todos.filter((todo) => {
    if (activeTab === 'Active') return !todo.data?.completed
    if (activeTab === 'Completed') return todo.data?.completed
    return true
  })

  return (
    <div className="flex flex-col gap-4">
      {/* Tab bar */}
      <div className="flex items-center justify-between border-b border-slate-200">
        <div className="flex">
          {TABS.map((tab) => (
            <a
              key={tab}
              href={`#${tab}`}
              onClick={(e) => {
                e.preventDefault()
                onTabChange(tab)
              }}
              className={`px-4 py-2.5 text-sm font-medium border-b-2 transition-colors ${
                activeTab === tab
                  ? 'border-indigo-600 text-indigo-600'
                  : 'border-transparent text-slate-500 hover:text-slate-700'
              }`}
            >
              {tab}
            </a>
          ))}
        </div>
        {completedCount > 0 && (
          <button
            onClick={onClearCompleted}
            className="text-xs text-slate-400 hover:text-red-500 transition-colors pb-2"
          >
            Clear completed ({completedCount})
          </button>
        )}
      </div>

      {/* List */}
      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-12 text-slate-400 gap-3">
          <ClipboardList className="w-10 h-10 opacity-40" />
          <p className="text-sm">
            {activeTab === 'Completed'
              ? 'No completed tasks yet'
              : activeTab === 'Active'
              ? 'No active tasks — great job!'
              : 'No todos yet. Add one above!'}
          </p>
        </div>
      ) : (
        <ul className="flex flex-col gap-2">
          {filtered.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={onToggle}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          ))}
        </ul>
      )}

      {/* Footer count */}
      {todos.length > 0 && (
        <p className="text-xs text-slate-400 text-center">
          {activeCount} item{activeCount !== 1 ? 's' : ''} left
        </p>
      )}
    </div>
  )
}

export default TodoList
