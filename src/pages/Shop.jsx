import { useEffect, useMemo, useRef, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { SlidersHorizontal, X, Check } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { products } from "@/data/products"
import { ProductCard } from "@/components/product/ProductCard"
import { cn } from "@/lib/utils"

const CATEGORY_OPTIONS = ["Earrings", "Necklaces", "Huggies"]
const MATERIAL_OPTIONS = ["Gold", "Silver"]
const PRICE_RANGES = [
  { id: "under-50", label: "Under $50", min: 0, max: 50 },
  { id: "50-80", label: "$50 – $80", min: 50, max: 80 },
  { id: "over-80", label: "Over $80", min: 80, max: Infinity },
]
const SORT_OPTIONS = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const gridRef = useRef(null)
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [sort, setSort] = useState("featured")

  const selectedCategories = useMemo(() => {
    const c = searchParams.get("category")
    return c ? [c] : []
  }, [searchParams])

  const selectedMaterials = useMemo(() => {
    const m = searchParams.get("material")
    return m ? m.split(",").filter(Boolean) : []
  }, [searchParams])

  const selectedPrice = searchParams.get("price") || ""

  const toggleCategory = (cat) => {
    const next = new URLSearchParams(searchParams)
    const current = next.get("category")
    if (current === cat) {
      next.delete("category")
    } else {
      next.set("category", cat)
    }
    setSearchParams(next, { replace: true })
  }

  const toggleMaterial = (mat) => {
    const next = new URLSearchParams(searchParams)
    const current = next.get("material")?.split(",").filter(Boolean) || []
    const exists = current.includes(mat)
    const updated = exists ? current.filter((m) => m !== mat) : [...current, mat]
    if (updated.length) next.set("material", updated.join(","))
    else next.delete("material")
    setSearchParams(next, { replace: true })
  }

  const setPrice = (id) => {
    const next = new URLSearchParams(searchParams)
    if (id === selectedPrice || !id) next.delete("price")
    else next.set("price", id)
    setSearchParams(next, { replace: true })
  }

  const clearAll = () => setSearchParams({}, { replace: true })

  const filtered = useMemo(() => {
    let list = [...products]
    if (selectedCategories.length) {
      list = list.filter((p) => selectedCategories.includes(p.category))
    }
    if (selectedMaterials.length) {
      list = list.filter((p) =>
        p.variants.some((v) => selectedMaterials.includes(v))
      )
    }
    if (selectedPrice) {
      const range = PRICE_RANGES.find((r) => r.id === selectedPrice)
      if (range) {
        list = list.filter((p) => p.price >= range.min && p.price < range.max)
      }
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
        list.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
    }
    return list
  }, [selectedCategories, selectedMaterials, selectedPrice, sort])

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, gridRef.current)
    })
    return () => window.cancelAnimationFrame(frame)
  }, [filtered])

  const activeFilterCount =
    selectedCategories.length +
    selectedMaterials.length +
    (selectedPrice ? 1 : 0)

  const FilterPanel = (
    <div className="space-y-8">
      <div>
        <h3 className="mb-4 text-[11px] uppercase tracking-[0.2em] text-ink">
          Category
        </h3>
        <div className="space-y-3">
          {CATEGORY_OPTIONS.map((cat) => (
            <button
              key={cat}
              onClick={() => toggleCategory(cat)}
              className="flex w-full items-center gap-3 text-left"
            >
              <span
                className={cn(
                  "flex h-4 w-4 items-center justify-center border transition-colors",
                  selectedCategories.includes(cat)
                    ? "border-gold bg-gold"
                    : "border-line"
                )}
              >
                {selectedCategories.includes(cat) && (
                  <Check className="h-3 w-3 text-espresso" />
                )}
              </span>
              <span className="text-sm text-ink">{cat}</span>
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-[11px] uppercase tracking-[0.2em] text-ink">
          Material
        </h3>
        <div className="space-y-3">
          {MATERIAL_OPTIONS.map((mat) => (
            <button
              key={mat}
              onClick={() => toggleMaterial(mat)}
              className="flex w-full items-center gap-3 text-left"
            >
              <span
                className={cn(
                  "flex h-4 w-4 items-center justify-center border transition-colors",
                  selectedMaterials.includes(mat)
                    ? "border-gold bg-gold"
                    : "border-line"
                )}
              >
                {selectedMaterials.includes(mat) && (
                  <Check className="h-3 w-3 text-espresso" />
                )}
              </span>
              <span className="text-sm text-ink">{mat} Tone</span>
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-[11px] uppercase tracking-[0.2em] text-ink">
          Price
        </h3>
        <div className="space-y-3">
          {PRICE_RANGES.map((r) => (
            <button
              key={r.id}
              onClick={() => setPrice(r.id)}
              className="flex w-full items-center gap-3 text-left"
            >
              <span
                className={cn(
                  "flex h-4 w-4 items-center justify-center border transition-colors",
                  selectedPrice === r.id ? "border-gold bg-gold" : "border-line"
                )}
              >
                {selectedPrice === r.id && (
                  <Check className="h-3 w-3 text-espresso" />
                )}
              </span>
              <span className="text-sm text-ink">{r.label}</span>
            </button>
          ))}
        </div>
      </div>

      {activeFilterCount > 0 && (
        <button
          onClick={clearAll}
          className="text-[11px] uppercase tracking-[0.18em] text-gold underline-offset-4 hover:underline"
        >
          Clear All ({activeFilterCount})
        </button>
      )}
    </div>
  )

  return (
    <div className="pt-20 md:pt-24">
      {/* Header */}
      <div className="border-b border-line bg-cream">
        <div className="mx-auto max-w-7xl px-5 py-12 text-center md:px-8 md:py-16">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold">
            The Collection
          </p>
          <h1 className="mt-3 font-serif text-4xl text-ink md:text-5xl">
            Shop All Jewelry
          </h1>
          <p className="mx-auto mt-4 max-w-md text-sm text-stone">
            Demi-fine gold pieces, hand-finished and made to be worn every day.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-10 md:px-8">
        {/* Toolbar */}
        <div className="mb-8 flex items-center justify-between gap-4">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="inline-flex items-center gap-2 border border-line px-4 py-2.5 text-[11px] uppercase tracking-[0.15em] text-ink md:hidden"
          >
            <SlidersHorizontal className="h-4 w-4" />
            Filters
            {activeFilterCount > 0 && (
              <span className="bg-gold px-1.5 text-espresso">{activeFilterCount}</span>
            )}
          </button>
          <p className="hidden text-sm text-stone md:block">
            {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
          </p>
          <div className="flex items-center gap-3">
            <label className="text-[11px] uppercase tracking-[0.15em] text-stone">
              Sort
            </label>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="border border-line bg-canvas px-3 py-2.5 text-sm text-ink focus:border-gold focus:outline-none"
            >
              {SORT_OPTIONS.map((o) => (
                <option key={o.id} value={o.id}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex gap-10">
          {/* Sidebar */}
          <aside className="hidden w-56 shrink-0 md:block">
            <div className="sticky top-28">{FilterPanel}</div>
          </aside>

          {/* Grid */}
          <div ref={gridRef} className="flex-1">
            {filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center gap-4 py-24 text-center">
                <p className="font-serif text-2xl text-ink">No pieces match your filters</p>
                <button
                  onClick={clearAll}
                  className="text-[11px] uppercase tracking-[0.18em] text-gold underline-offset-4 hover:underline"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-3 lg:gap-x-6">
                {filtered.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      <div
        className={cn(
          "fixed inset-0 z-50 md:hidden",
          mobileFiltersOpen ? "" : "pointer-events-none"
        )}
      >
        <div
          className={cn(
            "absolute inset-0 bg-espresso/40 backdrop-blur-sm transition-opacity",
            mobileFiltersOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setMobileFiltersOpen(false)}
        />
        <div
          className={cn(
            "absolute left-0 top-0 h-full w-80 max-w-[85%] bg-canvas p-6 shadow-card transition-transform duration-300",
            mobileFiltersOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="mb-6 flex items-center justify-between">
            <h2 className="font-serif text-xl text-ink">Filters</h2>
            <button onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters">
              <X className="h-5 w-5 text-ink" />
            </button>
          </div>
          {FilterPanel}
          <button
            onClick={() => setMobileFiltersOpen(false)}
            className="mt-8 w-full bg-gold py-3 text-[11px] uppercase tracking-[0.2em] text-espresso"
          >
            Show {filtered.length} Results
          </button>
        </div>
      </div>
    </div>
  )
}
