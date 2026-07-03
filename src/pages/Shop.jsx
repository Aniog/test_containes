import { useMemo, useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { SlidersHorizontal, X, ChevronDown } from "lucide-react"
import { PRODUCTS, CATEGORIES } from "@/data/products"
import ProductCard from "@/components/product/ProductCard"
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
  { id: "50-100", label: "$50 – $100", min: 50, max: 100 },
  { id: "over-100", label: "Over $100", min: 100, max: Infinity },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [sort, setSort] = useState("featured")

  const categoryParam = searchParams.get("category") || "all"
  const queryParam = searchParams.get("q") || ""

  const [priceRange, setPriceRange] = useState("all")
  const [material, setMaterial] = useState("all")

  // Sync price range when navigating with category
  useEffect(() => {
    setPriceRange("all")
    setMaterial("all")
  }, [categoryParam])

  const setCategory = (catId) => {
    const next = new URLSearchParams(searchParams)
    if (catId === "all") next.delete("category")
    else next.set("category", catId)
    setSearchParams(next)
  }

  const filtered = useMemo(() => {
    let list = [...PRODUCTS]

    if (categoryParam !== "all") {
      list = list.filter((p) => p.category === categoryParam)
    }

    if (queryParam) {
      const q = queryParam.toLowerCase()
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.shortDesc.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      )
    }

    const range = PRICE_RANGES.find((r) => r.id === priceRange)
    if (range) {
      list = list.filter((p) => p.price >= range.min && p.price < range.max)
    }

    if (material !== "all") {
      list = list.filter((p) => p.tone === material)
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
  }, [categoryParam, queryParam, priceRange, material, sort])

  const activeCategory = CATEGORIES.find((c) => c.id === categoryParam)
  const heading = queryParam
    ? `Results for "${queryParam}"`
    : activeCategory
    ? activeCategory.name
    : "All Jewelry"

  const FilterContent = () => (
    <div className="flex flex-col gap-10">
      {/* Category */}
      <div>
        <h3 className="font-sans text-[11px] uppercase tracking-[0.2em] text-ink">
          Category
        </h3>
        <ul className="mt-4 flex flex-col gap-3">
          <li>
            <button
              type="button"
              onClick={() => setCategory("all")}
              className={cn(
                "font-sans text-sm transition-colors",
                categoryParam === "all" ? "text-gold" : "text-taupe hover:text-ink"
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
                  "font-sans text-sm transition-colors",
                  categoryParam === c.id ? "text-gold" : "text-taupe hover:text-ink"
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
        <h3 className="font-sans text-[11px] uppercase tracking-[0.2em] text-ink">
          Price
        </h3>
        <ul className="mt-4 flex flex-col gap-3">
          {PRICE_RANGES.map((r) => (
            <li key={r.id}>
              <button
                type="button"
                onClick={() => setPriceRange(r.id)}
                className={cn(
                  "font-sans text-sm transition-colors",
                  priceRange === r.id ? "text-gold" : "text-taupe hover:text-ink"
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
        <h3 className="font-sans text-[11px] uppercase tracking-[0.2em] text-ink">
          Material
        </h3>
        <ul className="mt-4 flex flex-col gap-3">
          <li>
            <button
              type="button"
              onClick={() => setMaterial("all")}
              className={cn(
                "font-sans text-sm transition-colors",
                material === "all" ? "text-gold" : "text-taupe hover:text-ink"
              )}
            >
              All Materials
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => setMaterial("gold")}
              className={cn(
                "font-sans text-sm transition-colors",
                material === "gold" ? "text-gold" : "text-taupe hover:text-ink"
              )}
            >
              18K Gold Plated
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => setMaterial("silver")}
              className={cn(
                "font-sans text-sm transition-colors",
                material === "silver" ? "text-gold" : "text-taupe hover:text-ink"
              )}
            >
              Sterling Silver
            </button>
          </li>
        </ul>
      </div>
    </div>
  )

  return (
    <div className="pt-20">
      {/* Header */}
      <div className="mx-auto max-w-8xl px-5 py-12 text-center md:px-8 md:py-16">
        <p className="font-sans text-[11px] uppercase tracking-[0.3em] text-gold">
          The Collection
        </p>
        <h1 className="mt-3 font-serif text-4xl font-light text-ink md:text-5xl">
          {heading}
        </h1>
        <div className="mx-auto mt-6 h-px w-12 bg-gold" />
      </div>

      <div className="mx-auto max-w-8xl px-5 pb-20 md:px-8">
        {/* Toolbar */}
        <div className="mb-8 flex items-center justify-between border-y border-sand py-4">
          <button
            type="button"
            onClick={() => setMobileFiltersOpen(true)}
            className="flex items-center gap-2 font-sans text-[11px] uppercase tracking-[0.2em] text-ink md:hidden"
          >
            <SlidersHorizontal size={14} />
            Filters
          </button>
          <p className="hidden font-sans text-xs text-taupe md:block">
            {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
          </p>
          <div className="relative">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="appearance-none border border-sand bg-ivory py-2.5 pl-4 pr-10 font-sans text-[11px] uppercase tracking-[0.15em] text-ink focus:border-gold focus:outline-none"
            >
              {SORTS.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.label}
                </option>
              ))}
            </select>
            <ChevronDown
              size={14}
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-taupe"
            />
          </div>
        </div>

        <div className="flex gap-12">
          {/* Sidebar (desktop) */}
          <aside className="hidden w-56 shrink-0 md:block">
            <FilterContent />
          </aside>

          {/* Grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-24 text-center">
                <p className="font-serif text-2xl text-ink">No pieces found</p>
                <p className="mt-2 font-sans text-sm text-taupe">
                  Try adjusting your filters.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setCategory("all")
                    setPriceRange("all")
                    setMaterial("all")
                  }}
                  className="mt-6 border border-ink px-8 py-3 font-sans text-[11px] uppercase tracking-[0.2em] text-ink transition-colors hover:bg-ink hover:text-ivory"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 lg:gap-x-6">
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
            className="absolute inset-0 bg-espresso/40 backdrop-blur-sm"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full w-80 max-w-[85vw] bg-ivory p-6 shadow-soft">
            <div className="flex items-center justify-between border-b border-sand pb-4">
              <h2 className="font-serif text-xl uppercase tracking-[0.15em] text-ink">
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
            <div className="mt-6 overflow-y-auto">
              <FilterContent />
            </div>
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(false)}
              className="mt-8 w-full bg-gold py-4 font-sans text-[11px] uppercase tracking-[0.2em] text-ivory transition-colors hover:bg-gold-dark"
            >
              Show {filtered.length} Results
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
