import { useState } from 'react';
import { Search, SlidersHorizontal, Star, Clock, Zap, Heart, ShoppingCart, BadgeCheck, X } from 'lucide-react';
import { DREAMS, CATEGORIES } from '../../data/dreams';

function DreamDetailModal({ dream, onClose }) {
  if (!dream) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <div
        className="relative glass-strong rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-white/10 shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        {/* Header visual */}
        <div className={`h-56 bg-gradient-to-br ${dream.gradient} relative overflow-hidden rounded-t-3xl`}>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-8xl animate-float">{dream.creator.avatar}</span>
          </div>
          <button onClick={onClose} className="absolute top-4 right-4 w-8 h-8 rounded-full glass flex items-center justify-center text-white/70 hover:text-white">
            <X className="w-4 h-4" />
          </button>
          <div className="absolute bottom-4 left-4 flex gap-2">
            {dream.trending && <span className="px-2 py-1 rounded-full text-xs bg-orange-500/80 text-white font-body">🔥 Trending</span>}
            {dream.new && <span className="px-2 py-1 rounded-full text-xs bg-teal-500/80 text-white font-body">✨ New</span>}
          </div>
        </div>

        <div className="p-6">
          <span className="text-xs font-semibold font-body uppercase tracking-wider" style={{ color: dream.accentColor }}>{dream.category}</span>
          <h2 className="font-dream text-2xl font-bold text-white mt-1 mb-3">{dream.title}</h2>

          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">{dream.creator.avatar}</span>
            <div>
              <div className="flex items-center gap-1">
                <span className="text-sm font-semibold text-white font-body">{dream.creator.name}</span>
                {dream.creator.verified && <BadgeCheck className="w-4 h-4 text-purple-400" />}
              </div>
              <span className="text-xs text-purple-300/50 font-body">{dream.creator.followers.toLocaleString()} followers</span>
            </div>
          </div>

          <p className="text-purple-200/70 font-body text-sm leading-relaxed mb-6">{dream.description}</p>

          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="glass rounded-xl p-3 text-center">
              <Clock className="w-4 h-4 text-purple-400 mx-auto mb-1" />
              <p className="text-white font-semibold text-sm font-body">{dream.duration}</p>
              <p className="text-purple-300/40 text-xs font-body">Duration</p>
            </div>
            <div className="glass rounded-xl p-3 text-center">
              <Zap className="w-4 h-4 text-purple-400 mx-auto mb-1" />
              <p className="text-white font-semibold text-sm font-body">{dream.emotionalIntensity}%</p>
              <p className="text-purple-300/40 text-xs font-body">Intensity</p>
            </div>
            <div className="glass rounded-xl p-3 text-center">
              <Star className="w-4 h-4 text-yellow-400 mx-auto mb-1" />
              <p className="text-white font-semibold text-sm font-body">{dream.rating}</p>
              <p className="text-purple-300/40 text-xs font-body">{dream.reviews.toLocaleString()} reviews</p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="flex-1">
              <p className="text-purple-300/50 text-xs font-body mb-1">Price</p>
              <p className="font-dream text-2xl font-bold text-white">{dream.price} <span className="text-sm text-purple-300/50">{dream.currency}</span></p>
            </div>
            <button className="flex-1 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold font-body hover:from-purple-500 hover:to-pink-500 transition-all flex items-center justify-center gap-2">
              <ShoppingCart className="w-4 h-4" />
              Purchase Dream
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function DreamCard({ dream, onClick }) {
  const [liked, setLiked] = useState(false);

  return (
    <div
      className="dream-card group relative overflow-hidden rounded-2xl glass border border-white/5 hover:border-white/15 cursor-pointer"
      onClick={() => onClick(dream)}
    >
      <div className={`relative h-44 bg-gradient-to-br ${dream.gradient} overflow-hidden`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-5xl animate-float opacity-80">{dream.creator.avatar}</span>
        </div>
        <div className="absolute top-3 left-3 flex gap-1 flex-wrap">
          {dream.trending && <span className="px-2 py-0.5 rounded-full text-xs bg-orange-500/80 text-white font-body">🔥</span>}
          {dream.new && <span className="px-2 py-0.5 rounded-full text-xs bg-teal-500/80 text-white font-body">✨ New</span>}
        </div>
        <button
          onClick={e => { e.stopPropagation(); setLiked(!liked); }}
          className="absolute top-3 right-3 w-7 h-7 rounded-full glass flex items-center justify-center"
        >
          <Heart className={`w-3 h-3 ${liked ? 'fill-pink-500 text-pink-500' : 'text-white/60'}`} />
        </button>
        <div className="absolute bottom-2 right-2 flex items-center gap-1 px-2 py-0.5 rounded-full glass text-xs text-white/70 font-body">
          <Clock className="w-3 h-3" />{dream.duration}
        </div>
      </div>

      <div className="p-4">
        <span className="text-xs font-semibold font-body uppercase tracking-wider" style={{ color: dream.accentColor }}>{dream.category}</span>
        <h3 className="font-dream text-sm font-bold text-white mt-1 mb-2 line-clamp-2">{dream.title}</h3>

        <div className="flex items-center gap-1 mb-2">
          <span className="text-base">{dream.creator.avatar}</span>
          <span className="text-xs text-purple-300/60 font-body">{dream.creator.name}</span>
          {dream.creator.verified && <BadgeCheck className="w-3 h-3 text-purple-400" />}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            <span className="text-xs text-yellow-400 font-body">{dream.rating}</span>
            <span className="text-xs text-purple-300/40 font-body">({dream.reviews.toLocaleString()})</span>
          </div>
          <span className="font-dream text-sm font-bold text-white">{dream.price} <span className="text-xs text-purple-300/40 font-body">{dream.currency}</span></span>
        </div>
      </div>
    </div>
  );
}

export default function MarketplaceGrid() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortBy, setSortBy] = useState('trending');
  const [selectedDream, setSelectedDream] = useState(null);

  const filtered = DREAMS.filter(d => {
    const matchCat = activeCategory === 'all' || d.category === activeCategory;
    const matchSearch = d.title.toLowerCase().includes(search.toLowerCase()) ||
      d.creator.name.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  }).sort((a, b) => {
    if (sortBy === 'trending') return (b.trending ? 1 : 0) - (a.trending ? 1 : 0);
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    if (sortBy === 'new') return (b.new ? 1 : 0) - (a.new ? 1 : 0);
    return 0;
  });

  return (
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {/* Search & Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-purple-300/40" />
          <input
            type="text"
            placeholder="Search dreams, creators..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-xl"
          />
        </div>
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="w-4 h-4 text-purple-300/60" />
          <select
            value={sortBy}
            onChange={e => setSortBy(e.target.value)}
            className="py-3 px-4 rounded-xl text-sm"
          >
            <option value="trending">Trending</option>
            <option value="new">Newest</option>
            <option value="rating">Top Rated</option>
            <option value="price-low">Price: Low</option>
            <option value="price-high">Price: High</option>
          </select>
        </div>
      </div>

      {/* Category filters */}
      <div className="flex gap-2 flex-wrap mb-8">
        <button
          onClick={() => setActiveCategory('all')}
          className={`px-4 py-2 rounded-full text-sm font-body transition-all ${
            activeCategory === 'all'
              ? 'bg-purple-500/30 text-purple-200 border border-purple-500/40'
              : 'glass text-purple-300/60 hover:text-purple-300 border border-white/5'
          }`}
        >
          All Dreams
        </button>
        {CATEGORIES.map(cat => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 rounded-full text-sm font-body transition-all flex items-center gap-1 ${
              activeCategory === cat.id
                ? 'border text-white'
                : 'glass text-purple-300/60 hover:text-purple-300 border border-white/5'
            }`}
            style={activeCategory === cat.id ? {
              background: `${cat.color}22`,
              borderColor: `${cat.color}44`,
              color: cat.color,
            } : {}}
          >
            {cat.icon} {cat.label}
          </button>
        ))}
      </div>

      {/* Results count */}
      <p className="text-purple-300/40 text-sm font-body mb-6">
        {filtered.length} dream{filtered.length !== 1 ? 's' : ''} found
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filtered.map((dream, i) => (
          <DreamCard key={dream.id} dream={dream} onClick={setSelectedDream} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20">
          <span className="text-6xl mb-4 block">🌙</span>
          <p className="font-dream text-xl text-white mb-2">No dreams found</p>
          <p className="text-purple-300/50 font-body">Try a different search or category</p>
        </div>
      )}

      {selectedDream && (
        <DreamDetailModal dream={selectedDream} onClose={() => setSelectedDream(null)} />
      )}
    </div>
  );
}
