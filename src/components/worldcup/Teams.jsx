import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Star } from 'lucide-react';

const continents = ['全部', '欧洲', '南美洲', '北美洲', '亚洲', '非洲'];

const teams = [
  {
    id: 'brazil',
    name: '巴西',
    flag: '🇧🇷',
    continent: '南美洲',
    ranking: 1,
    titles: 5,
    coach: '多里瓦尔',
    star: '维尼修斯',
    group: 'B组',
    titleId: 'team-brazil-title',
    descId: 'team-brazil-desc',
    imgId: 'team-img-brazil-d4e5f6',
  },
  {
    id: 'argentina',
    name: '阿根廷',
    flag: '🇦🇷',
    continent: '南美洲',
    ranking: 2,
    titles: 3,
    coach: '斯卡洛尼',
    star: '梅西',
    group: 'B组',
    titleId: 'team-argentina-title',
    descId: 'team-argentina-desc',
    imgId: 'team-img-argentina-g7h8i9',
  },
  {
    id: 'france',
    name: '法国',
    flag: '🇫🇷',
    continent: '欧洲',
    ranking: 3,
    titles: 2,
    coach: '德尚',
    star: '姆巴佩',
    group: 'C组',
    titleId: 'team-france-title',
    descId: 'team-france-desc',
    imgId: 'team-img-france-j1k2l3',
  },
  {
    id: 'england',
    name: '英格兰',
    flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    continent: '欧洲',
    ranking: 4,
    titles: 1,
    coach: '南盖托',
    star: '贝林厄姆',
    group: 'D组',
    titleId: 'team-england-title',
    descId: 'team-england-desc',
    imgId: 'team-img-england-m4n5o6',
  },
  {
    id: 'spain',
    name: '西班牙',
    flag: '🇪🇸',
    continent: '欧洲',
    ranking: 5,
    titles: 1,
    coach: '德拉富恩特',
    star: '亚马尔',
    group: 'D组',
    titleId: 'team-spain-title',
    descId: 'team-spain-desc',
    imgId: 'team-img-spain-p7q8r9',
  },
  {
    id: 'germany',
    name: '德国',
    flag: '🇩🇪',
    continent: '欧洲',
    ranking: 6,
    titles: 4,
    coach: '纳格尔斯曼',
    star: '穆西亚拉',
    group: 'C组',
    titleId: 'team-germany-title',
    descId: 'team-germany-desc',
    imgId: 'team-img-germany-s1t2u3',
  },
  {
    id: 'portugal',
    name: '葡萄牙',
    flag: '🇵🇹',
    continent: '欧洲',
    ranking: 7,
    titles: 0,
    coach: '马丁内斯',
    star: 'C罗',
    group: 'E组',
    titleId: 'team-portugal-title',
    descId: 'team-portugal-desc',
    imgId: 'team-img-portugal-v4w5x6',
  },
  {
    id: 'usa',
    name: '美国',
    flag: '🇺🇸',
    continent: '北美洲',
    ranking: 11,
    titles: 0,
    coach: '博格坎普',
    star: '普利西奇',
    group: 'A组',
    titleId: 'team-usa-title',
    descId: 'team-usa-desc',
    imgId: 'team-img-usa-y7z8a9',
  },
  {
    id: 'japan',
    name: '日本',
    flag: '🇯🇵',
    continent: '亚洲',
    ranking: 15,
    titles: 0,
    coach: '森保一',
    star: '久保建英',
    group: 'F组',
    titleId: 'team-japan-title',
    descId: 'team-japan-desc',
    imgId: 'team-img-japan-b1c2d3',
  },
  {
    id: 'morocco',
    name: '摩洛哥',
    flag: '🇲🇦',
    continent: '非洲',
    ranking: 14,
    titles: 0,
    coach: '雷格拉吉',
    star: '哈基米',
    group: 'G组',
    titleId: 'team-morocco-title',
    descId: 'team-morocco-desc',
    imgId: 'team-img-morocco-e4f5g6',
  },
];

export default function Teams() {
  const containerRef = useRef(null);
  const [activeContinent, setActiveContinent] = useState('全部');

  const filtered = activeContinent === '全部'
    ? teams
    : teams.filter((t) => t.continent === activeContinent);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeContinent]);

  return (
    <section id="teams" className="py-16 md:py-24 bg-[#111827]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <span className="text-[#f5c518] text-sm font-semibold tracking-widest uppercase">参赛球队</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">强队云集</h2>
          <p className="text-gray-400 mt-3 max-w-xl mx-auto">来自全球各大洲的顶级球队，共同角逐世界杯冠军</p>
        </div>

        {/* Continent filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {continents.map((c) => (
            <button
              key={c}
              onClick={() => setActiveContinent(c)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeContinent === c
                  ? 'bg-[#f5c518] text-[#0a0e1a]'
                  : 'bg-[#1a2235] text-gray-300 hover:bg-[#1a2235]/80 border border-gray-700/50'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Team grid */}
        <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((team) => (
            <div
              key={team.id}
              className="bg-[#1a2235] border border-gray-700/50 hover:border-[#f5c518]/50 rounded-2xl overflow-hidden transition-all duration-200 hover:shadow-lg hover:shadow-[#f5c518]/5 hover:-translate-y-1 group"
            >
              {/* Team image */}
              <div className="relative h-40 overflow-hidden">
                <img
                  alt={team.name}
                  data-strk-img-id={team.imgId}
                  data-strk-img={`[${team.descId}] [${team.titleId}]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a2235] via-transparent to-transparent" />
                <div className="absolute top-3 right-3 bg-[#0a0e1a]/80 rounded-full px-2 py-0.5 text-xs text-gray-300 font-medium">
                  {team.group}
                </div>
                <div className="absolute bottom-3 left-3 text-4xl">{team.flag}</div>
              </div>

              {/* Team info */}
              <div className="p-4">
                <h3 id={team.titleId} className="text-white font-bold text-lg">{team.name}</h3>
                <p id={team.descId} className="text-gray-500 text-xs mt-0.5 hidden">{team.continent} 足球队 世界杯参赛</p>

                <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-[#0a0e1a]/60 rounded-lg p-2">
                    <div className="text-gray-500">FIFA排名</div>
                    <div className="text-white font-bold text-sm">#{team.ranking}</div>
                  </div>
                  <div className="bg-[#0a0e1a]/60 rounded-lg p-2">
                    <div className="text-gray-500">夺冠次数</div>
                    <div className="text-[#f5c518] font-bold text-sm flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      {team.titles}
                    </div>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between text-xs">
                  <span className="text-gray-500">主教练: <span className="text-gray-300">{team.coach}</span></span>
                  <span className="text-gray-500">球星: <span className="text-[#f5c518]">{team.star}</span></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
