import { useState } from "react"
import { CATEGORIES, MATERIALS } from "@/data/products"
import { cn } from "@/lib/utils"

const PRICE_RANGES = [
  { id: "all", label: "All prices", min: 0, max: Infinity },
  { id: "u40", label: "Under $40", min: 0, max: 40 },
  { id: "40-70", label: "$40 – $70", min: 40, max: 70 },
  { id: "70+", label: "$70 +", min: 70, max: Infinity },
]

function FilterGroup({ title, children, defaultOpen = true }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-b border-taupe-200 py-5">
      <button
        type="button"
        className="flex w-full items-center justify-between text-left"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span className="text-[11px] font-semibold uppercase tracking-wider2 text-ink-500">
          {title}
        </span>
        <span
          className={cn(
            "text-ink-200 transition-transform duration-300 ease-elegant",
            open ? "rotate-45" : "rotate-0",
          )}
          aria-hidden="true"
        >
          +
        </span>
      </button>
      <div
        className={cn(
          "grid overflow-hidden transition-all duration-500 ease-elegant",
          open ? "grid-rows-[1fr] pt-4 opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="min-h-0">{children}</div>
      </div>
    </div>
  )
}

function CheckRow({ label, count, checked, onChange }) {
  return (
    <label className="flex cursor-pointer items-center justify-between py-1.5 text-[14px] text-ink-500 transition-colors hover:text-ink-500">
      <span className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="h-4 w-4 cursor-pointer appearance-none border border-taupe-300 bg-transparent checked:border-ink-500 checked:bg-ink-500"
          style={{
            backgroundImage: checked
              ? "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path fill='none' stroke='%23FFFCF7' stroke-width='2' d='M3 8.5l3.5 3.5 6-7'/></svg>\")"
              : "none",
            backgroundPosition: "center",
            backgroundSize: "12px 12px",
            backgroundRepeat: "no-repeat",
          }}
        />
        {label}
      </span>
      {typeof count === "number" && (
        <span className="text-[12px] text-ink-200">{count}</span>
      )}
    </label>
  )
}

export function FilterSidebar({ filters, setFilters, counts }) {
  const toggle = (key, value) => {
    setFilters((f) => {
      const set = new Set(f[key] || [])
      if (set.has(value)) set.delete(value)
      else set.add(value)
      return { ...f, [key]: Array.from(set) }
    })
  }

  const setPrice = (range) => setFilters((f) => ({ ...f, price: range.id }))

  return (
    <aside className="md:sticky md:top-28">
      <div className="mb-2 flex items-center justify-between">
        <h2 className="text-[11px] font-semibold uppercase tracking-wider2 text-ink-500">
          Refine
        </h2>
        <button
          type="button"
          onClick={() =>
            setFilters({ categories: [], materials: [], price: "all" })
          }
          className="text-[11px] uppercase tracking-wider2 text-ink-200 underline-offset-4 hover:text-ink-500 hover:underline"
        >
          Reset
        </button>
      </div>

      <FilterGroup title="Category">
        <div className="space-y-0.5">
          {CATEGORIES.map((c) => (
            <CheckRow
              key={c.id}
              label={c.label}
              count={counts.category?.[c.id] || 0}
              checked={filters.categories.includes(c.id)}
              onChange={() => toggle("categories", c.id)}
            />
          ))}
        </div>
      </FilterGroup>

      <FilterGroup title="Price">
        <div className="space-y-1.5">
          {PRICE_RANGES.map((r) => (
            <label
              key={r.id}
              className="flex cursor-pointer items-center gap-3 py-1.5 text-[14px] text-ink-500"
            >
              <input
                type="radio"
                name="price"
                checked={filters.price === r.id}
                onChange={() => setPrice(r)}
                className="h-4 w-4 cursor-pointer appearance-none rounded-full border border-taupe-300 checked:border-ink-500"
                style={{
                  backgroundImage:
                    filters.price === r.id
                      ? "radial-gradient(circle, #2B201A 38%, transparent 40%)"
                      : "none",
                }}
              />
              {r.label}
            </label>
          ))}
        </div>
      </FilterGroup>

      <FilterGroup title="Material">
        <div className="space-y-0.5">
          {MATERIALS.map((m) => (
            <CheckRow
              key={m.id}
              label={m.label}
              count={counts.material?.[m.id] || 0}
              checked={filters.materials.includes(m.id)}
              onChange={() => toggle("materials", m.id)}
            />
          ))}
        </div>
      </FilterGroup>
    </aside>
  )
}
