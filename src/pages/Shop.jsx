import { useEffect, useMemo, useRef, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { SlidersHorizontal, X } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { products, CATEGORIES } from "@/data/products"
import { ProductCard } from "@/components/product/ProductCard"
import { FilterSidebar } from "@/components/shop/FilterSidebar"
import { cn } from "@/lib/utils"

const PRICE_RANGES = {
  all: { min: 0, max: Infinity },
  u40: { min: 0, max: 40 },
  "40-70": { min: 40, max: 70 },
  "70+": { min: 70, max: Infinity },
}

const SORT_OPTIONS = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price · Low to high" },
  { id: "price-desc", label: "Price · High to low" },
  { id: "rating", label: "Top rated" },
  { id: "newest", label: "Newest" },
]

export default function Shop() {
  const [params, setParams] = useSearchParams()
  const initialCategory = params.get("category")

  const [filters, setFilters] = useState({
    categories: initialCategory ? [initialCategory] : [],
    materials: [],
    price: "all",
  })
  const [sort, setSort] = useState("featured")
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const containerRef = useRef(null)

  // Keep URL in sync with category for shareable filter links
  useEffect(() => {
    if (filters.categories.length === 1) {
      setParams({ category: filters.categories[0] }, { replace: true })
    } else {
      setParams({}, { replace: true })
    }
  }, [filters.categories, setParams])

  // Re-load images whenever the visible set changes
  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [filters, sort])

  // Lock body scroll when mobile filter sheet is open
  useEffect(() => {
    if (mobileFiltersOpen) {
      const prev = document.body.style.overflow
      document.body.style.overflow = "hidden"
      return () => {
        document.body.style.overflow = prev
      }
    }
  }, [mobileFiltersOpen])

  const counts = useMemo(() => {
    const c = { category: {}, material: {} }
    products.forEach((p) => {
      c.category[p.category] = (c.category[p.category] || 0) + 1
      c.material[p.material] = (c.material[p.material] || 0) + 1
    })
    return c
  }, [])

  const filtered = useMemo(() => {
    const range = PRICE_RANGES[filters.price] || PRICE_RANGES.all
    return products.filter((p) => {
      if (filters.categories.length && !filters.categories.includes(p.category))
        return false
      if (filters.materials.length && !filters.materials.includes(p.material))
        return false
      if (p.price < range.min || p.price > range.max) return false
      return true
    })
  }, [filters])

  const sorted = useMemo(() => {
    const list = [...filtered]
    switch (sort) {
      case "price-asc":
        return list.sort((a, b) => a.price - b.price)
      case "price-desc":
        return list.sort((a, b) => b.price - a.price)
      case "rating":
        return list.sort((a, b) => b.rating - a.rating)
      case "newest":
        return list.sort((a, b) => Number(b.id > a.id) - Number(a.id > b.id))
      default:
        return list
    }
  }, [filtered, sort])

  const activeChips = [
    ...filters.categories.map((c) => ({
      type: "category",
      value: c,
      label: CATEGORIES.find((x) => x.id === c)?.label || c,
    })),
    ...filters.materials.map((m) => ({
      type: "material",
      value: m,
      label: m,
    })),
  ]

  return (
    <div ref={containerRef} className="bg-ivory-100 pt-24 md:pt-28">
      {/* Page header */}
      <div className="container-x">
        <div className="border-b border-taupe-200 pb-10 pt-2 md:pb-14">
          <p className="eyebrow">The Collection</p>
          <h1 className="mt-3 font-serif text-4xl text-ink-500 sm:text-5xl lg:text-6xl">
            Shop All
          </h1>
          <p className="mt-4 max-w-xl font-serif text-[17px] leading-relaxed text-ink-300">
            Demi-fine gold jewelry, hand-finished in small batches. Each piece
            is crafted to be lived in — quietly, daily, for a long time.
          </p>
        </div>
      </div>

      <div className="container-x py-10 md:py-14">
        <div className="grid gap-10 md:grid-cols-12 md:gap-12">
          {/* Desktop sidebar */}
          <div className="hidden md:col-span-3 md:block">
            <FilterSidebar
              filters={filters}
              setFilters={setFilters}
              counts={counts}
            />
          </div>

          {/* Main */}
          <div className="md:col-span-9">
            {/* Toolbar */}
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-taupe-200 pb-5">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(true)}
                  className="inline-flex items-center gap-2 border border-ink-500/30 px-4 py-2 text-[11px] font-semibold uppercase tracking-wider2 text-ink-500 transition-colors hover:border-ink-500 md:hidden"
                >
                  <SlidersHorizontal size={14} strokeWidth={1.5} />
                  Filters
                </button>
                <span className="text-[12px] text-ink-200">
                  {sorted.length} {sorted.length === 1 ? "piece" : "pieces"}
                </span>
              </div>
              <label className="inline-flex items-center gap-2 text-[12px] text-ink-200">
                <span className="hidden sm:inline">Sort by</span>
                <div className="relative">
                  <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    className="appearance-none border-b border-ink-500/40 bg-transparent py-2 pr-7 text-[12px] font-semibold uppercase tracking-wider2 text-ink-500 focus:outline-none focus:border-ink-500"
                  >
                    {SORT_OPTIONS.map((o) => (
                      <option key={o.id} value={o.id}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute right-1 top-1/2 -translate-y-1/2 text-ink-500"
                  >
                    ▾
                  </span>
                </div>
              </label>
            </div>

            {/* Active filter chips */}
            {activeChips.length > 0 && (
              <div className="mb-6 flex flex-wrap items-center gap-2">
                {activeChips.map((chip) => (
                  <button
                    key={`${chip.type}-${chip.value}`}
                    type="button"
                    onClick={() =>
                      setFilters((f) => ({
                        ...f,
                        [chip.type === "category" ? "categories" : "materials"]:
                          (chip.type === "category" ? f.categories : f.materials).filter(
                            (v) => v !== chip.value,
                          ),
                      }))
                    }
                    className="inline-flex items-center gap-2 border border-taupe-200 px-3 py-1.5 text-[11px] uppercase tracking-wider2 text-ink-500 transition-colors hover:border-ink-500"
                  >
                    {chip.label}
                    <X size={12} strokeWidth={1.5} />
                  </button>
                ))}
              </div>
            )}

            {/* Grid */}
            {sorted.length === 0 ? (
              <div className="py-20 text-center">
                <p className="eyebrow">Empty</p>
                <h3 className="mt-3 font-serif text-3xl text-ink-500">
                  Nothing matches those filters
                </h3>
                <button
                  type="button"
                  onClick={() =>
                    setFilters({ categories: [], materials: [], price: "all" })
                  }
                  className="btn-outline mt-6 inline-flex"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-x-4 gap-y-12 sm:gap-x-6 md:grid-cols-3 md:gap-y-14">
                {sorted.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter sheet */}
      <div
        aria-hidden={!mobileFiltersOpen}
        className={cn(
          "fixed inset-0 z-[80] md:hidden",
          mobileFiltersOpen ? "pointer-events-auto" : "pointer-events-none",
        )}
      >
        <div
          onClick={() => setMobileFiltersOpen(false)}
          className={cn(
            "absolute inset-0 bg-ink-700/60 backdrop-blur-sm transition-opacity duration-500",
            mobileFiltersOpen ? "opacity-100" : "opacity-0",
          )}
        />
        <div
          className={cn(
            "absolute inset-x-0 bottom-0 max-h-[85vh] overflow-y-auto rounded-t-md bg-ivory-100 transition-transform duration-500 ease-elegant",
            mobileFiltersOpen ? "translate-y-0" : "translate-y-full",
          )}
        >
          <div className="sticky top-0 z-10 flex items-center justify-between border-b border-taupe-200 bg-ivory-100 px-5 py-4">
            <span className="text-[11px] font-semibold uppercase tracking-wider2 text-ink-500">
              Refine
            </span>
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(false)}
              aria-label="Close filters"
              className="flex h-9 w-9 items-center justify-center text-ink-500"
            >
              <X size={18} strokeWidth={1.5} />
            </button>
          </div>
          <div className="px-5 pb-8 pt-2">
            <FilterSidebar
              filters={filters}
              setFilters={setFilters}
              counts={counts}
            />
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(false)}
              className="btn-primary mt-6 w-full"
            >
              View {sorted.length} Pieces
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
