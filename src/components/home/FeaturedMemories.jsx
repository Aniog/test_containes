import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FEATURED_MEMORIES } from '../../data/memories';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const EMOTION_COLORS = {
  joy: '#f5c842',
  love: '#e879a0',
  wonder: '#4f8ef7',
  grief: '#a78bfa',
  courage: '#2dd4bf',
  nostalgia: '#fb923c',
  hope: '#34d399',
  fear: '#94a3b8',
};

function MemoryCard({ memory }) {
  const color = EMOTION_COLORS[memory.emotion] || '#4f8ef7';

  return (
    <Link
      to={`/memory/${memory.id}`}
      className="group relative bg-space-navy/80 border border-slate-700/40 rounded-2xl overflow-hidden hover:border-opacity-80 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl flex flex-col"
      style={{ '--accent': color }}
    >
      {/* Image */}
      <div className="relative h-44 overflow-hidden bg-space-indigo">
        <img
          data-strk-img-id={memory.imgId}
          data-strk-img={`[${memory.descId}] [${memory.titleId}]`}
          data-strk-img-ratio="3x2"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={memory.title}
          className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
        />
        <div
          className="absolute inset-0"
          style={{ background: `linear-gradient(to top, ${color}30 0%, transparent 60%)` }}
        />
        <div className="absolute top-3 right-3">
          <span
            className="text-xs font-medium px-2.5 py-1 rounded-full backdrop-blur-sm"
            style={{ background: `${color}25`, color, border: `1px solid ${color}40` }}
          >
            {memory.emotion}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs text-slate-500">{memory.year}</span>
          <span className="text-slate-700">·</span>
          <span className="text-xs text-slate-500">{memory.location}</span>
        </div>
        <h3 id={memory.titleId} className="font-cinzel font-semibold text-white text-base mb-2 group-hover:text-nebula-blue transition-colors">
          {memory.title}
        </h3>
        <p id={memory.descId} className="text-slate-400 text-sm leading-relaxed flex-1 line-clamp-3">
          {memory.excerpt}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs text-slate-500">— {memory.author}</span>
          <span className="text-xs text-slate-600">
            {(memory.views / 1000).toFixed(0)}K views
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function FeaturedMemories() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-24 px-4 bg-space-navy/30 relative" ref={containerRef}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 20% 50%, rgba(79,142,247,0.04) 0%, transparent 60%)',
        }}
      />
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-12">
          <p className="text-nebula-blue text-xs font-medium tracking-widest uppercase mb-3">Featured</p>
          <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-white mb-4">
            Memories That Echo
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Curated fragments from across the archive — moments that resonate across cultures and centuries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURED_MEMORIES.map((memory) => (
            <MemoryCard key={memory.id} memory={memory} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/explore"
            className="inline-flex items-center gap-2 text-nebula-blue hover:text-blue-300 font-medium transition-colors group"
          >
            <span>Explore all 142 million memories</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
