import { useMemo, useState, useEffect, useRef } from "react"
import { useSearchParams } from "react-router-dom"
import { SlidersHorizontal, X } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { products } from "@/data/products"
import ProductCard from "@/components/product/ProductCard"
import { cn } from "@/lib/utils"

const CATEGORIES = ["All", "Earrings", "Necklaces", "Huggies"]
const MATERIALS = ["All", "Gold", "Silver"]
const PRICE_RANGES = [
  { label: "All Prices", min: 0, max: Infinity },
  { label: "Under $50", min: 0, max: 50 },
  { label: "$50 – $100", min: 50, max: 100 },
  { label: "$100+", min: 100, max: Infinity },
]
const SORTS = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
]

export default function Shop() {
  const [params, setParams] = useSearchParams()
  const initialCategory = params.get("category") || "All"
  const [category, setCategory] = useState(
    CATEGORIES.includes(initialCategory) ? initialCategory : "All"
  )
  const [material, setMaterial] = useState("All")
  const [priceIdx, setPriceIdx] = useState(0)
  const [sort, setSort] = useState("featured")
  const [mobileFilters, setMobileFilters] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const c = params.get("category")
    if (c && CATEGORIES.includes(c)) setCategory(c)
  }, [params])

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [category, material, priceIdx, sort])

  const filtered = useMemo(() => {
    const range = PRICE_RANGES[priceIdx]
    let list = products.filter((p) => {
      if (category !== "All" && p.category !== category) return false
      if (material !== "All" && !p.variants.includes(material)) return false
      if (p.price < range.min || p.price >= range.max) return false
      return true
    })
    list = [...list]
    if (sort === "price-asc") list.sort((a, b) => a.price - b.price)
    if (sort === "price-desc") list.sort((a, b) => b.price - a.price)
    if (sort === "rating") list.sort((a, b) => b.rating - a.rating)
    return list
  }, [category, material, priceIdx, sort])

  const updateCategory = (c) => {
    setCategory(c)
    if (c === "All") {
      params.delete("category")
      setParams(params, { replace: true })
    } else {
      params.set("category", c)
      setParams(params, { replace: true })
    }
  }

  const FilterPanel = () => (
    <div className="space-y-8">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-ink mb-4">
          Category
        </p>
        <ul className="space-y-2">
          {CATEGORIES.map((c) => (
            <li key={c}>
              <button
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
        <p className="text-xs uppercase tracking-[0.2em] text-ink mb-4">
          Material
        </p>
        <ul className="space-y-2">
          {MATERIALS.map((m) => (
            <li key={m}>
              <button
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
        <p className="text-xs uppercase tracking-[0.2em] text-ink mb-4">
          Price
        </p>
        <ul className="space-y-2">
          {PRICE_RANGES.map((r, i) => (
            <li key={r.label}>
              <button
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
    </div>
  )

  return (
    <div ref={ref} className="pt-20">
      {/* Header */}
      <div className="border-b border-line">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">
            The Collection
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-ink">
            Shop All
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-10 md:py-14 grid grid-cols-1 md:grid-cols-[220px_1fr] gap-10">
        {/* Sidebar (desktop) */}
        <aside className="hidden md:block">
          <FilterPanel />
        </aside>

        {/* Main */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={() => setMobileFilters(true)}
              className="md:hidden flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-ink"
            >
              <SlidersHorizontal className="w-4 h-4" /> Filters
            </button>
            <p className="hidden md:block text-xs uppercase tracking-[0.15em] text-stone">
              {filtered.length} {filtered.length === 1 ? "Piece" : "Pieces"}
            </p>
            <div className="flex items-center gap-2">
              <label className="text-xs uppercase tracking-[0.15em] text-stone">
                Sort
              </label>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="text-sm text-ink bg-transparent border-b border-line py-1 focus:outline-none focus:border-gold"
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
              <p className="font-serif text-2xl text-ink mb-2">
                No pieces match your filters
              </p>
              <p className="text-sm text-stone">Try adjusting your selection.</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filtered.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFilters && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <div
            className="absolute inset-0 bg-espresso/40"
            onClick={() => setMobileFilters(false)}
          />
          <div className="absolute left-0 top-0 h-full w-80 max-w-[85%] bg-ivory p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <p className="font-serif text-xl text-ink">Filters</p>
              <button onClick={() => setMobileFilters(false)} className="text-ink">
                <X className="w-5 h-5" />
              </button>
            </div>
            <FilterPanel />
            <button
              onClick={() => setMobileFilters(false)}
              className="w-full mt-10 bg-gold text-ivory text-xs uppercase tracking-[0.2em] py-4"
            >
              Show {filtered.length} Results
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
