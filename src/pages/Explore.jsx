import { exploreCategories, posts, trendingTopics } from '../data/mockData';
import PostCard from '../components/PostCard';
import SpotlightCard from '../components/SpotlightCard';
import { Hash } from 'lucide-react';

export default function Explore() {
  return (
    <div className="flex gap-6 max-w-5xl mx-auto">
      <main className="flex-1 min-w-0">
        {/* Categories */}
        <SpotlightCard className="glass mb-4" style={{ padding: '1.25rem' }} borderRadius="1rem">
          <h2 className="text-sm font-semibold text-white mb-4">发现话题</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {exploreCategories.map(cat => (
              <SpotlightCard
                key={cat.id}
                className={`relative overflow-hidden cursor-pointer transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] bg-gradient-to-br ${cat.gradient}`}
                style={{ padding: '1rem', borderRadius: '0.75rem' }}
                borderRadius="0.75rem"
              >
                <div className="text-2xl mb-1">{cat.emoji}</div>
                <p className="text-sm font-semibold text-white">{cat.name}</p>
                <p className="text-xs text-white/70">{cat.count} 帖子</p>
              </SpotlightCard>
            ))}
          </div>
        </SpotlightCard>

        {/* Trending Tags */}
        <SpotlightCard className="glass mb-4" style={{ padding: '1.25rem' }} borderRadius="1rem">
          <h2 className="text-sm font-semibold text-white mb-3">热门标签</h2>
          <div className="flex flex-wrap gap-2">
            {trendingTopics.map(topic => (
              <button
                key={topic.id}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-white/80 hover:text-white transition-all duration-200 hover:bg-white/15"
                style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}
              >
                <Hash size={11} />
                {topic.tag.replace('#', '')}
                <span className="text-white/35 ml-1">{topic.count}</span>
              </button>
            ))}
          </div>
        </SpotlightCard>

        {/* Explore Posts */}
        <SpotlightCard className="glass mb-4" style={{ padding: '1rem 1.25rem' }} borderRadius="1rem">
          <h2 className="text-sm font-semibold text-white">精选内容</h2>
        </SpotlightCard>
        <div className="space-y-0">
          {[...posts].reverse().map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </main>

      <div className="hidden lg:block w-72 flex-shrink-0" />
    </div>
  );
}
