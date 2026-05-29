import { Link } from 'react-router-dom';
import { TrendingUp, Flame, Clock, Star } from 'lucide-react';
import { DREAMS } from '../../data/dreams';

function TrendingRow({ dream, rank }) {
  return (
    <div className="flex items-center gap-4 p-4 rounded-xl glass border border-white/5 hover:border-white/15 transition-all duration-300 group cursor-pointer">
      <span className="font-dream text-2xl font-black text-white/20 w-8 text-center">{rank}</span>

      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
        style={{ background: `linear-gradient(135deg, ${dream.accentColor}33, ${dream.accentColor}11)` }}
      >
        {dream.creator.avatar}
      </div>

      <div className="flex-1 min-w-0">
        <h4 className="font-dream text-sm font-semibold text-white truncate group-hover:text-purple-300 transition-colors">
          {dream.title}
        </h4>
        <p className="text-xs text-purple-300/50 font-body">{dream.creator.name}</p>
      </div>

      <div className="text-right flex-shrink-0">
        <div className="flex items-center gap-1 justify-end">
          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
          <span className="text-xs font-semibold text-yellow-400 font-body">{dream.rating}</span>
        </div>
        <p className="text-xs text-purple-300/50 font-body">{dream.sold.toLocaleString()} sold</p>
      </div>
    </div>
  );
}

export default function TrendingSection() {
  const trending = DREAMS.filter(d => d.trending).slice(0, 5);
  const newReleases = DREAMS.filter(d => d.new).slice(0, 4);

  return (
    <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Trending */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center">
              <Flame className="w-4 h-4 text-orange-400" />
            </div>
            <h2 className="font-dream text-2xl font-bold text-white">Trending Now</h2>
          </div>
          <div className="flex flex-col gap-3">
            {trending.map((dream, i) => (
              <TrendingRow key={dream.id} dream={dream} rank={i + 1} />
            ))}
          </div>
        </div>

        {/* New Releases */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center">
              <Clock className="w-4 h-4 text-teal-400" />
            </div>
            <h2 className="font-dream text-2xl font-bold text-white">New Releases</h2>
          </div>
          <div className="flex flex-col gap-3">
            {newReleases.map((dream, i) => (
              <TrendingRow key={dream.id} dream={dream} rank={i + 1} />
            ))}
          </div>

          {/* CTA */}
          <Link
            to="/marketplace"
            className="mt-6 flex items-center justify-center gap-2 w-full py-3 rounded-xl glass border border-purple-500/20 text-purple-300 text-sm font-body hover:bg-white/5 transition-all"
          >
            <TrendingUp className="w-4 h-4" />
            View All Dreams
          </Link>
        </div>
      </div>
    </section>
  );
}
