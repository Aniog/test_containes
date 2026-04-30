import { Users, CalendarDays, Gamepad2 } from 'lucide-react'

const stats = [
  { icon: Users, label: '活跃玩家', value: '12,400+' },
  { icon: Gamepad2, label: '收录游戏', value: '3,200+' },
  { icon: CalendarDays, label: '本月活动', value: '86' },
]

export default function Hero() {
  return (
    <section className="bg-white pt-12 pb-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Left */}
          <div className="max-w-lg">
            <span className="inline-block text-xs font-semibold text-indigo-500 bg-indigo-50 px-3 py-1 rounded-full mb-4">
              桌游 · 社交 · 同好
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-3">
              找到你的<br />
              <span className="text-indigo-500">桌游伙伴</span>
            </h1>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              发现附近的桌游活动，结识志同道合的玩家，一起探索无限可能的桌游世界。
            </p>
            <div className="flex gap-3">
              <button className="bg-indigo-500 text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-indigo-600 transition-colors">
                立即加入
              </button>
              <button className="bg-gray-100 text-gray-700 text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-gray-200 transition-colors">
                浏览活动
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="flex gap-4 md:gap-6">
            {stats.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex flex-col items-center bg-gray-50 rounded-2xl px-5 py-4 min-w-[90px]">
                <Icon className="w-5 h-5 text-indigo-400 mb-2" />
                <span className="text-xl font-bold text-gray-900">{value}</span>
                <span className="text-xs text-gray-400 mt-0.5">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
