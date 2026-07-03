import React, { useEffect, useMemo, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { SlidersHorizontal, ChevronDown } from "lucide-react"
import { PRODUCTS } from "@/data/products"
import { PRICE_BUCKETS } from "@/components/shop/FilterSidebar"
import FilterSidebar from "@/components/shop/FilterSidebar"
import ProductCard from "@/components/product/ProductCard"

const SORT_OPTIONS = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
]

function applyFilters(products, filters) {
  return products.filter((p) => {
    if (
      filters.categories.length > 0 &&
      !filters.categories.includes(p.category)
    )
      return false
    if (
      filters.materials.length > 0 &&
      !p.materials.some((m) => filters.materials.includes(m))
    )
      return false
    if (filters.prices.length > 0) {
      const matchedBucket = filters.prices.some((bid) => {
        const b = PRICE_BUCKETS.find((x) => x.id === bid)
        if (!b) return false
        return p.price >= b.min && p.price <= b.max
      })
      if (!matchedBucket) return false
    }
    return true
  })
}

function sortProducts(products, sortId) {
  const list = [...products]
  switch (sortId) {
    case "price-asc":
      return list.sort((a, b) => a.price - b.price)
    case "price-desc":
      return list.sort((a, b) => b.price - a.price)
    case "rating":
      return list.sort((a, b) => b.rating - a.rating)
    default:
      return list
  }
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const initialCategory = searchParams.get("category")
  const [filters, setFilters] = useState({
    categories: initialCategory ? [initialCategory] : [],
    materials: [],
    prices: [],
  })
  const [sort, setSort] = useState("featured")
  const [sortOpen, setSortOpen] = useState(false)
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false)

  useEffect(() => {
    const cat = searchParams.get("category")
    setFilters((f) => {
      if (cat && !f.categories.includes(cat)) {
        return { ...f, categories: [cat] }
      }
      if (!cat && f.categories.length > 0) {
        return { ...f, categories: [] }
      }
      return f
    })
  }, [searchParams])

  const toggleArrayValue = (key, value) => {
    setFilters((f) => {
      const list = f[key]
      return {
        ...f,
        [key]: list.includes(value)
          ? list.filter((v) => v !== value)
          : [...list, value],
      }
    })
  }

  const clearFilters = () => {
    setFilters({ categories: [], materials: [], prices: [] })
    setSearchParams({})
  }

  const visibleProducts = useMemo(() => {
    const filtered = applyFilters(PRODUCTS, filters)
    return sortProducts(filtered, sort)
  }, [filters, sort])

  return (
    <>
      <header className="border-b border-sand-200 bg-ivory-50 pt-28 md:pt-32">
        <div className="container-velmora pb-10 md:pb-14">
          <p className="eyebrow">Shop · The Full Edit</p>
          <h1 className="editorial-h1 mt-4 text-espresso sm:text-[64px]">
            All Jewelry
          </h1>
          <p className="mt-4 max-w-xl text-[15px] text-stone-300">
            Demi-fine gold pieces, hand-finished in small batches. Filter by
            category, material, or price — and find the one that's been on
            your mind.
          </p>
        </div>
      </header>

      <section className="container-velmora py-10 md:py-14">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-12">
          <FilterSidebar
            filters={filters}
            onToggleCategory={(v) => toggleArrayValue("categories", v)}
            onToggleMaterial={(v) => toggleArrayValue("materials", v)}
            onTogglePrice={(v) => toggleArrayValue("prices", v)}
            onClear={clearFilters}
          />

          <div className="flex-1">
            {/* Toolbar */}
            <div className="mb-8 flex items-center justify-between border-b border-sand-200 pb-4">
              <p className="font-sans text-[12px] uppercase tracking-widest2 text-stone-300">
                {visibleProducts.length}{" "}
                {visibleProducts.length === 1 ? "piece" : "pieces"}
              </p>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setMobileFilterOpen(true)}
                  className="inline-flex items-center gap-2 border border-sand-200 px-4 py-2.5 font-sans text-[11px] font-medium uppercase tracking-widest2 text-espresso transition-colors hover:border-espresso lg:hidden"
                >
                  <SlidersHorizontal className="h-3.5 w-3.5" strokeWidth={1.5} />
                  Filter
                </button>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setSortOpen((v) => !v)}
                    aria-haspopup="listbox"
                    aria-expanded={sortOpen}
                    className="inline-flex items-center gap-2 border border-sand-200 px-4 py-2.5 font-sans text-[11px] font-medium uppercase tracking-widest2 text-espresso transition-colors hover:border-espresso"
                  >
                    Sort: {SORT_OPTIONS.find((o) => o.id === sort)?.label}
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform ${
                        sortOpen ? "rotate-180" : ""
                      }`}
                      strokeWidth={1.5}
                    />
                  </button>
                  {sortOpen && (
                    <ul
                      role="listbox"
                      className="absolute right-0 top-full z-20 mt-1 w-56 border border-sand-200 bg-linen py-1 shadow-soft"
                    >
                      {SORT_OPTIONS.map((opt) => (
                        <li key={opt.id} role="option" aria-selected={sort === opt.id}>
                          <button
                            type="button"
                            onClick={() => {
                              setSort(opt.id)
                              setSortOpen(false)
                            }}
                            className={`block w-full px-4 py-2.5 text-left font-sans text-[12px] uppercase tracking-widest2 transition-colors ${
                              sort === opt.id
                                ? "bg-ivory text-champagne-500"
                                : "text-espresso hover:bg-ivory"
                            }`}
                          >
                            {opt.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>

            {visibleProducts.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <p className="font-serif text-2xl text-espresso">
                  No pieces match those filters
                </p>
                <p className="mt-2 text-[14px] text-stone-300">
                  Try removing one — or clear them all to see the full edit.
                </p>
                <button
                  type="button"
                  onClick={clearFilters}
                  className="btn-secondary mt-6"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div
                key={
                  JSON.stringify(filters) +
                  sort +
                  visibleProducts.length
                }
                className="grid animate-fade-in grid-cols-2 gap-x-4 gap-y-12 sm:gap-x-6 md:grid-cols-3 md:gap-x-8 md:gap-y-14"
              >
                {visibleProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Mobile filter drawer */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-[55] lg:hidden">
          <div
            className="absolute inset-0 bg-espresso/40"
            onClick={() => setMobileFilterOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute inset-x-0 bottom-0 top-12 flex flex-col bg-ivory-50 shadow-soft">
            <FilterSidebar
              isMobile
              filters={filters}
              onToggleCategory={(v) => toggleArrayValue("categories", v)}
              onToggleMaterial={(v) => toggleArrayValue("materials", v)}
              onTogglePrice={(v) => toggleArrayValue("prices", v)}
              onClear={clearFilters}
              onClose={() => setMobileFilterOpen(false)}
            />
            <div className="border-t border-sand-200 bg-ivory-50 px-6 py-4">
              <button
                type="button"
                onClick={() => setMobileFilterOpen(false)}
                className="btn-primary w-full"
              >
                Show {visibleProducts.length}{" "}
                {visibleProducts.length === 1 ? "piece" : "pieces"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
