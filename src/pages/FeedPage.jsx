import { useState } from 'react';
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal, BadgeCheck } from 'lucide-react';
import { stories, posts as initialPosts, currentUser } from '../data/mockData';

function StoryItem({ story }) {
  const [seen, setSeen] = useState(story.seen);
  return (
    <button onClick={() => setSeen(true)} className="flex flex-col items-center gap-1.5 flex-shrink-0">
      <div style={{ padding: 2, borderRadius: '50%', background: seen ? 'rgba(255,255,255,0.15)' : 'linear-gradient(135deg, #7C3AED, #EC4899, #F59E0B)' }}>
        <div className="w-14 h-14 rounded-full overflow-hidden" style={{ border: '2px solid rgba(15,12,41,0.9)' }}>
          <img src={story.user.avatar} alt={story.user.name} className="w-full h-full object-cover" />
        </div>
      </div>
      <span style={{ fontSize: 11, color: seen ? 'rgba(255,255,255,0.35)' : 'rgba(255,255,255,0.85)', fontWeight: 500, maxWidth: 56, textAlign: 'center', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
        {story.user.name.slice(0, 2)}
      </span>
    </button>
  );
}

function PostCard({ post, onLike, onSave }) {
  const [likeAnim, setLikeAnim] = useState(false);

  const handleLike = () => {
    setLikeAnim(true);
    onLike(post.id);
    setTimeout(() => setLikeAnim(false), 300);
  };

  return (
    <div className="glass-card rounded-2xl overflow-hidden mb-4">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <div style={{ padding: 1.5, borderRadius: '50%', background: 'linear-gradient(135deg, #7C3AED, #EC4899, #F59E0B)' }}>
            <div className="w-9 h-9 rounded-full overflow-hidden" style={{ border: '2px solid rgba(15,12,41,0.9)' }}>
              <img src={post.user.avatar} alt={post.user.name} className="w-full h-full object-cover" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1">
              <span style={{ fontWeight: 600, fontSize: 14, color: '#fff' }}>{post.user.name}</span>
              {post.user.verified && <BadgeCheck size={14} style={{ color: '#a78bfa' }} />}
            </div>
            <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.45)' }}>{post.time}</span>
          </div>
        </div>
        <button className="w-8 h-8 flex items-center justify-center rounded-full" style={{ color: 'rgba(255,255,255,0.5)' }}>
          <MoreHorizontal size={18} />
        </button>
      </div>

      <div className="relative w-full" style={{ aspectRatio: '4/3' }}>
        <img src={post.image} alt="post" className="w-full h-full object-cover" />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 50%)' }} />
      </div>

      <div className="px-4 pt-3 pb-3">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-4">
            <button onClick={handleLike} className="flex items-center gap-1.5">
              <Heart size={22} className={likeAnim ? 'like-pop' : ''} style={{ color: post.liked ? '#f43f5e' : 'rgba(255,255,255,0.7)', fill: post.liked ? '#f43f5e' : 'none', transition: 'color 0.2s' }} />
              <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>{post.likes.toLocaleString()}</span>
            </button>
            <button className="flex items-center gap-1.5">
              <MessageCircle size={22} style={{ color: 'rgba(255,255,255,0.7)' }} />
              <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>{post.comments}</span>
            </button>
            <button><Send size={20} style={{ color: 'rgba(255,255,255,0.7)' }} /></button>
          </div>
          <button onClick={() => onSave(post.id)}>
            <Bookmark size={22} style={{ color: post.saved ? '#a78bfa' : 'rgba(255,255,255,0.7)', fill: post.saved ? '#a78bfa' : 'none', transition: 'color 0.2s' }} />
          </button>
        </div>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.85)', lineHeight: 1.5, marginBottom: 6 }}>
          <span style={{ fontWeight: 600, marginRight: 6 }}>{post.user.name}</span>{post.caption}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {post.tags.map(tag => (
            <span key={tag} className="badge-glass">#{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function FeedPage() {
  const [posts, setPosts] = useState(initialPosts);

  const handleLike = (id) => setPosts(prev => prev.map(p => p.id === id ? { ...p, liked: !p.liked, likes: p.liked ? p.likes - 1 : p.likes + 1 } : p));
  const handleSave = (id) => setPosts(prev => prev.map(p => p.id === id ? { ...p, saved: !p.saved } : p));

  return (
    <div className="page-enter h-full flex flex-col">
      <div style={{ background: 'rgba(15,12,41,0.75)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.1)', flexShrink: 0 }} className="flex items-center justify-between px-5 pt-12 pb-4">
        <div>
          <h1 style={{ fontSize: 26, fontWeight: 800, background: 'linear-gradient(135deg, #a78bfa, #f472b6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Lumina</h1>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginTop: 1 }}>发现美好瞬间</p>
        </div>
        <div style={{ padding: 1.5, borderRadius: '50%', background: 'linear-gradient(135deg, #7C3AED, #EC4899)' }}>
          <div className="w-9 h-9 rounded-full overflow-hidden" style={{ border: '2px solid rgba(15,12,41,0.9)' }}>
            <img src={currentUser.avatar} alt="me" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto" style={{ paddingBottom: 80 }}>
        <div className="px-4 py-4">
          <div className="glass-card rounded-2xl p-4">
            <div className="flex gap-4 overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
              <div className="flex flex-col items-center gap-1.5 flex-shrink-0">
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ border: '2px dashed rgba(167,139,250,0.5)', background: 'rgba(167,139,250,0.08)' }}>
                  <span style={{ fontSize: 24, color: '#a78bfa', lineHeight: 1 }}>+</span>
                </div>
                <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>添加</span>
              </div>
              {stories.map(story => <StoryItem key={story.id} story={story} />)}
            </div>
          </div>
        </div>
        <div className="px-4">
          {posts.map(post => <PostCard key={post.id} post={post} onLike={handleLike} onSave={handleSave} />)}
        </div>
      </div>
    </div>
  );
}
