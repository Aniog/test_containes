import { useState } from 'react';
import { Heart, MessageCircle, Share2, BookOpen, Users, Plus, Star, BadgeCheck } from 'lucide-react';
import { CREATORS, COLLECTIONS, REVIEWS, DREAMS } from '../../data/dreams';

function JournalEntry({ entry }) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(entry.helpful);

  return (
    <div className="glass-strong rounded-2xl p-5 border border-white/10">
      <div className="flex items-start gap-3 mb-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-lg flex-shrink-0">
          {entry.user[0]}
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-white text-sm font-body">{entry.user}</span>
            <span className="text-xs text-purple-300/40 font-body">{entry.date}</span>
          </div>
          <div className="flex gap-0.5 mt-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className={`w-3 h-3 ${i < entry.rating ? 'fill-yellow-400 text-yellow-400' : 'text-white/10'}`} />
            ))}
          </div>
        </div>
      </div>

      <p className="text-purple-200/70 text-sm font-body leading-relaxed mb-4">{entry.text}</p>

      <div className="flex items-center gap-4">
        <button
          onClick={() => { setLiked(!liked); setLikes(l => liked ? l - 1 : l + 1); }}
          className="flex items-center gap-1.5 text-xs font-body transition-colors"
          style={{ color: liked ? '#f472b6' : 'rgba(232,213,255,0.4)' }}
        >
          <Heart className={`w-4 h-4 ${liked ? 'fill-pink-500' : ''}`} />
          {likes}
        </button>
        <button className="flex items-center gap-1.5 text-xs text-purple-300/40 hover:text-purple-300 font-body transition-colors">
          <MessageCircle className="w-4 h-4" />
          Reply
        </button>
        <button className="flex items-center gap-1.5 text-xs text-purple-300/40 hover:text-purple-300 font-body transition-colors">
          <Share2 className="w-4 h-4" />
          Share
        </button>
      </div>
    </div>
  );
}

function CollectionCard({ collection }) {
  return (
    <div className="dream-card glass rounded-2xl p-5 border border-white/5 hover:border-white/15 cursor-pointer">
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-2xl mb-3">
        {collection.cover}
      </div>
      <h4 className="font-dream text-sm font-bold text-white mb-1">{collection.name}</h4>
      <p className="text-xs text-purple-300/50 font-body mb-3">by {collection.curator}</p>
      <div className="flex items-center justify-between">
        <span className="text-xs text-purple-300/40 font-body">{collection.dreams} dreams</span>
        <button className="text-xs px-3 py-1 rounded-full glass border border-purple-500/20 text-purple-300 hover:bg-purple-500/10 font-body transition-all">
          View
        </button>
      </div>
    </div>
  );
}

