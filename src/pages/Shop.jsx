import { useMemo, useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { SlidersHorizontal, X } from "lucide-react"
import { products } from "@/data/products"
import ProductCard from "@/components/product/ProductCard"
import { useStrkImages } from "@/lib/useStrkImages"
import { cn } from "@/lib/utils"

const CATEGORIES = ["Earrings", "Necklaces", "Huggies"]
const MATERIALS = ["18K Gold Plated"]
const PRICE_RANGES = [
  { id: "under-50", label: "Under $50", min: 0, max: 50 },
  { id: "50-80", label: "$50 – $80", min: 50, max: 80 },
  { id: "over-80", label: "Over $80", min: 80, max: Infinity },
]
const SORTS = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const ref = useStrkImages([])

  const initialCategory = searchParams.get("category") || ""
  const [selectedCats, setSelectedCats] = useState(
    initialCategory ? [initialCategory] : []
  )
  const [selectedPrices, setSelectedPrices] = useState([])
  const [selectedMats, setSelectedMats] = useState([])
  const [sort, setSort] = useState("featured")
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  // Sync category from URL when it changes.
  useEffect(() => {
    const cat = searchParams.get("category") || ""
    setSelectedCats(cat ? [cat] : [])
  }, [searchParams])

  const toggle = (list, setList, value) => {
    setList((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    )
  }

  const filtered = useMemo(() => {
    let result = products.filter((p) => {
      const catOk =
        selectedCats.length === 0 || selectedCats.includes(p.category)
      const matOk =
        selectedMats.length === 0 || selectedMats.includes(p.material)
      const priceOk =
        selectedPrices.length === 0 ||
        selectedPrices.some((id) => {
          const range = PRICE_RANGES.find((r) => r.id === id)
          return range && p.price >= range.min && p.price < range.max
        })
      return catOk && matOk && priceOk
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
  }, [selectedCats, selectedPrices, selectedMats, sort])

  const clearAll = () => {
    setSelectedCats([])
    setSelectedPrices([])
    setSelectedMats([])
    setSearchParams({})
  }

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="text-xs uppercase tracking-widest2 text-ink mb-4">
          Category
        </h3>
        <ul className="space-y-2.5">
          {CATEGORIES.map((c) => (
            <li key={c}>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={selectedCats.includes(c)}
                  onChange={() => toggle(selectedCats, setSelectedCats, c)}
                  className="accent-champagne w-4 h-4"
                />
                <span className="text-sm text-stone group-hover:text-ink transition-colors">
                  {c}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Price */}
      <div>
        <h3 className="text-xs uppercase tracking-widest2 text-ink mb-4">
          Price
        </h3>
        <ul className="space-y-2.5">
          {PRICE_RANGES.map((r) => (
            <li key={r.id}>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={selectedPrices.includes(r.id)}
                  onChange={() => toggle(selectedPrices, setSelectedPrices, r.id)}
                  className="accent-champagne w-4 h-4"
                />
                <span className="text-sm text-stone group-hover:text-ink transition-colors">
                  {r.label}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Material */}
      <div>
        <h3 className="text-xs uppercase tracking-widest2 text-ink mb-4">
          Material
        </h3>
        <ul className="space-y-2.5">
          {MATERIALS.map((m) => (
            <li key={m}>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={selectedMats.includes(m)}
                  onChange={() => toggle(selectedMats, setSelectedMats, m)}
                  className="accent-champagne w-4 h-4"
                />
                <span className="text-sm text-stone group-hover:text-ink transition-colors">
                  {m}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={clearAll}
        className="text-xs uppercase tracking-widest2 text-champagne border-b border-champagne pb-0.5 hover:text-champagne-deep transition-colors"
      >
        Clear All
      </button>
    </div>
  )

  return (
    <div ref={ref} className="pt-16 md:pt-20">
      {/* Header */}
      <div className="border-b border-line">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16 text-center">
          <p className="text-xs uppercase tracking-widest2 text-champagne mb-3">
            The Collection
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-ink">
            Shop All Jewelry
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-10 md:py-14">
        <div className="flex gap-10">
          {/* Sidebar - desktop */}
          <aside className="hidden md:block w-56 shrink-0">
            <FilterContent />
          </aside>

          {/* Main */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-line">
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="md:hidden flex items-center gap-2 text-xs uppercase tracking-widest2 text-ink"
              >
                <SlidersHorizontal className="w-4 h-4" /> Filters
              </button>
              <p className="hidden md:block text-xs uppercase tracking-widest2 text-stone">
                {filtered.length} {filtered.length === 1 ? "Piece" : "Pieces"}
              </p>
              <div className="flex items-center gap-2">
                <label className="text-xs uppercase tracking-widest2 text-stone">
                  Sort
                </label>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="bg-transparent text-xs uppercase tracking-wider text-ink border-b border-line py-1 focus:outline-none focus:border-champagne cursor-pointer"
                >
                  {SORTS.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Grid */}
            {filtered.length === 0 ? (
              <div className="py-24 text-center">
                <p className="font-serif text-2xl text-ink mb-2">
                  No pieces match your filters
                </p>
                <button
                  onClick={clearAll}
                  className="text-xs uppercase tracking-widest2 text-champagne border-b border-champagne pb-0.5"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
            className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute top-0 left-0 h-full w-80 max-w-[85%] bg-cream p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-xl uppercase tracking-widest3">
                Filters
              </h2>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                aria-label="Close filters"
              >
                <X className="w-5 h-5 text-ink" />
              </button>
            </div>
            <FilterContent />
            <button
              onClick={() => setMobileFiltersOpen(false)}
              className="mt-8 w-full bg-champagne text-cream py-4 text-xs uppercase tracking-widest2 hover:bg-champagne-deep transition-colors"
            >
              Show {filtered.length} Results
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
