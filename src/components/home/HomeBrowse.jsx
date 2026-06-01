import { Link } from 'react-router-dom';
import { ERAS, EMOTIONS, LIFE_EVENTS, LOCATIONS } from '@/data/memories';
import { Clock, Globe, Heart, Sparkles } from 'lucide-react';

const categories = [
  {
    icon: Clock,
    label: 'By Era',
    description: 'Journey through time from ancient civilizations to the near future.',
    items: ERAS,
    color: 'text-stardust-300',
    bg: 'bg-stardust-500/10',
    border: 'border-stardust-500/20',
    filter: 'era',
  },
  {
    icon: Globe,
    label: 'By Location',
    description: 'Explore memories from every corner of the Earth and beyond.',
    items: LOCATIONS,
    color: 'text-memory-teal',
    bg: 'bg-memory-teal/10',
    border: 'border-memory-teal/20',
    filter: 'location',
  },
  {
    icon: Heart,
    label: 'By Emotion',
    description: 'Find memories that resonate with what you feel right now.',
    items: EMOTIONS,
    color: 'text-memory-pink',
    bg: 'bg-memory-pink/10',
    border: 'border-memory-pink/20',
    filter: 'emotion',
  },
  {
    icon: Sparkles,
    label: 'By Life Event',
    description: 'Discover how others have lived through the same moments.',
    items: LIFE_EVENTS,
    color: 'text-aurora-300',
    bg: 'bg-aurora-500/10',
    border: 'border-aurora-500/20',
    filter: 'lifeEvent',
  },
];

export default function HomeBrowse() {
  return (
    <section className="bg-cosmos-900 py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-mono text-xs text-aurora-400 uppercase tracking-widest mb-3">
            Browse the Archive
          </p>
          <h2 className="font-cinzel text-3xl md:text-4xl text-text-primary font-semibold mb-4">
            Find Your Connection
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            Every memory is indexed across four dimensions. Choose your path into the archive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map(cat => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.label}
                className={`rounded-2xl p-6 border ${cat.border} ${cat.bg} backdrop-blur-sm hover:scale-[1.02] transition-transform duration-300 cursor-pointer group`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${cat.bg} border ${cat.border}`}>
                  <Icon className={`w-5 h-5 ${cat.color}`} />
                </div>
                <h3 className={`font-cinzel text-lg font-semibold mb-2 ${cat.color}`}>
                  {cat.label}
                </h3>
                <p className="text-text-muted text-sm mb-4 leading-relaxed">
                  {cat.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {cat.items.slice(0, 4).map(item => (
                    <Link
                      key={item}
                      to={`/explore?${cat.filter}=${encodeURIComponent(item)}`}
                      className={`font-mono text-xs px-2.5 py-1 rounded-full border ${cat.border} ${cat.color} hover:bg-white/5 transition-colors`}
                    >
                      {item}
                    </Link>
                  ))}
                  {cat.items.length > 4 && (
                    <Link
                      to={`/explore`}
                      className="font-mono text-xs px-2.5 py-1 rounded-full border border-cosmos-600 text-text-muted hover:text-text-secondary transition-colors"
                    >
                      +{cat.items.length - 4} more
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
