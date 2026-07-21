import React, { useEffect, useMemo, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { ChevronDown, SlidersHorizontal, X } from "lucide-react"
import { allProducts } from "@/data/products"
import ProductCard from "@/components/shop/ProductCard"
import FilterSidebar from "@/components/shop/FilterSidebar"
import { PRICE_TESTS } from "@/components/shop/priceBands"
import { cn } from "@/lib/utils"

const SORTS = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
  { id: "name", label: "Name" },
]

function defaultFilters() {
  return { categories: [], material: "all", price: "all", giftOnly: false }
}

export default function Shop() {
  const [params, setParams] = useSearchParams()
  const [filters, setFilters] = useState(() => {
    const cat = params.get("cat")
    return {
      ...defaultFilters(),
      categories: cat ? [cat] : [],
      giftOnly: params.get("type") === "gift",
    }
  })
  const [sort, setSort] = useState("featured")
  const [sortOpen, setSortOpen] = useState(false)
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  // Sync the `cat` and `type` query params with the active filter so deep links work.
  useEffect(() => {
    const cat = params.get("cat")
    const wantGift = params.get("type") === "gift"
    const catOk =
      (cat && filters.categories.length === 1 && filters.categories[0] === cat) ||
      (!cat && filters.categories.length === 0)
    const giftOk = filters.giftOnly === wantGift
    if (catOk && giftOk) return
    const next = new URLSearchParams(params)
    if (filters.categories.length === 1) {
      next.set("cat", filters.categories[0])
    } else {
      next.delete("cat")
    }
    if (filters.giftOnly) {
      next.set("type", "gift")
    } else {
      next.delete("type")
    }
    setParams(next, { replace: true })
  }, [filters.categories, filters.giftOnly, params, setParams])

  const filtered = useMemo(() => {
    let list = allProducts.filter((p) => {
      if (filters.categories.length > 0 && !filters.categories.includes(p.category)) {
        return false
      }
      if (filters.material !== "all" && p.material !== filters.material) {
        return false
      }
      if (filters.giftOnly && !p.isGift) {
        return false
      }
      const priceTest = PRICE_TESTS[filters.price] || PRICE_TESTS.all
      if (!priceTest(p)) return false
      return true
    })

    switch (sort) {
      case "price-asc":
        list = [...list].sort((a, b) => a.price - b.price)
        break
      case "price-desc":
        list = [...list].sort((a, b) => b.price - a.price)
        break
      case "rating":
        list = [...list].sort((a, b) => b.rating - a.rating)
        break
      case "name":
        list = [...list].sort((a, b) => a.name.localeCompare(b.name))
        break
      default:
        list = [...list].sort(
          (a, b) => Number(b.isBestseller) - Number(a.isBestseller)
        )
    }
    return list
  }, [filters, sort])

  // Close sort menu on outside click
  useEffect(() => {
    if (!sortOpen) return undefined
    const close = (e) => {
      if (!e.target.closest("[data-sort-toggle]") && !e.target.closest("[data-sort-menu]")) {
        setSortOpen(false)
      }
    }
    window.addEventListener("click", close)
    return () => window.removeEventListener("click", close)
  }, [sortOpen])

  return (
    <>
      {/* Editorial header */}
      <section className="bg-bone pt-32 md:pt-44 pb-10 md:pb-14 border-b border-line">
        <div className="max-w-8xl mx-auto px-5 md:px-8 lg:px-12">
          <p className="text-[10px] md:text-[11px] tracking-widest3 uppercase text-champagne-deep mb-4">
            {filters.giftOnly ? "Gifting" : "The Collection"}
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-ink tracking-tight">
            {filters.giftOnly ? "Gift Sets" : "Shop All"}
          </h1>
          <p className="mt-5 max-w-xl text-muted text-[15px] leading-relaxed">
            {filters.giftOnly
              ? "Curated sets, presented in our signature cream linen gift box. Ready to give — and to be remembered."
              : "Hand-finished demi-fine jewelry in warm 18K gold plate — designed for the everyday, made to be treasured."}
          </p>
        </div>
      </section>

      <section className="bg-bone">
        <div className="max-w-8xl mx-auto px-5 md:px-8 lg:px-12 py-10 md:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] xl:grid-cols-[260px_1fr] gap-10 lg:gap-14">
            {/* Sidebar — desktop */}
            <div className="hidden lg:block">
              <FilterSidebar filters={filters} setFilters={setFilters} />
            </div>

            <div>
              {/* Toolbar */}
              <div className="flex items-center justify-between gap-4 mb-8">
                <p className="text-xs text-muted">
                  {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
                </p>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setMobileFiltersOpen(true)}
                    className="lg:hidden inline-flex items-center gap-2 px-4 py-2.5 border border-line text-[10px] tracking-widest2 uppercase text-ink"
                  >
                    <SlidersHorizontal className="w-3.5 h-3.5" strokeWidth={1.5} />
                    Filter
                  </button>
                  <div className="relative">
                    <button
                      data-sort-toggle
                      type="button"
                      onClick={() => setSortOpen((v) => !v)}
                      className="inline-flex items-center gap-2 px-4 py-2.5 border border-line text-[10px] tracking-widest2 uppercase text-ink hover:border-ink transition-colors"
                      aria-haspopup="listbox"
                      aria-expanded={sortOpen}
                    >
                      Sort · {SORTS.find((s) => s.id === sort)?.label}
                      <ChevronDown
                        className={cn(
                          "w-3.5 h-3.5 transition-transform duration-300",
                          sortOpen && "rotate-180"
                        )}
                        strokeWidth={1.5}
                      />
                    </button>
                    {sortOpen && (
                      <ul
                        data-sort-menu
                        role="listbox"
                        className="absolute right-0 top-full mt-2 w-56 bg-bone border border-line shadow-card py-2 z-30"
                      >
                        {SORTS.map((s) => (
                          <li key={s.id}>
                            <button
                              type="button"
                              onClick={() => {
                                setSort(s.id)
                                setSortOpen(false)
                              }}
                              className={cn(
                                "w-full text-left px-4 py-2 text-[12px] transition-colors",
                                sort === s.id
                                  ? "text-ink bg-bone-soft"
                                  : "text-muted hover:text-ink"
                              )}
                            >
                              {s.label}
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>

              {/* Grid */}
              {filtered.length === 0 ? (
                <div className="py-20 text-center">
                  <p className="font-serif text-2xl text-ink">No pieces found</p>
                  <p className="text-muted mt-2 text-sm">
                    Try clearing some filters.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-12 md:gap-x-6 md:gap-y-14">
                  {filtered.map((p, i) => (
                    <ProductCard key={p.id} product={p} eager={i < 4} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Mobile filters drawer */}
      {mobileFiltersOpen && (
        <div className="lg:hidden fixed inset-0 z-[60]">
          <div
            className="absolute inset-0 bg-ink/40"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute top-0 left-0 h-full w-[88%] max-w-sm bg-bone shadow-drawer overflow-y-auto p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-serif text-2xl text-ink">Filter</h2>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                aria-label="Close filters"
                className="w-10 h-10 inline-flex items-center justify-center"
              >
                <X className="w-5 h-5" strokeWidth={1.5} />
              </button>
            </div>
            <FilterSidebar
              filters={filters}
              setFilters={(f) => {
                setFilters(f)
              }}
            />
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(false)}
              className="w-full mt-6 py-3.5 bg-ink text-bone text-[11px] tracking-widest2 uppercase"
            >
              Show {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
            </button>
          </div>
        </div>
      )}
    </>
  )
}
