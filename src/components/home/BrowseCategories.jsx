import { Link } from 'react-router-dom';
import { ERAS, EMOTIONS, LIFE_EVENTS } from '../../data/memories';

export default function BrowseCategories() {
  return (
    <section className="py-24 bg-space-navy border-y border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest text-aurora-teal mb-3">Browse By</p>
          <h2 className="font-display text-4xl md:text-5xl text-white font-light">
            Find Your Way Through Time
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* By Era */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-slate-500 mb-5 flex items-center gap-2">
              <span className="w-4 h-px bg-stardust-gold" />
              By Era
            </h3>
            <div className="space-y-2">
              {ERAS.map(era => (
                <Link
                  key={era.id}
                  to={`/explore?era=${era.id}`}
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors duration-200 group"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: era.color }} />
                    <span className="text-slate-300 text-sm group-hover:text-white transition-colors">{era.label}</span>
                  </div>
                  <span className="text-xs text-slate-600 group-hover:text-slate-400 transition-colors">{era.range}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* By Emotion */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-slate-500 mb-5 flex items-center gap-2">
              <span className="w-4 h-px bg-cosmic-violet" />
              By Emotion
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {EMOTIONS.map(emotion => (
                <Link
                  key={emotion.id}
                  to={`/explore?emotion=${emotion.id}`}
                  className="flex items-center gap-2 p-3 rounded-lg border border-slate-800 hover:border-slate-600 transition-all duration-200 group"
                  style={{ '--hover-color': emotion.color }}
                >
                  <span className="text-base">{emotion.icon}</span>
                  <span className="text-slate-300 text-sm group-hover:text-white transition-colors">{emotion.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* By Life Event */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-slate-500 mb-5 flex items-center gap-2">
              <span className="w-4 h-px bg-aurora-teal" />
              By Life Event
            </h3>
            <div className="space-y-2">
              {LIFE_EVENTS.map(event => (
                <Link
                  key={event.id}
                  to={`/explore?lifeEvent=${event.id}`}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors duration-200 group"
                >
                  <span className="text-aurora-teal text-xs">◈</span>
                  <span className="text-slate-300 text-sm group-hover:text-white transition-colors">{event.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
