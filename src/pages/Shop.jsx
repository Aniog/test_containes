import { useMemo, useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { SlidersHorizontal, X, ChevronDown } from "lucide-react"
import { products } from "@/data/products"
import { useStrkImages } from "@/lib/useStrkImages"
import { cn } from "@/lib/utils"
import ProductCard from "@/components/product/ProductCard"

const CATEGORIES = ["All", "Earrings", "Necklaces"]
const MATERIALS = ["18K Gold Plated"]
const PRICE_RANGES = [
  { label: "All Prices", min: 0, max: Infinity },
  { label: "Under $50", min: 0, max: 50 },
  { label: "$50 – $100", min: 50, max: 100 },
  { label: "Over $100", min: 100, max: Infinity },
]

const SORTS = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const ref = useStrkImages([])

  const initialCategory = searchParams.get("category") || "All"
  const [category, setCategory] = useState(
    CATEGORIES.includes(initialCategory) ? initialCategory : "All"
  )
  const [priceRange, setPriceRange] = useState(PRICE_RANGES[0])
  const [material, setMaterial] = useState("All")
  const [sort, setSort] = useState("featured")
  const [filtersOpen, setFiltersOpen] = useState(false)

  // Sync category from URL (e.g. when navigating from nav/footer)
  useEffect(() => {
    const c = searchParams.get("category")
    if (c && CATEGORIES.includes(c)) setCategory(c)
    else if (!c) setCategory("All")
  }, [searchParams])

  const updateCategory = (c) => {
    setCategory(c)
    const params = new URLSearchParams(searchParams)
    if (c === "All") params.delete("category")
    else params.set("category", c)
    setSearchParams(params, { replace: true })
  }

  const filtered = useMemo(() => {
    let list = products.filter((p) => {
      if (category !== "All" && p.category !== category) return false
      if (p.price < priceRange.min || p.price > priceRange.max) return false
      if (material !== "All" && p.material !== material) return false
      return true
    })
    switch (sort) {
      case "price-asc":
        list = [...list].sort((a, b) => a.price - b.price)
        break
      case "price-desc":
        list = [...list].sort((a, b) => b.price - a.price)
        break
      case "rating":
        list = [...list].sort((a, b) => b.rating - a.rating)
        break
      default:
        break
    }
    return list
  }, [category, priceRange, material, sort])

  const activeFilterCount =
    (category !== "All" ? 1 : 0) +
    (priceRange.label !== "All Prices" ? 1 : 0) +
    (material !== "All" ? 1 : 0)

  const clearFilters = () => {
    updateCategory("All")
    setPriceRange(PRICE_RANGES[0])
    setMaterial("All")
  }

  const FilterContent = () => (
    <div className="space-y-8">
      <div>
        <h3 className="mb-4 text-[11px] uppercase tracking-widest2 text-charcoal">Category</h3>
        <div className="space-y-2.5">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => updateCategory(c)}
              className={cn(
                "block text-sm transition-colors",
                category === c ? "text-gold" : "text-stone hover:text-charcoal"
              )}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-[11px] uppercase tracking-widest2 text-charcoal">Price</h3>
        <div className="space-y-2.5">
          {PRICE_RANGES.map((r) => (
            <button
              key={r.label}
              type="button"
              onClick={() => setPriceRange(r)}
              className={cn(
                "block text-sm transition-colors",
                priceRange.label === r.label ? "text-gold" : "text-stone hover:text-charcoal"
              )}
            >
              {r.label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-[11px] uppercase tracking-widest2 text-charcoal">Material</h3>
        <div className="space-y-2.5">
          <button
            type="button"
            onClick={() => setMaterial("All")}
            className={cn(
              "block text-sm transition-colors",
              material === "All" ? "text-gold" : "text-stone hover:text-charcoal"
            )}
          >
            All
          </button>
          {MATERIALS.map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => setMaterial(m)}
              className={cn(
                "block text-sm transition-colors",
                material === m ? "text-gold" : "text-stone hover:text-charcoal"
              )}
            >
              {m}
            </button>
          ))}
        </div>
      </div>

      {activeFilterCount > 0 && (
        <button
          type="button"
          onClick={clearFilters}
          className="text-[11px] uppercase tracking-widest2 text-stone underline hover:text-charcoal"
        >
          Clear All ({activeFilterCount})
        </button>
      )}
    </div>
  )

  return (
    <div ref={ref} className="pt-24 md:pt-28">
      {/* Header */}
      <div className="border-b border-sand">
        <div className="mx-auto max-w-7xl px-6 py-12 text-center md:px-10">
          <p className="text-[11px] uppercase tracking-widest3 text-gold">The Collection</p>
          <h1 className="mt-3 font-serif text-4xl text-charcoal md:text-5xl">Shop All</h1>
          <p className="mx-auto mt-4 max-w-md text-sm text-stone">
            Demi-fine gold jewelry, crafted to be treasured and made for everyday wear.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-10 md:px-10">
        {/* Toolbar */}
        <div className="mb-8 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => setFiltersOpen(true)}
            className="flex items-center gap-2 border border-sand px-4 py-2.5 text-[11px] uppercase tracking-widest2 text-charcoal lg:hidden"
          >
            <SlidersHorizontal size={14} />
            Filters
            {activeFilterCount > 0 && <span className="text-gold">({activeFilterCount})</span>}
          </button>

          <p className="hidden text-sm text-stone lg:block">
            {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
          </p>

          <div className="relative ml-auto">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="appearance-none border border-sand bg-cream py-2.5 pl-4 pr-10 text-[11px] uppercase tracking-widest2 text-charcoal focus:border-gold focus:outline-none"
            >
              {SORTS.map((s) => (
                <option key={s.value} value={s.value}>
                  Sort: {s.label}
                </option>
              ))}
            </select>
            <ChevronDown
              size={14}
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-stone"
            />
          </div>
        </div>

        <div className="flex gap-10">
          {/* Sidebar (desktop) */}
          <aside className="hidden w-56 shrink-0 lg:block">
            <FilterContent />
          </aside>

          {/* Grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="flex min-h-[40vh] flex-col items-center justify-center gap-3 text-center">
                <p className="font-serif text-2xl text-charcoal">No pieces found</p>
                <p className="text-sm text-stone">Try adjusting your filters.</p>
                <button
                  type="button"
                  onClick={clearFilters}
                  className="mt-2 text-[11px] uppercase tracking-widest2 text-gold hover:text-gold-deep"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {filtersOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div
            className="absolute inset-0 bg-ink/40"
            onClick={() => setFiltersOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full w-80 max-w-[85%] bg-cream p-6 overflow-y-auto">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="font-serif text-xl text-charcoal">Filters</h2>
              <button type="button" onClick={() => setFiltersOpen(false)} aria-label="Close filters">
                <X size={22} className="text-charcoal" />
              </button>
            </div>
            <FilterContent />
            <button
              type="button"
              onClick={() => setFiltersOpen(false)}
              className="mt-8 w-full bg-gold py-4 text-[11px] uppercase tracking-widest2 text-cream hover:bg-gold-deep"
            >
              Show {filtered.length} Results
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
