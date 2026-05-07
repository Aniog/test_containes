import { useState } from 'react';
import { Heart, MessageCircle, Share2, Bookmark, MoreHorizontal, MapPin, Send } from 'lucide-react';

const AVATAR_GRADS = [
  ['#7c3aed', '#db2777'],
  ['#0891b2', '#0284c7'],
  ['#ea580c', '#dc2626'],
  ['#059669', '#0d9488'],
  ['#9333ea', '#c026d3'],
  ['#d97706', '#ea580c'],
];

const IMAGE_SCENES = [
  { from: '#4c1d95', via: '#6d28d9', to: '#1e1b4b', accent: '#a78bfa' },
  { from: '#0c4a6e', via: '#0369a1', to: '#164e63', accent: '#38bdf8' },
  { from: '#881337', via: '#9d174d', to: '#4a044e', accent: '#f9a8d4' },
  { from: '#064e3b', via: '#065f46', to: '#0c4a6e', accent: '#6ee7b7' },
  { from: '#78350f', via: '#92400e', to: '#7f1d1d', accent: '#fcd34d' },
];

export default function PostCard({ post, idx }) {
  const [liked,   setLiked]   = useState(post.liked ?? false);
  const [likes,   setLikes]   = useState(post.likes);
  const [saved,   setSaved]   = useState(false);
  const [popAnim, setPopAnim] = useState(false);
  const [showCmt, setShowCmt] = useState(false);
  const [cmtText, setCmtText] = useState('');

  const [c1, c2] = AVATAR_GRADS[idx % AVATAR_GRADS.length];
  const scene     = IMAGE_SCENES[idx % IMAGE_SCENES.length];

  const handleLike = () => {
    setLiked(v => !v);
    setLikes(v => liked ? v - 1 : v + 1);
    if (!liked) { setPopAnim(true); setTimeout(() => setPopAnim(false), 350); }
  };

  const fmtNum = n => n >= 1000 ? (n / 1000).toFixed(1) + 'K' : n;

  return (
    <article className="lg-card rounded-2xl overflow-hidden">

      {/* Header */}
      <div className="flex items-center justify-between px-4 pt-4 pb-3">
        <div className="flex items-center gap-3">
          <div className={post.hasStory ? 'story-ring' : 'story-ring-seen'}>
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm"
              style={{ background: `linear-gradient(135deg, ${c1}, ${c2})` }}
            >
              {post.author[0]}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-white font-semibold text-sm leading-none" style={{ letterSpacing: '-0.01em' }}>
                {post.author}
              </span>
              {post.verified && (
                <span
                  className="w-3.5 h-3.5 rounded-full flex items-center justify-center text-white text-[8px] font-bold"
                  style={{
                    background: 'linear-gradient(135deg, #38bdf8, #0284c7)',
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.4)',
                  }}
                >✓</span>
              )}
            </div>
            <div className="flex items-center gap-1 mt-0.5 text-[11px]" style={{ color: 'rgba(255,255,255,0.35)' }}>
              {post.location && (
                <><MapPin className="w-2.5 h-2.5" /><span>{post.location}</span><span>·</span></>
              )}
              <span>{post.time}</span>
            </div>
          </div>
        </div>
        <button className="lg-btn-ghost p-1.5 rounded-lg" style={{ color: 'rgba(255,255,255,0.40)' }}>
          <MoreHorizontal className="w-4 h-4" />
        </button>
      </div>

      {/* Text */}
      {post.text && (
        <div className="px-4 pb-3">
          <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.82)' }}>{post.text}</p>
          {post.tags?.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-2">
              {post.tags.map(t => (
                <span
                  key={t}
                  className="text-xs font-medium cursor-pointer transition-colors"
                  style={{ color: 'rgba(167,139,250,0.9)' }}
                >#{t}</span>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Image */}
      {post.hasImage && (
        <div
          className="mx-4 mb-3 rounded-xl overflow-hidden relative flex items-center justify-center"
          style={{
            height: 192,
            background: `linear-gradient(135deg, ${scene.from} 0%, ${scene.via} 50%, ${scene.to} 100%)`,
          }}
        >
          <div className="absolute top-4 left-4 w-24 h-24 rounded-full" style={{
            background: scene.accent, filter: 'blur(32px)', opacity: 0.35,
          }} />
          <div className="absolute bottom-4 right-4 w-32 h-32 rounded-full" style={{
            background: c1, filter: 'blur(40px)', opacity: 0.25,
          }} />
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(175deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.02) 40%, transparent 70%)',
          }} />
          <div className="relative z-10 text-center">
            <div className="text-5xl mb-1 drop-shadow-lg">{post.emoji ?? '✨'}</div>
            <span className="text-xs" style={{ color: 'rgba(255,255,255,0.45)' }}>{post.imgCaption ?? '精彩瞬间'}</span>
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="px-4 pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={handleLike}
              className="flex items-center gap-1.5 transition-colors duration-150"
              style={{ color: liked ? '#f472b6' : 'rgba(255,255,255,0.42)' }}
            >
              <Heart className={`w-[18px] h-[18px] ${popAnim ? 'like-pop' : ''}`} fill={liked ? 'currentColor' : 'none'} />
              <span className="text-xs font-medium">{fmtNum(likes)}</span>
            </button>

            <button
              onClick={() => setShowCmt(v => !v)}
              className="flex items-center gap-1.5 transition-colors duration-150"
              style={{ color: showCmt ? 'rgba(167,139,250,0.9)' : 'rgba(255,255,255,0.42)' }}
            >
              <MessageCircle className="w-[18px] h-[18px]" />
              <span className="text-xs font-medium">{post.comments}</span>
            </button>

            <button
              className="flex items-center gap-1.5 transition-colors duration-150"
              style={{ color: 'rgba(255,255,255,0.42)' }}
            >
              <Share2 className="w-[18px] h-[18px]" />
              <span className="text-xs font-medium">{post.shares}</span>
            </button>
          </div>

          <button
            onClick={() => setSaved(v => !v)}
            className="transition-colors duration-150"
            style={{ color: saved ? 'rgba(167,139,250,0.9)' : 'rgba(255,255,255,0.42)' }}
          >
            <Bookmark className="w-[18px] h-[18px]" fill={saved ? 'currentColor' : 'none'} />
          </button>
        </div>

        {/* Comments */}
        {showCmt && (
          <div className="mt-3 pt-3 space-y-2" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
            {post.commentList?.map((c, i) => {
              const [ca, cb] = AVATAR_GRADS[(i + 1) % AVATAR_GRADS.length];
              return (
                <div key={i} className="flex gap-2 items-start">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0 mt-0.5"
                    style={{ background: `linear-gradient(135deg, ${ca}, ${cb})` }}
                  >
                    {c.user[0]}
                  </div>
                  <div className="lg-pill rounded-xl px-3 py-1.5 flex-1">
                    <span className="text-xs font-semibold" style={{ color: 'rgba(255,255,255,0.90)' }}>{c.user} </span>
                    <span className="text-xs" style={{ color: 'rgba(255,255,255,0.60)' }}>{c.text}</span>
                  </div>
                </div>
              );
            })}
            <div className="flex gap-2 items-center mt-1">
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, #7c3aed, #db2777)' }}
              >我</div>
              <div className="flex-1 flex items-center gap-2 lg-input rounded-xl px-3 py-1.5">
                <input
                  value={cmtText}
                  onChange={e => setCmtText(e.target.value)}
                  placeholder="写下评论..."
                  className="bg-transparent text-xs outline-none flex-1"
                  style={{ color: 'rgba(255,255,255,0.80)', caretColor: '#a78bfa' }}
                />
                <button
                  disabled={!cmtText.trim()}
                  style={{ color: cmtText.trim() ? '#a78bfa' : 'rgba(255,255,255,0.20)' }}
                  className="transition-colors"
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
