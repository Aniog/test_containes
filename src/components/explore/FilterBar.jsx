import { EMOTION_COLORS, ERA_ORDER } from '../../api/memories'

const CONTINENTS = ['Africa', 'Antarctica', 'Asia', 'Europe', 'North America', 'Oceania', 'South America']
const LIFE_EVENTS = ['Birth', 'Childhood', 'First Love', 'Marriage', 'Loss', 'Achievement', 'Travel', 'War', 'Discovery', 'Farewell', 'Reunion', 'Daily Life']
const EMOTIONS = Object.keys(EMOTION_COLORS)

function FilterPill({ label, active, color, onClick }) {
  return (
    <button
      onClick={onClick}
      className="text-xs font-mono px-3 py-1.5 rounded-full border transition-all duration-200"
      style={active ? {
        backgroundColor: color ? color + '25' : 'rgba(124,58,237,0.2)',
        borderColor: color || '#7c3aed',
        color: color || '#a78bfa',
      } : {
        backgroundColor: 'transparent',
        borderColor: '#1a2540',
        color: '#475569',
      }}
    >
      {label}
    </button>
  )
}

export default function FilterBar({ filters, onChange }) {
  const toggle = (key, value) => {
    onChange({ ...filters, [key]: filters[key] === value ? '' : value })
  }

  const clearAll = () => onChange({ era: '', continent: '', emotion: '', life_event: '', search: '' })
  const hasFilters = filters.era || filters.continent || filters.emotion || filters.life_event || filters.search

  return (
    <div className="space-y-5">
      {/* Search */}
      <div>
        <input
          type="text"
          placeholder="Search memories by title..."
          value={filters.search}
          onChange={e => onChange({ ...filters, search: e.target.value })}
          className="w-full bg-nebula border border-stardust text-starlight placeholder-twilight rounded-xl px-4 py-3 text-sm focus:border-aurora focus:ring-1 focus:ring-aurora outline-none transition-all duration-200 font-mono"
        />
      </div>

      {/* Era */}
      <div>
        <div className="text-xs text-twilight font-mono uppercase tracking-wider mb-2">Era</div>
        <div className="flex flex-wrap gap-2">
          {ERA_ORDER.map(era => (
            <FilterPill
              key={era}
              label={era}
              active={filters.era === era}
              onClick={() => toggle('era', era)}
            />
          ))}
        </div>
      </div>

      {/* Emotion */}
      <div>
        <div className="text-xs text-twilight font-mono uppercase tracking-wider mb-2">Emotion</div>
        <div className="flex flex-wrap gap-2">
          {EMOTIONS.map(emotion => (
            <FilterPill
              key={emotion}
              label={emotion}
              active={filters.emotion === emotion}
              color={EMOTION_COLORS[emotion]?.color}
              onClick={() => toggle('emotion', emotion)}
            />
          ))}
        </div>
      </div>

      {/* Life Event */}
      <div>
        <div className="text-xs text-twilight font-mono uppercase tracking-wider mb-2">Life Event</div>
        <div className="flex flex-wrap gap-2">
          {LIFE_EVENTS.map(event => (
            <FilterPill
              key={event}
              label={event}
              active={filters.life_event === event}
              onClick={() => toggle('life_event', event)}
            />
          ))}
        </div>
      </div>

      {/* Continent */}
      <div>
        <div className="text-xs text-twilight font-mono uppercase tracking-wider mb-2">Continent</div>
        <div className="flex flex-wrap gap-2">
          {CONTINENTS.map(c => (
            <FilterPill
              key={c}
              label={c}
              active={filters.continent === c}
              onClick={() => toggle('continent', c)}
            />
          ))}
        </div>
      </div>

      {/* Clear */}
      {hasFilters && (
        <button
          onClick={clearAll}
          className="text-xs text-aurora-light font-mono hover:text-aurora transition-colors duration-200 underline underline-offset-2"
        >
          Clear all filters
        </button>
      )}
    </div>
  )
}
