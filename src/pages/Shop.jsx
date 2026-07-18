import { useEffect, useMemo, useRef, useState } from "react"
import { useSearchParams, Link } from "react-router-dom"
import { SlidersHorizontal, X, ChevronDown } from "lucide-react"
import { products, categories } from "@/data/products"
import ProductCard from "@/components/product/ProductCard"
import { cn } from "@/lib/utils"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

const priceRanges = [
  { id: "all", label: "All Prices", min: 0, max: Infinity },
  { id: "under50", label: "Under $50", min: 0, max: 49 },
  { id: "50-100", label: "$50 – $100", min: 50, max: 100 },
  { id: "over100", label: "Over $100", min: 101, max: Infinity },
]

const materials = ["18K Gold Plated"]

const sortOptions = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [sortOpen, setSortOpen] = useState(false)
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const activeCategory = searchParams.get("category") || "all"
  const activePrice = searchParams.get("price") || "all"
  const activeMaterial = searchParams.get("material") || "all"
  const sort = searchParams.get("sort") || "featured"

  const containerRef = useRef(null)
  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [activeCategory, activePrice, activeMaterial, sort])

  const setParam = (key, value) => {
    const next = new URLSearchParams(searchParams)
    if (!value || value === "all") next.delete(key)
    else next.set(key, value)
    setSearchParams(next)
  }

  const filtered = useMemo(() => {
    let list = products.slice()
    if (activeCategory !== "all") {
      list = list.filter((p) => p.category === activeCategory)
    }
    const range = priceRanges.find((r) => r.id === activePrice) || priceRanges[0]
    list = list.filter((p) => p.price >= range.min && p.price <= range.max)
    if (activeMaterial !== "all") {
      list = list.filter((p) => p.material === activeMaterial)
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
  }, [activeCategory, activePrice, activeMaterial, sort])

  const activeSort = sortOptions.find((s) => s.id === sort) || sortOptions[0]

  useEffect(() => {
    setMobileFiltersOpen(false)
    setSortOpen(false)
  }, [searchParams])

  const FilterPanel = (
    <div className="space-y-10">
      {/* Category */}
      <div>
        <h3 className="font-sans text-[11px] uppercase tracking-[0.25em] text-espresso">
          Category
        </h3>
        <ul className="mt-4 space-y-3">
          <li>
            <button
              type="button"
              onClick={() => setParam("category", "all")}
              className={cn(
                "text-sm transition-colors",
                activeCategory === "all" ? "text-gold" : "text-taupe hover:text-espresso"
              )}
            >
              All Jewelry
            </button>
          </li>
          {categories.map((c) => (
            <li key={c.id}>
              <button
                type="button"
                onClick={() => setParam("category", c.id)}
                className={cn(
                  "text-sm transition-colors",
                  activeCategory === c.id ? "text-gold" : "text-taupe hover:text-espresso"
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
        <h3 className="font-sans text-[11px] uppercase tracking-[0.25em] text-espresso">
          Price
        </h3>
        <ul className="mt-4 space-y-3">
          {priceRanges.map((r) => (
            <li key={r.id}>
              <button
                type="button"
                onClick={() => setParam("price", r.id)}
                className={cn(
                  "text-sm transition-colors",
                  activePrice === r.id ? "text-gold" : "text-taupe hover:text-espresso"
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
        <h3 className="font-sans text-[11px] uppercase tracking-[0.25em] text-espresso">
          Material
        </h3>
        <ul className="mt-4 space-y-3">
          <li>
            <button
              type="button"
              onClick={() => setParam("material", "all")}
              className={cn(
                "text-sm transition-colors",
                activeMaterial === "all" ? "text-gold" : "text-taupe hover:text-espresso"
              )}
            >
              All Materials
            </button>
          </li>
          {materials.map((m) => (
            <li key={m}>
              <button
                type="button"
                onClick={() => setParam("material", m)}
                className={cn(
                  "text-sm transition-colors",
                  activeMaterial === m ? "text-gold" : "text-taupe hover:text-espresso"
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
    <div ref={containerRef} className="pt-20">
      {/* Header */}
      <div className="border-b border-espresso/10 bg-sand">
        <div className="mx-auto max-w-7xl px-6 py-14 text-center md:px-10 md:py-20">
          <p className="text-[11px] uppercase tracking-[0.3em] text-taupe">
            The Collection
          </p>
          <h1 className="mt-3 font-serif text-4xl text-espresso md:text-5xl">
            {activeCategory === "all"
              ? "All Jewelry"
              : categories.find((c) => c.id === activeCategory)?.name}
          </h1>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-taupe">
            {activeCategory === "all"
              ? "Demi-fine gold jewelry, hand-finished and made to be worn every day."
              : categories.find((c) => c.id === activeCategory)?.desc}
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-10 md:px-10">
        {/* Toolbar */}
        <div className="mb-8 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => setMobileFiltersOpen(true)}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-espresso md:hidden"
          >
            <SlidersHorizontal size={14} />
            Filters
          </button>
          <p className="hidden text-xs uppercase tracking-[0.2em] text-taupe md:block">
            {filtered.length} {filtered.length === 1 ? "Piece" : "Pieces"}
          </p>

          {/* Sort */}
          <div className="relative ml-auto">
            <button
              type="button"
              onClick={() => setSortOpen((v) => !v)}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-espresso"
            >
              Sort: {activeSort.label}
              <ChevronDown size={14} className={cn("transition-transform", sortOpen && "rotate-180")} />
            </button>
            {sortOpen && (
              <div className="absolute right-0 top-full z-20 mt-2 w-56 border border-espresso/10 bg-cream py-2 shadow-lg">
                {sortOptions.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => {
                      setParam("sort", s.id)
                      setSortOpen(false)
                    }}
                    className={cn(
                      "block w-full px-4 py-2 text-left text-sm transition-colors hover:bg-sand",
                      sort === s.id ? "text-gold" : "text-espresso"
                    )}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex gap-10">
          {/* Sidebar (desktop) */}
          <aside className="hidden w-56 shrink-0 md:block">
            <div className="sticky top-28">{FilterPanel}</div>
          </aside>

          {/* Grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="py-24 text-center">
                <p className="font-serif text-2xl text-espresso">
                  No pieces match your filters
                </p>
                <button
                  type="button"
                  onClick={() => setSearchParams(new URLSearchParams())}
                  className="mt-4 text-xs uppercase tracking-[0.2em] text-gold underline-offset-4 hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-3">
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
            className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full w-80 max-w-[85vw] overflow-y-auto bg-cream p-6">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="font-sans text-xs uppercase tracking-[0.25em] text-espresso">
                Filters
              </h2>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                aria-label="Close filters"
              >
                <X size={20} className="text-espresso" />
              </button>
            </div>
            {FilterPanel}
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(false)}
              className="mt-10 w-full bg-espresso py-3 text-xs uppercase tracking-[0.2em] text-cream"
            >
              Show {filtered.length} Results
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
