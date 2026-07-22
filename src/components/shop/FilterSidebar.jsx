import { CATEGORIES } from "@/lib/products"

const PRICE_BANDS = [
  { id: "0-50", label: "Under $50", min: 0, max: 50 },
  { id: "50-80", label: "$50 – $80", min: 50, max: 80 },
  { id: "80-120", label: "$80 – $120", min: 80, max: 120 },
]

const MATERIALS = [
  { id: "gold", label: "18K Gold Plated" },
  { id: "silver", label: "Sterling Silver" },
  { id: "crystal", label: "Crystal" },
]

export default function FilterSidebar({ filters, setFilters, resultCount }) {
  const toggleCategory = (id) => {
    setFilters((f) => ({
      ...f,
      category: f.category === id ? null : id,
    }))
  }
  const togglePrice = (id) => {
    setFilters((f) => ({ ...f, price: f.price === id ? null : id }))
  }
  const toggleMaterial = (id) => {
    setFilters((f) => ({
      ...f,
      materials: f.materials.includes(id)
        ? f.materials.filter((m) => m !== id)
        : [...f.materials, id],
    }))
  }
  const clearAll = () =>
    setFilters({ category: null, price: null, materials: [] })

  return (
    <aside className="w-full md:w-64 md:shrink-0">
      <div className="md:sticky md:top-24">
        <div className="flex items-center justify-between pb-5 border-b border-hairline">
          <p className="eyebrow text-ink">Filters</p>
          <button
            type="button"
            onClick={clearAll}
            className="text-[11px] uppercase tracking-wider text-muted hover:text-ink"
          >
            Clear
          </button>
        </div>

        <FilterGroup title="Category">
          <ul className="space-y-2.5">
            {CATEGORIES.map((c) => (
              <li key={c.id}>
                <button
                  type="button"
                  onClick={() => toggleCategory(c.id)}
                  className="flex items-center justify-between w-full text-left text-[14px] text-ink hover:text-gold"
                >
                  <span className="flex items-center gap-3">
                    <span
                      className={[
                        "w-3.5 h-3.5 border flex items-center justify-center transition-colors",
                        filters.category === c.id
                          ? "border-ink bg-ink"
                          : "border-hairline",
                      ].join(" ")}
                    >
                      {filters.category === c.id && (
                        <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#F4EFE7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                      )}
                    </span>
                    {c.name}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </FilterGroup>

        <FilterGroup title="Price">
          <ul className="space-y-2.5">
            {PRICE_BANDS.map((p) => (
              <li key={p.id}>
                <button
                  type="button"
                  onClick={() => togglePrice(p.id)}
                  className="flex items-center gap-3 text-[14px] text-ink hover:text-gold"
                >
                  <span
                    className={[
                      "w-3.5 h-3.5 border flex items-center justify-center transition-colors",
                      filters.price === p.id ? "border-ink bg-ink" : "border-hairline",
                    ].join(" ")}
                  >
                    {filters.price === p.id && (
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#F4EFE7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    )}
                  </span>
                  {p.label}
                </button>
              </li>
            ))}
          </ul>
        </FilterGroup>

        <FilterGroup title="Material" last>
          <ul className="space-y-2.5">
            {MATERIALS.map((m) => (
              <li key={m.id}>
                <button
                  type="button"
                  onClick={() => toggleMaterial(m.id)}
                  className="flex items-center gap-3 text-[14px] text-ink hover:text-gold"
                >
                  <span
                    className={[
                      "w-3.5 h-3.5 border flex items-center justify-center transition-colors",
                      filters.materials.includes(m.id)
                        ? "border-ink bg-ink"
                        : "border-hairline",
                    ].join(" ")}
                  >
                    {filters.materials.includes(m.id) && (
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#F4EFE7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    )}
                  </span>
                  {m.label}
                </button>
              </li>
            ))}
          </ul>
        </FilterGroup>

        <p className="mt-6 text-[11px] text-muted-soft tracking-wider">
          {resultCount} {resultCount === 1 ? "piece" : "pieces"}
        </p>
      </div>
    </aside>
  )
}

function FilterGroup({ title, children, last }) {
  return (
    <div className={last ? "pt-5" : "py-5 border-b border-hairline"}>
      <p className="eyebrow text-muted mb-4">{title}</p>
      {children}
    </div>
  )
}
