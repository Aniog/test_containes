import { Link } from 'react-router-dom';
import { ERAS, EMOTIONS, LIFE_EVENTS } from '../../data/memories';

function formatCount(n) {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + 'M';
  if (n >= 1_000) return (n / 1_000).toFixed(0) + 'K';
  return n.toString();
}

function CategoryCard({ to, color, icon, label, count, description }) {
  return (
    <Link
      to={to}
      className="group relative bg-space-navy/80 border border-slate-700/40 rounded-2xl p-5 hover:border-opacity-80 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg overflow-hidden"
      style={{ '--hover-color': color }}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
        style={{ background: `radial-gradient(ellipse at top left, ${color}12 0%, transparent 60%)` }}
      />
      <div className="relative">
        <div className="flex items-start justify-between mb-3">
          <span className="text-2xl" style={{ color }}>{icon}</span>
          <span className="text-xs text-slate-500 bg-slate-800/60 px-2 py-0.5 rounded-full">
            {formatCount(count)}
          </span>
        </div>
        <h3 className="font-semibold text-white text-sm mb-1">{label}</h3>
        {description && <p className="text-xs text-slate-400 leading-relaxed">{description}</p>}
      </div>
    </Link>
  );
}

export default function BrowseCategories() {
  return (
    <section className="py-24 px-4 bg-space-black relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 80% 50%, rgba(167,139,250,0.04) 0%, transparent 60%)',
        }}
      />
      <div className="max-w-7xl mx-auto relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-aurora-teal text-xs font-medium tracking-widest uppercase mb-3">Browse the Archive</p>
          <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-white mb-4">
            Find Your Way Through Time
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Navigate 142 million memories across eras, emotions, life events, and the places that shaped humanity.
          </p>
        </div>

        {/* Eras */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-5">
            <h3 className="font-cinzel text-lg font-semibold text-white flex items-center gap-2">
              <span className="text-stardust-gold">◈</span> By Era
            </h3>
            <Link to="/explore/era" className="text-xs text-nebula-blue hover:text-blue-300 transition-colors">
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {ERAS.map((era) => (
              <CategoryCard
                key={era.id}
                to={`/explore/era/${era.id}`}
                color={era.color}
                icon="◈"
                label={era.label}
                count={era.count}
                description={era.range}
              />
            ))}
          </div>
        </div>

        {/* Emotions */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-5">
            <h3 className="font-cinzel text-lg font-semibold text-white flex items-center gap-2">
              <span className="text-memory-rose">♡</span> By Emotion
            </h3>
            <Link to="/explore/emotion" className="text-xs text-nebula-blue hover:text-blue-300 transition-colors">
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {EMOTIONS.map((emotion) => (
              <CategoryCard
                key={emotion.id}
                to={`/explore/emotion/${emotion.id}`}
                color={emotion.color}
                icon={emotion.icon}
                label={emotion.label}
                count={emotion.count}
              />
            ))}
          </div>
        </div>

        {/* Life Events */}
        <div>
          <div className="flex items-center justify-between mb-5">
            <h3 className="font-cinzel text-lg font-semibold text-white flex items-center gap-2">
              <span className="text-aurora-teal">★</span> By Life Event
            </h3>
            <Link to="/explore/event" className="text-xs text-nebula-blue hover:text-blue-300 transition-colors">
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {LIFE_EVENTS.map((event) => (
              <CategoryCard
                key={event.id}
                to={`/explore/event/${event.id}`}
                color={event.color}
                icon={event.icon}
                label={event.label}
                count={event.count}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
