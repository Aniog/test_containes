import { useState } from 'react';
import { Heart, MessageCircle, Share2, Bookmark, MoreHorizontal, MapPin, Send } from 'lucide-react';

const AVATAR_TINTS = [
  { bg: 'rgba(60,200,160,0.38)',  color: '#0a3828' },
  { bg: 'rgba(238,100,165,0.35)', color: '#5a0830' },
  { bg: 'rgba(80,165,240,0.38)',  color: '#0a2858' },
  { bg: 'rgba(155,110,240,0.38)', color: '#2a0868' },
  { bg: 'rgba(245,185,60,0.38)',  color: '#5a2800' },
  { bg: 'rgba(80,210,120,0.38)',  color: '#0a3818' },
];

export default function PostCard({ post, idx }) {
  const [liked,   setLiked]   = useState(post.liked ?? false);
  const [likes,   setLikes]   = useState(post.likes);
  const [saved,   setSaved]   = useState(false);
  const [popAnim, setPopAnim] = useState(false);
  const [showCmt, setShowCmt] = useState(false);
  const [cmtText, setCmtText] = useState('');

  const tint = AVATAR_TINTS[idx % AVATAR_TINTS.length];

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
              style={{ background: tint.bg, color: tint.color }}
            >
              {post.author[0]}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-semibold" style={{ color: '#221e40', letterSpacing: '-0.01em' }}>
                {post.author}
              </span>
              {post.verified && (
                <span
                  className="w-3.5 h-3.5 rounded-full flex items-center justify-center text-[8px] font-bold"
                  style={{
                    background: 'linear-gradient(135deg, rgba(60,200,160,0.85), rgba(80,170,230,0.85))',
                    border: '1px solid rgba(255,255,255,0.70)',
                    color: '#0a3828',
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.60)',
                  }}
                >✓</span>
              )}
            </div>
            <div className="flex items-center gap-1 mt-0.5 text-[11px]" style={{ color: '#8878b8' }}>
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
          <p className="text-sm leading-relaxed" style={{ color: '#3a3460' }}>{post.text}</p>
          {post.tags?.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-2">
              {post.tags.map(t => (
                <span
                  key={t}
                  className="text-xs px-2 py-0.5 rounded-full cursor-pointer"
                  style={{
                    background: 'rgba(80,150,240,0.15)',
                    color: '#3860c0',
                    border: '1px solid rgba(80,150,240,0.28)',
                  }}
                >
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
          className="mx-4 mb-3 rounded-xl overflow-hidden flex items-center justify-center"
          style={{
            height: 180,
            background: 'linear-gradient(135deg, rgba(60,200,160,0.18) 0%, rgba(80,165,240,0.18) 50%, rgba(238,100,165,0.18) 100%)',
            border: '1px solid rgba(255,255,255,0.75)',
          }}
        >
          <div className="text-center">
            <div className="text-4xl mb-1.5">{post.emoji ?? '✨'}</div>
            <span className="text-xs" style={{ color: '#8878b8' }}>{post.imgCaption ?? '精彩瞬间'}</span>
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="px-4 pb-4">
        <div className="flex items-center justify-between pt-3" style={{ borderTop: '1px solid rgba(140,110,220,0.12)' }}>
          <div className="flex items-center gap-5">
            <button
              onClick={handleLike}
              className="flex items-center gap-1.5 transition-colors duration-150"
              style={{ color: liked ? '#e83878' : '#9888c0' }}
            >
              <Heart className={`w-[17px] h-[17px] ${popAnim ? 'like-pop' : ''}`} fill={liked ? 'currentColor' : 'none'} />
              <span className="text-xs font-medium">{fmtNum(likes)}</span>
            </button>

            <button
              onClick={() => setShowCmt(v => !v)}
              className="flex items-center gap-1.5 transition-colors duration-150"
              style={{ color: showCmt ? '#3878d0' : '#9888c0' }}
            >
              <MessageCircle className="w-[17px] h-[17px]" />
              <span className="text-xs font-medium">{post.comments}</span>
            </button>

            <button className="flex items-center gap-1.5" style={{ color: '#9888c0' }}>
              <Share2 className="w-[17px] h-[17px]" />
              <span className="text-xs font-medium">{post.shares}</span>
            </button>
          </div>

          <button
            onClick={() => setSaved(v => !v)}
            className="transition-colors duration-150"
            style={{ color: saved ? '#7848d8' : '#9888c0' }}
          >
            <Bookmark className="w-[17px] h-[17px]" fill={saved ? 'currentColor' : 'none'} />
          </button>
        </div>

        {showCmt && (
          <div className="mt-3 space-y-2">
            {post.commentList?.map((c, i) => (
              <div key={i} className="flex gap-2 items-start">
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-medium flex-shrink-0 mt-0.5"
                  style={{ background: 'rgba(155,110,240,0.28)', color: '#2a0868' }}
                >
                  {c.user[0]}
                </div>
                <div className="lg-pill rounded-xl px-3 py-1.5 flex-1">
                  <span className="text-xs font-semibold" style={{ color: '#2e2860' }}>{c.user} </span>
                  <span className="text-xs" style={{ color: '#6858a0' }}>{c.text}</span>
                </div>
              </div>
            ))}
            <div className="flex gap-2 items-center mt-1">
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-medium flex-shrink-0"
                style={{ background: 'rgba(155,110,240,0.28)', color: '#2a0868' }}
              >我</div>
              <div className="flex-1 flex items-center gap-2 lg-input rounded-xl px-3 py-1.5">
                <input
                  value={cmtText}
                  onChange={e => setCmtText(e.target.value)}
                  placeholder="写下评论..."
                  className="bg-transparent text-xs outline-none flex-1"
                  style={{ color: '#3a3460' }}
                />
                <button
                  disabled={!cmtText.trim()}
                  style={{ color: cmtText.trim() ? '#3878d0' : '#b0a8d0' }}
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
