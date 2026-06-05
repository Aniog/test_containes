import { ClipboardList } from 'lucide-react'

const TodoEmpty = ({ filter }) => {
  const messages = {
    all: { title: 'No tasks yet', sub: 'Add your first task above to get started.' },
    active: { title: 'No active tasks', sub: 'All your tasks are completed!' },
    completed: { title: 'No completed tasks', sub: 'Complete some tasks to see them here.' },
  }

  const { title, sub } = messages[filter] ?? messages.all

  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <ClipboardList className="w-12 h-12 text-slate-300 mb-3" />
      <p className="text-slate-500 font-medium">{title}</p>
      <p className="text-slate-400 text-sm mt-1">{sub}</p>
    </div>
  )
}

export default TodoEmpty
