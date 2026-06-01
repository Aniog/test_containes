import { useState, useMemo, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { MEMORIES, ERAS, EMOTIONS, LOCATIONS, LIFE_EVENTS } from '../data/memories';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const EMOTION_COLORS = {
  joy: '#f5c842', love: '#e879a0', grief: '#6366f1', wonder: '#2dd4bf',
  courage: '#f97316', peace: '#86efac', longing: '#8b5cf6', pride: '#4f8ef7',
};

const FILTER_TABS = [
  { id: 'all', label: 'All Memories' },
  { id: 'era', label: 'By Era' },
  { id: 'emotion', label: 'By Emotion' },
  { id: 'location', label: 'By Location' },
  { id: 'lifeEvent', label: 'By Life Event' },
];

export default function ExplorePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState(searchParams.get('filter') || 'all');
  const [selectedEra, setSelectedEra] = useState(null);
  const [selectedEmotion, setSelectedEmotion] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedLifeEvent, setSelectedLifeEvent] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const filter = searchParams.get('filter');
    if (filter) setActiveTab(filter);
  }, [searchParams]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const filtered = useMemo(() => {
    let result = MEMORIES;
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (m) =>
          m.title.toLowerCase().includes(q) ||
          m.excerpt.toLowerCase().includes(q) ||
          m.author.toLowerCase().includes(q) ||
          m.location.toLowerCase().includes(q) ||
          m.tags.some((t) => t.toLowerCase().includes(q))
      );
    }
    if (selectedEra) result = result.filter((m) => m.era === selectedEra);
    if (selectedEmotion) result = result.filter((m) => m.emotion === selectedEmotion);
    if (selectedLocation) result = result.filter((m) => m.locationId === selectedLocation);
    if (selectedLifeEvent) result = result.filter((m) => m.lifeEvent === selectedLifeEvent);
    return result;
  }, [search, selectedEra, selectedEmotion, selectedLocation, selectedLifeEvent]);

  const clearFilters = () => {
    setSelectedEra(null);
    setSelectedEmotion(null);
    setSelectedLocation(null);
    setSelectedLifeEvent(null);
    setSearch('');
  };

  const hasFilters = selectedEra || selectedEmotion || selectedLocation || selectedLifeEvent || search;

  return (
    <div className="min-h-screen bg-space-black pt-16" ref={containerRef}>
      {/* Header */}
      <div className="bg-gradient-to-b from-space-mid to-space-black py-16 px-4 border-b border-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-nebula-blue text-xs font-medium tracking-widest uppercase mb-3">
            ✦ The Archive
          </div>
          <h1 className="font-cinzel text-4xl md:text-5xl font-bold text-white mb-4">
            Explore Memories
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mb-8">
            {MEMORIES.length.toLocaleString()} sample memories from 4.7 million preserved stories
          </p>

          {/* Search */}
          <div className="relative max-w-xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              placeholder="Search by title, author, location, or tag..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-space-navy border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-nebula-blue/60 focus:shadow-[0_0_0_3px_rgba(79,142,247,0.1)] transition-all"
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-500 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Filter tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-6 scrollbar-hide">
          {FILTER_TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-nebula-blue/20 text-nebula-blue border border-nebula-blue/40'
                  : 'text-slate-400 border border-slate-700 hover:border-slate-600 hover:text-slate-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
          {hasFilters && (
            <button
              onClick={clearFilters}
              className="flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm text-memory-rose border border-memory-rose/30 hover:bg-memory-rose/10 transition-all"
            >
              <X className="w-3.5 h-3.5" />
              Clear filters
            </button>
          )}
        </div>

        {/* Sub-filters */}
        {activeTab === 'era' && (
          <FilterRow
            items={ERAS}
            selected={selectedEra}
            onSelect={(id) => setSelectedEra(selectedEra === id ? null : id)}
            labelKey="label"
            iconKey="icon"
          />
        )}
        {activeTab === 'emotion' && (
          <FilterRow
            items={EMOTIONS}
            selected={selectedEmotion}
            onSelect={(id) => setSelectedEmotion(selectedEmotion === id ? null : id)}
            labelKey="label"
            iconKey="icon"
          />
        )}
        {activeTab === 'location' && (
          <FilterRow
            items={LOCATIONS}
            selected={selectedLocation}
            onSelect={(id) => setSelectedLocation(selectedLocation === id ? null : id)}
            labelKey="label"
            iconKey={null}
          />
        )}
        {activeTab === 'lifeEvent' && (
          <FilterRow
            items={LIFE_EVENTS}
            selected={selectedLifeEvent}
            onSelect={(id) => setSelectedLifeEvent(selectedLifeEvent === id ? null : id)}
            labelKey="label"
            iconKey="icon"
          />
        )}

        {/* Results count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-slate-500 text-sm">
            Showing <span className="text-white font-medium">{filtered.length}</span> memories
          </p>
          <div className="flex items-center gap-2 text-slate-500 text-xs">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            Sorted by relevance
          </div>
        </div>

        {/* Memory grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-24">
            <div className="text-4xl mb-4">🌌</div>
            <h3 className="font-cinzel text-xl text-white mb-2">No memories found</h3>
            <p className="text-slate-400 text-sm">Try adjusting your search or filters</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((memory) => (
              <MemoryCard key={memory.id} memory={memory} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function FilterRow({ items, selected, onSelect, labelKey, iconKey }) {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {items.map((item) => {
        const isActive = selected === item.id;
        return (
          <button
            key={item.id}
            onClick={() => onSelect(item.id)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-all"
            style={
              isActive
                ? {
                    color: item.color,
                    borderColor: item.color + '80',
                    backgroundColor: item.color + '25',
                  }
                : {
                    color: '#94a3b8',
                    borderColor: '#334155',
                    backgroundColor: 'transparent',
                  }
            }
          >
            {iconKey && item[iconKey] && <span>{item[iconKey]}</span>}
            {item[labelKey]}
          </button>
        );
      })}
    </div>
  );
}

function MemoryCard({ memory }) {
  const emotionColor = EMOTION_COLORS[memory.emotion] || '#4f8ef7';

  return (
    <Link
      to={`/memory/${memory.id}`}
      className="group block bg-space-navy border border-slate-700/50 rounded-2xl overflow-hidden hover:border-nebula-blue/40 hover:shadow-[0_0_25px_rgba(79,142,247,0.1)] transition-all duration-300"
    >
      <div className="relative h-40 overflow-hidden bg-space-black">
        <img
          data-strk-img-id={memory.imgId}
          data-strk-img={`[${memory.descId}] [${memory.titleId}]`}
          data-strk-img-ratio="16x9"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={memory.title}
          className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-space-navy via-transparent to-transparent" />
        <div
          className="absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-medium capitalize"
          style={{
            color: emotionColor,
            backgroundColor: emotionColor + '25',
            border: `1px solid ${emotionColor}50`,
          }}
        >
          {memory.emotion}
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs text-slate-500 font-mono">{memory.year} CE</span>
          <span className="text-slate-700">·</span>
          <span className="text-xs text-slate-500 truncate">{memory.location}</span>
        </div>

        <h3 id={memory.titleId} className="font-semibold text-white text-sm mb-2 leading-snug group-hover:text-nebula-blue transition-colors line-clamp-2">
          {memory.title}
        </h3>

        <p id={memory.descId} className="text-slate-400 text-xs leading-relaxed line-clamp-3 mb-3">
          {memory.excerpt}
        </p>

        <div className="flex flex-wrap gap-1 mb-3">
          {memory.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="px-2 py-0.5 rounded-full text-xs text-slate-500 bg-slate-800/60 border border-slate-700/50">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <span className="text-xs text-slate-500 truncate">— {memory.author}</span>
          <span className="text-xs text-slate-600">{memory.views.toLocaleString()} views</span>
        </div>
      </div>
    </Link>
  );
}
