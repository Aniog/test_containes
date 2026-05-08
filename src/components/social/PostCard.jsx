import { useState } from 'react';
import { Heart, MessageCircle, Share2, Bookmark, MoreHorizontal, MapPin, Send, ChevronDown } from 'lucide-react';

const TINTS = [
  { bg: 'rgba(108,92,231,0.14)', color: '#4a3ab0' },
  { bg: 'rgba(238,96,165,0.14)', color: '#a02060' },
  { bg: 'rgba(62,200,160,0.16)', color: '#0a5040' },
  { bg: 'rgba(80,170,240,0.14)', color: '#0a3870' },
  { bg: 'rgba(245,185,60,0.18)', color: '#6a3800' },
  { bg: 'rgba(80,210,120,0.16)', color: '#0a4020' },
];

const PREVIEW_LEN = 80;

export default function PostCard({ post, idx }) {
  const [open,    setOpen]    = useState(false);
  const [liked,   setLiked]   = useState(post.liked ?? false);
  const [likes,   setLikes]   = useState(post.likes);
  const [saved,   setSaved]   = useState(false);
  const [showCmt, setShowCmt] = useState(false);
  const [cmtText, setCmtText] = useState('');
  const [popAnim, setPopAnim] = useState(false);

  const tint = TINTS[idx % TINTS.length];
  const fmt  = n => n >= 1000 ? (n / 1000).toFixed(1) + 'K' : n;
  const needsExpand = post.text?.length > PREVIEW_LEN || post.hasImage || post.tags?.length;

  const handleLike = (e) => {
    e.stopPropagation();
    setLiked(v => !v);
    setLikes(v => liked ? v - 1 : v + 1);
    if (!liked) { setPopAnim(true); setTimeout(() => setPopAnim(false), 300); }
  };

  const handleToggle = () => { if (needsExpand) setOpen(v => !v); };

  return (
    <article
      className={`post${open ? ' expanded' : ''}`}
      onClick={handleToggle}
      style={{ padding: '14px 16px' }}
    >
      <div style={{ display: 'flex', gap: 12 }}>

        {/* Avatar + thread line */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
          <div className={post.hasStory ? 's-ring' : 's-ring-seen'}>
            <div style={{ width: 36, height: 36, borderRadius: 9999, background: tint.bg, color: tint.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700 }}>
              {post.author[0]}
            </div>
          </div>
          {open && showCmt && <div className="thread-line" style={{ flex: 1, minHeight: 20 }} />}
        </div>

        {/* Content */}
        <div style={{ flex: 1, minWidth: 0 }}>

          {/* Header row */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}>
              <span style={{ fontSize: 14, fontWeight: 700, color: '#111118', letterSpacing: '-0.01em' }}>{post.author}</span>
              {post.verified && (
                <span style={{ width: 14, height: 14, borderRadius: 9999, background: '#6c5ce7', color: '#fff', fontSize: 8, fontWeight: 700, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>✓</span>
              )}
              <span style={{ fontSize: 12, color: '#c0b8d8' }}>{post.time}</span>
              {open && post.location && (
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 2, fontSize: 11, color: '#c0b8d8' }} className="fade-in">
                  <MapPin size={10} />{post.location}
                </span>
              )}
            </div>
            <button
              onClick={e => e.stopPropagation()}
              style={{ padding: '2px 4px', borderRadius: 6, border: 'none', background: 'transparent', color: '#d0c8e0', cursor: 'pointer' }}
            >
              <MoreHorizontal size={15} />
            </button>
          </div>

          {/* Text — collapsed: preview only */}
          {post.text && (
            <p style={{ fontSize: 14, lineHeight: 1.55, color: '#2a2448', margin: '0 0 8px', wordBreak: 'break-word' }}>
              {open ? post.text : (
                <>
                  {post.text.slice(0, PREVIEW_LEN)}
                  {post.text.length > PREVIEW_LEN && <span style={{ color: '#b0a8c8' }}>…</span>}
                </>
              )}
            </p>
          )}

          {/* Expanded content */}
          <div className={`expand-body ${open ? 'open' : 'closed'}`}>
            {/* Tags */}
            {post.tags?.length > 0 && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 10 }}>
                {post.tags.map(t => (
                  <span key={t} onClick={e => e.stopPropagation()}
                    style={{ fontSize: 11, padding: '2px 9px', borderRadius: 9999, background: 'rgba(108,92,231,0.08)', color: '#6c5ce7', border: '1px solid rgba(108,92,231,0.14)', cursor: 'pointer' }}>
                    #{t}
                  </span>
                ))}
              </div>
            )}

            {/* Image */}
            {post.hasImage && (
              <div className="img-ph" onClick={e => e.stopPropagation()}
                style={{ height: 180, marginBottom: 10, background: 'linear-gradient(135deg, rgba(108,92,231,0.07), rgba(62,200,160,0.07), rgba(238,96,165,0.07))' }}>
                <span style={{ fontSize: 40 }}>{post.emoji ?? '✨'}</span>
                <span style={{ fontSize: 11, color: '#b0a8c8' }}>{post.imgCaption ?? '精彩瞬间'}</span>
              </div>
            )}
          </div>

          {/* Action bar — always visible */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 2 }} onClick={e => e.stopPropagation()}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 2, marginLeft: -8 }}>
              <button className={`act${liked ? ' liked' : ''}`} onClick={handleLike}>
                <Heart size={14} className={popAnim ? 'like-pop' : ''} fill={liked ? 'currentColor' : 'none'} />
                <span>{fmt(likes)}</span>
              </button>
              <button className="act" onClick={() => { if (!open) setOpen(true); setShowCmt(v => !v); }}>
                <MessageCircle size={14} />
                <span>{post.comments}</span>
              </button>
              <button className="act">
                <Share2 size={14} />
                <span>{post.shares}</span>
              </button>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              {needsExpand && (
                <button className="act" onClick={handleToggle} style={{ fontSize: 11, gap: 2 }}>
                  <ChevronDown size={13} style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
                  {open ? '收起' : '展开'}
                </button>
              )}
              <button className={`act${saved ? ' saved' : ''}`} onClick={() => setSaved(v => !v)}>
                <Bookmark size={14} fill={saved ? 'currentColor' : 'none'} />
              </button>
            </div>
          </div>

          {/* Comments — only when open + showCmt */}
          {open && showCmt && (
            <div className="fade-in" style={{ marginTop: 12, paddingTop: 12, borderTop: '1px solid rgba(100,80,200,0.07)' }} onClick={e => e.stopPropagation()}>
              {post.commentList?.map((c, i) => (
                <div key={i} style={{ display: 'flex', gap: 8, marginBottom: 10, alignItems: 'flex-start' }}>
                  <div style={{ width: 26, height: 26, borderRadius: 9999, background: 'rgba(108,92,231,0.12)', color: '#6c5ce7', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 700, flexShrink: 0 }}>
                    {c.user[0]}
                  </div>
                  <div style={{ flex: 1 }}>
                    <span style={{ fontSize: 12, fontWeight: 700, color: '#2a2448', marginRight: 6 }}>{c.user}</span>
                    <span style={{ fontSize: 12, color: '#6a6090' }}>{c.text}</span>
                  </div>
                </div>
              ))}
              <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                <div style={{ width: 26, height: 26, borderRadius: 9999, background: 'rgba(108,92,231,0.12)', color: '#6c5ce7', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 700, flexShrink: 0 }}>我</div>
                <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 8, background: 'rgba(108,92,231,0.06)', borderRadius: 9999, padding: '6px 14px', border: '1px solid rgba(108,92,231,0.10)' }}>
                  <input value={cmtText} onChange={e => setCmtText(e.target.value)} placeholder="写下评论…"
                    className="bare-input" style={{ fontSize: 12 }} />
                  <button disabled={!cmtText.trim()} style={{ background: 'none', border: 'none', cursor: cmtText.trim() ? 'pointer' : 'default', color: cmtText.trim() ? '#6c5ce7' : '#d0c8e0', flexShrink: 0 }}>
                    <Send size={13} />
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
