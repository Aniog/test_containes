import { useEffect, useRef } from 'react';
import { X, MapPin, Calendar, User, Tag } from 'lucide-react';
import { ERAS, EMOTIONS, LIFE_EVENTS } from '../../data/memories';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function MemoryModal({ memory, onClose }) {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [memory?.id]);

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose]);

  if (!memory) return null;

  const era = ERAS.find((e) => e.id === memory.era);
  const emotion = EMOTIONS.find((e) => e.id === memory.emotion);
  const lifeEvent = LIFE_EVENTS.find((e) => e.id === memory.lifeEvent);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        ref={containerRef}
        className="relative bg-space-midnight border border-slate-700 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-[0_0_60px_rgba(79,142,247,0.2)]"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Image */}
        <div className="relative h-56 overflow-hidden rounded-t-2xl bg-space-navy">
          <img
            data-strk-img-id={`modal-${memory.imgId}`}
            data-strk-img={`[modal-${memory.descId}] [modal-${memory.titleId}]`}
            data-strk-img-ratio="16x9"
            data-strk-img-width="800"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={memory.title}
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-space-midnight via-transparent to-transparent" />

          {era && (
            <div
              className="absolute bottom-4 left-6 px-3 py-1 rounded-full text-sm font-semibold font-inter"
              style={{ backgroundColor: `${era.color}22`, color: era.color, border: `1px solid ${era.color}44` }}
            >
              {era.label} · {era.range}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <h2 id={`modal-${memory.titleId}`} className="font-cinzel text-2xl font-bold text-white mb-4 leading-tight">
            {memory.title}
          </h2>

          <p id={`modal-${memory.descId}`} className="font-inter text-slate-300 leading-relaxed mb-6 text-base">
            {memory.excerpt}
          </p>

          {/* Meta grid */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <MetaItem icon={<User className="w-4 h-4" />} label="Contributor" value={memory.author} />
            <MetaItem icon={<MapPin className="w-4 h-4" />} label="Location" value={memory.location} />
            <MetaItem
              icon={<Calendar className="w-4 h-4" />}
              label="Year"
              value={memory.year < 0 ? `${Math.abs(memory.year)} BCE` : `${memory.year} CE`}
            />
            {emotion && (
              <MetaItem icon={<span>{emotion.icon}</span>} label="Emotion" value={emotion.label} />
            )}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {lifeEvent && (
              <span className="px-3 py-1 rounded-full bg-aurora-teal/10 text-aurora-teal border border-aurora-teal/30 text-xs font-inter font-medium">
                {lifeEvent.label}
              </span>
            )}
            {memory.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full bg-slate-800 text-slate-400 text-xs font-inter">
                #{tag}
              </span>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-800 text-xs text-slate-600 font-inter">
            Memory ID: {memory.id} · Archived in the Global Memory Repository
          </div>
        </div>
      </div>
    </div>
  );
}

function MetaItem({ icon, label, value }) {
  return (
    <div className="flex items-start gap-2">
      <span className="text-nebula-blue mt-0.5 flex-shrink-0">{icon}</span>
      <div>
        <div className="text-xs text-slate-500 font-inter uppercase tracking-wider mb-0.5">{label}</div>
        <div className="text-sm text-slate-200 font-inter">{value}</div>
      </div>
    </div>
  );
}
