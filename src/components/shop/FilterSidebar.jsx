import React from "react"
import { cn } from "@/lib/utils"
import { PRICE_BANDS } from "./priceBands"

export default function FilterSidebar({ filters, setFilters }) {
  const toggleCategory = (id) => {
    const next = filters.categories.includes(id)
      ? filters.categories.filter((c) => c !== id)
      : [...filters.categories, id]
    setFilters({ ...filters, categories: next })
  }

  const setMaterial = (id) => {
    setFilters({ ...filters, material: id })
  }

  const setPrice = (id) => {
    setFilters({ ...filters, price: id })
  }

  const clearAll = () => {
    setFilters({ categories: [], material: "all", price: "all", giftOnly: false })
  }

  const hasActive =
    filters.categories.length > 0 ||
    filters.material !== "all" ||
    filters.price !== "all" ||
    filters.giftOnly

  return (
    <aside
      aria-label="Filter products"
      className="lg:sticky lg:top-24 self-start"
    >
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-line">
        <h2 className="text-[11px] tracking-widest3 uppercase text-ink">
          Filter
        </h2>
        {hasActive && (
          <button
            type="button"
            onClick={clearAll}
            className="text-[10px] tracking-widest2 uppercase text-muted hover:text-ink transition-colors"
          >
            Clear
          </button>
        )}
      </div>

      <FilterGroup title="Category">
        <ul className="space-y-2.5">
          {[
            { id: "earrings", label: "Earrings" },
            { id: "necklaces", label: "Necklaces" },
            { id: "huggies", label: "Huggies" },
          ].map((c) => {
            const active = filters.categories.includes(c.id)
            return (
              <li key={c.id}>
                <button
                  type="button"
                  onClick={() => toggleCategory(c.id)}
                  className="flex items-center gap-3 text-sm text-ink hover:text-champagne-deep transition-colors w-full text-left"
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      "w-4 h-4 inline-flex items-center justify-center border transition-colors",
                      active
                        ? "bg-ink border-ink"
                        : "border-line bg-transparent"
                    )}
                  >
                    {active && (
                      <svg
                        viewBox="0 0 12 12"
                        className="w-3 h-3 text-bone"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path d="M2 6.5 4.5 9 10 3" />
                      </svg>
                    )}
                  </span>
                  <span>{c.label}</span>
                </button>
              </li>
            )
          })}
        </ul>
      </FilterGroup>

      <FilterGroup title="Price">
        <ul className="space-y-2.5">
          {PRICE_BANDS.map((p) => {
            const active = filters.price === p.id
            return (
              <li key={p.id}>
                <button
                  type="button"
                  onClick={() => setPrice(p.id)}
                  className={cn(
                    "flex items-center gap-2 text-sm transition-colors w-full text-left",
                    active ? "text-ink font-medium" : "text-ink hover:text-champagne-deep"
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      "w-3.5 h-3.5 inline-flex items-center justify-center rounded-full border transition-colors",
                      active
                        ? "border-ink"
                        : "border-line"
                    )}
                  >
                    {active && (
                      <span className="w-1.5 h-1.5 bg-ink rounded-full" />
                    )}
                  </span>
                  {p.label}
                </button>
              </li>
            )
          })}
        </ul>
      </FilterGroup>

      <FilterGroup title="Material">
        <ul className="space-y-2.5">
          {[
            { id: "all", label: "All Materials" },
            { id: "18k-gold", label: "18K Gold Plated" },
            { id: "sterling-silver", label: "Sterling Silver" },
          ].map((m) => {
            const active = filters.material === m.id
            return (
              <li key={m.id}>
                <button
                  type="button"
                  onClick={() => setMaterial(m.id)}
                  className={cn(
                    "flex items-center gap-2 text-sm transition-colors w-full text-left",
                    active ? "text-ink font-medium" : "text-ink hover:text-champagne-deep"
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      "w-3.5 h-3.5 inline-flex items-center justify-center rounded-full border transition-colors",
                      active
                        ? "border-ink"
                        : "border-line"
                    )}
                  >
                    {active && (
                      <span className="w-1.5 h-1.5 bg-ink rounded-full" />
                    )}
                  </span>
                  {m.label}
                </button>
              </li>
            )
          })}
        </ul>
      </FilterGroup>

      <FilterGroup title="Type" last>
        <ul className="space-y-2.5">
          {[
            { id: "all", label: "All Pieces" },
            { id: "gift", label: "Gift Sets" },
          ].map((g) => {
            const active =
              (g.id === "gift" && filters.giftOnly) ||
              (g.id === "all" && !filters.giftOnly)
            return (
              <li key={g.id}>
                <button
                  type="button"
                  onClick={() =>
                    setFilters({ ...filters, giftOnly: g.id === "gift" })
                  }
                  className={cn(
                    "flex items-center gap-2 text-sm transition-colors w-full text-left",
                    active ? "text-ink font-medium" : "text-ink hover:text-champagne-deep"
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      "w-3.5 h-3.5 inline-flex items-center justify-center rounded-full border transition-colors",
                      active
                        ? "border-ink"
                        : "border-line"
                    )}
                  >
                    {active && (
                      <span className="w-1.5 h-1.5 bg-ink rounded-full" />
                    )}
                  </span>
                  {g.label}
                </button>
              </li>
            )
          })}
        </ul>
      </FilterGroup>
    </aside>
  )
}

function FilterGroup({ title, children, last }) {
  return (
    <div className={cn("py-5 border-b border-line", last && "border-b-0")}>
      <h3 className="text-[11px] tracking-widest3 uppercase text-muted mb-4">
        {title}
      </h3>
      {children}
    </div>
  )
}
