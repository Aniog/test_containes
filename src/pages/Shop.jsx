import { useEffect, useMemo, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { SlidersHorizontal, X } from "lucide-react"
import { PRODUCTS, CATEGORIES } from "@/data/products"
import ProductCard from "@/components/product/ProductCard"
import FilterSidebar, { PRICE_BUCKETS } from "@/components/product/FilterSidebar"
import SortDropdown from "@/components/product/SortDropdown"
import { cn } from "@/lib/utils"

const DEFAULT_FILTERS = {
  categories: [],
  materials: [],
  price: "all",
}

function priceMatches(price, bucketId) {
  const bucket = PRICE_BUCKETS.find((b) => b.id === bucketId)
  if (!bucket) return true
  return price >= bucket.min && price < bucket.max
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [filters, setFilters] = useState(() => {
    const initial = { ...DEFAULT_FILTERS }
    const cat = searchParams.get("category")
    if (cat) initial.categories = [cat]
    return initial
  })
  const [sort, setSort] = useState("featured")
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false)

  useEffect(() => {
    // If URL category changes, sync it into filters
    const cat = searchParams.get("category")
    setFilters((current) => {
      const currentCats = current.categories
      if (cat && !currentCats.includes(cat)) {
        return { ...current, categories: [cat] }
      }
      if (!cat && currentCats.length === 1) {
        return { ...current, categories: [] }
      }
      return current
    })
  }, [searchParams])

  const filtered = useMemo(() => {
    let list = [...PRODUCTS]
    if (filters.categories.length > 0) {
      list = list.filter((p) => filters.categories.includes(p.category))
    }
    if (filters.materials.length > 0) {
      list = list.filter((p) => filters.materials.includes(p.material))
    }
    if (filters.price !== "all") {
      list = list.filter((p) => priceMatches(p.price, filters.price))
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
      case "newest":
        list.sort((a, b) => (a.bestSeller ? -1 : 1))
        break
      default:
        list.sort((a, b) => (b.bestSeller ? 1 : -1) - (a.bestSeller ? -1 : 1))
    }
    return list
  }, [filters, sort])

  const activeCategory = filters.categories[0]
  const heading = activeCategory
    ? CATEGORIES.find((c) => c.slug === activeCategory)?.name || "Shop"
    : "All Jewelry"

  const setCategoryParam = (slug) => {
    const params = new URLSearchParams(searchParams)
    if (slug) params.set("category", slug)
    else params.delete("category")
    setSearchParams(params, { replace: true })
  }

  const clearFilters = () => {
    setFilters(DEFAULT_FILTERS)
    setSearchParams({}, { replace: true })
  }

  return (
    <div className="bg-paper pt-24 md:pt-32">
      {/* Header */}
      <header className="border-b border-line-light">
        <div className="mx-auto max-w-8xl px-5 pb-10 md:px-8 md:pb-14">
          <p className="eyebrow">Shop</p>
          <h1 className="mt-3 font-display text-4xl font-light leading-[1.05] md:text-6xl">
            {heading}
          </h1>
          <p className="mt-4 max-w-lg text-sm text-text-muted md:text-base">
            Demi-fine gold jewelry, finished by hand and made to wear every
            day. Every piece is 18K gold plated, hypoallergenic, and gift-ready.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-8xl px-5 md:px-8">
        <div className="grid gap-10 py-10 md:grid-cols-12 md:gap-12 md:py-14">
          {/* Sidebar (desktop) */}
          <div className="hidden md:col-span-3 md:block">
            <FilterSidebar
              filters={filters}
              onChange={setFilters}
              onClear={clearFilters}
              resultCount={filtered.length}
            />
          </div>

          {/* Main */}
          <div className="md:col-span-9">
            {/* Toolbar */}
            <div className="flex items-center justify-between border-b border-line-light pb-4">
              <p className="text-[11px] uppercase tracking-[0.28em] text-text-muted">
                {filtered.length} piece{filtered.length === 1 ? "" : "s"}
              </p>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setMobileFilterOpen(true)}
                  className="inline-flex items-center gap-2 border border-line-light px-4 py-3 text-[11px] uppercase tracking-[0.28em] text-ink md:hidden"
                >
                  <SlidersHorizontal className="h-3.5 w-3.5" strokeWidth={1.5} />
                  Filter
                </button>
                <SortDropdown value={sort} onChange={setSort} />
              </div>
            </div>

            {/* Category quick pills */}
            <div className="mt-6 flex flex-wrap gap-2">
              <CategoryPill
                active={!activeCategory}
                onClick={() => {
                  setFilters((f) => ({ ...f, categories: [] }))
                  setCategoryParam(null)
                }}
              >
                All
              </CategoryPill>
              {CATEGORIES.map((c) => (
                <CategoryPill
                  key={c.slug}
                  active={activeCategory === c.slug}
                  onClick={() => {
                    setFilters((f) => ({ ...f, categories: [c.slug] }))
                    setCategoryParam(c.slug)
                  }}
                >
                  {c.name}
                </CategoryPill>
              ))}
            </div>

            {/* Grid */}
            {filtered.length > 0 ? (
              <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-12 md:mt-12 md:grid-cols-3 md:gap-x-8 md:gap-y-14">
                {filtered.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            ) : (
              <div className="mt-16 flex flex-col items-center justify-center border border-dashed border-line-light px-6 py-20 text-center">
                <p className="font-display text-2xl">No pieces match yet</p>
                <p className="mt-2 max-w-sm text-sm text-text-muted">
                  Try removing a filter, or browse the full collection.
                </p>
                <button
                  type="button"
                  onClick={clearFilters}
                  className="mt-6 inline-block border border-ink px-7 py-3 text-[11px] uppercase tracking-[0.28em] text-ink transition-colors hover:bg-ink hover:text-paper"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      <MobileFilterDrawer
        open={mobileFilterOpen}
        onClose={() => setMobileFilterOpen(false)}
      >
        <FilterSidebar
          filters={filters}
          onChange={setFilters}
          onClear={clearFilters}
          resultCount={filtered.length}
        />
      </MobileFilterDrawer>
    </div>
  )
}

function CategoryPill({ active, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "border px-4 py-2 text-[11px] uppercase tracking-[0.28em] transition-all duration-300",
        active
          ? "border-ink bg-ink text-paper"
          : "border-line-light bg-paper text-ink hover:border-ink",
      )}
    >
      {children}
    </button>
  )
}

function MobileFilterDrawer({ open, onClose, children }) {
  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <button
        type="button"
        aria-label="Close filters"
        onClick={onClose}
        className="absolute inset-0 bg-ink/40"
      />
      <div className="absolute inset-x-0 bottom-0 max-h-[88vh] overflow-y-auto rounded-t-sm bg-paper p-6">
        <div className="mb-4 flex items-center justify-between border-b border-line-light pb-4">
          <p className="eyebrow">Filter</p>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="inline-flex h-9 w-9 items-center justify-center"
          >
            <X className="h-5 w-5" strokeWidth={1.25} />
          </button>
        </div>
        {children}
        <button
          type="button"
          onClick={onClose}
          className="mt-6 block w-full bg-ink py-4 text-center text-[11px] uppercase tracking-[0.28em] text-paper"
        >
          Show Results
        </button>
      </div>
    </div>
  )
}
