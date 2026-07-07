import React, { useEffect, useMemo, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { PRODUCTS, CATEGORIES } from "@/data/products"
import ProductCard from "@/components/product/ProductCard"
import { cn } from "@/lib/utils"
import { SlidersHorizontal, X } from "lucide-react"

const PRICE_BUCKETS = [
  { id: "all", label: "All Prices", min: 0, max: Infinity },
  { id: "under50", label: "Under $50", min: 0, max: 49 },
  { id: "50to80", label: "$50 – $80", min: 50, max: 80 },
  { id: "over80", label: "Over $80", min: 81, max: Infinity },
]

const MATERIALS = ["18K Gold Plated"]

const SORTS = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()

  const initialCategory = searchParams.get("category") || "all"
  const [category, setCategory] = useState(initialCategory)
  const [price, setPrice] = useState("all")
  const [material, setMaterial] = useState("all")
  const [sort, setSort] = useState("featured")
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  useEffect(() => {
    setCategory(searchParams.get("category") || "all")
  }, [searchParams])

  const filtered = useMemo(() => {
    let list = PRODUCTS.slice()
    if (category !== "all") list = list.filter((p) => p.category === category)
    const bucket = PRICE_BUCKETS.find((b) => b.id === price)
    if (bucket) list = list.filter((p) => p.price >= bucket.min && p.price <= bucket.max)
    if (material !== "all") list = list.filter((p) => p.material === material)

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
  }, [category, price, material, sort])

  const updateCategory = (val) => {
    setCategory(val)
    if (val === "all") {
      searchParams.delete("category")
    } else {
      searchParams.set("category", val)
    }
    setSearchParams(searchParams, { replace: true })
  }

  const resetFilters = () => {
    setCategory("all")
    setPrice("all")
    setMaterial("all")
    setSearchParams({}, { replace: true })
  }

  const FilterPanel = () => (
    <div className="space-y-8">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-ink">Category</p>
        <ul className="mt-4 space-y-2.5">
          <li>
            <button
              type="button"
              onClick={() => updateCategory("all")}
              className={cn(
                "text-sm transition-colors",
                category === "all" ? "text-gold" : "text-stone hover:text-ink"
              )}
            >
              All Jewelry
            </button>
          </li>
          {CATEGORIES.map((c) => (
            <li key={c.id}>
              <button
                type="button"
                onClick={() => updateCategory(c.id)}
                className={cn(
                  "text-sm transition-colors",
                  category === c.id ? "text-gold" : "text-stone hover:text-ink"
                )}
              >
                {c.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-ink">Price</p>
        <ul className="mt-4 space-y-2.5">
          {PRICE_BUCKETS.map((b) => (
            <li key={b.id}>
              <button
                type="button"
                onClick={() => setPrice(b.id)}
                className={cn(
                  "text-sm transition-colors",
                  price === b.id ? "text-gold" : "text-stone hover:text-ink"
                )}
              >
                {b.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-ink">Material</p>
        <ul className="mt-4 space-y-2.5">
          <li>
            <button
              type="button"
              onClick={() => setMaterial("all")}
              className={cn(
                "text-sm transition-colors",
                material === "all" ? "text-gold" : "text-stone hover:text-ink"
              )}
            >
              All Materials
            </button>
            </li>
          {MATERIALS.map((m) => (
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

      <button
        type="button"
        onClick={resetFilters}
        className="text-xs uppercase tracking-[0.15em] text-stone underline hover:text-ink"
      >
        Reset Filters
      </button>
    </div>
  )

  return (
    <div className="bg-cream pt-20 md:pt-24">
      {/* Header */}
      <div className="border-b border-line">
        <div className="mx-auto max-w-7xl px-5 py-12 text-center md:px-8 md:py-16">
          <p className="text-xs uppercase tracking-[0.25em] text-gold">The Collection</p>
          <h1 className="mt-3 font-serif text-4xl text-ink md:text-5xl">
            {category === "all"
              ? "All Jewelry"
              : CATEGORIES.find((c) => c.id === category)?.name}
          </h1>
          <p className="mx-auto mt-4 max-w-md text-sm text-stone">
            Demi-fine gold pieces, designed to be worn and treasured.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-10 md:px-8">
        {/* Mobile controls */}
        <div className="mb-6 flex items-center justify-between md:hidden">
          <button
            type="button"
            onClick={() => setMobileFiltersOpen(true)}
            className="flex items-center gap-2 border border-line px-4 py-2.5 text-xs uppercase tracking-[0.15em] text-ink"
          >
            <SlidersHorizontal className="h-4 w-4" />
            Filters
          </button>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="border border-line bg-cream px-3 py-2.5 text-xs uppercase tracking-[0.1em] text-ink"
          >
            {SORTS.map((s) => (
              <option key={s.id} value={s.id}>{s.label}</option>
            ))}
          </select>
        </div>

        <div className="flex gap-12">
          {/* Sidebar (desktop) */}
          <aside className="hidden w-56 shrink-0 md:block">
            <FilterPanel />
          </aside>

          {/* Grid */}
          <div className="flex-1">
            <div className="mb-6 hidden items-center justify-between md:flex">
              <p className="text-xs uppercase tracking-[0.15em] text-stone">
                {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
              </p>
              <div className="flex items-center gap-3">
                <span className="text-xs uppercase tracking-[0.15em] text-stone">Sort</span>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="border border-line bg-cream px-3 py-2 text-xs uppercase tracking-[0.1em] text-ink"
                >
                  {SORTS.map((s) => (
                    <option key={s.id} value={s.id}>{s.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center gap-3 py-24 text-center">
                <p className="font-serif text-2xl text-ink">No pieces match your filters</p>
                <button
                  type="button"
                  onClick={resetFilters}
                  className="text-xs uppercase tracking-[0.15em] text-gold underline"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3">
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
        <div className="fixed inset-0 z-[80] md:hidden">
          <div className="absolute inset-0 bg-ink/40" onClick={() => setMobileFiltersOpen(false)} />
          <div className="absolute left-0 top-0 h-full w-80 max-w-[85%] bg-cream p-6 overflow-y-auto">
            <div className="mb-6 flex items-center justify-between">
              <p className="font-serif text-xl text-ink">Filters</p>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                aria-label="Close filters"
                className="text-ink"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <FilterPanel />
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(false)}
              className="mt-8 w-full bg-gold py-3.5 text-xs uppercase tracking-[0.2em] text-cream"
            >
              Show {filtered.length} Results
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
