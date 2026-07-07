import React, { useEffect, useMemo, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { SlidersHorizontal, X, Check } from "lucide-react"
import { products, categories } from "@/data/products"
import ProductCard from "@/components/product/ProductCard"
import { useStrkImages } from "@/hooks/useStrkImages"
import { useScrollReveal } from "@/hooks/useScrollReveal"
import { cn } from "@/lib/utils"

const PRICE_BUCKETS = [
  { id: "under-50", label: "Under $50", min: 0, max: 50 },
  { id: "50-80", label: "$50 – $80", min: 50, max: 80 },
  { id: "over-80", label: "Over $80", min: 80, max: Infinity },
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
  const [sort, setSort] = useState("featured")
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const selectedCategories = useMemo(() => {
    const c = searchParams.get("category")
    return c ? [c] : []
  }, [searchParams])

  const selectedPrices = useMemo(() => {
    const p = searchParams.get("price")
    return p ? p.split(",").filter(Boolean) : []
  }, [searchParams])

  const selectedMaterials = useMemo(() => {
    const m = searchParams.get("material")
    return m ? m.split(",").filter(Boolean) : []
  }, [searchParams])

  const toggleParam = (key, value) => {
    const next = new URLSearchParams(searchParams)
    const current = next.get(key)
    const list = current ? current.split(",").filter(Boolean) : []
    const idx = list.indexOf(value)
    if (idx >= 0) list.splice(idx, 1)
    else list.push(value)
    if (list.length) next.set(key, list.join(","))
    else next.delete(key)
    setSearchParams(next, { replace: true })
  }

  const clearAll = () => {
    setSearchParams({}, { replace: true })
  }

  const filtered = useMemo(() => {
    let result = products.filter((p) => {
      if (
        selectedCategories.length &&
        !selectedCategories.includes(p.category)
      )
        return false
      if (selectedMaterials.length && !selectedMaterials.includes(p.material))
        return false
      if (selectedPrices.length) {
        const matches = selectedPrices.some((id) => {
          const bucket = PRICE_BUCKETS.find((b) => b.id === id)
          if (!bucket) return false
          return p.price >= bucket.min && p.price < bucket.max
        })
        if (!matches) return false
      }
      return true
    })

    switch (sort) {
      case "price-asc":
        result = [...result].sort((a, b) => a.price - b.price)
        break
      case "price-desc":
        result = [...result].sort((a, b) => b.price - a.price)
        break
      case "rating":
        result = [...result].sort((a, b) => b.rating - a.rating)
        break
      default:
        break
    }
    return result
  }, [selectedCategories, selectedMaterials, selectedPrices, sort])

  const containerRef = useStrkImages([searchParams.toString(), sort])
  useScrollReveal()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [searchParams.toString()])

  const activeFilterCount =
    selectedCategories.length + selectedPrices.length + selectedMaterials.length

  const FilterPanel = (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h3 className="font-sans text-xs uppercase tracking-widest text-ink">
          Filters
        </h3>
        {activeFilterCount > 0 && (
          <button
            onClick={clearAll}
            className="font-sans text-[11px] uppercase tracking-widest text-stone transition-colors hover:text-gold"
          >
            Clear all
          </button>
        )}
      </div>

      {/* Category */}
      <div>
        <p className="font-sans text-[11px] uppercase tracking-widest text-stone">
          Category
        </p>
        <ul className="mt-3 space-y-2.5">
          {categories.map((cat) => {
            const checked = selectedCategories.includes(cat.id)
            return (
              <li key={cat.id}>
                <button
                  onClick={() => toggleParam("category", cat.id)}
                  className="flex w-full items-center gap-3 text-left"
                >
                  <span
                    className={cn(
                      "flex h-4 w-4 items-center justify-center border transition-colors",
                      checked
                        ? "border-gold bg-gold text-ivory"
                        : "border-ink/30"
                    )}
                  >
                    {checked && <Check className="h-3 w-3" strokeWidth={2} />}
                  </span>
                  <span
                    className={cn(
                      "font-serif text-base transition-colors",
                      checked ? "text-gold" : "text-ink hover:text-gold"
                    )}
                  >
                    {cat.name}
                  </span>
                </button>
              </li>
            )
          })}
        </ul>
      </div>

      {/* Price */}
      <div>
        <p className="font-sans text-[11px] uppercase tracking-widest text-stone">
          Price
        </p>
        <ul className="mt-3 space-y-2.5">
          {PRICE_BUCKETS.map((bucket) => {
            const checked = selectedPrices.includes(bucket.id)
            return (
              <li key={bucket.id}>
                <button
                  onClick={() => toggleParam("price", bucket.id)}
                  className="flex w-full items-center gap-3 text-left"
                >
                  <span
                    className={cn(
                      "flex h-4 w-4 items-center justify-center border transition-colors",
                      checked
                        ? "border-gold bg-gold text-ivory"
                        : "border-ink/30"
                    )}
                  >
                    {checked && <Check className="h-3 w-3" strokeWidth={2} />}
                  </span>
                  <span
                    className={cn(
                      "font-serif text-base transition-colors",
                      checked ? "text-gold" : "text-ink hover:text-gold"
                    )}
                  >
                    {bucket.label}
                  </span>
                </button>
              </li>
            )
          })}
        </ul>
      </div>

      {/* Material */}
      <div>
        <p className="font-sans text-[11px] uppercase tracking-widest text-stone">
          Material
        </p>
        <ul className="mt-3 space-y-2.5">
          {MATERIALS.map((mat) => {
            const checked = selectedMaterials.includes(mat)
            return (
              <li key={mat}>
                <button
                  onClick={() => toggleParam("material", mat)}
                  className="flex w-full items-center gap-3 text-left"
                >
                  <span
                    className={cn(
                      "flex h-4 w-4 items-center justify-center border transition-colors",
                      checked
                        ? "border-gold bg-gold text-ivory"
                        : "border-ink/30"
                    )}
                  >
                    {checked && <Check className="h-3 w-3" strokeWidth={2} />}
                  </span>
                  <span
                    className={cn(
                      "font-serif text-base transition-colors",
                      checked ? "text-gold" : "text-ink hover:text-gold"
                    )}
                  >
                    {mat}
                  </span>
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )

  return (
    <div ref={containerRef} className="pt-16 md:pt-20">
      {/* Header */}
      <div className="container-editorial border-b border-ink/10 py-12 text-center md:py-16">
        <p className="eyebrow">The Collection</p>
        <h1 className="mt-3 font-serif text-5xl font-light text-ink md:text-6xl">
          Shop All
        </h1>
        <p className="mt-4 font-serif text-lg italic text-stone">
          Demi-fine gold, crafted to be treasured.
        </p>
      </div>

      <div className="container-editorial py-10 md:py-14">
        <div className="flex gap-12">
          {/* Sidebar (desktop) */}
          <aside className="hidden w-60 shrink-0 md:block">
            <div className="sticky top-28">{FilterPanel}</div>
          </aside>

          {/* Main */}
          <div className="min-w-0 flex-1">
            {/* Toolbar */}
            <div className="mb-8 flex items-center justify-between gap-4">
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="inline-flex items-center gap-2 border border-ink/25 px-4 py-2.5 font-sans text-[11px] uppercase tracking-widest text-ink transition-colors hover:border-gold hover:text-gold md:hidden"
              >
                <SlidersHorizontal className="h-4 w-4" strokeWidth={1.5} />
                Filters
                {activeFilterCount > 0 && (
                  <span className="flex h-4 min-w-4 items-center justify-center rounded-full bg-gold px-1 text-[10px] text-ivory">
                    {activeFilterCount}
                  </span>
                )}
              </button>
              <p className="hidden font-sans text-xs uppercase tracking-widest text-stone md:block">
                {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
              </p>
              <div className="flex items-center gap-3">
                <label
                  htmlFor="sort"
                  className="hidden font-sans text-[11px] uppercase tracking-widest text-stone sm:block"
                >
                  Sort
                </label>
                <select
                  id="sort"
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="border border-ink/25 bg-ivory-soft px-4 py-2.5 font-sans text-xs text-ink focus:border-gold focus:outline-none"
                >
                  {SORTS.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Grid */}
            {filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center gap-4 py-24 text-center">
                <p className="font-serif text-3xl text-ink">No pieces found</p>
                <p className="text-sm text-stone">
                  Try adjusting your filters.
                </p>
                <button onClick={clearAll} className="btn-outline mt-2">
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-x-5 gap-y-10 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-7">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      <div
        className={`fixed inset-0 z-50 md:hidden ${
          mobileFiltersOpen ? "" : "pointer-events-none"
        }`}
      >
        <div
          className={`absolute inset-0 bg-ink/40 backdrop-blur-sm transition-opacity duration-300 ${
            mobileFiltersOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileFiltersOpen(false)}
        />
        <aside
          className={`absolute left-0 top-0 flex h-full w-[85%] max-w-sm flex-col bg-ivory-soft shadow-soft transition-transform duration-400 ease-elegant ${
            mobileFiltersOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-ink/10 px-6 py-5">
            <h2 className="font-sans text-xs uppercase tracking-widest text-ink">
              Filters
            </h2>
            <button
              onClick={() => setMobileFiltersOpen(false)}
              aria-label="Close filters"
              className="text-ink hover:text-gold"
            >
              <X className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto px-6 py-6">{FilterPanel}</div>
          <div className="border-t border-ink/10 px-6 py-4">
            <button
              onClick={() => setMobileFiltersOpen(false)}
              className="btn-accent w-full"
            >
              Show {filtered.length} Results
            </button>
          </div>
        </aside>
      </div>
    </div>
  )
}
