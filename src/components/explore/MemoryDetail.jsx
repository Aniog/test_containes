import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Eye, Heart, Share2 } from 'lucide-react';
import { MEMORIES, ERAS, EMOTIONS, LIFE_EVENTS, REGIONS } from '../../data/memories';

export default function MemoryDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const memory = MEMORIES.find(m => m.id === id);

  if (!memory) {
    return (
      <div className="min-h-screen bg-space-black flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-cinzel text-white text-2xl mb-4">Memory Not Found</h2>
          <button onClick={() => navigate('/explore')} className="text-nebula-blue font-inter">
            ← Back to Archive
          </button>
        </div>
      </div>
    );
  }

  const era = ERAS.find(e => e.id === memory.era);
  const emotion = EMOTIONS.find(e => e.id === memory.emotion);
  const lifeEvent = LIFE_EVENTS.find(e => e.id === memory.lifeEvent);
  const region = REGIONS.find(r => r.id === memory.region);

  const related = MEMORIES.filter(m => m.id !== memory.id && (m.era === memory.era || m.emotion === memory.emotion)).slice(0, 3);

  return (
    <div className="min-h-screen bg-space-black pt-20">
      {/* Hero */}
      <div
        className="relative px-4 py-16 overflow-hidden"
        style={{ background: `linear-gradient(to bottom, ${era?.color}08, transparent)` }}
      >
        <div className="max-w-3xl mx-auto">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-slate-500 hover:text-white text-sm font-inter transition-colors mb-8"
          >
            <ArrowLeft size={15} />
            Back to Archive
          </button>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {era && (
              <span className="text-xs px-3 py-1 rounded-full font-inter font-medium" style={{ backgroundColor: era.color + '20', color: era.color }}>
                {era.label} · {memory.year}
              </span>
            )}
            {emotion && (
              <span className="text-xs px-3 py-1 rounded-full font-inter font-medium capitalize" style={{ backgroundColor: emotion.color + '20', color: emotion.color }}>
                {emotion.icon} {emotion.label}
              </span>
            )}
            {lifeEvent && (
              <span className="text-xs px-3 py-1 rounded-full font-inter font-medium bg-nebula-blue/20 text-nebula-blue">
                {lifeEvent.icon} {lifeEvent.label}
              </span>
            )}
            {region && (
              <span className="text-xs px-3 py-1 rounded-full font-inter font-medium bg-aurora-teal/20 text-aurora-teal">
                {region.label}
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="font-cinzel text-3xl md:text-5xl text-white mb-6 leading-tight">
            {memory.title}
          </h1>

          {/* Author */}
          <div className="flex items-center gap-4 mb-8">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-white font-cinzel font-bold text-sm"
              style={{ backgroundColor: era?.color + '40', border: `1px solid ${era?.color}50` }}
            >
              {memory.author.charAt(0)}
            </div>
            <div>
              <p className="text-white text-sm font-medium font-inter">{memory.author}</p>
              <p className="text-slate-500 text-xs font-inter">{memory.year} · {region?.label}</p>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px mb-8" style={{ background: `linear-gradient(to right, ${era?.color}60, transparent)` }} />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 pb-16">
        {/* Memory text */}
        <div className="bg-space-navy border border-slate-800 rounded-2xl p-8 md:p-12 mb-8">
          <p className="text-slate-200 text-lg md:text-xl font-inter leading-relaxed italic">
            "{memory.excerpt}"
          </p>
        </div>

        {/* Stats + actions */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-slate-500 text-sm font-inter">
              <Eye size={14} />
              {memory.views.toLocaleString()} views
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 border border-slate-800 rounded-lg text-slate-400 hover:text-supernova-rose hover:border-supernova-rose/40 text-sm font-inter transition-all">
              <Heart size={14} />
              Remember
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-slate-800 rounded-lg text-slate-400 hover:text-nebula-blue hover:border-nebula-blue/40 text-sm font-inter transition-all">
              <Share2 size={14} />
              Share
            </button>
          </div>
        </div>

        {/* Tags */}
        <div className="mb-12">
          <p className="text-slate-600 text-xs uppercase tracking-widest font-inter mb-3">Tags</p>
          <div className="flex flex-wrap gap-2">
            {memory.tags.map(tag => (
              <span key={tag} className="text-xs px-3 py-1 rounded-full bg-slate-800 text-slate-400 font-inter">
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Related memories */}
        {related.length > 0 && (
          <div>
            <p className="text-slate-400 text-xs uppercase tracking-widest font-inter mb-5">Related Memories</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {related.map(rel => {
                const relEra = ERAS.find(e => e.id === rel.era);
                return (
                  <button
                    key={rel.id}
                    onClick={() => navigate(`/memory/${rel.id}`)}
                    className="text-left bg-space-navy border border-slate-800 rounded-xl p-4 hover:border-slate-700 transition-all duration-200 hover:scale-[1.02]"
                  >
                    <div className="h-px mb-3 opacity-40" style={{ background: `linear-gradient(to right, ${relEra?.color}, transparent)` }} />
                    <h4 className="font-cinzel text-white text-sm mb-2 line-clamp-2">{rel.title}</h4>
                    <p className="text-slate-500 text-xs font-inter">{rel.author} · {rel.year}</p>
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
