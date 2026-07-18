import { useMemo, useState, useEffect, useRef } from "react"
import { useSearchParams } from "react-router-dom"
import { SlidersHorizontal, X } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { products } from "@/data/products"
import ProductCard from "@/components/product/ProductCard"
import { cn } from "@/lib/utils"

const CATEGORY_OPTIONS = ["Earrings", "Necklaces", "Huggies", "Sets"]
const MATERIAL_OPTIONS = ["18K Gold Plated"]
const PRICE_RANGES = [
  { id: "under50", label: "Under $50", min: 0, max: 50 },
  { id: "50to80", label: "$50 – $80", min: 50, max: 80 },
  { id: "over80", label: "Over $80", min: 80, max: Infinity },
]
const SORT_OPTIONS = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const ref = useRef(null)

  const initialCategory = searchParams.get("category") || ""
  const [selectedCategories, setSelectedCategories] = useState(
    initialCategory ? [initialCategory] : []
  )
  const [selectedPrice, setSelectedPrice] = useState([])
  const [sort, setSort] = useState("featured")
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  useEffect(() => {
    const cat = searchParams.get("category")
    setSelectedCategories(cat ? [cat] : [])
  }, [searchParams])

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [selectedCategories, selectedPrice, sort])

  const toggleCategory = (c) => {
    setSelectedCategories((prev) =>
      prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c]
    )
  }

  const togglePrice = (id) => {
    setSelectedPrice((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    )
  }

  const clearAll = () => {
    setSelectedCategories([])
    setSelectedPrice([])
    setSearchParams({})
  }

  const filtered = useMemo(() => {
    let list = [...products]

    if (selectedCategories.length) {
      list = list.filter((p) => selectedCategories.includes(p.category))
    }
    if (selectedPrice.length) {
      list = list.filter((p) =>
        PRICE_RANGES.some(
          (r) => selectedPrice.includes(r.id) && p.price >= r.min && p.price < r.max
        )
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
  }, [selectedCategories, selectedPrice, sort])

  const FilterPanel = (
    <div className="space-y-8">
      <div>
        <h3 className="text-xs uppercase tracking-widest2 text-ink font-medium mb-4">
          Category
        </h3>
        <div className="space-y-3">
          {CATEGORY_OPTIONS.map((c) => (
            <label key={c} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={selectedCategories.includes(c)}
                onChange={() => toggleCategory(c)}
                className="w-4 h-4 accent-gold border-sand"
              />
              <span className="text-sm text-ink group-hover:text-gold transition-colors">
                {c}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xs uppercase tracking-widest2 text-ink font-medium mb-4">
          Price
        </h3>
        <div className="space-y-3">
          {PRICE_RANGES.map((r) => (
            <label key={r.id} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={selectedPrice.includes(r.id)}
                onChange={() => togglePrice(r.id)}
                className="w-4 h-4 accent-gold border-sand"
              />
              <span className="text-sm text-ink group-hover:text-gold transition-colors">
                {r.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xs uppercase tracking-widest2 text-ink font-medium mb-4">
          Material
        </h3>
        <div className="space-y-3">
          {MATERIAL_OPTIONS.map((m) => (
            <label key={m} className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" defaultChecked className="w-4 h-4 accent-gold border-sand" />
              <span className="text-sm text-ink">{m}</span>
            </label>
          ))}
        </div>
      </div>

      <button
        onClick={clearAll}
        className="text-xs uppercase tracking-widest2 text-gold hover:text-gold-deep transition-colors underline underline-offset-4"
      >
        Clear All
      </button>
    </div>
  )

  return (
    <div ref={ref} className="pt-16 md:pt-20 bg-ivory min-h-screen">
      {/* Header */}
      <div className="border-b border-sand">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-12 md:py-16 text-center">
          <p className="text-[11px] uppercase tracking-widest3 text-gold mb-3">
            The Collection
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-ink">Shop All</h1>
          <p className="text-taupe mt-3 max-w-md mx-auto">
            Demi-fine gold jewelry, crafted to be treasured.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 py-10">
        <div className="flex gap-10">
          {/* Sidebar (desktop) */}
          <aside className="hidden md:block w-56 shrink-0">
            <div className="sticky top-28">{FilterPanel}</div>
          </aside>

          {/* Main */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-sand">
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="md:hidden flex items-center gap-2 text-xs uppercase tracking-widest2 text-ink"
              >
                <SlidersHorizontal size={15} /> Filters
              </button>
              <p className="hidden md:block text-sm text-taupe">
                {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
              </p>
              <div className="flex items-center gap-2">
                <label className="text-xs uppercase tracking-widest2 text-taupe">Sort</label>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="bg-transparent border-b border-sand text-sm text-ink py-1 pr-6 focus:outline-none focus:border-gold cursor-pointer"
                >
                  {SORT_OPTIONS.map((o) => (
                    <option key={o.id} value={o.id}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Grid */}
            {filtered.length === 0 ? (
              <div className="py-24 text-center">
                <p className="font-serif text-2xl text-ink">No pieces match your filters.</p>
                <button
                  onClick={clearAll}
                  className="mt-4 text-gold underline underline-offset-4 text-sm"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10 md:gap-x-6">
                {filtered.map((p) => (
                  <ProductCard
                    key={p.id}
                    product={p}
                    titleId={`shop-${p.id}-title`}
                    descId={`shop-${p.id}-desc`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <div
            className="absolute inset-0 bg-espresso/40 backdrop-blur-sm animate-overlay-in"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full w-80 max-w-[85vw] bg-ivory shadow-card flex flex-col animate-drawer-in">
            <div className="flex items-center justify-between px-6 py-5 border-b border-sand">
              <h2 className="font-serif text-xl text-ink">Filters</h2>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="text-ink hover:text-gold"
                aria-label="Close filters"
              >
                <X size={22} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-6 py-6">{FilterPanel}</div>
            <div className="border-t border-sand px-6 py-4">
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="w-full bg-gold text-ivory text-xs uppercase tracking-widest2 font-medium py-4 hover:bg-gold-deep transition-colors"
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
