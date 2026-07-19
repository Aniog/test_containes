import { useEffect, useMemo, useRef, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { SlidersHorizontal, X } from "lucide-react"
import { products } from "@/data/products"
import ProductCard from "@/components/product/ProductCard"
import { cn } from "@/lib/utils"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

const CATEGORIES = ["Earrings", "Necklaces", "Huggies"]
const MATERIALS = ["18K Gold Plated"]
const PRICE_BUCKETS = [
  { id: "under50", label: "Under $50", test: (p) => p.price < 50 },
  { id: "50to80", label: "$50 – $80", test: (p) => p.price >= 50 && p.price <= 80 },
  { id: "over80", label: "Over $80", test: (p) => p.price > 80 },
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

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (ref.current) {
        ImageHelper.loadImages(strkImgConfig, ref.current)
      }
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  const initialCategory = searchParams.get("category") || ""
  const [selectedCats, setSelectedCats] = useState(
    initialCategory ? [initialCategory] : []
  )
  const [selectedPrices, setSelectedPrices] = useState([])
  const [selectedMats, setSelectedMats] = useState([])
  const [sort, setSort] = useState("featured")
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  // Sync category from URL when it changes
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
    let list = products.filter((p) => {
      if (selectedCats.length && !selectedCats.includes(p.category)) return false
      if (selectedMats.length && !selectedMats.includes(p.material)) return false
      if (selectedPrices.length) {
        const matches = selectedPrices.some((id) => {
          const bucket = PRICE_BUCKETS.find((b) => b.id === id)
          return bucket ? bucket.test(p) : false
        })
        if (!matches) return false
      }
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
  }, [selectedCats, selectedMats, selectedPrices, sort])

  const clearAll = () => {
    setSelectedCats([])
    setSelectedPrices([])
    setSelectedMats([])
    setSearchParams({})
  }

  const FilterContent = () => (
    <div className="space-y-10">
      <div>
        <h3 className="text-[11px] uppercase tracking-[0.25em] text-espresso font-medium mb-4">
          Category
        </h3>
        <div className="space-y-3">
          {CATEGORIES.map((c) => (
            <label key={c} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={selectedCats.includes(c)}
                onChange={() => toggle(selectedCats, setSelectedCats, c)}
                className="accent-gold w-4 h-4"
              />
              <span className="text-sm text-cocoa group-hover:text-espresso transition-colors">
                {c}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-[11px] uppercase tracking-[0.25em] text-espresso font-medium mb-4">
          Price
        </h3>
        <div className="space-y-3">
          {PRICE_BUCKETS.map((b) => (
            <label key={b.id} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={selectedPrices.includes(b.id)}
                onChange={() => toggle(selectedPrices, setSelectedPrices, b.id)}
                className="accent-gold w-4 h-4"
              />
              <span className="text-sm text-cocoa group-hover:text-espresso transition-colors">
                {b.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-[11px] uppercase tracking-[0.25em] text-espresso font-medium mb-4">
          Material
        </h3>
        <div className="space-y-3">
          {MATERIALS.map((m) => (
            <label key={m} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={selectedMats.includes(m)}
                onChange={() => toggle(selectedMats, setSelectedMats, m)}
                className="accent-gold w-4 h-4"
              />
              <span className="text-sm text-cocoa group-hover:text-espresso transition-colors">
                {m}
              </span>
            </label>
          ))}
        </div>
      </div>

      <button
        onClick={clearAll}
        className="text-[11px] uppercase tracking-[0.25em] text-taupe underline underline-offset-4 hover:text-espresso transition-colors"
      >
        Clear All
      </button>
    </div>
  )

  return (
    <div ref={ref} className="pt-16 md:pt-20">
      {/* Header */}
      <div className="border-b border-sand">
        <div className="max-w-content mx-auto px-6 md:px-10 py-14 md:py-20 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-3">
            The Collection
          </p>
          <h1 className="font-serif text-5xl md:text-6xl text-espresso">
            Shop All
          </h1>
          <p className="mt-4 text-cocoa max-w-xl mx-auto">
            Demi-fine gold jewelry, hand-finished and made to be worn every day.
          </p>
        </div>
      </div>

      <div className="max-w-content mx-auto px-6 md:px-10 py-12">
        <div className="flex gap-10">
          {/* Sidebar (desktop) */}
          <aside className="hidden md:block w-56 shrink-0">
            <FilterContent />
          </aside>

          {/* Main */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-8">
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="md:hidden flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-espresso"
              >
                <SlidersHorizontal className="w-4 h-4" strokeWidth={1.5} />
                Filters
              </button>
              <p className="hidden md:block text-sm text-taupe">
                {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
              </p>
              <div className="flex items-center gap-3">
                <label className="text-[11px] uppercase tracking-[0.25em] text-taupe">
                  Sort
                </label>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="bg-transparent border border-sand px-3 py-2 text-sm text-espresso focus:outline-none focus:border-gold transition-colors"
                >
                  {SORTS.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {filtered.length === 0 ? (
              <div className="py-24 text-center">
                <p className="font-serif text-2xl text-espresso">No pieces match your filters.</p>
                <button
                  onClick={clearAll}
                  className="mt-4 text-[11px] uppercase tracking-[0.25em] text-gold underline underline-offset-4"
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
          <div className="absolute top-0 left-0 h-full w-80 max-w-[85%] bg-ivory p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-2xl">Filters</h2>
              <button onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters">
                <X className="w-5 h-5" strokeWidth={1.5} />
              </button>
            </div>
            <FilterContent />
            <button
              onClick={() => setMobileFiltersOpen(false)}
              className="mt-8 w-full bg-gold text-espresso text-[11px] uppercase tracking-[0.25em] py-4 hover:bg-gold-deep transition-colors"
            >
              Show {filtered.length} Results
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
