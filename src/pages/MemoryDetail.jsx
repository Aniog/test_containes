import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Eye, GitBranch, MapPin, Calendar, User, Tag, Hash } from 'lucide-react';
import { MEMORIES, getEmotionColor, getEraColor, EMOTIONS, formatViews } from '../data/memories';

export default function MemoryDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const memory = MEMORIES.find(m => m.id === id);

  if (!memory) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <p className="font-cinzel text-2xl text-slate-500 mb-4">Memory not found</p>
          <Link to="/explore" className="text-nebula-400 font-mono text-sm hover:text-nebula-300">
            ← Return to Archive
          </Link>
        </div>
      </div>
    );
  }

  const emotionColor = getEmotionColor(memory.emotion);
  const eraColor = getEraColor(memory.era);
  const emotionData = EMOTIONS.find(e => e.id === memory.emotion);

  // Related memories (same era or emotion)
  const related = MEMORIES.filter(
    m => m.id !== memory.id && (m.era === memory.era || m.emotion === memory.emotion)
  ).slice(0, 3);

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-slate-500 hover:text-slate-300 font-mono text-sm mb-8 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Archive
        </button>

        {/* Memory card */}
        <article className="bg-space-800/60 border border-slate-700/40 rounded-2xl overflow-hidden backdrop-blur-sm mb-12">
          {/* Header band */}
          <div
            className="h-1.5 w-full"
            style={{ background: `linear-gradient(to right, ${emotionColor}, ${eraColor})` }}
          />

          <div className="p-8 md:p-12">
            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span
                className="flex items-center gap-1.5 font-mono text-xs px-3 py-1.5 rounded-full border"
                style={{ color: emotionColor, borderColor: `${emotionColor}40`, backgroundColor: `${emotionColor}10` }}
              >
                <span>{emotionData?.icon}</span>
                {memory.emotion}
              </span>
              <span
                className="font-mono text-xs px-3 py-1.5 rounded-full border"
                style={{ color: eraColor, borderColor: `${eraColor}40`, backgroundColor: `${eraColor}10` }}
              >
                {memory.eraLabel}
              </span>
              <span className="font-mono text-xs text-slate-500 px-3 py-1.5 rounded-full border border-slate-700/50">
                {memory.lifeEvent}
              </span>
            </div>

            {/* Title */}
            <h1 className="font-cinzel text-2xl md:text-4xl font-bold text-slate-100 mb-6 leading-tight">
              {memory.title}
            </h1>

            {/* Full text */}
            <div className="prose prose-invert max-w-none mb-8">
              <p className="text-slate-300 text-lg leading-relaxed font-light">
                {memory.fullText}
              </p>
            </div>

            {/* Divider */}
            <div className="border-t border-slate-700/40 pt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left: metadata */}
                <div className="space-y-4">
                  <MetaItem icon={<Calendar className="w-4 h-4" />} label="Year" value={memory.year} />
                  <MetaItem icon={<MapPin className="w-4 h-4" />} label="Location" value={memory.location} />
                  <MetaItem icon={<User className="w-4 h-4" />} label="Contributor" value={memory.contributor} />
                  <MetaItem icon={<Hash className="w-4 h-4" />} label="Archive ID" value={memory.archiveId} mono />
                </div>

                {/* Right: stats + tags */}
                <div className="space-y-4">
                  <div className="flex gap-6">
                    <div className="text-center">
                      <div className="flex items-center gap-1.5 text-slate-400 mb-1">
                        <Eye className="w-4 h-4" />
                        <span className="font-cinzel text-xl font-bold text-nebula-400">
                          {formatViews(memory.views)}
                        </span>
                      </div>
                      <p className="font-mono text-xs text-slate-600 uppercase tracking-widest">Views</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center gap-1.5 text-slate-400 mb-1">
                        <GitBranch className="w-4 h-4" />
                        <span className="font-cinzel text-xl font-bold text-star-400">
                          {memory.connections}
                        </span>
                      </div>
                      <p className="font-mono text-xs text-slate-600 uppercase tracking-widest">Connections</p>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Tag className="w-4 h-4 text-slate-500" />
                      <span className="font-mono text-xs text-slate-500 uppercase tracking-widest">Tags</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {memory.tags.map(tag => (
                        <Link
                          key={tag}
                          to={`/explore?search=${tag}`}
                          className="px-3 py-1 rounded-lg bg-space-700/80 border border-slate-700/50 text-slate-400 hover:text-slate-200 hover:border-slate-600 font-mono text-xs transition-colors"
                        >
                          {tag}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Related memories */}
        {related.length > 0 && (
          <div>
            <h2 className="font-cinzel text-xl font-bold text-slate-200 mb-6">
              Connected Memories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {related.map(m => {
                const ec = getEmotionColor(m.emotion);
                return (
                  <Link
                    key={m.id}
                    to={`/memory/${m.id}`}
                    className="memory-card p-5 rounded-xl bg-space-800/50 border border-slate-700/40 group"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: ec, boxShadow: `0 0 6px ${ec}` }}
                      />
                      <span className="font-mono text-xs text-slate-500">{m.year}</span>
                    </div>
                    <h3 className="font-cinzel text-sm font-semibold text-slate-200 group-hover:text-nebula-300 transition-colors leading-snug mb-2">
                      {m.title}
                    </h3>
                    <p className="text-slate-500 text-xs line-clamp-2">{m.excerpt}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function MetaItem({ icon, label, value, mono = false }) {
  return (
    <div className="flex items-start gap-3">
      <span className="text-slate-600 mt-0.5 flex-shrink-0">{icon}</span>
      <div>
        <p className="font-mono text-xs text-slate-600 uppercase tracking-widest mb-0.5">{label}</p>
        <p className={`text-slate-300 text-sm ${mono ? 'font-mono' : ''}`}>{value}</p>
      </div>
    </div>
  );
}
