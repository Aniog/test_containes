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

const ERA_COLORS = {
  ancient: '#f5c842',
  medieval: '#e879a0',
  renaissance: '#8b5cf6',
  industrial: '#2dd4bf',
  modern: '#4f8ef7',
  digital: '#e879a0',
  migration: '#f5c842',
};

export default function MemoryCard({ memory, onClick, featured = false }) {
  const emotion = EMOTIONS.find((e) => e.id === memory.emotion);
  const era = ERAS.find((e) => e.id === memory.era);
  const lifeEvent = LIFE_EVENTS.find((e) => e.id === memory.lifeEvent);
  const emotionColor = EMOTION_COLORS[memory.emotion] || '#4f8ef7';
  const eraColor = ERA_COLORS[memory.era] || '#4f8ef7';

  return (
    <article
      onClick={() => onClick && onClick(memory)}
      className={`
        group relative bg-space-navy border border-slate-800 rounded-xl overflow-hidden
        cursor-pointer transition-all duration-300
        hover:border-nebula-blue/40 hover:shadow-lg hover:-translate-y-1
        ${featured ? 'md:col-span-2' : ''}
      `}
      style={{
        '--hover-glow': `${emotionColor}20`,
      }}
    >
      {/* Top accent line */}
      <div className="h-0.5 w-full" style={{ background: `linear-gradient(90deg, ${emotionColor}80, transparent)` }} />

      <div className="p-6">
        {/* Header row */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex flex-wrap gap-2">
            {/* Era tag */}
            <span
              className="inline-flex items-center gap-1 text-xs font-sans font-medium px-2.5 py-1 rounded-full border"
              style={{
                color: eraColor,
                borderColor: `${eraColor}40`,
                backgroundColor: `${eraColor}10`,
              }}
            >
              {era?.label}
            </span>
            {/* Emotion tag */}
            <span
              className="inline-flex items-center gap-1 text-xs font-sans font-medium px-2.5 py-1 rounded-full border"
              style={{
                color: emotionColor,
                borderColor: `${emotionColor}40`,
                backgroundColor: `${emotionColor}10`,
              }}
            >
              <span>{emotion?.icon}</span>
              {emotion?.label}
            </span>
          </div>

          {memory.featured && (
            <span className="flex-shrink-0 text-xs font-sans text-stardust-gold border border-stardust-gold/30 bg-stardust-gold/10 px-2 py-0.5 rounded-full">
              Featured
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="font-serif text-lg font-semibold text-white mb-2 group-hover:text-nebula-blue transition-colors duration-200 leading-snug">
          {memory.title}
        </h3>

        {/* Excerpt */}
        <p className="font-sans text-slate-400 text-sm leading-relaxed line-clamp-3 mb-4">
          {memory.excerpt}
        </p>

        {/* Meta info */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-sans text-slate-500">
          <span className="flex items-center gap-1">
            <span className="text-slate-600">◎</span>
            {memory.year}
          </span>
          <span className="flex items-center gap-1">
            <span className="text-slate-600">◈</span>
            {memory.location}
          </span>
          <span className="flex items-center gap-1">
            <span className="text-slate-600">◉</span>
            {lifeEvent?.label}
          </span>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-800">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
              style={{ backgroundColor: `${emotionColor}20`, color: emotionColor }}>
              {memory.contributor.charAt(0)}
            </div>
            <span className="text-xs text-slate-500 font-sans">{memory.contributor}</span>
          </div>
          <div className="flex items-center gap-3 text-xs text-slate-600 font-sans">
            <span>{memory.format}</span>
            <span>·</span>
            <span>{memory.duration}</span>
          </div>
        </div>
      </div>

      {/* Hover glow overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl"
        style={{ background: `radial-gradient(ellipse at top left, ${emotionColor}08, transparent 60%)` }}
      />
    </article>
  );
}
