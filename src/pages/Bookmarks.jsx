import { Bookmark } from 'lucide-react';
import { posts } from '../data/mockData';
import PostCard from '../components/PostCard';

const bookmarkedPosts = posts.filter(p => p.bookmarked);

export default function Bookmarks() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="glass rounded-2xl px-5 py-4 mb-4 flex items-center gap-2">
        <Bookmark size={16} className="text-amber-400" />
        <span className="text-sm font-semibold text-white">收藏</span>
        <span className="ml-auto text-xs text-white/30">{bookmarkedPosts.length} 条收藏</span>
      </div>

      {bookmarkedPosts.length === 0 ? (
        <div className="glass rounded-2xl p-12 text-center">
          <Bookmark size={32} className="text-white/20 mx-auto mb-3" />
          <p className="text-sm text-white/40">还没有收藏任何内容</p>
        </div>
      ) : (
        <div className="space-y-0">
          {bookmarkedPosts.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
