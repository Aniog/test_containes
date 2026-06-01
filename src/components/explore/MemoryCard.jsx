import { Link } from 'react-router-dom';
import { EMOTIONS, ERAS } from '../../data/memories';

const getEmotionColor = (emotionId) => {
  const e = EMOTIONS.find(em => em.id === emotionId);
  return e ? e.color : '#94a3b8';
};

const getEraColor = (eraId) => {
  const era = ERAS.find(e => e.id === eraId);
  return era ? era.color : '#94a3b8';
};

const formatViews = (n) => {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + 'M';
  if (n >= 1_000) return (n / 1_000).toFixed(0) + 'K';
  return n.toString();
};

const MemoryCard = ({ memory, onClick }) => {
  const emotionColor = getEmotionColor(memory.emotion);
  const eraColor = getEraColor(memory.era);
  const emotion = EMOTIONS.find(e => e.id === memory.emotion);

  return (
    <button
      onClick={() => onClick(memory)}
      className="group w-full text-left p-5 rounded-xl border border-slate-700/40 bg-[#080d1a] hover:border-cyan-500/30 transition-all duration-300 memory-card-glow"
    >
      {/* Intensity bar */}
      <div className="w-full h-0.5 rounded-full bg-slate-800 mb-4 overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{
            width: `${memory.intensity * 100}%`,
            backgroundColor: emotionColor,
            boxShadow: `0 0 6px ${emotionColor}80`,
          }}
        />
      </div>

      <div className="flex items-start justify-between mb-3 gap-2">
        <span
          className="text-xs px-2.5 py-1 rounded-full font-medium flex-shrink-0"
          style={{ color: eraColor, backgroundColor: `${eraColor}18`, border: `1px solid ${eraColor}30` }}
        >
          {memory.year}
        </span>
        <span
          className="text-xs px-2.5 py-1 rounded-full flex-shrink-0"
          style={{ color: emotionColor, backgroundColor: `${emotionColor}15` }}
        >
          {emotion?.icon} {emotion?.label}
        </span>
      </div>

      <h3 className="font-cinzel text-base font-semibold text-slate-100 mb-2 group-hover:text-cyan-300 transition-colors leading-snug">
        {memory.title}
      </h3>
      <p className="text-sm text-slate-400 leading-relaxed line-clamp-3 mb-4">
        {memory.excerpt}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {memory.tags.slice(0, 3).map(tag => (
          <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-slate-800 text-slate-500 border border-slate-700/50">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between text-xs text-slate-600">
        <span className="truncate">{memory.contributor}</span>
        <span className="flex-shrink-0 ml-2">{formatViews(memory.views)} views</span>
      </div>
    </button>
  );
};

export default MemoryCard;
