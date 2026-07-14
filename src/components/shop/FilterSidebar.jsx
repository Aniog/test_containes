import { cn } from "@/lib/utils.js"

export default function FilterSidebar({
  categories,
  materials,
  priceRanges,
  selected,
  onChange,
  onClear,
}) {
  const isActive = (key, val) => selected[key] === val

  return (
    <aside className="w-full md:sticky md:top-28 md:max-h-[calc(100vh-8rem)] md:overflow-y-auto md:pr-2">
      <div className="flex items-center justify-between border-b border-hairline pb-4">
        <h2 className="font-sans text-[11px] uppercase tracking-[0.22em] text-espresso">
          Filter
        </h2>
        <button
          type="button"
          onClick={onClear}
          className="font-sans text-[11px] uppercase tracking-[0.22em] text-taupe hover:text-espresso"
        >
          Clear
        </button>
      </div>

      <FilterGroup title="Category">
        <ul className="space-y-2.5">
          {categories.map((c) => (
            <li key={c.id}>
              <button
                type="button"
                onClick={() =>
                  onChange({
                    ...selected,
                    category: selected.category === c.id ? null : c.id,
                  })
                }
                className={cn(
                  "flex w-full items-center justify-between font-sans text-sm transition-colors",
                  isActive("category", c.id) ? "text-espresso" : "text-taupe hover:text-espresso"
                )}
              >
                <span>{c.label}</span>
                <span
                  className={cn(
                    "h-1.5 w-1.5 rounded-full transition-colors",
                    isActive("category", c.id) ? "bg-gold" : "bg-transparent"
                  )}
                />
              </button>
            </li>
          ))}
        </ul>
      </FilterGroup>

      <FilterGroup title="Price">
        <ul className="space-y-2.5">
          {priceRanges.map((p) => (
            <li key={p.id}>
              <button
                type="button"
                onClick={() =>
                  onChange({
                    ...selected,
                    price: selected.price === p.id ? null : p.id,
                  })
                }
                className={cn(
                  "flex w-full items-center justify-between font-sans text-sm transition-colors",
                  isActive("price", p.id) ? "text-espresso" : "text-taupe hover:text-espresso"
                )}
              >
                <span>{p.label}</span>
                <span
                  className={cn(
                    "h-1.5 w-1.5 rounded-full transition-colors",
                    isActive("price", p.id) ? "bg-gold" : "bg-transparent"
                  )}
                />
              </button>
            </li>
          ))}
        </ul>
      </FilterGroup>

      <FilterGroup title="Material">
        <ul className="space-y-2.5">
          {materials.map((m) => (
            <li key={m.id}>
              <button
                type="button"
                onClick={() =>
                  onChange({
                    ...selected,
                    material: selected.material === m.id ? null : m.id,
                  })
                }
                className={cn(
                  "flex w-full items-center justify-between font-sans text-sm transition-colors",
                  isActive("material", m.id) ? "text-espresso" : "text-taupe hover:text-espresso"
                )}
              >
                <span>{m.label}</span>
                <span
                  className={cn(
                    "h-1.5 w-1.5 rounded-full transition-colors",
                    isActive("material", m.id) ? "bg-gold" : "bg-transparent"
                  )}
                />
              </button>
            </li>
          ))}
        </ul>
      </FilterGroup>
    </aside>
  )
}

function FilterGroup({ title, children }) {
  return (
    <div className="border-b border-hairline py-5">
      <h3 className="mb-4 font-sans text-[11px] uppercase tracking-[0.22em] text-espresso">
        {title}
      </h3>
      {children}
    </div>
  )
}
