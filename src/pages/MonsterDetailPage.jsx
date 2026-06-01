import { useParams, Link } from 'react-router-dom';
import { Heart, Star, Zap, Sparkles, ArrowLeft, Users, PawPrint, Home, Utensils, Calendar, Ruler } from 'lucide-react';
import { getMonsterById } from '@/data/monsters';

function StatBar({ value, max = 10, color, label, icon }) {
  return (
    <div>
      <div className="flex justify-between text-sm font-semibold text-gray-600 mb-1.5">
        <span className="flex items-center gap-1.5">{icon} {label}</span>
        <span style={{ color }}>{value}/{max}</span>
      </div>
      <div className="stat-bar">
        <div className="stat-bar-fill" style={{ width: `${(value / max) * 100}%`, background: color }} />
      </div>
    </div>
  );
}

export default function MonsterDetailPage() {
  const { id } = useParams();
  const monster = getMonsterById(id);

  if (!monster) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fef9f0] pt-20">
        <div className="text-center">
          <div className="text-6xl mb-4">🔍</div>
          <h2 className="font-display text-3xl text-gray-600 mb-4">Monster not found!</h2>
          <Link to="/monsters" className="text-purple-600 font-semibold hover:underline">
            ← Back to all monsters
          </Link>
        </div>
      </div>
    );
  }

  const { theme } = monster;

  return (
    <div className="min-h-screen bg-[#fef9f0] pt-20">
      {/* Back button */}
      <div className="max-w-5xl mx-auto px-6 pt-6">
        <Link
          to="/monsters"
          className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-800 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to all monsters
        </Link>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Visual */}
          <div>
            <div className={`bg-gradient-to-br ${theme.bg} rounded-3xl p-10 text-center relative overflow-hidden shadow-xl`}>
              <div className="blob-bg w-40 h-40 bg-white/20 top-0 right-0" />
              <div className="blob-bg w-32 h-32 bg-white/10 bottom-0 left-0" />
              <div className="text-9xl animate-float inline-block mb-6">{monster.emoji}</div>
              <h1 className="font-display text-4xl text-white mb-1">{monster.name}</h1>
              <p className="text-white/80 text-xl font-semibold">{monster.type}</p>

              <div className="flex flex-wrap justify-center gap-2 mt-4">
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
                <span className={`pill-badge ${monster.available ? 'bg-green-400/80 text-white' : 'bg-black/30 text-white'}`}>
                  {monster.available ? '✅ Available' : '⏳ Pending'}
                </span>
              </div>
            </div>

            {/* Quick info */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              {[
                { icon: <Calendar className="w-4 h-4" />, label: 'Age', value: monster.age },
                { icon: <Ruler className="w-4 h-4" />, label: 'Size', value: monster.size.split('(')[0].trim() },
                { icon: <Home className="w-4 h-4" />, label: 'Habitat', value: monster.habitat },
                { icon: <Utensils className="w-4 h-4" />, label: 'Diet', value: monster.diet },
              ].map(({ icon, label, value }) => (
                <div key={label} className="bg-white rounded-2xl p-4 shadow-sm">
                  <div className="flex items-center gap-2 text-gray-500 text-xs font-bold uppercase tracking-wide mb-1">
                    {icon} {label}
                  </div>
                  <p className="font-semibold text-gray-800">{value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Details */}
          <div className="space-y-6">
            {/* Stats */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-display text-xl text-purple-800 mb-4">Personality Stats</h3>
              <div className="space-y-4">
                <StatBar value={monster.friendliness} color={theme.accent} label="Friendliness" icon="💝" />
                <StatBar value={monster.energy} color={theme.accent} label="Energy Level" icon="⚡" />
                <StatBar value={monster.magic} color={theme.accent} label="Magic Level" icon="✨" />
              </div>
            </div>

            {/* Traits */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-display text-xl text-purple-800 mb-4">Personality Traits</h3>
              <div className="flex flex-wrap gap-2">
                {monster.traits.map(trait => (
                  <span
                    key={trait}
                    className="px-4 py-2 rounded-full font-semibold text-sm"
                    style={{ background: theme.light, color: theme.accent }}
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </div>

            {/* Magical Abilities */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-display text-xl text-purple-800 mb-4">✨ Magical Abilities</h3>
              <div className="space-y-2">
                {monster.abilities.map(ability => (
                  <div key={ability} className="flex items-center gap-3 p-3 bg-purple-50 rounded-xl">
                    <span className="text-purple-500">✦</span>
                    <span className="font-semibold text-purple-800">{ability}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Backstory */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-display text-xl text-purple-800 mb-3">📖 Backstory</h3>
              <p className="text-gray-600 leading-relaxed">{monster.backstory}</p>
            </div>

            {/* Care Instructions */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-display text-xl text-purple-800 mb-3">🌿 Care Instructions</h3>
              <p className="text-gray-600 leading-relaxed">{monster.care}</p>
            </div>

            {/* Adoption CTA */}
            {monster.available ? (
              <div className={`bg-gradient-to-br ${theme.bg} rounded-2xl p-6 text-center`}>
                <p className="text-white font-handwritten text-xl mb-2">Ready to adopt {monster.name}?</p>
                {monster.adoptionFee > 0 && (
                  <p className="text-white/80 text-sm mb-4">Adoption fee: ${monster.adoptionFee}</p>
                )}
                {monster.adoptionFee === 0 && (
                  <p className="text-white/80 text-sm mb-4">Free adoption! 🎉</p>
                )}
                <Link
                  to={`/adopt?monster=${monster.id}`}
                  className="inline-flex items-center gap-2 px-8 py-3 bg-white rounded-xl font-display text-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
                  style={{ color: theme.accent }}
                >
                  <Heart className="w-5 h-5" />
                  Apply to Adopt
                </Link>
              </div>
            ) : (
              <div className="bg-gray-100 rounded-2xl p-6 text-center">
                <p className="text-gray-600 font-semibold mb-2">⏳ {monster.name} has a pending adoption application</p>
                <p className="text-gray-500 text-sm mb-4">But don't worry — there are many other wonderful creatures waiting!</p>
                <Link
                  to="/monsters"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-purple-500 text-white rounded-xl font-semibold hover:bg-purple-600 transition-colors"
                >
                  Browse Available Monsters
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
