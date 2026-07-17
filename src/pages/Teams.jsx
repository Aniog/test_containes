import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { MapPin, Users } from 'lucide-react';

const teams = [
  { id: 'lakers', name: '洛杉矶湖人', city: '洛杉矶', conf: '西部', wins: 52, losses: 30, titleId: 'team-lakers-title', descId: 'team-lakers-desc', imgId: 'team-img-lakers-a1b2c3' },
  { id: 'warriors', name: '金州勇士', city: '旧金山', conf: '西部', wins: 48, losses: 34, titleId: 'team-warriors-title', descId: 'team-warriors-desc', imgId: 'team-img-warriors-d4e5f6' },
  { id: 'celtics', name: '波士顿凯尔特人', city: '波士顿', conf: '东部', wins: 57, losses: 25, titleId: 'team-celtics-title', descId: 'team-celtics-desc', imgId: 'team-img-celtics-g7h8i9' },
  { id: 'heat', name: '迈阿密热火', city: '迈阿密', conf: '东部', wins: 44, losses: 38, titleId: 'team-heat-title', descId: 'team-heat-desc', imgId: 'team-img-heat-j1k2l3' },
  { id: 'bucks', name: '密尔沃基雄鹿', city: '密尔沃基', conf: '东部', wins: 49, losses: 33, titleId: 'team-bucks-title', descId: 'team-bucks-desc', imgId: 'team-img-bucks-m4n5o6' },
  { id: 'nets', name: '布鲁克林篮网', city: '纽约', conf: '东部', wins: 35, losses: 47, titleId: 'team-nets-title', descId: 'team-nets-desc', imgId: 'team-img-nets-p7q8r9' },
  { id: 'nuggets', name: '丹佛掘金', city: '丹佛', conf: '西部', wins: 53, losses: 29, titleId: 'team-nuggets-title', descId: 'team-nuggets-desc', imgId: 'team-img-nuggets-s1t2u3' },
  { id: 'suns', name: '菲尼克斯太阳', city: '菲尼克斯', conf: '西部', wins: 45, losses: 37, titleId: 'team-suns-title', descId: 'team-suns-desc', imgId: 'team-img-suns-v4w5x6' },
  { id: 'clippers', name: '洛杉矶快船', city: '洛杉矶', conf: '西部', wins: 47, losses: 35, titleId: 'team-clippers-title', descId: 'team-clippers-desc', imgId: 'team-img-clippers-y7z8a9' },
  { id: 'bulls', name: '芝加哥公牛', city: '芝加哥', conf: '东部', wins: 40, losses: 42, titleId: 'team-bulls-title', descId: 'team-bulls-desc', imgId: 'team-img-bulls-b1c2d3' },
  { id: 'knicks', name: '纽约尼克斯', city: '纽约', conf: '东部', wins: 46, losses: 36, titleId: 'team-knicks-title', descId: 'team-knicks-desc', imgId: 'team-img-knicks-e4f5g6' },
  { id: 'mavs', name: '达拉斯独行侠', city: '达拉斯', conf: '西部', wins: 50, losses: 32, titleId: 'team-mavs-title', descId: 'team-mavs-desc', imgId: 'team-img-mavs-h7i8j9' },
];

export default function Teams() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  const east = teams.filter(t => t.conf === '东部').sort((a, b) => b.wins - a.wins);
  const west = teams.filter(t => t.conf === '西部').sort((a, b) => b.wins - a.wins);

  return (
    <div ref={containerRef} className="min-h-screen pt-24 pb-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 rounded-full px-3 py-1 text-orange-400 text-xs font-medium mb-3">
            <Users className="w-3 h-3" /> 2025-26 赛季
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-3">NBA 球队</h1>
          <p className="text-gray-400 text-lg">探索30支NBA球队的赛季表现与阵容</p>
        </div>

        {/* East Conference */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="w-1 h-6 bg-orange-500 rounded-full" />
            东部联盟
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {east.map((team, idx) => (
              <TeamCard key={team.id} team={team} rank={idx + 1} />
            ))}
          </div>
        </div>

        {/* West Conference */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="w-1 h-6 bg-orange-500 rounded-full" />
            西部联盟
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {west.map((team, idx) => (
              <TeamCard key={team.id} team={team} rank={idx + 1} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function TeamCard({ team, rank }) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-orange-500/40 hover:shadow-lg hover:shadow-orange-500/5 transition-all group">
      <div className="relative h-44 overflow-hidden">
        <img
          alt={team.name}
          data-strk-img-id={team.imgId}
          data-strk-img={`[${team.descId}] [${team.titleId}]`}
          data-strk-img-ratio="3x2"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent" />
        <div className="absolute top-3 left-3 w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-white font-black text-sm">
          {rank}
        </div>
        <div className="absolute top-3 right-3 bg-gray-900/80 backdrop-blur rounded-full px-2.5 py-1 text-xs text-gray-300 font-medium">
          {team.conf}
        </div>
      </div>
      <div className="p-5">
        <h3 id={team.titleId} className="text-white font-bold text-lg mb-1">{team.name}</h3>
        <p id={team.descId} className="text-gray-400 text-sm flex items-center gap-1 mb-4">
          <MapPin className="w-3 h-3" /> {team.city}
        </p>
        <div className="flex items-center gap-4">
          <div className="text-center">
            <div className="text-2xl font-black text-green-400">{team.wins}</div>
            <div className="text-xs text-gray-500">胜</div>
          </div>
          <div className="text-gray-600">-</div>
          <div className="text-center">
            <div className="text-2xl font-black text-red-400">{team.losses}</div>
            <div className="text-xs text-gray-500">负</div>
          </div>
          <div className="ml-auto">
            <div className="text-sm font-semibold text-orange-400">
              {((team.wins / (team.wins + team.losses)) * 100).toFixed(1)}%
            </div>
            <div className="text-xs text-gray-500">胜率</div>
          </div>
        </div>
      </div>
    </div>
  );
}
