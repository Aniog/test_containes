import TodoItem from './TodoItem.jsx'

export default function TodoList({ todos, loading, onToggle, onDelete, onEdit, filter }) {
  if (loading) {
    return (
      <div className="space-y-3">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="bg-white rounded-xl border border-slate-200 shadow-sm p-4 animate-pulse"
          >
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-slate-200" />
              <div className="flex-1 h-4 bg-slate-200 rounded" />
              <div className="w-12 h-4 bg-slate-200 rounded" />
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (todos.length === 0) {
    const emptyMessages = {
      all: { icon: '📋', text: '还没有待办事项', sub: '点击上方输入框添加第一个任务吧！' },
      active: { icon: '🎉', text: '没有待完成的任务', sub: '所有任务都已完成，干得漂亮！' },
      completed: { icon: '📝', text: '还没有已完成的任务', sub: '完成任务后会显示在这里。' },
    }
    const msg = emptyMessages[filter] || emptyMessages.all

    return (
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-12 text-center">
        <div className="text-4xl mb-3">{msg.icon}</div>
        <p className="text-slate-700 font-medium">{msg.text}</p>
        <p className="text-sm text-slate-400 mt-1">{msg.sub}</p>
      </div>
    )
  }

  return (
    <div className="space-y-2">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  )
}
