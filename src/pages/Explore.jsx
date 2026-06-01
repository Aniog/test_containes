import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ERAS, EMOTIONS, LIFE_EVENTS, REGIONS, FEATURED_MEMORIES } from '../data/memories';

const FILTER_TABS = [
  { id: 'all', label: 'All Memories' },
  { id: 'era', label: 'By Era' },
  { id: 'emotion', label: 'By Emotion' },
  { id: 'event', label: 'By Life Event' },
  { id: 'location', label: 'By Location' },
];

const EMOTION_COLORS = {
  joy: '#f5c842', love: '#e879a0', wonder: '#4f8ef7',
  grief: '#a78bfa', courage: '#2dd4bf', nostalgia: '#fb923c',
  hope: '#34d399', fear: '#94a3b8',
};

function formatCount(n) {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + 'M';
  if (n >= 1_000) return (n / 1_000).toFixed(0) + 'K';
  return n.toString();
}

function MemoryCard({ memory }) {
  const color = EMOTION_COLORS[memory.emotion] || '#4f8ef7';
  return (
    <Link
      to={`/memory/${memory.id}`}
      className="group bg-space-navy/80 border border-slate-700/40 rounded-2xl overflow-hidden hover:border-nebula-blue/40 transition-all duration-300 hover:scale-[1.01] hover:shadow-lg flex flex-col"
    >
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500">{memory.year}</span>
            <span className="text-slate-700">·</span>
            <span className="text-xs text-slate-500 truncate max-w-[120px]">{memory.location}</span>
          </div>
          <span
            className="text-xs font-medium px-2 py-0.5 rounded-full"
            style={{ background: `${color}20`, color, border: `1px solid ${color}30` }}
          >
            {memory.emotion}
          </span>
        </div>
        <h3 className="font-cinzel font-semibold text-white text-sm mb-2 group-hover:text-nebula-blue transition-colors">
          {memory.title}
        </h3>
        <p className="text-slate-400 text-xs leading-relaxed flex-1 line-clamp-3">
          {memory.excerpt}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs text-slate-500">— {memory.author}</span>
          <div className="flex gap-1.5 flex-wrap justify-end">
            {memory.tags.slice(0, 2).map((tag) => (
              <span key={tag} className="text-xs text-slate-600 bg-slate-800/60 px-2 py-0.5 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}

function CategoryGrid({ items, basePath, colorKey = 'color' }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {items.map((item) => (
        <Link
          key={item.id}
          to={`${basePath}/${item.id}`}
          className="group bg-space-navy/80 border border-slate-700/40 rounded-2xl p-5 hover:border-opacity-80 transition-all duration-300 hover:scale-[1.02] overflow-hidden relative"
        >
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
            style={{ background: `radial-gradient(ellipse at top left, ${item[colorKey]}12 0%, transparent 60%)` }}
          />
          <div className="relative">
            <div className="text-2xl mb-2" style={{ color: item[colorKey] }}>
              {item.icon || '◈'}
            </div>
            <h3 className="font-semibold text-white text-sm mb-1">{item.label}</h3>
            <p className="text-xs text-slate-500">{formatCount(item.count)} memories</p>
            {item.range && <p className="text-xs text-slate-600 mt-0.5">{item.range}</p>}
          </div>
        </Link>
      ))}
    </div>
  );
}

export default function Explore() {
  const { category, subcategory } = useParams();
  const [activeTab, setActiveTab] = useState(category || 'all');
  const [search, setSearch] = useState('');

  const filteredMemories = FEATURED_MEMORIES.filter((m) => {
    if (!search) return true;
    const q = search.toLowerCase();
    return (
      m.title.toLowerCase().includes(q) ||
      m.excerpt.toLowerCase().includes(q) ||
      m.author.toLowerCase().includes(q) ||
      m.location.toLowerCase().includes(q) ||
      m.tags.some((t) => t.toLowerCase().includes(q))
    );
  });

  return (
    <div className="min-h-screen bg-space-black pt-20">
      {/* Header */}
      <div className="relative py-16 px-4 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 50% 0%, rgba(79,142,247,0.08) 0%, transparent 60%)',
          }}
        />
        <div className="max-w-7xl mx-auto relative text-center">
          <p className="text-nebula-blue text-xs font-medium tracking-widest uppercase mb-3">The Archive</p>
          <h1 className="font-cinzel text-4xl md:text-5xl font-bold text-white mb-4">
            Explore Memories
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto mb-8">
            142 million preserved moments from across human history. Search, filter, and discover.
          </p>

          {/* Search */}
          <div className="max-w-lg mx-auto relative">
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search memories, places, people..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-space-navy/80 border border-slate-700/60 rounded-full pl-11 pr-5 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-nebula-blue/60 transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="px-4 mb-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {FILTER_TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-shrink-0 px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-nebula-blue text-white shadow-md shadow-nebula-blue/30'
                    : 'bg-space-navy/60 text-slate-400 hover:text-white border border-slate-700/40'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 pb-24">
        <div className="max-w-7xl mx-auto">
          {activeTab === 'all' && (
            <div>
              <p className="text-slate-500 text-sm mb-6">
                Showing {filteredMemories.length} of 142,891,034 memories
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredMemories.map((m) => (
                  <MemoryCard key={m.id} memory={m} />
                ))}
              </div>
            </div>
          )}

          {activeTab === 'era' && (
            <div>
              <p className="text-slate-500 text-sm mb-6">Browse memories by historical period</p>
              <CategoryGrid items={ERAS} basePath="/explore/era" />
            </div>
          )}

          {activeTab === 'emotion' && (
            <div>
              <p className="text-slate-500 text-sm mb-6">Explore memories by the emotions they carry</p>
              <CategoryGrid items={EMOTIONS} basePath="/explore/emotion" />
            </div>
          )}

          {activeTab === 'event' && (
            <div>
              <p className="text-slate-500 text-sm mb-6">Discover memories around life's defining moments</p>
              <CategoryGrid items={LIFE_EVENTS} basePath="/explore/event" />
            </div>
          )}

          {activeTab === 'location' && (
            <div>
              <p className="text-slate-500 text-sm mb-6">Find memories from every corner of the Earth</p>
              <CategoryGrid
                items={REGIONS.map((r) => ({ ...r, icon: '◉', color: '#4f8ef7' }))}
                basePath="/explore/location"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
