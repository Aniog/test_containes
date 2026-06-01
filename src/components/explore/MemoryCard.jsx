import { Link } from 'react-router-dom';
import { MapPin, Clock, Heart } from 'lucide-react';

const EMOTION_COLORS = {
  Joy: 'text-[#e8c97a] bg-[#e8c97a]/10 border-[#e8c97a]/20',
  Grief: 'text-[#94a3b8] bg-[#94a3b8]/10 border-[#94a3b8]/20',
  Wonder: 'text-[#7dd3fc] bg-[#7dd3fc]/10 border-[#7dd3fc]/20',
  Love: 'text-[#f9a8d4] bg-[#f9a8d4]/10 border-[#f9a8d4]/20',
  Fear: 'text-[#fb923c] bg-[#fb923c]/10 border-[#fb923c]/20',
  Nostalgia: 'text-[#c084fc] bg-[#c084fc]/10 border-[#c084fc]/20',
  Hope: 'text-[#86efac] bg-[#86efac]/10 border-[#86efac]/20',
  Longing: 'text-[#c084fc] bg-[#c084fc]/10 border-[#c084fc]/20',
  Pride: 'text-[#e8c97a] bg-[#e8c97a]/10 border-[#e8c97a]/20',
  Serenity: 'text-[#7dd3fc] bg-[#7dd3fc]/10 border-[#7dd3fc]/20',
};

export default function MemoryCard({ memory, onClick }) {
  const d = memory.data;
  const emotionClass = EMOTION_COLORS[d.emotion] || 'text-slate-400 bg-slate-400/10 border-slate-400/20';

  return (
    <button
      onClick={() => onClick && onClick(memory)}
      className="group w-full text-left bg-[#080d1a] border border-white/10 rounded-xl p-6 hover:border-[#e8c97a]/40 hover:bg-[#0d1530] transition-all duration-300 cursor-pointer"
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full border text-xs font-medium ${emotionClass}`}>
          <Heart className="w-3 h-3" />
          {d.emotion}
        </span>
        <span className="text-xs text-slate-600 font-mono">{d.year || d.era}</span>
      </div>

      <h3 className="text-slate-100 font-semibold text-base mb-2 group-hover:text-[#e8c97a] transition-colors duration-200 leading-snug">
        {d.title}
      </h3>

      <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 mb-4">
        {d.description}
      </p>

      <div className="flex items-center justify-between text-xs text-slate-600">
        <div className="flex items-center gap-1">
          <MapPin className="w-3 h-3" />
          <span>{[d.location_city, d.location_country].filter(Boolean).join(', ') || 'Unknown'}</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock className="w-3 h-3" />
          <span>{d.era}</span>
        </div>
      </div>

      {d.contributor_name && (
        <div className="mt-3 pt-3 border-t border-white/5 text-xs text-slate-600">
          Contributed by <span className="text-slate-400">{d.contributor_name}</span>
        </div>
      )}
    </button>
  );
}
