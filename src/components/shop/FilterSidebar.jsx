import { categories, materials, priceRanges } from "@/data/products"
import { cn } from "@/lib/utils"

function FilterGroup({ title, options, selected, onToggle }) {
  return (
    <div className="border-b border-border pb-6">
      <h4 className="mb-4 text-xs uppercase tracking-[0.16em] text-foreground">
        {title}
      </h4>
      <div className="space-y-3">
        {options.map((option) => {
          const active = selected.includes(option.id)
          return (
            <label
              key={option.id}
              className="flex cursor-pointer items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <span
                className={cn(
                  "flex h-4 w-4 items-center justify-center rounded-sm border transition-colors",
                  active
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border",
                )}
              >
                {active && (
                  <svg
                    className="h-3 w-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </span>
              <input
                type="checkbox"
                className="sr-only"
                checked={active}
                onChange={() => onToggle(option.id)}
              />
              {option.label}
            </label>
          )
        })}
      </div>
    </div>
  )
}

export function FilterSidebar({ filters, setFilters }) {
  const toggle = (key, id) => {
    setFilters((prev) => {
      const current = prev[key]
      const next = current.includes(id)
        ? current.filter((x) => x !== id)
        : [...current, id]
      return { ...prev, [key]: next }
    })
  }

  const clear = () => setFilters({ category: [], material: [], price: [] })

  return (
    <aside className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="font-serif text-lg uppercase tracking-[0.16em] text-foreground">
          Filters
        </h3>
        <button
          onClick={clear}
          className="text-xs text-muted-foreground underline underline-offset-4 hover:text-foreground"
        >
          Clear all
        </button>
      </div>
      <FilterGroup
        title="Category"
        options={categories}
        selected={filters.category}
        onToggle={(id) => toggle("category", id)}
      />
      <FilterGroup
        title="Material"
        options={materials}
        selected={filters.material}
        onToggle={(id) => toggle("material", id)}
      />
      <FilterGroup
        title="Price"
        options={priceRanges}
        selected={filters.price}
        onToggle={(id) => toggle("price", id)}
      />
    </aside>
  )
}
