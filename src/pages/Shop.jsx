import { useEffect, useMemo, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { SlidersHorizontal, X } from "lucide-react"
import ProductCard from "@/components/ProductCard"
import Nav from "@/components/Nav"
import AnnouncementBar from "@/components/AnnouncementBar"
import { products, categories, materials } from "@/data/products"
import { cn } from "@/lib/utils"

const sortOptions = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: low to high" },
  { id: "price-desc", label: "Price: high to low" },
  { id: "rating", label: "Top rated" },
  { id: "newest", label: "Newest" },
]

const priceRanges = [
  { id: "all", label: "All", min: 0, max: Infinity },
  { id: "under-50", label: "Under $50", min: 0, max: 50 },
  { id: "50-75", label: "$50 – $75", min: 50, max: 75 },
  { id: "75-100", label: "$75 – $100", min: 75, max: 100 },
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
      return arr.sort((a, b) => Number(b.isNew) - Number(a.isNew))
    default:
      return arr.sort((a, b) => Number(b.isBestseller) - Number(a.isBestseller))
  }
}

function FilterGroup({ title, children }) {
  return (
    <div className="border-b border-line py-6">
      <h3 className="product-name text-[0.7rem] mb-4">{title}</h3>
      <div className="space-y-2.5">{children}</div>
    </div>
  )
}

