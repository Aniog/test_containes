import { useMemo, useState, useEffect, useRef } from "react"
import { useSearchParams } from "react-router-dom"
import { SlidersHorizontal, X } from "lucide-react"
import { products } from "@/data/products"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { cn } from "@/lib/utils"
import ProductCard from "@/components/product/ProductCard"

const CATEGORIES = ["All", "Earrings", "Necklaces", "Huggies", "Sets"]
const MATERIALS = ["18K Gold Plated"]
const PRICE_RANGES = [
  { label: "All Prices", min: 0, max: Infinity },
  { label: "Under $50", min: 0, max: 50 },
  { label: "$50 – $100", min: 50, max: 100 },
  { label: "Over $100", min: 100, max: Infinity },
]
const SORTS = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const ref = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (ref.current) ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  const initialCategory = searchParams.get("category") || "All"
  const [category, setCategory] = useState(
    CATEGORIES.includes(initialCategory) ? initialCategory : "All"
  )
  const [priceRange, setPriceRange] = useState(PRICE_RANGES[0])
  const [material, setMaterial] = useState("All")
  const [sort, setSort] = useState("featured")
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  useEffect(() => {
    const c = searchParams.get("category")
    if (c && CATEGORIES.includes(c)) setCategory(c)
  }, [searchParams])

  const setCategoryAndUrl = (c) => {
    setCategory(c)
    if (c === "All") {
      searchParams.delete("category")
    } else {
      searchParams.set("category", c)
    }
    setSearchParams(searchParams, { replace: true })
  }

  const filtered = useMemo(() => {
    let list = products.filter((p) => {
      if (category !== "All" && p.category !== category) return false
      if (p.price < priceRange.min || p.price > priceRange.max) return false
      if (material !== "All" && p.material !== material) return false
      return true
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
  }, [category, priceRange, material, sort])

  const FilterPanel = (
    <div className="space-y-8">
      <div>
        <h3 className="text-xs uppercase tracking-[0.2em] text-ink">Category</h3>
        <ul className="mt-4 space-y-2.5">
          {CATEGORIES.map((c) => (
            <li key={c}>
              <button
                type="button"
                onClick={() => {
                  setCategoryAndUrl(c)
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
        <h3 className="text-xs uppercase tracking-[0.2em] text-ink">Price</h3>
        <ul className="mt-4 space-y-2.5">
          {PRICE_RANGES.map((r) => (
            <li key={r.label}>
              <button
                type="button"
                onClick={() => {
                  setPriceRange(r)
                  setMobileFiltersOpen(false)
                }}
                className={cn(
                  "text-sm transition-colors",
                  priceRange.label === r.label
                    ? "text-gold"
                    : "text-stone hover:text-ink"
                )}
              >
                {r.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-xs uppercase tracking-[0.2em] text-ink">Material</h3>
        <ul className="mt-4 space-y-2.5">
          {["All", ...MATERIALS].map((m) => (
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
    <div ref={ref} className="pt-24 md:pt-28">
      {/* Header */}
      <div className="border-b border-sand">
        <div className="mx-auto max-w-7xl px-5 py-12 text-center md:px-8 md:py-16">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">
            The Collection
          </p>
          <h1 className="mt-3 font-serif text-4xl text-ink md:text-5xl">
            Shop All Jewelry
          </h1>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-stone">
            Demi-fine gold pieces, hand-finished and made to be worn every day.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-10 md:px-8">
        {/* Mobile controls */}
        <div className="mb-6 flex items-center justify-between md:hidden">
          <button
            type="button"
            onClick={() => setMobileFiltersOpen(true)}
            className="flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-ink"
          >
            <SlidersHorizontal size={15} strokeWidth={1.5} />
            Filters
          </button>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="border border-sand bg-cream px-3 py-2 text-xs uppercase tracking-[0.1em] text-ink"
          >
            {SORTS.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
        </div>

        <div className="flex gap-10">
          {/* Sidebar (desktop) */}
          <aside className="hidden w-56 shrink-0 md:block">
            <div className="sticky top-28">{FilterPanel}</div>
          </aside>

          {/* Grid */}
          <div className="flex-1">
            {/* Desktop sort bar */}
            <div className="mb-8 hidden items-center justify-between border-b border-sand pb-4 md:flex">
              <p className="text-xs uppercase tracking-[0.15em] text-stone">
                {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
              </p>
              <div className="flex items-center gap-3">
                <span className="text-xs uppercase tracking-[0.15em] text-stone">
                  Sort by
                </span>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="border border-sand bg-cream px-3 py-2 text-xs uppercase tracking-[0.1em] text-ink focus:outline-none"
                >
                  {SORTS.map((s) => (
                    <option key={s.value} value={s.value}>
                      {s.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {filtered.length === 0 ? (
              <div className="py-24 text-center">
                <p className="font-serif text-2xl text-ink">No pieces found</p>
                <p className="mt-2 text-sm text-stone">
                  Try adjusting your filters.
                </p>
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
          <div
            className="absolute inset-0 bg-espresso/50"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full w-80 max-w-[85%] bg-ivory p-6">
            <div className="flex items-center justify-between border-b border-sand pb-4">
              <h2 className="font-serif text-xl uppercase tracking-[0.15em] text-ink">
                Filters
              </h2>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                aria-label="Close filters"
                className="text-ink hover:text-gold"
              >
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>
            <div className="mt-6">{FilterPanel}</div>
          </div>
        </div>
      )}
    </div>
  )
}
