import { TrendingUp, Users, ShoppingBag } from 'lucide-react';
import { PLATFORM_STATS, PLATFORMS } from '../data/gameData';

const platformAccent = {
  steam: 'text-[#1b6fa8]',
  epic: 'text-[#0060c0]',
  nintendo: 'text-[#c0000d]',
  playstation: 'text-[#0058a8]',
  xbox: 'text-[#107c10]',
};

const platformBorder = {
  steam: 'border-[#1b6fa8]/20 hover:border-[#1b6fa8]/50',
  epic: 'border-[#0060c0]/20 hover:border-[#0060c0]/50',
  nintendo: 'border-[#c0000d]/20 hover:border-[#c0000d]/50',
  playstation: 'border-[#0058a8]/20 hover:border-[#0058a8]/50',
  xbox: 'border-[#107c10]/20 hover:border-[#107c10]/50',
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
            className={`bg-white border rounded-xl p-4 text-left transition-all duration-200 ${platformBorder[stat.platform]} ${
              activePlatform === stat.platform ? 'bg-green-50 shadow-sm' : 'hover:bg-green-50/50'
            } ${!isActive && activePlatform !== 'all' ? 'opacity-40' : ''}`}
          >
            <div className={`text-sm font-bold mb-3 ${platformAccent[stat.platform]}`}>
              {info?.label}
            </div>
            <div className="space-y-1.5">
              <div className="flex items-center gap-1.5 text-xs text-gray-500">
                <TrendingUp className="w-3 h-3" />
                <span className="text-gray-900 font-medium">{stat.games}</span> games
              </div>
              <div className="flex items-center gap-1.5 text-xs text-gray-500">
                <Users className="w-3 h-3" />
                <span className="text-gray-900 font-medium">{stat.users}</span> users
              </div>
              <div className="flex items-center gap-1.5 text-xs text-gray-500">
                <ShoppingBag className="w-3 h-3" />
                <span className="text-gray-900 font-medium">{stat.deals}</span> deals
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}
