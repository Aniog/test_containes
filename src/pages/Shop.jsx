import { useEffect, useMemo, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { SlidersHorizontal, X } from "lucide-react"
import { products, categories, materials } from "@/data/products"
import { ProductCard } from "@/components/shop/ProductCard"
import { useImageLoader } from "@/hooks/useImageLoader"
import { cn } from "@/lib/utils"

const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
]

const priceRanges = [
  { value: "all", label: "All Prices" },
  { value: "under-50", label: "Under $50" },
  { value: "50-75", label: "$50 - $75" },
  { value: "75-100", label: "$75 - $100" },
  { value: "over-100", label: "Over $100" },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [selectedSort, setSelectedSort] = useState("featured")
  const containerRef = useImageLoader()

  const activeCategory = searchParams.get("category") || "all"
  const activeMaterial = searchParams.get("material") || "all"
  const activePrice = searchParams.get("price") || "all"

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (activeCategory !== "all") {
      result = result.filter((p) => p.category === activeCategory)
    }
    if (activeMaterial !== "all") {
      result = result.filter((p) => p.material === activeMaterial)
    }
    if (activePrice !== "all") {
      result = result.filter((p) => {
        if (activePrice === "under-50") return p.price < 50
        if (activePrice === "50-75") return p.price >= 50 && p.price <= 75
        if (activePrice === "75-100") return p.price > 75 && p.price <= 100
        if (activePrice === "over-100") return p.price > 100
        return true
      })
    }

    if (selectedSort === "price-low") result.sort((a, b) => a.price - b.price)
    if (selectedSort === "price-high") result.sort((a, b) => b.price - a.price)
    if (selectedSort === "rating") result.sort((a, b) => b.rating - a.rating)

    return result
  }, [activeCategory, activeMaterial, activePrice, selectedSort])

  const updateFilter = (key, value) => {
    const next = new URLSearchParams(searchParams)
    if (value === "all") {
      next.delete(key)
    } else {
      next.set(key, value)
    }
    setSearchParams(next, { replace: true })
  }

  const clearFilters = () => {
    setSearchParams(new URLSearchParams(), { replace: true })
  }

  const activeFilterCount =
    (activeCategory !== "all" ? 1 : 0) +
    (activeMaterial !== "all" ? 1 : 0) +
    (activePrice !== "all" ? 1 : 0)

  const FilterGroup = () => (
    <div className="space-y-8">
      <div>
        <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-charcoal">Category</h4>
        <ul className="space-y-2">
          <li>
            <FilterLink active={activeCategory === "all"} onClick={() => updateFilter("category", "all")}>
              All
            </FilterLink>
          </li>
          {categories.map((c) => (
            <li key={c.id}>
              <FilterLink
                active={activeCategory === c.id}
                onClick={() => updateFilter("category", c.id)}
              >
                {c.name}
              </FilterLink>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-charcoal">Price</h4>
        <ul className="space-y-2">
          {priceRanges.map((range) => (
            <li key={range.value}>
              <FilterLink
                active={activePrice === range.value}
                onClick={() => updateFilter("price", range.value)}
              >
                {range.label}
              </FilterLink>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-charcoal">Material</h4>
        <ul className="space-y-2">
          <li>
            <FilterLink active={activeMaterial === "all"} onClick={() => updateFilter("material", "all")}>
              All Materials
            </FilterLink>
          </li>
          {materials.map((m) => (
            <li key={m}>
              <FilterLink
                active={activeMaterial === m}
                onClick={() => updateFilter("material", m)}
              >
                {m}
              </FilterLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )

  return (
    <div ref={containerRef} className="min-h-screen bg-ivory pt-24 md:pt-28">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <div className="mb-8 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-gold">The Collection</p>
          <h1 className="mt-2 font-serif text-4xl text-charcoal">Shop All</h1>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Mobile filter toggle */}
          <div className="flex items-center justify-between lg:hidden">
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(true)}
              className="flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-charcoal"
            >
              <SlidersHorizontal size={16} />
              Filters {activeFilterCount > 0 && `(${activeFilterCount})`}
            </button>
            <select
              value={selectedSort}
              onChange={(e) => setSelectedSort(e.target.value)}
              className="h-10 border border-border bg-transparent px-3 text-xs uppercase tracking-[0.12em] text-charcoal focus:border-gold focus:outline-none"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          {/* Desktop sidebar */}
          <aside className="hidden w-56 flex-shrink-0 lg:block">
            <div className="sticky top-28">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-charcoal">Filter By</h3>
                {activeFilterCount > 0 && (
                  <button
                    type="button"
                    onClick={clearFilters}
                    className="text-xs text-warm-gray underline-offset-4 hover:text-charcoal hover:underline"
                  >
                    Clear
                  </button>
                )}
              </div>
              <FilterGroup />
            </div>
          </aside>

          {/* Mobile filter drawer */}
          {mobileFiltersOpen && (
            <div className="fixed inset-0 z-40 lg:hidden">
              <div
                className="absolute inset-0 bg-ink/50 backdrop-blur-sm"
                onClick={() => setMobileFiltersOpen(false)}
              />
              <div className="absolute right-0 top-0 h-full w-4/5 max-w-sm bg-ivory p-6 shadow-2xl">
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="font-serif text-xl uppercase tracking-wide text-charcoal">Filters</h3>
                  <button type="button" onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters">
                    <X size={22} />
                  </button>
                </div>
                <FilterGroup />
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(false)}
                  className="mt-8 h-12 w-full bg-charcoal text-xs font-medium uppercase tracking-widest text-ivory"
                >
                  Show {filteredProducts.length} Results
                </button>
              </div>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1">
            <div className="mb-6 hidden items-center justify-between lg:flex">
              <p className="text-sm text-warm-gray">
                {filteredProducts.length} {filteredProducts.length === 1 ? "piece" : "pieces"}
              </p>
              <select
                value={selectedSort}
                onChange={(e) => setSelectedSort(e.target.value)}
                className="h-10 border border-border bg-transparent px-3 text-xs uppercase tracking-[0.12em] text-charcoal focus:border-gold focus:outline-none"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="py-20 text-center">
                <p className="font-serif text-xl text-charcoal">No pieces match your filters.</p>
                <button
                  type="button"
                  onClick={clearFilters}
                  className="mt-4 text-xs uppercase tracking-[0.16em] text-gold underline-offset-4 hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function FilterLink({ active, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "text-left text-sm transition-colors",
        active ? "font-medium text-charcoal" : "text-warm-gray hover:text-charcoal"
      )}
    >
      {children}
    </button>
  )
}
