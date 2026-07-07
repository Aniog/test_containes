import { useEffect, useRef, useState, useMemo } from "react"
import { useSearchParams } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { products, categories } from "@/data/products"
import ProductCard from "@/components/ProductCard"
import { SlidersHorizontal, X } from "lucide-react"

const priceRanges = [
  { id: "all", label: "All Prices" },
  { id: "under-50", label: "Under $50" },
  { id: "50-75", label: "$50 – $75" },
  { id: "75-100", label: "$75 – $100" },
]

const materials = [
  { id: "all", label: "All Materials" },
  { id: "gold", label: "Gold Plated" },
  { id: "silver", label: "Silver Plated" },
]

const sortOptions = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
]

export default function Collection() {
  const containerRef = useRef(null)
  const [searchParams, setSearchParams] = useSearchParams()

  const initialCategory = searchParams.get("category") || "all"
  const [activeCategory, setActiveCategory] = useState(initialCategory)
  const [priceRange, setPriceRange] = useState("all")
  const [material, setMaterial] = useState("all")
  const [sort, setSort] = useState("featured")
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [activeCategory, priceRange, material, sort])

  useEffect(() => {
    setActiveCategory(initialCategory)
  }, [initialCategory])

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (activeCategory !== "all") {
      result = result.filter((p) => p.category === activeCategory)
    }

    if (priceRange === "under-50") result = result.filter((p) => p.price < 50)
    if (priceRange === "50-75") result = result.filter((p) => p.price >= 50 && p.price <= 75)
    if (priceRange === "75-100") result = result.filter((p) => p.price > 75 && p.price <= 100)

    if (material !== "all") {
      result = result.filter((p) => p.material === material)
    }

    if (sort === "price-asc") result.sort((a, b) => a.price - b.price)
    if (sort === "price-desc") result.sort((a, b) => b.price - a.price)
    if (sort === "rating") result.sort((a, b) => b.rating - a.rating)

    return result
  }, [activeCategory, priceRange, material, sort])

  const updateCategory = (catId) => {
    setActiveCategory(catId)
    if (catId === "all") {
      searchParams.delete("category")
    } else {
      searchParams.set("category", catId)
    }
    setSearchParams(searchParams)
  }

  const clearFilters = () => {
    setActiveCategory("all")
    setPriceRange("all")
    setMaterial("all")
    setSort("featured")
    setSearchParams({})
  }

  const FilterContent = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-xs font-sans font-semibold uppercase tracking-widest text-ink">
          Category
        </h3>
        <div className="mt-4 space-y-2">
          <button
            type="button"
            onClick={() => updateCategory("all")}
            className={`block text-sm ${activeCategory === "all" ? "text-ink font-medium" : "text-stone hover:text-ink"}`}
          >
            All Jewelry
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => updateCategory(cat.id)}
              className={`block text-sm ${activeCategory === cat.id ? "text-ink font-medium" : "text-stone hover:text-ink"}`}
            >
              {cat.label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => updateCategory("sets")}
            className={`block text-sm ${activeCategory === "sets" ? "text-ink font-medium" : "text-stone hover:text-ink"}`}
          >
            Gift Sets
          </button>
        </div>
      </div>

      <div>
        <h3 className="text-xs font-sans font-semibold uppercase tracking-widest text-ink">
          Price
        </h3>
        <div className="mt-4 space-y-2">
          {priceRanges.map((range) => (
            <button
              key={range.id}
              type="button"
              onClick={() => setPriceRange(range.id)}
              className={`block text-sm ${priceRange === range.id ? "text-ink font-medium" : "text-stone hover:text-ink"}`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xs font-sans font-semibold uppercase tracking-widest text-ink">
          Material
        </h3>
        <div className="mt-4 space-y-2">
          {materials.map((m) => (
            <button
              key={m.id}
              type="button"
              onClick={() => setMaterial(m.id)}
              className={`block text-sm ${material === m.id ? "text-ink font-medium" : "text-stone hover:text-ink"}`}
            >
              {m.label}
            </button>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={clearFilters}
        className="text-xs font-sans font-medium uppercase tracking-widest text-stone underline underline-offset-4 hover:text-ink"
      >
        Clear Filters
      </button>
    </div>
  )

  return (
    <div ref={containerRef} className="min-h-screen bg-cream pt-24 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="font-serif text-3xl font-light uppercase tracking-widest text-ink sm:text-4xl lg:text-5xl">
            Shop
          </h1>
          <p className="mt-3 max-w-xl text-sm text-stone">
            Discover our collection of demi-fine gold jewelry — designed to be worn,
            layered, and treasured.
          </p>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row">
          <aside className="hidden w-56 flex-shrink-0 lg:block">
            <FilterContent />
          </aside>

          <div className="flex-1">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-gold-muted pb-4">
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="flex items-center gap-2 text-xs font-sans font-medium uppercase tracking-widest text-ink lg:hidden"
              >
                <SlidersHorizontal size={16} />
                Filters
              </button>

              <span className="text-sm text-stone">
                {filteredProducts.length} {filteredProducts.length === 1 ? "piece" : "pieces"}
              </span>

              <div className="flex items-center gap-2">
                <label htmlFor="sort" className="text-xs font-sans uppercase tracking-widest text-stone">
                  Sort
                </label>
                <select
                  id="sort"
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="h-9 border border-gold-muted bg-transparent px-3 text-sm text-ink focus:border-gold focus:outline-none"
                >
                  {sortOptions.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-3">
                {filteredProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            ) : (
              <div className="py-20 text-center">
                <p className="font-serif text-xl text-ink">No pieces match your filters.</p>
                <button
                  type="button"
                  onClick={clearFilters}
                  className="mt-4 text-sm font-sans uppercase tracking-widest text-gold-dark underline underline-offset-4 hover:text-ink"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {mobileFiltersOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-ink/40 backdrop-blur-sm"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <aside className="fixed left-0 top-0 z-50 h-full w-4/5 max-w-sm overflow-y-auto bg-cream p-6 shadow-2xl">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="font-serif text-lg uppercase tracking-widest text-ink">Filters</h2>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                className="p-2 text-ink"
                aria-label="Close filters"
              >
                <X size={20} />
              </button>
            </div>
            <FilterContent />
          </aside>
        </>
      )}
    </div>
  )
}
