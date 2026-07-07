import { useState, useMemo, useRef, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { SlidersHorizontal, X, Check } from "lucide-react"
import { products } from "@/data/products"
import ProductCard from "@/components/ProductCard"
import { useStrkImages } from "@/components/ui/StrkImage"
import { cn } from "@/lib/utils"

const categoryOptions = ["Earrings", "Necklaces", "Huggies", "Sets"]
const materialOptions = ["Gold", "Silver"]
const priceRanges = [
  { id: "under-50", label: "Under $50", min: 0, max: 50 },
  { id: "50-80", label: "$50 – $80", min: 50, max: 80 },
  { id: "80-plus", label: "$80 & above", min: 80, max: Infinity },
]

const sortOptions = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const containerRef = useRef(null)

  const initialCategory = searchParams.get("category") || ""
  const [selectedCategories, setSelectedCategories] = useState(
    initialCategory ? [initialCategory] : []
  )
  const [selectedMaterials, setSelectedMaterials] = useState([])
  const [selectedPrices, setSelectedPrices] = useState([])
  const [sort, setSort] = useState("featured")
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  // Sync category from URL
  useEffect(() => {
    const cat = searchParams.get("category") || ""
    setSelectedCategories(cat ? [cat] : [])
  }, [searchParams])

  useStrkImages(containerRef, [selectedCategories, selectedMaterials, selectedPrices, sort])

  const toggle = (value, list, setter) => {
    setter(
      list.includes(value)
        ? list.filter((v) => v !== value)
        : [...list, value]
    )
  }

  const filtered = useMemo(() => {
    let result = products.filter((p) => {
      if (selectedCategories.length && !selectedCategories.includes(p.category)) return false
      if (selectedMaterials.length) {
        const pMaterials = [p.tone]
        if (!selectedMaterials.some((m) => pMaterials.includes(m.toLowerCase()))) return false
      }
      if (selectedPrices.length) {
        const matches = selectedPrices.some((id) => {
          const range = priceRanges.find((r) => r.id === id)
          return range && p.price >= range.min && p.price < range.max
        })
        if (!matches) return false
      }
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
  }, [selectedCategories, selectedMaterials, selectedPrices, sort])

  const clearAll = () => {
    setSelectedCategories([])
    setSelectedMaterials([])
    setSelectedPrices([])
    setSearchParams({})
  }

  const hasFilters =
    selectedCategories.length || selectedMaterials.length || selectedPrices.length

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="text-xs uppercase tracking-widest2 font-semibold text-ink-900 mb-4">
          Category
        </h3>
        <ul className="space-y-2.5">
          {categoryOptions.map((cat) => (
            <li key={cat}>
              <button
                type="button"
                onClick={() => toggle(cat, selectedCategories, setSelectedCategories)}
                className="flex items-center gap-2.5 text-sm text-ink-600 hover:text-ink-900 transition-colors"
              >
                <span
                  className={cn(
                    "w-4 h-4 border flex items-center justify-center transition-colors",
                    selectedCategories.includes(cat)
                      ? "bg-gold-500 border-gold-500"
                      : "border-ink-300"
                  )}
                >
                  {selectedCategories.includes(cat) && (
                    <Check className="w-3 h-3 text-cream-50" />
                  )}
                </span>
                {cat}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Price */}
      <div>
        <h3 className="text-xs uppercase tracking-widest2 font-semibold text-ink-900 mb-4">
          Price
        </h3>
        <ul className="space-y-2.5">
          {priceRanges.map((range) => (
            <li key={range.id}>
              <button
                type="button"
                onClick={() => toggle(range.id, selectedPrices, setSelectedPrices)}
                className="flex items-center gap-2.5 text-sm text-ink-600 hover:text-ink-900 transition-colors"
              >
                <span
                  className={cn(
                    "w-4 h-4 border flex items-center justify-center transition-colors",
                    selectedPrices.includes(range.id)
                      ? "bg-gold-500 border-gold-500"
                      : "border-ink-300"
                  )}
                >
                  {selectedPrices.includes(range.id) && (
                    <Check className="w-3 h-3 text-cream-50" />
                  )}
                </span>
                {range.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Material */}
      <div>
        <h3 className="text-xs uppercase tracking-widest2 font-semibold text-ink-900 mb-4">
          Material
        </h3>
        <ul className="space-y-2.5">
          {materialOptions.map((mat) => (
            <li key={mat}>
              <button
                type="button"
                onClick={() => toggle(mat.toLowerCase(), selectedMaterials, setSelectedMaterials)}
                className="flex items-center gap-2.5 text-sm text-ink-600 hover:text-ink-900 transition-colors"
              >
                <span
                  className={cn(
                    "w-4 h-4 border flex items-center justify-center transition-colors",
                    selectedMaterials.includes(mat.toLowerCase())
                      ? "bg-gold-500 border-gold-500"
                      : "border-ink-300"
                  )}
                >
                  {selectedMaterials.includes(mat.toLowerCase()) && (
                    <Check className="w-3 h-3 text-cream-50" />
                  )}
                </span>
                {mat}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {hasFilters ? (
        <button
          type="button"
          onClick={clearAll}
          className="text-xs uppercase tracking-widest2 text-gold-600 hover:text-gold-700 transition-colors"
        >
          Clear All Filters
        </button>
      ) : null}
    </div>
  )

  return (
    <div ref={containerRef} className="pt-16 md:pt-20 min-h-screen bg-cream-50">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-10 md:pt-14 pb-8 border-b border-ink-200/50">
        <p className="text-xs uppercase tracking-widest3 text-gold-600 mb-3">
          The Collection
        </p>
        <h1 className="font-serif text-4xl md:text-5xl text-ink-900 font-light">
          Shop All
        </h1>
        <p className="mt-3 text-ink-500 text-sm max-w-xl">
          Demi-fine gold jewelry, crafted to be treasured and worn every day.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-8 md:py-12">
        <div className="flex gap-10">
          {/* Sidebar (desktop) */}
          <aside className="hidden md:block w-56 shrink-0">
            <FilterContent />
          </aside>

          {/* Main */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8">
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="md:hidden inline-flex items-center gap-2 text-xs uppercase tracking-widest2 text-ink-800 border border-ink-300 px-4 py-2.5"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                Filters
              </button>
              <p className="hidden md:block text-sm text-ink-500">
                {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
              </p>
              <div className="flex items-center gap-3">
                <label htmlFor="sort" className="text-xs uppercase tracking-widest2 text-ink-500 hidden sm:block">
                  Sort
                </label>
                <select
                  id="sort"
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="text-sm text-ink-800 bg-transparent border border-ink-300 px-3 py-2 focus:outline-none focus:border-gold-500 transition-colors cursor-pointer"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.id} value={opt.id}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Grid */}
            {filtered.length === 0 ? (
              <div className="text-center py-24">
                <p className="font-serif text-2xl text-ink-800 mb-2">No pieces found</p>
                <p className="text-sm text-ink-500 mb-6">Try adjusting your filters.</p>
                <button
                  type="button"
                  onClick={clearAll}
                  className="text-xs uppercase tracking-widest2 text-gold-600 border-b border-gold-500 pb-1"
                >
                  Clear All Filters
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
            className="absolute inset-0 bg-ink-900/50 backdrop-blur-sm"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute top-0 left-0 bottom-0 w-80 max-w-[85%] bg-cream-50 flex flex-col">
            <div className="flex items-center justify-between px-6 py-5 border-b border-ink-200/50">
              <h2 className="font-serif text-xl text-ink-900">Filters</h2>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                className="text-ink-500"
                aria-label="Close filters"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-6 py-6">
              <FilterContent />
            </div>
            <div className="px-6 py-4 border-t border-ink-200/50">
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                className="w-full bg-gold-500 text-cream-50 text-xs uppercase tracking-widest2 font-medium py-3.5 hover:bg-gold-600 transition-colors"
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
