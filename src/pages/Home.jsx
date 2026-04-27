import PostCard from '../components/PostCard';
import RightPanel from '../components/RightPanel';
import { posts } from '../data/mockData';
import { Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex gap-6 max-w-5xl mx-auto">
      {/* Feed */}
      <main className="flex-1 min-w-0">
        {/* Header */}
        <div className="glass rounded-2xl px-5 py-4 mb-4 flex items-center gap-2">
          <Sparkles size={16} className="text-purple-400" />
          <span className="text-sm font-semibold text-white">最新动态</span>
        </div>

        {/* Posts */}
        <div className="space-y-0">
          {posts.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </main>

      {/* Right Panel */}
      <RightPanel />
    </div>
  );
}
