import { useEffect, useMemo, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { SlidersHorizontal, X, ChevronDown } from "lucide-react"
import { products } from "@/data/products"
import ProductCard from "@/components/product/ProductCard"
import { useStrkImages } from "@/hooks/useStrkImages"
import { cn } from "@/lib/utils"

const CATEGORY_OPTIONS = ["Earrings", "Necklaces", "Sets"]
const MATERIAL_OPTIONS = ["Gold", "Silver"]
const PRICE_RANGES = [
  { label: "Under $50", min: 0, max: 50 },
  { label: "$50 – $100", min: 50, max: 100 },
  { label: "All Prices", min: 0, max: Infinity },
]
const SORT_OPTIONS = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const containerRef = useStrkImages([])

  const [selectedCategories, setSelectedCategories] = useState(() => {
    const c = searchParams.get("category")
    return c ? [c] : []
  })
  const [selectedMaterials, setSelectedMaterials] = useState([])
  const [selectedPrice, setSelectedPrice] = useState(PRICE_RANGES[2])
  const [sort, setSort] = useState("featured")
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  // Sync category from URL
  useEffect(() => {
    const c = searchParams.get("category")
    setSelectedCategories(c ? [c] : [])
  }, [searchParams])

  const toggleCategory = (cat) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    )
  }

  const toggleMaterial = (mat) => {
    setSelectedMaterials((prev) =>
      prev.includes(mat) ? prev.filter((m) => m !== mat) : [...prev, mat]
    )
  }

  const clearAll = () => {
    setSelectedCategories([])
    setSelectedMaterials([])
    setSelectedPrice(PRICE_RANGES[2])
    setSearchParams({})
  }

  const filtered = useMemo(() => {
    let result = products.filter((p) => {
      if (selectedCategories.length > 0 && !selectedCategories.includes(p.category)) {
        return false
      }
      if (selectedMaterials.length > 0) {
        const hasMaterial = selectedMaterials.some((m) => p.tones.includes(m))
        if (!hasMaterial) return false
      }
      if (p.price < selectedPrice.min || p.price > selectedPrice.max) return false
      return true
    })

    switch (sort) {
      case "price-asc":
        result = [...result].sort((a, b) => a.price - b.price)
        break
      case "price-desc":
        result = [...result].sort((a, b) => b.price - a.price)
        break
      case "rating":
        result = [...result].sort((a, b) => b.rating - a.rating)
        break
      default:
        break
    }
    return result
  }, [selectedCategories, selectedMaterials, selectedPrice, sort])

  const activeFilterCount =
    selectedCategories.length + selectedMaterials.length + (selectedPrice.label !== "All Prices" ? 1 : 0)

  const FilterPanel = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="text-[11px] font-semibold uppercase tracking-widest2 text-charcoal">
          Category
        </h3>
        <div className="mt-4 space-y-3">
          {CATEGORY_OPTIONS.map((cat) => (
            <label key={cat} className="flex cursor-pointer items-center gap-3">
              <input
                type="checkbox"
                checked={selectedCategories.includes(cat)}
                onChange={() => toggleCategory(cat)}
                className="h-4 w-4 accent-gold"
              />
              <span className="text-sm text-stone">{cat}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="text-[11px] font-semibold uppercase tracking-widest2 text-charcoal">
          Material
        </h3>
        <div className="mt-4 space-y-3">
          {MATERIAL_OPTIONS.map((mat) => (
            <label key={mat} className="flex cursor-pointer items-center gap-3">
              <input
                type="checkbox"
                checked={selectedMaterials.includes(mat)}
                onChange={() => toggleMaterial(mat)}
                className="h-4 w-4 accent-gold"
              />
              <span className="text-sm text-stone">{mat} Tone</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="text-[11px] font-semibold uppercase tracking-widest2 text-charcoal">
          Price
        </h3>
        <div className="mt-4 space-y-3">
          {PRICE_RANGES.map((range) => (
            <label key={range.label} className="flex cursor-pointer items-center gap-3">
              <input
                type="radio"
                name="price"
                checked={selectedPrice.label === range.label}
                onChange={() => setSelectedPrice(range)}
                className="h-4 w-4 accent-gold"
              />
              <span className="text-sm text-stone">{range.label}</span>
            </label>
          ))}
        </div>
      </div>

      {activeFilterCount > 0 && (
        <button
          type="button"
          onClick={clearAll}
          className="text-[11px] font-medium uppercase tracking-widest2 text-gold-deep transition-colors hover:text-gold"
        >
          Clear All Filters
        </button>
      )}
    </div>
  )

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      {/* Page header */}
      <div className="border-b border-sand">
        <div className="mx-auto max-w-7xl px-6 py-12 text-center md:px-10 md:py-16">
          <p className="text-[11px] font-medium uppercase tracking-widest3 text-gold">
            The Collection
          </p>
          <h1 className="mt-3 font-serif text-4xl font-light text-charcoal md:text-5xl">
            Shop All Jewelry
          </h1>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-stone">
            Demi-fine 18K gold plated pieces, designed to be treasured and worn
            every day.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-10 md:px-10">
        {/* Toolbar */}
        <div className="mb-8 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => setMobileFiltersOpen(true)}
            className="flex items-center gap-2 border border-sand px-4 py-2.5 text-[11px] font-medium uppercase tracking-widest2 text-charcoal lg:hidden"
          >
            <SlidersHorizontal width={14} height={14} />
            Filters
            {activeFilterCount > 0 && (
              <span className="flex h-4 min-w-4 items-center justify-center rounded-full bg-gold px-1 text-[9px] text-cream">
                {activeFilterCount}
              </span>
            )}
          </button>

          <p className="hidden text-sm text-stone lg:block">
            {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
          </p>

          <div className="relative ml-auto">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="appearance-none border border-sand bg-cream py-2.5 pl-4 pr-10 text-[11px] font-medium uppercase tracking-widest2 text-charcoal focus:border-gold focus:outline-none"
            >
              {SORT_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <ChevronDown
              width={14}
              height={14}
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-stone"
            />
          </div>
        </div>

        <div className="flex gap-10">
          {/* Sidebar - desktop */}
          <aside className="hidden w-56 flex-shrink-0 lg:block">
            <FilterPanel />
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-24 text-center">
                <p className="font-serif text-2xl text-charcoal">No pieces found</p>
                <p className="mt-2 text-sm text-stone">
                  Try adjusting your filters to discover more.
                </p>
                <button
                  type="button"
                  onClick={clearAll}
                  className="mt-6 border border-charcoal px-8 py-3 text-[11px] font-medium uppercase tracking-widest2 text-charcoal transition-colors hover:bg-charcoal hover:text-cream"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 md:gap-x-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-[80] lg:hidden">
          <div
            className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute right-0 top-0 flex h-full w-80 max-w-[85vw] flex-col bg-cream">
            <div className="flex items-center justify-between border-b border-sand px-6 py-5">
              <h2 className="font-serif text-xl uppercase tracking-widest2 text-charcoal">
                Filters
              </h2>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                aria-label="Close filters"
                className="text-charcoal"
              >
                <X width={20} height={20} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-6 py-6">
              <FilterPanel />
            </div>
            <div className="border-t border-sand px-6 py-4">
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                className={cn(
                  "w-full bg-gold py-4 text-[11px] font-medium uppercase tracking-widest2 text-cream transition-colors hover:bg-gold-deep"
                )}
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
