import { useNavigate } from 'react-router-dom';
import { ERAS, EMOTIONS, LIFE_EVENTS, REGIONS } from '../../data/memories';

const categories = [
  {
    title: 'By Era',
    description: 'Journey through 12,000 years of human history',
    items: ERAS,
    filterKey: 'era',
    colorKey: 'color',
  },
  {
    title: 'By Emotion',
    description: 'Find memories that match what you feel',
    items: EMOTIONS,
    filterKey: 'emotion',
    colorKey: 'color',
  },
];

export default function BrowseCategories() {
  const navigate = useNavigate();

  return (
    <section className="py-24 px-4 bg-space-navy">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-cosmic-teal text-xs font-mono uppercase tracking-widest mb-4">
            <span className="w-8 h-px bg-cosmic-teal/50" />
            Browse the Archive
            <span className="w-8 h-px bg-cosmic-teal/50" />
          </div>
          <h2 className="font-space text-3xl md:text-4xl font-bold text-star-white mb-4">
            Find Your Way Through Memory
          </h2>
          <p className="text-star-dim max-w-xl mx-auto text-base leading-relaxed">
            Navigate 4.7 million memories by the dimensions that matter most — when, where, how it felt, and what it meant.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {categories.map(cat => (
            <div key={cat.title} className="bg-space-midnight border border-white/10 rounded-2xl p-6">
              <h3 className="font-space text-xl font-semibold text-star-white mb-1">{cat.title}</h3>
              <p className="text-star-dim text-sm mb-5">{cat.description}</p>
              <div className="flex flex-wrap gap-2">
                {cat.items.map(item => (
                  <button
                    key={item.id}
                    onClick={() => navigate(`/explore?${cat.filterKey}=${item.id}`)}
                    className="flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full border transition-all duration-200 hover:scale-105"
                    style={{
                      color: item.color,
                      borderColor: `${item.color}44`,
                      backgroundColor: `${item.color}15`,
                    }}
                  >
                    {item.icon && <span>{item.icon}</span>}
                    {item.label}
                    {item.range && <span className="text-xs opacity-60 ml-1">{item.range}</span>}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Life events and regions row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-space-midnight border border-white/10 rounded-2xl p-6">
            <h3 className="font-space text-xl font-semibold text-star-white mb-1">By Life Event</h3>
            <p className="text-star-dim text-sm mb-5">The universal milestones of a human life</p>
            <div className="flex flex-wrap gap-2">
              {LIFE_EVENTS.map(event => (
                <button
                  key={event.id}
                  onClick={() => navigate(`/explore?lifeEvent=${event.id}`)}
                  className="flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full border border-cosmic-amber/30 bg-cosmic-amber/10 text-cosmic-amber hover:bg-cosmic-amber/20 transition-all duration-200"
                >
                  <span>{event.icon}</span>
                  {event.label}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-space-midnight border border-white/10 rounded-2xl p-6">
            <h3 className="font-space text-xl font-semibold text-star-white mb-1">By Region</h3>
            <p className="text-star-dim text-sm mb-5">Memories from every corner of Earth — and beyond</p>
            <div className="flex flex-wrap gap-2">
              {REGIONS.map(region => (
                <button
                  key={region}
                  onClick={() => navigate(`/explore?region=${encodeURIComponent(region)}`)}
                  className="text-sm px-3 py-1.5 rounded-full border border-cosmic-teal/30 bg-cosmic-teal/10 text-cosmic-teal hover:bg-cosmic-teal/20 transition-all duration-200"
                >
                  {region}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
