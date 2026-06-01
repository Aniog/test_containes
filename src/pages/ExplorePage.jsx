import { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { MEMORIES, ERAS, EMOTIONS, LIFE_EVENTS, REGIONS } from '../data/memories';

const emotionColors = {
  joy: 'text-stardust-gold border-stardust-gold/30 bg-stardust-gold/10',
  love: 'text-supernova-rose border-supernova-rose/30 bg-supernova-rose/10',
  grief: 'text-nebula-blue border-nebula-blue/30 bg-nebula-blue/10',
  wonder: 'text-cosmic-violet border-cosmic-violet/30 bg-cosmic-violet/10',
  fear: 'text-aurora-teal border-aurora-teal/30 bg-aurora-teal/10',
  hope: 'text-stardust-gold border-stardust-gold/30 bg-stardust-gold/10',
  nostalgia: 'text-supernova-rose border-supernova-rose/30 bg-supernova-rose/10',
  pride: 'text-cosmic-violet border-cosmic-violet/30 bg-cosmic-violet/10',
};

function FilterPill({ label, active, onClick, color }) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1.5 rounded-full text-xs uppercase tracking-wider border transition-all duration-200 ${
        active
          ? 'bg-nebula-blue text-white border-nebula-blue'
          : 'border-slate-700 text-slate-400 hover:border-slate-500 hover:text-slate-200'
      }`}
      style={active && color ? { backgroundColor: color, borderColor: color } : {}}
    >
      {label}
    </button>
  );
}

function MemoryCard({ memory }) {
  const emotion = EMOTIONS.find(e => e.id === memory.emotion);
  const era = ERAS.find(e => e.id === memory.era);

  return (
    <Link
      to={`/memory/${memory.id}`}
      className="group block p-5 rounded-xl border border-slate-800 bg-space-navy hover:border-nebula-blue/40 hover:shadow-[0_0_20px_rgba(79,142,247,0.08)] transition-all duration-300"
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <span
          className="text-xs uppercase tracking-wider font-medium px-2 py-0.5 rounded-full border"
          style={{ color: era?.color, borderColor: era?.color + '40', backgroundColor: era?.color + '15' }}
        >
          {era?.label}
        </span>
        <span className="text-xs text-slate-600 shrink-0">{memory.year}</span>
      </div>

      <h3 className="font-display text-lg text-white font-light mb-2 group-hover:text-nebula-blue transition-colors duration-300 leading-snug">
        {memory.title}
      </h3>

      <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">
        {memory.excerpt}
      </p>

      <div className="flex items-center justify-between">
        <span className={`text-xs px-2 py-0.5 rounded-full border ${emotionColors[memory.emotion] || 'text-slate-400 border-slate-700'}`}>
          {emotion?.icon} {emotion?.label}
        </span>
        <span className="text-xs text-slate-600">{memory.region}</span>
      </div>

      <div className="mt-3 pt-3 border-t border-slate-800/60 flex items-center justify-between">
        <span className="text-xs text-slate-500">{memory.author}</span>
        <span className="text-xs text-slate-600">{memory.fragments.toLocaleString()} fragments</span>
      </div>
    </Link>
  );
}

export default function ExplorePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const activeEra = searchParams.get('era') || '';
  const activeEmotion = searchParams.get('emotion') || '';
  const activeLifeEvent = searchParams.get('lifeEvent') || '';
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
    setQuery('');
  };

  const hasFilters = activeEra || activeEmotion || activeLifeEvent || activeRegion || query;

  const filtered = useMemo(() => {
    return MEMORIES.filter(m => {
      if (activeEra && m.era !== activeEra) return false;
      if (activeEmotion && m.emotion !== activeEmotion) return false;
      if (activeLifeEvent && m.lifeEvent !== activeLifeEvent) return false;
      if (activeRegion && m.region !== activeRegion) return false;
      if (query) {
        const q = query.toLowerCase();
        return (
          m.title.toLowerCase().includes(q) ||
          m.excerpt.toLowerCase().includes(q) ||
          m.author.toLowerCase().includes(q) ||
          m.tags.some(t => t.toLowerCase().includes(q))
        );
      }
      return true;
    });
  }, [activeEra, activeEmotion, activeLifeEvent, activeRegion, query]);

  return (
    <div className="min-h-screen bg-space-black pt-16">
      {/* Header */}
      <div className="border-b border-slate-800 bg-space-navy/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
          <p className="text-xs uppercase tracking-widest text-nebula-blue mb-3">Memory Archive</p>
          <h1 className="font-display text-4xl md:text-5xl text-white font-light mb-4">
            Explore Memories
          </h1>
          <p className="text-slate-400 text-base max-w-xl">
            Search through {MEMORIES.length.toLocaleString()} archived memories from across human history.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        {/* Search + filter toggle */}
        <div className="flex gap-3 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              placeholder="Search memories, authors, tags..."
              value={query}
              onChange={e => setQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-space-navy border border-slate-700 text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:border-nebula-blue/60 transition-colors"
            />
          </div>
          <button
            onClick={() => setShowFilters(v => !v)}
            className={`flex items-center gap-2 px-4 py-3 rounded-xl border text-sm transition-all duration-200 ${
              showFilters
                ? 'bg-nebula-blue/20 border-nebula-blue/50 text-nebula-blue'
                : 'border-slate-700 text-slate-400 hover:border-slate-500 hover:text-slate-200'
            }`}
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span className="hidden sm:inline">Filters</span>
          </button>
          {hasFilters && (
            <button
              onClick={clearFilters}
              className="flex items-center gap-2 px-4 py-3 rounded-xl border border-slate-700 text-slate-400 hover:text-white text-sm transition-colors"
            >
              <X className="w-4 h-4" />
              <span className="hidden sm:inline">Clear</span>
            </button>
          )}
        </div>

        {/* Filter panels */}
        {showFilters && (
          <div className="mb-8 p-6 rounded-xl border border-slate-800 bg-space-navy space-y-6">
            {/* Era */}
            <div>
              <p className="text-xs uppercase tracking-widest text-slate-500 mb-3">Era</p>
              <div className="flex flex-wrap gap-2">
                {ERAS.map(era => (
                  <FilterPill
                    key={era.id}
                    label={era.label}
                    active={activeEra === era.id}
                    onClick={() => setFilter('era', era.id)}
                    color={era.color}
                  />
                ))}
              </div>
            </div>

            {/* Emotion */}
            <div>
              <p className="text-xs uppercase tracking-widest text-slate-500 mb-3">Emotion</p>
              <div className="flex flex-wrap gap-2">
                {EMOTIONS.map(emotion => (
                  <FilterPill
                    key={emotion.id}
                    label={`${emotion.icon} ${emotion.label}`}
                    active={activeEmotion === emotion.id}
                    onClick={() => setFilter('emotion', emotion.id)}
                  />
                ))}
              </div>
            </div>

            {/* Life Event */}
            <div>
              <p className="text-xs uppercase tracking-widest text-slate-500 mb-3">Life Event</p>
              <div className="flex flex-wrap gap-2">
                {LIFE_EVENTS.map(event => (
                  <FilterPill
                    key={event.id}
                    label={event.label}
                    active={activeLifeEvent === event.id}
                    onClick={() => setFilter('lifeEvent', event.id)}
                  />
                ))}
              </div>
            </div>

            {/* Region */}
            <div>
              <p className="text-xs uppercase tracking-widest text-slate-500 mb-3">Region</p>
              <div className="flex flex-wrap gap-2">
                {REGIONS.map(region => (
                  <FilterPill
                    key={region}
                    label={region}
                    active={activeRegion === region}
                    onClick={() => setFilter('region', region)}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Active filter chips */}
        {hasFilters && (
          <div className="flex flex-wrap gap-2 mb-6">
            {activeEra && (
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-stardust-gold/15 border border-stardust-gold/30 text-stardust-gold text-xs">
                {ERAS.find(e => e.id === activeEra)?.label}
                <button onClick={() => setFilter('era', activeEra)}><X className="w-3 h-3" /></button>
              </span>
            )}
            {activeEmotion && (
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-cosmic-violet/15 border border-cosmic-violet/30 text-cosmic-violet text-xs">
                {EMOTIONS.find(e => e.id === activeEmotion)?.label}
                <button onClick={() => setFilter('emotion', activeEmotion)}><X className="w-3 h-3" /></button>
              </span>
            )}
            {activeLifeEvent && (
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-aurora-teal/15 border border-aurora-teal/30 text-aurora-teal text-xs">
                {LIFE_EVENTS.find(e => e.id === activeLifeEvent)?.label}
                <button onClick={() => setFilter('lifeEvent', activeLifeEvent)}><X className="w-3 h-3" /></button>
              </span>
            )}
            {activeRegion && (
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-nebula-blue/15 border border-nebula-blue/30 text-nebula-blue text-xs">
                {activeRegion}
                <button onClick={() => setFilter('region', activeRegion)}><X className="w-3 h-3" /></button>
              </span>
            )}
          </div>
        )}

        {/* Results count */}
        <p className="text-sm text-slate-500 mb-6">
          {filtered.length} {filtered.length === 1 ? 'memory' : 'memories'} found
        </p>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map(memory => (
              <MemoryCard key={memory.id} memory={memory} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <div className="text-4xl mb-4 text-slate-700">◎</div>
            <p className="text-slate-400 text-lg font-display font-light mb-2">No memories found</p>
            <p className="text-slate-600 text-sm mb-6">Try adjusting your filters or search terms</p>
            <button
              onClick={clearFilters}
              className="px-6 py-2 rounded-full border border-slate-700 text-slate-400 hover:text-white text-sm transition-colors"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
