import { useEffect, useRef } from 'react';
import { MapPin, Calendar, User } from 'lucide-react';
import { ERAS, EMOTIONS } from '../../data/memories';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function MemoryCard({ memory, onClick }) {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const era = ERAS.find((e) => e.id === memory.era);
  const emotion = EMOTIONS.find((e) => e.id === memory.emotion);

  return (
    <div
      ref={containerRef}
      onClick={() => onClick && onClick(memory)}
      className="group relative bg-space-navy border border-slate-800 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:border-nebula-blue/50 hover:shadow-[0_0_30px_rgba(79,142,247,0.15)] hover:-translate-y-1"
    >
      {/* Image */}
      <div className="relative h-44 overflow-hidden bg-space-midnight">
        <img
          data-strk-img-id={memory.imgId}
          data-strk-img={`[${memory.descId}] [${memory.titleId}]`}
          data-strk-img-ratio="3x2"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={memory.title}
          className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-space-navy via-transparent to-transparent" />

        {/* Era badge */}
        {era && (
          <div
            className="absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-semibold font-inter"
            style={{ backgroundColor: `${era.color}22`, color: era.color, border: `1px solid ${era.color}44` }}
          >
            {era.label}
          </div>
        )}

        {/* Emotion badge */}
        {emotion && (
          <div className="absolute top-3 right-3 text-lg" title={emotion.label}>
            {emotion.icon}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 id={memory.titleId} className="font-cinzel text-base font-semibold text-white mb-2 line-clamp-2 leading-snug group-hover:text-nebula-blue transition-colors">
          {memory.title}
        </h3>
        <p id={memory.descId} className="font-inter text-sm text-slate-400 line-clamp-3 leading-relaxed mb-4">
          {memory.excerpt}
        </p>

        <div className="flex flex-col gap-1.5 text-xs text-slate-500 font-inter">
          <div className="flex items-center gap-1.5">
            <User className="w-3 h-3 flex-shrink-0" />
            <span className="truncate">{memory.author}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3 h-3 flex-shrink-0" />
            <span className="truncate">{memory.location}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3 h-3 flex-shrink-0" />
            <span>{memory.year < 0 ? `${Math.abs(memory.year)} BCE` : `${memory.year} CE`}</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-4">
          {memory.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 text-xs font-inter">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
