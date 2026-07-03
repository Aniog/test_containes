import { useMemo, useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { SlidersHorizontal, X, ChevronDown } from "lucide-react"
import { PRODUCTS, CATEGORIES } from "@/data/products"
import ProductCard from "@/components/product/ProductCard"
import { useStrkImages } from "@/hooks/useStrkImages"
import { cn } from "@/lib/utils"

const PRICE_RANGES = [
  { id: "all", label: "All Prices", min: 0, max: Infinity },
  { id: "under50", label: "Under $50", min: 0, max: 49 },
  { id: "50to80", label: "$50 – $80", min: 50, max: 80 },
  { id: "over80", label: "Over $80", min: 81, max: Infinity },
]

const MATERIALS = ["Gold", "Silver"]

const SORT_OPTIONS = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const ref = useStrkImages([])

  const initialCategory = searchParams.get("category") || "all"
  const query = searchParams.get("q") || ""

  const [category, setCategory] = useState(initialCategory)
  const [priceRange, setPriceRange] = useState("all")
  const [selectedMaterials, setSelectedMaterials] = useState([])
  const [sort, setSort] = useState("featured")
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  // Keep category in sync with URL changes (e.g. nav clicks).
  useEffect(() => {
    setCategory(searchParams.get("category") || "all")
  }, [searchParams])

  const filtered = useMemo(() => {
    let list = [...PRODUCTS]

    if (category !== "all") {
      list = list.filter((p) => p.category === category)
    }

    const range = PRICE_RANGES.find((r) => r.id === priceRange)
    if (range) {
      list = list.filter((p) => p.price >= range.min && p.price <= range.max)
    }

    if (selectedMaterials.length > 0) {
      list = list.filter((p) =>
        p.variants.some((v) => selectedMaterials.includes(v))
      )
    }

    if (query) {
      const q = query.toLowerCase()
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.type.toLowerCase().includes(q) ||
          p.shortDesc.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
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
        break
    }

    return list
  }, [category, priceRange, selectedMaterials, sort, query])

  const toggleMaterial = (m) => {
    setSelectedMaterials((current) =>
      current.includes(m) ? current.filter((x) => x !== m) : [...current, m]
    )
  }

  const updateCategory = (cat) => {
    setCategory(cat)
    const next = new URLSearchParams(searchParams)
    if (cat === "all") next.delete("category")
    else next.set("category", cat)
    setSearchParams(next, { replace: true })
  }

  const clearAll = () => {
    setCategory("all")
    setPriceRange("all")
    setSelectedMaterials([])
    setSort("featured")
    setSearchParams({}, { replace: true })
  }

  const activeFilterCount =
    (category !== "all" ? 1 : 0) +
    (priceRange !== "all" ? 1 : 0) +
    selectedMaterials.length

  const FilterPanel = (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="text-[11px] uppercase tracking-[0.25em] text-ink mb-4">Category</h3>
        <ul className="space-y-2.5">
          <li>
            <button
              type="button"
              onClick={() => updateCategory("all")}
              className={cn(
                "text-sm transition-colors",
                category === "all" ? "text-gold" : "text-stone hover:text-ink"
              )}
            >
              All Jewelry
            </button>
          </li>
          {CATEGORIES.map((c) => (
            <li key={c.id}>
              <button
                type="button"
                onClick={() => updateCategory(c.id)}
                className={cn(
                  "text-sm transition-colors",
                  category === c.id ? "text-gold" : "text-stone hover:text-ink"
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
        <h3 className="text-[11px] uppercase tracking-[0.25em] text-ink mb-4">Price</h3>
        <ul className="space-y-2.5">
          {PRICE_RANGES.map((r) => (
            <li key={r.id}>
              <button
                type="button"
                onClick={() => setPriceRange(r.id)}
                className={cn(
                  "text-sm transition-colors",
                  priceRange === r.id ? "text-gold" : "text-stone hover:text-ink"
                )}
              >
                {r.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Material */}
      <div>
        <h3 className="text-[11px] uppercase tracking-[0.25em] text-ink mb-4">Material</h3>
        <ul className="space-y-2.5">
          {MATERIALS.map((m) => (
            <li key={m}>
              <label className="flex items-center gap-3 cursor-pointer group">
                <span
                  className={cn(
                    "w-4 h-4 border flex items-center justify-center transition-colors",
                    selectedMaterials.includes(m)
                      ? "bg-ink border-ink"
                      : "border-sand group-hover:border-ink"
                  )}
                >
                  {selectedMaterials.includes(m) && (
                    <span className="w-2 h-2 bg-cream" />
                  )}
                </span>
                <input
                  type="checkbox"
                  checked={selectedMaterials.includes(m)}
                  onChange={() => toggleMaterial(m)}
                  className="sr-only"
                />
                <span
                  className={cn(
                    "text-sm transition-colors",
                    selectedMaterials.includes(m) ? "text-ink" : "text-stone group-hover:text-ink"
                  )}
                >
                  {m} Tone
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {activeFilterCount > 0 && (
        <button
          type="button"
          onClick={clearAll}
          className="text-[11px] uppercase tracking-[0.2em] text-stone hover:text-gold transition-colors border-b border-sand pb-1"
        >
          Clear All ({activeFilterCount})
        </button>
      )}
    </div>
  )

  return (
    <div ref={ref} className="pt-16 md:pt-20">
      {/* Header */}
      <div className="border-b border-sand">
        <div className="mx-auto max-w-8xl px-5 md:px-8 py-12 md:py-16 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-stone mb-3">
            The Collection
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-ink">
            {query ? `Results for “${query}”` : "Shop All Jewelry"}
          </h1>
          <p className="mt-4 text-stone max-w-md mx-auto">
            Demi-fine 18K gold plated pieces, designed to layer and last.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-8xl px-5 md:px-8 py-10">
        <div className="flex gap-10">
          {/* Sidebar (desktop) */}
          <aside className="hidden lg:block w-56 shrink-0">
            <div className="sticky top-28">{FilterPanel}</div>
          </aside>

          {/* Main */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between gap-4 mb-8 pb-4 border-b border-sand">
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(true)}
                  className="lg:hidden flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-ink"
                >
                  <SlidersHorizontal className="w-4 h-4" />
                  Filters
                  {activeFilterCount > 0 && (
                    <span className="bg-ink text-cream text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                      {activeFilterCount}
                    </span>
                  )}
                </button>
                <p className="hidden lg:block text-sm text-stone">
                  {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
                </p>
              </div>

              {/* Sort */}
              <div className="relative">
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="appearance-none bg-transparent border border-sand text-sm text-ink pl-4 pr-9 py-2.5 cursor-pointer outline-none hover:border-ink transition-colors"
                >
                  {SORT_OPTIONS.map((o) => (
                    <option key={o.id} value={o.id}>
                      {o.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-stone absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Grid */}
            {filtered.length === 0 ? (
              <div className="py-24 text-center">
                <p className="font-serif text-2xl text-ink">No pieces match your filters</p>
                <p className="mt-3 text-sm text-stone">Try adjusting or clearing your filters.</p>
                <button
                  type="button"
                  onClick={clearAll}
                  className="mt-6 inline-block text-[11px] uppercase tracking-[0.3em] text-ink border-b border-gold pb-1 hover:text-gold transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-10 md:gap-x-6">
                {filtered.map((p, i) => (
                  <ProductCard key={p.id} product={p} index={i} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <div className="lg:hidden fixed inset-0 z-[80]">
          <div
            className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-cream shadow-2xl flex flex-col">
            <div className="flex items-center justify-between px-6 py-5 border-b border-sand">
              <h2 className="font-serif text-2xl text-ink">Filters</h2>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                aria-label="Close filters"
                className="text-ink hover:text-gold transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-6 py-6">{FilterPanel}</div>
            <div className="border-t border-sand px-6 py-4">
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                className="w-full bg-ink text-cream py-4 text-[11px] uppercase tracking-[0.3em] hover:bg-gold-deep transition-colors"
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
