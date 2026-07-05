import { useEffect, useMemo, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { ChevronDown, SlidersHorizontal, X } from "lucide-react"
import ProductCard from "@/components/product/ProductCard"
import { CATEGORIES, MATERIALS, PRODUCTS } from "@/data/products"
import { cn } from "@/lib/utils"

const SORT_OPTIONS = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
  { value: "newest", label: "Newest" },
]

const PRICE_BUCKETS = [
  { id: "all", label: "All Prices", min: 0, max: Infinity },
  { id: "under-50", label: "Under $50", min: 0, max: 49.99 },
  { id: "50-80", label: "$50 – $80", min: 50, max: 80 },
  { id: "over-80", label: "Over $80", min: 80.01, max: Infinity },
]

function sortProducts(list, sort) {
  const arr = [...list]
  switch (sort) {
    case "price-asc":
      return arr.sort((a, b) => a.price - b.price)
    case "price-desc":
      return arr.sort((a, b) => b.price - a.price)
    case "rating":
      return arr.sort((a, b) => b.rating - a.rating)
    case "newest":
      return arr.sort((a, b) => (a.badge === "New" ? -1 : 1))
    default:
      // featured: bestsellers first, then by rating
      return arr.sort((a, b) => {
        const ba = a.badge === "Bestseller" ? 1 : 0
        const bb = b.badge === "Bestseller" ? 1 : 0
        if (ba !== bb) return bb - ba
        return b.rating - a.rating
      })
  }
}

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const initialCategory = searchParams.get("category") || "all"

  const [category, setCategory] = useState(initialCategory)
  const [material, setMaterial] = useState("all")
  const [price, setPrice] = useState("all")
  const [sort, setSort] = useState("featured")
  const [mobileOpen, setMobileOpen] = useState(false)

  // sync category from URL (when user lands via Collections link)
  useEffect(() => {
    const cat = searchParams.get("category") || "all"
    setCategory(cat)
  }, [searchParams])

  const updateUrl = (next) => {
    const params = new URLSearchParams(searchParams)
    if (next && next !== "all") params.set("category", next)
    else params.delete("category")
    setSearchParams(params, { replace: true })
  }

  const onCategoryChange = (slug) => {
    setCategory(slug)
    updateUrl(slug)
  }

  const filtered = useMemo(() => {
    let list = PRODUCTS
    if (category !== "all") list = list.filter((p) => p.category === category)
    if (material !== "all") list = list.filter((p) => p.material === material)
    const bucket = PRICE_BUCKETS.find((b) => b.id === price)
    if (bucket) list = list.filter((p) => p.price >= bucket.min && p.price <= bucket.max)
    return sortProducts(list, sort)
  }, [category, material, price, sort])

  const activeFilters = [
    category !== "all" && { kind: "Category", value: CATEGORIES.find((c) => c.slug === category)?.label, clear: () => onCategoryChange("all") },
    material !== "all" && { kind: "Material", value: MATERIALS.find((m) => m.slug === material)?.label, clear: () => setMaterial("all") },
    price !== "all" && { kind: "Price", value: PRICE_BUCKETS.find((b) => b.id === price)?.label, clear: () => setPrice("all") },
  ].filter(Boolean)

  const clearAll = () => {
    onCategoryChange("all")
    setMaterial("all")
    setPrice("all")
  }

  const headingLabel = category !== "all" ? CATEGORIES.find((c) => c.slug === category)?.label : "The Collection"

  return (
    <main className="bg-cream pt-24 md:pt-28 pb-20 min-h-screen">
      <div className="container-velmora">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <p className="eyebrow mb-3">Shop</p>
          <h1 className="display-headline text-4xl md:text-6xl text-ink">
            {headingLabel}
          </h1>
          <p className="text-sm md:text-base text-muted-light font-light mt-4 max-w-md mx-auto">
            {filtered.length} {filtered.length === 1 ? "piece" : "pieces"} — all hand-finished in our atelier.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Sidebar — desktop */}
          <aside className="hidden lg:block lg:col-span-3">
            <FilterPanel
              category={category}
              setCategory={onCategoryChange}
              material={material}
              setMaterial={setMaterial}
              price={price}
              setPrice={setPrice}
              activeFilters={activeFilters}
              clearAll={clearAll}
            />
          </aside>

          {/* Main column */}
          <div className="lg:col-span-9">
            {/* Toolbar */}
            <div className="flex items-center justify-between gap-4 pb-5 mb-8 border-b border-ink/10">
              <button
                type="button"
                onClick={() => setMobileOpen(true)}
                className="lg:hidden inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-ink"
              >
                <SlidersHorizontal className="h-4 w-4" strokeWidth={1.5} />
                Filter
              </button>

              <div className="hidden lg:block text-[11px] uppercase tracking-[0.2em] text-muted-light">
                {filtered.length} results
              </div>

              <div className="flex items-center gap-3">
                <label htmlFor="sort" className="text-[11px] uppercase tracking-[0.2em] text-muted-light hidden sm:inline">
                  Sort
                </label>
                <div className="relative">
                  <select
                    id="sort"
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    className="appearance-none bg-transparent border border-ink/20 px-4 py-2.5 pr-9 text-[11px] uppercase tracking-[0.2em] text-ink focus:outline-none focus:border-ink cursor-pointer"
                  >
                    {SORT_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-ink pointer-events-none" strokeWidth={1.5} />
                </div>
              </div>
            </div>

            {/* Active filter chips */}
            {activeFilters.length > 0 && (
              <div className="flex flex-wrap items-center gap-2 mb-6">
                {activeFilters.map((f) => (
                  <button
                    key={f.kind}
                    type="button"
                    onClick={f.clear}
                    className="inline-flex items-center gap-2 px-3 py-1.5 border border-ink/20 text-[10px] uppercase tracking-[0.2em] text-ink hover:border-ink transition-colors"
                  >
                    {f.kind}: {f.value}
                    <X className="h-3 w-3" strokeWidth={1.5} />
                  </button>
                ))}
                <button
                  type="button"
                  onClick={clearAll}
                  className="text-[10px] uppercase tracking-[0.2em] text-muted-light hover:text-gold transition-colors ml-2"
                >
                  Clear all
                </button>
              </div>
            )}

            {/* Grid */}
            {filtered.length === 0 ? (
              <div className="py-20 text-center">
                <p className="font-serif text-2xl text-ink mb-3">No pieces match your filters</p>
                <button onClick={clearAll} className="text-link">Clear filters</button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 md:gap-x-6 gap-y-10 md:gap-y-14">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      <div
        className={cn(
          "fixed inset-0 z-[60] lg:hidden transition-opacity duration-500",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        aria-hidden={!mobileOpen}
      >
        <div className="absolute inset-0 bg-ink/55" onClick={() => setMobileOpen(false)} />
        <div
          className={cn(
            "absolute inset-y-0 left-0 w-[88%] max-w-sm bg-cream-elevated shadow-soft-lg flex flex-col",
            "transition-transform duration-500 ease-elegant",
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="flex items-center justify-between px-6 h-16 border-b border-ink/10">
            <h2 className="font-serif text-lg tracking-[0.2em] uppercase">Filter</h2>
            <button
              type="button"
              aria-label="Close filters"
              onClick={() => setMobileOpen(false)}
              className="p-1.5 text-ink hover:text-gold transition-colors"
            >
              <X className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-6">
            <FilterPanel
              category={category}
              setCategory={onCategoryChange}
              material={material}
              setMaterial={setMaterial}
              price={price}
              setPrice={setPrice}
              activeFilters={activeFilters}
              clearAll={clearAll}
            />
          </div>
          <div className="px-6 py-5 border-t border-ink/10">
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="btn-primary w-full"
            >
              Show {filtered.length} Results
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}

function FilterGroup({ title, children }) {
  return (
    <div className="border-b border-ink/10 py-5 first:pt-0 last:border-b-0">
      <h3 className="text-[11px] font-sans uppercase tracking-[0.25em] text-ink mb-4">{title}</h3>
      {children}
    </div>
  )
}

function FilterPanel({ category, setCategory, material, setMaterial, price, setPrice, activeFilters, clearAll }) {
  return (
    <div>
      {activeFilters.length > 0 && (
        <div className="pb-4 mb-2 border-b border-ink/10">
          <button
            type="button"
            onClick={clearAll}
            className="text-[10px] uppercase tracking-[0.2em] text-muted-light hover:text-gold transition-colors"
          >
            Clear all filters
          </button>
        </div>
      )}

      <FilterGroup title="Category">
        <ul className="space-y-2.5">
          <li>
            <FilterRadio
              label="All"
              checked={category === "all"}
              onChange={() => setCategory("all")}
            />
          </li>
          {CATEGORIES.map((c) => (
            <li key={c.slug}>
              <FilterRadio
                label={c.label}
                checked={category === c.slug}
                onChange={() => setCategory(c.slug)}
              />
            </li>
          ))}
        </ul>
      </FilterGroup>

      <FilterGroup title="Price">
        <ul className="space-y-2.5">
          {PRICE_BUCKETS.map((b) => (
            <li key={b.id}>
              <FilterRadio
                label={b.label}
                checked={price === b.id}
                onChange={() => setPrice(b.id)}
              />
            </li>
          ))}
        </ul>
      </FilterGroup>

      <FilterGroup title="Material">
        <ul className="space-y-2.5">
          <li>
            <FilterRadio
              label="All Materials"
              checked={material === "all"}
              onChange={() => setMaterial("all")}
            />
          </li>
          {MATERIALS.map((m) => (
            <li key={m.slug}>
              <FilterRadio
                label={m.label}
                checked={material === m.slug}
                onChange={() => setMaterial(m.slug)}
              />
            </li>
          ))}
        </ul>
      </FilterGroup>
    </div>
  )
}

function FilterRadio({ label, checked, onChange }) {
  return (
    <label className="flex items-center gap-3 cursor-pointer group">
      <span
        className={cn(
          "h-3.5 w-3.5 rounded-full border flex items-center justify-center transition-colors",
          checked ? "border-gold" : "border-ink/30 group-hover:border-ink"
        )}
        aria-hidden="true"
      >
        {checked && <span className="h-1.5 w-1.5 rounded-full bg-gold" />}
      </span>
      <input
        type="radio"
        name={label}
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />
      <span
        className={cn(
          "text-sm transition-colors",
          checked ? "text-ink" : "text-muted-light group-hover:text-ink"
        )}
      >
        {label}
      </span>
    </label>
  )
}
