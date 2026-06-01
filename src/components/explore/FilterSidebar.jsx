import { X, SlidersHorizontal } from 'lucide-react';
import { ERAS, EMOTIONS, LIFE_EVENTS, REGIONS } from '../../data/memories';

export default function FilterSidebar({ filters, onChange, onClear, isOpen, onClose }) {
  const hasFilters = filters.era || filters.emotion || filters.lifeEvent || filters.region || filters.search;

  const toggle = (key, value) => {
    onChange({ ...filters, [key]: filters[key] === value ? '' : value });
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-30 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`
          fixed lg:sticky top-0 left-0 h-screen lg:h-auto z-40 lg:z-auto
          w-72 lg:w-64 xl:w-72
          bg-space-navy lg:bg-transparent border-r border-slate-800 lg:border-0
          overflow-y-auto
          transition-transform duration-300
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          flex-shrink-0
        `}
      >
        <div className="p-5 lg:p-0 lg:pt-0">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2 text-white font-cinzel font-semibold">
              <SlidersHorizontal className="w-4 h-4 text-nebula-blue" />
              Filters
            </div>
            <div className="flex items-center gap-2">
              {hasFilters && (
                <button
                  onClick={onClear}
                  className="text-xs text-nebula-blue hover:text-blue-300 font-inter transition-colors"
                >
                  Clear all
                </button>
              )}
              <button onClick={onClose} className="lg:hidden text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Era */}
          <FilterSection title="Era">
            {ERAS.map((era) => (
              <FilterChip
                key={era.id}
                label={era.label}
                active={filters.era === era.id}
                color={era.color}
                onClick={() => toggle('era', era.id)}
              />
            ))}
          </FilterSection>

          {/* Emotion */}
          <FilterSection title="Emotion">
            <div className="grid grid-cols-2 gap-2">
              {EMOTIONS.map((em) => (
                <button
                  key={em.id}
                  onClick={() => toggle('emotion', em.id)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-inter transition-all duration-200 ${
                    filters.emotion === em.id
                      ? 'bg-nebula-blue/20 border border-nebula-blue/50 text-white'
                      : 'bg-slate-800/50 border border-slate-700 text-slate-400 hover:border-slate-500 hover:text-slate-200'
                  }`}
                >
                  <span>{em.icon}</span>
                  <span>{em.label}</span>
                </button>
              ))}
            </div>
          </FilterSection>

          {/* Life Event */}
          <FilterSection title="Life Event">
            {LIFE_EVENTS.map((ev) => (
              <FilterChip
                key={ev.id}
                label={ev.label}
                active={filters.lifeEvent === ev.id}
                onClick={() => toggle('lifeEvent', ev.id)}
              />
            ))}
          </FilterSection>

          {/* Region */}
          <FilterSection title="Region">
            {REGIONS.map((r) => (
              <FilterChip
                key={r.id}
                label={r.label}
                active={filters.region === r.id}
                onClick={() => toggle('region', r.id)}
              />
            ))}
          </FilterSection>
        </div>
      </aside>
    </>
  );
}

function FilterSection({ title, children }) {
  return (
    <div className="mb-6">
      <h3 className="font-cinzel text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {children}
      </div>
    </div>
  );
}

function FilterChip({ label, active, color, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1.5 rounded-full text-xs font-inter transition-all duration-200 ${
        active
          ? 'text-white border'
          : 'bg-slate-800/50 border border-slate-700 text-slate-400 hover:border-slate-500 hover:text-slate-200'
      }`}
      style={active && color ? {
        backgroundColor: `${color}22`,
        borderColor: `${color}66`,
        color: color,
      } : active ? {
        backgroundColor: 'rgba(79,142,247,0.15)',
        borderColor: 'rgba(79,142,247,0.5)',
        color: '#4f8ef7',
      } : {}}
    >
      {label}
    </button>
  );
}
