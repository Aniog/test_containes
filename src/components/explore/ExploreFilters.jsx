import { ERAS, EMOTIONS, LIFE_EVENTS, REGIONS } from '../../data/memories';

function FilterGroup({ title, items, activeId, onSelect, colorKey, iconKey }) {
  return (
    <div className="mb-6">
      <p className="text-xs font-mono tracking-widest text-ghost uppercase mb-3">{title}</p>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onSelect(null)}
          className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 ${
            !activeId
              ? 'bg-aurora/20 text-aurora-light border-aurora/50'
              : 'bg-stardust/20 text-mist border-stardust/40 hover:border-stardust'
          }`}
        >
          All
        </button>
        {items.map((item) => {
          const isActive = activeId === item.id;
          const color = item[colorKey] || '#94a3b8';
          return (
            <button
              key={item.id}
              onClick={() => onSelect(isActive ? null : item.id)}
              className="px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 flex items-center gap-1.5"
              style={
                isActive
                  ? {
                      backgroundColor: `${color}25`,
                      color: color,
                      borderColor: `${color}70`,
                    }
                  : {
                      backgroundColor: 'rgba(26,45,82,0.2)',
                      color: '#94a3b8',
                      borderColor: 'rgba(26,45,82,0.5)',
                    }
              }
            >
              {iconKey && <span>{item[iconKey]}</span>}
              {item.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function ExploreFilters({ filters, onFilterChange }) {
  return (
    <aside className="bg-nebula border border-stardust/40 rounded-2xl p-6 sticky top-24">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-cinzel text-lg font-light text-starlight tracking-wide">Filters</h3>
        <button
          onClick={() => onFilterChange({ era: null, emotion: null, event: null, region: null })}
          className="text-xs text-ghost hover:text-mist transition-colors font-mono"
        >
          Clear all
        </button>
      </div>

      <FilterGroup
        title="Era"
        items={ERAS}
        activeId={filters.era}
        onSelect={(v) => onFilterChange({ ...filters, era: v })}
        colorKey="color"
      />

      <FilterGroup
        title="Emotion"
        items={EMOTIONS}
        activeId={filters.emotion}
        onSelect={(v) => onFilterChange({ ...filters, emotion: v })}
        colorKey="color"
        iconKey="icon"
      />

      <FilterGroup
        title="Life Event"
        items={LIFE_EVENTS}
        activeId={filters.event}
        onSelect={(v) => onFilterChange({ ...filters, event: v })}
        colorKey="color"
        iconKey="icon"
      />

      <FilterGroup
        title="Region"
        items={REGIONS}
        activeId={filters.region}
        onSelect={(v) => onFilterChange({ ...filters, region: v })}
        colorKey="color"
      />
    </aside>
  );
}
