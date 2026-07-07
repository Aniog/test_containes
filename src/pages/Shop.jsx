import { useMemo, useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { SlidersHorizontal, X } from "lucide-react"
import { products } from "@/data/products"
import ProductCard from "@/components/product/ProductCard"
import { useStrkImages } from "@/hooks/useStrkImages"
import { cn } from "@/lib/utils"

const CATEGORIES = ["All", "Earrings", "Necklaces", "Sets"]
const MATERIALS = ["18K Gold Plated"]
const PRICE_BUCKETS = [
  { id: "all", label: "All Prices", min: 0, max: Infinity },
  { id: "under50", label: "Under $50", min: 0, max: 49 },
  { id: "50to100", label: "$50 – $100", min: 50, max: 100 },
  { id: "over100", label: "Over $100", min: 101, max: Infinity },
]

const SORTS = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const ref = useStrkImages([])

  const initialCategory = searchParams.get("category") || "All"
  const [category, setCategory] = useState(
    CATEGORIES.includes(initialCategory) ? initialCategory : "All"
  )
  const [priceBucket, setPriceBucket] = useState("all")
  const [material, setMaterial] = useState("All")
  const [sort, setSort] = useState("featured")
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  // Keep URL in sync when category changes
  useEffect(() => {
    const next = new URLSearchParams(searchParams)
    if (category === "All") next.delete("category")
    else next.set("category", category)
    setSearchParams(next, { replace: true })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category])

  const filtered = useMemo(() => {
    const bucket = PRICE_BUCKETS.find((b) => b.id === priceBucket)
    let list = products.filter((p) => {
      const catOk = category === "All" || p.category === category
      const priceOk = p.price >= bucket.min && p.price <= bucket.max
      const matOk = material === "All" || p.material === material
      return catOk && priceOk && matOk
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
      default:
        break
    }
    return list
  }, [category, priceBucket, material, sort])

  const FilterPanel = (
    <div className="space-y-8">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-ink mb-4 font-medium">
          Category
        </p>
        <ul className="space-y-2.5">
          {CATEGORIES.map((c) => (
            <li key={c}>
              <button
                type="button"
                onClick={() => {
                  setCategory(c)
                  setMobileFiltersOpen(false)
                }}
                className={cn(
                  "text-sm transition-colors",
                  category === c ? "text-gold" : "text-stone hover:text-ink"
                )}
              >
                {c}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-ink mb-4 font-medium">
          Price
        </p>
        <ul className="space-y-2.5">
          {PRICE_BUCKETS.map((b) => (
            <li key={b.id}>
              <button
                type="button"
                onClick={() => {
                  setPriceBucket(b.id)
                  setMobileFiltersOpen(false)
                }}
                className={cn(
                  "text-sm transition-colors",
                  priceBucket === b.id ? "text-gold" : "text-stone hover:text-ink"
                )}
              >
                {b.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-ink mb-4 font-medium">
          Material
        </p>
        <ul className="space-y-2.5">
          <li>
            <button
              type="button"
              onClick={() => {
                setMaterial("All")
                setMobileFiltersOpen(false)
              }}
              className={cn(
                "text-sm transition-colors",
                material === "All" ? "text-gold" : "text-stone hover:text-ink"
              )}
            >
              All
            </button>
          </li>
          {MATERIALS.map((m) => (
            <li key={m}>
              <button
                type="button"
                onClick={() => {
                  setMaterial(m)
                  setMobileFiltersOpen(false)
                }}
                className={cn(
                  "text-sm transition-colors",
                  material === m ? "text-gold" : "text-stone hover:text-ink"
                )}
              >
                {m}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )

  return (
    <div ref={ref} className="pt-16 md:pt-20">
      {/* Header */}
      <div className="border-b border-ink/10">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-12 md:py-16 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-gold mb-3">
            The Collection
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-ink">
            Shop All Jewelry
          </h1>
          <p className="mt-4 text-stone max-w-xl mx-auto">
            Demi-fine gold pieces, hand-finished and made to be worn every day.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-10 py-10">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8">
          <button
            type="button"
            onClick={() => setMobileFiltersOpen(true)}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-ink md:hidden"
          >
            <SlidersHorizontal size={16} />
            Filters
          </button>
          <p className="hidden md:block text-sm text-stone">
            {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
          </p>
          <div className="flex items-center gap-3">
            <label htmlFor="sort" className="text-xs uppercase tracking-[0.15em] text-stone">
              Sort
            </label>
            <select
              id="sort"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="bg-transparent border border-ink/20 text-sm text-ink px-3 py-2 focus:outline-none focus:border-gold cursor-pointer"
            >
              {SORTS.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-10 md:gap-14">
          {/* Sidebar (desktop) */}
          <aside className="hidden md:block">
            <div className="sticky top-28">{FilterPanel}</div>
          </aside>

          {/* Grid */}
          <div>
            {filtered.length === 0 ? (
              <div className="py-24 text-center">
                <p className="font-serif text-2xl text-ink">No pieces match your filters</p>
                <p className="mt-3 text-stone text-sm">Try adjusting your selection.</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {filtered.map((p, i) => (
                  <ProductCard key={p.id} product={p} index={i} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <div
            className="absolute inset-0 bg-ink/40 animate-overlay-in"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <aside className="absolute left-0 top-0 h-full w-80 max-w-[85%] bg-cream shadow-2xl flex flex-col animate-drawer-in-left">
            <div className="flex items-center justify-between px-6 py-5 border-b border-ink/10">
              <h2 className="font-serif text-xl text-ink">Filters</h2>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                className="text-ink"
                aria-label="Close filters"
              >
                <X size={22} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-6 py-6">{FilterPanel}</div>
          </aside>
        </div>
      )}
    </div>
  )
}
