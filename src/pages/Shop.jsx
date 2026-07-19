import { useEffect, useMemo, useRef, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { SlidersHorizontal, X } from "lucide-react"
import { Container } from "@/components/ui/Section"
import ProductCard from "@/components/product/ProductCard"
import { CATEGORIES, MATERIALS, PRODUCTS } from "@/data/products"
import { cn, formatPrice } from "@/lib/utils"

const SORTS = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
]

const PRICE_BUCKETS = [
  { id: "all", label: "All Prices", min: 0, max: Infinity },
  { id: "under-50", label: "Under $50", min: 0, max: 50 },
  { id: "50-75", label: "$50 – $75", min: 50, max: 75 },
  { id: "75-100", label: "$75 – $100", min: 75, max: 100 },
]

function sortProducts(products, sortId) {
  const arr = [...products]
  switch (sortId) {
    case "price-asc":
      return arr.sort((a, b) => a.price - b.price)
    case "price-desc":
      return arr.sort((a, b) => b.price - a.price)
    case "rating":
      return arr.sort((a, b) => b.rating - a.rating)
    default:
      return arr
  }
}

export default function Shop() {
  const [params, setParams] = useSearchParams()
  const collectionParam = params.get("collection")

  const [category, setCategory] = useState(collectionParam || "all")
  const [material, setMaterial] = useState("all")
  const [priceBucket, setPriceBucket] = useState("all")
  const [sort, setSort] = useState("featured")
  const [filtersOpen, setFiltersOpen] = useState(false)

  // Sync category from URL
  useEffect(() => {
    setCategory(collectionParam || "all")
  }, [collectionParam])

  const filtered = useMemo(() => {
    const bucket = PRICE_BUCKETS.find((b) => b.id === priceBucket) || PRICE_BUCKETS[0]
    const result = PRODUCTS.filter((p) => {
      if (category !== "all" && p.category !== category) return false
      if (material !== "all" && p.material !== material) return false
      if (p.price < bucket.min || p.price > bucket.max) return false
      return true
    })
    return sortProducts(result, sort)
  }, [category, material, priceBucket, sort])

  const updateCategory = (id) => {
    setCategory(id)
    if (id === "all") {
      params.delete("collection")
    } else {
      params.set("collection", id)
    }
    setParams(params, { replace: true })
  }

  const clearAll = () => {
    setCategory("all")
    setMaterial("all")
    setPriceBucket("all")
    params.delete("collection")
    setParams(params, { replace: true })
  }

  const ref = useRef(null)
  useEffect(() => {
    const target = ref.current
    if (!target) return undefined
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, target)
    })
    return () => {
      window.cancelAnimationFrame(frameId)
      ImageHelper.disconnect(target)
    }
  }, [filtered.length])

  const hasActiveFilters =
    category !== "all" || material !== "all" || priceBucket !== "all"

  const activeCount =
    (category !== "all" ? 1 : 0) +
    (material !== "all" ? 1 : 0) +
    (priceBucket !== "all" ? 1 : 0)

  const categoryLabel =
    CATEGORIES.find((c) => c.id === category)?.label || "All Jewelry"

  return (
    <div ref={ref} className="page-fade">
      {/* Page header */}
      <div className="pt-28 md:pt-36 pb-10 md:pb-14 bg-paper-warm border-b border-mist">
        <Container>
          <p className="eyebrow text-gold-deep mb-4">The Edit</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.05]">
            {categoryLabel}.
          </h1>
          <p className="mt-4 text-sm md:text-base text-taupe max-w-xl leading-relaxed">
            {filtered.length} {filtered.length === 1 ? "piece" : "pieces"} —
            hand-finished demi-fine jewelry, made to wear and re-wear.
          </p>
        </Container>
      </div>

      <div className="container-editorial py-10 md:py-14">
        {/* Toolbar */}
        <div className="flex items-center justify-between gap-3 mb-8">
          <button
            type="button"
            onClick={() => setFiltersOpen(true)}
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-eyebrow text-ink hover:text-gold-deep transition-colors lg:hidden"
          >
            <SlidersHorizontal size={14} strokeWidth={1.5} />
            Filters
            {activeCount > 0 ? (
              <span className="ml-1 inline-flex items-center justify-center w-4 h-4 rounded-full bg-ink text-paper text-[9px]">
                {activeCount}
              </span>
            ) : null}
          </button>

          <p className="hidden lg:block text-xs text-taupe">
            {filtered.length} {filtered.length === 1 ? "result" : "results"}
          </p>

          <label className="ml-auto inline-flex items-center gap-2 text-xs text-taupe">
            <span className="uppercase tracking-eyebrow text-[10px]">Sort</span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="bg-transparent border-b border-mist py-1 pr-6 text-ink uppercase tracking-eyebrow text-[10px] focus:outline-none focus:border-gold-deep"
            >
              {SORTS.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.label}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Sidebar */}
          <aside
            className={cn(
              "lg:col-span-3",
              "lg:block",
              filtersOpen
                ? "fixed inset-0 z-50 bg-paper p-6 overflow-y-auto block"
                : "hidden",
            )}
          >
            <div className="flex items-center justify-between mb-8 lg:hidden">
              <h2 className="font-serif text-2xl">Filter</h2>
              <button
                type="button"
                onClick={() => setFiltersOpen(false)}
                aria-label="Close filters"
                className="p-2 -mr-2"
              >
                <X size={18} strokeWidth={1.5} />
              </button>
            </div>

            <div className="lg:sticky lg:top-28 space-y-10">
              <FilterGroup label="Category">
                <ul className="space-y-2.5">
                  <li>
                    <RadioRow
                      checked={category === "all"}
                      onChange={() => updateCategory("all")}
                      label="All Jewelry"
                    />
                  </li>
                  {CATEGORIES.map((c) => (
                    <li key={c.id}>
                      <RadioRow
                        checked={category === c.id}
                        onChange={() => updateCategory(c.id)}
                        label={c.label}
                      />
                    </li>
                  ))}
                </ul>
              </FilterGroup>

              <FilterGroup label="Material">
                <ul className="space-y-2.5">
                  <li>
                    <RadioRow
                      checked={material === "all"}
                      onChange={() => setMaterial("all")}
                      label="All Materials"
                    />
                  </li>
                  {MATERIALS.map((m) => (
                    <li key={m.id}>
                      <RadioRow
                        checked={material === m.id}
                        onChange={() => setMaterial(m.id)}
                        label={m.label}
                      />
                    </li>
                  ))}
                </ul>
              </FilterGroup>

              <FilterGroup label="Price">
                <ul className="space-y-2.5">
                  {PRICE_BUCKETS.map((b) => (
                    <li key={b.id}>
                      <RadioRow
                        checked={priceBucket === b.id}
                        onChange={() => setPriceBucket(b.id)}
                        label={b.label}
                      />
                    </li>
                  ))}
                </ul>
              </FilterGroup>

              {hasActiveFilters ? (
                <button
                  type="button"
                  onClick={clearAll}
                  className="text-[11px] uppercase tracking-eyebrow text-taupe hover:text-ink border-b border-mist pb-0.5"
                >
                  Clear All
                </button>
              ) : null}

              <button
                type="button"
                onClick={() => setFiltersOpen(false)}
                className="btn-primary w-full lg:hidden"
              >
                Show {filtered.length} Results
              </button>
            </div>
          </aside>

          {/* Grid */}
          <div className="lg:col-span-9">
            {filtered.length === 0 ? (
              <div className="text-center py-20 border border-mist">
                <p className="font-serif text-2xl mb-2">No pieces match.</p>
                <p className="text-sm text-taupe mb-6">
                  Try widening your filters.
                </p>
                <button
                  type="button"
                  onClick={clearAll}
                  className="btn-outline"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-12 md:gap-x-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function FilterGroup({ label, children }) {
  return (
    <div>
      <p className="eyebrow mb-4">{label}</p>
      {children}
    </div>
  )
}

function RadioRow({ checked, onChange, label }) {
  return (
    <label className="flex items-center gap-3 cursor-pointer group">
      <span
        aria-hidden="true"
        className={cn(
          "w-3.5 h-3.5 rounded-full border transition-all duration-200 flex-shrink-0",
          checked
            ? "border-gold-deep bg-gold-deep shadow-[inset_0_0_0_2px_#faf6ef]"
            : "border-taupe/60 group-hover:border-ink",
        )}
      />
      <input
        type="radio"
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />
      <span
        className={cn(
          "text-sm transition-colors",
          checked ? "text-ink" : "text-ink/80 group-hover:text-ink",
        )}
      >
        {label}
      </span>
    </label>
  )
}
