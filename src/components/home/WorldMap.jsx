import { Link } from 'react-router-dom';
import { REGIONS } from '../../data/memories';

function formatCount(n) {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + 'M';
  if (n >= 1_000) return (n / 1_000).toFixed(0) + 'K';
  return n.toString();
}

export default function WorldMap() {
  return (
    <section className="py-24 px-4 bg-space-black relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 80%, rgba(45,212,191,0.04) 0%, transparent 60%)',
        }}
      />
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-12">
          <p className="text-aurora-teal text-xs font-medium tracking-widest uppercase mb-3">Geography</p>
          <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-white mb-4">
            Memories From Every Corner
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            From the rice paddies of Asia to the savannas of Africa — every place on Earth has stories worth keeping.
          </p>
        </div>

        {/* Region grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {REGIONS.map((region, i) => {
            const hues = ['#4f8ef7', '#a78bfa', '#2dd4bf', '#f5c842', '#e879a0', '#34d399', '#fb923c', '#94a3b8'];
            const color = hues[i % hues.length];
            const pct = Math.round((region.count / 28934012) * 100);

            return (
              <Link
                key={region.id}
                to={`/explore/location/${region.id}`}
                className="group bg-space-navy/80 border border-slate-700/40 rounded-2xl p-5 hover:border-opacity-80 transition-all duration-300 hover:scale-[1.02] overflow-hidden relative"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `radial-gradient(ellipse at top left, ${color}10 0%, transparent 60%)` }}
                />
                <div className="relative">
                  <h3 className="font-semibold text-white text-sm mb-1">{region.label}</h3>
                  <p className="text-xs text-slate-500 mb-3">{formatCount(region.count)} memories</p>
                  <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{ width: `${pct}%`, background: color }}
                    />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Mission statement */}
        <div className="bg-space-indigo/60 backdrop-blur-sm border border-nebula-blue/20 rounded-3xl p-8 md:p-12 text-center">
          <div className="text-4xl mb-4">✦</div>
          <blockquote className="font-cinzel text-xl md:text-2xl text-white font-medium leading-relaxed mb-4 max-w-3xl mx-auto">
            "We do not leave to forget. We leave to carry forward. Every memory preserved is a star we take with us."
          </blockquote>
          <p className="text-slate-400 text-sm">— Memory Archive Mission Statement, 2031</p>
        </div>
      </div>
    </section>
  );
}
