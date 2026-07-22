import { useEffect, useMemo, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { SlidersHorizontal, X } from "lucide-react"
import { PRODUCTS, CATEGORIES } from "@/data/products"
import ProductCard from "@/components/shop/ProductCard"
import FilterSidebar from "@/components/shop/FilterSidebar"
import SortDropdown, { SORT_OPTIONS } from "@/components/shop/SortDropdown"
import { cn } from "@/lib/utils"

const PRICE_RANGES = {
  all: [0, 200],
  under50: [0, 50],
  "50to75": [50, 75],
  over75: [75, 200],
}

export default function Shop() {
  const [params, setParams] = useSearchParams()
  const [filters, setFilters] = useState({
    categories: params.get("cat") ? [params.get("cat")] : [],
    materials: [],
    price: "all",
  })
  const [sort, setSort] = useState("featured")
  const [drawerOpen, setDrawerOpen] = useState(false)

  useEffect(() => {
    const cat = params.get("cat")
    if (cat && !filters.categories.includes(cat)) {
      setFilters((f) => ({ ...f, categories: [cat] }))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params])

  const filtered = useMemo(() => {
    let list = [...PRODUCTS]
    if (filters.categories.length) {
      list = list.filter((p) => filters.categories.includes(p.category))
    }
    if (filters.materials.length) {
      // For demo: any product with crystal material -> "crystal"
      list = list.filter((p) => {
        const mat = (p.materials || "").toLowerCase()
        return filters.materials.some((m) => {
          if (m === "crystal") return mat.includes("crystal") || mat.includes("cubic")
          if (m === "18k-gold") return mat.includes("18k") || mat.includes("gold plated")
          if (m === "sterling-silver") return mat.includes("sterling")
          return false
        })
      })
    }
    if (filters.price && filters.price !== "all") {
      const [lo, hi] = PRICE_RANGES[filters.price]
      list = list.filter((p) => p.price >= lo && p.price <= hi)
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
        list.sort((a, b) => (a.badge === "New" ? -1 : 1))
        break
      default:
        break
    }
    return list
  }, [filters, sort])

  const clearAll = () =>
    setFilters({ categories: [], materials: [], price: "all" })

  const activeChips = [
    ...filters.categories.map((id) => ({
      label: CATEGORIES.find((c) => c.id === id)?.label,
      remove: () => setFilters((f) => ({ ...f, categories: f.categories.filter((c) => c !== id) })),
    })),
    ...filters.materials.map((id) => ({
      label: id,
      remove: () => setFilters((f) => ({ ...f, materials: f.materials.filter((m) => m !== id) })),
    })),
  ]

  return (
    <>
      {/* Editorial header */}
      <section className="bg-cream-50 pt-32 md:pt-40 pb-12 md:pb-16 border-b border-espresso-800/5">
        <div className="mx-auto max-w-editorial px-5 md:px-10 text-center">
          <p className="eyebrow">The Collection</p>
          <h1
            id="shop-title"
            className="mt-4 font-serif text-5xl md:text-7xl text-espresso-800"
          >
            Shop All
          </h1>
          <p className="mt-5 text-ink-muted text-sm md:text-base max-w-md mx-auto leading-relaxed">
            Demi-fine gold pieces, made in small batches. Every order ships
            free, in our signature keepsake box.
          </p>
        </div>
      </section>

      {/* Toolbar + grid */}
      <section className="bg-cream-50 pb-24 md:pb-32">
        <div className="mx-auto max-w-editorial px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 pt-10">
            {/* Sidebar (desktop) */}
            <div className="hidden md:block md:col-span-3">
              <FilterSidebar
                filters={filters}
                setFilters={setFilters}
                totalCount={filtered.length}
              />
            </div>

            {/* Main column */}
            <div className="md:col-span-9">
              {/* Top toolbar */}
              <div className="flex items-center justify-between border-b border-espresso-800/10 pb-4 mb-8">
                <button
                  type="button"
                  onClick={() => setDrawerOpen(true)}
                  className="md:hidden inline-flex items-center gap-2 text-[11px] uppercase tracking-widest2 text-espresso-800"
                >
                  <SlidersHorizontal className="h-3.5 w-3.5" strokeWidth={1.4} />
                  Filters
                </button>
                <div className="hidden md:block text-sm text-ink-muted">
                  Showing {filtered.length} of {PRODUCTS.length}
                </div>
                <SortDropdown value={sort} onChange={setSort} />
              </div>

              {/* Active chips */}
              {activeChips.length > 0 && (
                <div className="flex flex-wrap items-center gap-2 mb-6">
                  {activeChips.map((chip, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={chip.remove}
                      className="inline-flex items-center gap-2 text-[11px] uppercase tracking-widest2 border border-espresso-800/20 px-3 py-1.5 text-espresso-800 hover:border-espresso-800"
                    >
                      {chip.label}
                      <X className="h-3 w-3" strokeWidth={1.6} />
                    </button>
                  ))}
                  <button
                    type="button"
                    onClick={clearAll}
                    className="text-[11px] uppercase tracking-widest2 text-ink-muted hover:text-espresso-800 ml-1"
                  >
                    Clear
                  </button>
                </div>
              )}

              {filtered.length > 0 ? (
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {filtered.map((p) => (
                    <ProductCard key={p.id} product={p} />
                  ))}
                </div>
              ) : (
                <div className="py-20 text-center">
                  <p className="eyebrow">No matches</p>
                  <p className="mt-3 font-serif text-2xl text-espresso-800">
                    Try adjusting your filters.
                  </p>
                  <button
                    type="button"
                    onClick={clearAll}
                    className="mt-6 btn-outline"
                  >
                    Clear All Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Mobile filter drawer */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-espresso-800/40"
            onClick={() => setDrawerOpen(false)}
          />
          <div className="absolute inset-y-0 left-0 w-[88%] max-w-sm bg-cream-50 overflow-y-auto animate-fadeIn">
            <div className="flex h-16 items-center justify-between px-5 border-b border-espresso-800/10">
              <p className="eyebrow text-espresso-800">Filters</p>
              <button
                type="button"
                onClick={() => setDrawerOpen(false)}
                aria-label="Close filters"
                className="inline-flex h-10 w-10 items-center justify-center text-espresso-800"
              >
                <X className="h-5 w-5" strokeWidth={1.4} />
              </button>
            </div>
            <div className="px-5 py-6">
              <FilterSidebar
                filters={filters}
                setFilters={setFilters}
                totalCount={filtered.length}
              />
            </div>
            <div className="sticky bottom-0 bg-cream-50 border-t border-espresso-800/10 px-5 py-4">
              <button
                type="button"
                onClick={() => setDrawerOpen(false)}
                className="btn-primary w-full"
              >
                Show {filtered.length} {filtered.length === 1 ? "Piece" : "Pieces"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
