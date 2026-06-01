import { STATS } from '../../data/memories';

export default function MigrationCountdown() {
  const migrationYear = parseInt(STATS.migrationDate);
  const currentYear = 2087;
  const yearsLeft = migrationYear - currentYear;

  return (
    <section className="py-24 px-6 bg-void relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 100%, rgba(124,58,237,0.12) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <p className="text-xs font-mono tracking-widest text-memory-light uppercase mb-6">
          ✦ The Great Migration
        </p>

        <h2 className="font-cinzel text-3xl md:text-5xl font-light text-starlight tracking-wide mb-6">
          {yearsLeft} Years Until Departure
        </h2>

        <p className="text-mist text-lg leading-relaxed max-w-2xl mx-auto mb-12">
          In {migrationYear}, humanity begins its journey to the stars. The Memory Archive ensures
          that everything we were — every laugh, every loss, every ordinary Tuesday — travels with us
          into the unknown.
        </p>

        {/* Timeline */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-0 md:gap-0 mb-12">
          {[
            { year: '2060', label: 'Archive Founded', color: 'aurora' },
            { year: '2075', label: 'First Billion Memories', color: 'nova' },
            { year: '2087', label: 'You Are Here', color: 'memory', active: true },
            { year: '2094', label: 'Migration Begins', color: 'aurora' },
          ].map((item, i, arr) => (
            <div key={item.year} className="flex flex-col md:flex-row items-center">
              <div className="flex flex-col items-center">
                <div
                  className={`w-4 h-4 rounded-full border-2 ${item.active ? 'scale-150' : ''} transition-transform`}
                  style={{
                    borderColor: item.active ? '#fcd34d' : '#1a2d52',
                    backgroundColor: item.active ? '#f59e0b' : '#0d1b35',
                    boxShadow: item.active ? '0 0 16px rgba(245,158,11,0.6)' : 'none',
                  }}
                />
                <div className="mt-3 text-center">
                  <p className={`font-mono text-sm font-medium ${item.active ? 'text-memory-light' : 'text-mist'}`}>
                    {item.year}
                  </p>
                  <p className="text-xs text-ghost mt-1 max-w-20">{item.label}</p>
                </div>
              </div>
              {i < arr.length - 1 && (
                <div className="w-px h-12 md:w-24 md:h-px bg-gradient-to-b md:bg-gradient-to-r from-stardust to-stardust/30 my-2 md:my-0 md:mx-2" />
              )}
            </div>
          ))}
        </div>

        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-memory/10 border border-memory/30">
          <span className="w-2 h-2 rounded-full bg-memory animate-pulse" />
          <span className="text-sm font-mono text-memory-light tracking-wide">
            Archive closes {STATS.migrationDate} · Contribute your memory today
          </span>
        </div>
      </div>
    </section>
  );
}
