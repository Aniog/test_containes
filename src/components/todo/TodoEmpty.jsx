import { ClipboardList } from 'lucide-react'

export default function TodoEmpty({ filter }) {
  const messages = {
    all: { title: '还没有任务', sub: '添加你的第一个任务开始吧 🌸' },
    active: { title: '没有进行中的任务', sub: '所有任务都已完成，太棒了！' },
    completed: { title: '还没有完成的任务', sub: '完成任务后它们会出现在这里' },
  }
  const { title, sub } = messages[filter] || messages.all

  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="w-16 h-16 rounded-full bg-violet-50 flex items-center justify-center mb-4">
        <ClipboardList className="w-8 h-8 text-violet-300" />
      </div>
      <p className="text-base font-semibold text-indigo-900">{title}</p>
      <p className="text-sm text-gray-400 mt-1">{sub}</p>
    </div>
  )
}
