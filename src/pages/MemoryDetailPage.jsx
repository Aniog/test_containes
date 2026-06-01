import { useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Eye, Calendar, MapPin, Tag } from 'lucide-react';
import { MEMORIES, ERAS, EMOTIONS, LIFE_EVENTS } from '../data/memories';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const EMOTION_COLORS = {
  joy: '#f5c842', love: '#e879a0', grief: '#6366f1', wonder: '#2dd4bf',
  courage: '#f97316', peace: '#86efac', longing: '#8b5cf6', pride: '#4f8ef7',
};

export default function MemoryDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const memory = MEMORIES.find((m) => m.id === id);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [id]);

  if (!memory) {
    return (
      <div className="min-h-screen bg-space-black flex items-center justify-center pt-16">
        <div className="text-center">
          <div className="text-5xl mb-4">🌌</div>
          <h2 className="font-cinzel text-2xl text-white mb-3">Memory Not Found</h2>
          <p className="text-slate-400 mb-6">This memory may have drifted beyond the archive.</p>
          <Link to="/explore" className="px-6 py-3 rounded-xl bg-nebula-blue text-white font-semibold hover:bg-blue-500 transition-all">
            Return to Archive
          </Link>
        </div>
      </div>
    );
  }

  const emotionColor = EMOTION_COLORS[memory.emotion] || '#4f8ef7';
  const era = ERAS.find((e) => e.id === memory.era);
  const emotion = EMOTIONS.find((e) => e.id === memory.emotion);
  const lifeEvent = LIFE_EVENTS.find((e) => e.id === memory.lifeEvent);
  const related = MEMORIES.filter((m) => m.id !== memory.id && (m.emotion === memory.emotion || m.era === memory.era)).slice(0, 3);

  return (
    <div className="min-h-screen bg-space-black pt-16" ref={containerRef}>
      {/* Hero image */}
      <div className="relative h-72 md:h-96 overflow-hidden bg-space-mid">
        <img
          data-strk-img-id={memory.imgId}
          data-strk-img={`[detail-desc-${memory.id}] [detail-title-${memory.id}]`}
          data-strk-img-ratio="16x9"
          data-strk-img-width="1200"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={memory.title}
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-space-black via-space-black/40 to-transparent" />

        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-6 left-4 md:left-8 flex items-center gap-2 px-4 py-2 rounded-lg bg-space-black/60 backdrop-blur-sm border border-slate-700/50 text-slate-300 text-sm hover:text-white hover:border-slate-600 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 -mt-16 relative z-10 pb-24">
        {/* Meta badges */}
        <div className="flex flex-wrap gap-2 mb-6">
          {era && (
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border"
              style={{ color: era.color, borderColor: era.color + '50', backgroundColor: era.color + '15' }}
            >
              {era.icon} {era.label}
            </span>
          )}
          {emotion && (
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border capitalize"
              style={{ color: emotionColor, borderColor: emotionColor + '50', backgroundColor: emotionColor + '15' }}
            >
              {emotion.icon} {emotion.label}
            </span>
          )}
          {lifeEvent && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border border-slate-700 text-slate-400 bg-slate-800/50">
              {lifeEvent.icon} {lifeEvent.label}
            </span>
          )}
        </div>

        {/* Title */}
        <h1 id={`detail-title-${memory.id}`} className="font-cinzel text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
          {memory.title}
        </h1>

        {/* Author & meta */}
        <div className="flex flex-wrap items-center gap-4 mb-8 pb-8 border-b border-slate-800">
          <div className="flex items-center gap-2 text-slate-400 text-sm">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-nebula-blue/30 to-aurora-teal/30 border border-slate-700 flex items-center justify-center text-xs text-white">
              {memory.author[0]}
            </div>
            <span>{memory.author}</span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-500 text-sm">
            <Calendar className="w-3.5 h-3.5" />
            <span className="font-mono">{memory.year} CE</span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-500 text-sm">
            <MapPin className="w-3.5 h-3.5" />
            <span>{memory.location}</span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-500 text-sm">
            <Eye className="w-3.5 h-3.5" />
            <span>{memory.views.toLocaleString()} views</span>
          </div>
        </div>

        {/* Memory text */}
        <div className="mb-10">
          <p id={`detail-desc-${memory.id}`} className="text-slate-200 text-lg leading-relaxed font-light italic border-l-2 border-nebula-blue/40 pl-6 mb-6">
            "{memory.excerpt}"
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            This memory was preserved as part of the Interstellar Migration Initiative's
            Memory Archive project. It represents one of {(4_782_341).toLocaleString()} stories
            collected from across human civilization, spanning {12000} years of recorded history.
            Each memory is stored in perpetuity and will travel with humanity to the stars.
          </p>
        </div>

        {/* Tags */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-3 text-slate-500 text-xs uppercase tracking-widest">
            <Tag className="w-3.5 h-3.5" />
            Tags
          </div>
          <div className="flex flex-wrap gap-2">
            {memory.tags.map((tag) => (
              <Link
                key={tag}
                to={`/explore?q=${encodeURIComponent(tag)}`}
                className="px-3 py-1.5 rounded-full text-xs text-slate-400 bg-slate-800/60 border border-slate-700/50 hover:border-nebula-blue/40 hover:text-nebula-blue transition-all"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>

        {/* Archive info */}
        <div className="bg-space-navy border border-slate-700/50 rounded-xl p-5 mb-12">
          <h3 className="font-cinzel text-sm font-semibold text-white mb-3 tracking-wide">
            Archive Record
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
            {[
              { label: 'Memory ID', value: memory.id },
              { label: 'Preserved', value: memory.preserved },
              { label: 'Archive Status', value: 'Confirmed' },
              { label: 'Migration Copy', value: 'Scheduled' },
            ].map((item) => (
              <div key={item.label}>
                <div className="text-slate-500 mb-1">{item.label}</div>
                <div className="text-slate-300 font-mono">{item.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Related memories */}
        {related.length > 0 && (
          <div>
            <h2 className="font-cinzel text-xl font-bold text-white mb-6">Related Memories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {related.map((rel) => (
                <Link
                  key={rel.id}
                  to={`/memory/${rel.id}`}
                  className="group block bg-space-navy border border-slate-700/50 rounded-xl p-4 hover:border-nebula-blue/40 transition-all"
                >
                  <div className="text-xs text-slate-500 font-mono mb-2">{rel.year} CE · {rel.location}</div>
                  <h4 className="text-sm font-semibold text-white group-hover:text-nebula-blue transition-colors line-clamp-2 mb-2">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-slate-400 line-clamp-2">{rel.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
