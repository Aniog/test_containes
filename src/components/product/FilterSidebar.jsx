import { CATEGORIES, MATERIALS } from "@/data/products"
import { cn } from "@/lib/utils"

const PRICE_BUCKETS = [
  { id: "all", label: "All Prices", min: 0, max: Infinity },
  { id: "u50", label: "Under $50", min: 0, max: 50 },
  { id: "50-75", label: "$50 – $75", min: 50, max: 75 },
  { id: "75p", label: "$75 & up", min: 75, max: Infinity },
]

export default function FilterSidebar({
  filters,
  onChange,
  onClear,
  resultCount,
  className,
}) {
  const update = (patch) => onChange({ ...filters, ...patch })

  const toggle = (key, value) => {
    const current = filters[key] || []
    const next = current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value]
    update({ [key]: next })
  }

  const activeCount =
    (filters.categories?.length || 0) +
    (filters.materials?.length || 0) +
    (filters.price && filters.price !== "all" ? 1 : 0)

  return (
    <aside className={cn("w-full", className)}>
      <div className="flex items-center justify-between border-b border-line-light pb-4">
        <p className="eyebrow text-text-muted">
          Filter {activeCount > 0 && `· ${activeCount}`}
        </p>
        {activeCount > 0 && (
          <button
            type="button"
            onClick={onClear}
            className="text-[11px] uppercase tracking-[0.28em] text-ink/70 underline-offset-4 transition-colors hover:text-ink hover:underline"
          >
            Clear
          </button>
        )}
      </div>

      <FilterGroup title="Category">
        <ul className="space-y-2">
          {CATEGORIES.map((c) => {
            const checked = filters.categories?.includes(c.slug)
            return (
              <li key={c.slug}>
                <label className="flex cursor-pointer items-center gap-3 text-sm text-ink/80 transition-colors hover:text-ink">
                  <input
                    type="checkbox"
                    checked={!!checked}
                    onChange={() => toggle("categories", c.slug)}
                    className="h-3.5 w-3.5 cursor-pointer appearance-none border border-ink/30 bg-paper checked:border-ink checked:bg-ink"
                    style={{
                      backgroundImage: checked
                        ? "linear-gradient(45deg, transparent 45%, #FAF6EF 45%, #FAF6EF 55%, transparent 55%)"
                        : "none",
                    }}
                  />
                  {c.name}
                </label>
              </li>
            )
          })}
        </ul>
      </FilterGroup>

      <FilterGroup title="Price">
        <ul className="space-y-2">
          {PRICE_BUCKETS.map((p) => {
            const checked = (filters.price || "all") === p.id
            return (
              <li key={p.id}>
                <label className="flex cursor-pointer items-center gap-3 text-sm text-ink/80 transition-colors hover:text-ink">
                  <input
                    type="radio"
                    name="price"
                    checked={checked}
                    onChange={() => update({ price: p.id })}
                    className="h-3.5 w-3.5 cursor-pointer appearance-none rounded-full border border-ink/30 bg-paper checked:border-ink checked:bg-ink"
                  />
                  {p.label}
                </label>
              </li>
            )
          })}
        </ul>
      </FilterGroup>

      <FilterGroup title="Material">
        <ul className="space-y-2">
          {MATERIALS.map((m) => {
            const checked = filters.materials?.includes(m.slug)
            return (
              <li key={m.slug}>
                <label className="flex cursor-pointer items-center gap-3 text-sm text-ink/80 transition-colors hover:text-ink">
                  <input
                    type="checkbox"
                    checked={!!checked}
                    onChange={() => toggle("materials", m.slug)}
                    className="h-3.5 w-3.5 cursor-pointer appearance-none border border-ink/30 bg-paper checked:border-ink checked:bg-ink"
                    style={{
                      backgroundImage: checked
                        ? "linear-gradient(45deg, transparent 45%, #FAF6EF 45%, #FAF6EF 55%, transparent 55%)"
                        : "none",
                    }}
                  />
                  {m.name}
                </label>
              </li>
            )
          })}
        </ul>
      </FilterGroup>

      <div className="mt-8 border-t border-line-light pt-6 text-xs uppercase tracking-[0.28em] text-text-muted">
        Showing {resultCount} piece{resultCount === 1 ? "" : "s"}
      </div>
    </aside>
  )
}

function FilterGroup({ title, children }) {
  return (
    <div className="border-b border-line-light py-6">
      <h3 className="eyebrow mb-4 text-text-muted">{title}</h3>
      {children}
    </div>
  )
}

export { PRICE_BUCKETS }
