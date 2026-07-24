import { useEffect, useMemo, useRef, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { SlidersHorizontal, X, Check } from "lucide-react"
import { PRODUCTS, CATEGORIES } from "@/data/products"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { cn } from "@/lib/utils"
import ProductCard from "@/components/product/ProductCard"

const PRICE_RANGES = [
  { id: "under-50", label: "Under $50", min: 0, max: 49 },
  { id: "50-80", label: "$50 – $80", min: 50, max: 80 },
  { id: "over-80", label: "Over $80", min: 81, max: Infinity },
]

const MATERIALS = ["Gold", "Silver"]

const SORTS = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const ref = useRef(null)

  const initialCategory = searchParams.get("category") || "all"
  const [category, setCategory] = useState(initialCategory)
  const [priceRanges, setPriceRanges] = useState([])
  const [materials, setMaterials] = useState([])
  const [sort, setSort] = useState("featured")
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  // Sync category from URL (e.g. when navigating from a category tile)
  useEffect(() => {
    const c = searchParams.get("category") || "all"
    setCategory(c)
  }, [searchParams])

  // Reflect category in URL
  useEffect(() => {
    const next = new URLSearchParams(searchParams)
    if (category && category !== "all") next.set("category", category)
    else next.delete("category")
    setSearchParams(next, { replace: true })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category])

  // Load images whenever the filtered list changes
  useEffect(() => {
    if (!ref.current) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [category, priceRanges, materials, sort])

  const filtered = useMemo(() => {
    let list = PRODUCTS.slice()
    if (category !== "all") list = list.filter((p) => p.category === category)
    if (priceRanges.length > 0) {
      list = list.filter((p) =>
        priceRanges.some((r) => {
          const range = PRICE_RANGES.find((pr) => pr.id === r)
          return range && p.price >= range.min && p.price <= range.max
        })
      )
    }
    if (materials.length > 0) {
      list = list.filter((p) => materials.some((m) => p.tones.includes(m)))
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
  }, [category, priceRanges, materials, sort])

  const toggle = (list, setList, id) => {
    setList(list.includes(id) ? list.filter((x) => x !== id) : [...list, id])
  }

  const clearAll = () => {
    setCategory("all")
    setPriceRanges([])
    setMaterials([])
    setSort("featured")
  }

  const activeCount =
    (category !== "all" ? 1 : 0) + priceRanges.length + materials.length

  const FilterPanel = (
    <div className="space-y-9">
      {/* Category */}
      <div>
        <h3 className="text-[11px] uppercase tracking-widest2 font-medium text-ink mb-4">
          Category
        </h3>
        <ul className="space-y-2.5">
          <li>
            <button
              type="button"
              onClick={() => setCategory("all")}
              className={cn(
                "text-sm transition-colors",
                category === "all" ? "text-gold" : "text-ink-soft hover:text-ink"
              )}
            >
              All Jewelry
            </button>
          </li>
          {CATEGORIES.map((c) => (
            <li key={c.id}>
              <button
                type="button"
                onClick={() => setCategory(c.id)}
                className={cn(
                  "text-sm transition-colors",
                  category === c.id ? "text-gold" : "text-ink-soft hover:text-ink"
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
        <h3 className="text-[11px] uppercase tracking-widest2 font-medium text-ink mb-4">
          Price
        </h3>
        <ul className="space-y-2.5">
          {PRICE_RANGES.map((r) => (
            <li key={r.id}>
              <label className="flex items-center gap-3 cursor-pointer group">
                <span
                  className={cn(
                    "w-4 h-4 border flex items-center justify-center transition-colors",
                    priceRanges.includes(r.id)
                      ? "bg-gold border-gold"
                      : "border-sand group-hover:border-ink"
                  )}
                >
                  {priceRanges.includes(r.id) && (
                    <Check className="w-3 h-3 text-white" />
                  )}
                </span>
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={priceRanges.includes(r.id)}
                  onChange={() => toggle(priceRanges, setPriceRanges, r.id)}
                />
                <span className="text-sm text-ink-soft group-hover:text-ink transition-colors">
                  {r.label}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Material */}
      <div>
        <h3 className="text-[11px] uppercase tracking-widest2 font-medium text-ink mb-4">
          Material
        </h3>
        <ul className="space-y-2.5">
          {MATERIALS.map((m) => (
            <li key={m}>
              <label className="flex items-center gap-3 cursor-pointer group">
                <span
                  className={cn(
                    "w-4 h-4 border flex items-center justify-center transition-colors",
                    materials.includes(m)
                      ? "bg-gold border-gold"
                      : "border-sand group-hover:border-ink"
                  )}
                >
                  {materials.includes(m) && <Check className="w-3 h-3 text-white" />}
                </span>
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={materials.includes(m)}
                  onChange={() => toggle(materials, setMaterials, m)}
                />
                <span className="text-sm text-ink-soft group-hover:text-ink transition-colors">
                  {m} Tone
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {activeCount > 0 && (
        <button
          type="button"
          onClick={clearAll}
          className="text-[11px] uppercase tracking-widest2 text-stone border-b border-stone pb-0.5 hover:text-ink hover:border-ink transition-colors"
        >
          Clear All
        </button>
      )}
    </div>
  )

  return (
    <div ref={ref} className="pt-16 md:pt-20 min-h-screen bg-ivory">
      {/* Header */}
      <div className="border-b border-sand">
        <div className="max-w-8xl mx-auto px-5 md:px-8 py-12 md:py-16 text-center">
          <p className="text-[11px] uppercase tracking-widest3 text-gold mb-3">
            The Collection
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-ink">
            {category === "all"
              ? "All Jewelry"
              : CATEGORIES.find((c) => c.id === category)?.name}
          </h1>
          <p className="mt-4 text-sm text-stone">
            {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
          </p>
        </div>
      </div>

      <div className="max-w-8xl mx-auto px-5 md:px-8 py-10">
        <div className="flex gap-10">
          {/* Sidebar (desktop) */}
          <aside className="hidden md:block w-56 shrink-0">
            <div className="sticky top-28">{FilterPanel}</div>
          </aside>

          {/* Main */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8">
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="md:hidden inline-flex items-center gap-2 text-[11px] uppercase tracking-widest2 text-ink border border-sand px-4 py-2.5"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
                {activeCount > 0 && (
                  <span className="bg-gold text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                    {activeCount}
                  </span>
                )}
              </button>
              <p className="hidden md:block text-xs text-stone">
                Showing {filtered.length} {filtered.length === 1 ? "item" : "items"}
              </p>
              <div className="flex items-center gap-2">
                <label htmlFor="sort" className="text-[11px] uppercase tracking-widest2 text-stone">
                  Sort
                </label>
                <select
                  id="sort"
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="bg-transparent border border-sand text-sm text-ink py-2 px-3 focus:outline-none focus:border-gold transition-colors cursor-pointer"
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
                <p className="font-serif text-2xl text-ink">No pieces match your filters</p>
                <button
                  type="button"
                  onClick={clearAll}
                  className="mt-4 text-[11px] uppercase tracking-widest2 text-gold border-b border-gold pb-0.5"
                >
                  Clear Filters
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
      <div
        className={cn(
          "fixed inset-0 z-[60] md:hidden transition-opacity duration-300",
          mobileFiltersOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        <div
          className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
          onClick={() => setMobileFiltersOpen(false)}
        />
        <div
          className={cn(
            "absolute left-0 top-0 h-full w-80 max-w-[85vw] bg-ivory shadow-card p-6 overflow-y-auto transition-transform duration-400",
            mobileFiltersOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-serif text-2xl text-ink">Filters</h2>
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(false)}
              aria-label="Close filters"
              className="text-ink"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          {FilterPanel}
          <button
            type="button"
            onClick={() => setMobileFiltersOpen(false)}
            className="mt-10 w-full bg-gold text-white text-[11px] uppercase tracking-widest2 font-medium py-4 hover:bg-gold-deep transition-colors"
          >
            Show {filtered.length} Results
          </button>
        </div>
      </div>
    </div>
  )
}
