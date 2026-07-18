import { useMemo, useState, useEffect, useRef} from "react"
import { useSearchParams } from "react-router-dom"
import { SlidersHorizontal, X } from "lucide-react"
import { products, CATEGORIES, MATERIALS } from "@/data/products"
import ProductCard from "@/components/product/ProductCard"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { cn } from "@/lib/utils"

const SORTS = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
]

const PRICE_RANGES = [
  { id: "all", label: "All Prices", min: 0, max: Infinity },
  { id: "under-50", label: "Under $50", min: 0, max: 50 },
  { id: "50-80", label: "$50 – $80", min: 50, max: 80 },
  { id: "over-80", label: "Over $80", min: 80, max: Infinity },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const ref = useRef(null)
  useEffect(() => {
    if (!ref.current) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  const initialCategory = searchParams.get("category") || "all"
  const [category, setCategory] = useState(initialCategory)
  const [material, setMaterial] = useState("all")
  const [priceRange, setPriceRange] = useState("all")
  const [sort, setSort] = useState("featured")
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  // Keep URL in sync when category changes (e.g. from nav links).
  useEffect(() => {
    setCategory(searchParams.get("category") || "all")
  }, [searchParams])

  const updateCategory = (value) => {
    setCategory(value)
    const next = new URLSearchParams(searchParams)
    if (value === "all") next.delete("category")
    else next.set("category", value)
    setSearchParams(next, { replace: true })
  }

  const filtered = useMemo(() => {
    let list = products.slice()
    if (category !== "all") list = list.filter((p) => p.category === category)
    if (material !== "all") list = list.filter((p) => p.material === material)
    const range = PRICE_RANGES.find((r) => r.id === priceRange)
    if (range) list = list.filter((p) => p.price >= range.min && p.price < range.max)

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
  }, [category, material, priceRange, sort])

  const resetFilters = () => {
    setCategory("all")
    setMaterial("all")
    setPriceRange("all")
    setSort("featured")
    setSearchParams({}, { replace: true })
  }

  const FilterPanel = (
    <div className="space-y-9">
      {/* Category */}
      <div>
        <h3 className="text-[11px] uppercase tracking-widest2 text-ink">Category</h3>
        <ul className="mt-4 space-y-2.5">
          <li>
            <FilterButton active={category === "all"} onClick={() => updateCategory("all")}>
              All Jewelry
            </FilterButton>
          </li>
          {CATEGORIES.map((c) => (
            <li key={c.id}>
              <FilterButton active={category === c.id} onClick={() => updateCategory(c.id)}>
                {c.name}
              </FilterButton>
            </li>
          ))}
        </ul>
      </div>

      {/* Price */}
      <div>
        <h3 className="text-[11px] uppercase tracking-widest2 text-ink">Price</h3>
        <ul className="mt-4 space-y-2.5">
          {PRICE_RANGES.map((r) => (
            <li key={r.id}>
              <FilterButton active={priceRange === r.id} onClick={() => setPriceRange(r.id)}>
                {r.label}
              </FilterButton>
            </li>
          ))}
        </ul>
      </div>

      {/* Material */}
      <div>
        <h3 className="text-[11px] uppercase tracking-widest2 text-ink">Material</h3>
        <ul className="mt-4 space-y-2.5">
          <li>
            <FilterButton active={material === "all"} onClick={() => setMaterial("all")}>
              All Materials
            </FilterButton>
          </li>
          {MATERIALS.map((m) => (
            <li key={m}>
              <FilterButton active={material === m} onClick={() => setMaterial(m)}>
                {m}
              </FilterButton>
            </li>
          ))}
        </ul>
      </div>

      <button
        type="button"
        onClick={resetFilters}
        className="text-[11px] uppercase tracking-widest2 text-stone underline-offset-4 hover:text-ink hover:underline"
      >
        Reset Filters
      </button>
    </div>
  )

  return (
    <div ref={ref} className="bg-cream pt-16 md:pt-20">
      {/* Header */}
      <div className="border-b border-line">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-12 md:py-16 text-center">
          <p className="text-[11px] uppercase tracking-widest2 text-champagne-deep">
            The Collection
          </p>
          <h1 className="mt-3 font-serif text-5xl md:text-6xl text-ink">
            Shop All Jewelry
          </h1>
          <p className="mt-4 max-w-lg mx-auto text-sm text-stone">
            Demi-fine gold pieces, hand-finished and made to be treasured —
            for everyday wear and a lifetime of gifting.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-10 py-10">
        {/* Toolbar */}
        <div className="flex items-center justify-between gap-4 border-b border-line pb-5">
          <button
            type="button"
            onClick={() => setMobileFiltersOpen(true)}
            className="flex items-center gap-2 text-[11px] uppercase tracking-widest2 text-ink lg:hidden"
          >
            <SlidersHorizontal size={15} strokeWidth={1.5} />
            Filters
          </button>
          <p className="hidden lg:block text-[11px] uppercase tracking-widest2 text-stone">
            {filtered.length} {filtered.length === 1 ? "Piece" : "Pieces"}
          </p>
          <div className="flex items-center gap-3">
            <label htmlFor="sort" className="text-[11px] uppercase tracking-widest2 text-stone">
              Sort
            </label>
            <select
              id="sort"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="border border-line bg-cream px-3 py-2 text-xs text-ink focus:border-ink focus:outline-none"
            >
              {SORTS.map((s) => (
                <option key={s.id} value={s.id}>{s.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-8 flex gap-10">
          {/* Sidebar (desktop) */}
          <aside className="hidden lg:block w-56 shrink-0">
            <div className="sticky top-28">{FilterPanel}</div>
          </aside>

          {/* Grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-24 text-center">
                <p className="font-serif text-2xl text-ink">No pieces match your filters</p>
                <p className="mt-2 text-sm text-stone">Try adjusting or resetting your selection.</p>
                <button
                  type="button"
                  onClick={resetFilters}
                  className="mt-6 border border-ink px-8 py-3 text-[11px] uppercase tracking-widest2 text-ink hover:bg-ink hover:text-cream transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
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
            className="absolute inset-0 bg-ink/40"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full w-80 max-w-[85%] bg-cream p-6 overflow-y-auto">
            <div className="flex items-center justify-between border-b border-line pb-4">
              <h2 className="font-serif text-xl uppercase tracking-widest3 text-ink">Filters</h2>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                aria-label="Close filters"
                className="text-ink"
              >
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>
            <div className="mt-6">{FilterPanel}</div>
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(false)}
              className="mt-8 w-full bg-champagne py-4 text-[11px] uppercase tracking-widest2 text-cream hover:bg-champagne-deep transition-colors"
            >
              Show {filtered.length} Results
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

function FilterButton({ active, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "text-sm transition-colors",
        active ? "text-ink font-medium" : "text-stone hover:text-ink"
      )}
    >
      {children}
    </button>
  )
}
