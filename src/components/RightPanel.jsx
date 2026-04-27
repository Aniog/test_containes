import { useState } from 'react';
import { Search, TrendingUp, UserPlus } from 'lucide-react';
import { suggestedUsers, trendingTopics } from '../data/mockData';
import SpotlightCard from './SpotlightCard';

export default function RightPanel() {
  const [search, setSearch] = useState('');
  const [followed, setFollowed] = useState({});

  const toggleFollow = (id) => {
    setFollowed(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <aside className="hidden lg:flex flex-col gap-4 w-72 flex-shrink-0">
      {/* Search */}
      <SpotlightCard className="glass" style={{ padding: '0.75rem 1rem' }} borderRadius="1rem">
        <div className="flex items-center gap-3">
          <Search size={16} className="text-white/40 flex-shrink-0" />
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="搜索..."
            className="flex-1 bg-transparent text-sm text-white placeholder-white/30 outline-none"
          />
        </div>
      </SpotlightCard>

      {/* Trending */}
      <SpotlightCard className="glass" style={{ padding: '1rem' }} borderRadius="1rem">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp size={15} className="text-purple-400" />
          <span className="text-sm font-semibold text-white">热门话题</span>
        </div>
        <div className="space-y-3">
          {trendingTopics.map((topic, i) => (
            <div key={topic.id} className="flex items-center justify-between group cursor-pointer">
              <div>
                <p className="text-sm font-medium text-white/90 group-hover:text-purple-300 transition-colors">
                  {topic.tag}
                </p>
                <p className="text-xs text-white/35">{topic.count}</p>
              </div>
              <span className="text-xs text-white/20 font-mono">#{i + 1}</span>
            </div>
          ))}
        </div>
      </SpotlightCard>

      {/* Suggested Users */}
      <SpotlightCard className="glass" style={{ padding: '1rem' }} borderRadius="1rem">
        <div className="flex items-center gap-2 mb-4">
          <UserPlus size={15} className="text-pink-400" />
          <span className="text-sm font-semibold text-white">推荐关注</span>
        </div>
        <div className="space-y-3">
          {suggestedUsers.map(user => (
            <div key={user.id} className="flex items-center gap-3">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-9 h-9 rounded-full bg-white/10 flex-shrink-0 ring-2 ring-white/10"
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white truncate">{user.name}</p>
                <p className="text-xs text-white/35 truncate">{user.bio}</p>
              </div>
              <button
                onClick={() => toggleFollow(user.id)}
                className={`text-xs font-semibold px-3 py-1 rounded-lg transition-all duration-200 flex-shrink-0 ${
                  followed[user.id]
                    ? 'bg-white/10 text-white/60 hover:bg-white/15'
                    : 'text-white hover:opacity-90'
                }`}
                style={!followed[user.id] ? { background: 'linear-gradient(135deg, #a855f7, #ec4899)' } : {}}
              >
                {followed[user.id] ? '已关注' : '关注'}
              </button>
            </div>
          ))}
        </div>
      </SpotlightCard>

      {/* Footer */}
      <p className="text-xs text-white/20 px-1">
        © 2026 Nexus · 隐私政策 · 服务条款
      </p>
    </aside>
  );
}
