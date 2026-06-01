import { useState, useMemo } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Search, Filter, X } from 'lucide-react';
import { MEMORIES, ERAS, EMOTIONS, LIFE_EVENTS, REGIONS } from '../../data/memories';

function getEraColor(eraId) {
  return ERAS.find(e => e.id === eraId)?.color || '#4f8ef7';
}
function getEmotionColor(emotionId) {
  return EMOTIONS.find(e => e.id === emotionId)?.color || '#4f8ef7';
}

function MemoryCard({ memory }) {
  const navigate = useNavigate();
  const eraColor = getEraColor(memory.era);
  const emotionColor = getEmotionColor(memory.emotion);

  return (
    <button
      onClick={() => navigate(`/memory/${memory.id}`)}
      className="w-full text-left group bg-space-navy border border-slate-800 rounded-xl p-6 transition-all duration-300 hover:scale-[1.01] hover:shadow-xl overflow-hidden"
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = eraColor + '50';
        e.currentTarget.style.boxShadow = `0 0 25px ${eraColor}12`;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'rgb(30 41 59)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <div className="h-px w-full mb-4 opacity-50" style={{ background: `linear-gradient(to right, ${eraColor}, transparent)` }} />

      <div className="flex flex-wrap gap-2 mb-3">
        <span className="text-xs px-2 py-0.5 rounded-full font-inter" style={{ backgroundColor: eraColor + '20', color: eraColor }}>
          {memory.year}
        </span>
        <span className="text-xs px-2 py-0.5 rounded-full font-inter capitalize" style={{ backgroundColor: emotionColor + '20', color: emotionColor }}>
          {memory.emotion}
        </span>
        <span className="text-xs px-2 py-0.5 rounded-full font-inter text-aurora-teal bg-aurora-teal/10 capitalize">
          {memory.region}
        </span>
      </div>

      <h3 className="font-cinzel text-white text-base mb-2 leading-snug">{memory.title}</h3>
      <p className="text-slate-400 text-sm font-inter leading-relaxed mb-4 line-clamp-2">{memory.excerpt}</p>

      <div className="flex items-center justify-between">
        <span className="text-slate-600 text-xs font-inter">{memory.author}</span>
        <span className="text-slate-600 text-xs font-inter">{(memory.views / 1000).toFixed(0)}k views</span>
      </div>
    </button>
  );
}

function FilterChip({ label, active, color, onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-3 py-1.5 rounded-full text-xs font-inter font-medium transition-all duration-200 border"
      style={active ? {
        backgroundColor: color + '25',
        borderColor: color + '60',
        color: color,
      } : {
        backgroundColor: 'transparent',
        borderColor: 'rgb(51 65 85)',
        color: 'rgb(148 163 184)',
      }}
    >
      {label}
    </button>
  );
}

