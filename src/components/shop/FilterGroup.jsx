function FilterGroup({ onToggle, options, selectedValues, title }) {
  return (
    <div className="space-y-4 border-b border-border pb-6">
      <h3 className="text-sm uppercase tracking-micro text-truffle">{title}</h3>
      <div className="space-y-3">
        {options.map((option) => {
          const checked = selectedValues.includes(option.value)

          return (
            <label
              key={option.value}
              className="flex items-center justify-between gap-4 text-sm text-muted"
            >
              <span>{option.label}</span>
              <input
                checked={checked}
                className="h-4 w-4 rounded border-border text-accent focus:ring-accent"
                onChange={() => onToggle(option.value)}
                type="checkbox"
              />
            </label>
          )
        })}
      </div>
    </div>
  )
}

export default FilterGroup
