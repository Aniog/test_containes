import { useEffect, useMemo, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { SlidersHorizontal, ChevronDown } from "lucide-react"
import { PRODUCTS, CATEGORIES, MATERIALS } from "@/data/products"
import { cn } from "@/lib/utils"
import ProductCard from "@/components/product/ProductCard"
import FilterSidebar, { PRICE_BUCKETS } from "@/components/collection/FilterSidebar"

const SORT_OPTIONS = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: low to high" },
  { id: "price-desc", label: "Price: high to low" },
  { id: "rating", label: "Top Rated" },
  { id: "newest", label: "Newest" },
]

const DEFAULT_FILTERS = {
  categories: [],
  materials: [],
  price: "all",
  sort: "featured",
}

function sortProducts(products, sort) {
  const arr = [...products]
  switch (sort) {
    case "price-asc":
      return arr.sort((a, b) => a.price - b.price)
    case "price-desc":
      return arr.sort((a, b) => b.price - a.price)
    case "rating":
      return arr.sort((a, b) => (b.rating || 0) - (a.rating || 0))
    case "newest":
      return arr.sort((a, b) => (b.bestseller ? 1 : 0) - (a.bestseller ? 1 : 0))
    default:
      return arr.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
  }
}

export default function Collection() {
  const [searchParams, setSearchParams] = useSearchParams()
  const initialCategory = searchParams.get("category")
  const [filters, setFilters] = useState(() => ({
    ...DEFAULT_FILTERS,
    categories: initialCategory ? [initialCategory] : [],
  }))
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [sortOpen, setSortOpen] = useState(false)

  // When URL category changes (e.g. nav from header), sync state
  useEffect(() => {
    const cat = searchParams.get("category")
    if (cat) {
      setFilters((f) => ({ ...f, categories: [cat] }))
    } else if (searchParams.get("all") === "1") {
      setFilters(DEFAULT_FILTERS)
    }
  }, [searchParams])

  const filtered = useMemo(() => {
    const bucket = PRICE_BUCKETS.find((b) => b.id === filters.price) || PRICE_BUCKETS[0]
    const list = PRODUCTS.filter((p) => {
      if (filters.categories.length > 0 && !filters.categories.includes(p.category)) return false
      if (filters.materials.length > 0 && !filters.materials.includes(p.material)) return false
      if (p.price < bucket.min || p.price > bucket.max) return false
      return true
    })
    return sortProducts(list, filters.sort)
  }, [filters])

  const activeCategory = filters.categories.length === 1
    ? CATEGORIES.find((c) => c.id === filters.categories[0])
    : null

  const heading = activeCategory ? activeCategory.name : "All Jewelry"
  const subhead = activeCategory
    ? `Hand-finished demi-fine pieces in ${activeCategory.name.toLowerCase()}.`
    : "Demi-fine jewelry, hand-finished in 18K gold plate."

  const activeSort = SORT_OPTIONS.find((o) => o.id === filters.sort) || SORT_OPTIONS[0]

  return (
    <div className="bg-bone">
      {/* Header */}
      <div className="border-b border-line bg-bone">
        <div className="container-editorial py-10 md:py-14">
          <p className="eyebrow-gold mb-3">Shop</p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-ink font-light tracking-tight">
            {heading}
          </h1>
          <p className="mt-3 text-muted max-w-prose2 text-sm sm:text-base font-sans">{subhead}</p>
        </div>
      </div>

      <div className="container-editorial py-10 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] xl:grid-cols-[280px_1fr] gap-8 lg:gap-12">
          {/* Sidebar (desktop) */}
          <div className="hidden lg:block">
            <FilterSidebar
              filters={filters}
              onChange={(next) => {
                setFilters(next)
                if (next.categories.length === 1) {
                  setSearchParams({ category: next.categories[0] })
                } else if (next.categories.length === 0) {
                  setSearchParams({})
                }
              }}
              products={PRODUCTS}
              totalCount={filtered.length}
            />
          </div>

          <div>
            {/* Toolbar */}
            <div className="flex items-center justify-between gap-3 mb-8 pb-5 border-b border-line">
              <button
                type="button"
                onClick={() => setDrawerOpen(true)}
                className="lg:hidden inline-flex items-center gap-2 text-[11px] uppercase tracking-eyebrow text-ink font-sans border border-ink/30 hover:border-ink rounded-full px-4 h-10 transition-colors"
              >
                <SlidersHorizontal size={14} strokeWidth={1.4} /> Filters
                {(filters.categories.length + filters.materials.length > 0 || filters.price !== "all") && (
                  <span className="ml-1 h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
                )}
              </button>
              <p className="hidden lg:block text-[12px] text-muted font-sans">
                Showing <span className="text-ink font-medium">{filtered.length}</span> piece{filtered.length === 1 ? "" : "s"}
              </p>

              <div className="relative ml-auto">
                <button
                  type="button"
                  onClick={() => setSortOpen((o) => !o)}
                  className="inline-flex items-center gap-2 text-[11px] uppercase tracking-eyebrow text-ink font-sans border border-ink/30 hover:border-ink rounded-full px-4 h-10 transition-colors"
                  aria-expanded={sortOpen}
                  aria-haspopup="listbox"
                >
                  Sort: <span className="text-ink">{activeSort.label}</span>
                  <ChevronDown size={12} strokeWidth={1.4} className={cn("transition-transform", sortOpen && "rotate-180")} />
                </button>
                {sortOpen && (
                  <ul
                    role="listbox"
                    className="absolute right-0 top-full mt-2 z-20 min-w-[200px] bg-bone border border-line shadow-soft py-2 animate-slideDown"
                  >
                    {SORT_OPTIONS.map((opt) => (
                      <li key={opt.id}>
                        <button
                          type="button"
                          role="option"
                          aria-selected={filters.sort === opt.id}
                          onClick={() => {
                            setFilters({ ...filters, sort: opt.id })
                            setSortOpen(false)
                          }}
                          className={cn(
                            "w-full text-left px-4 py-2 text-sm font-sans transition-colors",
                            filters.sort === opt.id
                              ? "text-ink bg-bone-2"
                              : "text-muted hover:text-ink hover:bg-bone-2/50"
                          )}
                        >
                          {opt.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {/* Active filter chips */}
            {(filters.categories.length > 0 || filters.materials.length > 0 || filters.price !== "all") && (
              <div className="flex flex-wrap gap-2 mb-6">
                {filters.categories.map((cId) => {
                  const cat = CATEGORIES.find((c) => c.id === cId)
                  if (!cat) return null
                  return (
                    <button
                      key={cId}
                      onClick={() => setFilters({ ...filters, categories: filters.categories.filter((c) => c !== cId) })}
                      className="text-[11px] uppercase tracking-eyebrow text-ink border border-line rounded-full px-3.5 h-8 inline-flex items-center gap-2 hover:border-ink transition-colors font-sans"
                    >
                      {cat.name} ×
                    </button>
                  )
                })}
                {filters.materials.map((mId) => {
                  const m = MATERIALS.find((x) => x.id === mId)
                  return (
                    <button
                      key={mId}
                      onClick={() => setFilters({ ...filters, materials: filters.materials.filter((m) => m !== mId) })}
                      className="text-[11px] uppercase tracking-eyebrow text-ink border border-line rounded-full px-3.5 h-8 inline-flex items-center gap-2 hover:border-ink transition-colors font-sans"
                    >
                      {m?.label || mId} ×
                    </button>
                  )
                })}
                {filters.price !== "all" && (
                  <button
                    onClick={() => setFilters({ ...filters, price: "all" })}
                    className="text-[11px] uppercase tracking-eyebrow text-ink border border-line rounded-full px-3.5 h-8 inline-flex items-center gap-2 hover:border-ink transition-colors font-sans"
                  >
                    {PRICE_BUCKETS.find((b) => b.id === filters.price)?.label} ×
                  </button>
                )}
              </div>
            )}

            {filtered.length === 0 ? (
              <div className="py-20 text-center">
                <p className="eyebrow mb-3">No pieces match</p>
                <h2 className="font-serif text-3xl text-ink mb-3">Try a different filter</h2>
                <button
                  type="button"
                  onClick={() => setFilters(DEFAULT_FILTERS)}
                  className="btn btn-outline h-11 px-6 text-[0.7rem] mt-3"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-12 sm:gap-x-6 lg:gap-x-7">
                {filtered.map((p, i) => (
                  <ProductCard key={p.id} product={p} priority={i < 3} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {drawerOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
            onClick={() => setDrawerOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute right-0 top-0 h-full w-[88%] max-w-sm bg-bone overflow-y-auto p-6 animate-slideInRight">
            <FilterSidebar
              filters={filters}
              onChange={(next) => {
                setFilters(next)
                if (next.categories.length === 1) {
                  setSearchParams({ category: next.categories[0] })
                } else if (next.categories.length === 0) {
                  setSearchParams({})
                }
              }}
              products={PRODUCTS}
              totalCount={filtered.length}
              onClose={() => setDrawerOpen(false)}
            />
            <button
              type="button"
              onClick={() => setDrawerOpen(false)}
              className="mt-6 w-full btn btn-primary h-12 text-[0.72rem]"
            >
              Show {filtered.length} piece{filtered.length === 1 ? "" : "s"}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
