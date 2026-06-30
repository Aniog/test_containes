import React, { useEffect, useMemo, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { ChevronDown, SlidersHorizontal, X } from "lucide-react"
import ProductCard from "@/components/ui/ProductCard"
import FilterSidebar, { CATEGORIES, PRICE_RANGES, MATERIALS } from "@/components/shop/FilterSidebar"
import { products } from "@/data/products"
import { cn } from "@/lib/utils"

const SORT_OPTIONS = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
  { id: "newest", label: "Newest" },
]

function matchesPrice(price, rangeIds) {
  if (!rangeIds.length) return true
  return rangeIds.some((id) => {
    const r = PRICE_RANGES.find((p) => p.id === id)
    if (!r) return false
    return price >= r.min && price < r.max
  })
}

function matchesMaterial(productMaterial, materialIds) {
  if (!materialIds.length) return true
  return materialIds.some((m) => productMaterial.includes(m))
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const initialCategory = searchParams.get("category")
    ? [searchParams.get("category")]
    : []

  const [filters, setFilters] = useState({
    category: initialCategory,
    price: [],
    material: [],
  })
  const [sort, setSort] = useState("featured")
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = "Shop — Velmora Fine Jewelry"
    return () => {
      document.title = "Velmora Fine Jewelry"
    }
  }, [])

  // Keep URL ?category= in sync
  useEffect(() => {
    const cat = filters.category[0]
    if (cat) setSearchParams({ category: cat }, { replace: true })
    else if (searchParams.get("category"))
      setSearchParams({}, { replace: true })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters.category])

  // Counts (computed from non-active filter dimension for sidebar)
  const categoryCounts = useMemo(() => {
    const c = {}
    CATEGORIES.forEach((cat) => {
      c[cat.id] = products.filter(
        (p) =>
          p.category === cat.id &&
          matchesPrice(p.price, filters.price) &&
          matchesMaterial(p.material, filters.material)
      ).length
    })
    return { category: c }
  }, [filters])

  const filtered = useMemo(() => {
    let list = products.filter(
      (p) =>
        (filters.category.length === 0 || filters.category.includes(p.category)) &&
        matchesPrice(p.price, filters.price) &&
        matchesMaterial(p.material, filters.material)
    )
    if (sort === "price-asc") list = list.slice().sort((a, b) => a.price - b.price)
    if (sort === "price-desc") list = list.slice().sort((a, b) => b.price - a.price)
    if (sort === "rating")
      list = list.slice().sort((a, b) => (b.rating || 0) - (a.rating || 0))
    if (sort === "newest")
      list = list.slice().sort((a, b) => (b.badge === "New" ? 1 : 0) - (a.badge === "New" ? 1 : 0))
    return list
  }, [filters, sort])

  const activeChips = [
    ...filters.category.map((id) => ({
      key: "category",
      id,
      label: CATEGORIES.find((c) => c.id === id)?.label || id,
    })),
    ...filters.price.map((id) => ({
      key: "price",
      id,
      label: PRICE_RANGES.find((p) => p.id === id)?.label || id,
    })),
    ...filters.material.map((id) => ({
      key: "material",
      id,
      label: id,
    })),
  ]

  const removeChip = (chip) => {
    setFilters((f) => ({
      ...f,
      [chip.key]: f[chip.key].filter((v) => v !== chip.id),
    }))
  }

  return (
    <section className="bg-cream">
      {/* Page header */}
      <div className="bg-cream-deep border-b border-taupe">
        <div className="mx-auto max-w-page px-6 md:px-12 py-14 md:py-20 text-center">
          <p className="kicker">The collection</p>
          <h1 className="mt-3 headline-xl text-espresso">Shop All</h1>
          <p className="mt-4 max-w-md mx-auto editorial-body">
            Demi-fine jewelry designed to be worn every day. Quietly made, carefully finished.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-page px-6 md:px-12 py-10 md:py-14">
        <div className="flex flex-col md:flex-row gap-10 md:gap-12">
          {/* Sidebar (desktop) */}
          <div className="hidden md:block">
            <FilterSidebar
              filters={filters}
              onChange={setFilters}
              counts={categoryCounts}
              totalCount={filtered.length}
            />
          </div>

          {/* Main */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between gap-4 pb-6 border-b border-tauze">
              <button
                type="button"
                onClick={() => setMobileOpen(true)}
                className="md:hidden inline-flex items-center gap-2 font-sans text-[11px] tracking-[0.24em] uppercase text-espresso"
              >
                <SlidersHorizontal className="h-3.5 w-3.5" strokeWidth={1.5} />
                Filter
              </button>
              <div className="flex-1 md:flex-none" />

              <label className="relative inline-flex items-center">
                <span className="sr-only">Sort</span>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="appearance-none bg-transparent border border-taupe pl-4 pr-9 py-2.5 font-sans text-[11px] tracking-[0.24em] uppercase text-espresso focus:border-espresso focus:outline-none cursor-pointer"
                >
                  {SORT_OPTIONS.map((o) => (
                    <option key={o.id} value={o.id}>
                      {o.label}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  className="absolute right-3 h-3 w-3 text-espresso pointer-events-none"
                  strokeWidth={1.5}
                />
              </label>
            </div>

            {/* Active chips */}
            {activeChips.length > 0 && (
              <ul className="mt-5 flex flex-wrap gap-2">
                {activeChips.map((chip) => (
                  <li key={`${chip.key}-${chip.id}`}>
                    <button
                      type="button"
                      onClick={() => removeChip(chip)}
                      className="inline-flex items-center gap-2 px-3 py-1.5 border border-taupe font-sans text-[11px] tracking-[0.18em] uppercase text-espresso hover:border-espresso transition-colors"
                    >
                      {chip.label}
                      <X className="h-3 w-3" strokeWidth={1.5} />
                    </button>
                  </li>
                ))}
              </ul>
            )}

            {/* Grid */}
            {filtered.length === 0 ? (
              <div className="py-24 text-center">
                <p className="kicker">No matches</p>
                <h2 className="mt-4 headline-md text-espresso">
                  Nothing in this view yet.
                </h2>
                <button
                  type="button"
                  onClick={() => setFilters({ category: [], price: [], material: [] })}
                  className="mt-8 underline-link"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div
                className={cn(
                  "mt-8 grid gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-14",
                  "grid-cols-2 lg:grid-cols-3"
                )}
              >
                {filtered.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileOpen && (
        <div
          className="md:hidden fixed inset-0 z-50 bg-espresso/40"
          onClick={() => setMobileOpen(false)}
        >
          <div
            className="absolute inset-y-0 left-0 w-[85%] max-w-sm bg-cream p-6 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <p className="kicker">Filter</p>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label="Close filters"
                className="text-espresso"
              >
                <X className="h-5 w-5" strokeWidth={1.5} />
              </button>
            </div>
            <FilterSidebar
              filters={filters}
              onChange={setFilters}
              counts={categoryCounts}
              totalCount={filtered.length}
            />
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="mt-6 w-full btn-primary"
            >
              Show {filtered.length} pieces
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
