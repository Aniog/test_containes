import { useMemo, useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { SlidersHorizontal, X } from "lucide-react"
import { products, categories } from "@/data/products"
import ProductCard from "@/components/product/ProductCard"
import { useStrkImages } from "@/hooks/useStrkImages"
import { cn } from "@/lib/utils"

const SORTS = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
]

const PRICE_BUCKETS = [
  { id: "all", label: "All Prices", min: 0, max: Infinity },
  { id: "under50", label: "Under $50", min: 0, max: 49 },
  { id: "50-80", label: "$50 – $80", min: 50, max: 80 },
  { id: "over80", label: "Over $80", min: 81, max: Infinity },
]

const MATERIALS = ["18K Gold Plated"]

export default function Shop() {
  const [params, setParams] = useSearchParams()
  const ref = useStrkImages([])

  const initialCategory = params.get("category") || "All"
  const [category, setCategory] = useState(initialCategory)
  const [price, setPrice] = useState("all")
  const [material, setMaterial] = useState("All")
  const [sort, setSort] = useState("featured")
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  useEffect(() => {
    const c = params.get("category") || "All"
    setCategory(c)
  }, [params])

  const filtered = useMemo(() => {
    const bucket = PRICE_BUCKETS.find((b) => b.id === price) || PRICE_BUCKETS[0]
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
  }, [category, price, material, sort])

  const setCategoryParam = (c) => {
    setCategory(c)
    if (c === "All") {
      params.delete("category")
    } else {
      params.set("category", c)
    }
    setParams(params, { replace: true })
  }

  const FilterPanel = (
    <div className="space-y-8">
      <div>
        <h3 className="text-[11px] uppercase tracking-widest2 text-muted mb-4">
          Category
        </h3>
        <ul className="space-y-2.5">
          {["All", ...categories.map((c) => c.id)].map((c) => (
            <li key={c}>
              <button
                type="button"
                onClick={() => setCategoryParam(c)}
                className={cn(
                  "text-sm transition-colors",
                  category === c ? "text-gold" : "text-ink hover:text-gold"
                )}
              >
                {c === "All" ? "All Jewelry" : c}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-[11px] uppercase tracking-widest2 text-muted mb-4">
          Price
        </h3>
        <ul className="space-y-2.5">
          {PRICE_BUCKETS.map((b) => (
            <li key={b.id}>
              <button
                type="button"
                onClick={() => setPrice(b.id)}
                className={cn(
                  "text-sm transition-colors",
                  price === b.id ? "text-gold" : "text-ink hover:text-gold"
                )}
              >
                {b.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-[11px] uppercase tracking-widest2 text-muted mb-4">
          Material
        </h3>
        <ul className="space-y-2.5">
          {["All", ...MATERIALS].map((m) => (
            <li key={m}>
              <button
                type="button"
                onClick={() => setMaterial(m)}
                className={cn(
                  "text-sm transition-colors",
                  material === m ? "text-gold" : "text-ink hover:text-gold"
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
      <div className="border-b border-line">
        <div className="mx-auto max-w-content px-5 md:px-8 py-12 md:py-16 text-center">
          <p className="text-[11px] uppercase tracking-widest2 text-gold mb-3">
            The Collection
          </p>
          <h1 className="font-serif text-4xl md:text-6xl">
            {category === "All" ? "All Jewelry" : category}
          </h1>
          <p className="mt-4 text-muted max-w-xl mx-auto">
            Demi-fine gold pieces, designed in studio and made to be worn every day.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-content px-5 md:px-8 py-10">
        <div className="flex gap-10">
          {/* Sidebar (desktop) */}
          <aside className="hidden md:block w-56 shrink-0">
            <div className="sticky top-28">{FilterPanel}</div>
          </aside>

          {/* Main */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-8">
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="md:hidden inline-flex items-center gap-2 text-[11px] uppercase tracking-widest2 border border-line px-4 py-2.5"
              >
                <SlidersHorizontal width={14} /> Filters
              </button>
              <p className="hidden md:block text-sm text-muted">
                {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
              </p>
              <div className="flex items-center gap-2">
                <label htmlFor="sort" className="text-[11px] uppercase tracking-widest2 text-muted">
                  Sort
                </label>
                <select
                  id="sort"
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="bg-transparent border border-line text-sm px-3 py-2 focus:outline-none focus:border-gold"
                >
                  {SORTS.map((s) => (
                    <option key={s.id} value={s.id}>{s.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {filtered.length === 0 ? (
              <div className="py-24 text-center">
                <p className="font-serif text-2xl">No pieces match your filters.</p>
                <button
                  type="button"
                  onClick={() => {
                    setCategoryParam("All")
                    setPrice("all")
                    setMaterial("All")
                  }}
                  className="mt-4 text-[11px] uppercase tracking-widest2 text-gold border-b border-gold pb-1"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10">
                {filtered.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <div className="md:hidden fixed inset-0 z-[80]">
          <div
            className="absolute inset-0 bg-ink/40"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full w-80 max-w-[85%] bg-cream p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-2xl">Filters</h2>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                aria-label="Close filters"
              >
                <X width={20} />
              </button>
            </div>
            {FilterPanel}
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(false)}
              className="mt-10 w-full bg-gold text-cream uppercase tracking-widest2 text-[11px] py-3.5"
            >
              Show {filtered.length} Results
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
