import { X, SlidersHorizontal } from 'lucide-react'
import { ERAS, EMOTIONS, LIFE_EVENTS, REGIONS } from '../../data/memories'

const filterGroups = [
  {
    id: 'era',
    label: 'Era',
    items: ERAS,
    getColor: (item) => item.color,
  },
  {
    id: 'emotion',
    label: 'Emotion',
    items: EMOTIONS,
    getColor: (item) => item.color,
    getIcon: (item) => item.icon,
  },
  {
    id: 'lifeEvent',
    label: 'Life Event',
    items: LIFE_EVENTS,
    getColor: () => '#67e8f9',
  },
  {
    id: 'region',
    label: 'Region',
    items: REGIONS.map(r => ({ id: r, label: r })),
    getColor: () => '#34d399',
  },
]

export default function FilterBar({ filters, onChange }) {
  const activeCount = Object.values(filters).filter(Boolean).length

  const toggle = (groupId, itemId) => {
    onChange({
      ...filters,
      [groupId]: filters[groupId] === itemId ? null : itemId,
    })
  }

  const clearAll = () => {
    const cleared = {}
    filterGroups.forEach(g => { cleared[g.id] = null })
    onChange(cleared)
  }

  return (
    <div className="glass-card rounded-2xl p-5 md:p-6">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="w-4 h-4 text-nebula-400" />
          <span className="text-white font-semibold text-sm">Filters</span>
          {activeCount > 0 && (
            <span className="w-5 h-5 rounded-full bg-nebula-600 text-white text-xs flex items-center justify-center font-mono">
              {activeCount}
            </span>
          )}
        </div>
        {activeCount > 0 && (
          <button
            onClick={clearAll}
            className="flex items-center gap-1 text-xs text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-3 h-3" />
            Clear all
          </button>
        )}
      </div>

      <div className="space-y-5">
        {filterGroups.map((group) => (
          <div key={group.id}>
            <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-2.5">
              {group.label}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {group.items.map((item) => {
                const isActive = filters[group.id] === item.id
                const color = group.getColor(item)
                const icon = group.getIcon ? group.getIcon(item) : null
                return (
                  <button
                    key={item.id}
                    onClick={() => toggle(group.id, item.id)}
                    className="memory-tag transition-all duration-200 hover:scale-105 cursor-pointer"
                    style={
                      isActive
                        ? {
                            background: `${color}30`,
                            border: `1px solid ${color}70`,
                            color: color,
                          }
                        : {
                            background: 'rgba(30,27,75,0.3)',
                            border: '1px solid rgba(99,102,241,0.15)',
                            color: '#94a3b8',
                          }
                    }
                  >
                    {icon && <span>{icon}</span>}
                    {item.label}
                  </button>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
