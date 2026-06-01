import { useNavigate } from 'react-router-dom';
import { ERAS, EMOTIONS } from '../../data/memories';

export default function MemoryGrid({ memories }) {
  const navigate = useNavigate();

  if (memories.length === 0) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center py-24 text-center">
        <div className="text-4xl mb-4 opacity-30">◈</div>
        <h3 className="font-space text-xl font-semibold text-star-white mb-2">No memories found</h3>
        <p className="text-star-dim text-sm max-w-xs">
          Try adjusting your filters or search terms to find memories in the archive.
        </p>
      </div>
    );
  }

  return (
    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 content-start">
      {memories.map((memory, i) => (
        <MemoryCard
          key={memory.id}
          memory={memory}
          onClick={() => navigate(`/memory/${memory.id}`)}
          style={{ animationDelay: `${i * 0.04}s` }}
        />
      ))}
    </div>
  );
}

function MemoryCard({ memory, onClick, style }) {
  const eraData = ERAS.find(e => e.id === memory.era);
  const emotionData = EMOTIONS.find(e => e.id === memory.emotion);

  return (
    <button
      onClick={onClick}
      className="group text-left w-full bg-space-navy border border-white/10 rounded-xl p-5 hover:border-cosmic-blue/40 hover:bg-space-midnight transition-all duration-300 hover:shadow-[0_0_20px_rgba(74,158,255,0.1)] animate-fade-in-up"
      style={style}
    >
      {/* Tags row */}
      <div className="flex items-center gap-2 mb-3 flex-wrap">
        {eraData && (
          <span
            className="text-[10px] font-mono px-2 py-0.5 rounded-full border"
            style={{ color: eraData.color, borderColor: `${eraData.color}44`, backgroundColor: `${eraData.color}18` }}
          >
            {eraData.label}
          </span>
        )}
        {emotionData && (
          <span
            className="text-[10px] font-mono px-2 py-0.5 rounded-full border"
            style={{ color: emotionData.color, borderColor: `${emotionData.color}44`, backgroundColor: `${emotionData.color}18` }}
          >
            {emotionData.icon} {emotionData.label}
          </span>
        )}
        <span className="text-star-dim text-[10px] font-mono ml-auto">{memory.year}</span>
      </div>

      {/* Title */}
      <h3 className="font-space text-base font-semibold text-star-white mb-2 group-hover:text-cosmic-blue transition-colors duration-200 leading-snug">
        {memory.title}
      </h3>

      {/* Excerpt */}
      <p className="text-star-dim text-xs leading-relaxed mb-4 line-clamp-3">
        {memory.excerpt}
      </p>

      {/* Footer */}
      <div className="flex items-end justify-between pt-3 border-t border-white/5">
        <div>
          <div className="text-star-white text-xs font-medium truncate max-w-[140px]">{memory.contributor}</div>
          <div className="text-star-dim text-[10px] font-mono">{memory.location}</div>
        </div>
        <div className="text-right shrink-0">
          <div className="text-cosmic-blue text-[10px] font-mono">{memory.resonances.toLocaleString()} ♡</div>
          <div className="text-star-dim text-[10px] font-mono">{memory.archiveId}</div>
        </div>
      </div>
    </button>
  );
}
