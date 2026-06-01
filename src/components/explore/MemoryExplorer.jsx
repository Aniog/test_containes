import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { MEMORIES, ERAS, EMOTIONS, LOCATIONS, LIFE_EVENTS } from '../../data/memories';

const EMOTION_COLORS = {
  joy: '#ffd166', love: '#ff6b9d', wonder: '#7c83fd',
  grief: '#8892b0', nostalgia: '#ff8c42', peace: '#4ecdc4',
  fear: '#c45e1a', hope: '#a5aaff',
};

export default function MemoryExplorer() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState('');
  const [activeEra, setActiveEra] = useState(searchParams.get('era') || '');
  const [activeEmotion, setActiveEmotion] = useState(searchParams.get('emotion') || '');
  const [activeLocation, setActiveLocation] = useState('');
  const [activeLifeEvent, setActiveLifeEvent] = useState(searchParams.get('lifeEvent') || '');
  const [sortBy, setSortBy] = useState('views');
  const [selectedMemory, setSelectedMemory] = useState(null);

  const filtered = useMemo(() => {
    let result = [...MEMORIES];
    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        (m) =>
          m.title.toLowerCase().includes(q) ||
          m.excerpt.toLowerCase().includes(q) ||
          m.contributor.toLowerCase().includes(q) ||
          m.tags.some((t) => t.toLowerCase().includes(q))
      );
    }
    if (activeEra) result = result.filter((m) => m.era === activeEra);
    if (activeEmotion) result = result.filter((m) => m.emotion === activeEmotion);
    if (activeLocation) result = result.filter((m) => m.location === activeLocation);
    if (activeLifeEvent) result = result.filter((m) => m.lifeEvent === activeLifeEvent);

    result.sort((a, b) => {
      if (sortBy === 'views') return b.views - a.views;
      if (sortBy === 'connections') return b.connections - a.connections;
      if (sortBy === 'recent') return b.eraLabel.localeCompare(a.eraLabel);
      return 0;
    });
    return result;
  }, [search, activeEra, activeEmotion, activeLocation, activeLifeEvent, sortBy]);

  const clearFilters = () => {
    setActiveEra('');
    setActiveEmotion('');
    setActiveLocation('');
    setActiveLifeEvent('');
    setSearch('');
  };

  const hasFilters = activeEra || activeEmotion || activeLocation || activeLifeEvent || search;

  return (
    <div className="min-h-screen pt-20 pb-16 px-4 md:px-6">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-10">
        <div className="text-center mb-8">
          <p className="text-aurora font-mono text-sm tracking-widest uppercase mb-2">
            The Archive
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-starlight mb-3">
            Explore Memories
          </h1>
          <p className="text-mist-light text-base max-w-xl mx-auto">
            Search across 47 million preserved fragments of human experience.
          </p>
        </div>

        {/* Search bar */}
        <div className="relative max-w-2xl mx-auto mb-8">
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 text-mist"
            width="18" height="18" viewBox="0 0 18 18" fill="none"
          >
            <circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="1.5" />
            <path d="M12.5 12.5l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <input
            type="text"
            placeholder="Search memories, contributors, places, tags..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-4 rounded-2xl border border-white/10 bg-nebula/60 text-starlight placeholder-mist-dark text-sm focus:outline-none focus:border-aurora/50 focus:bg-nebula transition-all"
          />
        </div>

        {/* Filter row */}
        <div className="flex flex-wrap gap-3 justify-center mb-4">
          {/* Era filter */}
          <FilterDropdown
            label="Era"
            options={ERAS.map((e) => ({ id: e.id, label: e.label, color: e.color }))}
            value={activeEra}
            onChange={setActiveEra}
          />
          {/* Emotion filter */}
          <FilterDropdown
            label="Emotion"
            options={EMOTIONS.map((e) => ({ id: e.id, label: e.label, color: e.color }))}
            value={activeEmotion}
            onChange={setActiveEmotion}
          />
          {/* Location filter */}
          <FilterDropdown
            label="Location"
            options={LOCATIONS.map((l) => ({ id: l.id, label: l.label }))}
            value={activeLocation}
            onChange={setActiveLocation}
          />
          {/* Life event filter */}
          <FilterDropdown
            label="Life Event"
            options={LIFE_EVENTS.map((l) => ({ id: l.id, label: l.label }))}
            value={activeLifeEvent}
            onChange={setActiveLifeEvent}
          />

          {/* Sort */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 rounded-full border border-white/10 bg-nebula/60 text-mist-light text-sm focus:outline-none focus:border-aurora/50 cursor-pointer"
          >
            <option value="views">Most Viewed</option>
            <option value="connections">Most Connected</option>
            <option value="recent">Most Recent</option>
          </select>

          {hasFilters && (
            <button
              onClick={clearFilters}
              className="px-4 py-2 rounded-full border border-rose/30 text-rose text-sm hover:bg-rose/10 transition-all"
            >
              Clear filters
            </button>
          )}
        </div>

        {/* Active filter pills */}
        {hasFilters && (
          <div className="flex flex-wrap gap-2 justify-center mb-4">
            {activeEra && (
              <ActivePill
                label={ERAS.find((e) => e.id === activeEra)?.label}
                color={ERAS.find((e) => e.id === activeEra)?.color}
                onRemove={() => setActiveEra('')}
              />
            )}
            {activeEmotion && (
              <ActivePill
                label={EMOTIONS.find((e) => e.id === activeEmotion)?.label}
                color={EMOTIONS.find((e) => e.id === activeEmotion)?.color}
                onRemove={() => setActiveEmotion('')}
              />
            )}
            {activeLocation && (
              <ActivePill
                label={LOCATIONS.find((l) => l.id === activeLocation)?.label}
                onRemove={() => setActiveLocation('')}
              />
            )}
            {activeLifeEvent && (
              <ActivePill
                label={LIFE_EVENTS.find((l) => l.id === activeLifeEvent)?.label}
                onRemove={() => setActiveLifeEvent('')}
              />
            )}
          </div>
        )}

        {/* Result count */}
        <p className="text-center text-mist text-sm">
          Showing <span className="text-aurora-glow font-semibold">{filtered.length}</span> memories
          {hasFilters && ' matching your filters'}
        </p>
      </div>

      {/* Memory grid */}
      <div className="max-w-7xl mx-auto">
        {filtered.length === 0 ? (
          <div className="text-center py-24">
            <div className="text-6xl mb-4">◇</div>
            <p className="text-mist-light text-lg mb-2">No memories found</p>
            <p className="text-mist text-sm">Try adjusting your filters or search terms</p>
          </div>
        ) : (
          <div className="memory-grid">
            {filtered.map((memory, i) => (
              <MemoryCard
                key={memory.id}
                memory={memory}
                onClick={() => setSelectedMemory(memory)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Memory detail modal */}
      {selectedMemory && (
        <MemoryModal memory={selectedMemory} onClose={() => setSelectedMemory(null)} />
      )}
    </div>
  );
}

function FilterDropdown({ label, options, value, onChange }) {
  const [open, setOpen] = useState(false);
  const selected = options.find((o) => o.id === value);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm transition-all ${
          value
            ? 'border-aurora/50 bg-aurora/15 text-aurora-glow'
            : 'border-white/10 bg-nebula/60 text-mist-light hover:border-white/20'
        }`}
      >
        {selected ? (
          <>
            {selected.color && (
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: selected.color }}
              />
            )}
            {selected.label}
          </>
        ) : (
          label
        )}
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className={`transition-transform ${open ? 'rotate-180' : ''}`}>
          <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
          <div
            className="absolute top-full mt-2 left-0 z-20 min-w-[180px] rounded-2xl border border-white/10 overflow-hidden shadow-2xl"
            style={{ background: 'rgba(7,11,24,0.98)', backdropFilter: 'blur(20px)' }}
          >
            <button
              onClick={() => { onChange(''); setOpen(false); }}
              className="w-full text-left px-4 py-3 text-sm text-mist hover:bg-white/5 transition-colors border-b border-white/5"
            >
              All {label}s
            </button>
            {options.map((opt) => (
              <button
                key={opt.id}
                onClick={() => { onChange(opt.id); setOpen(false); }}
                className={`w-full text-left px-4 py-2.5 text-sm flex items-center gap-2 transition-colors ${
                  value === opt.id ? 'text-aurora-glow bg-aurora/10' : 'text-mist-light hover:bg-white/5'
                }`}
              >
                {opt.color && (
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: opt.color }} />
                )}
                {opt.label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function ActivePill({ label, color, onRemove }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border"
      style={{
        borderColor: color ? `${color}44` : 'rgba(124,131,253,0.3)',
        background: color ? `${color}15` : 'rgba(124,131,253,0.1)',
        color: color || '#a5aaff',
      }}
    >
      {label}
      <button onClick={onRemove} className="hover:opacity-70 transition-opacity ml-0.5">
        ×
      </button>
    </span>
  );
}

function MemoryCard({ memory, onClick }) {
  const color = EMOTION_COLORS[memory.emotion] || '#7c83fd';

  return (
    <button
      onClick={onClick}
      className="memory-card-hover text-left w-full rounded-2xl border border-white/8 overflow-hidden group focus:outline-none focus:ring-2 focus:ring-aurora/50"
      style={{ background: 'linear-gradient(135deg, rgba(13,21,48,0.9) 0%, rgba(7,11,24,0.95) 100%)' }}
    >
      <div className="h-0.5 w-full" style={{ background: `linear-gradient(90deg, ${color}88, ${color}22)` }} />
      <div className="p-5">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: color, boxShadow: `0 0 8px ${color}88` }}
            />
            <span className="text-xs font-mono text-mist capitalize">{memory.emotion}</span>
          </div>
          <span className="text-xs font-mono text-mist-dark">{memory.eraLabel}</span>
        </div>

        <h3 className="font-display text-base font-semibold text-starlight mb-2 group-hover:text-aurora-glow transition-colors line-clamp-2">
          {memory.title}
        </h3>

        <p className="text-mist text-sm leading-relaxed mb-4 line-clamp-3">
          {memory.excerpt}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {memory.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-full text-xs border border-white/8 text-mist-dark"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-white/5">
          <div className="flex items-center gap-2">
            <div
              className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
              style={{ background: `${color}22`, color }}
            >
              {memory.contributor.charAt(0)}
            </div>
            <span className="text-xs text-mist truncate max-w-[100px]">{memory.contributor}</span>
          </div>
          <div className="flex items-center gap-3 text-xs text-mist-dark">
            <span>{(memory.views / 1000).toFixed(0)}K views</span>
            {memory.verified && (
              <span className="text-jade">✓</span>
            )}
          </div>
        </div>
      </div>
    </button>
  );
}

function MemoryModal({ memory, onClose }) {
  const color = EMOTION_COLORS[memory.emotion] || '#7c83fd';
  const emotion = EMOTIONS.find((e) => e.id === memory.emotion);
  const era = ERAS.find((e) => e.id === memory.era);
  const lifeEvent = LIFE_EVENTS.find((l) => l.id === memory.lifeEvent);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/10 shadow-2xl"
        style={{ background: 'linear-gradient(135deg, rgba(13,21,48,0.98) 0%, rgba(7,11,24,0.99) 100%)' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Color bar */}
        <div className="h-1 w-full rounded-t-3xl" style={{ background: `linear-gradient(90deg, ${color}, ${color}44)` }} />

        <div className="p-8">
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-mist hover:text-starlight hover:border-white/20 transition-all"
          >
            ×
          </button>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span
              className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono border"
              style={{ borderColor: `${color}44`, background: `${color}15`, color }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color }} />
              {emotion?.label || memory.emotion}
            </span>
            {era && (
              <span className="px-3 py-1 rounded-full text-xs font-mono border border-white/10 text-mist-light">
                {era.label}
              </span>
            )}
            {lifeEvent && (
              <span className="px-3 py-1 rounded-full text-xs border border-white/10 text-mist-light">
                {lifeEvent.icon} {lifeEvent.label}
              </span>
            )}
            {memory.verified && (
              <span className="px-3 py-1 rounded-full text-xs border border-jade/30 text-jade bg-jade/10">
                ✓ Verified
              </span>
            )}
          </div>

          {/* Title */}
          <h2 className="font-display text-2xl md:text-3xl font-bold text-starlight mb-2">
            {memory.title}
          </h2>

          {/* Contributor & location */}
          <div className="flex items-center gap-3 mb-6">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
              style={{ background: `${color}22`, color }}
            >
              {memory.contributor.charAt(0)}
            </div>
            <div>
              <p className="text-starlight text-sm font-medium">{memory.contributor}</p>
              <p className="text-mist text-xs">{memory.locationLabel} · {memory.eraLabel}</p>
            </div>
          </div>

          {/* Full text */}
          <div className="section-divider mb-6" />
          <p className="text-mist-light text-base leading-relaxed mb-6 italic">
            "{memory.fullText}"
          </p>
          <div className="section-divider mb-6" />

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {memory.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs border border-white/10 text-mist-light"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { label: 'Views', value: memory.views.toLocaleString() },
              { label: 'Connections', value: memory.connections.toLocaleString() },
              { label: 'Fragments', value: memory.fragmentCount },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center p-3 rounded-xl border border-white/5"
                style={{ background: 'rgba(255,255,255,0.02)' }}
              >
                <div className="text-lg font-bold text-aurora-glow font-display">{stat.value}</div>
                <div className="text-xs text-mist">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
