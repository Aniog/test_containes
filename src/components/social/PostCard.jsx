import { useState } from 'react';
import { Heart, MessageCircle, Share2, Bookmark, MoreHorizontal, MapPin, Send } from 'lucide-react';

// Soft pastel avatar tints
const AVATAR_TINTS = [
  { bg: 'rgba(168,220,200,0.45)', color: '#1a5a48' },
  { bg: 'rgba(240,190,210,0.45)', color: '#6a2040' },
  { bg: 'rgba(180,210,240,0.45)', color: '#1a3a6a' },
  { bg: 'rgba(200,185,240,0.45)', color: '#3a2070' },
  { bg: 'rgba(250,220,180,0.45)', color: '#6a3a10' },
  { bg: 'rgba(200,230,180,0.45)', color: '#2a4a18' },
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
              <span className="text-sm font-semibold" style={{ color: '#2a2640', letterSpacing: '-0.01em' }}>
                {post.author}
              </span>
              {post.verified && (
                <span
                  className="w-3.5 h-3.5 rounded-full flex items-center justify-center text-[8px] font-bold"
                  style={{
                    background: 'linear-gradient(135deg, rgba(134,210,185,0.80), rgba(160,190,230,0.80))',
                    border: '1px solid rgba(255,255,255,0.70)',
                    color: '#1a4a42',
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.60)',
                  }}
                >✓</span>
              )}
            </div>
            <div className="flex items-center gap-1 mt-0.5 text-[11px]" style={{ color: '#a09ac0' }}>
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
          <p className="text-sm leading-relaxed" style={{ color: '#4a4468' }}>{post.text}</p>
          {post.tags?.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-2">
              {post.tags.map(t => (
                <span
                  key={t}
                  className="text-xs px-2 py-0.5 rounded-full cursor-pointer"
                  style={{
                    background: 'rgba(160,190,230,0.20)',
                    color: '#5a70b0',
                    border: '1px solid rgba(160,190,230,0.30)',
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
            background: 'linear-gradient(135deg, rgba(168,220,200,0.20) 0%, rgba(180,210,240,0.20) 50%, rgba(240,190,210,0.20) 100%)',
            border: '1px solid rgba(255,255,255,0.70)',
          }}
        >
          <div className="text-center">
            <div className="text-4xl mb-1.5">{post.emoji ?? '✨'}</div>
            <span className="text-xs" style={{ color: '#a09ac0' }}>{post.imgCaption ?? '精彩瞬间'}</span>
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="px-4 pb-4">
        <div className="flex items-center justify-between pt-3" style={{ borderTop: '1px solid rgba(160,140,220,0.10)' }}>
          <div className="flex items-center gap-5">
            <button
              onClick={handleLike}
              className="flex items-center gap-1.5 transition-colors duration-150"
              style={{ color: liked ? '#e06080' : '#b0a8c8' }}
            >
              <Heart className={`w-[17px] h-[17px] ${popAnim ? 'like-pop' : ''}`} fill={liked ? 'currentColor' : 'none'} />
              <span className="text-xs font-medium">{fmtNum(likes)}</span>
            </button>

            <button
              onClick={() => setShowCmt(v => !v)}
              className="flex items-center gap-1.5 transition-colors duration-150"
              style={{ color: showCmt ? '#7090c0' : '#b0a8c8' }}
            >
              <MessageCircle className="w-[17px] h-[17px]" />
              <span className="text-xs font-medium">{post.comments}</span>
            </button>

            <button className="flex items-center gap-1.5" style={{ color: '#b0a8c8' }}>
              <Share2 className="w-[17px] h-[17px]" />
              <span className="text-xs font-medium">{post.shares}</span>
            </button>
          </div>

          <button
            onClick={() => setSaved(v => !v)}
            className="transition-colors duration-150"
            style={{ color: saved ? '#9070c0' : '#b0a8c8' }}
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
                  style={{ background: 'rgba(200,185,240,0.35)', color: '#4a3880' }}
                >
                  {c.user[0]}
                </div>
                <div className="lg-pill rounded-xl px-3 py-1.5 flex-1">
                  <span className="text-xs font-semibold" style={{ color: '#3d3660' }}>{c.user} </span>
                  <span className="text-xs" style={{ color: '#7a7498' }}>{c.text}</span>
                </div>
              </div>
            ))}
            <div className="flex gap-2 items-center mt-1">
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-medium flex-shrink-0"
                style={{ background: 'rgba(200,185,240,0.35)', color: '#4a3880' }}
              >我</div>
              <div className="flex-1 flex items-center gap-2 lg-input rounded-xl px-3 py-1.5">
                <input
                  value={cmtText}
                  onChange={e => setCmtText(e.target.value)}
                  placeholder="写下评论..."
                  className="bg-transparent text-xs outline-none flex-1"
                  style={{ color: '#4a4468' }}
                />
                <button
                  disabled={!cmtText.trim()}
                  style={{ color: cmtText.trim() ? '#7090c0' : '#c0b8d8' }}
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
