import { useMemo, useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { SlidersHorizontal, ChevronDown } from "lucide-react"
import { products, priceRanges } from "@/data/products"
import { ProductCard } from "@/components/product/ProductCard"
import { FilterSidebar } from "@/components/shop/FilterSidebar"
import { cn } from "@/lib/utils"

const SORTS = [
  { id: "featured",  label: "Featured" },
  { id: "low-high",  label: "Price: Low to High" },
  { id: "high-low",  label: "Price: High to Low" },
  { id: "top-rated", label: "Top Rated" },
]

export function Shop() {
  const [params, setParams] = useSearchParams()
  const initialCat = params.get("cat") || "all"

  const [category, setCategory] = useState(initialCat)
  const [price, setPrice]         = useState("all")
  const [material, setMaterial]   = useState("all")
  const [sort, setSort]           = useState("featured")
  const [filterOpen, setFilterOpen] = useState(false)
  const [sortOpen, setSortOpen]     = useState(false)

  // Keep URL in sync when category changes via the in-page filters
  useEffect(() => {
    if (category === "all") {
      if (params.get("cat")) {
        const next = new URLSearchParams(params)
        next.delete("cat")
        setParams(next, { replace: true })
      }
    } else {
      if (params.get("cat") !== category) {
        const next = new URLSearchParams(params)
        next.set("cat", category)
        setParams(next, { replace: true })
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category])

  const filtered = useMemo(() => {
    const range = priceRanges.find((r) => r.id === price) || priceRanges[0]
    let list = products.filter((p) => {
      const catOk = category === "all" || p.category === category
      const priceOk = p.price >= range.min && p.price <= range.max
      const matOk = material === "all" || p.material === material
      return catOk && priceOk && matOk
    })
    if (sort === "low-high")  list = [...list].sort((a, b) => a.price - b.price)
    if (sort === "high-low")  list = [...list].sort((a, b) => b.price - a.price)
    if (sort === "top-rated") list = [...list].sort((a, b) => b.rating - a.rating)
    return list
  }, [category, price, material, sort])

  const clearAll = () => { setCategory("all"); setPrice("all"); setMaterial("all") }
  const activeLabel = SORTS.find((s) => s.id === sort)?.label

  return (
    <div className="pt-20 md:pt-24">
      {/* Header */}
      <header className="border-b border-line">
        <div className="max-w-editorial mx-auto px-6 md:px-10 lg:px-14 py-14 md:py-20 text-center">
          <span className="eyebrow text-gold-300">The Collection</span>
          <h1 className="editorial-heading text-5xl md:text-6xl lg:text-7xl mt-3">
            Shop everything
          </h1>
          <p className="text-cocoa-100 mt-4 max-w-xl mx-auto">
            Demi-fine gold, designed to be lived in. Every piece is plated in 18K gold
            over hypoallergenic brass and crafted in small batches.
          </p>
        </div>
      </header>

      <div className="max-w-editorial mx-auto px-6 md:px-10 lg:px-14 py-10 md:py-14">
        <div className="flex gap-10 lg:gap-16">
          <FilterSidebar
            category={category} onCategory={setCategory}
            price={price} onPrice={setPrice}
            material={material} onMaterial={setMaterial}
            onClear={clearAll}
            isOpen={filterOpen} onClose={() => setFilterOpen(false)}
          />

          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between gap-4 mb-8">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setFilterOpen(true)}
                  className="md:hidden inline-flex items-center gap-2 eyebrow text-cocoa border border-line px-4 py-2.5"
                >
                  <SlidersHorizontal size={14} strokeWidth={1.5} /> Filter
                </button>
                <span className="text-sm text-cocoa-100">
                  {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
                </span>
              </div>

              {/* Sort dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setSortOpen((v) => !v)}
                  aria-expanded={sortOpen}
                  className="inline-flex items-center gap-2 eyebrow text-cocoa border border-line px-4 py-2.5 hover:border-cocoa transition-colors"
                >
                  <span className="text-cocoa-50">Sort:</span>
                  <span>{activeLabel}</span>
                  <ChevronDown size={14} strokeWidth={1.5} className={cn("transition-transform", sortOpen && "rotate-180")} />
                </button>
                {sortOpen && (
                  <>
                    <div className="fixed inset-0 z-30" onClick={() => setSortOpen(false)} aria-hidden="true" />
                    <ul className="absolute right-0 top-full mt-2 w-56 bg-bone border border-line shadow-card z-40">
                      {SORTS.map((s) => (
                        <li key={s.id}>
                          <button
                            type="button"
                            onClick={() => { setSort(s.id); setSortOpen(false) }}
                            className={cn(
                              "block w-full text-left px-4 py-3 text-sm transition-colors",
                              sort === s.id ? "text-cocoa bg-bone-50" : "text-cocoa-100 hover:text-cocoa hover:bg-bone-50"
                            )}
                          >
                            {s.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>

            {/* Grid */}
            {filtered.length === 0 ? (
              <div className="py-20 text-center">
                <p className="font-serif text-2xl text-cocoa">No pieces match your filters</p>
                <button type="button" onClick={clearAll} className="btn-outline mt-6">
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-12">
                {filtered.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
