import { useState } from 'react';
import { Heart, MessageCircle, Share2, Bookmark, MoreHorizontal, MapPin, Send } from 'lucide-react';

const AVATAR_TINTS = [
  { bg: 'rgba(62,200,160,0.38)',  color: '#0a3828' },
  { bg: 'rgba(238,96,165,0.35)',  color: '#5a0830' },
  { bg: 'rgba(80,165,240,0.38)',  color: '#0a2858' },
  { bg: 'rgba(155,110,240,0.38)', color: '#2a0868' },
  { bg: 'rgba(245,185,60,0.40)',  color: '#5a2800' },
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
  const fmtNum = n => n >= 1000 ? (n / 1000).toFixed(1) + 'K' : n;

  const handleLike = () => {
    setLiked(v => !v);
    setLikes(v => liked ? v - 1 : v + 1);
    if (!liked) { setPopAnim(true); setTimeout(() => setPopAnim(false), 300); }
  };

  return (
    <article className="post-row px-4 py-4" style={{ borderBottom: '1px solid rgba(140,110,220,0.10)' }}>
      <div className="flex gap-3">

        {/* Avatar column */}
        <div className="flex-shrink-0 flex flex-col items-center">
          <div className={post.hasStory ? 'story-ring' : 'story-ring-seen'}>
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
              style={{ background: tint.bg, color: tint.color }}>
              {post.author[0]}
            </div>
          </div>
          {/* Thread line */}
          {showCmt && <div className="w-px flex-1 mt-2" style={{ background: 'rgba(140,110,220,0.15)', minHeight: 24 }} />}
        </div>

        {/* Content column */}
        <div className="flex-1 min-w-0">

          {/* Header */}
          <div className="flex items-start justify-between mb-1">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-sm font-semibold" style={{ color: '#1e1a38' }}>{post.author}</span>
              {post.verified && (
                <span className="w-3.5 h-3.5 rounded-full flex items-center justify-center text-[8px] font-bold"
                  style={{ background: 'linear-gradient(135deg,#3ec8a0,#50aae0)', color: '#fff' }}>✓</span>
              )}
              <span className="text-[11px]" style={{ color: '#b0a8d0' }}>·</span>
              {post.location && (
                <span className="flex items-center gap-0.5 text-[11px]" style={{ color: '#b0a8d0' }}>
                  <MapPin className="w-2.5 h-2.5" />{post.location}
                </span>
              )}
              <span className="text-[11px]" style={{ color: '#b0a8d0' }}>{post.time}</span>
            </div>
            <button className="p-1 rounded-lg hover:bg-white/30 transition-colors" style={{ color: '#c0b8d8', border: 'none', background: 'transparent', cursor: 'pointer' }}>
              <MoreHorizontal className="w-4 h-4" />
            </button>
          </div>

          {/* Text */}
          {post.text && (
            <p className="text-sm leading-relaxed mb-2" style={{ color: '#3a3060' }}>{post.text}</p>
          )}

          {/* Tags */}
          {post.tags?.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-3">
              {post.tags.map(t => <span key={t} className="tag-chip">#{t}</span>)}
            </div>
          )}

          {/* Image */}
          {post.hasImage && (
            <div className="mb-3 rounded-2xl overflow-hidden flex items-center justify-center"
              style={{
                height: 200,
                background: 'linear-gradient(135deg, rgba(62,200,160,0.14) 0%, rgba(80,165,240,0.14) 50%, rgba(238,96,165,0.14) 100%)',
                border: '1px solid rgba(255,255,255,0.60)',
              }}>
              <div className="text-center">
                <div className="text-5xl mb-2">{post.emoji ?? '✨'}</div>
                <span className="text-xs" style={{ color: '#a898c8' }}>{post.imgCaption ?? '精彩瞬间'}</span>
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex items-center justify-between -ml-2">
            <div className="flex items-center gap-1">
              <button className={`action-btn ${liked ? 'liked' : ''}`} onClick={handleLike}>
                <Heart className={`w-4 h-4 ${popAnim ? 'like-pop' : ''}`} fill={liked ? 'currentColor' : 'none'} />
                <span>{fmtNum(likes)}</span>
              </button>
              <button className="action-btn" onClick={() => setShowCmt(v => !v)}>
                <MessageCircle className="w-4 h-4" />
                <span>{post.comments}</span>
              </button>
              <button className="action-btn">
                <Share2 className="w-4 h-4" />
                <span>{post.shares}</span>
              </button>
            </div>
            <button className={`action-btn ${saved ? 'saved' : ''}`} onClick={() => setSaved(v => !v)}>
              <Bookmark className="w-4 h-4" fill={saved ? 'currentColor' : 'none'} />
            </button>
          </div>

          {/* Comments */}
          {showCmt && (
            <div className="mt-3 space-y-3">
              {post.commentList?.map((c, i) => (
                <div key={i} className="flex gap-2.5 items-start">
                  <div className="w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold flex-shrink-0"
                    style={{ background: 'rgba(155,110,240,0.28)', color: '#2a0868' }}>
                    {c.user[0]}
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-semibold mr-1.5" style={{ color: '#2a2060' }}>{c.user}</span>
                    <span className="text-xs" style={{ color: '#6858a0' }}>{c.text}</span>
                  </div>
                </div>
              ))}
              <div className="flex gap-2.5 items-center">
                <div className="w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold flex-shrink-0"
                  style={{ background: 'rgba(155,110,240,0.28)', color: '#2a0868' }}>我</div>
                <div className="flex-1 flex items-center gap-2 px-3 py-1.5 rounded-full"
                  style={{ background: 'rgba(140,110,220,0.08)', border: '1px solid rgba(140,110,220,0.14)' }}>
                  <input value={cmtText} onChange={e => setCmtText(e.target.value)}
                    placeholder="写下评论..." className="bare-input text-xs flex-1" />
                  <button disabled={!cmtText.trim()} style={{ color: cmtText.trim() ? '#3878d0' : '#c0b8d8', background: 'none', border: 'none', cursor: cmtText.trim() ? 'pointer' : 'default' }}>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
