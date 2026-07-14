import { useMemo, useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { SlidersHorizontal, X } from "lucide-react"
import { products, categories } from "@/data/products"
import ProductCard from "@/components/product/ProductCard"
import { useStrkImages } from "@/hooks/useStrkImages"
import { cn } from "@/lib/utils"

const PRICE_BUCKETS = [
  { id: "all", label: "All Prices", min: 0, max: Infinity },
  { id: "under50", label: "Under $50", min: 0, max: 49 },
  { id: "50to80", label: "$50 – $80", min: 50, max: 80 },
  { id: "over80", label: "Over $80", min: 81, max: Infinity },
]

const SORTS = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const initialCategory = searchParams.get("category") || "all"

  const [selectedCategories, setSelectedCategories] = useState(
    initialCategory === "all" ? [] : [initialCategory]
  )
  const [priceBucket, setPriceBucket] = useState("all")
  const [material, setMaterial] = useState("all")
  const [sort, setSort] = useState("featured")
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const containerRef = useStrkImages([
    selectedCategories,
    priceBucket,
    material,
    sort,
  ])

  // Sync category from URL when it changes
  useEffect(() => {
    const cat = searchParams.get("category")
    setSelectedCategories(cat && cat !== "all" ? [cat] : [])
  }, [searchParams])

  const toggleCategory = (cat) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    )
  }

  const clearFilters = () => {
    setSelectedCategories([])
    setPriceBucket("all")
    setMaterial("all")
    setSearchParams({})
  }

  const filtered = useMemo(() => {
    const bucket = PRICE_BUCKETS.find((b) => b.id === priceBucket)
    let result = products.filter((p) => {
      const catOk =
        selectedCategories.length === 0 || selectedCategories.includes(p.category)
      const priceOk = p.price >= bucket.min && p.price <= bucket.max
      const matOk = material === "all" || p.material === material
      return catOk && priceOk && matOk
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
  }, [selectedCategories, priceBucket, material, sort])

  const FilterPanel = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="text-xs uppercase tracking-[0.18em] text-ink">
          Category
        </h3>
        <div className="mt-4 space-y-2.5">
          <label className="flex cursor-pointer items-center gap-3 text-sm text-espresso">
            <input
              type="checkbox"
              checked={selectedCategories.length === 0}
              onChange={clearFilters}
              className="accent-champagne"
            />
            All Categories
          </label>
          {categories.map((cat) => (
            <label
              key={cat.id}
              className="flex cursor-pointer items-center gap-3 text-sm text-espresso"
            >
              <input
                type="checkbox"
                checked={selectedCategories.includes(cat.slug)}
                onChange={() => toggleCategory(cat.slug)}
                className="accent-champagne"
              />
              {cat.name}
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="text-xs uppercase tracking-[0.18em] text-ink">Price</h3>
        <div className="mt-4 space-y-2.5">
          {PRICE_BUCKETS.map((b) => (
            <label
              key={b.id}
              className="flex cursor-pointer items-center gap-3 text-sm text-espresso"
            >
              <input
                type="radio"
                name="price"
                checked={priceBucket === b.id}
                onChange={() => setPriceBucket(b.id)}
                className="accent-champagne"
              />
              {b.label}
            </label>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="text-xs uppercase tracking-[0.18em] text-ink">
          Material
        </h3>
        <div className="mt-4 space-y-2.5">
          {["all", "18K Gold Plated"].map((m) => (
            <label
              key={m}
              className="flex cursor-pointer items-center gap-3 text-sm text-espresso"
            >
              <input
                type="radio"
                name="material"
                checked={material === m}
                onChange={() => setMaterial(m)}
                className="accent-champagne"
              />
              {m === "all" ? "All Materials" : m}
            </label>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={clearFilters}
        className="text-xs uppercase tracking-[0.15em] text-taupe underline-offset-4 transition-colors hover:text-ink hover:underline"
      >
        Clear All
      </button>
    </div>
  )

  return (
    <div ref={containerRef} className="bg-cream pt-16 md:pt-20">
      {/* Header */}
      <div className="border-b border-ink/10">
        <div className="mx-auto max-w-7xl px-5 py-12 text-center md:px-8 md:py-16">
          <p className="text-xs uppercase tracking-[0.3em] text-champagne-deep">
            The Collection
          </p>
          <h1 className="mt-3 font-serif text-4xl text-ink md:text-5xl">
            Shop All
          </h1>
          <div className="mx-auto mt-5 h-px w-12 bg-champagne" />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-10 md:px-8">
        {/* Mobile filter toggle + sort */}
        <div className="mb-6 flex items-center justify-between gap-4 lg:hidden">
          <button
            type="button"
            onClick={() => setMobileFiltersOpen(true)}
            className="flex items-center gap-2 border border-ink/20 px-4 py-2.5 text-xs uppercase tracking-[0.15em] text-ink"
          >
            <SlidersHorizontal className="h-4 w-4" />
            Filters
          </button>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="border border-ink/20 bg-cream px-4 py-2.5 text-xs uppercase tracking-[0.15em] text-ink focus:border-champagne focus:outline-none"
          >
            {SORTS.map((s) => (
              <option key={s.id} value={s.id}>
                {s.label}
              </option>
            ))}
          </select>
        </div>

        <div className="flex gap-10">
          {/* Sidebar (desktop) */}
          <aside className="hidden w-56 shrink-0 lg:block">
            <FilterPanel />
          </aside>

          {/* Grid */}
          <div className="flex-1">
            <div className="mb-6 hidden items-center justify-between lg:flex">
              <p className="text-sm text-taupe">
                {filtered.length}{" "}
                {filtered.length === 1 ? "piece" : "pieces"}
              </p>
              <div className="flex items-center gap-3">
                <span className="text-xs uppercase tracking-[0.15em] text-taupe">
                  Sort
                </span>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="border border-ink/20 bg-cream px-4 py-2 text-xs uppercase tracking-[0.15em] text-ink focus:border-champagne focus:outline-none"
                >
                  {SORTS.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-24 text-center">
                <p className="font-serif text-2xl text-ink">
                  No pieces match your filters
                </p>
                <button
                  type="button"
                  onClick={clearFilters}
                  className="mt-5 text-xs uppercase tracking-[0.18em] text-champagne-deep underline underline-offset-4"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-[80] lg:hidden">
          <div
            className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full w-80 max-w-[85vw] overflow-y-auto bg-cream p-6">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="font-serif text-xl text-ink">Filters</h2>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                aria-label="Close filters"
                className="text-espresso"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <FilterPanel />
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(false)}
              className="mt-8 w-full bg-champagne py-4 text-xs uppercase tracking-[0.18em] text-ink transition-colors hover:bg-champagne-deep hover:text-cream"
            >
              Show {filtered.length} Results
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
