import { useNavigate } from 'react-router-dom';
import { ERAS, EMOTIONS, LIFE_EVENTS } from '../../data/memories';

export default function BrowseCategories() {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-cosmos-navy relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(124,58,237,0.06)_0%,transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        {/* Eras */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-xs tracking-[0.4em] uppercase text-stardust-gold mb-2 font-inter">Browse by</p>
              <h2 className="font-cinzel text-2xl md:text-3xl text-memory-white">Historical Era</h2>
            </div>
            <button
              onClick={() => navigate('/explore?filter=era')}
              className="text-sm text-memory-muted hover:text-memory-white transition-colors font-inter hidden md:block"
            >
              View all →
            </button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
            {ERAS.map(era => (
              <button
                key={era.id}
                onClick={() => navigate(`/explore?era=${era.id}`)}
                className="group relative bg-cosmos-dark border border-cosmos-blue/30 rounded-xl p-4 text-left hover:border-opacity-80 transition-all duration-300 hover:-translate-y-0.5"
                style={{ '--era-color': era.color }}
              >
                <div
                  className="w-2 h-2 rounded-full mb-3"
                  style={{ backgroundColor: era.color, boxShadow: `0 0 8px ${era.color}` }}
                />
                <div className="font-cinzel text-xs text-memory-white mb-1 leading-tight">{era.label}</div>
                <div className="text-xs text-memory-muted/60 font-inter">{era.range}</div>
                <div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `radial-gradient(ellipse at top left, ${era.color}08, transparent 70%)` }}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Emotions */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-xs tracking-[0.4em] uppercase text-stardust-cyan mb-2 font-inter">Browse by</p>
              <h2 className="font-cinzel text-2xl md:text-3xl text-memory-white">Emotion</h2>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            {EMOTIONS.map(emotion => (
              <button
                key={emotion.id}
                onClick={() => navigate(`/explore?emotion=${emotion.id}`)}
                className="flex items-center gap-2 px-4 py-2.5 bg-cosmos-dark border border-cosmos-blue/30 rounded-full hover:border-opacity-80 transition-all duration-300 group"
                style={{ '--em-color': emotion.color }}
              >
                <span style={{ color: emotion.color }}>{emotion.icon}</span>
                <span className="text-sm text-memory-muted group-hover:text-memory-white transition-colors font-inter">
                  {emotion.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Life Events */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-xs tracking-[0.4em] uppercase text-nebula-pink mb-2 font-inter">Browse by</p>
              <h2 className="font-cinzel text-2xl md:text-3xl text-memory-white">Life Event</h2>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {LIFE_EVENTS.map(event => (
              <button
                key={event.id}
                onClick={() => navigate(`/explore?lifeEvent=${event.id}`)}
                className="flex items-center gap-3 bg-cosmos-dark border border-cosmos-blue/30 rounded-xl px-4 py-3 hover:border-nebula-violet/50 transition-all duration-300 group text-left"
              >
                <span className="text-xl">{event.icon}</span>
                <span className="text-sm text-memory-muted group-hover:text-memory-white transition-colors font-inter leading-tight">
                  {event.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
