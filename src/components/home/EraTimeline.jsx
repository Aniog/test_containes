import { Link } from 'react-router-dom';
import { ERAS } from '../../data/memories';

export default function EraTimeline() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-star-radial opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="font-mono text-xs text-gold-400 uppercase tracking-widest mb-3">
            Browse by Era
          </p>
          <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-slate-100">
            5,100 Years of Human Story
          </h2>
          <p className="text-slate-500 mt-3 max-w-xl mx-auto">
            From the first written records to the final days before migration — every era preserved.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent -translate-y-1/2" />

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {ERAS.map((era, i) => (
              <Link
                key={era.id}
                to={`/explore?era=${era.id}`}
                className="group relative flex flex-col items-center text-center p-4 rounded-xl border border-slate-700/40 bg-space-800/50 hover:bg-space-700/60 transition-all duration-300 hover:border-opacity-80"
                style={{
                  borderColor: `${era.color}30`,
                  '--era-color': era.color,
                }}
              >
                {/* Era dot */}
                <div
                  className="w-4 h-4 rounded-full mb-3 transition-all duration-300 group-hover:scale-125"
                  style={{
                    backgroundColor: era.color,
                    boxShadow: `0 0 12px ${era.color}60`,
                  }}
                />

                <h3
                  className="font-cinzel text-xs font-semibold mb-1 leading-tight"
                  style={{ color: era.color }}
                >
                  {era.label}
                </h3>
                <p className="font-mono text-xs text-slate-600 leading-tight">
                  {era.range}
                </p>

                {/* Hover glow */}
                <div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse at center, ${era.color}10 0%, transparent 70%)`,
                  }}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
