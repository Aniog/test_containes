import { ClipboardList } from 'lucide-react'

const TodoEmpty = ({ filter }) => {
  const messages = {
    all: { title: 'No tasks yet', subtitle: 'Add your first task above to get started.' },
    active: { title: 'No active tasks', subtitle: 'All your tasks are completed!' },
    completed: { title: 'No completed tasks', subtitle: 'Complete some tasks to see them here.' },
  }

  const { title, subtitle } = messages[filter] || messages.all

  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center mb-4">
        <ClipboardList className="w-7 h-7 text-slate-400" />
      </div>
      <p className="text-slate-600 font-semibold text-base">{title}</p>
      <p className="text-slate-400 text-sm mt-1">{subtitle}</p>
    </div>
  )
}

export default TodoEmpty
