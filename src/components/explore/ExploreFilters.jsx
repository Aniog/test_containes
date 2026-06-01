import { ERAS, EMOTIONS, LIFE_EVENTS, REGIONS } from '../../data/memories';

export default function ExploreFilters({ filters, onChange, resultCount }) {
  const handleChange = (key, value) => {
    onChange({ ...filters, [key]: filters[key] === value ? '' : value });
  };

  const clearAll = () => onChange({ era: '', emotion: '', lifeEvent: '', region: '', search: '' });
  const hasFilters = Object.values(filters).some(v => v);

  return (
    <aside className="w-full lg:w-72 shrink-0">
      <div className="bg-space-navy border border-white/10 rounded-2xl p-5 sticky top-24">
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <h2 className="font-space text-base font-semibold text-star-white">Filter Memories</h2>
          {hasFilters && (
            <button
              onClick={clearAll}
              className="text-xs text-star-dim hover:text-cosmic-blue transition-colors font-mono"
            >
              Clear all
            </button>
          )}
        </div>

        {/* Search */}
        <div className="mb-5">
          <input
            type="text"
            placeholder="Search memories..."
            value={filters.search}
            onChange={e => onChange({ ...filters, search: e.target.value })}
            className="w-full bg-space-midnight border border-white/10 rounded-lg px-3 py-2.5 text-sm text-star-white placeholder-star-dim/50 focus:outline-none focus:border-cosmic-blue/50 transition-colors font-body"
          />
        </div>

        {/* Result count */}
        <div className="text-xs font-mono text-star-dim mb-5 pb-5 border-b border-white/10">
          {resultCount.toLocaleString()} memories found
        </div>

        {/* Era filter */}
        <FilterGroup title="Era">
          {ERAS.map(era => (
            <FilterChip
              key={era.id}
              label={era.label}
              sublabel={era.range}
              color={era.color}
              active={filters.era === era.id}
              onClick={() => handleChange('era', era.id)}
            />
          ))}
        </FilterGroup>

        {/* Emotion filter */}
        <FilterGroup title="Emotion">
          {EMOTIONS.map(emotion => (
            <FilterChip
              key={emotion.id}
              label={emotion.label}
              icon={emotion.icon}
              color={emotion.color}
              active={filters.emotion === emotion.id}
              onClick={() => handleChange('emotion', emotion.id)}
            />
          ))}
        </FilterGroup>

        {/* Life event filter */}
        <FilterGroup title="Life Event">
          {LIFE_EVENTS.map(event => (
            <FilterChip
              key={event.id}
              label={event.label}
              icon={event.icon}
              color="#ffb347"
              active={filters.lifeEvent === event.id}
              onClick={() => handleChange('lifeEvent', event.id)}
            />
          ))}
        </FilterGroup>

        {/* Region filter */}
        <FilterGroup title="Region" last>
          {REGIONS.map(region => (
            <FilterChip
              key={region}
              label={region}
              color="#2dd4bf"
              active={filters.region === region}
              onClick={() => handleChange('region', region)}
            />
          ))}
        </FilterGroup>
      </div>
    </aside>
  );
}

function FilterGroup({ title, children, last }) {
  return (
    <div className={`mb-5 ${!last ? 'pb-5 border-b border-white/10' : ''}`}>
      <h3 className="text-xs font-mono text-star-dim uppercase tracking-widest mb-3">{title}</h3>
      <div className="flex flex-wrap gap-1.5">
        {children}
      </div>
    </div>
  );
}

function FilterChip({ label, sublabel, icon, color, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-1 text-xs px-2.5 py-1 rounded-full border transition-all duration-200"
      style={{
        color: active ? '#050810' : color,
        borderColor: active ? color : `${color}44`,
        backgroundColor: active ? color : `${color}15`,
        fontWeight: active ? 600 : 400,
      }}
    >
      {icon && <span>{icon}</span>}
      {label}
      {sublabel && <span className="opacity-60 ml-0.5 text-[10px]">{sublabel}</span>}
    </button>
  );
}
