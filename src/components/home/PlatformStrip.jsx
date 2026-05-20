import { Link } from 'react-router-dom'

const PLATFORMS = [
  { id: 'steam', label: 'Steam', icon: '🎮', desc: 'PC Gaming' },
  { id: 'epic', label: 'Epic Games', icon: '⚡', desc: 'Free Games Weekly' },
  { id: 'nintendo', label: 'Nintendo', icon: '🕹️', desc: 'Switch 2' },
  { id: 'playstation', label: 'PlayStation', icon: '🎯', desc: 'PS5 Exclusives' },
  { id: 'xbox', label: 'Xbox', icon: '🟢', desc: 'Game Pass' },
]

export default function PlatformStrip() {
  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
        {PLATFORMS.map((p) => (
          <Link
            key={p.id}
            to={`/deals?platform=${p.id}`}
            className="group flex flex-col items-center gap-2 bg-[#1a1a24] border border-[#2d2d3d] rounded-xl p-4 hover:border-violet-500/50 hover:bg-[#22222f] transition-all duration-200 text-center"
          >
            <span className="text-3xl">{p.icon}</span>
            <div>
              <div className="text-slate-100 font-semibold text-sm group-hover:text-violet-300 transition-colors">
                {p.label}
              </div>
              <div className="text-slate-600 text-xs mt-0.5">{p.desc}</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
