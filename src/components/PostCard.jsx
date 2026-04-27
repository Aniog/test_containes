import { useState } from 'react';
import { Heart, MessageCircle, Share2, Bookmark, MoreHorizontal } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { zhCN } from 'date-fns/locale';
import SpotlightCard from './SpotlightCard';

export default function PostCard({ post }) {
  const [liked, setLiked] = useState(post.liked);
  const [bookmarked, setBookmarked] = useState(post.bookmarked);
  const [likeCount, setLikeCount] = useState(post.likes);

  const handleLike = () => {
    setLiked(prev => !prev);
    setLikeCount(prev => liked ? prev - 1 : prev + 1);
  };

  const timeAgo = formatDistanceToNow(new Date(post.time), { addSuffix: true, locale: zhCN });

  return (
    <SpotlightCard
      className="glass-card mb-3"
      style={{ padding: '1.25rem' }}
      borderRadius="1rem"
      showSurfaceGlow={false}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <img
            src={post.user.avatar}
            alt={post.user.name}
            className="w-10 h-10 rounded-full bg-white/10 flex-shrink-0 ring-2 ring-white/10"
          />
          <div>
            <p className="text-sm font-semibold text-white leading-tight">{post.user.name}</p>
            <p className="text-xs text-white/40">@{post.user.username} · {timeAgo}</p>
          </div>
        </div>
        <button className="text-white/20 hover:text-white/60 transition-colors p-1 rounded-lg hover:bg-white/10">
          <MoreHorizontal size={16} />
        </button>
      </div>

      {/* Content */}
      <p className="text-sm text-white/80 leading-relaxed mb-3">{post.content}</p>

      {/* Image */}
      {post.image && (
        <div className="mb-4 rounded-xl overflow-hidden">
          <img
            src={post.image}
            alt="post"
            className="w-full object-cover max-h-64"
            loading="lazy"
          />
        </div>
      )}

      {/* Divider */}
      <div className="border-t border-white/8 pt-3">
        <div className="flex items-center gap-5">
          <button
            onClick={handleLike}
            className={`flex items-center gap-1.5 text-xs font-medium transition-all duration-200 hover:scale-105 ${
              liked ? 'text-pink-400' : 'text-white/40 hover:text-pink-400'
            }`}
          >
            <Heart size={15} fill={liked ? 'currentColor' : 'none'} strokeWidth={1.8} />
            <span>{likeCount}</span>
          </button>

          <button className="flex items-center gap-1.5 text-xs font-medium text-white/40 hover:text-sky-400 transition-all duration-200 hover:scale-105">
            <MessageCircle size={15} strokeWidth={1.8} />
            <span>{post.comments}</span>
          </button>

          <button className="flex items-center gap-1.5 text-xs font-medium text-white/40 hover:text-emerald-400 transition-all duration-200 hover:scale-105">
            <Share2 size={15} strokeWidth={1.8} />
            <span>{post.shares}</span>
          </button>

          <button
            onClick={() => setBookmarked(prev => !prev)}
            className={`ml-auto transition-all duration-200 hover:scale-105 ${
              bookmarked ? 'text-amber-400' : 'text-white/30 hover:text-amber-400'
            }`}
          >
            <Bookmark size={15} fill={bookmarked ? 'currentColor' : 'none'} strokeWidth={1.8} />
          </button>
        </div>
      </div>
    </SpotlightCard>
  );
}
