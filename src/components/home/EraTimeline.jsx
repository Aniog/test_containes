import { useNavigate } from 'react-router-dom';
import { ERAS, MEMORIES } from '../../data/memories';

export default function EraTimeline() {
  const navigate = useNavigate();

  return (
    <section className="py-24 px-4 md:px-8 bg-space-navy">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-inter text-aurora-teal text-sm uppercase tracking-widest mb-3">
            Browse by Era
          </p>
          <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-white mb-4">
            12,000 Years of Memory
          </h2>
          <p className="font-inter text-slate-400 max-w-xl mx-auto">
            From the first cities to the last days before departure — every era holds its own universe of human experience.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {ERAS.map((era, i) => {
              const count = MEMORIES.filter((m) => m.era === era.id).length;
              return (
                <button
                  key={era.id}
                  onClick={() => navigate(`/explore?era=${era.id}`)}
                  className="group flex flex-col items-center text-center p-4 rounded-xl border border-slate-800 bg-space-black/50 hover:border-opacity-60 transition-all duration-300 hover:-translate-y-1"
                  style={{ '--era-color': era.color }}
                >
                  {/* Dot */}
                  <div
                    className="w-4 h-4 rounded-full mb-4 ring-4 ring-space-navy group-hover:ring-opacity-50 transition-all"
                    style={{ backgroundColor: era.color, boxShadow: `0 0 12px ${era.color}66` }}
                  />

                  <div
                    className="font-cinzel text-xs font-semibold mb-1 transition-colors"
                    style={{ color: era.color }}
                  >
                    {era.label}
                  </div>
                  <div className="font-inter text-xs text-slate-600 mb-2">{era.range}</div>
                  <div className="font-inter text-xs text-slate-500">
                    {count > 0 ? `${count} memories` : 'Explore'}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
