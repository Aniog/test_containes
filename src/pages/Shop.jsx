import { useMemo, useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { SlidersHorizontal, X } from "lucide-react"
import { products, categories } from "@/data/products"
import ProductCard from "@/components/product/ProductCard"
import { useStrkImages } from "@/hooks/useStrkImages"
import { useReveal } from "@/hooks/useReveal"
import { cn } from "@/lib/utils"

const sortOptions = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
]

const priceRanges = [
  { id: "all", label: "All Prices", min: 0, max: Infinity },
  { id: "under-50", label: "Under $50", min: 0, max: 50 },
  { id: "50-80", label: "$50 – $80", min: 50, max: 80 },
  { id: "over-80", label: "Over $80", min: 80, max: Infinity },
]

const materials = [
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

  // Keep URL in sync when category changes (and react to back/forward).
  useEffect(() => {
    const urlCat = searchParams.get("category") || "all"
    if (urlCat !== category) setCategory(urlCat)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams])

  useEffect(() => {
    const next = new URLSearchParams(searchParams)
    if (category === "all") next.delete("category")
    else next.set("category", category)
    setSearchParams(next, { replace: true })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category])

  const filtered = useMemo(() => {
    let list = [...products]

    if (category !== "all") {
      const cat = categories.find((c) => c.id === category)
      if (cat) list = list.filter((p) => p.type === cat.type)
    }

    const range = priceRanges.find((r) => r.id === price)
    if (range) {
      list = list.filter((p) => p.price >= range.min && p.price < range.max)
    }

    if (material === "gold") {
      list = list.filter((p) => p.tone === "gold")
    } else if (material === "crystal") {
      list = list.filter((p) =>
        /crystal/i.test(p.shortDescription + p.description)
      )
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

  const containerRef = useStrkImages([category, price, material, sort])
  const revealRef = useReveal([category, price, material, sort])

  const categoryOptions = [
    { id: "all", label: "All" },
    ...categories.map((c) => ({ id: c.id, label: c.name })),
  ]

  const FilterPanel = () => (
    <div className="space-y-9">
      <div>
        <h3 className="font-sans text-[11px] uppercase tracking-widest text-espresso-800">
          Category
        </h3>
        <ul className="mt-4 space-y-2.5">
          {categoryOptions.map((opt) => (
            <li key={opt.id}>
              <button
                type="button"
                onClick={() => {
                  setCategory(opt.id)
                  setMobileFiltersOpen(false)
                }}
                className={cn(
                  "font-sans text-sm transition-colors",
                  category === opt.id
                    ? "text-espresso-900 underline underline-offset-4 decoration-gold-500"
                    : "text-espresso-500 hover:text-espresso-800"
                )}
              >
                {opt.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="font-sans text-[11px] uppercase tracking-widest text-espresso-800">
          Price
        </h3>
        <ul className="mt-4 space-y-2.5">
          {priceRanges.map((opt) => (
            <li key={opt.id}>
              <button
                type="button"
                onClick={() => {
                  setPrice(opt.id)
                  setMobileFiltersOpen(false)
                }}
                className={cn(
                  "font-sans text-sm transition-colors",
                  price === opt.id
                    ? "text-espresso-900 underline underline-offset-4 decoration-gold-500"
                    : "text-espresso-500 hover:text-espresso-800"
                )}
              >
                {opt.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="font-sans text-[11px] uppercase tracking-widest text-espresso-800">
          Material
        </h3>
        <ul className="mt-4 space-y-2.5">
          {materials.map((opt) => (
            <li key={opt.id}>
              <button
                type="button"
                onClick={() => {
                  setMaterial(opt.id)
                  setMobileFiltersOpen(false)
                }}
                className={cn(
                  "font-sans text-sm transition-colors",
                  material === opt.id
                    ? "text-espresso-900 underline underline-offset-4 decoration-gold-500"
                    : "text-espresso-500 hover:text-espresso-800"
                )}
              >
                {opt.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )

  return (
    <div
      ref={(node) => {
        containerRef.current = node
        revealRef.current = node
      }}
      className="pt-20"
    >
      {/* Header */}
      <div className="mx-auto max-w-8xl px-5 py-12 text-center md:px-10 md:py-16">
        <p className="font-sans text-[11px] uppercase tracking-ultra text-gold-600">
          The Collection
        </p>
        <h1 className="mt-3 font-serif text-4xl text-espresso-900 md:text-6xl">
          Shop All
        </h1>
        <p className="mx-auto mt-4 max-w-md font-sans text-sm leading-relaxed text-espresso-500">
          Demi-fine gold jewelry, designed in studio and made for everyday
          luxury.
        </p>
      </div>

      <div className="mx-auto max-w-8xl px-5 pb-24 md:px-10">
        {/* Toolbar */}
        <div className="mb-8 flex items-center justify-between border-y border-espresso-200 py-4">
          <button
            type="button"
            onClick={() => setMobileFiltersOpen(true)}
            className="flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-espresso-700 md:hidden"
          >
            <SlidersHorizontal size={15} />
            Filters
          </button>
          <p className="hidden font-sans text-xs uppercase tracking-widest text-espresso-500 md:block">
            {filtered.length} {filtered.length === 1 ? "Piece" : "Pieces"}
          </p>
          <div className="flex items-center gap-3">
            <label
              htmlFor="sort"
              className="font-sans text-[11px] uppercase tracking-widest text-espresso-500"
            >
              Sort
            </label>
            <select
              id="sort"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="border border-espresso-300 bg-cream px-3 py-2 font-sans text-xs text-espresso-800 focus:border-espresso-800 focus:outline-none"
            >
              {sortOptions.map((opt) => (
                <option key={opt.id} value={opt.id}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid gap-10 md:grid-cols-[220px_1fr] md:gap-14">
          {/* Sidebar (desktop) */}
          <aside className="hidden md:block">
            <FilterPanel />
          </aside>

          {/* Grid */}
          <div>
            {filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-24 text-center">
                <p className="font-serif text-2xl text-espresso-700">
                  No pieces match your filters
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setCategory("all")
                    setPrice("all")
                    setMaterial("all")
                  }}
                  className="mt-4 font-sans text-xs uppercase tracking-widest text-gold-600 underline underline-offset-4"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-3">
                {filtered.map((product) => (
                  <div key={product.id} className="reveal">
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      <div
        className={cn(
          "fixed inset-0 z-[80] md:hidden",
          mobileFiltersOpen ? "" : "pointer-events-none"
        )}
      >
        <div
          className={cn(
            "absolute inset-0 bg-espresso-950/40 transition-opacity duration-300",
            mobileFiltersOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setMobileFiltersOpen(false)}
        />
        <aside
          className={cn(
            "absolute left-0 top-0 h-full w-80 max-w-[85%] bg-cream p-6 shadow-2xl transition-transform duration-300",
            mobileFiltersOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="mb-8 flex items-center justify-between">
            <h2 className="font-serif text-2xl text-espresso-900">Filters</h2>
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(false)}
              aria-label="Close filters"
              className="text-espresso-600"
            >
              <X size={20} />
            </button>
          </div>
          <FilterPanel />
        </aside>
      </div>
    </div>
  )
}
