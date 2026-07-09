import { useMemo, useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { SlidersHorizontal, X } from "lucide-react"
import { PRODUCTS, CATEGORIES, MATERIALS } from "@/data/products"
import { useStrkImages } from "@/lib/useStrkImages"
import { cn } from "@/lib/utils"
import ProductCard from "@/components/product/ProductCard"

const SORTS = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
]

const PRICE_RANGES = [
  { id: "all", label: "All Prices", min: 0, max: Infinity },
  { id: "under-50", label: "Under $50", min: 0, max: 49 },
  { id: "50-100", label: "$50 – $100", min: 50, max: 100 },
  { id: "over-100", label: "Over $100", min: 101, max: Infinity },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const ref = useStrkImages([])

  const initialCategory = searchParams.get("category") || "all"
  const [category, setCategory] = useState(initialCategory)
  const [price, setPrice] = useState("all")
  const [material, setMaterial] = useState("all")
  const [sort, setSort] = useState("featured")
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  // sync category from URL
  useEffect(() => {
    const c = searchParams.get("category") || "all"
    setCategory(c)
  }, [searchParams])

  const updateCategory = (c) => {
    setCategory(c)
    const next = new URLSearchParams(searchParams)
    if (c === "all") next.delete("category")
    else next.set("category", c)
    setSearchParams(next, { replace: true })
  }

  const filtered = useMemo(() => {
    const range = PRICE_RANGES.find((r) => r.id === price) || PRICE_RANGES[0]
    let list = PRODUCTS.filter((p) => {
      if (category !== "all" && p.category !== category) return false
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
  }, [category, price, sort])

  const activeFilterCount =
    (category !== "all" ? 1 : 0) + (price !== "all" ? 1 : 0) + (material !== "all" ? 1 : 0)

  const clearFilters = () => {
    updateCategory("all")
    setPrice("all")
    setMaterial("all")
  }

  const FilterPanel = (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="text-[11px] uppercase tracking-widest2 text-ink">Category</h3>
        <ul className="mt-4 space-y-2.5">
          <li>
            <button
              type="button"
              onClick={() => updateCategory("all")}
              className={cn(
                "text-sm transition-colors",
                category === "all" ? "text-gold" : "text-taupe hover:text-ink"
              )}
            >
              All Jewelry
            </button>
          </li>
          {CATEGORIES.map((c) => (
            <li key={c.id}>
              <button
                type="button"
                onClick={() => updateCategory(c.id)}
                className={cn(
                  "text-sm transition-colors",
                  category === c.id ? "text-gold" : "text-taupe hover:text-ink"
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
        <h3 className="text-[11px] uppercase tracking-widest2 text-ink">Price</h3>
        <ul className="mt-4 space-y-2.5">
          {PRICE_RANGES.map((r) => (
            <li key={r.id}>
              <button
                type="button"
                onClick={() => setPrice(r.id)}
                className={cn(
                  "text-sm transition-colors",
                  price === r.id ? "text-gold" : "text-taupe hover:text-ink"
                )}
              >
                {r.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Material */}
      <div>
        <h3 className="text-[11px] uppercase tracking-widest2 text-ink">Material</h3>
        <ul className="mt-4 space-y-2.5">
          <li>
            <button
              type="button"
              onClick={() => setMaterial("all")}
              className={cn(
                "text-sm transition-colors",
                material === "all" ? "text-gold" : "text-taupe hover:text-ink"
              )}
            >
              All Materials
            </button>
          </li>
          {MATERIALS.map((m) => (
            <li key={m.id}>
              <button
                type="button"
                onClick={() => setMaterial(m.id)}
                className={cn(
                  "text-sm transition-colors",
                  material === m.id ? "text-gold" : "text-taupe hover:text-ink"
                )}
              >
                {m.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {activeFilterCount > 0 && (
        <button
          type="button"
          onClick={clearFilters}
          className="text-[11px] uppercase tracking-widest2 text-taupe underline underline-offset-4 transition-colors hover:text-gold"
        >
          Clear All ({activeFilterCount})
        </button>
      )}
    </div>
  )

  return (
    <div ref={ref} className="pt-24 md:pt-28">
      {/* Header */}
      <div className="border-b border-sand">
        <div className="mx-auto max-w-8xl px-5 py-12 text-center md:px-8 md:py-16">
          <p className="text-[11px] uppercase tracking-widest3 text-taupe">
            The Collection
          </p>
          <h1 className="mt-3 font-serif text-4xl text-ink md:text-5xl">
            Shop All Jewelry
          </h1>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-taupe">
            Demi-fine gold pieces, designed to be worn every day and treasured
            for years.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-8xl px-5 py-10 md:px-8 md:py-12">
        {/* Toolbar */}
        <div className="mb-8 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => setMobileFiltersOpen(true)}
            className="inline-flex items-center gap-2 border border-sand px-4 py-2.5 text-[11px] uppercase tracking-widest2 text-ink transition-colors hover:border-ink lg:hidden"
          >
            <SlidersHorizontal size={14} />
            Filters
            {activeFilterCount > 0 && (
              <span className="bg-gold px-1.5 text-[9px] text-ink">{activeFilterCount}</span>
            )}
          </button>

          <p className="hidden text-sm text-taupe lg:block">
            {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
          </p>

          <div className="flex items-center gap-3">
            <label htmlFor="sort" className="text-[11px] uppercase tracking-widest2 text-taupe">
              Sort
            </label>
            <select
              id="sort"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="border border-sand bg-cream px-3 py-2.5 text-sm text-ink focus:border-ink focus:outline-none"
            >
              {SORTS.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-[220px_1fr] lg:gap-14">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">{FilterPanel}</div>
          </aside>

          {/* Grid */}
          <div>
            {filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-24 text-center">
                <p className="font-serif text-2xl text-ink">No pieces found</p>
                <p className="mt-2 text-sm text-taupe">
                  Try adjusting your filters.
                </p>
                <button
                  type="button"
                  onClick={clearFilters}
                  className="mt-6 text-[11px] uppercase tracking-widest2 text-gold underline underline-offset-4"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 md:gap-x-6">
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
            className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute left-0 top-0 flex h-full w-80 max-w-[85vw] flex-col bg-ivory">
            <div className="flex items-center justify-between border-b border-sand px-6 py-5">
              <h2 className="font-serif text-xl uppercase tracking-widest2 text-ink">
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
            <div className="flex-1 overflow-y-auto px-6 py-6">{FilterPanel}</div>
            <div className="border-t border-sand px-6 py-4">
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                className="w-full bg-gold py-3.5 text-[11px] uppercase tracking-widest2 text-ink transition-colors hover:bg-gold-deep"
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
