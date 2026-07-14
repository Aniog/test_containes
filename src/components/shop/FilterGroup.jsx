export default function FilterGroup({ title, options, selected, onSelect }) {
  return (
    <div className="border-b border-velmora-sand pb-6">
      <h3 className="text-xs font-bold uppercase tracking-label text-velmora-ink">{title}</h3>
      <div className="mt-4 flex flex-wrap gap-2 lg:grid">
        {options.map((option) => {
          const isActive = selected === option.value
          return (
            <button
              key={option.value}
              type="button"
              onClick={() => onSelect(option.value)}
              className={`rounded-full border px-4 py-2 text-sm transition ${isActive ? 'border-velmora-ink bg-velmora-ink text-velmora-pearl' : 'border-velmora-sand bg-velmora-pearl text-velmora-cocoa hover:border-velmora-goldDark hover:text-velmora-ink'}`}
            >
              {option.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}
