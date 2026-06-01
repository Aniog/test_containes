import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { MEMORIES } from '../../data/memories';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const EMOTION_COLORS = {
  joy: '#f5c842',
  love: '#e879a0',
  grief: '#6366f1',
  wonder: '#2dd4bf',
  courage: '#f97316',
  peace: '#86efac',
  longing: '#8b5cf6',
  pride: '#4f8ef7',
};

const featured = MEMORIES.filter((m) => m.featured).slice(0, 6);

export default function FeaturedMemories() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-24 px-4 bg-space-navy" ref={containerRef}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="text-stellar-gold text-xs font-medium tracking-widest uppercase mb-2">
              ✦ Featured Memories
            </div>
            <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-white">
              Voices Across Time
            </h2>
          </div>
          <Link
            to="/explore"
            className="hidden md:inline-flex items-center gap-2 text-nebula-blue text-sm hover:text-blue-300 transition-colors"
          >
            View all memories
            <span>→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((memory, idx) => (
            <MemoryCard key={memory.id} memory={memory} index={idx} />
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link
            to="/explore"
            className="inline-flex items-center gap-2 text-nebula-blue text-sm"
          >
            View all memories →
          </Link>
        </div>
      </div>
    </section>
  );
}

function MemoryCard({ memory, index }) {
  const emotionColor = EMOTION_COLORS[memory.emotion] || '#4f8ef7';

  return (
    <Link
      to={`/memory/${memory.id}`}
      className="group block bg-space-mid border border-slate-700/50 rounded-2xl overflow-hidden hover:border-nebula-blue/40 hover:shadow-[0_0_25px_rgba(79,142,247,0.1)] transition-all duration-300"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image */}
      <div className="relative h-44 overflow-hidden bg-space-black">
        <img
          data-strk-img-id={memory.imgId}
          data-strk-img={`[${memory.descId}] [${memory.titleId}]`}
          data-strk-img-ratio="16x9"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={memory.title}
          className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-space-mid via-transparent to-transparent" />

        {/* Emotion badge */}
        <div
          className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-medium capitalize"
          style={{
            color: emotionColor,
            backgroundColor: emotionColor + '25',
            border: `1px solid ${emotionColor}50`,
          }}
        >
          {memory.emotion}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs text-slate-500 font-mono">{memory.year} CE</span>
          <span className="text-slate-700">·</span>
          <span className="text-xs text-slate-500">{memory.location}</span>
        </div>

        <h3 id={memory.titleId} className="font-semibold text-white text-base mb-2 leading-snug group-hover:text-nebula-blue transition-colors line-clamp-2">
          {memory.title}
        </h3>

        <p id={memory.descId} className="text-slate-400 text-sm leading-relaxed line-clamp-3 mb-4">
          {memory.excerpt}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-xs text-slate-500">— {memory.author}</span>
          <span className="text-xs text-slate-600">
            {memory.views.toLocaleString()} views
          </span>
        </div>
      </div>
    </Link>
  );
}
