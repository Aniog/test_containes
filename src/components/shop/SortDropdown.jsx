const options = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
]

export default function SortDropdown({ value, onChange }) {
  return (
    <div className="flex items-center gap-3">
      <label
        htmlFor="sort"
        className="text-xs uppercase tracking-[0.15em] text-cream-muted hidden sm:block"
      >
        Sort by
      </label>
      <select
        id="sort"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-10 bg-surface-highlight border border-divider text-cream text-sm px-3 pr-8 focus:outline-none focus:border-champagne"
      >
        {options.map((opt) => (
          <option key={opt.id} value={opt.id}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  )
}
