import { useMemo, useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { SlidersHorizontal, X } from "lucide-react"
import { products, CATEGORIES, MATERIALS } from "@/data/products"
import ProductCard from "@/components/product/ProductCard"
import { useStrkImages } from "@/lib/useStrkImages"
import { formatPrice, cn } from "@/lib/utils"

const SORTS = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
]

const PRICE_RANGES = [
  { id: "all", label: "All Prices", min: 0, max: Infinity },
  { id: "under-50", label: "Under $50", min: 0, max: 49 },
  { id: "50-80", label: "$50 – $80", min: 50, max: 80 },
  { id: "over-80", label: "Over $80", min: 81, max: Infinity },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [categories, setCategories] = useState(() => {
    const c = searchParams.get("category")
    return c ? [c] : []
  })
  const [materials, setMaterials] = useState([])
  const [priceRange, setPriceRange] = useState("all")
  const [sort, setSort] = useState("featured")
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const ref = useStrkImages([categories, materials, priceRange, sort])

  // Sync category from URL
  useEffect(() => {
    const c = searchParams.get("category")
    if (c) setCategories([c])
  }, [searchParams])

  const toggle = (list, setList, id) => {
    setList((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]))
  }

  const filtered = useMemo(() => {
    const range = PRICE_RANGES.find((r) => r.id === priceRange)
    let list = products.filter((p) => {
      if (categories.length && !categories.includes(p.category)) return false
      if (materials.length && !materials.includes(p.material)) return false
      if (p.price < range.min || p.price > range.max) return false
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
  }, [categories, materials, priceRange, sort])

  const clearAll = () => {
    setCategories([])
    setMaterials([])
    setPriceRange("all")
    setSort("featured")
    setSearchParams({})
  }

  const FilterContent = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-[11px] uppercase tracking-widest2 text-espresso mb-4">Category</h3>
        <ul className="space-y-2.5">
          {CATEGORIES.map((c) => (
            <li key={c.id}>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={categories.includes(c.id)}
                  onChange={() => toggle(categories, setCategories, c.id)}
                  className="accent-gold w-4 h-4"
                />
                <span className="text-sm text-espresso-700 group-hover:text-espresso">{c.name}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-[11px] uppercase tracking-widest2 text-espresso mb-4">Material</h3>
        <ul className="space-y-2.5">
          {MATERIALS.map((m) => (
            <li key={m.id}>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={materials.includes(m.id)}
                  onChange={() => toggle(materials, setMaterials, m.id)}
                  className="accent-gold w-4 h-4"
                />
                <span className="text-sm text-espresso-700 group-hover:text-espresso">{m.name}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-[11px] uppercase tracking-widest2 text-espresso mb-4">Price</h3>
        <ul className="space-y-2.5">
          {PRICE_RANGES.map((r) => (
            <li key={r.id}>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="radio"
                  name="price"
                  checked={priceRange === r.id}
                  onChange={() => setPriceRange(r.id)}
                  className="accent-gold w-4 h-4"
                />
                <span className="text-sm text-espresso-700 group-hover:text-espresso">{r.label}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      <button
        type="button"
        onClick={clearAll}
        className="text-[11px] uppercase tracking-widest2 text-muted hover:text-gold transition-colors underline-offset-4 hover:underline"
      >
        Clear All
      </button>
    </div>
  )

  return (
    <div ref={ref} className="pt-16 md:pt-20">
      {/* Header */}
      <div className="border-b border-line">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-12 md:py-16 text-center">
          <p className="text-[11px] uppercase tracking-widest2 text-gold mb-3">The Collection</p>
          <h1 className="font-serif text-4xl md:text-6xl text-espresso">Shop All</h1>
          <p className="mt-4 text-espresso-700 max-w-lg mx-auto">
            Demi-fine gold jewelry, designed in studio and made for the everyday.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-10 py-10 md:py-14">
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
                className="md:hidden flex items-center gap-2 text-[11px] uppercase tracking-widest2 text-espresso border border-line px-4 py-2.5"
              >
                <SlidersHorizontal width={14} height={14} />
                Filters
              </button>
              <p className="hidden md:block text-sm text-muted">
                {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
              </p>
              <div className="flex items-center gap-2">
                <label className="text-[11px] uppercase tracking-widest2 text-muted hidden sm:block">
                  Sort
                </label>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="border border-line bg-cream text-sm text-espresso-700 px-3 py-2.5 focus:outline-none focus:border-gold transition-colors"
                >
                  {SORTS.map((s) => (
                    <option key={s.id} value={s.id}>{s.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Grid */}
            {filtered.length === 0 ? (
              <div className="py-24 text-center">
                <p className="font-serif text-2xl text-espresso">No pieces match your filters</p>
                <button
                  type="button"
                  onClick={clearAll}
                  className="mt-5 text-[11px] uppercase tracking-widest2 text-gold hover:text-gold-600 transition-colors underline-offset-4 hover:underline"
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
      <div
        className={cn(
          "fixed inset-0 z-[80] md:hidden transition-opacity duration-300",
          mobileFiltersOpen ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
      >
        <div className="absolute inset-0 bg-espresso/40" onClick={() => setMobileFiltersOpen(false)} />
        <div
          className={cn(
            "absolute left-0 top-0 h-full w-80 max-w-[85vw] bg-cream p-6 overflow-y-auto transition-transform duration-300",
            mobileFiltersOpen ? "translate-x-0" : "-translate-x-full",
          )}
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-serif text-2xl text-espresso">Filters</h2>
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(false)}
              className="text-espresso hover:text-gold"
              aria-label="Close filters"
            >
              <X width={20} height={20} />
            </button>
          </div>
          <FilterContent />
          <button
            type="button"
            onClick={() => setMobileFiltersOpen(false)}
            className="mt-8 w-full bg-gold text-espresso text-[11px] uppercase tracking-widest2 py-3.5 hover:bg-gold-600 transition-colors"
          >
            Show {filtered.length} Results
          </button>
        </div>
      </div>
    </div>
  )
}
