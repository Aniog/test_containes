import { useEffect, useMemo, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { SlidersHorizontal, X } from "lucide-react"
import { PRODUCTS, CATEGORIES } from "@/data/products"
import FilterSidebar, { PRICE_BUCKETS } from "@/components/collection/FilterSidebar"
import ProductGrid from "@/components/collection/ProductGrid"
import { cn } from "@/lib/utils"

const INITIAL_FILTERS = { categories: [], materials: [], prices: [] }

export default function CollectionPage() {
  const [params, setParams] = useSearchParams()
  const [filters, setFilters] = useState(() => {
    const cat = params.get("category")
    return {
      ...INITIAL_FILTERS,
      categories: cat && CATEGORIES.some((c) => c.id === cat) ? [cat] : [],
    }
  })
  const [sort, setSort] = useState("featured")
  const [mobileOpen, setMobileOpen] = useState(false)

  // Keep the URL ?category=... param in sync so users can deep-link or
  // navigate back/forward through filtered states.
  useEffect(() => {
    const next = new URLSearchParams(params)
    if (filters.categories.length === 1) {
      next.set("category", filters.categories[0])
    } else {
      next.delete("category")
    }
    setParams(next, { replace: true })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters.categories])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" })
  }, [])

  function updateFilter(group, id, checked) {
    setFilters((prev) => {
      const list = prev[group]
      const next = checked ? [...list, id] : list.filter((x) => x !== id)
      return { ...prev, [group]: next }
    })
  }

  function clearAll() {
    setFilters(INITIAL_FILTERS)
  }

  const filtered = useMemo(() => {
    let list = PRODUCTS.slice()

    if (filters.categories.length > 0) {
      list = list.filter((p) => filters.categories.includes(p.category))
    }
    if (filters.materials.length > 0) {
      list = list.filter((p) => {
        // very loose: gold tone matches "gold", silver tone matches "silver"
        if (filters.materials.includes("gold") && p.tone === "gold") return true
        if (filters.materials.includes("silver") && p.tone === "silver") return true
        if (filters.materials.includes("mixed") && p.tone === "mixed") return true
        return false
      })
    }
    if (filters.prices.length > 0) {
      const buckets = filters.prices
        .map((id) => PRICE_BUCKETS.find((b) => b.id === id))
        .filter(Boolean)
      list = list.filter((p) =>
        buckets.some((b) => p.price >= b.min && p.price < b.max),
      )
    }

    switch (sort) {
      case "price-asc":
        list.sort((a, b) => a.price - b.price)
        break
      case "price-desc":
        list.sort((a, b) => b.price - a.price)
        break
      case "rating":
        list.sort((a, b) => b.rating - a.rating)
        break
      default:
        // keep the original (curated) order
        break
    }

    return list
  }, [filters, sort])

  // Build a friendly title from current category filters
  const heading = useMemo(() => {
    if (filters.categories.length === 1) {
      const cat = CATEGORIES.find((c) => c.id === filters.categories[0])
      return cat ? cat.label : "All Jewelry"
    }
    return "The Collection"
  }, [filters.categories])

  return (
    <main className="pt-24 md:pt-28">
      {/* Editorial page header */}
      <header className="container-site pb-10 md:pb-16 border-b border-line">
        <p className="eyebrow">Shop</p>
        <h1
          id="collection-title"
          className="display text-4xl md:text-6xl mt-3 text-balance"
        >
          {heading}
        </h1>
        <p
          id="collection-subtitle"
          className="mt-3 text-ink-secondary max-w-xl"
        >
          Demure, demi-fine pieces — designed to layer and made to live in.
        </p>
      </header>

      <div className="container-site py-10 md:py-16">
        {/* Mobile filter trigger */}
        <div className="md:hidden flex items-center justify-between mb-6">
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="inline-flex items-center gap-2 text-[12px] uppercase tracking-name font-medium text-ink-primary border border-line px-4 py-2"
          >
            <SlidersHorizontal className="h-4 w-4" strokeWidth={1.5} />
            Filter
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-10 md:gap-12 lg:gap-16">
          <div className="hidden md:block">
            <FilterSidebar
              filters={filters}
              onChange={updateFilter}
              onClear={clearAll}
              totalCount={filtered.length}
            />
          </div>
          <ProductGrid
            products={filtered}
            sort={sort}
            onSortChange={setSort}
          />
        </div>
      </div>

      {/* Mobile filter sheet */}
      <div
        className={cn(
          "fixed inset-0 z-[70] md:hidden transition-opacity duration-300",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
        aria-hidden={!mobileOpen}
      >
        <div
          className="absolute inset-0 bg-black/70"
          onClick={() => setMobileOpen(false)}
        />
        <aside
          className={cn(
            "absolute inset-y-0 left-0 w-[88%] max-w-sm bg-base border-r border-line",
            "flex flex-col transition-transform duration-500 ease-soft",
            mobileOpen ? "translate-x-0" : "-translate-x-full",
          )}
          role="dialog"
          aria-label="Filters"
        >
          <div className="flex items-center justify-between h-16 px-6 border-b border-line">
            <p className="font-sans text-[12px] uppercase tracking-name font-medium">
              Filter
            </p>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="p-2 text-ink-primary"
              aria-label="Close filters"
            >
              <X className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto px-6">
            <FilterSidebar
              filters={filters}
              onChange={updateFilter}
              onClear={clearAll}
              totalCount={filtered.length}
            />
          </div>
          <div className="border-t border-line p-6">
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="btn-primary w-full"
            >
              View {filtered.length} pieces
            </button>
          </div>
        </aside>
      </div>
    </main>
  )
}
