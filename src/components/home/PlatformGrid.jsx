import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const PLATFORMS = [
  {
    id: 'steam',
    name: 'Steam',
    description: 'PC gaming powerhouse with thousands of titles',
    color: 'from-[#1b2838] to-[#2a475e]',
    accent: '#66c0f4',
    icon: '🎮',
    deals: '2,400+',
  },
  {
    id: 'epic',
    name: 'Epic Games',
    description: 'Free games every week plus exclusive titles',
    color: 'from-gray-800 to-gray-900',
    accent: '#ffffff',
    icon: '⚡',
    deals: '800+',
  },
  {
    id: 'nintendo',
    name: 'Nintendo',
    description: 'Switch exclusives and beloved franchises',
    color: 'from-red-700 to-red-900',
    accent: '#ffffff',
    icon: '🎯',
    deals: '600+',
  },
  {
    id: 'playstation',
    name: 'PlayStation',
    description: 'PS5 blockbusters and PS Plus deals',
    color: 'from-blue-800 to-blue-950',
    accent: '#00b4d8',
    icon: '🎮',
    deals: '900+',
  },
  {
    id: 'xbox',
    name: 'Xbox',
    description: 'Game Pass and Xbox exclusive titles',
    color: 'from-green-800 to-green-950',
    accent: '#52b043',
    icon: '🟢',
    deals: '700+',
  },
]

export default function PlatformGrid() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Browse by Platform</h2>
          <p className="text-slate-500 mt-1">Find deals and news from your favorite store</p>
        </div>
        <Link
          to="/deals"
          className="hidden sm:flex items-center gap-1.5 text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors"
        >
          All Deals <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {PLATFORMS.map(platform => (
          <Link
            key={platform.id}
            to={`/deals?platform=${platform.id}`}
            className={`group relative bg-gradient-to-br ${platform.color} rounded-2xl p-5 border border-white/10 hover:border-white/25 transition-all hover:scale-105 hover:shadow-xl`}
          >
            <div className="text-3xl mb-3">{platform.icon}</div>
            <h3 className="text-white font-bold text-sm mb-1">{platform.name}</h3>
            <p className="text-gray-400 text-xs leading-snug mb-3 hidden sm:block">{platform.description}</p>
            <div className="text-xs font-semibold" style={{ color: platform.accent }}>
              {platform.deals} deals
            </div>
            <ArrowRight className="absolute bottom-4 right-4 w-4 h-4 text-white/30 group-hover:text-white/70 transition-colors" />
          </Link>
        ))}
      </div>
    </section>
  )
}
