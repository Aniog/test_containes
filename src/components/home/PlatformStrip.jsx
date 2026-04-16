import { Link } from 'react-router-dom'

const platforms = [
  { id: 'steam', label: 'Steam', emoji: '🎮', color: 'from-[#1b2838] to-[#2a475e]', border: 'border-[#66c0f4]/20', text: 'text-[#66c0f4]' },
  { id: 'epic', label: 'Epic Games', emoji: '⚡', color: 'from-gray-900 to-gray-800', border: 'border-white/10', text: 'text-white' },
  { id: 'nintendo', label: 'Nintendo', emoji: '🕹️', color: 'from-red-900 to-red-800', border: 'border-red-500/20', text: 'text-red-300' },
  { id: 'playstation', label: 'PlayStation', emoji: '🎯', color: 'from-blue-900 to-blue-800', border: 'border-blue-500/20', text: 'text-blue-300' },
  { id: 'xbox', label: 'Xbox', emoji: '🟢', color: 'from-green-900 to-green-800', border: 'border-green-500/20', text: 'text-green-300' },
]

export default function PlatformStrip() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-center text-gray-400 text-sm font-semibold uppercase tracking-widest mb-6">
        Deals from all major platforms
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {platforms.map(({ id, label, emoji, color, border, text }) => (
          <Link
            key={id}
            to={`/deals?platform=${id}`}
            className={`group flex flex-col items-center gap-2 p-5 bg-gradient-to-br ${color} border ${border} rounded-xl hover:scale-105 transition-all hover:shadow-lg`}
          >
            <span className="text-3xl">{emoji}</span>
            <span className={`text-sm font-bold ${text}`}>{label}</span>
          </Link>
        ))}
      </div>
    </section>
  )
}
