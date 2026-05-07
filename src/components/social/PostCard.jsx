import { useState } from 'react';
import { Heart, MessageCircle, Share2, Bookmark, MoreHorizontal, MapPin, Send } from 'lucide-react';

const AVATAR_GRADS = [
  'from-violet-500 to-purple-600',
  'from-sky-400 to-blue-600',
  'from-orange-400 to-rose-500',
  'from-emerald-400 to-teal-600',
  'from-pink-400 to-fuchsia-600',
  'from-amber-400 to-orange-500',
];

const IMAGE_SCENES = [
  { bg: 'from-violet-900 via-purple-800 to-indigo-900', accent: 'from-violet-500 to-pink-500' },
  { bg: 'from-sky-900 via-blue-800 to-cyan-900',        accent: 'from-sky-400 to-cyan-400' },
  { bg: 'from-rose-900 via-pink-800 to-fuchsia-900',    accent: 'from-rose-400 to-pink-400' },
  { bg: 'from-emerald-900 via-teal-800 to-cyan-900',    accent: 'from-emerald-400 to-teal-400' },
  { bg: 'from-amber-900 via-orange-800 to-red-900',     accent: 'from-amber-400 to-orange-400' },
];

export default function PostCard({ post, idx }) {
  const [liked,   setLiked]   = useState(post.liked ?? false);
  const [likes,   setLikes]   = useState(post.likes);
  const [saved,   setSaved]   = useState(false);
  const [popAnim, setPopAnim] = useState(false);
  const [showCmt, setShowCmt] = useState(false);
  const [cmtText, setCmtText] = useState('');

  const avatarGrad = AVATAR_GRADS[idx % AVATAR_GRADS.length];
  const scene      = IMAGE_SCENES[idx % IMAGE_SCENES.length];

  const handleLike = () => {
    setLiked(v => !v);
    setLikes(v => liked ? v - 1 : v + 1);
    if (!liked) { setPopAnim(true); setTimeout(() => setPopAnim(false), 320); }
  };

  return (
    <article className="lg-card rounded-2xl overflow-hidden">

      {/* Header */}
      <div className="flex items-center justify-between px-4 pt-4 pb-3">
        <div className="flex items-center gap-3">
          <div className={post.hasStory ? 'story-ring' : 'story-ring-seen'}>
            <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${avatarGrad} flex items-center justify-center text-white font-bold text-sm`}>
              {post.author[0]}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-white font-semibold text-sm leading-none">{post.author}</span>
              {post.verified && (
                <span className="w-3.5 h-3.5 rounded-full bg-sky-400 flex items-center justify-center text-white text-[8px] font-bold">✓</span>
              )}
            </div>
            <div className="flex items-center gap-1 mt-0.5 text-white/38 text-[11px]">
              {post.location && <><MapPin className="w-2.5 h-2.5" /><span>{post.location}</span><span>·</span></>}
              <span>{post.time}</span>
            </div>
          </div>
        </div>
        <button className="lg-btn-ghost p-1.5 rounded-lg">
          <MoreHorizontal className="w-4 h-4 text-white/50" />
        </button>
      </div>

      {/* Text */}
      {post.text && (
        <div className="px-4 pb-3">
          <p className="text-white/80 text-sm leading-relaxed">{post.text}</p>
          {post.tags?.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-2">
              {post.tags.map(t => (
                <span key={t} className="text-violet-300 text-xs font-medium hover:text-pink-300 cursor-pointer transition-colors">#{t}</span>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Image */}
      {post.hasImage && (
        <div className={`mx-4 mb-3 rounded-xl overflow-hidden bg-gradient-to-br ${scene.bg} h-48 relative flex items-center justify-center`}>
          <div className={`absolute top-3 left-3 w-20 h-20 rounded-full bg-gradient-to-br ${scene.accent} blur-2xl opacity-40`} />
          <div className={`absolute bottom-3 right-3 w-28 h-28 rounded-full bg-gradient-to-br ${AVATAR_GRADS[(idx+2)%AVATAR_GRADS.length]} blur-3xl opacity-30`} />
          <div className="absolute inset-0 lg-surface opacity-20" />
          <div className="relative text-center z-10">
            <div className="text-5xl mb-1 drop-shadow-lg">{post.emoji ?? '✨'}</div>
            <span className="text-white/50 text-xs">{post.imgCaption ?? '精彩瞬间'}</span>
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="px-4 pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={handleLike} className={`flex items-center gap-1.5 transition-colors ${liked ? 'text-pink-400' : 'text-white/45 hover:text-white/75'}`}>
              <Heart className={`w-[18px] h-[18px] ${popAnim ? 'like-pop' : ''}`} fill={liked ? 'currentColor' : 'none'} />
              <span className="text-xs font-medium">{likes >= 1000 ? (likes/1000).toFixed(1)+'K' : likes}</span>
            </button>
            <button onClick={() => setShowCmt(v => !v)} className="flex items-center gap-1.5 text-white/45 hover:text-white/75 transition-colors">
              <MessageCircle className="w-[18px] h-[18px]" />
              <span className="text-xs font-medium">{post.comments}</span>
            </button>
            <button className="flex items-center gap-1.5 text-white/45 hover:text-white/75 transition-colors">
              <Share2 className="w-[18px] h-[18px]" />
              <span className="text-xs font-medium">{post.shares}</span>
            </button>
          </div>
          <button onClick={() => setSaved(v => !v)} className={`transition-colors ${saved ? 'text-violet-400' : 'text-white/45 hover:text-white/75'}`}>
            <Bookmark className="w-[18px] h-[18px]" fill={saved ? 'currentColor' : 'none'} />
          </button>
        </div>

        {/* Comments section */}
        {showCmt && (
          <div className="mt-3 pt-3 border-t border-white/8 space-y-2">
            {post.commentList?.map((c, i) => (
              <div key={i} className="flex gap-2 items-start">
                <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${AVATAR_GRADS[(i+1)%AVATAR_GRADS.length]} flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0 mt-0.5`}>
                  {c.user[0]}
                </div>
                <div className="lg-pill rounded-xl px-3 py-1.5 flex-1">
                  <span className="text-white/90 text-xs font-semibold">{c.user} </span>
                  <span className="text-white/60 text-xs">{c.text}</span>
                </div>
              </div>
            ))}
            <div className="flex gap-2 items-center mt-1">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0">
                我
              </div>
              <div className="flex-1 flex items-center gap-2 lg-input rounded-xl px-3 py-1.5">
                <input
                  value={cmtText}
                  onChange={e => setCmtText(e.target.value)}
                  placeholder="写下评论..."
                  className="bg-transparent text-xs text-white/80 placeholder-white/30 outline-none flex-1"
                />
                <button disabled={!cmtText.trim()} className="text-violet-400 disabled:opacity-30 transition-opacity">
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