export default function ExploreGrid() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const activeEra = searchParams.get('era') || '';
  const activeEmotion = searchParams.get('emotion') || '';
  const activeEvent = searchParams.get('event') || '';
  const activeRegion = searchParams.get('region') || '';

  const setFilter = (key, value) => {
    const params = new URLSearchParams(searchParams);
    if (params.get(key) === value) {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    setSearchParams(params);
  };

  const clearFilters = () => {
    setSearchParams({});
    setSearch('');
  };

  const hasFilters = activeEra || activeEmotion || activeEvent || activeRegion || search;

  const filtered = useMemo(() => {
    return MEMORIES.filter(m => {
      if (activeEra && m.era !== activeEra) return false;
      if (activeEmotion && m.emotion !== activeEmotion) return false;
      if (activeEvent && m.lifeEvent !== activeEvent) return false;
      if (activeRegion && m.region !== activeRegion) return false;
      if (search) {
        const q = search.toLowerCase();
        return (
          m.title.toLowerCase().includes(q) ||
          m.excerpt.toLowerCase().includes(q) ||
          m.author.toLowerCase().includes(q) ||
          m.tags.some(t => t.includes(q))
        );
      }
      return true;
    });
  }, [activeEra, activeEmotion, activeEvent, activeRegion, search]);

  return (
    <div className="min-h-screen bg-space-black pt-20">
      {/* Header */}
      <div className="bg-gradient-to-b from-space-midnight to-space-black px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <p className="text-nebula-blue text-sm tracking-[0.3em] uppercase font-inter mb-3">Archive</p>
          <h1 className="font-cinzel text-4xl md:text-5xl text-white mb-4">Explore Memories</h1>
          <p className="text-slate-400 font-inter max-w-xl">
            Search through {MEMORIES.length.toLocaleString()} recorded memories from across human history.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Search + filter toggle */}
        <div className="flex gap-3 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 w-4 h-4" />
            <input
              type="text"
              placeholder="Search memories, authors, tags..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full bg-space-navy border border-slate-800 rounded-lg pl-10 pr-4 py-3 text-white placeholder-slate-600 text-sm font-inter focus:outline-none focus:border-nebula-blue/50 transition-colors"
            />
          </div>
          <button
            onClick={() => setShowFilters(v => !v)}
            className={`flex items-center gap-2 px-4 py-3 rounded-lg border text-sm font-inter transition-all duration-200 ${
              showFilters
                ? 'bg-nebula-blue/20 border-nebula-blue/50 text-nebula-blue'
                : 'bg-space-navy border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            <Filter size={15} />
            Filters
          </button>
          {hasFilters && (
            <button
              onClick={clearFilters}
              className="flex items-center gap-1 px-3 py-3 rounded-lg border border-slate-800 text-slate-500 hover:text-white text-sm font-inter transition-colors"
            >
              <X size={14} />
              Clear
            </button>
          )}
        </div>

        {/* Filter panels */}
        {showFilters && (
          <div className="bg-space-navy border border-slate-800 rounded-xl p-6 mb-6 space-y-5">
            {/* Era */}
            <div>
              <p className="text-slate-400 text-xs uppercase tracking-widest font-inter mb-3">Era</p>
              <div className="flex flex-wrap gap-2">
                {ERAS.map(era => (
                  <FilterChip
                    key={era.id}
                    label={era.label}
                    active={activeEra === era.id}
                    color={era.color}
                    onClick={() => setFilter('era', era.id)}
                  />
                ))}
              </div>
            </div>

            {/* Emotion */}
            <div>
              <p className="text-slate-400 text-xs uppercase tracking-widest font-inter mb-3">Emotion</p>
              <div className="flex flex-wrap gap-2">
                {EMOTIONS.map(emotion => (
                  <FilterChip
                    key={emotion.id}
                    label={`${emotion.icon} ${emotion.label}`}
                    active={activeEmotion === emotion.id}
                    color={emotion.color}
                    onClick={() => setFilter('emotion', emotion.id)}
                  />
                ))}
              </div>
            </div>

            {/* Life Event */}
            <div>
              <p className="text-slate-400 text-xs uppercase tracking-widest font-inter mb-3">Life Event</p>
              <div className="flex flex-wrap gap-2">
                {LIFE_EVENTS.map(event => (
                  <FilterChip
                    key={event.id}
                    label={`${event.icon} ${event.label}`}
                    active={activeEvent === event.id}
                    color="#4f8ef7"
                    onClick={() => setFilter('event', event.id)}
                  />
                ))}
              </div>
            </div>

            {/* Region */}
            <div>
              <p className="text-slate-400 text-xs uppercase tracking-widest font-inter mb-3">Region</p>
              <div className="flex flex-wrap gap-2">
                {REGIONS.map(region => (
                  <FilterChip
                    key={region.id}
                    label={region.label}
                    active={activeRegion === region.id}
                    color="#2dd4bf"
                    onClick={() => setFilter('region', region.id)}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Active filter summary */}
        {hasFilters && (
          <div className="flex flex-wrap gap-2 mb-6">
            {activeEra && (
              <span className="flex items-center gap-1 text-xs px-3 py-1 rounded-full bg-stardust-gold/20 text-stardust-gold border border-stardust-gold/30 font-inter">
                Era: {ERAS.find(e => e.id === activeEra)?.label}
                <button onClick={() => setFilter('era', activeEra)}><X size={10} /></button>
              </span>
            )}
            {activeEmotion && (
              <span className="flex items-center gap-1 text-xs px-3 py-1 rounded-full bg-cosmic-violet/20 text-cosmic-violet border border-cosmic-violet/30 font-inter">
                Emotion: {EMOTIONS.find(e => e.id === activeEmotion)?.label}
                <button onClick={() => setFilter('emotion', activeEmotion)}><X size={10} /></button>
              </span>
            )}
            {activeEvent && (
              <span className="flex items-center gap-1 text-xs px-3 py-1 rounded-full bg-nebula-blue/20 text-nebula-blue border border-nebula-blue/30 font-inter">
                Event: {LIFE_EVENTS.find(e => e.id === activeEvent)?.label}
                <button onClick={() => setFilter('event', activeEvent)}><X size={10} /></button>
              </span>
            )}
            {activeRegion && (
              <span className="flex items-center gap-1 text-xs px-3 py-1 rounded-full bg-aurora-teal/20 text-aurora-teal border border-aurora-teal/30 font-inter">
                Region: {REGIONS.find(r => r.id === activeRegion)?.label}
                <button onClick={() => setFilter('region', activeRegion)}><X size={10} /></button>
              </span>
            )}
          </div>
        )}

        {/* Results count */}
        <p className="text-slate-500 text-sm font-inter mb-6">
          Showing <span className="text-white font-medium">{filtered.length}</span> memories
          {hasFilters && ' matching your filters'}
        </p>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(memory => (
              <MemoryCard key={memory.id} memory={memory} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-4xl mb-4">◎</div>
            <h3 className="font-cinzel text-white text-xl mb-2">No memories found</h3>
            <p className="text-slate-500 font-inter text-sm">Try adjusting your filters or search terms.</p>
            <button
              onClick={clearFilters}
              className="mt-6 px-6 py-2 border border-nebula-blue/40 text-nebula-blue rounded-lg text-sm font-inter hover:bg-nebula-blue/10 transition-colors"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
