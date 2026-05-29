import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Clock, Zap, Heart, ShoppingCart, BadgeCheck } from 'lucide-react';
import { DREAMS } from '../../data/dreams';

function DreamCard({ dream, index }) {
  const [liked, setLiked] = useState(false);

  return (
    <div
      className="dream-card group relative overflow-hidden rounded-2xl glass border border-white/5 hover:border-white/15 cursor-pointer"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Visual preview */}
      <div className={`relative h-48 bg-gradient-to-br ${dream.gradient} overflow-hidden`}>
        {/* Animated overlay */}
        <div className="absolute inset-0 opacity-40 animate-gradient bg-gradient-to-r from-transparent via-white/5 to-transparent" />

        {/* Floating emoji */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-6xl animate-float opacity-80" style={{ animationDelay: `${index * 0.3}s` }}>
            {dream.creator.avatar}
          </span>
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {dream.trending && (
            <span className="px-2 py-1 rounded-full text-xs font-semibold bg-orange-500/80 text-white font-body">
              🔥 Trending
            </span>
          )}
          {dream.new && (
            <span className="px-2 py-1 rounded-full text-xs font-semibold bg-teal-500/80 text-white font-body">
              ✨ New
            </span>
          )}
        </div>

        {/* Like button */}
        <button
          onClick={(e) => { e.preventDefault(); setLiked(!liked); }}
          className="absolute top-3 right-3 w-8 h-8 rounded-full glass flex items-center justify-center transition-all hover:scale-110"
        >
          <Heart className={`w-4 h-4 transition-colors ${liked ? 'fill-pink-500 text-pink-500' : 'text-white/60'}`} />
        </button>

        {/* Duration */}
        <div className="absolute bottom-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full glass text-xs text-white/80 font-body">
          <Clock className="w-3 h-3" />
          {dream.duration}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Category */}
        <span
          className="text-xs font-semibold font-body uppercase tracking-wider"
          style={{ color: dream.accentColor }}
        >
          {dream.category}
        </span>

        {/* Title */}
        <h3 className="font-dream text-sm font-bold text-white mt-1 mb-2 line-clamp-2 leading-snug">
          {dream.title}
        </h3>

        {/* Creator */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg">{dream.creator.avatar}</span>
          <span className="text-xs text-purple-300/70 font-body">{dream.creator.name}</span>
          {dream.creator.verified && <BadgeCheck className="w-3 h-3 text-purple-400" />}
        </div>

        {/* Emotional intensity */}
        <div className="mb-3">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs text-purple-300/50 font-body flex items-center gap-1">
              <Zap className="w-3 h-3" /> Emotional Intensity
            </span>
            <span className="text-xs font-semibold font-body" style={{ color: dream.accentColor }}>
              {dream.emotionalIntensity}%
            </span>
          </div>
          <div className="h-1 rounded-full bg-white/10 overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-1000"
              style={{
                width: `${dream.emotionalIntensity}%`,
                background: `linear-gradient(90deg, ${dream.accentColor}88, ${dream.accentColor})`,
              }}
            />
          </div>
        </div>

        {/* Rating & Reviews */}
        <div className="flex items-center gap-1 mb-4">
          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
          <span className="text-xs font-semibold text-yellow-400 font-body">{dream.rating}</span>
          <span className="text-xs text-purple-300/40 font-body">({dream.reviews.toLocaleString()})</span>
        </div>

        {/* Price & Buy */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-lg font-bold text-white font-dream">{dream.price}</span>
            <span className="text-xs text-purple-300/50 font-body ml-1">{dream.currency}</span>
          </div>
          <Link
            to={`/marketplace`}
            className="flex items-center gap-1 px-3 py-2 rounded-full text-xs font-semibold font-body transition-all duration-300 hover:scale-105"
            style={{
              background: `linear-gradient(135deg, ${dream.accentColor}33, ${dream.accentColor}22)`,
              border: `1px solid ${dream.accentColor}44`,
              color: dream.accentColor,
            }}
          >
            <ShoppingCart className="w-3 h-3" />
            Buy Dream
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function FeaturedDreams() {
  const featured = DREAMS.filter(d => d.featured);

  return (
    <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16">
      <div className="flex items-end justify-between mb-10">
        <div>
          <h2 className="font-dream text-3xl sm:text-4xl font-bold text-white mb-2">
            Featured Dreams
          </h2>
          <p className="text-purple-300/60 font-body">Curated masterpieces from top dream architects</p>
        </div>
        <Link to="/marketplace" className="text-purple-400 hover:text-purple-300 text-sm font-body transition-colors hidden sm:block">
          View all →
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {featured.map((dream, i) => (
          <DreamCard key={dream.id} dream={dream} index={i} />
        ))}
      </div>
    </section>
  );
}
