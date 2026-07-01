import React, { useMemo, useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { SlidersHorizontal, X } from "lucide-react"
import { PRODUCTS, CATEGORIES } from "@/data/products"
import ProductCard from "@/components/product/ProductCard"

const SORTS = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
]

const PRICE_RANGES = [
  { id: "all", label: "All Prices", min: 0, max: Infinity },
  { id: "under50", label: "Under $50", min: 0, max: 49 },
  { id: "50-100", label: "$50 – $100", min: 50, max: 100 },
  { id: "over100", label: "Over $100", min: 101, max: Infinity },
]

const MATERIALS = [
  { id: "all", label: "All Materials" },
  { id: "gold", label: "18K Gold Plated" },
  { id: "crystal", label: "Crystal Accent" },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const initialCategory = searchParams.get("category") || "all"

  const [category, setCategory] = useState(initialCategory)
  const [price, setPrice] = useState("all")
  const [material, setMaterial] = useState("all")
  const [sort, setSort] = useState("featured")
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  // Keep URL in sync when category changes (e.g. from nav links)
  useEffect(() => {
    const urlCat = searchParams.get("category") || "all"
    if (urlCat !== category) {
      setCategory(urlCat)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams])

  const onCategoryChange = (cat) => {
    setCategory(cat)
    const next = new URLSearchParams(searchParams)
    if (cat === "all") next.delete("category")
    else next.set("category", cat)
    setSearchParams(next, { replace: true })
  }

  const filtered = useMemo(() => {
    let list = [...PRODUCTS]

    if (category !== "all") {
      list = list.filter((p) => p.category === category)
    }

    const range = PRICE_RANGES.find((r) => r.id === price)
    if (range) {
      list = list.filter((p) => p.price >= range.min && p.price <= range.max)
    }

    if (material === "gold") {
      list = list.filter((p) => /gold/i.test(p.materials))
    } else if (material === "crystal") {
      list = list.filter((p) => /crystal/i.test(p.materials) || /crystal/i.test(p.short))
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
  }, [category, price, material, sort])

  const FilterPanel = (
    <div className="space-y-10">
      {/* Category */}
      <div>
        <h3 className="text-[11px] uppercase tracking-[0.2em] text-espresso mb-4">
          Category
        </h3>
        <ul className="space-y-2.5">
          <li>
            <button
              type="button"
              onClick={() => onCategoryChange("all")}
              className={`text-sm transition-colors ${
                category === "all" ? "text-gold" : "text-espresso-soft hover:text-espresso"
              }`}
            >
              All Jewelry
            </button>
          </li>
          {CATEGORIES.map((c) => (
            <li key={c.id}>
              <button
                type="button"
                onClick={() => onCategoryChange(c.id)}
                className={`text-sm transition-colors ${
                  category === c.id ? "text-gold" : "text-espresso-soft hover:text-espresso"
                }`}
              >
                {c.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Price */}
      <div>
        <h3 className="text-[11px] uppercase tracking-[0.2em] text-espresso mb-4">
          Price
        </h3>
        <ul className="space-y-2.5">
          {PRICE_RANGES.map((r) => (
            <li key={r.id}>
              <button
                type="button"
                onClick={() => setPrice(r.id)}
                className={`text-sm transition-colors ${
                  price === r.id ? "text-gold" : "text-espresso-soft hover:text-espresso"
                }`}
              >
                {r.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Material */}
      <div>
        <h3 className="text-[11px] uppercase tracking-[0.2em] text-espresso mb-4">
          Material
        </h3>
        <ul className="space-y-2.5">
          {MATERIALS.map((m) => (
            <li key={m.id}>
              <button
                type="button"
                onClick={() => setMaterial(m.id)}
                className={`text-sm transition-colors ${
                  material === m.id ? "text-gold" : "text-espresso-soft hover:text-espresso"
                }`}
              >
                {m.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )

  return (
    <div className="pt-16 md:pt-20">
      {/* Header */}
      <div className="border-b border-hairline">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-12 md:py-16 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-stone mb-3">
            The Collection
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-espresso">
            Shop All Jewelry
          </h1>
          <p className="mt-4 text-espresso-soft max-w-xl mx-auto">
            Demi-fine gold pieces, designed in studio and made to be worn every day.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 py-10 md:py-14">
        {/* Mobile filter toggle + sort */}
        <div className="flex items-center justify-between mb-8 md:hidden">
          <button
            type="button"
            onClick={() => setMobileFiltersOpen(true)}
            className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-espresso border border-hairline px-4 py-3"
          >
            <SlidersHorizontal className="w-4 h-4" /> Filters
          </button>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="text-[11px] uppercase tracking-[0.18em] text-espresso border border-hairline px-4 py-3 bg-ivory"
          >
            {SORTS.map((s) => (
              <option key={s.id} value={s.id}>{s.label}</option>
            ))}
          </select>
        </div>

        <div className="flex gap-10 md:gap-14">
          {/* Sidebar (desktop) */}
          <aside className="hidden md:block w-56 shrink-0">
            <div className="sticky top-28">{FilterPanel}</div>
          </aside>

          {/* Grid */}
          <div className="flex-1">
            <div className="hidden md:flex items-center justify-between mb-8">
              <p className="text-xs uppercase tracking-[0.18em] text-stone">
                {filtered.length} {filtered.length === 1 ? "Piece" : "Pieces"}
              </p>
              <div className="flex items-center gap-3">
                <span className="text-[11px] uppercase tracking-[0.18em] text-stone">Sort</span>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="text-[11px] uppercase tracking-[0.18em] text-espresso border border-hairline px-4 py-2.5 bg-ivory"
                >
                  {SORTS.map((s) => (
                    <option key={s.id} value={s.id}>{s.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {filtered.length === 0 ? (
              <div className="py-24 text-center">
                <p className="font-serif text-2xl text-espresso">No pieces match your filters.</p>
                <button
                  type="button"
                  onClick={() => {
                    onCategoryChange("all")
                    setPrice("all")
                    setMaterial("all")
                  }}
                  className="mt-4 text-gold underline underline-offset-4 text-sm"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10 md:gap-x-6 md:gap-y-14">
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
          <div
            className="absolute inset-0 bg-espresso/40 backdrop-blur-sm"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute top-0 left-0 h-full w-80 max-w-[85vw] bg-ivory p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-2xl text-espresso">Filters</h2>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                aria-label="Close filters"
                className="text-espresso"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            {FilterPanel}
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(false)}
              className="mt-10 w-full bg-gold text-ivory uppercase tracking-[0.18em] text-xs py-4"
            >
              Show {filtered.length} Results
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
