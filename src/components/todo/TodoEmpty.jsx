import { CheckCircle2 } from 'lucide-react'

const TodoEmpty = ({ filter }) => {
  const messages = {
    all: { icon: '📝', text: 'No tasks yet. Add one above to get started!' },
    active: { icon: '✅', text: 'No active tasks. Great job!' },
    completed: { icon: '🎉', text: 'No completed tasks yet.' },
  }

  const { icon, text } = messages[filter] ?? messages.all

  return (
    <div className="flex flex-col items-center justify-center py-12 text-slate-400">
      <span className="text-4xl mb-3">{icon}</span>
      <p className="text-sm">{text}</p>
    </div>
  )
}

export default TodoEmpty
