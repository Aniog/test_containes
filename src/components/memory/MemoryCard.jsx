import { Link } from 'react-router-dom';
import { EMOTIONS, ERAS } from '../../data/memories';

const MemoryCard = ({ memory }) => {
  const emotion = EMOTIONS.find(e => e.id === memory.emotion);
  const era = ERAS.find(e => e.id === memory.era);

  return (
    <Link
      to={`/memory/${memory.id}`}
      className="block bg-nebula border border-stardust/50 rounded-xl p-6 memory-card-hover group h-full"
    >
      <div className="flex items-start justify-between mb-4 gap-2">
        <div className="flex flex-wrap items-center gap-2">
          {emotion && (
            <span
              className="text-xs font-mono px-2 py-0.5 rounded-full border flex items-center gap-1"
              style={{
                color: emotion.color,
                borderColor: `${emotion.color}40`,
                backgroundColor: `${emotion.color}10`,
              }}
            >
              <span>{emotion.icon}</span>
              {emotion.label}
            </span>
          )}
          {era && (
            <span
              className="text-xs font-mono px-2 py-0.5 rounded-full border"
              style={{
                color: era.color,
                borderColor: `${era.color}40`,
                backgroundColor: `${era.color}10`,
              }}
            >
              {era.label}
            </span>
          )}
        </div>
        {memory.verified && (
          <span className="text-xs text-aurora font-mono flex items-center gap-1 shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-aurora inline-block" />
            Verified
          </span>
        )}
      </div>

      <h3 className="font-cinzel font-semibold text-starlight text-base mb-3 group-hover:text-aurora-glow transition-colors line-clamp-2 leading-snug">
        {memory.title}
      </h3>

      <p className="text-mist text-sm leading-relaxed line-clamp-3 mb-4">
        {memory.excerpt}
      </p>

      <div className="mt-auto space-y-2">
        <div className="flex items-center justify-between text-xs text-fog font-mono">
          <span className="text-mist">{memory.contributor}</span>
          <span>{memory.year} CE</span>
        </div>
        <div className="text-xs text-fog font-mono flex items-center gap-1">
          <svg width="9" height="11" viewBox="0 0 10 12" fill="none" className="opacity-50 shrink-0">
            <path d="M5 0C2.24 0 0 2.24 0 5c0 3.75 5 7 5 7s5-3.25 5-7c0-2.76-2.24-5-5-5zm0 6.5C4.17 6.5 3.5 5.83 3.5 5S4.17 3.5 5 3.5 6.5 4.17 6.5 5 5.83 6.5 5 6.5z" fill="currentColor" />
          </svg>
          <span className="truncate">{memory.location}</span>
        </div>
        <div className="text-xs text-fog font-mono">
          {memory.fragmentCount.toLocaleString()} fragments
        </div>
      </div>
    </Link>
  );
};

export default MemoryCard;
