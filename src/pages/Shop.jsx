import { useMemo, useState, useEffect, useRef } from "react"
import { useSearchParams } from "react-router-dom"
import { SlidersHorizontal, X, ChevronDown } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { products } from "@/data/products"
import ProductCard from "@/components/product/ProductCard"
import { cn } from "@/lib/utils"

const CATEGORIES = ["Earrings", "Necklaces", "Huggies"]
const MATERIALS = ["18K Gold Plated"]
const PRICE_BUCKETS = [
  { id: "under50", label: "Under $50", min: 0, max: 50 },
  { id: "50to80", label: "$50 – $80", min: 50, max: 80 },
  { id: "over80", label: "Over $80", min: 80, max: Infinity },
]

const SORTS = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
]

export default function Shop() {
  const [params, setParams] = useSearchParams()
  const [selectedCats, setSelectedCats] = useState(
    params.get("category") ? [params.get("category")] : []
  )
  const [selectedPrices, setSelectedPrices] = useState([])
  const [selectedMats, setSelectedMats] = useState([])
  const [sort, setSort] = useState("featured")
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [selectedCats, selectedPrices, selectedMats, sort, mobileFiltersOpen])

  // Sync category from URL
  useEffect(() => {
    const cat = params.get("category")
    if (cat) setSelectedCats([cat])
  }, [params])

  const toggle = (list, setList, value) => {
    setList((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    )
  }

  const filtered = useMemo(() => {
    let result = products.filter((p) => {
      if (selectedCats.length && !selectedCats.includes(p.category)) return false
      if (selectedMats.length && !selectedMats.includes(p.material)) return false
      if (selectedPrices.length) {
        const match = selectedPrices.some((id) => {
          const b = PRICE_BUCKETS.find((x) => x.id === id)
          return b && p.price >= b.min && p.price < b.max
        })
        if (!match) return false
      }
      return true
    })

    if (sort === "price-asc") result = [...result].sort((a, b) => a.price - b.price)
    if (sort === "price-desc") result = [...result].sort((a, b) => b.price - a.price)
    if (sort === "rating") result = [...result].sort((a, b) => b.rating - a.rating)

    return result
  }, [selectedCats, selectedPrices, selectedMats, sort])

  const clearAll = () => {
    setSelectedCats([])
    setSelectedPrices([])
    setSelectedMats([])
    setParams({})
  }

  const FilterPanel = () => (
    <div className="space-y-9">
      <div>
        <h3 className="text-[11px] uppercase tracking-[0.2em] font-medium mb-4">
          Category
        </h3>
        <ul className="space-y-2.5">
          {CATEGORIES.map((c) => (
            <li key={c}>
              <label className="flex items-center gap-3 cursor-pointer group">
                <span
                  className={cn(
                    "w-4 h-4 border flex items-center justify-center transition-colors",
                    selectedCats.includes(c) ? "bg-ink border-ink" : "border-stone group-hover:border-ink"
                  )}
                >
                  {selectedCats.includes(c) && (
                    <span className="w-2 h-2 bg-ivory" />
                  )}
                </span>
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={selectedCats.includes(c)}
                  onChange={() => toggle(selectedCats, setSelectedCats, c)}
                />
                <span className="text-sm text-ink group-hover:text-gold transition-colors">
                  {c}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-[11px] uppercase tracking-[0.2em] font-medium mb-4">
          Price
        </h3>
        <ul className="space-y-2.5">
          {PRICE_BUCKETS.map((b) => (
            <li key={b.id}>
              <label className="flex items-center gap-3 cursor-pointer group">
                <span
                  className={cn(
                    "w-4 h-4 border flex items-center justify-center transition-colors",
                    selectedPrices.includes(b.id) ? "bg-ink border-ink" : "border-stone group-hover:border-ink"
                  )}
                >
                  {selectedPrices.includes(b.id) && (
                    <span className="w-2 h-2 bg-ivory" />
                  )}
                </span>
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={selectedPrices.includes(b.id)}
                  onChange={() => toggle(selectedPrices, setSelectedPrices, b.id)}
                />
                <span className="text-sm text-ink group-hover:text-gold transition-colors">
                  {b.label}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-[11px] uppercase tracking-[0.2em] font-medium mb-4">
          Material
        </h3>
        <ul className="space-y-2.5">
          {MATERIALS.map((m) => (
            <li key={m}>
              <label className="flex items-center gap-3 cursor-pointer group">
                <span
                  className={cn(
                    "w-4 h-4 border flex items-center justify-center transition-colors",
                    selectedMats.includes(m) ? "bg-ink border-ink" : "border-stone group-hover:border-ink"
                  )}
                >
                  {selectedMats.includes(m) && <span className="w-2 h-2 bg-ivory" />}
                </span>
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={selectedMats.includes(m)}
                  onChange={() => toggle(selectedMats, setSelectedMats, m)}
                />
                <span className="text-sm text-ink group-hover:text-gold transition-colors">
                  {m}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {(selectedCats.length || selectedPrices.length || selectedMats.length) > 0 && (
        <button
          onClick={clearAll}
          className="text-xs uppercase tracking-[0.18em] text-stone underline underline-offset-4 hover:text-ink transition-colors"
        >
          Clear All
        </button>
      )}
    </div>
  )

  return (
    <div ref={ref} className="pt-16 md:pt-20">
      {/* Header */}
      <div className="border-b border-line">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-12 md:py-16 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-3">
            The Collection
          </p>
          <h1 className="font-serif text-5xl md:text-6xl font-light">
            Shop All Jewelry
          </h1>
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
            <div className="flex items-center justify-between mb-8">
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="md:hidden inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] border border-line px-4 py-2.5"
              >
                <SlidersHorizontal width={14} /> Filters
              </button>
              <p className="hidden md:block text-sm text-stone">
                {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
              </p>
              <div className="relative">
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="appearance-none bg-transparent border border-line pl-4 pr-9 py-2.5 text-xs uppercase tracking-[0.15em] cursor-pointer focus:outline-none focus:border-ink"
                >
                  {SORTS.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.label}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  width={14}
                  className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-stone"
                />
              </div>
            </div>

            {filtered.length === 0 ? (
              <div className="py-24 text-center">
                <p className="font-serif text-2xl text-ink">No pieces match your filters.</p>
                <button
                  onClick={clearAll}
                  className="mt-4 text-xs uppercase tracking-[0.18em] text-gold underline underline-offset-4"
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
            className="absolute inset-0 bg-espresso/40 backdrop-blur-sm"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full w-80 max-w-[85vw] bg-ivory p-6 overflow-y-auto animate-fade-in">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-2xl">Filters</h2>
              <button onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters">
                <X width={20} />
              </button>
            </div>
            <FilterPanel />
            <button
              onClick={() => setMobileFiltersOpen(false)}
              className="mt-10 w-full bg-gold text-ivory py-3.5 text-xs uppercase tracking-[0.18em]"
            >
              Show {filtered.length} Results
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
