import { useParams, useNavigate } from 'react-router-dom';
import { getMemoryById, ERAS, EMOTIONS, LIFE_EVENTS, memories } from '../data/memories';

export default function MemoryDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const memory = getMemoryById(id);

  if (!memory) {
    return (
      <div className="min-h-screen bg-space-black flex items-center justify-center pt-20">
        <div className="text-center">
          <div className="text-5xl mb-4 opacity-30">◈</div>
          <h2 className="font-space text-2xl font-bold text-star-white mb-2">Memory Not Found</h2>
          <p className="text-star-dim mb-6">This memory may have been archived or moved.</p>
          <button
            onClick={() => navigate('/explore')}
            className="bg-cosmic-blue text-white px-6 py-3 rounded-xl font-semibold hover:bg-cosmic-blue/90 transition-colors"
          >
            Return to Archive
          </button>
        </div>
      </div>
    );
  }

  const eraData = ERAS.find(e => e.id === memory.era);
  const emotionData = EMOTIONS.find(e => e.id === memory.emotion);
  const lifeEventData = LIFE_EVENTS.find(e => e.id === memory.lifeEvent);

  // Related memories (same era or emotion, excluding current)
  const related = memories
    .filter(m => m.id !== memory.id && (m.era === memory.era || m.emotion === memory.emotion))
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-space-black pt-20">
      {/* Back button */}
      <div className="max-w-4xl mx-auto px-4 pt-8 pb-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-star-dim hover:text-cosmic-blue transition-colors text-sm font-mono"
        >
          ← Back to Archive
        </button>
      </div>

      <div className="max-w-4xl mx-auto px-4 pb-24">
        {/* Archive ID */}
        <div className="text-star-dim text-xs font-mono mb-6 flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-cosmic-blue animate-pulse" />
          Archive ID: {memory.archiveId}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {eraData && (
            <span
              className="text-sm font-mono px-3 py-1 rounded-full border"
              style={{ color: eraData.color, borderColor: `${eraData.color}44`, backgroundColor: `${eraData.color}18` }}
            >
              {eraData.label} · {eraData.range}
            </span>
          )}
          {emotionData && (
            <span
              className="text-sm font-mono px-3 py-1 rounded-full border"
              style={{ color: emotionData.color, borderColor: `${emotionData.color}44`, backgroundColor: `${emotionData.color}18` }}
            >
              {emotionData.icon} {emotionData.label}
            </span>
          )}
          {lifeEventData && (
            <span className="text-sm font-mono px-3 py-1 rounded-full border border-cosmic-amber/30 bg-cosmic-amber/10 text-cosmic-amber">
              {lifeEventData.icon} {lifeEventData.label}
            </span>
          )}
        </div>

        {/* Title */}
        <h1 className="font-space text-4xl md:text-5xl font-bold text-star-white mb-4 leading-tight">
          {memory.title}
        </h1>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-10 pb-8 border-b border-white/10">
          <div>
            <div className="text-star-white font-medium">{memory.contributor}</div>
            <div className="text-star-dim text-sm font-mono">{memory.location}</div>
          </div>
          <div className="text-star-dim text-sm font-mono">
            {memory.year} CE
          </div>
          <div className="text-star-dim text-sm font-mono">
            {memory.coordinates}
          </div>
          <div className="ml-auto flex items-center gap-4">
            <div className="text-center">
              <div className="text-cosmic-blue font-bold font-space">{memory.resonances.toLocaleString()}</div>
              <div className="text-star-dim text-xs font-mono">resonances</div>
            </div>
            <div className="text-center">
              <div className="text-star-white font-bold font-space">{memory.views.toLocaleString()}</div>
              <div className="text-star-dim text-xs font-mono">views</div>
            </div>
          </div>
        </div>

        {/* Full text */}
        <div className="mb-10">
          <p className="text-star-white text-lg md:text-xl leading-loose font-body">
            {memory.fullText}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-12">
          {memory.tags.map(tag => (
            <span
              key={tag}
              className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-star-dim"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Resonate button */}
        <div className="flex gap-4 mb-16">
          <button className="flex items-center gap-2 bg-cosmic-rose/10 border border-cosmic-rose/30 text-cosmic-rose hover:bg-cosmic-rose/20 px-6 py-3 rounded-xl font-semibold transition-all duration-200">
            ♡ Resonate with this memory
          </button>
          <button
            onClick={() => navigate('/explore')}
            className="border border-white/20 text-star-dim hover:text-star-white hover:border-white/40 px-6 py-3 rounded-xl font-semibold transition-all duration-200"
          >
            ← Back to Archive
          </button>
        </div>

        {/* Related memories */}
        {related.length > 0 && (
          <div>
            <h2 className="font-space text-xl font-semibold text-star-white mb-5">
              Related Memories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {related.map(rel => {
                const relEra = ERAS.find(e => e.id === rel.era);
                return (
                  <button
                    key={rel.id}
                    onClick={() => navigate(`/memory/${rel.id}`)}
                    className="group text-left bg-space-navy border border-white/10 rounded-xl p-4 hover:border-cosmic-blue/40 transition-all duration-200"
                  >
                    {relEra && (
                      <span
                        className="text-[10px] font-mono px-2 py-0.5 rounded-full border mb-2 inline-block"
                        style={{ color: relEra.color, borderColor: `${relEra.color}44`, backgroundColor: `${relEra.color}18` }}
                      >
                        {relEra.label}
                      </span>
                    )}
                    <h3 className="font-space text-sm font-semibold text-star-white group-hover:text-cosmic-blue transition-colors mb-1">
                      {rel.title}
                    </h3>
                    <p className="text-star-dim text-xs line-clamp-2">{rel.excerpt}</p>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
