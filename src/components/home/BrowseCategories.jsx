import { Link } from 'react-router-dom'
import { EMOTIONS, ERAS, LIFE_EVENTS, REGIONS } from '../../data/memories'
import { Clock, MapPin, Heart, Milestone } from 'lucide-react'

const categories = [
  {
    icon: Clock,
    title: 'Browse by Era',
    description: 'Journey through time from ancient civilizations to the Migration Age.',
    param: 'era',
    items: ERAS.slice(0, 4),
    getLabel: (item) => item.label,
    getColor: (item) => item.color,
    accent: '#818cf8',
  },
  {
    icon: Heart,
    title: 'Browse by Emotion',
    description: 'Find memories that resonate with what you feel right now.',
    param: 'emotion',
    items: EMOTIONS.slice(0, 4),
    getLabel: (item) => item.label,
    getColor: (item) => item.color,
    accent: '#f472b6',
  },
  {
    icon: MapPin,
    title: 'Browse by Region',
    description: 'Explore the memories of every corner of our beloved Earth.',
    param: 'region',
    items: REGIONS.slice(0, 4).map(r => ({ id: r, label: r, color: '#34d399' })),
    getLabel: (item) => item.label,
    getColor: () => '#34d399',
    accent: '#34d399',
  },
  {
    icon: Milestone,
    title: 'Browse by Life Event',
    description: 'Discover how humanity has experienced the universal moments of life.',
    param: 'lifeEvent',
    items: LIFE_EVENTS.slice(0, 4),
    getLabel: (item) => item.label,
    getColor: () => '#fbbf24',
    accent: '#fbbf24',
  },
]

export default function BrowseCategories() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <p className="text-xs font-mono text-aurora-400 tracking-widest uppercase mb-3">
            Ways to Explore
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-white font-semibold mb-4">
            Find Your Way Through Memory
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Every memory is tagged across four dimensions. Choose your path into the archive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat) => {
            const Icon = cat.icon
            return (
              <div
                key={cat.title}
                className="glass-card glass-card-hover rounded-2xl p-6 md:p-8 group"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${cat.accent}20`, border: `1px solid ${cat.accent}30` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: cat.accent }} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-white text-xl mb-1">
                      {cat.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {cat.description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {cat.items.map((item) => (
                    <Link
                      key={item.id}
                      to={`/explore?${cat.param}=${item.id}`}
                      className="memory-tag transition-all duration-200 hover:scale-105"
                      style={{
                        background: `${cat.getColor(item)}18`,
                        border: `1px solid ${cat.getColor(item)}35`,
                        color: cat.getColor(item),
                      }}
                    >
                      {cat.getLabel(item)}
                    </Link>
                  ))}
                  <Link
                    to={`/explore?filter=${cat.param}`}
                    className="memory-tag text-slate-500 border border-slate-700/50 hover:text-slate-300 hover:border-slate-600 transition-all duration-200"
                  >
                    + more
                  </Link>
                </div>

                <Link
                  to={`/explore?filter=${cat.param}`}
                  className="text-sm font-medium transition-colors duration-200 flex items-center gap-1.5"
                  style={{ color: cat.accent }}
                >
                  Explore all →
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
