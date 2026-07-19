import { useEffect, useMemo, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { SlidersHorizontal, X, ChevronDown } from "lucide-react"
import { products } from "@/data/products"
import ProductCard from "@/components/product/ProductCard"
import { cn } from "@/lib/utils"

const categoryOptions = ["All", "Earrings", "Necklaces", "Huggies"]
const materialOptions = ["All", "18K Gold Plated"]
const priceRanges = [
  { label: "All Prices", min: 0, max: Infinity },
  { label: "Under $50", min: 0, max: 50 },
  { label: "$50 – $100", min: 50, max: 100 },
  { label: "$100+", min: 100, max: Infinity },
]
const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const initialCategory = searchParams.get("category") || "All"

  const [category, setCategory] = useState(
    categoryOptions.includes(initialCategory) ? initialCategory : "All"
  )
  const [material, setMaterial] = useState("All")
  const [priceIdx, setPriceIdx] = useState(0)
  const [sort, setSort] = useState("featured")
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const c = searchParams.get("category")
    if (c && categoryOptions.includes(c)) setCategory(c)
  }, [searchParams])

  const filtered = useMemo(() => {
    const range = priceRanges[priceIdx]
    let list = products.filter((p) => {
      const catOk = category === "All" || p.category === category
      const matOk = material === "All" || p.material === material
      const priceOk = p.price >= range.min && p.price < range.max
      return catOk && matOk && priceOk
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
  }, [category, material, priceIdx, sort])

  const updateCategory = (c) => {
    setCategory(c)
    const next = new URLSearchParams(searchParams)
    if (c === "All") next.delete("category")
    else next.set("category", c)
    setSearchParams(next, { replace: true })
  }

  const resetFilters = () => {
    setCategory("All")
    setMaterial("All")
    setPriceIdx(0)
    setSort("featured")
    setSearchParams({}, { replace: true })
  }

  const FilterPanel = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-[11px] uppercase tracking-[0.22em] text-ink">Category</h3>
        <ul className="mt-3 space-y-2.5">
          {categoryOptions.map((c) => (
            <li key={c}>
              <button
                type="button"
                onClick={() => updateCategory(c)}
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
        <h3 className="text-[11px] uppercase tracking-[0.22em] text-ink">Material</h3>
        <ul className="mt-3 space-y-2.5">
          {materialOptions.map((m) => (
            <li key={m}>
              <button
                type="button"
                onClick={() => setMaterial(m)}
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

      <div>
        <h3 className="text-[11px] uppercase tracking-[0.22em] text-ink">Price</h3>
        <ul className="mt-3 space-y-2.5">
          {priceRanges.map((r, i) => (
            <li key={r.label}>
              <button
                type="button"
                onClick={() => setPriceIdx(i)}
                className={cn(
                  "text-sm transition-colors",
                  priceIdx === i ? "text-gold" : "text-stone hover:text-ink"
                )}
              >
                {r.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <button
        type="button"
        onClick={resetFilters}
        className="text-[11px] uppercase tracking-[0.18em] text-stone underline hover:text-gold"
      >
        Reset Filters
      </button>
    </div>
  )

  return (
    <div className="pt-20 md:pt-24">
      {/* Header */}
      <div className="border-b border-ink/10 bg-sand">
        <div className="mx-auto max-w-7xl px-5 py-14 text-center md:px-8 md:py-20">
          <span className="text-[11px] uppercase tracking-[0.3em] text-gold">The Collection</span>
          <h1 className="mt-3 font-serif text-4xl text-ink md:text-6xl">Shop All Jewelry</h1>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-stone">
            Demi-fine gold pieces, designed to be layered and treasured.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-14">
        {/* Toolbar */}
        <div className="flex items-center justify-between border-b border-ink/10 pb-5">
          <button
            type="button"
            onClick={() => setMobileFiltersOpen(true)}
            className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-ink lg:hidden"
          >
            <SlidersHorizontal className="h-4 w-4" strokeWidth={1.5} />
            Filters
          </button>
          <p className="hidden text-[11px] uppercase tracking-[0.2em] text-stone lg:block">
            {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
          </p>
          <div className="relative">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="appearance-none border-b border-ink/20 bg-transparent py-2 pl-1 pr-8 text-[11px] uppercase tracking-[0.18em] text-ink focus:border-gold focus:outline-none"
            >
              {sortOptions.map((o) => (
                <option key={o.value} value={o.value}>
                  Sort: {o.label}
                </option>
              ))}
            </select>
            <ChevronDown
              className="pointer-events-none absolute right-1 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-stone"
              strokeWidth={1.5}
            />
          </div>
        </div>

        <div className="mt-8 flex gap-10">
          {/* Sidebar */}
          <aside className="hidden w-52 shrink-0 lg:block">
            <FilterPanel />
          </aside>

          {/* Grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="py-24 text-center">
                <p className="font-serif text-2xl text-ink">No pieces match your filters.</p>
                <button
                  type="button"
                  onClick={resetFilters}
                  className="mt-4 text-[11px] uppercase tracking-[0.2em] text-gold underline"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 md:gap-x-8">
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
        <div className="fixed inset-0 z-[80] lg:hidden">
          <div
            className="absolute inset-0 bg-ink/40"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full w-80 max-w-[85%] overflow-y-auto bg-cream p-6">
            <div className="flex items-center justify-between border-b border-ink/10 pb-4">
              <h2 className="font-serif text-xl text-ink">Filters</h2>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                aria-label="Close filters"
                className="text-ink hover:text-gold"
              >
                <X className="h-5 w-5" strokeWidth={1.5} />
              </button>
            </div>
            <div className="pt-6">
              <FilterPanel />
            </div>
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(false)}
              className="mt-8 w-full bg-gold py-3.5 text-[11px] uppercase tracking-[0.2em] text-cream hover:bg-gold-deep"
            >
              Show {filtered.length} Results
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
