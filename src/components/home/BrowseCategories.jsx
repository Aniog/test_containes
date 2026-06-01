import { Link } from 'react-router-dom';
import { EMOTIONS, LIFE_EVENTS } from '../../data/memories';

export default function BrowseCategories() {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Emotions */}
          <div>
            <p className="font-mono text-xs text-nebula-400 uppercase tracking-widest mb-3">
              Browse by Emotion
            </p>
            <h2 className="font-cinzel text-2xl md:text-3xl font-bold text-slate-100 mb-8">
              What Did They Feel?
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {EMOTIONS.map(emotion => (
                <Link
                  key={emotion.id}
                  to={`/explore?emotion=${emotion.id}`}
                  className="flex items-center gap-3 p-4 rounded-xl border border-slate-700/40 bg-space-800/50 hover:bg-space-700/60 transition-all duration-300 group"
                  style={{ borderColor: `${emotion.color}25` }}
                >
                  <span
                    className="text-lg flex-shrink-0 transition-transform duration-300 group-hover:scale-125"
                    style={{ color: emotion.color }}
                  >
                    {emotion.icon}
                  </span>
                  <span
                    className="font-cinzel text-sm font-semibold"
                    style={{ color: emotion.color }}
                  >
                    {emotion.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Life Events */}
          <div>
            <p className="font-mono text-xs text-star-400 uppercase tracking-widest mb-3">
              Browse by Life Event
            </p>
            <h2 className="font-cinzel text-2xl md:text-3xl font-bold text-slate-100 mb-8">
              What Happened?
            </h2>
            <div className="flex flex-col gap-2">
              {LIFE_EVENTS.map((event, i) => (
                <Link
                  key={event.id}
                  to={`/explore?lifeEvent=${event.id}`}
                  className="flex items-center justify-between px-4 py-3 rounded-xl border border-slate-700/30 bg-space-800/40 hover:bg-space-700/50 hover:border-nebula-600/40 transition-all duration-200 group"
                >
                  <span className="text-slate-300 text-sm group-hover:text-slate-100 transition-colors">
                    {event.label}
                  </span>
                  <span className="font-mono text-xs text-slate-600 group-hover:text-nebula-400 transition-colors">
                    →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
