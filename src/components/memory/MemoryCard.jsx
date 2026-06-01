import { Link } from 'react-router-dom';
import { Eye, GitBranch } from 'lucide-react';
import { getEmotionColor, getEraColor, formatViews } from '../../data/memories';

export default function MemoryCard({ memory, index = 0 }) {
  const emotionColor = getEmotionColor(memory.emotion);
  const eraColor = getEraColor(memory.era);

  return (
    <Link
      to={`/memory/${memory.id}`}
      className="memory-card block bg-space-800/70 border border-slate-700/50 rounded-2xl p-6 backdrop-blur-sm group"
      style={{
        animationDelay: `${index * 0.08}s`,
      }}
    >
      {/* Top row */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-2">
          {/* Emotion dot */}
          <div
            className="emotion-dot w-2.5 h-2.5 rounded-full flex-shrink-0"
            style={{ backgroundColor: emotionColor, boxShadow: `0 0 8px ${emotionColor}` }}
          />
          <span
            className="font-mono text-xs uppercase tracking-widest"
            style={{ color: emotionColor }}
          >
            {memory.emotion}
          </span>
        </div>
        {/* Era badge */}
        <span
          className="font-mono text-xs px-2 py-1 rounded-md border"
          style={{
            color: eraColor,
            borderColor: `${eraColor}40`,
            backgroundColor: `${eraColor}10`,
          }}
        >
          {memory.year}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-cinzel text-base md:text-lg font-semibold text-slate-100 mb-3 leading-snug group-hover:text-nebula-300 transition-colors duration-200">
        {memory.title}
      </h3>

      {/* Excerpt */}
      <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">
        {memory.excerpt}
      </p>

      {/* Location */}
      <div className="text-xs text-slate-500 font-mono mb-4 truncate">
        ◎ {memory.location}
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {memory.tags.slice(0, 3).map(tag => (
          <span
            key={tag}
            className="px-2 py-0.5 rounded-md bg-space-700/80 border border-slate-700/50 text-slate-500 font-mono text-xs"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-slate-700/40">
        <span className="font-mono text-xs text-slate-600 truncate max-w-[60%]">
          {memory.contributor}
        </span>
        <div className="flex items-center gap-3 text-slate-600">
          <span className="flex items-center gap-1 text-xs font-mono">
            <Eye className="w-3 h-3" />
            {formatViews(memory.views)}
          </span>
          <span className="flex items-center gap-1 text-xs font-mono">
            <GitBranch className="w-3 h-3" />
            {memory.connections}
          </span>
        </div>
      </div>
    </Link>
  );
}
