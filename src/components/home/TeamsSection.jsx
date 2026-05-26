import { useState } from 'react';

const regions = ['全部', '欧洲', '南美', '北美', '亚洲', '非洲'];

const teams = [
  { name: '巴西', flag: '🇧🇷', region: '南美', ranking: 1, group: 'B', qualified: true },
  { name: '阿根廷', flag: '🇦🇷', region: '南美', ranking: 2, group: 'B', qualified: true },
  { name: '法国', flag: '🇫🇷', region: '欧洲', ranking: 3, group: 'C', qualified: true },
  { name: '英格兰', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', region: '欧洲', ranking: 4, group: 'D', qualified: true },
  { name: '西班牙', flag: '🇪🇸', region: '欧洲', ranking: 5, group: 'D', qualified: true },
  { name: '葡萄牙', flag: '🇵🇹', region: '欧洲', ranking: 6, group: 'E', qualified: true },
  { name: '荷兰', flag: '🇳🇱', region: '欧洲', ranking: 7, group: 'E', qualified: true },
  { name: '德国', flag: '🇩🇪', region: '欧洲', ranking: 8, group: 'C', qualified: true },
  { name: '美国', flag: '🇺🇸', region: '北美', ranking: 11, group: 'A', qualified: true },
  { name: '墨西哥', flag: '🇲🇽', region: '北美', ranking: 15, group: 'A', qualified: true },
  { name: '加拿大', flag: '🇨🇦', region: '北美', ranking: 40, group: 'H', qualified: true },
  { name: '日本', flag: '🇯🇵', region: '亚洲', ranking: 17, group: 'F', qualified: true },
  { name: '韩国', flag: '🇰🇷', region: '亚洲', ranking: 22, group: 'F', qualified: true },
  { name: '摩洛哥', flag: '🇲🇦', region: '非洲', ranking: 14, group: 'H', qualified: true },
  { name: '塞内加尔', flag: '🇸🇳', region: '非洲', ranking: 20, group: 'I', qualified: true },
  { name: '意大利', flag: '🇮🇹', region: '欧洲', ranking: 9, group: 'G', qualified: true },
  { name: '比利时', flag: '🇧🇪', region: '欧洲', ranking: 10, group: 'G', qualified: true },
  { name: '克罗地亚', flag: '🇭🇷', region: '欧洲', ranking: 12, group: 'J', qualified: true },
  { name: '乌拉圭', flag: '🇺🇾', region: '南美', ranking: 13, group: 'K', qualified: true },
  { name: '澳大利亚', flag: '🇦🇺', region: '亚洲', ranking: 25, group: 'L', qualified: true },
  { name: '沙特阿拉伯', flag: '🇸🇦', region: '亚洲', ranking: 56, group: 'J', qualified: true },
  { name: '伊朗', flag: '🇮🇷', region: '亚洲', ranking: 21, group: 'K', qualified: true },
  { name: '厄瓜多尔', flag: '🇪🇨', region: '南美', ranking: 30, group: 'L', qualified: true },
  { name: '哥伦比亚', flag: '🇨🇴', region: '南美', ranking: 18, group: 'I', qualified: true },
];

export default function TeamsSection() {
  const [activeRegion, setActiveRegion] = useState('全部');

  const filtered = activeRegion === '全部' ? teams : teams.filter((t) => t.region === activeRegion);

  return (
    <section id="teams" className="bg-[#0A0E1A] py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-[#FFD700] text-xs font-bold uppercase tracking-widest">参赛球队</span>
          <h2 className="font-['Bebas_Neue'] text-4xl sm:text-5xl text-white mt-2 tracking-wide">
            48支参赛球队
          </h2>
          <p className="text-gray-400 mt-3 max-w-xl mx-auto">
            来自全球六大洲的顶级球队，争夺世界杯最高荣誉
          </p>
        </div>

        {/* Region Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {regions.map((r) => (
            <button
              key={r}
              onClick={() => setActiveRegion(r)}
              className={`px-5 py-2 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-200 ${
                activeRegion === r
                  ? 'bg-[#003DA5] text-white shadow-[0_0_15px_rgba(0,61,165,0.5)]'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white border border-gray-700'
              }`}
            >
              {r}
            </button>
          ))}
        </div>

        {/* Teams Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filtered.map((team) => (
            <div
              key={team.name}
              className="bg-gray-900 border border-gray-700 rounded-xl p-4 text-center hover:border-[#FFD700]/50 hover:bg-gray-800 transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-200">
                {team.flag}
              </div>
              <p className="text-white font-semibold text-sm mb-1">{team.name}</p>
              <div className="flex items-center justify-center gap-1.5">
                <span className="text-gray-500 text-xs">FIFA</span>
                <span className="text-[#FFD700] text-xs font-bold">#{team.ranking}</span>
              </div>
              <div className="mt-2">
                <span className="text-xs text-gray-500 bg-gray-800 px-2 py-0.5 rounded-full border border-gray-700">
                  {team.group}组
                </span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 text-sm mt-8">
          共显示 {filtered.length} / 48 支球队
        </p>
      </div>
    </section>
  );
}
