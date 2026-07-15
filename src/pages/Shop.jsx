import { useEffect, useMemo, useRef, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { SlidersHorizontal, X, ChevronDown } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { products } from "@/data/products"
import ProductCard from "@/components/product/ProductCard"
import { cn } from "@/lib/utils"

const CATEGORIES = ["All", "Earrings", "Necklaces", "Huggies"]
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
  const containerRef = useRef(null)

  const initialCategory = searchParams.get("category") || "All"
  const [category, setCategory] = useState(
    CATEGORIES.includes(initialCategory) ? initialCategory : "All"
  )
  const [selectedPrices, setSelectedPrices] = useState([])
  const [sort, setSort] = useState("featured")
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [category, selectedPrices, sort])

  // Keep URL in sync with category
  useEffect(() => {
    const params = new URLSearchParams(searchParams)
    if (category === "All") {
      params.delete("category")
    } else {
      params.set("category", category)
    }
    setSearchParams(params, { replace: true })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category])

  const togglePrice = (id) => {
    setSelectedPrices((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    )
  }

  const filtered = useMemo(() => {
    let list = products.slice()

    if (category !== "All") {
      list = list.filter((p) => p.category === category)
    }

    if (selectedPrices.length > 0) {
      const buckets = PRICE_BUCKETS.filter((b) => selectedPrices.includes(b.id))
      list = list.filter((p) =>
        buckets.some((b) => p.price >= b.min && p.price < b.max)
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
  }, [category, selectedPrices, sort])

  const clearAll = () => {
    setCategory("All")
    setSelectedPrices([])
    setSort("featured")
  }

  const FilterPanel = () => (
    <div className="space-y-10">
      {/* Category */}
      <div>
        <h3 className="font-sans text-[11px] uppercase tracking-widest2 text-ink">
          Category
        </h3>
        <ul className="mt-4 space-y-2.5">
          {CATEGORIES.map((c) => (
            <li key={c}>
              <button
                type="button"
                onClick={() => setCategory(c)}
                className={cn(
                  "font-sans text-sm transition-colors",
                  category === c ? "text-gold" : "text-stone hover:text-ink"
                )}
              >
                {c}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Price */}
      <div>
        <h3 className="font-sans text-[11px] uppercase tracking-widest2 text-ink">
          Price
        </h3>
        <ul className="mt-4 space-y-2.5">
          {PRICE_BUCKETS.map((b) => (
            <li key={b.id}>
              <label className="flex cursor-pointer items-center gap-3 font-sans text-sm text-stone hover:text-ink">
                <span
                  className={cn(
                    "flex h-4 w-4 items-center justify-center border transition-colors",
                    selectedPrices.includes(b.id)
                      ? "border-gold bg-gold"
                      : "border-ink/30"
                  )}
                >
                  {selectedPrices.includes(b.id) && (
                    <span className="h-1.5 w-1.5 bg-cream" />
                  )}
                </span>
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={selectedPrices.includes(b.id)}
                  onChange={() => togglePrice(b.id)}
                />
                {b.label}
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Material */}
      <div>
        <h3 className="font-sans text-[11px] uppercase tracking-widest2 text-ink">
          Material
        </h3>
        <ul className="mt-4 space-y-2.5">
          {MATERIALS.map((m) => (
            <li key={m}>
              <span className="font-sans text-sm text-stone">{m}</span>
            </li>
          ))}
        </ul>
      </div>

      <button
        type="button"
        onClick={clearAll}
        className="font-sans text-[11px] uppercase tracking-widest2 text-stone underline-offset-4 hover:text-gold hover:underline"
      >
        Clear All
      </button>
    </div>
  )

  return (
    <div ref={containerRef} className="pt-24">
      {/* Header */}
      <div className="mx-auto max-w-7xl px-6 pb-10 pt-8 md:px-10">
        <p className="font-sans text-xs uppercase tracking-widest2 text-gold">
          The Collection
        </p>
        <h1 className="mt-3 font-serif text-5xl text-ink md:text-6xl">
          Shop All
        </h1>
        <p className="mt-4 max-w-lg font-sans text-sm text-stone">
          Demi-fine gold jewelry, designed in studio and made to be worn every
          day. Filter by category, price, or material to find your piece.
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col gap-10 md:flex-row">
          {/* Sidebar (desktop) */}
          <aside className="hidden w-56 shrink-0 md:block">
            <FilterPanel />
          </aside>

          {/* Main */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="mb-8 flex items-center justify-between border-y border-ink/10 py-4">
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="flex items-center gap-2 font-sans text-[11px] uppercase tracking-widest2 text-ink md:hidden"
              >
                <SlidersHorizontal size={14} />
                Filters
              </button>
              <p className="hidden font-sans text-xs text-stone md:block">
                {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
              </p>

              <div className="relative">
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="appearance-none border border-ink/15 bg-cream py-2.5 pl-4 pr-10 font-sans text-[11px] uppercase tracking-widest2 text-ink focus:border-gold focus:outline-none"
                >
                  {SORTS.map((s) => (
                    <option key={s.id} value={s.id}>
                      Sort: {s.label}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  size={14}
                  className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-stone"
                />
              </div>
            </div>

            {/* Grid */}
            {filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-24 text-center">
                <p className="font-serif text-2xl text-ink">No pieces found</p>
                <p className="mt-2 font-sans text-sm text-stone">
                  Try adjusting your filters.
                </p>
                <button
                  onClick={clearAll}
                  className="mt-6 border border-ink px-8 py-3 font-sans text-[11px] uppercase tracking-widest2 text-ink hover:bg-ink hover:text-cream"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 md:gap-x-6">
                {filtered.map((p, i) => (
                  <ProductCard key={p.id} product={p} index={i} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-[80] md:hidden">
          <div
            className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full w-80 max-w-[85%] overflow-y-auto bg-cream p-6">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="font-serif text-xl uppercase tracking-wide2 text-ink">
                Filters
              </h2>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                aria-label="Close filters"
                className="text-ink hover:text-gold"
              >
                <X size={22} />
              </button>
            </div>
            <FilterPanel />
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(false)}
              className="mt-10 w-full bg-gold py-4 font-sans text-[11px] uppercase tracking-widest2 text-cream hover:bg-gold-deep"
            >
              Show {filtered.length} Results
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
