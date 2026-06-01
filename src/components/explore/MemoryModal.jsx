import { X, MapPin, Clock, Heart, User, Eye, Tag } from 'lucide-react';

const EMOTION_COLORS = {
  Joy: '#e8c97a',
  Grief: '#94a3b8',
  Wonder: '#7dd3fc',
  Love: '#f9a8d4',
  Fear: '#fb923c',
  Nostalgia: '#c084fc',
  Hope: '#86efac',
  Longing: '#c084fc',
  Pride: '#e8c97a',
  Serenity: '#7dd3fc',
};

export default function MemoryModal({ memory, onClose }) {
  if (!memory) return null;
  const d = memory.data;
  const color = EMOTION_COLORS[d.emotion] || '#e8c97a';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#080d1a] border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        style={{ boxShadow: `0 0 60px ${color}20` }}
      >
        {/* Header accent bar */}
        <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${color}80, transparent)` }} />

        <div className="p-8">
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-slate-500 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border"
              style={{ color, borderColor: `${color}40`, background: `${color}10` }}
            >
              <Heart className="w-3 h-3" />
              {d.emotion}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border border-[#7dd3fc]/20 bg-[#7dd3fc]/10 text-[#7dd3fc]">
              <Clock className="w-3 h-3" />
              {d.era} {d.year ? `· ${d.year}` : ''}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border border-[#fb923c]/20 bg-[#fb923c]/10 text-[#fb923c]">
              {d.life_event}
            </span>
          </div>

          {/* Title */}
          <h2 className="font-serif text-2xl md:text-3xl text-white font-bold mb-6 leading-tight">
            {d.title}
          </h2>

          {/* Description */}
          <p className="text-slate-300 text-base leading-relaxed mb-8 font-serif italic">
            "{d.description}"
          </p>

          {/* Details grid */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {(d.location_city || d.location_country) && (
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-slate-500 mt-0.5 shrink-0" />
                <div>
                  <div className="text-xs text-slate-600 uppercase tracking-wider mb-0.5">Location</div>
                  <div className="text-sm text-slate-300">
                    {[d.location_city, d.location_country].filter(Boolean).join(', ')}
                  </div>
                </div>
              </div>
            )}
            {d.contributor_name && (
              <div className="flex items-start gap-2">
                <User className="w-4 h-4 text-slate-500 mt-0.5 shrink-0" />
                <div>
                  <div className="text-xs text-slate-600 uppercase tracking-wider mb-0.5">Contributor</div>
                  <div className="text-sm text-slate-300">{d.contributor_name}</div>
                </div>
              </div>
            )}
            {d.view_count != null && (
              <div className="flex items-start gap-2">
                <Eye className="w-4 h-4 text-slate-500 mt-0.5 shrink-0" />
                <div>
                  <div className="text-xs text-slate-600 uppercase tracking-wider mb-0.5">Views</div>
                  <div className="text-sm text-slate-300">{d.view_count.toLocaleString()}</div>
                </div>
              </div>
            )}
          </div>

          {/* Tags */}
          {d.tags && d.tags.length > 0 && (
            <div className="flex items-center gap-2 flex-wrap">
              <Tag className="w-3.5 h-3.5 text-slate-600" />
              {d.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-full text-xs bg-white/5 text-slate-400 border border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
