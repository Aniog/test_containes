import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Star, Zap, Sparkles, Users, PawPrint } from 'lucide-react';

function StatBar({ value, max = 10, color }) {
  return (
    <div className="stat-bar">
      <div
        className="stat-bar-fill"
        style={{
          width: `${(value / max) * 100}%`,
          background: color,
        }}
      />
    </div>
  );
}

export default function MonsterCard({ monster, compact = false }) {
  const [liked, setLiked] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const { theme } = monster;

  return (
    <div className="monster-card shadow-md group cursor-pointer" onClick={() => setShowDetails(!showDetails)}>
      {/* Header gradient */}
      <div className={`bg-gradient-to-br ${theme.bg} p-6 relative overflow-hidden`}>
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-white/20 rounded-full -translate-y-8 translate-x-8" />
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full translate-y-6 -translate-x-6" />

        {/* Like button */}
        <button
          onClick={(e) => { e.stopPropagation(); setLiked(!liked); }}
          className={`absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center transition-all ${
            liked ? 'bg-red-500 text-white scale-110' : 'bg-white/80 text-gray-400 hover:text-red-400'
          }`}
        >
          <Heart className={`w-4 h-4 ${liked ? 'fill-current' : ''}`} />
        </button>

        {/* Monster emoji */}
        <div className="text-6xl mb-3 animate-float inline-block">{monster.emoji}</div>

        {/* Name & type */}
        <div>
          <h3 className="font-display text-2xl text-white">{monster.name}</h3>
          <p className="text-white/80 text-sm font-semibold">{monster.type}</p>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap gap-2 mt-3">
          {monster.childFriendly && (
            <span className="pill-badge bg-white/20 text-white">
              <Users className="w-3 h-3" /> Kid-Friendly
            </span>
          )}
          {monster.petFriendly && (
            <span className="pill-badge bg-white/20 text-white">
              <PawPrint className="w-3 h-3" /> Pet-Friendly
            </span>
          )}
          {!monster.available && (
            <span className="pill-badge bg-black/30 text-white">
              Pending Adoption
            </span>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="p-5">
        {/* Quick stats */}
        <div className="space-y-3 mb-4">
          <div>
            <div className="flex justify-between text-xs font-semibold text-gray-500 mb-1">
              <span className="flex items-center gap-1"><Heart className="w-3 h-3 text-pink-400" /> Friendliness</span>
              <span style={{ color: theme.accent }}>{monster.friendliness}/10</span>
            </div>
            <StatBar value={monster.friendliness} color={theme.accent} />
          </div>
          <div>
            <div className="flex justify-between text-xs font-semibold text-gray-500 mb-1">
              <span className="flex items-center gap-1"><Zap className="w-3 h-3 text-yellow-400" /> Energy Level</span>
              <span style={{ color: theme.accent }}>{monster.energy}/10</span>
            </div>
            <StatBar value={monster.energy} color={theme.accent} />
          </div>
          <div>
            <div className="flex justify-between text-xs font-semibold text-gray-500 mb-1">
              <span className="flex items-center gap-1"><Sparkles className="w-3 h-3 text-purple-400" /> Magic Level</span>
              <span style={{ color: theme.accent }}>{monster.magic}/10</span>
            </div>
            <StatBar value={monster.magic} color={theme.accent} />
          </div>
        </div>

        {/* Traits */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {monster.traits.map(trait => (
            <span
              key={trait}
              className="text-xs px-2.5 py-1 rounded-full font-semibold"
              style={{ background: theme.light, color: theme.accent }}
            >
              {trait}
            </span>
          ))}
        </div>

        {/* Expanded details */}
        {showDetails && (
          <div className="animate-slide-up border-t border-gray-100 pt-4 space-y-3">
            <div>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Backstory</p>
              <p className="text-sm text-gray-600 leading-relaxed">{monster.backstory}</p>
            </div>
            <div>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Magical Abilities</p>
              <div className="flex flex-wrap gap-1.5">
                {monster.abilities.map(ability => (
                  <span key={ability} className="text-xs px-2 py-0.5 bg-purple-50 text-purple-600 rounded-full font-semibold">
                    ✨ {ability}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">Diet</p>
                <p className="text-gray-700 font-semibold">🍽️ {monster.diet}</p>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">Habitat</p>
                <p className="text-gray-700 font-semibold">🏠 {monster.habitat}</p>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">Age</p>
                <p className="text-gray-700 font-semibold">📅 {monster.age}</p>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">Size</p>
                <p className="text-gray-700 font-semibold">📏 {monster.size.split('(')[0].trim()}</p>
              </div>
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex gap-2 mt-4" onClick={e => e.stopPropagation()}>
          <Link
            to={`/monsters/${monster.id}`}
            className="flex-1 text-center py-2.5 rounded-xl font-display text-sm transition-all hover:-translate-y-0.5"
            style={{ background: theme.light, color: theme.accent }}
          >
            Learn More
          </Link>
          {monster.available && (
            <Link
              to={`/adopt?monster=${monster.id}`}
              className="flex-1 text-center py-2.5 rounded-xl font-display text-sm text-white transition-all hover:-translate-y-0.5 hover:shadow-md"
              style={{ background: `linear-gradient(135deg, ${theme.accent}, ${theme.accent}cc)` }}
            >
              Adopt Me! 💝
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
