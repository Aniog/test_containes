export default function FilterGroup({ title, options, value, onChange }) {
  return (
    <fieldset className="border-b border-velmora-ink/10 pb-6">
      <legend className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-velmora-clay">{title}</legend>
      <div className="space-y-3">
        {options.map((option) => (
          <label key={option} className="flex cursor-pointer items-center justify-between gap-3 text-sm text-velmora-ink/75 transition hover:text-velmora-ink">
            <span>{option}</span>
            <input
              type="radio"
              name={title}
              value={option}
              checked={value === option}
              onChange={() => onChange(option)}
              className="h-4 w-4 accent-velmora-gold"
            />
          </label>
        ))}
      </div>
    </fieldset>
  )
}
