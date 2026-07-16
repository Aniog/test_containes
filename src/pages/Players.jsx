import { useState, useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Star, Target, Zap, Filter } from 'lucide-react';
import { players } from '@/data/worldcup';

const positions = ['全部', '前锋', '中场', '后卫', '门将'];

function PlayerDetailCard({ player }) {
  return (
    <div className="bg-[#0d1526] border border-gray-700/50 rounded-xl overflow-hidden hover:border-[#f5a623]/40 hover:shadow-xl hover:shadow-[#f5a623]/10 transition-all duration-300 group">
      {/* Image */}
      <div className="relative h-56 bg-gradient-to-br from-[#111827] to-[#0d1526] overflow-hidden">
        <img
          alt={player.name}
          data-strk-img-id={player.imgId}
          data-strk-img={`[${player.descId}] [${player.titleId}] [players-page-title]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1526] via-[#0d1526]/20 to-transparent" />

        {/* Overlays */}
        <div className="absolute top-3 left-3 bg-[#f5a623] text-black text-xs font-black px-2.5 py-1 rounded-full">
          {player.position}
        </div>
        <div className="absolute top-3 right-3 text-3xl">{player.flag}</div>

        {/* Rating */}
        <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-black/60 backdrop-blur-sm rounded-full px-2.5 py-1">
          <Star className="w-3.5 h-3.5 text-[#f5a623] fill-[#f5a623]" />
          <span className="text-white font-black text-sm">{player.rating}</span>
        </div>
      </div>

      {/* Info */}
      <div className="p-5">
        <h3 id={player.titleId} className="text-white font-black text-xl mb-0.5">
          {player.nameZh}
        </h3>
        <p className="text-gray-400 text-sm mb-1">{player.name}</p>
        <p id={player.descId} className="text-gray-500 text-xs mb-4 line-clamp-2 leading-relaxed">
          {player.description}
        </p>

        {/* Club & Country */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-[#f5a623] text-sm font-semibold">{player.club}</span>
          <span className="text-gray-400 text-sm">{player.country}</span>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-2 pt-4 border-t border-gray-700/50">
          <div className="text-center">
            <div className="flex items-center justify-center mb-1">
              <Target className="w-3.5 h-3.5 text-[#f5a623]" />
            </div>
            <div className="text-white font-black text-lg">{player.goals}</div>
            <div className="text-gray-500 text-xs">进球</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-1">
              <Zap className="w-3.5 h-3.5 text-[#3b82f6]" />
            </div>
            <div className="text-white font-black text-lg">{player.assists}</div>
            <div className="text-gray-500 text-xs">助攻</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-1">
              <span className="text-gray-400 text-xs">⚽</span>
            </div>
            <div className="text-white font-black text-lg">{player.matches}</div>
            <div className="text-gray-500 text-xs">出场</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-1">
              <span className="text-gray-400 text-xs">📅</span>
            </div>
            <div className="text-white font-black text-lg">{player.age}</div>
            <div className="text-gray-500 text-xs">年龄</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Players() {
  const containerRef = useRef(null);
  const [activePos, setActivePos] = useState('全部');

  const filtered = activePos === '全部'
    ? players
    : players.filter((p) => p.position === activePos);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activePos]);

  return (
    <div className="min-h-screen bg-[#0a0e1a]">
      {/* Page Header */}
      <div className="bg-gradient-to-b from-[#0d1526] to-[#0a0e1a] border-b border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[#f5a623] text-sm font-bold tracking-widest uppercase mb-2">FIFA World Cup 2026</div>
          <h1 id="players-page-title" className="text-4xl md:text-5xl font-black text-white">
            球星阵容
          </h1>
          <p className="text-gray-400 mt-2">本届世界杯最受瞩目的顶级球员</p>
        </div>
      </div>

      <div ref={containerRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Filter */}
        <div className="flex items-center gap-2 mb-8 flex-wrap">
          <Filter className="w-4 h-4 text-gray-400" />
          {positions.map((pos) => (
            <button
              key={pos}
              onClick={() => setActivePos(pos)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                activePos === pos
                  ? 'bg-[#f5a623] text-black'
                  : 'bg-[#0d1526] border border-gray-700 text-gray-300 hover:border-[#f5a623]/40 hover:text-white'
              }`}
            >
              {pos}
            </button>
          ))}
        </div>

        {/* Players Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((player) => (
              <PlayerDetailCard key={player.id} player={player} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-500">
            <div className="text-4xl mb-4">⚽</div>
            <p>暂无该位置球员数据</p>
          </div>
        )}
      </div>
    </div>
  );
}
