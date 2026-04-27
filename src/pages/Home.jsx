import PostCard from '../components/PostCard';
import RightPanel from '../components/RightPanel';
import SpotlightFeed from '../components/SpotlightFeed';
import SpotlightCard from '../components/SpotlightCard';
import { posts } from '../data/mockData';
import { Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex gap-6 max-w-5xl mx-auto">
      <main className="flex-1 min-w-0">
        {/* Header */}
        <SpotlightCard className="glass mb-4" style={{ padding: '1rem 1.25rem' }} borderRadius="1rem">
          <div className="flex items-center gap-2">
            <Sparkles size={16} className="text-purple-400" />
            <span className="text-sm font-semibold text-white">最新动态</span>
          </div>
        </SpotlightCard>

        {/* Feed — unified glow spans all cards as one continuous light */}
        <SpotlightFeed>
          {posts.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </SpotlightFeed>
      </main>

      <RightPanel />
    </div>
  );
}
