import { useEffect } from 'react';
import { X, MapPin, Calendar, Clock, User, Tag } from 'lucide-react';
import { ERAS, EMOTIONS, LIFE_EVENTS } from '@/data/memories';

const EMOTION_COLORS = {
  joy: '#f5c842',
  grief: '#8b5cf6',
  wonder: '#4f8ef7',
  love: '#e879a0',
  fear: '#ef4444',
  hope: '#2dd4bf',
  nostalgia: '#fb923c',
  peace: '#86efac',
};

export default function MemoryModal({ memory, onClose }) {
  const emotion = EMOTIONS.find((e) => e.id === memory.emotion);
  const era = ERAS.find((e) => e.id === memory.era);
  const lifeEvent = LIFE_EVENTS.find((e) => e.id === memory.lifeEvent);
  const emotionColor = EMOTION_COLORS[memory.emotion] || '#4f8ef7';

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative w-full max-w-2xl bg-space-midnight border border-slate-700 rounded-2xl overflow-hidden shadow-2xl"
        style={{ boxShadow: `0 0 60px ${emotionColor}20, 0 25px 50px rgba(0,0,0,0.8)` }}
      >
        {/* Top accent */}
        <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${emotionColor}, transparent)` }} />

        {/* Header */}
        <div className="flex items-start justify-between p-6 pb-4">
          <div className="flex flex-wrap gap-2">
            <span
              className="text-xs font-sans font-medium px-3 py-1 rounded-full border"
              style={{ color: emotionColor, borderColor: `${emotionColor}40`, backgroundColor: `${emotionColor}10` }}
            >
              {emotion?.icon} {emotion?.label}
            </span>
            <span className="text-xs font-sans font-medium px-3 py-1 rounded-full border border-slate-700 text-slate-400">
              {era?.label}
            </span>
            <span className="text-xs font-sans font-medium px-3 py-1 rounded-full border border-slate-700 text-slate-400">
              {lifeEvent?.label}
            </span>
          </div>
          <button
            onClick={onClose}
            className="flex-shrink-0 ml-4 p-2 rounded-lg border border-slate-700 hover:border-slate-500 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="px-6 pb-6">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
            {memory.title}
          </h2>

          {/* Memory text */}
          <div
            className="relative bg-space-navy rounded-xl p-5 mb-6 border border-slate-800"
            style={{ borderLeft: `3px solid ${emotionColor}60` }}
          >
            <p className="font-sans text-slate-200 text-base leading-relaxed italic">
              "{memory.excerpt}"
            </p>
          </div>

          {/* Meta grid */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {[
              { icon: Calendar, label: 'Year', value: memory.year },
              { icon: MapPin, label: 'Location', value: memory.location },
              { icon: User, label: 'Contributor', value: memory.contributor },
              { icon: Clock, label: 'Duration', value: memory.duration },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${emotionColor}15` }}>
                  <Icon className="w-4 h-4" style={{ color: emotionColor }} />
                </div>
                <div>
                  <div className="font-sans text-xs text-slate-500 uppercase tracking-wider">{label}</div>
                  <div className="font-sans text-sm text-slate-200 mt-0.5">{value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Format badge */}
          <div className="flex items-center gap-2 mb-6">
            <span className="font-sans text-xs text-slate-500">Format:</span>
            <span className="font-sans text-xs px-2.5 py-1 rounded-full border border-nebula-blue/30 text-nebula-blue bg-nebula-blue/10">
              {memory.format}
            </span>
          </div>

          {/* Tags */}
          <div className="flex items-start gap-3">
            <Tag className="w-4 h-4 text-slate-600 mt-0.5 flex-shrink-0" />
            <div className="flex flex-wrap gap-2">
              {memory.tags.map((tag) => (
                <span key={tag} className="font-sans text-xs px-2.5 py-1 rounded-full bg-slate-800 text-slate-400 border border-slate-700">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-800 flex items-center justify-between">
          <p className="font-sans text-xs text-slate-600">
            Memory ID: {memory.id} · Preserved for the Archive
          </p>
          <button
            onClick={onClose}
            className="font-sans text-sm text-slate-400 hover:text-white transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
