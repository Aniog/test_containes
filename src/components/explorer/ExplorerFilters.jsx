import { X } from 'lucide-react';
import { ERAS, EMOTIONS, LIFE_EVENTS, LOCATIONS } from '@/data/memories';

const filterGroups = [
  { key: 'era', label: 'Era', options: ERAS, color: 'text-stardust-300', activeBg: 'bg-stardust-500/20 border-stardust-500/40 text-stardust-300' },
  { key: 'emotion', label: 'Emotion', options: EMOTIONS, color: 'text-aurora-300', activeBg: 'bg-aurora-500/20 border-aurora-500/40 text-aurora-300' },
  { key: 'lifeEvent', label: 'Life Event', options: LIFE_EVENTS, color: 'text-memory-pink', activeBg: 'bg-memory-pink/20 border-memory-pink/40 text-memory-pink' },
  { key: 'location', label: 'Location', options: LOCATIONS, color: 'text-memory-teal', activeBg: 'bg-memory-teal/20 border-memory-teal/40 text-memory-teal' },
];

export default function ExplorerFilters({ filters, onChange, onClear }) {
  const activeCount = Object.values(filters).filter(Boolean).length;

  const toggle = (key, value) => {
    onChange(key, filters[key] === value ? null : value);
  };

  return (
    <aside className="w-full lg:w-72 shrink-0">
      <div className="bg-cosmos-800/60 backdrop-blur-sm rounded-2xl border border-nebula-500/20 p-5 sticky top-24">
        <div className="flex items-center justify-between mb-5">
          <h2 className="font-cinzel text-base font-semibold text-text-primary">
            Filter Memories
          </h2>
          {activeCount > 0 && (
            <button
              onClick={onClear}
              className="flex items-center gap-1 font-mono text-xs text-text-muted hover:text-text-secondary transition-colors"
            >
              <X className="w-3 h-3" />
              Clear ({activeCount})
            </button>
          )}
        </div>

        <div className="space-y-6">
          {filterGroups.map(group => (
            <div key={group.key}>
              <p className={`font-mono text-xs uppercase tracking-widest mb-2.5 ${group.color}`}>
                {group.label}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {group.options.map(opt => {
                  const active = filters[group.key] === opt;
                  return (
                    <button
                      key={opt}
                      onClick={() => toggle(group.key, opt)}
                      className={`font-mono text-xs px-2.5 py-1 rounded-full border transition-all duration-200 ${
                        active
                          ? group.activeBg
                          : 'border-cosmos-600 text-text-muted hover:border-cosmos-500 hover:text-text-secondary'
                      }`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
