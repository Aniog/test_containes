import { Link } from 'react-router-dom';
import { PLATFORMS } from '../../lib/data';

const platforms = [
  { key: 'steam', emoji: '🖥️', desc: 'PC gaming hub' },
  { key: 'epic', emoji: '🎯', desc: 'Free games weekly' },
  { key: 'nintendo', emoji: '🕹️', desc: 'Family favorites' },
  { key: 'playstation', emoji: '🎮', desc: 'Exclusive titles' },
  { key: 'xbox', emoji: '🟢', desc: 'Game Pass deals' },
];

const HomePlatforms = () => {
  return (
    <section className="bg-[#1a1a24] border-y border-[#2d2d3d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-center text-slate-400 text-sm font-semibold uppercase tracking-widest mb-8">
          Deals from all major platforms
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {platforms.map(({ key, emoji, desc }) => {
            const p = PLATFORMS[key];
            return (
              <Link
                key={key}
                to={`/deals?platform=${key}`}
                className={`flex flex-col items-center gap-2 p-4 rounded-xl border ${p.borderColor} ${p.color} hover:scale-105 transition-transform cursor-pointer`}
              >
                <span className="text-3xl">{emoji}</span>
                <span className={`font-bold text-sm ${p.textColor}`}>{p.name}</span>
                <span className="text-xs text-slate-500">{desc}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomePlatforms;
