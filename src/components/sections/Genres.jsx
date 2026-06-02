import { useState } from 'react';
import { Sword, Zap, Brain, Ghost, Trophy, Globe, Music, Users } from 'lucide-react';

const genres = [
  { id: 'action', icon: Sword, label: 'Action', count: '8,200+', color: 'text-red-400', bg: 'bg-red-400/10 hover:bg-red-400/20 border-red-400/20 hover:border-red-400/50' },
  { id: 'rpg', icon: Trophy, label: 'RPG', count: '4,500+', color: 'text-yellow-400', bg: 'bg-yellow-400/10 hover:bg-yellow-400/20 border-yellow-400/20 hover:border-yellow-400/50' },
  { id: 'strategy', icon: Brain, label: 'Strategy', count: '6,100+', color: 'text-blue-400', bg: 'bg-blue-400/10 hover:bg-blue-400/20 border-blue-400/20 hover:border-blue-400/50' },
  { id: 'horror', icon: Ghost, label: 'Horror', count: '2,300+', color: 'text-purple-400', bg: 'bg-purple-400/10 hover:bg-purple-400/20 border-purple-400/20 hover:border-purple-400/50' },
  { id: 'sports', icon: Zap, label: 'Sports', count: '1,800+', color: 'text-green-400', bg: 'bg-green-400/10 hover:bg-green-400/20 border-green-400/20 hover:border-green-400/50' },
  { id: 'open-world', icon: Globe, label: 'Open World', count: '3,400+', color: 'text-teal-400', bg: 'bg-teal-400/10 hover:bg-teal-400/20 border-teal-400/20 hover:border-teal-400/50' },
  { id: 'indie', icon: Music, label: 'Indie', count: '12,000+', color: 'text-pink-400', bg: 'bg-pink-400/10 hover:bg-pink-400/20 border-pink-400/20 hover:border-pink-400/50' },
  { id: 'multiplayer', icon: Users, label: 'Multiplayer', count: '5,700+', color: 'text-orange-400', bg: 'bg-orange-400/10 hover:bg-orange-400/20 border-orange-400/20 hover:border-orange-400/50' },
];

export default function Genres() {
  const [active, setActive] = useState(null);

  return (
    <section id="genres" className="py-20 px-4 md:px-8 bg-[#faf7f2]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <span className="text-[#e8650a] text-sm font-semibold uppercase tracking-widest">Explore</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mt-2">Browse by Genre</h2>
          <p className="text-[#8a7a6a] mt-2 max-w-xl mx-auto">
            Whatever you're into, Steam has thousands of titles waiting for you.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {genres.map((genre) => {
            const Icon = genre.icon;
            return (
              <button
                key={genre.id}
                onClick={() => setActive(active === genre.id ? null : genre.id)}
                className={`border rounded-xl p-6 flex flex-col items-center gap-3 transition-all duration-300 cursor-pointer ${genre.bg} ${active === genre.id ? 'scale-105 shadow-md' : ''}`}
              >
                <Icon className={`w-8 h-8 ${genre.color}`} />
                <span className="text-[#1a1a1a] font-semibold text-sm">{genre.label}</span>
                <span className="text-[#8a7a6a] text-xs">{genre.count} games</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
