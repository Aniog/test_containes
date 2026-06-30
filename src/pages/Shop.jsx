import { useState, useMemo } from "react"
import { Link, useSearchParams } from "react-router-dom"
import { Star, SlidersHorizontal, X } from "lucide-react"
import { products } from "../data/products"
import { useCart } from "../context/CartContext"

const allCategories = [
  { id: "all", label: "All" },
  { id: "earrings", label: "Earrings" },
  { id: "necklaces", label: "Necklaces" },
  { id: "huggies", label: "Huggies" },
  { id: "sets", label: "Gift Sets" },
]

const priceRanges = [
  { id: "all", label: "All Prices" },
  { id: "under40", label: "Under $40" },
  { id: "40to60", label: "$40 - $60" },
  { id: "60to80", label: "$60 - $80" },
  { id: "over80", label: "Over $80" },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const { addItem } = useCart()
  const [sortBy, setSortBy] = useState("featured")
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false)

  const activeCategory = searchParams.get("category") || "all"
  const activePrice = searchParams.get("price") || "all"
  const activeMaterial = searchParams.get("material") || "all"

  const filteredProducts = useMemo(() => {
    let result = [...products]

    // Category filter
    if (activeCategory !== "all") {
      result = result.filter((p) => p.category === activeCategory)
    }

    // Material filter
    if (activeMaterial !== "all") {
      result = result.filter((p) => p.material === activeMaterial)
    }

    // Price filter
    if (activePrice !== "all") {
      result = result.filter((p) => {
        switch (activePrice) {
          case "under40":
            return p.price < 40
          case "40to60":
            return p.price >= 40 && p.price <= 60
          case "60to80":
            return p.price >= 60 && p.price <= 80
          case "over80":
            return p.price > 80
          default:
            return true
        }
      })
    }

    // Sort
    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price)
        break
      case "price-desc":
        result.sort((a, b) => b.price - a.price)
        break
      case "rating":
        result.sort((a, b) => b.rating - a.rating)
        break
      case "newest":
        result.sort((a, b) => (a.isNew === b.isNew ? 0 : a.isNew ? -1 : 1))
        break
      default:
        break
    }

    return result
  }, [activeCategory, activePrice, activeMaterial, sortBy])

  const updateFilter = (key, value) => {
    const params = new URLSearchParams(searchParams)
    if (value === "all") {
      params.delete(key)
    } else {
      params.set(key, value)
    }
    setSearchParams(params)
  }

  const clearFilters = () => {
    setSearchParams({})
  }

  const hasActiveFilters = activeCategory !== "all" || activePrice !== "all" || activeMaterial !== "all"

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="text-xs uppercase tracking-[0.12em] text-charcoal font-medium mb-4">
          Category
        </h3>
        <div className="space-y-2">
          {allCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => updateFilter("category", cat.id)}
              className={`block text-sm transition-colors w-full text-left ${
                activeCategory === cat.id
                  ? "text-warm-gold font-medium"
                  : "text-charcoal/60 hover:text-charcoal"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="text-xs uppercase tracking-[0.12em] text-charcoal font-medium mb-4">
          Material
        </h3>
        <div className="space-y-2">
          {[
            { id: "all", label: "All" },
            { id: "gold", label: "18K Gold" },
            { id: "silver", label: "Silver Tone" },
          ].map((mat) => (
            <button
              key={mat.id}
              onClick={() => updateFilter("material", mat.id)}
              className={`block text-sm transition-colors w-full text-left ${
                activeMaterial === mat.id
                  ? "text-warm-gold font-medium"
                  : "text-charcoal/60 hover:text-charcoal"
              }`}
            >
              {mat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="text-xs uppercase tracking-[0.12em] text-charcoal font-medium mb-4">
          Price
        </h3>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <button
              key={range.id}
              onClick={() => updateFilter("price", range.id)}
              className={`block text-sm transition-colors w-full text-left ${
                activePrice === range.id
                  ? "text-warm-gold font-medium"
                  : "text-charcoal/60 hover:text-charcoal"
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <main className="bg-cream pt-20 pb-16 sm:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="pt-6 pb-8 lg:pb-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="font-serif text-4xl sm:text-5xl text-dark-charcoal font-light">
                {activeCategory === "all" ? "All Jewelry" : allCategories.find((c) => c.id === activeCategory)?.label || "Shop"}
              </h1>
              <p className="text-sm text-charcoal/50 mt-2">
                {filteredProducts.length}{" "}
                {filteredProducts.length === 1 ? "piece" : "pieces"}
              </p>
            </div>

            <div className="flex items-center gap-3">
              {/* Mobile filter button */}
              <button
                onClick={() => setMobileFilterOpen(true)}
                className="lg:hidden flex items-center gap-2 px-4 py-2 border border-dark-ivory text-xs uppercase tracking-[0.1em] text-charcoal/70 hover:border-charcoal/30 transition-colors"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                Filters
                {hasActiveFilters && (
                  <span className="w-2 h-2 rounded-full bg-warm-gold" />
                )}
              </button>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-xs uppercase tracking-[0.1em] text-charcoal/70 bg-transparent border border-dark-ivory px-4 py-2.5 focus:outline-none focus:border-charcoal/30 cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
          </div>

          {hasActiveFilters && (
            <div className="flex items-center gap-2 mt-4">
              <span className="text-xs text-charcoal/50">Active filters:</span>
              <button
                onClick={clearFilters}
                className="text-xs text-warm-gold hover:text-warm-gold-light transition-colors underline"
              >
                Clear all
              </button>
            </div>
          )}
        </div>

        <div className="flex gap-10">
          {/* Sidebar filters - desktop */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-2xl text-charcoal/40 mb-4">
                  No pieces found
                </p>
                <button
                  onClick={clearFilters}
                  className="text-xs uppercase tracking-[0.12em] text-warm-gold border border-warm-gold px-6 py-2.5 hover:bg-warm-gold hover:text-dark-charcoal transition-colors"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="group">
                    <Link to={`/product/${product.id}`} className="block">
                      <div className="relative aspect-[4/5] overflow-hidden bg-ivory mb-3">
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                        {product.isNew && (
                          <span className="absolute top-3 left-3 bg-warm-gold text-dark-charcoal text-[10px] uppercase tracking-[0.1em] font-medium px-2.5 py-1">
                            New
                          </span>
                        )}
                      </div>
                      <h3 className="text-xs uppercase tracking-[0.12em] text-charcoal font-medium truncate group-hover:text-warm-gold transition-colors">
                        {product.name}
                      </h3>
                      <div className="flex items-center gap-1 mt-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${
                              i < Math.round(product.rating)
                                ? "text-warm-gold fill-warm-gold"
                                : "text-charcoal/15 fill-charcoal/15"
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-sm text-charcoal font-medium mt-1.5">
                        ${product.price}
                      </p>
                    </Link>
                    <button
                      onClick={() => addItem(product, "gold", 1)}
                      className="mt-3 w-full text-xs uppercase tracking-[0.1em] py-2.5 border border-dark-ivory text-charcoal/70 hover:bg-dark-charcoal hover:text-ivory hover:border-dark-charcoal transition-all duration-300"
                    >
                      Add to Cart
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/30"
            onClick={() => setMobileFilterOpen(false)}
          />
          <div className="absolute top-0 left-0 bottom-0 w-72 bg-cream shadow-2xl p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xs uppercase tracking-[0.12em] text-charcoal font-medium">
                Filters
              </h3>
              <button
                onClick={() => setMobileFilterOpen(false)}
                className="p-1 text-charcoal/50 hover:text-charcoal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <FilterContent />
          </div>
        </div>
      )}
    </main>
  )
}