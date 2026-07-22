import { useEffect, useMemo, useRef, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { SlidersHorizontal, X, Check } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { products } from "@/data/products"
import { cn } from "@/lib/utils"
import ProductCard from "@/components/product/ProductCard"

const ALL_CATEGORIES = ["Earrings", "Necklaces", "Huggies", "Sets"]
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

  const initialCategory = searchParams.get("category")
  const [selectedCats, setSelectedCats] = useState(
    initialCategory ? [initialCategory] : []
  )
  const [selectedPrices, setSelectedPrices] = useState([])
  const [selectedMats, setSelectedMats] = useState([])
  const [sort, setSort] = useState("featured")
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  useEffect(() => {
    const cat = searchParams.get("category")
    setSelectedCats(cat ? [cat] : [])
  }, [searchParams])

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => cancelAnimationFrame(frame)
  }, [selectedCats, selectedPrices, selectedMats, sort])

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
      <div>
        <h3 className="mb-4 text-[11px] uppercase tracking-widest2 text-ink">Category</h3>
        <div className="space-y-3">
          {ALL_CATEGORIES.map((c) => (
            <label key={c} className="flex cursor-pointer items-center gap-3 text-sm text-stone">
              <span
                className={cn(
                  "flex h-4 w-4 items-center justify-center border",
                  selectedCats.includes(c) ? "border-ink bg-ink" : "border-ink/30"
                )}
              >
                {selectedCats.includes(c) && <Check size={11} className="text-ivory" />}
              </span>
              <input
                type="checkbox"
                className="sr-only"
                checked={selectedCats.includes(c)}
                onChange={() => toggle(selectedCats, setSelectedCats, c)}
              />
              <span className="hover:text-ink">{c}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-[11px] uppercase tracking-widest2 text-ink">Price</h3>
        <div className="space-y-3">
          {PRICE_BUCKETS.map((b) => (
            <label key={b.id} className="flex cursor-pointer items-center gap-3 text-sm text-stone">
              <span
                className={cn(
                  "flex h-4 w-4 items-center justify-center border",
                  selectedPrices.includes(b.id) ? "border-ink bg-ink" : "border-ink/30"
                )}
              >
                {selectedPrices.includes(b.id) && <Check size={11} className="text-ivory" />}
              </span>
              <input
                type="checkbox"
                className="sr-only"
                checked={selectedPrices.includes(b.id)}
                onChange={() => toggle(selectedPrices, setSelectedPrices, b.id)}
              />
              <span className="hover:text-ink">{b.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-[11px] uppercase tracking-widest2 text-ink">Material</h3>
        <div className="space-y-3">
          {MATERIALS.map((m) => (
            <label key={m} className="flex cursor-pointer items-center gap-3 text-sm text-stone">
              <span
                className={cn(
                  "flex h-4 w-4 items-center justify-center border",
                  selectedMats.includes(m) ? "border-ink bg-ink" : "border-ink/30"
                )}
              >
                {selectedMats.includes(m) && <Check size={11} className="text-ivory" />}
              </span>
              <input
                type="checkbox"
                className="sr-only"
                checked={selectedMats.includes(m)}
                onChange={() => toggle(selectedMats, setSelectedMats, m)}
              />
              <span className="hover:text-ink">{m}</span>
            </label>
          ))}
        </div>
      </div>

      <button
        onClick={clearAll}
        className="text-[11px] uppercase tracking-widest2 text-gold underline hover:text-gold-deep"
      >
        Clear All
      </button>
    </div>
  )

  return (
    <div ref={ref} className="pt-20">
      {/* Header */}
      <div className="mx-auto max-w-content px-6 py-12 text-center md:px-10 md:py-16">
        <p className="text-[11px] uppercase tracking-widest2 text-gold">The Collection</p>
        <h1 className="mt-3 font-serif text-4xl font-light text-ink md:text-5xl">
          Shop All
        </h1>
        <p className="mx-auto mt-4 max-w-md text-sm text-stone">
          Demi-fine gold jewelry, hand-finished and made to be worn every day.
        </p>
      </div>

      <div className="mx-auto max-w-content px-6 pb-20 md:px-10">
        {/* Toolbar */}
        <div className="mb-8 flex items-center justify-between border-y border-ink/10 py-4">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="flex items-center gap-2 text-[11px] uppercase tracking-widest2 text-ink lg:hidden"
          >
            <SlidersHorizontal size={14} />
            Filters
          </button>
          <p className="hidden text-[11px] uppercase tracking-widest2 text-stone lg:block">
            {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
          </p>
          <div className="flex items-center gap-3">
            <label className="text-[11px] uppercase tracking-widest2 text-stone">Sort</label>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="border border-ink/20 bg-ivory px-3 py-2 text-xs text-ink focus:border-gold focus:outline-none"
            >
              {SORTS.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-[220px_1fr] lg:gap-16">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block">
            <FilterContent />
          </aside>

          {/* Grid */}
          <div>
            {filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-24 text-center">
                <p className="font-serif text-2xl text-ink">No pieces match your filters</p>
                <button
                  onClick={clearAll}
                  className="mt-4 text-[11px] uppercase tracking-widest2 text-gold underline"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3">
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
        <div className="fixed inset-0 z-[80] lg:hidden">
          <div
            className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full w-80 max-w-[85%] overflow-y-auto bg-ivory p-6 shadow-card animate-slide-in">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="font-serif text-xl text-ink">Filters</h2>
              <button onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters">
                <X size={22} className="text-ink" />
              </button>
            </div>
            <FilterContent />
            <button
              onClick={() => setMobileFiltersOpen(false)}
              className="mt-8 w-full bg-ink py-4 text-[11px] uppercase tracking-widest2 text-ivory"
            >
              Show {filtered.length} Results
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
