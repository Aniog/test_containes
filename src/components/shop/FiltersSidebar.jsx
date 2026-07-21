const FilterGroup = ({ title, options, value, onChange }) => {
  return (
    <div className="border-b border-velvet/10 pb-6">
      <h3 className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">{title}</h3>
      <div className="mt-4 flex flex-wrap gap-3 lg:flex-col lg:items-start">
        {options.map((option) => {
          const isActive = value === option.value

          return (
            <button
              key={option.value}
              type="button"
              onClick={() => onChange(option.value)}
              className={`rounded-full border px-4 py-2 text-sm transition ${
                isActive
                  ? "border-velvet bg-velvet text-ivory"
                  : "border-velvet/15 bg-porcelain text-velvet hover:border-gold hover:text-gold"
              }`}
            >
              {option.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}

const FiltersSidebar = ({ filters, onFilterChange }) => {
  return (
    <aside className="rounded-[2rem] border border-velvet/10 bg-porcelain p-6 text-velvet shadow-soft lg:sticky lg:top-28">
      <div className="space-y-6">
        <FilterGroup
          title="Category"
          value={filters.category}
          onChange={(value) => onFilterChange("category", value)}
          options={[
            { label: "All", value: "All" },
            { label: "Earrings", value: "Earrings" },
            { label: "Necklaces", value: "Necklaces" },
            { label: "Huggies", value: "Huggies" },
            { label: "Gift Sets", value: "Gift Sets" },
          ]}
        />
        <FilterGroup
          title="Price"
          value={filters.price}
          onChange={(value) => onFilterChange("price", value)}
          options={[
            { label: "All", value: "All" },
            { label: "$0–$49", value: "0-49" },
            { label: "$50–$79", value: "50-79" },
            { label: "$80+", value: "80+" },
          ]}
        />
        <FilterGroup
          title="Material"
          value={filters.material}
          onChange={(value) => onFilterChange("material", value)}
          options={[
            { label: "All", value: "All" },
            { label: "18K Gold Plated", value: "18K Gold Plated" },
            { label: "Gold Tone", value: "Gold Tone" },
            { label: "Textured Gold Tone", value: "Textured Gold Tone" },
          ]}
        />
      </div>
    </aside>
  )
}

export default FiltersSidebar
