import { useEffect, useRef, useState, useMemo } from "react"
import { Link, useSearchParams } from "react-router-dom"
import { Star, SlidersHorizontal, X } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import products from "@/data/products"
import { useCart } from "@/context/CartContext"

const categories = ["all", "earrings", "necklaces", "huggies", "sets"]
const priceRanges = [
  { label: "Under $40", min: 0, max: 40 },
  { label: "$40 - $60", min: 40, max: 60 },
  { label: "$60 - $80", min: 60, max: 80 },
  { label: "$80+", min: 80, max: Infinity },
]
const sortOptions = [
  { label: "Featured", value: "featured" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Best Rated", value: "rating" },
]

export default function Shop() {
  const containerRef = useRef(null)
  const { addItem } = useCart()
  const [searchParams, setSearchParams] = useSearchParams()
  const [mobileFilters, setMobileFilters] = useState(false)

  const activeCategory = searchParams.get("category") || "all"
  const activePrice = searchParams.get("price") || null
  const activeSort = searchParams.get("sort") || "featured"

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [activeCategory, activePrice, activeSort])

  const filtered = useMemo(() => {
    let result = [...products]

    if (activeCategory !== "all") {
      result = result.filter((p) => p.category === activeCategory)
    }

    if (activePrice) {
      const range = priceRanges[parseInt(activePrice)]
      if (range) {
        result = result.filter((p) => p.price >= range.min && p.price < range.max)
      }
    }

    switch (activeSort) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price)
        break
      case "price-desc":
        result.sort((a, b) => b.price - a.price)
        break
      case "rating":
        result.sort((a, b) => b.rating - a.rating)
        break
    }

    return result
  }, [activeCategory, activePrice, activeSort])

  const updateFilter = (key, value) => {
    const params = new URLSearchParams(searchParams)
    if (value === null || value === "all") {
      params.delete(key)
    } else {
      params.set(key, value)
    }
    setSearchParams(params)
  }

  const clearFilters = () => setSearchParams({})

  const hasFilters = activeCategory !== "all" || activePrice !== null

  const FilterSidebar = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="text-xs tracking-widest uppercase text-midnight-900 mb-3">
          Category
        </h3>
        <ul className="space-y-2">
          {categories.map((cat) => (
            <li key={cat}>
              <button
                onClick={() => updateFilter("category", cat === "all" ? null : cat)}
                className={`text-sm transition-colors ${
                  activeCategory === cat
                    ? "text-gold-600 font-medium"
                    : "text-velvet-500 hover:text-midnight-900"
                }`}
              >
                {cat === "all" ? "All" : cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Price */}
      <div>
        <h3 className="text-xs tracking-widest uppercase text-midnight-900 mb-3">
          Price
        </h3>
        <ul className="space-y-2">
          {priceRanges.map((range, i) => (
            <li key={i}>
              <button
                onClick={() =>
                  updateFilter("price", activePrice === String(i) ? null : String(i))
                }
                className={`text-sm transition-colors ${
                  activePrice === String(i)
                    ? "text-gold-600 font-medium"
                    : "text-velvet-500 hover:text-midnight-900"
                }`}
              >
                {range.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Material */}
      <div>
        <h3 className="text-xs tracking-widest uppercase text-midnight-900 mb-3">
          Material
        </h3>
        <p className="text-sm text-velvet-400">18K Gold Plated</p>
      </div>

      {hasFilters && (
        <button
          onClick={clearFilters}
          className="text-xs tracking-widest uppercase text-velvet-500 hover:text-midnight-900 transition-colors"
        >
          Clear all filters
        </button>
      )}
    </div>
  )

  return (
    <div ref={containerRef}>
      {/* Spacer */}
      <div className="h-16 lg:h-20" />

      {/* Header */}
      <div className="bg-white border-b border-velvet-100">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8 lg:py-12">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-serif text-3xl lg:text-4xl text-midnight-900">
                {activeCategory === "all" ? "All Jewelry" : activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}
              </h1>
              <p className="text-xs text-velvet-500 mt-1">
                {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
              </p>
            </div>
            <div className="flex items-center gap-4">
              {/* Sort */}
              <select
                value={activeSort}
                onChange={(e) => updateFilter("sort", e.target.value)}
                className="text-xs tracking-wider uppercase bg-transparent border border-velvet-200 px-3 py-2 text-velvet-600 focus:outline-none focus:border-midnight-900"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>

              {/* Mobile filter trigger */}
              <button
                className="lg:hidden flex items-center gap-1 text-xs tracking-wider uppercase text-velvet-600"
                onClick={() => setMobileFilters(true)}
              >
                <SlidersHorizontal size={14} />
                Filters
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8 lg:py-12">
        <div className="flex gap-10">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <FilterSidebar />
          </aside>

          {/* Product grid */}
          {filtered.length === 0 ? (
            <div className="flex-1 text-center py-20">
              <p className="font-serif text-xl text-velvet-500 mb-4">
                No pieces match your filters.
              </p>
              <button
                onClick={clearFilters}
                className="text-xs tracking-widest uppercase text-gold-600 hover:text-gold-700"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="flex-1 grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              {filtered.map((product) => (
                <div key={product.id} className="group relative">
                  <Link to={`/product/${product.id}`}>
                    <div className="aspect-[3/4] bg-velvet-100 rounded overflow-hidden">
                      <img
                        data-strk-img-id={`shop-${product.imgId}`}
                        data-strk-img={`[shop-desc-${product.id}] [shop-name-${product.id}]`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="600"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105"
                      />
                    </div>
                  </Link>

                  <button
                    onClick={() => addItem(product)}
                    className="absolute bottom-3 left-3 right-3 py-2 bg-white/90 backdrop-blur-sm text-midnight-900 text-[10px] tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0"
                  >
                    Add to Cart &mdash; ${product.price}
                  </button>

                  <div className="mt-3">
                    <h3
                      id={`shop-name-${product.id}`}
                      className="text-[11px] lg:text-xs tracking-widest uppercase text-midnight-900"
                    >
                      {product.name}
                    </h3>
                    <p
                      id={`shop-desc-${product.id}`}
                      className="text-[11px] text-velvet-500 mt-0.5 line-clamp-1"
                    >
                      {product.description}
                    </p>
                    <div className="flex items-center gap-1 mt-1">
                      <Star size={10} className="fill-gold-400 text-gold-400" />
                      <span className="text-[10px] text-velvet-500">
                        {product.rating}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-midnight-900 mt-1">
                      ${product.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFilters && (
        <>
          <div
            className="fixed inset-0 z-[60] bg-black/40"
            onClick={() => setMobileFilters(false)}
          />
          <div className="fixed top-0 left-0 z-[70] h-full w-72 bg-white shadow-xl p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xs tracking-widest uppercase">Filters</h2>
              <button
                onClick={() => setMobileFilters(false)}
                className="p-1"
                aria-label="Close filters"
              >
                <X size={18} />
              </button>
            </div>
            <FilterSidebar />
          </div>
        </>
      )}
    </div>
  )
}