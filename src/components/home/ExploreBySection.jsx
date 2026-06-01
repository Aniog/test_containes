import { Link } from 'react-router-dom';
import { ERAS, EMOTIONS, LIFE_EVENTS } from '../../data/memories';

export default function ExploreBySection() {
  return (
    <section className="py-24 px-6 relative">
      <div
        className="nebula-blob"
        style={{ width: 500, height: 500, background: '#4ecdc4', bottom: '0%', left: '-5%' }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-jade font-mono text-sm tracking-widest uppercase mb-3">
            Navigate the Archive
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-starlight mb-4">
            Find Your Way Through Time
          </h2>
          <p className="text-mist-light text-lg max-w-2xl mx-auto">
            Explore memories by the era they were lived, the emotion they carry,
            or the life event they mark.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* By Era */}
          <div className="rounded-2xl border border-white/8 p-6" style={{ background: 'rgba(13,21,48,0.6)' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gold/20 flex items-center justify-center text-gold text-xl">
                ⏳
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-starlight">By Era</h3>
                <p className="text-mist text-xs">Across 5,000 years of history</p>
              </div>
            </div>
            <div className="space-y-2">
              {ERAS.map((era) => (
                <Link
                  key={era.id}
                  to={`/explore?era=${era.id}`}
                  className="flex items-center justify-between p-3 rounded-xl border border-white/5 hover:border-white/15 hover:bg-white/3 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: era.color }}
                    />
                    <span className="text-starlight text-sm group-hover:text-aurora-glow transition-colors">
                      {era.label}
                    </span>
                  </div>
                  <span className="text-mist-dark text-xs font-mono">{era.range}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* By Emotion */}
          <div className="rounded-2xl border border-white/8 p-6" style={{ background: 'rgba(13,21,48,0.6)' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-rose/20 flex items-center justify-center text-rose text-xl">
                ◈
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-starlight">By Emotion</h3>
                <p className="text-mist text-xs">The full spectrum of human feeling</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {EMOTIONS.map((emotion) => (
                <Link
                  key={emotion.id}
                  to={`/explore?emotion=${emotion.id}`}
                  className="flex items-center gap-2 p-3 rounded-xl border border-white/5 hover:border-white/15 hover:bg-white/3 transition-all group"
                >
                  <span
                    className="w-3 h-3 rounded-full flex-shrink-0"
                    style={{ backgroundColor: emotion.color, boxShadow: `0 0 6px ${emotion.color}66` }}
                  />
                  <span className="text-starlight text-sm group-hover:text-aurora-glow transition-colors">
                    {emotion.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* By Life Event */}
          <div className="rounded-2xl border border-white/8 p-6" style={{ background: 'rgba(13,21,48,0.6)' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-jade/20 flex items-center justify-center text-jade text-xl">
                ◉
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-starlight">By Life Event</h3>
                <p className="text-mist text-xs">The milestones that define us</p>
              </div>
            </div>
            <div className="space-y-2">
              {LIFE_EVENTS.map((event) => (
                <Link
                  key={event.id}
                  to={`/explore?lifeEvent=${event.id}`}
                  className="flex items-center gap-3 p-3 rounded-xl border border-white/5 hover:border-white/15 hover:bg-white/3 transition-all group"
                >
                  <span className="text-lg">{event.icon}</span>
                  <span className="text-starlight text-sm group-hover:text-aurora-glow transition-colors">
                    {event.label}
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
