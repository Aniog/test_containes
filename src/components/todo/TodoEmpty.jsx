import { ClipboardList } from 'lucide-react'

const TodoEmpty = ({ filter }) => {
  const messages = {
    All: { title: 'No tasks yet', sub: 'Add your first task above to get started.' },
    Active: { title: 'No active tasks', sub: 'All your tasks are completed!' },
    Completed: { title: 'No completed tasks', sub: 'Complete a task to see it here.' },
  }

  const { title, sub } = messages[filter] ?? messages.All

  return (
    <div className="flex flex-col items-center justify-center py-14 px-6 text-center">
      <ClipboardList className="w-12 h-12 text-slate-200 mb-4" />
      <p className="text-slate-500 font-medium text-sm">{title}</p>
      <p className="text-slate-400 text-xs mt-1">{sub}</p>
    </div>
  )
}

export default TodoEmpty
