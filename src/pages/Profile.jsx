import { useState } from 'react';
import { currentUser, posts } from '../data/mockData';
import PostCard from '../components/PostCard';
import SpotlightCard from '../components/SpotlightCard';
import { MapPin, Link as LinkIcon, Grid, List } from 'lucide-react';

const userPosts = posts.filter(p => p.user.id !== currentUser.id).slice(0, 3).concat(
  posts.filter(p => p.user.id === currentUser.id)
);

export default function Profile() {
  const [tab, setTab] = useState('posts');

  return (
    <div className="max-w-2xl mx-auto">
      {/* Cover */}
      <div className="relative h-40 rounded-2xl overflow-hidden mb-0 glass">
        <img
          src={currentUser.cover}
          alt="cover"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      {/* Profile Card */}
      <SpotlightCard className="glass mb-4 -mt-6 mx-2 relative z-10" style={{ padding: '1.25rem' }} borderRadius="1rem">
        <div className="flex items-end justify-between mb-4">
          <img
            src={currentUser.avatar}
            alt={currentUser.name}
            className="w-16 h-16 rounded-2xl bg-white/10 ring-4 ring-white/15 -mt-10"
          />
          <button
            className="px-4 py-1.5 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #a855f7, #ec4899)' }}
          >
            编辑资料
          </button>
        </div>

        <h1 className="text-lg font-bold text-white mb-0.5">{currentUser.name}</h1>
        <p className="text-sm text-white/40 mb-3">@{currentUser.username}</p>
        <p className="text-sm text-white/75 leading-relaxed mb-3">{currentUser.bio}</p>

        <div className="flex items-center gap-4 text-xs text-white/40 mb-4">
          <span className="flex items-center gap-1">
            <MapPin size={12} />
            {currentUser.location}
          </span>
          <span className="flex items-center gap-1">
            <LinkIcon size={12} />
            nexus.app/@{currentUser.username}
          </span>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-6">
          {[
            { label: '帖子', value: currentUser.posts },
            { label: '关注', value: currentUser.following },
            { label: '粉丝', value: currentUser.followers.toLocaleString() },
          ].map(stat => (
            <div key={stat.label} className="text-center">
              <p className="text-base font-bold text-white">{stat.value}</p>
              <p className="text-xs text-white/40">{stat.label}</p>
            </div>
          ))}
        </div>
      </SpotlightCard>

      {/* Tabs */}
      <div className="glass rounded-2xl p-1 mb-4 flex gap-1">
        {[
          { key: 'posts', label: '动态', icon: List },
          { key: 'media', label: '媒体', icon: Grid },
        ].map(({ key, label, icon: Icon }) => (
          <button
            key={key}
            onClick={() => setTab(key)}
            className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
              tab === key
                ? 'bg-white/15 text-white'
                : 'text-white/40 hover:text-white hover:bg-white/8'
            }`}
          >
            <Icon size={14} />
            {label}
          </button>
        ))}
      </div>

      {/* Content */}
      {tab === 'posts' && (
        <div className="space-y-0">
          {userPosts.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}

      {tab === 'media' && (
        <div className="glass rounded-2xl p-4">
          <div className="grid grid-cols-3 gap-2">
            {userPosts.filter(p => p.image).map(post => (
              <div key={post.id} className="aspect-square rounded-xl overflow-hidden bg-white/5">
                <img src={post.image} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
