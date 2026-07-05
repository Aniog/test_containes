import { useMemo, useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { SlidersHorizontal, X } from "lucide-react"
import { products } from "@/data/products"
import ProductCard from "@/components/product/ProductCard"
import { useStrkImages } from "@/lib/useStrkImages"
import { cn } from "@/lib/utils"

const CATEGORY_OPTIONS = ["Earrings", "Necklaces", "Huggies"]
const MATERIAL_OPTIONS = ["18K Gold Plated"]
const PRICE_RANGES = [
  { id: "under50", label: "Under $50", min: 0, max: 50 },
  { id: "50to100", label: "$50 – $100", min: 50, max: 100 },
  { id: "over100", label: "Over $100", min: 100, max: Infinity },
]
const SORT_OPTIONS = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [sort, setSort] = useState("featured")
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const ref = useStrkImages([sort, searchParams.toString(), mobileFiltersOpen])

  const selectedCategories = useMemo(() => {
    const c = searchParams.get("category")
    return c ? [c] : []
  }, [searchParams])

  const selectedPrices = useMemo(() => {
    const p = searchParams.get("price")
    return p ? p.split(",") : []
  }, [searchParams])

  const toggleCategory = (cat) => {
    const next = new URLSearchParams(searchParams)
    const current = next.get("category")
    if (current === cat || (cat === "" )) {
      next.delete("category")
    } else {
      next.set("category", cat)
    }
    setSearchParams(next)
  }

  const togglePrice = (priceId) => {
    const next = new URLSearchParams(searchParams)
    const current = next.get("price") ? next.get("price").split(",") : []
    let updated
    if (current.includes(priceId)) {
      updated = current.filter((p) => p !== priceId)
    } else {
      updated = [...current, priceId]
    }
    if (updated.length) next.set("price", updated.join(","))
    else next.delete("price")
    setSearchParams(next)
  }

  const clearAll = () => {
    setSearchParams({})
  }

  const filtered = useMemo(() => {
    let result = [...products]

    if (selectedCategories.length) {
      result = result.filter((p) => selectedCategories.includes(p.category))
    }

    if (selectedPrices.length) {
      result = result.filter((p) =>
        selectedPrices.some((pid) => {
          const range = PRICE_RANGES.find((r) => r.id === pid)
          if (!range) return false
          return p.price >= range.min && p.price < range.max
        })
      )
    }

    switch (sort) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price)
        break
      case "price-desc":
        result.sort((a, b) => b.price - a.price)
        break
      case "rating":
        result.sort((a, b) => b.rating - a.rating)
        break
      default:
        break
    }

    return result
  }, [selectedCategories, selectedPrices, sort])

  const hasFilters = selectedCategories.length > 0 || selectedPrices.length > 0

  const FilterPanel = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-[11px] uppercase tracking-[0.2em] text-ink font-medium mb-4">
          Category
        </h3>
        <ul className="space-y-3">
          {CATEGORY_OPTIONS.map((cat) => (
            <li key={cat}>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(cat)}
                  onChange={() => toggleCategory(cat)}
                  className="w-4 h-4 accent-gold border-line"
                />
                <span className="text-sm text-stone group-hover:text-ink transition-colors">
                  {cat}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-[11px] uppercase tracking-[0.2em] text-ink font-medium mb-4">
          Price
        </h3>
        <ul className="space-y-3">
          {PRICE_RANGES.map((range) => (
            <li key={range.id}>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={selectedPrices.includes(range.id)}
                  onChange={() => togglePrice(range.id)}
                  className="w-4 h-4 accent-gold border-line"
                />
                <span className="text-sm text-stone group-hover:text-ink transition-colors">
                  {range.label}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-[11px] uppercase tracking-[0.2em] text-ink font-medium mb-4">
          Material
        </h3>
        <ul className="space-y-3">
          {MATERIAL_OPTIONS.map((mat) => (
            <li key={mat}>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked
                  readOnly
                  className="w-4 h-4 accent-gold border-line"
                />
                <span className="text-sm text-stone">{mat}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {hasFilters && (
        <button
          type="button"
          onClick={clearAll}
          className="text-xs uppercase tracking-[0.15em] text-stone underline underline-offset-2 hover:text-ink transition-colors"
        >
          Clear All
        </button>
      )}
    </div>
  )

  return (
    <div ref={ref} className="pt-16 md:pt-20">
      {/* Page header */}
      <div className="border-b border-line">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-12 md:py-16 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-3">
            The Collection
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-ink">Shop All</h1>
          <p className="mt-4 text-sm text-stone max-w-md mx-auto">
            Demi-fine gold jewelry, hand-finished and made to be treasured.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 py-10 md:py-14">
        <div className="flex gap-10">
          {/* Sidebar (desktop) */}
          <aside className="hidden md:block w-56 shrink-0">
            <FilterPanel />
          </aside>

          {/* Main */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-line">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(true)}
                  className="md:hidden inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-ink"
                >
                  <SlidersHorizontal className="w-4 h-4" />
                  Filters
                </button>
                <p className="hidden md:block text-sm text-stone">
                  {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <label className="text-[11px] uppercase tracking-[0.15em] text-stone" htmlFor="sort">
                  Sort
                </label>
                <select
                  id="sort"
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="bg-transparent border border-line text-sm text-ink px-3 py-2 focus:outline-none focus:border-ink transition-colors"
                >
                  {SORT_OPTIONS.map((o) => (
                    <option key={o.id} value={o.id}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Active filter chips */}
            {hasFilters && (
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedCategories.map((c) => (
                  <button
                    key={c}
                    onClick={() => toggleCategory(c)}
                    className="inline-flex items-center gap-1.5 bg-sand text-ink text-xs px-3 py-1.5"
                  >
                    {c}
                    <X className="w-3 h-3" />
                  </button>
                ))}
                {selectedPrices.map((pid) => {
                  const r = PRICE_RANGES.find((x) => x.id === pid)
                  return (
                    <button
                      key={pid}
                      onClick={() => togglePrice(pid)}
                      className="inline-flex items-center gap-1.5 bg-sand text-ink text-xs px-3 py-1.5"
                    >
                      {r?.label}
                      <X className="w-3 h-3" />
                    </button>
                  )
                })}
              </div>
            )}

            {/* Grid */}
            {filtered.length > 0 ? (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                {filtered.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            ) : (
              <div className="py-20 text-center">
                <p className="font-serif text-2xl text-ink">No pieces match your filters</p>
                <button
                  onClick={clearAll}
                  className="mt-4 text-xs uppercase tracking-[0.2em] text-gold underline underline-offset-2 hover:text-ink transition-colors"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      <div
        className={cn(
          "fixed inset-0 z-[80] md:hidden transition-opacity duration-300",
          mobileFiltersOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="absolute inset-0 bg-ink/40" onClick={() => setMobileFiltersOpen(false)} />
        <div
          className={cn(
            "absolute left-0 top-0 h-full w-80 max-w-[85%] bg-cream shadow-xl flex flex-col transition-transform duration-500",
            mobileFiltersOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="flex items-center justify-between px-6 py-5 border-b border-line">
            <h2 className="font-serif text-xl">Filters</h2>
            <button
              onClick={() => setMobileFiltersOpen(false)}
              aria-label="Close filters"
              className="text-ink hover:text-gold"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto px-6 py-6">
            <FilterPanel />
          </div>
          <div className="px-6 py-5 border-t border-line">
            <button
              onClick={() => setMobileFiltersOpen(false)}
              className="w-full bg-ink text-cream py-4 text-xs uppercase tracking-[0.2em] font-medium hover:bg-gold transition-colors"
            >
              Show {filtered.length} Results
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
