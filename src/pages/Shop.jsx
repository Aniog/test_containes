import { useMemo, useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { SlidersHorizontal, X, ChevronDown } from "lucide-react"
import { products, CATEGORIES, MATERIALS } from "@/data/products"
import ProductCard from "@/components/product/ProductCard"
import { cn } from "@/lib/utils"

const SORTS = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
]

const PRICE_BUCKETS = [
  { id: "all", label: "All Prices", min: 0, max: Infinity },
  { id: "under-50", label: "Under $50", min: 0, max: 49 },
  { id: "50-80", label: "$50 – $80", min: 50, max: 80 },
  { id: "over-80", label: "Over $80", min: 81, max: Infinity },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const initialCategory = searchParams.get("category") || "all"

  const [category, setCategory] = useState(initialCategory)
  const [material, setMaterial] = useState("all")
  const [price, setPrice] = useState("all")
  const [sort, setSort] = useState("featured")
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  // Sync category from URL (e.g. nav links to /shop?category=earrings)
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
    const bucket = PRICE_BUCKETS.find((b) => b.id === price)
    const sortFn =
      sort === "price-asc"
        ? (a, b) => a.price - b.price
        : sort === "price-desc"
          ? (a, b) => b.price - a.price
          : sort === "rating"
            ? (a, b) => b.rating - a.rating
            : (a, b) => Number(b.bestseller) - Number(a.bestseller)
    return products
      .filter(
        (p) =>
          (category === "all" || p.category === category) &&
          (material === "all" || p.materials.includes(material)) &&
          (!bucket || (p.price >= bucket.min && p.price <= bucket.max))
      )
      .sort(sortFn)
  }, [category, material, price, sort])

  const activeCount =
    (category !== "all" ? 1 : 0) +
    (material !== "all" ? 1 : 0) +
    (price !== "all" ? 1 : 0)

  const clearAll = () => {
    updateCategory("all")
    setMaterial("all")
    setPrice("all")
  }

  const FilterPanel = () => (
    <div className="space-y-9">
      {/* Category */}
      <div>
        <h3 className="mb-4 text-[11px] uppercase tracking-[0.22em] text-ink">
          Category
        </h3>
        <div className="space-y-2.5">
          <FilterRadio
            checked={category === "all"}
            onClick={() => updateCategory("all")}
            label="All Jewelry"
          />
          {CATEGORIES.map((c) => (
            <FilterRadio
              key={c.id}
              checked={category === c.id}
              onClick={() => updateCategory(c.id)}
              label={c.name}
            />
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="mb-4 text-[11px] uppercase tracking-[0.22em] text-ink">
          Material
        </h3>
        <div className="space-y-2.5">
          <FilterRadio
            checked={material === "all"}
            onClick={() => setMaterial("all")}
            label="All Materials"
          />
          {MATERIALS.map((m) => (
            <FilterRadio
              key={m.id}
              checked={material === m.id}
              onClick={() => setMaterial(m.id)}
              label={m.name}
            />
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="mb-4 text-[11px] uppercase tracking-[0.22em] text-ink">
          Price
        </h3>
        <div className="space-y-2.5">
          {PRICE_BUCKETS.map((b) => (
            <FilterRadio
              key={b.id}
              checked={price === b.id}
              onClick={() => setPrice(b.id)}
              label={b.label}
            />
          ))}
        </div>
      </div>

      {activeCount > 0 && (
        <button
          onClick={clearAll}
          className="text-[11px] uppercase tracking-[0.2em] text-gold-deep underline underline-offset-4 hover:text-ink"
        >
          Clear All ({activeCount})
        </button>
      )}
    </div>
  )

  return (
    <div className="pt-16 sm:pt-20">
      {/* Page header */}
      <div className="border-b border-sand bg-cream">
        <div className="mx-auto max-w-7xl px-5 py-14 text-center sm:px-8 sm:py-20">
          <p className="mb-3 text-[11px] uppercase tracking-[0.28em] text-gold">
            The Collection
          </p>
          <h1 className="font-serif text-5xl font-light text-ink sm:text-6xl">
            {category === "all"
              ? "All Jewelry"
              : CATEGORIES.find((c) => c.id === category)?.name}
          </h1>
          <p className="mx-auto mt-4 max-w-md text-sm text-muted">
            Demi-fine 18K gold plated pieces, crafted to be treasured and worn
            every day.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14">
        {/* Toolbar */}
        <div className="mb-8 flex items-center justify-between gap-4">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="flex items-center gap-2 border border-sand px-4 py-2.5 text-[11px] uppercase tracking-[0.18em] text-ink lg:hidden"
          >
            <SlidersHorizontal size={14} strokeWidth={1.5} />
            Filters
            {activeCount > 0 && (
              <span className="bg-gold px-1.5 text-[10px] text-ink">{activeCount}</span>
            )}
          </button>

          <p className="hidden text-xs uppercase tracking-[0.18em] text-muted lg:block">
            {filtered.length} {filtered.length === 1 ? "Piece" : "Pieces"}
          </p>

          <div className="relative">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="appearance-none border border-sand bg-ivory py-2.5 pl-4 pr-10 text-[11px] uppercase tracking-[0.16em] text-ink focus:border-ink focus:outline-none"
            >
              {SORTS.map((s) => (
                <option key={s.id} value={s.id}>
                  Sort: {s.label}
                </option>
              ))}
            </select>
            <ChevronDown
              size={14}
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted"
            />
          </div>
        </div>

        <div className="flex gap-12">
          {/* Sidebar (desktop) */}
          <aside className="hidden w-56 shrink-0 lg:block">
            <FilterPanel />
          </aside>

          {/* Grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-24 text-center">
                <p className="font-serif text-3xl text-ink">No pieces found</p>
                <p className="mt-2 text-sm text-muted">
                  Try adjusting your filters.
                </p>
                <button
                  onClick={clearAll}
                  className="mt-6 bg-gold px-8 py-3 text-[11px] uppercase tracking-[0.2em] text-ink hover:bg-gold-deep hover:text-ivory"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-x-5 gap-y-10 sm:gap-x-6 md:grid-cols-3">
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
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div
            className="absolute inset-0 bg-ink/50 backdrop-blur-sm"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full w-[85%] max-w-sm overflow-y-auto bg-ivory p-6 shadow-xl">
            <div className="mb-8 flex items-center justify-between">
              <span className="font-serif text-xl tracking-[0.15em]">FILTERS</span>
              <button onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters">
                <X size={22} strokeWidth={1.5} />
              </button>
            </div>
            <FilterPanel />
            <button
              onClick={() => setMobileFiltersOpen(false)}
              className="mt-8 w-full bg-gold py-4 text-[11px] uppercase tracking-[0.2em] text-ink hover:bg-gold-deep hover:text-ivory"
            >
              Show {filtered.length} Results
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

function FilterRadio({ checked, onClick, label }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full items-center gap-3 text-left"
    >
      <span
        className={cn(
          "flex h-4 w-4 items-center justify-center rounded-full border transition-colors",
          checked ? "border-gold" : "border-sand"
        )}
      >
        {checked && <span className="h-2 w-2 rounded-full bg-gold" />}
      </span>
      <span
        className={cn(
          "text-sm transition-colors",
          checked ? "text-ink" : "text-ink-soft hover:text-ink"
        )}
      >
        {label}
      </span>
    </button>
  )
}
