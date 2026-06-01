import { EMOTIONS, ERAS, LIFE_EVENTS, REGIONS } from '../../data/memories';

const FilterPill = ({ label, active, onClick, color }) => (
  <button
    onClick={onClick}
    className={`text-xs px-3 py-1.5 rounded-full border transition-all duration-200 whitespace-nowrap ${
      active
        ? 'border-cyan-500/50 bg-cyan-500/10 text-cyan-300'
        : 'border-slate-700 bg-slate-800/50 text-slate-400 hover:border-slate-600 hover:text-slate-300'
    }`}
    style={active && color ? { borderColor: `${color}60`, backgroundColor: `${color}15`, color } : {}}
  >
    {label}
  </button>
);

const FilterSection = ({ title, children }) => (
  <div className="mb-6">
    <p className="text-xs text-slate-600 uppercase tracking-widest mb-3">{title}</p>
    <div className="flex flex-wrap gap-2">
      {children}
    </div>
  </div>
);

const ExploreFilters = ({ filters, onFilterChange, onClear, resultCount }) => {
  const toggle = (key, value) => {
    onFilterChange(key, filters[key] === value ? null : value);
  };

  const hasFilters = Object.values(filters).some(v => v !== null);

  return (
    <aside className="w-full lg:w-72 flex-shrink-0">
      <div className="sticky top-24 p-5 rounded-xl border border-slate-700/40 bg-[#080d1a]">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-cinzel text-sm font-semibold text-slate-200 uppercase tracking-wider">
            Filter Memories
          </h2>
          {hasFilters && (
            <button
              onClick={onClear}
              className="text-xs text-slate-500 hover:text-cyan-400 transition-colors"
            >
              Clear all
            </button>
          )}
        </div>

        <div className="text-xs text-slate-600 mb-5">
          <span className="text-cyan-400 font-semibold">{resultCount.toLocaleString()}</span> memories found
        </div>

        <FilterSection title="Era">
          {ERAS.map(era => (
            <FilterPill
              key={era.id}
              label={era.label}
              active={filters.era === era.id}
              color={era.color}
              onClick={() => toggle('era', era.id)}
            />
          ))}
        </FilterSection>

        <FilterSection title="Emotion">
          {EMOTIONS.map(emotion => (
            <FilterPill
              key={emotion.id}
              label={`${emotion.icon} ${emotion.label}`}
              active={filters.emotion === emotion.id}
              color={emotion.color}
              onClick={() => toggle('emotion', emotion.id)}
            />
          ))}
        </FilterSection>

        <FilterSection title="Life Event">
          {LIFE_EVENTS.map(event => (
            <FilterPill
              key={event.id}
              label={event.label}
              active={filters.lifeEvent === event.id}
              onClick={() => toggle('lifeEvent', event.id)}
            />
          ))}
        </FilterSection>

        <FilterSection title="Region">
          {REGIONS.map(region => (
            <FilterPill
              key={region.id}
              label={region.label}
              active={filters.region === region.id}
              onClick={() => toggle('region', region.id)}
            />
          ))}
        </FilterSection>
      </div>
    </aside>
  );
};

export default ExploreFilters;
