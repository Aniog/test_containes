import { useEffect, useMemo, useRef, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { products } from "@/data/products"
import { useReveal } from "@/lib/useReveal"
import ProductCard from "@/components/product/ProductCard"
import { SlidersHorizontal, X } from "lucide-react"
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
  const [searchParams, setSearchParams] = useSearchParams()
  const ref = useRef(null)
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const initialCategory = searchParams.get("category") || ""
  const [selectedCats, setSelectedCats] = useState(
    initialCategory ? [initialCategory] : []
  )
  const [selectedPrices, setSelectedPrices] = useState([])
  const [selectedMats, setSelectedMats] = useState([])
  const [sort, setSort] = useState("featured")

  useReveal()

  useEffect(() => {
    const cat = searchParams.get("category")
    setSelectedCats(cat ? [cat] : [])
  }, [searchParams])

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      if (ref.current) ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => cancelAnimationFrame(frameId)
  }, [selectedCats, selectedPrices, selectedMats, sort])

  const toggle = (list, setter, value) => {
    setter((prev) =>
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
    setSearchParams({})
  }

  const FilterPanel = () => (
    <div className="space-y-9">
      <div>
        <h3 className="text-xs uppercase tracking-widest2 text-ink-800 mb-4">Category</h3>
        <div className="space-y-2.5">
          {CATEGORIES.map((c) => (
            <label key={c} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={selectedCats.includes(c)}
                onChange={() => toggle(selectedCats, setSelectedCats, c)}
                className="accent-gold w-4 h-4"
              />
              <span className="text-sm text-ink-600 group-hover:text-ink-800">{c}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xs uppercase tracking-widest2 text-ink-800 mb-4">Price</h3>
        <div className="space-y-2.5">
          {PRICE_BUCKETS.map((b) => (
            <label key={b.id} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={selectedPrices.includes(b.id)}
                onChange={() => toggle(selectedPrices, setSelectedPrices, b.id)}
                className="accent-gold w-4 h-4"
              />
              <span className="text-sm text-ink-600 group-hover:text-ink-800">{b.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xs uppercase tracking-widest2 text-ink-800 mb-4">Material</h3>
        <div className="space-y-2.5">
          {MATERIALS.map((m) => (
            <label key={m} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={selectedMats.includes(m)}
                onChange={() => toggle(selectedMats, setSelectedMats, m)}
                className="accent-gold w-4 h-4"
              />
              <span className="text-sm text-ink-600 group-hover:text-ink-800">{m}</span>
            </label>
          ))}
        </div>
      </div>

      <button
        onClick={clearAll}
        className="text-xs uppercase tracking-widest2 text-gold border-b border-gold pb-0.5 hover:text-gold-dark"
      >
        Clear All
      </button>
    </div>
  )

  return (
    <div ref={ref} className="pt-16 md:pt-20">
      {/* Header */}
      <div className="border-b border-ink-200">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-12 md:py-16 text-center">
          <p className="text-xs uppercase tracking-widest3 text-gold mb-3">The Collection</p>
          <h1 className="font-serif text-4xl md:text-6xl text-ink-800">Shop All Jewelry</h1>
          <p className="mt-3 text-sm text-ink-500 max-w-md mx-auto">
            Demi-fine gold pieces, designed to be worn and treasured.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 py-10">
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
                className="md:hidden flex items-center gap-2 text-xs uppercase tracking-widest2 text-ink-700 border border-ink-300 px-4 py-2.5"
              >
                <SlidersHorizontal size={14} /> Filters
              </button>
              <p className="hidden md:block text-sm text-ink-500">
                {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
              </p>
              <div className="relative">
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="appearance-none bg-transparent border border-ink-300 text-xs uppercase tracking-widest2 text-ink-700 px-5 py-2.5 pr-9 focus:outline-none focus:border-gold cursor-pointer"
                >
                  {SORTS.map((s) => (
                    <option key={s.id} value={s.id}>{s.label}</option>
                  ))}
                </select>
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-ink-500 text-xs">▾</span>
              </div>
            </div>

            {filtered.length === 0 ? (
              <div className="py-24 text-center">
                <p className="font-serif text-2xl text-ink-700">No pieces match your filters.</p>
                <button
                  onClick={clearAll}
                  className="mt-4 text-xs uppercase tracking-widest2 text-gold border-b border-gold pb-0.5"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10">
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
          <div className="absolute inset-0 bg-ink-900/40" onClick={() => setMobileFiltersOpen(false)} />
          <div className="absolute left-0 top-0 h-full w-80 max-w-[85vw] bg-cream p-6 overflow-y-auto animate-slide-in">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-2xl text-ink-800">Filters</h2>
              <button onClick={() => setMobileFiltersOpen(false)} className="text-ink-600">
                <X size={22} />
              </button>
            </div>
            <FilterPanel />
            <button
              onClick={() => setMobileFiltersOpen(false)}
              className="mt-8 w-full bg-ink-800 text-cream text-xs uppercase tracking-widest2 py-4"
            >
              Show {filtered.length} Results
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
