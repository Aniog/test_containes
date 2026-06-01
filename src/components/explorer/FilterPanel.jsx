import { ERAS, EMOTIONS, LIFE_EVENTS, REGIONS } from '@/data/memories';

const EMOTION_COLORS = {
  joy: '#f5c842',
  grief: '#8b5cf6',
  wonder: '#4f8ef7',
  love: '#e879a0',
  fear: '#ef4444',
  hope: '#2dd4bf',
  nostalgia: '#fb923c',
  peace: '#86efac',
};

function FilterGroup({ title, items, selected, onToggle, colorMap }) {
  return (
    <div className="mb-6">
      <h4 className="font-sans text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">
        {title}
      </h4>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => {
          const isActive = selected.includes(item.id);
          const color = colorMap?.[item.id] || '#4f8ef7';
          return (
            <button
              key={item.id}
              onClick={() => onToggle(item.id)}
              className="font-sans text-xs px-3 py-1.5 rounded-full border transition-all duration-200"
              style={
                isActive
                  ? {
                      backgroundColor: `${color}20`,
                      borderColor: `${color}60`,
                      color: color,
                    }
                  : {
                      backgroundColor: 'transparent',
                      borderColor: 'rgba(100,116,139,0.3)',
                      color: '#94a3b8',
                    }
              }
            >
              {item.icon ? `${item.icon} ` : ''}{item.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function FilterPanel({ filters, onChange }) {
  const eraColorMap = Object.fromEntries(ERAS.map((e) => [e.id, e.color]));
  const emotionColorMap = EMOTION_COLORS;

  const toggle = (key, value) => {
    const current = filters[key] || [];
    const next = current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value];
    onChange({ ...filters, [key]: next });
  };

  const clearAll = () => {
    onChange({ eras: [], emotions: [], lifeEvents: [], regions: [] });
  };

  const hasFilters =
    (filters.eras?.length || 0) +
    (filters.emotions?.length || 0) +
    (filters.lifeEvents?.length || 0) +
    (filters.regions?.length || 0) > 0;

  return (
    <aside className="bg-space-navy border border-slate-800 rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-serif text-base font-semibold text-white">Filter Memories</h3>
        {hasFilters && (
          <button
            onClick={clearAll}
            className="font-sans text-xs text-slate-500 hover:text-nebula-blue transition-colors"
          >
            Clear all
          </button>
        )}
      </div>

      <FilterGroup
        title="Era"
        items={ERAS}
        selected={filters.eras || []}
        onToggle={(v) => toggle('eras', v)}
        colorMap={eraColorMap}
      />

      <FilterGroup
        title="Emotion"
        items={EMOTIONS}
        selected={filters.emotions || []}
        onToggle={(v) => toggle('emotions', v)}
        colorMap={emotionColorMap}
      />

      <FilterGroup
        title="Life Event"
        items={LIFE_EVENTS}
        selected={filters.lifeEvents || []}
        onToggle={(v) => toggle('lifeEvents', v)}
      />

      <FilterGroup
        title="Region"
        items={REGIONS}
        selected={filters.regions || []}
        onToggle={(v) => toggle('regions', v)}
      />
    </aside>
  );
}
