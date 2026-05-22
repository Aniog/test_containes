import { PLATFORMS } from '@/data/gameData';
import { Link } from 'react-router-dom';

const platformIcons = {
  steam: '🎮',
  epic: '⚡',
  nintendo: '🎯',
  playstation: '🎮',
  xbox: '🟢',
};

export default function HomePlatformBanner() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8">
      <h2 className="text-center text-gray-400 text-sm font-semibold uppercase tracking-widest mb-6">
        Deals from all major platforms
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
        {Object.entries(PLATFORMS).map(([key, platform]) => (
          <Link
            key={key}
            to={`/deals?platform=${key}`}
            className="flex flex-col items-center gap-2 bg-[#16161d] border border-[#2a2a3a] rounded-xl p-4 hover:border-violet-500/50 hover:bg-[#1e1e2a] transition-all duration-200 group"
          >
            <span className="text-2xl">{platformIcons[key]}</span>
            <span className={`text-xs font-bold px-2 py-0.5 rounded-full border ${platform.color}`}>
              {platform.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
