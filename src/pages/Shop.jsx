import { useEffect, useMemo, useRef, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { SlidersHorizontal, X, Check } from "lucide-react"
import ProductCard from "@/components/product/ProductCard"

import { products } from "@/data/products"
import { cn } from "@/lib/utils"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

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
  const ref = useRef(null)

  const [selectedCats, setSelectedCats] = useState(() => {
    const c = searchParams.get("category")
    return c ? [c] : []
  })
  const [selectedPrices, setSelectedPrices] = useState([])
  const [selectedMaterials, setSelectedMaterials] = useState([])
  const [sort, setSort] = useState("featured")
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  // Sync category from URL
  useEffect(() => {
    const c = searchParams.get("category")
    if (c) setSelectedCats([c])
    else setSelectedCats([])
  }, [searchParams])

  const filtered = useMemo(() => {
    let list = products.filter((p) => {
      const catOk = selectedCats.length === 0 || selectedCats.includes(p.category)
      const matOk = selectedMaterials.length === 0 || selectedMaterials.includes(p.material)
      const priceOk =
        selectedPrices.length === 0 ||
        selectedPrices.some((id) => {
          const r = PRICE_RANGES.find((pr) => pr.id === id)
          return r && p.price >= r.min && p.price < r.max
        })
      return catOk && matOk && priceOk
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
  }, [selectedCats, selectedMaterials, selectedPrices, sort])

  useEffect(() => {
      if (!ref.current) return
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, ref.current)
      })
      return () => window.cancelAnimationFrame(frameId)
    }, [filtered, mobileFiltersOpen])

  const toggle = (setter, value, current) => {
    setter(current.includes(value) ? current.filter((v) => v !== value) : [...current, value])
  }

  const clearAll = () => {
    setSelectedCats([])
    setSelectedPrices([])
    setSelectedMaterials([])
    setSearchParams({})
  }

  const activeCount = selectedCats.length + selectedPrices.length + selectedMaterials.length

  const FilterPanel = () => (
    <div className="space-y-9">
      <div>
        <h3 className="text-[11px] uppercase tracking-widest3 text-ink font-medium mb-4">Category</h3>
        <ul className="space-y-2.5">
          {CATEGORIES.map((c) => (
            <li key={c}>
              <button
                type="button"
                onClick={() => {
                  toggle(setSelectedCats, c, selectedCats)
                  setSearchParams({})
                }}
                className="flex items-center gap-2.5 text-sm text-stone hover:text-ink transition-colors"
              >
                <span
                  className={cn(
                    "w-4 h-4 border flex items-center justify-center transition-colors",
                    selectedCats.includes(c) ? "bg-ink border-ink" : "border-sand"
                  )}
                >
                  {selectedCats.includes(c) && <Check className="w-3 h-3 text-ivory" />}
                </span>
                {c}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-[11px] uppercase tracking-widest3 text-ink font-medium mb-4">Price</h3>
        <ul className="space-y-2.5">
          {PRICE_RANGES.map((r) => (
            <li key={r.id}>
              <button
                type="button"
                onClick={() => toggle(setSelectedPrices, r.id, selectedPrices)}
                className="flex items-center gap-2.5 text-sm text-stone hover:text-ink transition-colors"
              >
                <span
                  className={cn(
                    "w-4 h-4 border flex items-center justify-center transition-colors",
                    selectedPrices.includes(r.id) ? "bg-ink border-ink" : "border-sand"
                  )}
                >
                  {selectedPrices.includes(r.id) && <Check className="w-3 h-3 text-ivory" />}
                </span>
                {r.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-[11px] uppercase tracking-widest3 text-ink font-medium mb-4">Material</h3>
        <ul className="space-y-2.5">
          {MATERIALS.map((m) => (
            <li key={m}>
              <button
                type="button"
                onClick={() => toggle(setSelectedMaterials, m, selectedMaterials)}
                className="flex items-center gap-2.5 text-sm text-stone hover:text-ink transition-colors"
              >
                <span
                  className={cn(
                    "w-4 h-4 border flex items-center justify-center transition-colors",
                    selectedMaterials.includes(m) ? "bg-ink border-ink" : "border-sand"
                  )}
                >
                  {selectedMaterials.includes(m) && <Check className="w-3 h-3 text-ivory" />}
                </span>
                {m}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {activeCount > 0 && (
        <button
          type="button"
          onClick={clearAll}
          className="text-[11px] uppercase tracking-widest3 text-gold hover:text-gold-deep transition-colors"
        >
          Clear All
        </button>
      )}
    </div>
  )

  return (
    <div ref={ref} className="pt-16 md:pt-20">
      {/* Header */}
      <div className="border-b border-sand">
        <div className="max-w-8xl mx-auto px-5 md:px-8 py-12 md:py-16 text-center">
          <p className="text-[11px] uppercase tracking-widest2 text-gold mb-3">The Collection</p>
          <h1 className="font-serif text-4xl md:text-6xl text-ink font-light">Shop All</h1>
          <p className="mt-4 text-stone max-w-xl mx-auto">
            Demi-fine gold jewelry, designed in studio and made to be worn every day.
          </p>
        </div>
      </div>

      <div className="max-w-8xl mx-auto px-5 md:px-8 py-10">
        <div className="flex gap-10">
          {/* Sidebar (desktop) */}
          <aside className="hidden md:block w-56 shrink-0">
            <FilterPanel />
          </aside>

          {/* Main */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8">
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="md:hidden inline-flex items-center gap-2 text-[11px] uppercase tracking-widest3 text-ink border border-sand px-4 py-2.5"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                Filters {activeCount > 0 && `(${activeCount})`}
              </button>
              <p className="hidden md:block text-sm text-stone">
                {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
              </p>
              <div className="flex items-center gap-2">
                <label htmlFor="sort" className="text-[11px] uppercase tracking-widest3 text-stone">
                  Sort
                </label>
                <select
                  id="sort"
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="bg-transparent border border-sand text-sm text-ink px-3 py-2 outline-none focus:border-gold transition-colors cursor-pointer"
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
                <p className="font-serif text-2xl text-ink mb-2">No pieces match your filters</p>
                <p className="text-stone mb-6">Try adjusting or clearing your selection.</p>
                <button
                  onClick={clearAll}
                  className="text-[11px] uppercase tracking-widest3 text-gold hover:text-gold-deep border-b border-gold pb-1"
                >
                  Clear Filters
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
        <div className="fixed inset-0 z-[60] md:hidden">
          <div className="absolute inset-0 bg-ink/50 backdrop-blur-sm animate-fade-in" onClick={() => setMobileFiltersOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-80 max-w-[85%] bg-ivory flex flex-col animate-drawer-in">
            <div className="flex items-center justify-between px-6 py-5 border-b border-sand">
              <h2 className="font-serif text-xl text-ink">Filters</h2>
              <button onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters" className="p-1 text-ink hover:text-gold">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-6 py-6">
              <FilterPanel />
            </div>
            <div className="border-t border-sand px-6 py-4">
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="w-full bg-gold text-ink text-[11px] uppercase tracking-widest3 font-medium py-3.5 hover:bg-gold-deep hover:text-ivory transition-colors"
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
