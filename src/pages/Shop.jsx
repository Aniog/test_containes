import { useEffect, useMemo, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { products, priceRanges } from "../data/products.js"
import ProductCard from "../components/product/ProductCard.jsx"
import FilterSidebar from "../components/shop/FilterSidebar.jsx"
import SortDropdown from "../components/shop/SortDropdown.jsx"
import { cn } from "../lib/utils.js"

const initialFilters = { categories: [], prices: [], materials: [] }

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [filters, setFilters] = useState(() => {
    const cat = searchParams.get("category")
    return {
      ...initialFilters,
      categories: cat ? [cat] : [],
    }
  })
  const [sort, setSort] = useState("featured")
  const [drawerOpen, setDrawerOpen] = useState(false)

  // Sync ?category= in URL when filters change
  useEffect(() => {
    const cat = filters.categories[0]
    const current = searchParams.get("category")
    if (cat && cat !== current) {
      setSearchParams({ category: cat }, { replace: true })
    } else if (!cat && current) {
      setSearchParams({}, { replace: true })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters.categories])

  const filtered = useMemo(() => {
    let list = [...products]
    if (filters.categories.length) {
      list = list.filter((p) => {
        // Map our "earrings-huggies" filter to huggies
        if (filters.categories.includes("earrings-huggies")) {
          if (p.id === "golden-sphere-huggies") return true
        }
        return filters.categories.includes(p.category)
      })
    }
    if (filters.prices.length) {
      list = list.filter((p) => {
        return filters.prices.some((id) => {
          const range = priceRanges.find((r) => r.id === id)
          return range && p.price >= range.min && p.price < range.max
        })
      })
    }
    if (filters.materials.length) {
      list = list.filter((p) => filters.materials.includes(p.tone))
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
        list.sort((a, b) => (b.badge === "New" ? 1 : 0) - (a.badge === "New" ? 1 : 0))
        break
      default:
        break
    }
    return list
  }, [filters, sort])

  return (
    <div className="bg-ivory pt-24 md:pt-28 pb-24">
      <div className="mx-auto max-w-editorial px-6 md:px-10 lg:px-16">
        <div className="pb-10 md:pb-14 max-w-2xl">
          <p className="eyebrow">Shop</p>
          <h1 className="display-serif text-[44px] md:text-[64px] mt-3 leading-[1.05]">
            The full collection
          </h1>
          <p className="mt-4 text-[15px] text-ink/75 font-light max-w-md">
            Each piece hand-finished in small batches. Designed to layer,
            made to be kept.
          </p>
        </div>

        <div className="flex items-center justify-between border-t border-hairline pt-6">
          <button
            type="button"
            onClick={() => setDrawerOpen(true)}
            className="md:hidden text-[11px] tracking-eyebrow uppercase text-ink border border-hairline px-4 py-2.5"
          >
            Filter
            {filters.categories.length + filters.prices.length + filters.materials.length > 0 && (
              <span className="ml-2 text-champagne">·</span>
            )}
          </button>
          <div className="hidden md:block text-[11px] tracking-eyebrow uppercase text-muted">
            {filtered.length} {filtered.length === 1 ? "result" : "results"}
          </div>
          <SortDropdown value={sort} onChange={setSort} />
        </div>

        <div className="mt-10 md:mt-12 flex flex-col md:flex-row gap-10 md:gap-12">
          <div className="hidden md:block">
            <FilterSidebar
              filters={filters}
              onChange={setFilters}
              total={filtered.length}
            />
          </div>

          {filtered.length === 0 ? (
            <div className="flex-1 text-center py-20">
              <p className="font-serif text-[28px] text-ink">Nothing here — yet.</p>
              <p className="mt-3 text-[14px] text-muted">
                Try a different filter combination.
              </p>
            </div>
          ) : (
            <div className="flex-1 grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-12 md:gap-x-6 md:gap-y-16">
              {filtered.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile filter drawer */}
      <div
        className={cn(
          "fixed inset-0 z-[60] md:hidden transition-opacity duration-300",
          drawerOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
      >
        <div className="absolute inset-0 bg-espresso/55" onClick={() => setDrawerOpen(false)} />
        <div
          className={cn(
            "absolute left-0 top-0 h-full w-[88%] max-w-sm bg-ivory p-6 overflow-y-auto transition-transform duration-500 ease-velvet",
            drawerOpen ? "translate-x-0" : "-translate-x-full",
          )}
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-serif text-[24px]">Filter</h3>
            <button
              type="button"
              onClick={() => setDrawerOpen(false)}
              className="text-[11px] tracking-eyebrow uppercase text-muted"
            >
              Close
            </button>
          </div>
          <FilterSidebar
            filters={filters}
            onChange={setFilters}
            total={filtered.length}
          />
          <button
            type="button"
            onClick={() => setDrawerOpen(false)}
            className="btn-primary mt-10"
          >
            View {filtered.length} Results
          </button>
        </div>
      </div>
    </div>
  )
}
