import { ERAS, STATS } from '../data/memories';
import { formatNumber } from '../lib/utils';

const TIMELINE_EVENTS = [
  { year: '2051', title: 'Archive Founded', desc: 'The Mnemosyne Initiative is established by the UN Migration Council with a mandate to preserve human memory before departure.' },
  { year: '2053', title: 'First Million', desc: 'One million memories submitted in the first two years, spanning 147 countries and 312 languages.' },
  { year: '2057', title: 'Emotion Mapping', desc: 'Introduction of the emotional resonance system, allowing memories to be connected across time and geography by feeling.' },
  { year: '2061', title: 'Constellation Interface', desc: 'Launch of the visual constellation map, revealing the invisible threads between human experiences.' },
  { year: '2067', title: 'Ten Million', desc: 'Ten million memories preserved. The archive becomes the largest collection of human experience ever assembled.' },
  { year: '2071', title: 'Orbital Backup', desc: 'Complete archive backup established in low Earth orbit, ensuring preservation through the migration.' },
  { year: '2099', title: 'Archive Closes', desc: 'Final memory submission accepted. The archive is sealed and prepared for the journey.' },
];

export default function Archive() {
  return (
    <main className="bg-void min-h-screen pt-20 pb-16 px-6">
      {/* Nebula blobs */}
      <div className="nebula-blob" style={{ width: 500, height: 500, background: '#7c83fd', top: '5%', right: '-10%' }} />
      <div className="nebula-blob" style={{ width: 400, height: 400, background: '#4ecdc4', bottom: '20%', left: '-8%' }} />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-aurora font-mono text-sm tracking-widest uppercase mb-3">
            Archive Status
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-starlight mb-4">
            The Living Archive
          </h1>
          <p className="text-mist-light text-lg max-w-2xl mx-auto">
            A record of what we have preserved, and how the archive has grown since its founding.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { value: formatNumber(STATS.totalMemories), label: 'Total Memories', color: '#7c83fd' },
            { value: formatNumber(STATS.contributors), label: 'Contributors', color: '#4ecdc4' },
            { value: STATS.languages, label: 'Languages', color: '#ffd166' },
            { value: STATS.countries, label: 'Countries', color: '#ff6b9d' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="p-6 rounded-2xl border border-white/8 text-center"
              style={{ background: 'rgba(13,21,48,0.6)' }}
            >
              <div
                className="text-3xl font-bold font-display mb-1"
                style={{ color: stat.color }}
              >
                {stat.value}
              </div>
              <div className="text-mist text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Era breakdown */}
        <div className="mb-16">
          <h2 className="font-display text-2xl font-bold text-starlight mb-6">
            Memories by Era
          </h2>
          <div className="space-y-3">
            {ERAS.map((era, i) => {
              const pct = [12, 8, 15, 18, 22, 19, 6][i];
              return (
                <div key={era.id} className="flex items-center gap-4">
                  <div className="w-32 text-right text-sm text-mist flex-shrink-0">
                    {era.label}
                  </div>
                  <div className="flex-1 h-8 rounded-full bg-white/5 overflow-hidden">
                    <div
                      className="h-full rounded-full flex items-center px-3 transition-all duration-1000"
                      style={{
                        width: `${pct}%`,
                        background: `linear-gradient(90deg, ${era.color}88, ${era.color}44)`,
                        minWidth: '60px',
                      }}
                    >
                      <span className="text-xs font-mono text-starlight">{pct}%</span>
                    </div>
                  </div>
                  <div className="w-20 text-xs text-mist-dark font-mono flex-shrink-0">
                    {era.range}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Timeline */}
        <div>
          <h2 className="font-display text-2xl font-bold text-starlight mb-8">
            Archive History
          </h2>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[88px] top-0 bottom-0 w-px timeline-line" />

            <div className="space-y-8">
              {TIMELINE_EVENTS.map((event, i) => (
                <div key={event.year} className="flex gap-8 items-start">
                  <div className="w-20 text-right flex-shrink-0">
                    <span className="text-aurora font-mono text-sm font-bold">{event.year}</span>
                  </div>
                  <div className="relative flex-shrink-0 mt-1">
                    <div
                      className="w-4 h-4 rounded-full border-2 border-aurora bg-cosmos"
                      style={{ boxShadow: '0 0 12px rgba(124,131,253,0.5)' }}
                    />
                  </div>
                  <div
                    className="flex-1 p-5 rounded-2xl border border-white/8 mb-2"
                    style={{ background: 'rgba(13,21,48,0.5)' }}
                  >
                    <h3 className="font-display text-base font-semibold text-starlight mb-1">
                      {event.title}
                    </h3>
                    <p className="text-mist text-sm leading-relaxed">{event.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
