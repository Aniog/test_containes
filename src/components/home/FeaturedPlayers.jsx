import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';
import { Star, ChevronRight } from 'lucide-react';
import { players } from '@/data/worldcup';

function PlayerCard({ player }) {
  return (
    <div className="bg-[#0d1526] border border-gray-700/50 rounded-xl overflow-hidden hover:border-[#f5a623]/40 hover:shadow-lg hover:shadow-[#f5a623]/10 transition-all duration-300 group">
      {/* Player Image */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-[#111827] to-[#0d1526]">
        <img
          alt={player.name}
          data-strk-img-id={player.imgId}
          data-strk-img={`[${player.descId}] [${player.titleId}] [players-section-title]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="400"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1526] via-transparent to-transparent" />
        {/* Flag */}
        <div className="absolute top-3 right-3 text-2xl">{player.flag}</div>
        {/* Position Badge */}
        <div className="absolute top-3 left-3 bg-[#f5a623]/90 text-black text-xs font-bold px-2 py-1 rounded-full">
          {player.position}
        </div>
      </div>

      {/* Player Info */}
      <div className="p-4">
        <h3 id={player.titleId} className="text-white font-bold text-lg leading-tight">
          {player.nameZh}
        </h3>
        <p className="text-gray-400 text-sm mb-1">{player.name}</p>
        <p id={player.descId} className="text-gray-500 text-xs mb-3 line-clamp-2">
          {player.description}
        </p>

        {/* Club */}
        <div className="text-[#f5a623] text-xs font-semibold mb-3">{player.club}</div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2 pt-3 border-t border-gray-700/50">
          <div className="text-center">
            <div className="text-white font-black text-lg">{player.goals}</div>
            <div className="text-gray-500 text-xs">进球</div>
          </div>
          <div className="text-center">
            <div className="text-white font-black text-lg">{player.assists}</div>
            <div className="text-gray-500 text-xs">助攻</div>
          </div>
          <div className="text-center">
            <div className="text-[#f5a623] font-black text-lg flex items-center justify-center gap-0.5">
              <Star className="w-3 h-3 fill-[#f5a623]" />
              {player.rating}
            </div>
            <div className="text-gray-500 text-xs">评分</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FeaturedPlayers() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-20 bg-[#0a0e1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <div className="text-[#f5a623] text-sm font-bold tracking-widest uppercase mb-2">明星球员</div>
            <h2 id="players-section-title" className="text-3xl md:text-4xl font-bold text-white">
              本届球星
            </h2>
          </div>
          <Link
            to="/players"
            className="flex items-center gap-1 text-[#f5a623] font-semibold text-sm hover:gap-2 transition-all duration-200"
          >
            查看全部 <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Players Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {players.slice(0, 6).map((player) => (
            <PlayerCard key={player.id} player={player} />
          ))}
        </div>
      </div>
    </section>
  );
}
