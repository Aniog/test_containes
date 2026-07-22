import { useEffect, useMemo, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { SlidersHorizontal } from "lucide-react"
import ProductCard from "@/components/product/ProductCard"
import FilterSidebar from "@/components/shop/FilterSidebar"
import SortDropdown from "@/components/shop/SortDropdown"
import { PRODUCTS, CATEGORIES } from "@/lib/products"

const PRICE_BANDS = {
  "0-50": { min: 0, max: 50 },
  "50-80": { min: 50, max: 80 },
  "80-120": { min: 80, max: 120 },
}

export default function Shop() {
  const [params, setParams] = useSearchParams()
  const [filters, setFilters] = useState({
    category: params.get("cat") || null,
    price: null,
    materials: [],
  })
  const [sort, setSort] = useState("featured")
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  // Keep URL in sync with category filter
  useEffect(() => {
    const next = new URLSearchParams(params)
    if (filters.category) next.set("cat", filters.category)
    else next.delete("cat")
    setParams(next, { replace: true })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters.category])

  // Sync category from URL changes (e.g. clicking nav links)
  useEffect(() => {
    const cat = params.get("cat") || null
    setFilters((f) => (f.category === cat ? f : { ...f, category: cat }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.toString()])

  const filtered = useMemo(() => {
    let list = PRODUCTS.slice()
    if (filters.category) list = list.filter((p) => p.category === filters.category)
    if (filters.price) {
      const band = PRICE_BANDS[filters.price]
      if (band) list = list.filter((p) => p.price >= band.min && p.price <= band.max)
    }
    if (filters.materials.length > 0) {
      list = list.filter((p) => {
        const blob = (p.materials + " " + p.description).toLowerCase()
        return filters.materials.some((m) => blob.includes(m))
      })
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
      default:
        break
    }
    return list
  }, [filters, sort])

  const currentCategory = CATEGORIES.find((c) => c.id === filters.category)

  return (
    <>
      {/* Hero strip */}
      <section className="pt-28 md:pt-36 pb-10 md:pb-14 bg-cream">
        <div className="max-w-8xl mx-auto px-5 md:px-8 lg:px-12 text-center">
          <p className="eyebrow text-gold">Shop · {currentCategory ? currentCategory.name : "All Pieces"}</p>
          <h1 className="mt-4 font-serif text-ink text-[clamp(2.25rem,5vw,4rem)] leading-[1.05]">
            {currentCategory ? (
              <>The {currentCategory.name} <span className="italic font-normal">edit.</span></>
            ) : (
              <>All jewelry, <span className="italic font-normal">made for you.</span></>
            )}
          </h1>
          <p className="mt-4 text-muted max-w-md mx-auto text-[15px]">
            Demi-fine pieces, hand-finished in 18K gold plating. Free worldwide shipping over $75.
          </p>
        </div>
      </section>

      <section className="bg-cream pb-24">
        <div className="max-w-8xl mx-auto px-5 md:px-8 lg:px-12">
          {/* Toolbar */}
          <div className="flex items-center justify-between pb-6 border-b border-hairline">
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(true)}
              className="md:hidden inline-flex items-center gap-2 eyebrow text-ink border border-hairline px-4 py-2.5"
            >
              <SlidersHorizontal size={14} strokeWidth={1.5} /> Filters
            </button>
            <p className="hidden md:block eyebrow text-muted">
              {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
            </p>
            <SortDropdown value={sort} onChange={setSort} />
          </div>

          <div className="mt-10 flex gap-12">
            {/* Desktop sidebar */}
            <div className="hidden md:block">
              <FilterSidebar filters={filters} setFilters={setFilters} resultCount={filtered.length} />
            </div>

            {/* Grid */}
            <div className="flex-1 min-w-0">
              {filtered.length > 0 ? (
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
                  {filtered.map((p) => (
                    <ProductCard key={p.id} product={p} />
                  ))}
                </div>
              ) : (
                <div className="py-20 text-center">
                  <p className="font-serif text-2xl text-ink">No pieces match those filters.</p>
                  <button
                    type="button"
                    onClick={() => setFilters({ category: null, price: null, materials: [] })}
                    className="btn-ghost mt-6"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Mobile filter drawer */}
      <div
        className={[
          "fixed inset-0 z-[60] md:hidden transition-opacity duration-300",
          mobileFiltersOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        ].join(" ")}
        aria-hidden={!mobileFiltersOpen}
      >
        <div
          className="absolute inset-0 bg-ink/40"
          onClick={() => setMobileFiltersOpen(false)}
          aria-hidden="true"
        />
        <div
          className={[
            "absolute inset-y-0 left-0 w-[88%] max-w-sm bg-cream overflow-y-auto transition-transform duration-500 ease-out",
            mobileFiltersOpen ? "translate-x-0" : "-translate-x-full",
          ].join(" ")}
          role="dialog"
          aria-label="Filters"
        >
          <div className="px-6 py-5 flex items-center justify-between border-b border-hairline">
            <p className="eyebrow text-ink">Filters</p>
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(false)}
              className="eyebrow text-muted hover:text-ink"
            >
              Done
            </button>
          </div>
          <div className="px-6">
            <FilterSidebar filters={filters} setFilters={setFilters} resultCount={filtered.length} />
          </div>
        </div>
      </div>
    </>
  )
}
