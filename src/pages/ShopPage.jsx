import React, { useMemo, useState, useEffect, useRef } from "react"
import { useSearchParams, Link } from "react-router-dom"
import { SlidersHorizontal, X, ChevronDown } from "lucide-react"
import { products, CATEGORIES, MATERIALS } from "@/data/products"
import ProductCard from "@/components/product/ProductCard"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { cn } from "@/lib/utils"

const SORT_OPTIONS = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
]

const PRICE_RANGES = [
  { id: "all", label: "All Prices", min: 0, max: Infinity },
  { id: "under-50", label: "Under $50", min: 0, max: 49 },
  { id: "50-80", label: "$50 – $80", min: 50, max: 80 },
  { id: "over-80", label: "Over $80", min: 81, max: Infinity },
]

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const containerRef = useRef(null)

  const initialCategory = searchParams.get("category") || "all"
  const [category, setCategory] = useState(initialCategory)
  const [material, setMaterial] = useState("all")
  const [priceRange, setPriceRange] = useState("all")
  const [sort, setSort] = useState("featured")
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  useEffect(() => {
    setCategory(searchParams.get("category") || "all")
  }, [searchParams])

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [category, material, priceRange, sort])

  const setCategoryParam = (value) => {
    setCategory(value)
    const next = new URLSearchParams(searchParams)
    if (value === "all") next.delete("category")
    else next.set("category", value)
    setSearchParams(next, { replace: true })
  }

  const filtered = useMemo(() => {
    let list = products.slice()
    if (category !== "all") list = list.filter((p) => p.category === category)
    if (material !== "all") list = list.filter((p) => p.material === material)
    const range = PRICE_RANGES.find((r) => r.id === priceRange)
    if (range) list = list.filter((p) => p.price >= range.min && p.price <= range.max)

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
  }, [category, material, priceRange, sort])

  const resetFilters = () => {
    setCategoryParam("all")
    setMaterial("all")
    setPriceRange("all")
    setSort("featured")
  }

  const FilterContent = () => (
    <div className="space-y-10">
      {/* Category */}
      <div>
        <p className="font-sans text-[11px] uppercase tracking-[0.22em] text-ink">
          Category
        </p>
        <ul className="mt-4 space-y-3">
          <li>
            <button
              type="button"
              onClick={() => setCategoryParam("all")}
              className={cn(
                "font-sans text-sm transition-colors",
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
                onClick={() => setCategoryParam(c.id)}
                className={cn(
                  "font-sans text-sm transition-colors",
                  category === c.id ? "text-gold" : "text-stone hover:text-ink"
                )}
              >
                {c.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Price */}
      <div>
        <p className="font-sans text-[11px] uppercase tracking-[0.22em] text-ink">
          Price
        </p>
        <ul className="mt-4 space-y-3">
          {PRICE_RANGES.map((r) => (
            <li key={r.id}>
              <button
                type="button"
                onClick={() => setPriceRange(r.id)}
                className={cn(
                  "font-sans text-sm transition-colors",
                  priceRange === r.id ? "text-gold" : "text-stone hover:text-ink"
                )}
              >
                {r.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Material */}
      <div>
        <p className="font-sans text-[11px] uppercase tracking-[0.22em] text-ink">
          Material
        </p>
        <ul className="mt-4 space-y-3">
          <li>
            <button
              type="button"
              onClick={() => setMaterial("all")}
              className={cn(
                "font-sans text-sm transition-colors",
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
                  "font-sans text-sm transition-colors",
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
        className="font-sans text-[11px] uppercase tracking-[0.18em] text-muted underline-offset-4 hover:text-gold hover:underline"
      >
        Reset Filters
      </button>
    </div>
  )

  return (
    <div ref={containerRef} className="bg-ivory pt-24 md:pt-28">
      {/* Header */}
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <nav className="flex items-center gap-2 font-sans text-[11px] uppercase tracking-[0.18em] text-muted">
          <Link to="/" className="hover:text-gold">Home</Link>
          <span>/</span>
          <span className="text-ink">Shop</span>
        </nav>
        <div className="mt-6 text-center md:text-left">
          <p className="font-sans text-[11px] uppercase tracking-[0.3em] text-gold">
            The Collection
          </p>
          <h1 className="mt-3 font-serif text-4xl text-ink md:text-5xl">
            {category === "all"
              ? "All Jewelry"
              : CATEGORIES.find((c) => c.id === category)?.name}
          </h1>
          <p className="mt-3 font-sans text-sm text-muted">
            {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
          </p>
        </div>
      </div>

      <div className="mx-auto mt-10 grid max-w-7xl grid-cols-1 gap-10 px-5 sm:px-8 md:grid-cols-[220px_1fr] md:gap-12">
        {/* Sidebar (desktop) */}
        <aside className="hidden md:block">
          <FilterContent />
        </aside>

        {/* Mobile filter toggle */}
        <div className="md:hidden">
          <button
            type="button"
            onClick={() => setMobileFiltersOpen(true)}
            className="inline-flex items-center gap-2 border border-ink/25 px-5 py-3 font-sans text-[11px] uppercase tracking-[0.18em] text-ink"
          >
            <SlidersHorizontal size={14} />
            Filters
          </button>
        </div>

        {/* Grid + sort */}
        <div>
          {/* Sort bar */}
          <div className="mb-8 flex items-center justify-end">
            <div className="relative">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="appearance-none border border-ink/20 bg-cream py-3 pl-4 pr-10 font-sans text-[11px] uppercase tracking-[0.18em] text-ink focus:border-gold focus:outline-none"
              >
                {SORT_OPTIONS.map((o) => (
                  <option key={o.id} value={o.id}>
                    {o.label}
                  </option>
                ))}
              </select>
              <ChevronDown
                size={14}
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted"
              />
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="py-24 text-center">
              <p className="font-serif text-2xl text-ink">No pieces match your filters</p>
              <button
                type="button"
                onClick={resetFilters}
                className="mt-4 font-sans text-[11px] uppercase tracking-[0.18em] text-gold underline-offset-4 hover:underline"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-x-5 gap-y-10 sm:gap-x-6 lg:grid-cols-3">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-[80] md:hidden">
          <div
            className="absolute inset-0 bg-espresso/40 backdrop-blur-sm"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full w-80 max-w-[85%] bg-cream p-6 overflow-y-auto">
            <div className="flex items-center justify-between border-b border-sand/60 pb-4">
              <p className="font-sans text-xs uppercase tracking-[0.22em] text-ink">
                Filters
              </p>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                aria-label="Close filters"
                className="text-ink hover:text-gold"
              >
                <X size={20} />
              </button>
            </div>
            <div className="mt-6">
              <FilterContent />
            </div>
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(false)}
              className="mt-8 w-full bg-gold py-4 font-sans text-[11px] uppercase tracking-[0.18em] text-cream hover:bg-gold-deep"
            >
              Show {filtered.length} Results
            </button>
          </div>
        </div>
      )}

      <div className="h-20" />
    </div>
  )
}
