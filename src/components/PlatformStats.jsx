import { TrendingUp, Users, ShoppingBag } from 'lucide-react';
import { PLATFORM_STATS, PLATFORMS } from '../data/gameData';

const platformAccent = {
  steam: 'text-[#66c0f4]',
  epic: 'text-[#60a5fa]',
  nintendo: 'text-[#f87171]',
  playstation: 'text-[#93c5fd]',
  xbox: 'text-[#4ade80]',
};

const platformBorder = {
  steam: 'border-[#66c0f4]/20 hover:border-[#66c0f4]/50',
  epic: 'border-[#0078f2]/20 hover:border-[#0078f2]/50',
  nintendo: 'border-[#e4000f]/20 hover:border-[#e4000f]/50',
  playstation: 'border-[#0070d1]/20 hover:border-[#0070d1]/50',
  xbox: 'border-[#52b043]/20 hover:border-[#52b043]/50',
};

export default function PlatformStats({ activePlatform, onPlatformChange }) {
  const stats = activePlatform === 'all'
    ? PLATFORM_STATS
    : PLATFORM_STATS.filter(s => s.platform === activePlatform);

  const platformInfo = PLATFORMS.reduce((acc, p) => { acc[p.id] = p; return acc; }, {});

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
      {PLATFORM_STATS.map(stat => {
        const info = platformInfo[stat.platform];
        const isActive = activePlatform === stat.platform || activePlatform === 'all';
        return (
          <button
            key={stat.platform}
            onClick={() => onPlatformChange(stat.platform === activePlatform ? 'all' : stat.platform)}
            className={`bg-gray-900 border rounded-xl p-4 text-left transition-all duration-200 ${platformBorder[stat.platform]} ${
              activePlatform === stat.platform ? 'bg-gray-800' : 'hover:bg-gray-800/50'
            } ${!isActive && activePlatform !== 'all' ? 'opacity-40' : ''}`}
          >
            <div className={`text-sm font-bold mb-3 ${platformAccent[stat.platform]}`}>
              {info?.label}
            </div>
            <div className="space-y-1.5">
              <div className="flex items-center gap-1.5 text-xs text-gray-400">
                <TrendingUp className="w-3 h-3" />
                <span className="text-white font-medium">{stat.games}</span> games
              </div>
              <div className="flex items-center gap-1.5 text-xs text-gray-400">
                <Users className="w-3 h-3" />
                <span className="text-white font-medium">{stat.users}</span> users
              </div>
              <div className="flex items-center gap-1.5 text-xs text-gray-400">
                <ShoppingBag className="w-3 h-3" />
                <span className="text-white font-medium">{stat.deals}</span> deals
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}
