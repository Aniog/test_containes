import { useEffect, useMemo, useRef, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { SlidersHorizontal, X } from "lucide-react"
import ProductCard from "@/components/product/ProductCard"
import { CATEGORIES, MATERIALS, PRODUCTS } from "@/data/products"
import { cn } from "@/lib/utils"

const SORTS = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
]

const PRICE_RANGES = [
  { id: "all", label: "All prices", min: 0, max: Infinity },
  { id: "under-50", label: "Under $50", min: 0, max: 49.99 },
  { id: "50-75", label: "$50 – $75", min: 50, max: 75 },
  { id: "75-plus", label: "$75+", min: 75, max: Infinity },
]

function FilterGroup({ title, children }) {
  return (
    <div className="py-6 border-b border-hairline last:border-b-0">
      <h3 className="eyebrow mb-4">{title}</h3>
      <div className="space-y-3">{children}</div>
    </div>
  )
}

function FilterCheckbox({ label, checked, onChange, count }) {
  return (
    <label className="flex items-center justify-between cursor-pointer group">
      <span className="flex items-center gap-3">
        <span
          className={cn(
            "inline-flex h-4 w-4 items-center justify-center border transition-colors",
            checked
              ? "bg-espresso border-espresso"
              : "border-hairline group-hover:border-espresso-soft",
          )}
        >
          {checked && (
            <span className="h-1.5 w-1.5 rounded-full bg-ivory" />
          )}
        </span>
        <span className="text-sm text-espresso-soft group-hover:text-espresso transition-colors">
          {label}
        </span>
      </span>
      {typeof count === "number" && (
        <span className="text-[11px] tracking-[0.14em] uppercase text-muted">
          {count}
        </span>
      )}
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="sr-only"
      />
    </label>
  )
}

export default function Shop() {
  const [params, setParams] = useSearchParams()
  const initialCategory = params.get("category") || ""
  const containerRef = useRef(null)

  const [categories, setCategories] = useState(() =>
    initialCategory ? [initialCategory] : [],
  )
  const [materials, setMaterials] = useState([])
  const [priceRange, setPriceRange] = useState("all")
  const [sort, setSort] = useState("featured")
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  // Keep URL in sync with selected category for shareable filters
  useEffect(() => {
    const next = new URLSearchParams(params)
    if (categories.length === 1) {
      next.set("category", categories[0])
    } else {
      next.delete("category")
    }
    setParams(next, { replace: true })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categories])

  const filtered = useMemo(() => {
    const range = PRICE_RANGES.find((r) => r.id === priceRange) || PRICE_RANGES[0]
    let result = PRODUCTS.filter((p) => {
      if (categories.length && !categories.includes(p.category)) return false
      if (materials.length && !materials.includes(p.material)) return false
      if (p.price < range.min) return false
      if (p.price > range.max) return false
      return true
    })
    if (sort === "price-asc") result = [...result].sort((a, b) => a.price - b.price)
    if (sort === "price-desc") result = [...result].sort((a, b) => b.price - a.price)
    if (sort === "rating") result = [...result].sort((a, b) => b.rating - a.rating)
    return result
  }, [categories, materials, priceRange, sort])

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frame)
  }, [filtered])

  const toggle = (list, setList) => (value) => {
    setList(list.includes(value) ? list.filter((v) => v !== value) : [...list, value])
  }

  const FiltersContent = (
    <>
      <FilterGroup title="Category">
        {CATEGORIES.map((cat) => (
          <FilterCheckbox
            key={cat.id}
            label={cat.label}
            checked={categories.includes(cat.id)}
            onChange={toggle(categories, setCategories)}
            count={PRODUCTS.filter((p) => p.category === cat.id).length}
          />
        ))}
      </FilterGroup>

      <FilterGroup title="Price">
        {PRICE_RANGES.map((range) => (
          <FilterCheckbox
            key={range.id}
            label={range.label}
            checked={priceRange === range.id}
            onChange={() => setPriceRange(range.id)}
          />
        ))}
      </FilterGroup>

      <FilterGroup title="Material">
        {MATERIALS.map((mat) => (
          <FilterCheckbox
            key={mat.id}
            label={mat.label}
            checked={materials.includes(mat.id)}
            onChange={toggle(materials, setMaterials)}
            count={PRODUCTS.filter((p) => p.material === mat.id).length}
          />
        ))}
      </FilterGroup>

      <button
        type="button"
        onClick={() => {
          setCategories([])
          setMaterials([])
          setPriceRange("all")
        }}
        className="mt-6 text-[11px] uppercase tracking-[0.22em] text-muted hover:text-espresso"
      >
        Clear all filters
      </button>
    </>
  )

  return (
    <div ref={containerRef} className="bg-ivory">
      {/* Editorial header */}
      <section className="bg-ivory-soft border-b border-hairline">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 pt-32 md:pt-40 pb-14 md:pb-20 text-center">
          <span className="eyebrow">The Collection</span>
          <h1 className="mt-3 font-serif text-4xl md:text-6xl text-espresso tracking-tight">
            All Pieces
          </h1>
          <p className="mt-4 text-sm md:text-base text-muted max-w-md mx-auto">
            Demi-fine jewelry, made in small batches. Every piece is plated in 18K
            gold, hypoallergenic, and made to last.
          </p>
        </div>
      </section>

      {/* Body — sidebar + grid */}
      <section className="mx-auto max-w-[1400px] px-6 md:px-10 py-12 md:py-16">
        <div className="flex items-center justify-between mb-8">
          <p className="text-[12px] tracking-[0.18em] uppercase text-muted">
            {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
          </p>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(true)}
              className="md:hidden inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-espresso border border-espresso px-3 py-2"
            >
              <SlidersHorizontal size={12} strokeWidth={1.5} />
              Filter
            </button>
            <label className="flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-muted">
              Sort
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="bg-transparent border-b border-hairline py-1 text-espresso text-xs uppercase tracking-[0.18em] focus:outline-none focus:border-espresso"
              >
                {SORTS.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14">
          {/* Sidebar — desktop */}
          <aside className="hidden md:block md:col-span-3 lg:col-span-3">
            <div className="sticky top-28">{FiltersContent}</div>
          </aside>

          {/* Grid */}
          <div className="md:col-span-9 lg:col-span-9">
            {filtered.length === 0 ? (
              <div className="py-20 text-center text-sm text-muted">
                No pieces match this filter yet — try widening your search.
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Mobile filter drawer */}
      <div
        className={cn(
          "fixed inset-0 z-[70] md:hidden transition-opacity duration-300",
          mobileFiltersOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
        aria-hidden={!mobileFiltersOpen}
      >
        <button
          type="button"
          aria-label="Close filters"
          className="absolute inset-0 bg-espresso-deep/55"
          onClick={() => setMobileFiltersOpen(false)}
        />
        <aside
          className={cn(
            "absolute left-0 top-0 h-full w-[88%] max-w-sm bg-ivory p-6 overflow-y-auto transition-transform duration-500",
            mobileFiltersOpen ? "translate-x-0" : "-translate-x-full",
          )}
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-serif text-2xl text-espresso">Filter</h2>
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(false)}
              className="p-1 text-espresso"
              aria-label="Close filters"
            >
              <X size={18} strokeWidth={1.5} />
            </button>
          </div>
          {FiltersContent}
        </aside>
      </div>
    </div>
  )
}