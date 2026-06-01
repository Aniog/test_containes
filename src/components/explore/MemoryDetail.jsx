import { EMOTIONS, ERAS, LIFE_EVENTS, REGIONS } from '../../data/memories';

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

const MemoryDetail = ({ memory, onClose }) => {
  if (!memory) return null;

  const emotionColor = getEmotionColor(memory.emotion);
  const eraColor = getEraColor(memory.era);
  const emotion = EMOTIONS.find(e => e.id === memory.emotion);
  const era = ERAS.find(e => e.id === memory.era);
  const lifeEvent = LIFE_EVENTS.find(e => e.id === memory.lifeEvent);
  const region = REGIONS.find(r => r.id === memory.region);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-slate-700/60 bg-[#0d1530] shadow-2xl shadow-black/60 scrollbar-thin"
        onClick={e => e.stopPropagation()}
      >
        {/* Header glow */}
        <div
          className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
          style={{ background: `linear-gradient(90deg, ${emotionColor}, ${eraColor})` }}
        />

        <div className="p-6 md:p-8">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full border border-slate-700 text-slate-400 hover:text-slate-200 hover:border-slate-500 transition-all text-lg"
          >
            ×
          </button>

          {/* Meta badges */}
          <div className="flex flex-wrap gap-2 mb-5 pr-10">
            <span
              className="text-xs px-3 py-1 rounded-full font-medium"
              style={{ color: eraColor, backgroundColor: `${eraColor}18`, border: `1px solid ${eraColor}30` }}
            >
              {era?.label} · {memory.year}
            </span>
            <span
              className="text-xs px-3 py-1 rounded-full"
              style={{ color: emotionColor, backgroundColor: `${emotionColor}15` }}
            >
              {emotion?.icon} {emotion?.label}
            </span>
            {lifeEvent && (
              <span className="text-xs px-3 py-1 rounded-full bg-slate-800 text-slate-400 border border-slate-700">
                {lifeEvent.label}
              </span>
            )}
            {region && (
              <span className="text-xs px-3 py-1 rounded-full bg-slate-800 text-slate-400 border border-slate-700">
                {region.label}
              </span>
            )}
          </div>

          {/* Title */}
          <h2 className="font-cinzel text-2xl md:text-3xl font-bold text-slate-100 mb-5 leading-tight">
            {memory.title}
          </h2>

          {/* Intensity */}
          <div className="mb-6">
            <div className="flex items-center justify-between text-xs text-slate-600 mb-1.5">
              <span>Emotional Intensity</span>
              <span style={{ color: emotionColor }}>{Math.round(memory.intensity * 100)}%</span>
            </div>
            <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{
                  width: `${memory.intensity * 100}%`,
                  backgroundColor: emotionColor,
                  boxShadow: `0 0 8px ${emotionColor}80`,
                }}
              />
            </div>
          </div>

          {/* Excerpt */}
          <blockquote className="border-l-2 pl-5 mb-6" style={{ borderColor: emotionColor }}>
            <p className="text-slate-200 text-lg leading-relaxed italic">
              "{memory.excerpt}"
            </p>
          </blockquote>

          {/* Extended content */}
          <div className="space-y-4 text-slate-400 text-sm leading-relaxed mb-6">
            <p>
              This memory was contributed to the Archive as part of the global preservation effort.
              It represents one of {formatViews(memory.views)} documented instances of this experience
              across human history — a testament to the universality of the human condition.
            </p>
            <p>
              The Archive's neural resonance mapping has identified strong connections between this
              memory and {Math.floor(Math.random() * 40000 + 5000).toLocaleString()} other preserved
              fragments across {Math.floor(Math.random() * 60 + 20)} different cultures and time periods.
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {memory.tags.map(tag => (
              <span key={tag} className="text-xs px-3 py-1 rounded-full bg-slate-800 text-slate-400 border border-slate-700/50">
                #{tag}
              </span>
            ))}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-5 border-t border-slate-700/50 text-xs text-slate-600">
            <div>
              <span className="text-slate-400">Contributed by</span>{' '}
              <span className="text-slate-300">{memory.contributor}</span>
            </div>
            <div className="flex items-center gap-4">
              <span>{formatViews(memory.views)} views</span>
              <span className="text-slate-700">·</span>
              <span>Memory ID: {memory.id}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemoryDetail;