export default function SocialHub() {
  const [activeTab, setActiveTab] = useState('feed');
  const [journalText, setJournalText] = useState('');

  const tabs = [
    { id: 'feed', label: 'Dream Feed', icon: BookOpen },
    { id: 'creators', label: 'Creators', icon: Users },
    { id: 'collections', label: 'Collections', icon: Star },
  ];

  return (
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {/* Profile header */}
      <div className="glass-strong rounded-3xl p-6 sm:p-8 border border-white/10 mb-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-pink-900/20 to-transparent" />
        <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="relative">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-4xl shadow-2xl">
              🌙
            </div>
            <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-purple-500 flex items-center justify-center">
              <BadgeCheck className="w-4 h-4 text-white" />
            </div>
          </div>
          <div className="flex-1">
            <h2 className="font-dream text-2xl font-bold text-white mb-1">Lyra Voss</h2>
            <p className="text-purple-300/60 font-body text-sm mb-3">Cosmic dream architect · Weaving starlight since 2021</p>
            <div className="flex flex-wrap gap-6">
              {[
                { label: 'Dreams', value: '47' },
                { label: 'Followers', value: '12.4K' },
                { label: 'Following', value: '234' },
                { label: 'Collections', value: '8' },
              ].map(({ label, value }) => (
                <div key={label} className="text-center">
                  <p className="font-dream text-lg font-bold text-white">{value}</p>
                  <p className="text-xs text-purple-300/40 font-body">{label}</p>
                </div>
              ))}
            </div>
          </div>
          <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-body hover:from-purple-500 hover:to-pink-500 transition-all">
            <Plus className="w-4 h-4" />
            Follow
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 glass rounded-xl p-1 mb-8 w-fit">
        {tabs.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-body transition-all ${
              activeTab === id
                ? 'bg-purple-500/30 text-purple-200 border border-purple-500/30'
                : 'text-purple-300/50 hover:text-purple-300'
            }`}
          >
            <Icon className="w-4 h-4" />
            <span className="hidden sm:block">{label}</span>
          </button>
        ))}
      </div>

      {activeTab === 'feed' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {/* Write journal */}
            <div className="glass-strong rounded-2xl p-5 border border-white/10">
              <h3 className="font-dream text-sm font-semibold text-white mb-3">Share a Dream Journal Entry</h3>
              <textarea
                value={journalText}
                onChange={e => setJournalText(e.target.value)}
                placeholder="Describe a dream you had, a dream you bought, or a dream you're imagining..."
                rows={3}
                className="w-full resize-none text-sm"
              />
              <div className="flex justify-end mt-3">
                <button
                  disabled={!journalText.trim()}
                  className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-body disabled:opacity-40 hover:from-purple-500 hover:to-pink-500 transition-all"
                >
                  Post Entry
                </button>
              </div>
            </div>

            {/* Reviews/Journal entries */}
            {REVIEWS.map(review => (
              <JournalEntry key={review.id} entry={review} />
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="glass-strong rounded-2xl p-5 border border-white/10">
              <h3 className="font-dream text-sm font-semibold text-white mb-4">Suggested Creators</h3>
              <div className="space-y-3">
                {CREATORS.slice(0, 3).map(creator => (
                  <div key={creator.id} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-lg flex-shrink-0">
                      {creator.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1">
                        <span className="text-sm font-semibold text-white font-body truncate">{creator.name}</span>
                        {creator.verified && <BadgeCheck className="w-3 h-3 text-purple-400 flex-shrink-0" />}
                      </div>
                      <span className="text-xs text-purple-300/40 font-body">{(creator.followers / 1000).toFixed(1)}k followers</span>
                    </div>
                    <button className="text-xs px-3 py-1 rounded-full glass border border-purple-500/20 text-purple-300 hover:bg-purple-500/10 font-body transition-all flex-shrink-0">
                      Follow
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-strong rounded-2xl p-5 border border-white/10">
              <h3 className="font-dream text-sm font-semibold text-white mb-4">Trending Tags</h3>
              <div className="flex flex-wrap gap-2">
                {['#surreal', '#cosmic', '#lucid', '#nightmare', '#romance', '#transcendent', '#vivid', '#meditative'].map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full glass border border-white/10 text-xs text-purple-300/60 hover:text-purple-300 cursor-pointer font-body transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'creators' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CREATORS.map(creator => (
            <div key={creator.id} className="dream-card glass-strong rounded-2xl p-6 border border-white/10 text-center hover:border-purple-500/30 transition-all">
              <div className="relative inline-block mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-3xl mx-auto">
                  {creator.avatar}
                </div>
                {creator.verified && (
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center">
                    <BadgeCheck className="w-4 h-4 text-white" />
                  </div>
                )}
              </div>
              <h3 className="font-dream text-base font-bold text-white mb-1">{creator.name}</h3>
              <p className="text-xs text-purple-300/50 font-body mb-2">{creator.specialty}</p>
              <p className="text-xs text-purple-300/40 font-body italic mb-4">"{creator.bio}"</p>
              <div className="flex justify-center gap-6 mb-4">
                <div>
                  <p className="font-dream text-sm font-bold text-white">{creator.dreams}</p>
                  <p className="text-xs text-purple-300/40 font-body">Dreams</p>
                </div>
                <div>
                  <p className="font-dream text-sm font-bold text-white">{(creator.followers / 1000).toFixed(1)}k</p>
                  <p className="text-xs text-purple-300/40 font-body">Followers</p>
                </div>
              </div>
              <button className="w-full py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-body hover:bg-purple-500/20 transition-all flex items-center justify-center gap-1">
                <Users className="w-3 h-3" /> Follow
              </button>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'collections' && (
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-dream text-xl font-bold text-white">Dream Collections</h3>
            <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-body hover:from-purple-500 hover:to-pink-500 transition-all">
              <Plus className="w-4 h-4" />
              New Collection
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {COLLECTIONS.map(col => (
              <CollectionCard key={col.id} collection={col} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
