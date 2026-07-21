import React, { useEffect, useMemo, useState } from "react"
import { useSearchParams } from "react-router-dom"
import ProductCard from "../components/product/ProductCard"
import FilterSidebar, { priceBands } from "../components/shop/FilterSidebar"
import SortDropdown from "../components/shop/SortDropdown"
import { products } from "../data/products"
import { SlidersHorizontal } from "lucide-react"
import { cn } from "../lib/utils"

const DEFAULT_FILTERS = {
  categories: [],
  materials: [],
  priceBand: "all",
}

const titleByQuery = {
  shop: { title: "Shop All", sub: "The full collection." },
  collections: { title: "Collections", sub: "Shop by category." },
}

function applyFilters(list, filters) {
  const band = priceBands.find((b) => b.id === filters.priceBand) || priceBands[0]
  return list.filter((product) => {
    if (filters.categories.length > 0 && !filters.categories.includes(product.category)) {
      return false
    }
    if (filters.materials.length > 0 && !filters.materials.includes(product.material)) {
      return false
    }
    if (!band.test(product.price)) return false
    return true
  })
}

function applySort(list, sort) {
  const copy = [...list]
  if (sort === "price-asc") return copy.sort((a, b) => a.price - b.price)
  if (sort === "price-desc") return copy.sort((a, b) => b.price - a.price)
  if (sort === "rating") return copy.sort((a, b) => b.rating - a.rating)
  if (sort === "newest") return copy.sort((a, b) => Number(b.badge === "New") - Number(a.badge === "New"))
  return copy
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const initialCategory = searchParams.get("category")
  const initialFilters = {
    ...DEFAULT_FILTERS,
    categories: initialCategory ? [initialCategory] : [],
  }
  const [filters, setFilters] = useState(initialFilters)
  const [sort, setSort] = useState("featured")
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  // Keep URL in sync with category filter
  useEffect(() => {
    const params = new URLSearchParams(searchParams)
    if (filters.categories.length === 1) {
      params.set("category", filters.categories[0])
    } else {
      params.delete("category")
    }
    setSearchParams(params, { replace: true })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters.categories])

  const filtered = useMemo(
    () => applyFilters(products, filters),
    [filters]
  )
  const sorted = useMemo(() => applySort(filtered, sort), [filtered, sort])

  const header = titleByQuery["shop"]

  return (
    <>
      {/* Page header */}
      <section className="bg-bone-50 pt-32 md:pt-40">
        <div className="mx-auto max-w-editorial px-6 pb-10 md:px-10 md:pb-14">
          <p className="text-[10px] uppercase tracking-[0.32em] text-champagne-700">Velmora</p>
          <h1 className="mt-4 font-serif text-5xl text-ink md:text-6xl">{header.title}</h1>
          <p className="mt-4 max-w-[52ch] text-sm leading-relaxed text-ink/65">
            {header.sub} Demi-fine 18K gold-plated jewelry, hand-set and made for the everyday.
          </p>
        </div>
      </section>

      <section className="border-t border-ink/10 bg-bone-50">
        <div className="mx-auto flex max-w-editorial flex-col gap-10 px-6 py-12 md:flex-row md:px-10 md:py-16">
          <FilterSidebar
            filters={filters}
            onChange={setFilters}
            totalCount={sorted.length}
          />

          <div className="flex-1">
            <div className="mb-6 flex items-center justify-between gap-3 border-b border-ink/10 pb-4">
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-ink md:hidden"
              >
                <SlidersHorizontal className="h-3.5 w-3.5" strokeWidth={1.5} />
                Filter
              </button>
              <p className="hidden text-[10px] uppercase tracking-[0.24em] text-ink/60 md:block">
                {sorted.length} {sorted.length === 1 ? "piece" : "pieces"}
              </p>
              <SortDropdown value={sort} onChange={setSort} />
            </div>

            {sorted.length === 0 ? (
              <div className="flex flex-col items-center justify-center border border-dashed border-ink/15 px-6 py-24 text-center">
                <p className="font-serif text-3xl text-ink">No matches yet.</p>
                <p className="mt-3 max-w-sm text-sm text-ink/60">
                  Try removing a filter or browsing the full collection.
                </p>
                <button
                  type="button"
                  onClick={() => setFilters(DEFAULT_FILTERS)}
                  className="mt-6 inline-flex items-center justify-center border border-ink px-6 py-3 text-[11px] font-medium uppercase tracking-[0.24em] text-ink transition-colors duration-300 hover:bg-ink hover:text-bone"
                >
                  Reset filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-3 md:gap-x-7 md:gap-y-14">
                {sorted.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Mobile filter drawer */}
      <div
        className={cn(
          "fixed inset-0 z-[60] md:hidden transition-opacity duration-300",
          mobileFiltersOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        aria-hidden={!mobileFiltersOpen}
      >
        <div
          className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
          onClick={() => setMobileFiltersOpen(false)}
        />
        <div
          className={cn(
            "absolute inset-y-0 left-0 w-[88%] max-w-[360px] bg-bone-50 shadow-lift transition-transform duration-500 ease-soft",
            mobileFiltersOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <FilterSidebar
            filters={filters}
            onChange={setFilters}
            totalCount={sorted.length}
            isMobile
            onClose={() => setMobileFiltersOpen(false)}
            className="w-full"
          />
          <div className="absolute inset-x-0 bottom-0 border-t border-ink/10 bg-bone-50 p-5">
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(false)}
              className="w-full bg-ink py-4 text-[11px] font-medium uppercase tracking-[0.24em] text-bone"
            >
              Show {sorted.length} {sorted.length === 1 ? "piece" : "pieces"}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
