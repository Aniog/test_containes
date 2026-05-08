import { useState } from 'react';
import { Heart, MessageCircle, Share2, Bookmark, MoreHorizontal, MapPin, Send } from 'lucide-react';

const AVATAR_COLORS = [
  'rgba(255,255,255,0.12)',
  'rgba(255,255,255,0.10)',
  'rgba(255,255,255,0.08)',
  'rgba(255,255,255,0.11)',
  'rgba(255,255,255,0.09)',
  'rgba(255,255,255,0.13)',
];

export default function PostCard({ post, idx }) {
  const [liked,   setLiked]   = useState(post.liked ?? false);
  const [likes,   setLikes]   = useState(post.likes);
  const [saved,   setSaved]   = useState(false);
  const [popAnim, setPopAnim] = useState(false);
  const [showCmt, setShowCmt] = useState(false);
  const [cmtText, setCmtText] = useState('');

  const avatarBg = AVATAR_COLORS[idx % AVATAR_COLORS.length];

  const handleLike = () => {
    setLiked(v => !v);
    setLikes(v => liked ? v - 1 : v + 1);
    if (!liked) { setPopAnim(true); setTimeout(() => setPopAnim(false), 300); }
  };

  const fmtNum = n => n >= 1000 ? (n / 1000).toFixed(1) + 'K' : n;

  return (
    <article className="lg-card rounded-2xl overflow-hidden">

      {/* Header */}
      <div className="flex items-center justify-between px-4 pt-4 pb-3">
        <div className="flex items-center gap-3">
          <div className={post.hasStory ? 'story-ring' : 'story-ring-seen'}>
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold"
              style={{ background: avatarBg, color: 'rgba(255,255,255,0.75)' }}
            >
              {post.author[0]}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-semibold" style={{ color: 'rgba(255,255,255,0.88)', letterSpacing: '-0.01em' }}>
                {post.author}
              </span>
              {post.verified && (
                <span
                  className="w-3.5 h-3.5 rounded-full flex items-center justify-center text-[8px] font-bold"
                  style={{
                    background: 'rgba(255,255,255,0.15)',
                    border: '1px solid rgba(255,255,255,0.20)',
                    color: 'rgba(255,255,255,0.80)',
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.20)',
                  }}
                >✓</span>
              )}
            </div>
            <div className="flex items-center gap-1 mt-0.5 text-[11px]" style={{ color: 'rgba(255,255,255,0.28)' }}>
              {post.location && (
                <><MapPin className="w-2.5 h-2.5" /><span>{post.location}</span><span>·</span></>
              )}
              <span>{post.time}</span>
            </div>
          </div>
        </div>
        <button className="lg-btn-ghost p-1.5 rounded-lg">
          <MoreHorizontal className="w-4 h-4" />
        </button>
      </div>

      {/* Text */}
      {post.text && (
        <div className="px-4 pb-3">
          <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.72)' }}>{post.text}</p>
          {post.tags?.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-2">
              {post.tags.map(t => (
                <span key={t} className="text-xs cursor-pointer" style={{ color: 'rgba(255,255,255,0.38)' }}>
                  #{t}
                </span>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Image placeholder */}
      {post.hasImage && (
        <div
          className="mx-4 mb-3 rounded-xl overflow-hidden relative flex items-center justify-center"
          style={{
            height: 180,
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          <div className="text-center">
            <div className="text-4xl mb-1.5">{post.emoji ?? '✨'}</div>
            <span className="text-xs" style={{ color: 'rgba(255,255,255,0.25)' }}>{post.imgCaption ?? '精彩瞬间'}</span>
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="px-4 pb-4">
        <div
          className="flex items-center justify-between pt-3"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
        >
          <div className="flex items-center gap-5">
            <button
              onClick={handleLike}
              className="flex items-center gap-1.5 transition-colors duration-150"
              style={{ color: liked ? 'rgba(255,255,255,0.80)' : 'rgba(255,255,255,0.30)' }}
            >
              <Heart className={`w-[17px] h-[17px] ${popAnim ? 'like-pop' : ''}`} fill={liked ? 'currentColor' : 'none'} />
              <span className="text-xs">{fmtNum(likes)}</span>
            </button>

            <button
              onClick={() => setShowCmt(v => !v)}
              className="flex items-center gap-1.5 transition-colors duration-150"
              style={{ color: showCmt ? 'rgba(255,255,255,0.70)' : 'rgba(255,255,255,0.30)' }}
            >
              <MessageCircle className="w-[17px] h-[17px]" />
              <span className="text-xs">{post.comments}</span>
            </button>

            <button
              className="flex items-center gap-1.5"
              style={{ color: 'rgba(255,255,255,0.30)' }}
            >
              <Share2 className="w-[17px] h-[17px]" />
              <span className="text-xs">{post.shares}</span>
            </button>
          </div>

          <button
            onClick={() => setSaved(v => !v)}
            className="transition-colors duration-150"
            style={{ color: saved ? 'rgba(255,255,255,0.75)' : 'rgba(255,255,255,0.28)' }}
          >
            <Bookmark className="w-[17px] h-[17px]" fill={saved ? 'currentColor' : 'none'} />
          </button>
        </div>

        {/* Comments */}
        {showCmt && (
          <div className="mt-3 space-y-2">
            {post.commentList?.map((c, i) => (
              <div key={i} className="flex gap-2 items-start">
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-medium flex-shrink-0 mt-0.5"
                  style={{ background: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.55)' }}
                >
                  {c.user[0]}
                </div>
                <div className="lg-pill rounded-xl px-3 py-1.5 flex-1">
                  <span className="text-xs font-medium" style={{ color: 'rgba(255,255,255,0.75)' }}>{c.user} </span>
                  <span className="text-xs" style={{ color: 'rgba(255,255,255,0.45)' }}>{c.text}</span>
                </div>
              </div>
            ))}
            <div className="flex gap-2 items-center mt-1">
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-medium flex-shrink-0"
                style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.55)' }}
              >我</div>
              <div className="flex-1 flex items-center gap-2 lg-input rounded-xl px-3 py-1.5">
                <input
                  value={cmtText}
                  onChange={e => setCmtText(e.target.value)}
                  placeholder="写下评论..."
                  className="bg-transparent text-xs outline-none flex-1"
                  style={{ color: 'rgba(255,255,255,0.70)' }}
                />
                <button
                  disabled={!cmtText.trim()}
                  style={{ color: cmtText.trim() ? 'rgba(255,255,255,0.60)' : 'rgba(255,255,255,0.18)' }}
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
