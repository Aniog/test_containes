import { useEffect, useMemo, useRef, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { SlidersHorizontal } from "lucide-react"
import { PRODUCTS } from "@/data/products"
import { PRICE_BUCKETS } from "@/components/shop/FilterSidebar"
import ProductCard from "@/components/product/ProductCard"
import FilterSidebar from "@/components/shop/FilterSidebar"
import SortDropdown, { SORT_OPTIONS } from "@/components/shop/SortDropdown"
import { useReveal } from "@/lib/useReveal"

const DEFAULT_FILTERS = {
  category: "all",
  material: "all",
  price: "all",
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [filters, setFilters] = useState(() => ({
    category: searchParams.get("category") || "all",
    material: searchParams.get("material") || "all",
    price:    searchParams.get("price")    || "all",
  }))
  const [sort, setSort] = useState("featured")
  const [filterOpen, setFilterOpen] = useState(false)
  const headerRef = useRef(null)
  useReveal(headerRef, [])

  // Sync filters -> URL
  useEffect(() => {
    const params = {}
    if (filters.category !== "all") params.category = filters.category
    if (filters.material !== "all") params.material = filters.material
    if (filters.price !== "all") params.price = filters.price
    setSearchParams(params, { replace: true })
  }, [filters, setSearchParams])

  const filtered = useMemo(() => {
    let list = PRODUCTS.slice()
    if (filters.category !== "all") {
      list = list.filter((p) => p.category === filters.category)
    }
    if (filters.material !== "all") {
      list = list.filter((p) => p.material === filters.material)
    }
    const bucket = PRICE_BUCKETS.find((b) => b.id === filters.price) || PRICE_BUCKETS[0]
    if (bucket.id !== "all") {
      list = list.filter((p) => p.price >= bucket.min && p.price < bucket.max)
    }
    switch (sort) {
      case "price-asc":  list.sort((a, b) => a.price - b.price); break
      case "price-desc": list.sort((a, b) => b.price - a.price); break
      case "rating":     list.sort((a, b) => b.rating - a.rating); break
      case "name":       list.sort((a, b) => a.name.localeCompare(b.name)); break
      default: break
    }
    return list
  }, [filters, sort])

  const isFiltered = filters.category !== "all" || filters.material !== "all" || filters.price !== "all"

  return (
    <>
      {/* Page header */}
      <section
        ref={headerRef}
        className="bg-taupe-100 pt-32 sm:pt-40 lg:pt-44 pb-12 sm:pb-16 border-b border-taupe-300/50"
      >
        <div className="container-editorial">
          <p className="eyebrow reveal">Shop</p>
          <h1 className="font-serif text-[48px] sm:text-[64px] lg:text-[80px] mt-3 text-espresso reveal" style={{ transitionDelay: "80ms" }}>
            The Collection
          </h1>
          <p className="mt-5 text-[15px] sm:text-[16px] text-mocha-500 max-w-xl font-light reveal" style={{ transitionDelay: "160ms" }}>
            Demi-fine jewelry in 18K gold plate, sterling silver, and hand-set
            crystals. Made for the everyday and the kept-forever kind of gift.
          </p>
        </div>
      </section>

      <section className="bg-cream py-10 sm:py-14">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Sidebar */}
            <div className="lg:col-span-3">
              <FilterSidebar
                filters={filters}
                onChange={setFilters}
                onClear={() => setFilters(DEFAULT_FILTERS)}
                totalCount={filtered.length}
                open={filterOpen}
                onClose={() => setFilterOpen(false)}
              />
            </div>

            {/* Main */}
            <div className="lg:col-span-9">
              {/* Toolbar */}
              <div className="flex items-center justify-between mb-8 pb-5 border-b border-taupe-300/60">
                <button
                  onClick={() => setFilterOpen(true)}
                  className="lg:hidden inline-flex items-center gap-2 text-[12px] uppercase tracking-wider-3 font-medium text-espresso hover:text-gold-600 transition-colors"
                >
                  <SlidersHorizontal className="w-3.5 h-3.5" />
                  Filter {isFiltered && <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />}
                </button>

                <p className="hidden lg:block text-[12px] uppercase tracking-wider-3 text-mocha-400">
                  Showing {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
                </p>

                <SortDropdown value={sort} onChange={setSort} />
              </div>

              {/* Grid */}
              {filtered.length > 0 ? (
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 sm:gap-x-6 lg:gap-x-7 gap-y-10 sm:gap-y-12">
                  {filtered.map((p, i) => (
                    <div
                      key={p.id}
                      className="reveal"
                      style={{ transitionDelay: `${i * 50}ms` }}
                    >
                      <ProductCard product={p} />
                    </div>
                  ))}
                </div>
              ) : (
                <EmptyState onClear={() => setFilters(DEFAULT_FILTERS)} />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function EmptyState({ onClear }) {
  return (
    <div className="py-20 text-center">
      <p className="font-serif text-3xl text-espresso">No pieces match your filters</p>
      <p className="mt-3 text-[14px] text-mocha-400">
        Try clearing them, or browse the full collection.
      </p>
      <button onClick={onClear} className="btn-outline mt-7">
        Clear Filters
      </button>
    </div>
  )
}
