import { useEffect, useMemo, useState } from "react"
import { useSearchParams, Link } from "react-router-dom"
import { SlidersHorizontal, X, ChevronDown } from "lucide-react"
import { products, categories } from "@/data/products"
import ProductCard from "@/components/ProductCard"
import { useImageLoader } from "@/hooks/useImageLoader"
import { cn } from "@/lib/utils"

const PRICE_BUCKETS = [
  { id: "under-50", label: "Under $50", min: 0, max: 50 },
  { id: "50-80", label: "$50 – $80", min: 50, max: 80 },
  { id: "over-80", label: "Over $80", min: 80, max: Infinity },
]

const MATERIALS = ["Gold", "Silver"]

const SORTS = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
]

export default function Shop() {
  const [params, setParams] = useSearchParams()
  const ref = useImageLoader([params.toString()])

  const activeCategory = params.get("category") || ""
  const activePrice = params.get("price") || ""
  const activeMaterial = params.get("material") || ""
  const sort = params.get("sort") || "featured"

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const setParam = (key, value) => {
    const next = new URLSearchParams(params)
    if (value) next.set(key, value)
    else next.delete(key)
    setParams(next, { replace: true })
  }

  const filtered = useMemo(() => {
    let list = [...products]
    if (activeCategory) list = list.filter((p) => p.category === activeCategory)
    if (activePrice) {
      const bucket = PRICE_BUCKETS.find((b) => b.id === activePrice)
      if (bucket) list = list.filter((p) => p.price >= bucket.min && p.price < bucket.max)
    }
    if (activeMaterial) {
      list = list.filter((p) => p.variants.includes(activeMaterial))
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
        break
    }
    return list
  }, [activeCategory, activePrice, activeMaterial, sort])

  const activeCount =
    (activeCategory ? 1 : 0) + (activePrice ? 1 : 0) + (activeMaterial ? 1 : 0)

  const clearAll = () => setParams({}, { replace: true })

  // Close mobile filters when route changes.
  useEffect(() => {
    setMobileFiltersOpen(false)
  }, [params.toString()])

  const FilterPanel = (
    <div className="space-y-9">
      {/* Category */}
      <div>
        <h3 className="text-xs uppercase tracking-widest2 text-espresso mb-4">
          Category
        </h3>
        <ul className="space-y-2.5">
          <li>
            <button
              type="button"
              onClick={() => setParam("category", "")}
              className={cn(
                "text-sm transition-colors",
                !activeCategory ? "text-gold" : "text-ink/70 hover:text-ink"
              )}
            >
              All Jewelry
            </button>
          </li>
          {categories.map((c) => (
            <li key={c.id}>
              <button
                type="button"
                onClick={() => setParam("category", c.id)}
                className={cn(
                  "text-sm transition-colors",
                  activeCategory === c.id ? "text-gold" : "text-ink/70 hover:text-ink"
                )}
              >
                {c.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Price */}
      <div>
        <h3 className="text-xs uppercase tracking-widest2 text-espresso mb-4">
          Price
        </h3>
        <ul className="space-y-2.5">
          {PRICE_BUCKETS.map((b) => (
            <li key={b.id}>
              <button
                type="button"
                onClick={() => setParam("price", activePrice === b.id ? "" : b.id)}
                className={cn(
                  "text-sm transition-colors",
                  activePrice === b.id ? "text-gold" : "text-ink/70 hover:text-ink"
                )}
              >
                {b.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Material */}
      <div>
        <h3 className="text-xs uppercase tracking-widest2 text-espresso mb-4">
          Material
        </h3>
        <ul className="space-y-2.5">
          {MATERIALS.map((m) => (
            <li key={m}>
              <button
                type="button"
                onClick={() => setParam("material", activeMaterial === m ? "" : m)}
                className={cn(
                  "text-sm transition-colors",
                  activeMaterial === m ? "text-gold" : "text-ink/70 hover:text-ink"
                )}
              >
                {m} Tone
              </button>
            </li>
          ))}
        </ul>
      </div>

      {activeCount > 0 && (
        <button
          type="button"
          onClick={clearAll}
          className="text-xs uppercase tracking-wide2 text-muted hover:text-gold underline underline-offset-4"
        >
          Clear all ({activeCount})
        </button>
      )}
    </div>
  )

  return (
    <div ref={ref} className="pt-16 md:pt-20">
      {/* Header */}
      <div className="border-b border-line">
        <div className="max-w-8xl mx-auto px-5 md:px-8 py-12 md:py-16 text-center">
          <p className="text-xs uppercase tracking-widest2 text-gold mb-3">
            The Collection
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-espresso">
            {activeCategory || "All Jewelry"}
          </h1>
          <p className="mt-4 text-sm text-muted max-w-md mx-auto">
            Demi-fine 18K gold plated pieces, designed in studio and made for
            everyday wear.
          </p>
        </div>
      </div>

      <div className="max-w-8xl mx-auto px-5 md:px-8 py-10 md:py-14">
        <div className="flex gap-10">
          {/* Sidebar — desktop */}
          <aside className="hidden md:block w-56 shrink-0">
            <div className="sticky top-28">{FilterPanel}</div>
          </aside>

          {/* Main */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-line">
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="md:hidden inline-flex items-center gap-2 text-xs uppercase tracking-wide2 text-ink"
              >
                <SlidersHorizontal className="w-4 h-4" strokeWidth={1.5} />
                Filters
                {activeCount > 0 && (
                  <span className="bg-gold text-cream text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                    {activeCount}
                  </span>
                )}
              </button>
              <p className="hidden md:block text-xs uppercase tracking-wide2 text-muted">
                {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
              </p>

              <label className="relative inline-flex items-center">
                <span className="text-xs uppercase tracking-wide2 text-muted mr-3">
                  Sort
                </span>
                <span className="relative">
                  <select
                    value={sort}
                    onChange={(e) => setParam("sort", e.target.value === "featured" ? "" : e.target.value)}
                    className="appearance-none bg-transparent border border-line text-ink text-xs uppercase tracking-wide2 pl-4 pr-9 py-2.5 focus:outline-none focus:border-gold cursor-pointer"
                  >
                    {SORTS.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="w-3.5 h-3.5 absolute right-3 top-1/2 -translate-y-1/2 text-ink pointer-events-none" />
                </span>
              </label>
            </div>

            {/* Grid */}
            {filtered.length === 0 ? (
              <div className="py-24 text-center">
                <p className="font-serif text-3xl text-espresso">No pieces match your filters</p>
                <button
                  type="button"
                  onClick={clearAll}
                  className="mt-6 text-xs uppercase tracking-wide2 text-gold underline underline-offset-4"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10 md:gap-x-6">
                {filtered.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <div className="md:hidden fixed inset-0 z-[80]">
          <div
            className="absolute inset-0 bg-espresso/40 backdrop-blur-[2px]"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full w-80 max-w-[85vw] bg-cream flex flex-col">
            <div className="flex items-center justify-between px-6 py-5 border-b border-line">
              <h2 className="font-serif text-xl text-espresso">Filters</h2>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                aria-label="Close filters"
                className="text-ink hover:text-gold"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-6 py-6">{FilterPanel}</div>
            <div className="px-6 py-5 border-t border-line">
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                className="w-full bg-espresso text-cream uppercase tracking-wide2 text-xs font-medium py-4"
              >
                Show {filtered.length} Results
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
