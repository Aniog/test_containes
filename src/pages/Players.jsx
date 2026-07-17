import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Star, TrendingUp } from 'lucide-react';

const players = [
  { id: 'lebron', name: '勒布朗·詹姆斯', team: '洛杉矶湖人', pos: '小前锋', pts: 28.4, reb: 8.1, ast: 7.2, age: 41, titleId: 'player-lebron-title', descId: 'player-lebron-desc', imgId: 'player-img-lebron-a1b2c3' },
  { id: 'curry', name: '斯蒂芬·库里', team: '金州勇士', pos: '控球后卫', pts: 29.6, reb: 5.2, ast: 6.3, age: 38, titleId: 'player-curry-title', descId: 'player-curry-desc', imgId: 'player-img-curry-d4e5f6' },
  { id: 'giannis', name: '扬尼斯·阿德托昆博', team: '密尔沃基雄鹿', pos: '大前锋', pts: 31.2, reb: 11.8, ast: 5.9, age: 31, titleId: 'player-giannis-title', descId: 'player-giannis-desc', imgId: 'player-img-giannis-g7h8i9' },
  { id: 'jokic', name: '尼古拉·约基奇', team: '丹佛掘金', pos: '中锋', pts: 26.8, reb: 12.4, ast: 9.1, age: 31, titleId: 'player-jokic-title', descId: 'player-jokic-desc', imgId: 'player-img-jokic-j1k2l3' },
  { id: 'tatum', name: '杰森·塔图姆', team: '波士顿凯尔特人', pos: '小前锋', pts: 27.3, reb: 8.5, ast: 4.8, age: 28, titleId: 'player-tatum-title', descId: 'player-tatum-desc', imgId: 'player-img-tatum-m4n5o6' },
  { id: 'durant', name: '凯文·杜兰特', team: '菲尼克斯太阳', pos: '小前锋', pts: 27.1, reb: 7.0, ast: 5.4, age: 37, titleId: 'player-durant-title', descId: 'player-durant-desc', imgId: 'player-img-durant-p7q8r9' },
  { id: 'luka', name: '卢卡·东契奇', team: '达拉斯独行侠', pos: '控球后卫', pts: 33.9, reb: 9.2, ast: 9.8, age: 27, titleId: 'player-luka-title', descId: 'player-luka-desc', imgId: 'player-img-luka-s1t2u3' },
  { id: 'embiid', name: '乔尔·恩比德', team: '费城76人', pos: '中锋', pts: 34.7, reb: 11.0, ast: 5.6, age: 32, titleId: 'player-embiid-title', descId: 'player-embiid-desc', imgId: 'player-img-embiid-v4w5x6' },
];

const positions = ['全部', '控球后卫', '得分后卫', '小前锋', '大前锋', '中锋'];

export default function Players() {
  const containerRef = useRef(null);
  const [activePos, setActivePos] = useState('全部');

  const filtered = activePos === '全部' ? players : players.filter(p => p.pos === activePos);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activePos]);

  return (
    <div ref={containerRef} className="min-h-screen pt-24 pb-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 rounded-full px-3 py-1 text-orange-400 text-xs font-medium mb-3">
            <Star className="w-3 h-3" /> 明星球员
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-3">NBA 球星</h1>
          <p className="text-gray-400 text-lg">2025-26赛季顶级球员数据与表现</p>
        </div>

        {/* Position Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {positions.map(pos => (
            <button
              key={pos}
              onClick={() => setActivePos(pos)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activePos === pos
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {pos}
            </button>
          ))}
        </div>

        {/* Players Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filtered.map(player => (
            <PlayerCard key={player.id} player={player} />
          ))}
        </div>
      </div>
    </div>
  );
}

function PlayerCard({ player }) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-orange-500/40 hover:shadow-lg hover:shadow-orange-500/5 transition-all group">
      <div className="relative h-52 overflow-hidden">
        <img
          alt={player.name}
          data-strk-img-id={player.imgId}
          data-strk-img={`[${player.descId}] [${player.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="400"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/30 to-transparent" />
        <div className="absolute top-3 right-3 bg-orange-500/20 border border-orange-500/30 rounded-full px-2.5 py-1 text-orange-400 text-xs font-medium">
          {player.pos}
        </div>
      </div>
      <div className="p-4">
        <h3 id={player.titleId} className="text-white font-bold text-base mb-0.5">{player.name}</h3>
        <p id={player.descId} className="text-gray-400 text-xs mb-4">{player.team} · {player.age}岁</p>
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: '得分', value: player.pts, icon: TrendingUp },
            { label: '篮板', value: player.reb },
            { label: '助攻', value: player.ast },
          ].map(({ label, value }) => (
            <div key={label} className="text-center bg-gray-800 rounded-lg py-2">
              <div className="text-white font-black text-lg">{value}</div>
              <div className="text-gray-500 text-xs">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
