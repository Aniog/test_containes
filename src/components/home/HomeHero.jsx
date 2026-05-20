import { Link } from 'react-router-dom';
import { Flame, ArrowRight, Zap } from 'lucide-react';

const HomeHero = () => {
  return (
    <section className="relative overflow-hidden bg-[#0f0f13]">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-900/30 via-[#0f0f13] to-cyan-900/20 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-violet-600/20 border border-violet-500/30 text-violet-400 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
            <Zap className="w-3.5 h-3.5" />
            Summer Sale 2026 — Up to 90% Off
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-100 leading-tight mb-6">
            The Best Game Deals,{' '}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              All in One Place
            </span>
          </h1>

          <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-xl">
            Discover the hottest discounts from Steam, Epic, Nintendo, PlayStation, and Xbox. Plus shop our curated store for the best gaming titles.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/deals"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-cyan-500 hover:opacity-90 text-white font-bold px-8 py-3.5 rounded-lg transition-opacity text-sm"
            >
              <Flame className="w-4 h-4" />
              Browse Deals
            </Link>
            <Link
              to="/store"
              className="inline-flex items-center gap-2 bg-[#22222f] hover:bg-[#2d2d3d] text-slate-100 border border-[#2d2d3d] font-semibold px-8 py-3.5 rounded-lg transition-colors text-sm"
            >
              Visit Store
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-[#2d2d3d]">
            {[
              { value: '10,000+', label: 'Games Tracked' },
              { value: '5 Platforms', label: 'Covered' },
              { value: 'Up to 90%', label: 'Discounts' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-extrabold text-slate-100">{stat.value}</div>
                <div className="text-sm text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
