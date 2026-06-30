import React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const CATEGORIES = [
  { id: "earrings", label: "Earrings" },
  { id: "necklaces", label: "Necklaces" },
  { id: "huggies", label: "Huggies" },
  { id: "sets", label: "Sets" },
]

const PRICE_RANGES = [
  { id: "0-50", label: "Under $50", min: 0, max: 50 },
  { id: "50-100", label: "$50 – $100", min: 50, max: 100 },
  { id: "100", label: "$100 & above", min: 100, max: Infinity },
]

const MATERIALS = [
  { id: "18K Gold Plated", label: "18K Gold Plated" },
  { id: "Sterling Silver", label: "Sterling Silver" },
  { id: "Crystal", label: "Crystal" },
]

function FilterSection({ title, children, defaultOpen = true }) {
  const [open, setOpen] = React.useState(defaultOpen)
  return (
    <div className="border-b border-taupe py-5">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between"
        aria-expanded={open}
      >
        <span className="font-sans text-[12px] tracking-[0.24em] uppercase text-espresso">
          {title}
        </span>
        <ChevronDown
          className={cn(
            "h-3.5 w-3.5 text-espresso transition-transform",
            open ? "" : "-rotate-90"
          )}
          strokeWidth={1.5}
        />
      </button>
      {open && <div className="mt-4 space-y-3">{children}</div>}
    </div>
  )
}

function FilterCheckbox({ label, checked, onChange, count }) {
  return (
    <label className="flex items-center justify-between cursor-pointer group">
      <span className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="h-4 w-4 border-tauze accent-espresso"
          style={{ accentColor: "#3a2f25" }}
        />
        <span className="font-serif text-[15px] text-espresso group-hover:text-mink transition-colors">
          {label}
        </span>
      </span>
      {typeof count === "number" && (
        <span className="font-sans text-[11px] tracking-[0.18em] uppercase text-mink">
          {count}
        </span>
      )}
    </label>
  )
}

export default function FilterSidebar({ filters, onChange, counts, totalCount }) {
  const toggle = (key, value) => {
    const set = new Set(filters[key])
    if (set.has(value)) set.delete(value)
    else set.add(value)
    onChange({ ...filters, [key]: Array.from(set) })
  }

  return (
    <aside className="w-full md:w-64 lg:w-72 md:flex-shrink-0">
      <div className="md:sticky md:top-28">
        <div className="flex items-center justify-between mb-4">
          <p className="kicker">Filter</p>
          <p className="font-sans text-[11px] tracking-[0.18em] uppercase text-mink">
            {totalCount} pieces
          </p>
        </div>

        <FilterSection title="Category">
          {CATEGORIES.map((c) => (
            <FilterCheckbox
              key={c.id}
              label={c.label}
              checked={filters.category.includes(c.id)}
              onChange={() => toggle("category", c.id)}
              count={counts?.category?.[c.id] ?? 0}
            />
          ))}
        </FilterSection>

        <FilterSection title="Price">
          {PRICE_RANGES.map((r) => (
            <FilterCheckbox
              key={r.id}
              label={r.label}
              checked={filters.price.includes(r.id)}
              onChange={() => toggle("price", r.id)}
            />
          ))}
        </FilterSection>

        <FilterSection title="Material">
          {MATERIALS.map((m) => (
            <FilterCheckbox
              key={m.id}
              label={m.label}
              checked={filters.material.includes(m.id)}
              onChange={() => toggle("material", m.id)}
            />
          ))}
        </FilterSection>

        <button
          type="button"
          onClick={() => onChange({ category: [], price: [], material: [] })}
          className="mt-6 font-sans text-[11px] tracking-[0.24em] uppercase text-espresso underline underline-offset-4 hover:text-mink transition-colors"
        >
          Clear all
        </button>
      </div>
    </aside>
  )
}

export { CATEGORIES, PRICE_RANGES, MATERIALS }
