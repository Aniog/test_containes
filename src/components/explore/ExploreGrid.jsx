import { useState, useMemo } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { MEMORIES, ERAS, EMOTIONS, LIFE_EVENTS, LOCATIONS } from '../../data/memories';

const getEmotionColor = (emotionId) => {
  const emotion = EMOTIONS.find(e => e.id === emotionId);
  return emotion ? emotion.color : '#94a3b8';
};

export default function ExploreGrid() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const [search, setSearch] = useState('');
  const [activeEra, setActiveEra] = useState(searchParams.get('era') || '');
  const [activeEmotion, setActiveEmotion] = useState(searchParams.get('emotion') || '');
  const [activeLifeEvent, setActiveLifeEvent] = useState(searchParams.get('lifeEvent') || '');
  const [activeLocation, setActiveLocation] = useState('');
  const [sortBy, setSortBy] = useState('views');

  const filtered = useMemo(() => {
    let result = [...MEMORIES];

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(m =>
        m.title.toLowerCase().includes(q) ||
        m.excerpt.toLowerCase().includes(q) ||
        m.author.toLowerCase().includes(q) ||
        m.tags.some(t => t.toLowerCase().includes(q))
      );
    }
    if (activeEra) result = result.filter(m => m.era === activeEra);
    if (activeEmotion) result = result.filter(m => m.emotion === activeEmotion);
    if (activeLifeEvent) result = result.filter(m => m.lifeEvent === activeLifeEvent);
    if (activeLocation) result = result.filter(m => m.location === activeLocation);

    if (sortBy === 'views') result.sort((a, b) => b.views - a.views);
    else if (sortBy === 'year_asc') result.sort((a, b) => a.year - b.year);
    else if (sortBy === 'year_desc') result.sort((a, b) => b.year - a.year);

    return result;
  }, [search, activeEra, activeEmotion, activeLifeEvent, activeLocation, sortBy]);

  const clearFilters = () => {
    setActiveEra('');
    setActiveEmotion('');
    setActiveLifeEvent('');
    setActiveLocation('');
    setSearch('');
  };

  const hasFilters = activeEra || activeEmotion || activeLifeEvent || activeLocation || search;

  return (
    <div className="min-h-screen bg-cosmos-black pt-20">
      {/* Page header */}
      <div className="bg-cosmos-navy border-b border-cosmos-blue/20 py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <p className="text-xs tracking-[0.4em] uppercase text-stardust-cyan mb-3 font-inter">
            The Archive
          </p>
          <h1 className="font-cinzel text-3xl md:text-4xl text-memory-white mb-2">
            Explore Memories
          </h1>
          <p className="text-memory-muted font-inter">
            {filtered.length.toLocaleString()} memories found
            {hasFilters ? ' (filtered)' : ' · showing all'}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar filters */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="sticky top-24 space-y-6">
              {/* Search */}
              <div>
                <label className="text-xs tracking-widest uppercase text-memory-muted font-inter mb-2 block">
                  Search
                </label>
                <input
                  type="text"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  placeholder="Search memories..."
                  className="w-full bg-cosmos-dark border border-cosmos-blue/40 rounded-lg px-3 py-2.5 text-sm text-memory-white placeholder-memory-muted/50 focus:outline-none focus:border-nebula-violet/60 font-inter transition-colors"
                />
              </div>

              {/* Era filter */}
              <FilterGroup
                label="Era"
                items={ERAS.map(e => ({ id: e.id, label: e.label, color: e.color }))}
                active={activeEra}
                onSelect={v => setActiveEra(v === activeEra ? '' : v)}
              />

              {/* Emotion filter */}
              <FilterGroup
                label="Emotion"
                items={EMOTIONS.map(e => ({ id: e.id, label: e.label, color: e.color, icon: e.icon }))}
                active={activeEmotion}
                onSelect={v => setActiveEmotion(v === activeEmotion ? '' : v)}
              />

              {/* Life event filter */}
              <FilterGroup
                label="Life Event"
                items={LIFE_EVENTS.map(e => ({ id: e.id, label: e.label, icon: e.icon }))}
                active={activeLifeEvent}
                onSelect={v => setActiveLifeEvent(v === activeLifeEvent ? '' : v)}
              />

              {/* Location filter */}
              <FilterGroup
                label="Region"
                items={LOCATIONS.map(l => ({ id: l, label: l }))}
                active={activeLocation}
                onSelect={v => setActiveLocation(v === activeLocation ? '' : v)}
              />

              {hasFilters && (
                <button
                  onClick={clearFilters}
                  className="w-full py-2 text-sm text-memory-muted hover:text-memory-white border border-cosmos-blue/30 hover:border-nebula-violet/40 rounded-lg transition-all font-inter"
                >
                  Clear all filters
                </button>
              )}
            </div>
          </aside>

          {/* Main content */}
          <main className="flex-1 min-w-0">
            {/* Sort bar */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2 flex-wrap">
                {hasFilters && (
                  <div className="flex flex-wrap gap-2">
                    {activeEra && <ActiveTag label={ERAS.find(e => e.id === activeEra)?.label} onRemove={() => setActiveEra('')} />}
                    {activeEmotion && <ActiveTag label={EMOTIONS.find(e => e.id === activeEmotion)?.label} onRemove={() => setActiveEmotion('')} />}
                    {activeLifeEvent && <ActiveTag label={LIFE_EVENTS.find(e => e.id === activeLifeEvent)?.label} onRemove={() => setActiveLifeEvent('')} />}
                    {activeLocation && <ActiveTag label={activeLocation} onRemove={() => setActiveLocation('')} />}
                  </div>
                )}
              </div>
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
                className="bg-cosmos-dark border border-cosmos-blue/40 text-memory-muted text-sm rounded-lg px-3 py-2 focus:outline-none focus:border-nebula-violet/60 font-inter"
              >
                <option value="views">Most Viewed</option>
                <option value="year_asc">Oldest First</option>
                <option value="year_desc">Newest First</option>
              </select>
            </div>

            {/* Grid */}
            {filtered.length === 0 ? (
              <div className="text-center py-24">
                <div className="text-4xl mb-4">◇</div>
                <p className="text-memory-muted font-inter">No memories found matching your filters.</p>
                <button onClick={clearFilters} className="mt-4 text-stardust-cyan hover:text-memory-white transition-colors font-inter text-sm">
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                {filtered.map(memory => (
                  <MemoryCard
                    key={memory.id}
                    memory={memory}
                    onClick={() => navigate(`/memory/${memory.id}`)}
                  />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

function FilterGroup({ label, items, active, onSelect }) {
  return (
    <div>
      <label className="text-xs tracking-widest uppercase text-memory-muted font-inter mb-2 block">
        {label}
      </label>
      <div className="flex flex-wrap gap-1.5">
        {items.map(item => (
          <button
            key={item.id}
            onClick={() => onSelect(item.id)}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs border transition-all duration-200 font-inter ${
              active === item.id
                ? 'bg-nebula-violet/20 border-nebula-violet text-memory-white'
                : 'bg-cosmos-dark border-cosmos-blue/30 text-memory-muted hover:border-nebula-violet/40 hover:text-memory-white'
            }`}
          >
            {item.icon && <span>{item.icon}</span>}
            {item.color && active !== item.id && (
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: item.color }} />
            )}
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function ActiveTag({ label, onRemove }) {
  return (
    <span className="flex items-center gap-1.5 px-3 py-1 bg-nebula-violet/20 border border-nebula-violet/40 rounded-full text-xs text-memory-white font-inter">
      {label}
      <button onClick={onRemove} className="hover:text-nebula-pink transition-colors">×</button>
    </span>
  );
}

function MemoryCard({ memory, onClick }) {
  const emotionColor = getEmotionColor(memory.emotion);
  const emotion = EMOTIONS.find(e => e.id === memory.emotion);
  const era = ERAS.find(e => e.id === memory.era);

  return (
    <div
      onClick={onClick}
      className="group bg-cosmos-dark border border-cosmos-blue/40 rounded-xl p-5 cursor-pointer transition-all duration-300 hover:border-nebula-violet/60 hover:shadow-[0_0_30px_rgba(5,150,105,0.12)] hover:-translate-y-0.5 relative overflow-hidden"
    >
      {/* Emotion dot */}
      <div
        className="absolute top-4 right-4 w-2 h-2 rounded-full"
        style={{ backgroundColor: emotionColor, boxShadow: `0 0 6px ${emotionColor}` }}
      />

      <div className="text-xs text-memory-muted/60 mb-3 font-inter">
        {memory.year} · {memory.country}
      </div>

      <h3 className="font-cinzel text-base text-memory-white mb-2 group-hover:text-stardust-cyan transition-colors leading-snug pr-4">
        {memory.title}
      </h3>

      <p className="text-memory-muted text-xs leading-relaxed mb-4 line-clamp-2 font-inter">
        {memory.excerpt}
      </p>

      <div className="flex items-center justify-between">
        <span className="text-xs text-memory-muted/60 font-inter">{memory.author}</span>
        <div className="flex items-center gap-1.5">
          {era && (
            <span
              className="text-xs px-2 py-0.5 rounded-full font-inter"
              style={{ color: era.color, backgroundColor: `${era.color}15`, border: `1px solid ${era.color}30` }}
            >
              {era.label}
            </span>
          )}
        </div>
      </div>

      <div className="mt-3 pt-3 border-t border-cosmos-blue/20 flex items-center justify-between">
        <span className="text-xs text-memory-muted/50 font-inter">{memory.views.toLocaleString()} views</span>
        {emotion && (
          <span className="text-xs font-inter" style={{ color: emotionColor }}>
            {emotion.icon} {emotion.label}
          </span>
        )}
      </div>
    </div>
  );
}