function FilterCheckbox({ label, checked, onChange, count }) {
  return (
    <label className="flex items-center justify-between gap-3 cursor-pointer group">
      <span className="flex items-center gap-3">
        <span
          className={cn(
            "w-4 h-4 grid place-items-center border transition-all",
            checked
              ? "bg-espresso-800 border-espresso-800"
              : "border-taupe-300 group-hover:border-espresso-800"
          )}
        >
          {checked && (
            <svg viewBox="0 0 12 12" className="w-2.5 h-2.5 text-ivory">
              <path
                d="M2 6.5l2.5 2.5L10 3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </span>
        <span className="text-sm text-espresso-800">{label}</span>
      </span>
      {count != null && (
        <span className="text-[11px] text-taupe-500 tabular-nums">{count}</span>
      )}
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />
    </label>
  )
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const activeCategory = searchParams.get("category") || "all"
  const activeMaterial = searchParams.get("material") || "all"
  const activePrice = searchParams.get("price") || "all"
  const sort = searchParams.get("sort") || "featured"

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [searchParams])

  const updateParam = (key, value) => {
    const next = new URLSearchParams(searchParams)
    if (!value || value === "all") next.delete(key)
    else next.set(key, value)
    setSearchParams(next, { replace: true })
  }

  const clearAll = () => setSearchParams(new URLSearchParams(), { replace: true })

  const filtered = useMemo(() => {
    const range = priceRanges.find((p) => p.id === activePrice) || priceRanges[0]
    return products.filter((p) => {
      if (activeCategory !== "all" && p.category !== activeCategory) return false
      if (activeMaterial !== "all" && p.material !== activeMaterial) return false
      if (p.price < range.min || p.price > range.max) return false
      return true
    })
  }, [activeCategory, activeMaterial, activePrice])

  const sorted = useMemo(() => sortProducts(filtered, sort), [filtered, sort])

  const activeFilterCount = [
    activeCategory !== "all",
    activeMaterial !== "all",
    activePrice !== "all",
  ].filter(Boolean).length

  const FilterPanel = (
    <div className="text-espresso-800">
      <div className="flex items-center justify-between mb-2">
        <h2 className="font-serif text-2xl">Filter</h2>
        {activeFilterCount > 0 && (
          <button
            type="button"
            onClick={clearAll}
            className="text-[10px] tracking-[0.22em] uppercase text-taupe-500 hover:text-espresso-800"
          >
            Clear all
          </button>
        )}
      </div>
      <FilterGroup title="Category">
        <FilterCheckbox
          label="All"
          checked={activeCategory === "all"}
          onChange={() => updateParam("category", "all")}
        />
        {categories.map((cat) => (
          <FilterCheckbox
            key={cat.id}
            label={cat.label}
            checked={activeCategory === cat.id}
            onChange={() => updateParam("category", cat.id)}
            count={products.filter((p) => p.category === cat.id).length}
          />
        ))}
      </FilterGroup>
      <FilterGroup title="Material">
        {[{ id: "all", label: "All" }, ...materials].map((m) => (
          <FilterCheckbox
            key={m.id}
            label={m.label}
            checked={activeMaterial === m.id}
            onChange={() => updateParam("material", m.id)}
          />
        ))}
      </FilterGroup>
      <FilterGroup title="Price">
        {priceRanges.map((p) => (
          <FilterCheckbox
            key={p.id}
            label={p.label}
            checked={activePrice === p.id}
            onChange={() => updateParam("price", p.id)}
          />
        ))}
      </FilterGroup>
    </div>
  )

  return (
    <>
      <Nav forceSolid />
      <main className="bg-ivory-100 pt-24 sm:pt-28">
        {/* Page header */}
        <div className="border-b border-line">
          <div className="max-w-screen-2xl mx-auto px-5 sm:px-8 lg:px-12 py-12 sm:py-16 text-center">
            <p className="eyebrow mb-3">The Edit</p>
            <h1 className="font-serif text-espresso-800 text-5xl sm:text-6xl tracking-tight">
              All Jewelry
            </h1>
            <p className="mt-4 text-sm sm:text-base text-taupe-600 max-w-md mx-auto font-light leading-relaxed">
              Quiet, demi-fine pieces in 18K gold plate. Designed to be worn every day.
            </p>
          </div>
        </div>

        <AnnouncementBar />

        <div className="max-w-screen-2xl mx-auto px-5 sm:px-8 lg:px-12 py-10 sm:py-14">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12">
            {/* Sidebar (desktop) */}
            <aside className="hidden lg:block lg:col-span-3 xl:col-span-3">
              <div className="sticky top-28">{FilterPanel}</div>
            </aside>

            {/* Product grid */}
            <div className="lg:col-span-9 xl:col-span-9">
              {/* Toolbar */}
              <div className="flex items-center justify-between mb-8 pb-5 border-b border-line">
                <p className="text-sm text-taupe-500">
                  <span className="text-espresso-800 font-medium tabular-nums">
                    {sorted.length}
                  </span>{" "}
                  {sorted.length === 1 ? "piece" : "pieces"}
                </p>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setMobileFiltersOpen(true)}
                    className="lg:hidden inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase font-medium border border-line px-4 py-2.5"
                  >
                    <SlidersHorizontal className="w-3.5 h-3.5" strokeWidth={1.5} />
                    Filter
                    {activeFilterCount > 0 && (
                      <span className="ml-1 w-4 h-4 grid place-items-center text-[10px] bg-espresso-800 text-ivory rounded-full">
                        {activeFilterCount}
                      </span>
                    )}
                  </button>
                  <label className="relative">
                    <span className="sr-only">Sort by</span>
                    <select
                      value={sort}
                      onChange={(e) => updateParam("sort", e.target.value)}
                      className="appearance-none bg-transparent border border-line pl-4 pr-9 py-2.5 text-[11px] tracking-[0.2em] uppercase font-medium text-espresso-800 focus:border-espresso-800 outline-none cursor-pointer"
                    >
                      {sortOptions.map((o) => (
                        <option key={o.id} value={o.id}>
                          Sort: {o.label}
                        </option>
                      ))}
                    </select>
                    <svg
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3 pointer-events-none"
                      viewBox="0 0 12 12"
                      fill="none"
                    >
                      <path
                        d="M3 4.5l3 3 3-3"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </label>
                </div>
              </div>

              {/* Grid */}
              {sorted.length === 0 ? (
                <div className="py-24 text-center">
                  <p className="font-serif text-3xl text-espresso-800 mb-3">
                    Nothing here just yet
                  </p>
                  <p className="text-sm text-taupe-500 mb-8">
                    Try a different filter combination.
                  </p>
                  <button type="button" onClick={clearAll} className="btn-outline">
                    Clear filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-x-4 sm:gap-x-6 gap-y-12 sm:gap-y-14">
                  {sorted.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Mobile filter sheet */}
      <div
        className={cn(
          "fixed inset-0 z-[60] lg:hidden transition-opacity duration-500",
          mobileFiltersOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        aria-hidden={!mobileFiltersOpen}
      >
        <div
          className="absolute inset-0 bg-espresso-900/45"
          onClick={() => setMobileFiltersOpen(false)}
        />
        <div
          className={cn(
            "absolute bottom-0 inset-x-0 bg-ivory-100 max-h-[88vh] overflow-y-auto transition-transform duration-500 ease-elegant rounded-t-2xl",
            mobileFiltersOpen ? "translate-y-0" : "translate-y-full"
          )}
        >
          <div className="sticky top-0 bg-ivory-100 z-10 flex items-center justify-between px-6 py-5 border-b border-line">
            <h2 className="font-serif text-2xl">Filter</h2>
            <button
              type="button"
              aria-label="Close filters"
              onClick={() => setMobileFiltersOpen(false)}
              className="p-2"
            >
              <X className="w-5 h-5" strokeWidth={1.5} />
            </button>
          </div>
          <div className="px-6 pb-8">{FilterPanel}</div>
          <div className="sticky bottom-0 bg-ivory-100 border-t border-line px-6 py-4 flex gap-3">
            {activeFilterCount > 0 && (
              <button type="button" onClick={clearAll} className="btn-outline flex-1">
                Clear
              </button>
            )}
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(false)}
              className="btn-primary flex-1"
            >
              Show {sorted.length} pieces
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
