import React, { useState, useMemo } from "react"
import { Link, useSearchParams } from "react-router-dom"
import { ShoppingBag, SlidersHorizontal, X, ChevronDown } from "lucide-react"
import { products, categories, materials } from "@/data/products"
import { useCart } from "@/context/CartContext"
import { StarRating, Button } from "@/components/ui/Components"

export default function CollectionPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const { addItem } = useCart()
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [addedId, setAddedId] = useState(null)

  // Read filters from URL
  const categoryFilter = searchParams.get("category") || ""
  const materialFilter = searchParams.get("material") || ""
  const priceFilter = searchParams.get("price") || ""
  const sort = searchParams.get("sort") || "featured"

  const updateFilter = (key, value) => {
    const newParams = new URLSearchParams(searchParams)
    if (value) {
      newParams.set(key, value)
    } else {
      newParams.delete(key)
    }
    setSearchParams(newParams)
  }

  const clearFilters = () => {
    setSearchParams({})
  }

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (categoryFilter) {
      result = result.filter((p) => p.category === categoryFilter)
    }
    if (materialFilter) {
      result = result.filter((p) => p.material === materialFilter)
    }
    if (priceFilter === "under50") {
      result = result.filter((p) => p.price < 50)
    } else if (priceFilter === "50to100") {
      result = result.filter((p) => p.price >= 50 && p.price <= 100)
    } else if (priceFilter === "over100") {
      result = result.filter((p) => p.price > 100)
    }

    if (sort === "price-asc") {
      result.sort((a, b) => a.price - b.price)
    } else if (sort === "price-desc") {
      result.sort((a, b) => b.price - a.price)
    } else if (sort === "rating") {
      result.sort((a, b) => b.rating - a.rating)
    } else if (sort === "name") {
      result.sort((a, b) => a.name.localeCompare(b.name))
    }

    return result
  }, [categoryFilter, materialFilter, priceFilter, sort])

  const handleAddToCart = (product) => {
    addItem(product, product.variants[0], 1)
    setAddedId(product.id)
    setTimeout(() => setAddedId(null), 1500)
  }

  const hasActiveFilters = categoryFilter || materialFilter || priceFilter

  // Filter sidebar content
  const FilterContent = () => (
    <>
      {/* Category */}
      <div className="mb-8">
        <h3 className="font-sans text-[11px] tracking-wider uppercase text-velmora-text mb-4">
          Category
        </h3>
        <div className="space-y-2">
          {categories.map((cat) => (
            <label key={cat.id} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="category"
                checked={categoryFilter === cat.id}
                onChange={() => updateFilter("category", categoryFilter === cat.id ? "" : cat.id)}
                className="accent-velmora-gold"
              />
              <span className="text-sm text-velmora-text-secondary group-hover:text-velmora-gold transition-colors">
                {cat.name}
              </span>
              <span className="text-xs text-velmora-text-muted ml-auto">({cat.count})</span>
            </label>
          ))}
        </div>
      </div>

      {/* Material */}
      <div className="mb-8">
        <h3 className="font-sans text-[11px] tracking-wider uppercase text-velmora-text mb-4">
          Material
        </h3>
        <div className="space-y-2">
          {materials.map((mat) => (
            <label key={mat.id} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="material"
                checked={materialFilter === mat.id}
                onChange={() => updateFilter("material", materialFilter === mat.id ? "" : mat.id)}
                className="accent-velmora-gold"
              />
              <span className="text-sm text-velmora-text-secondary group-hover:text-velmora-gold transition-colors">
                {mat.name}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="mb-8">
        <h3 className="font-sans text-[11px] tracking-wider uppercase text-velmora-text mb-4">
          Price
        </h3>
        <div className="space-y-2">
          {[
            { value: "under50", label: "Under $50" },
            { value: "50to100", label: "$50 - $100" },
            { value: "over100", label: "Over $100" },
          ].map((opt) => (
            <label key={opt.value} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="price"
                checked={priceFilter === opt.value}
                onChange={() => updateFilter("price", priceFilter === opt.value ? "" : opt.value)}
                className="accent-velmora-gold"
              />
              <span className="text-sm text-velmora-text-secondary group-hover:text-velmora-gold transition-colors">
                {opt.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {hasActiveFilters && (
        <button
          onClick={clearFilters}
          className="text-xs text-velmora-gold underline hover:text-velmora-gold-hover transition-colors"
        >
          Clear all filters
        </button>
      )}
    </>
  )

  return (
    <div className="bg-velmora-bg min-h-screen">
      {/* Page header */}
      <div className="bg-velmora-surface border-b border-velmora-border-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <p className="font-sans text-[11px] tracking-[0.2em] uppercase text-velmora-gold mb-3">
            Collection
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-velmora-text font-normal">
            All Pieces
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="flex gap-8 lg:gap-12">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <div className="sticky top-24">
              <FilterContent />
            </div>
          </aside>

          {/* Mobile filter button */}
          <div className="lg:hidden mb-6 flex items-center justify-between">
            <p className="text-sm text-velmora-text-secondary">
              {filteredProducts.length} piece{filteredProducts.length !== 1 ? "s" : ""}
            </p>
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="flex items-center gap-2 text-sm text-velmora-text-secondary border border-velmora-border px-4 py-2 hover:border-velmora-gold hover:text-velmora-gold transition-colors"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>
          </div>

          {/* Mobile filter drawer */}
          {mobileFiltersOpen && (
            <div className="fixed inset-0 z-50 lg:hidden">
              <div
                className="absolute inset-0 bg-black/40"
                onClick={() => setMobileFiltersOpen(false)}
              />
              <div className="absolute left-0 top-0 bottom-0 w-72 bg-velmora-surface p-6 overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-serif text-xl">Filters</h2>
                  <button
                    onClick={() => setMobileFiltersOpen(false)}
                    className="p-1"
                    aria-label="Close filters"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <FilterContent />
              </div>
            </div>
          )}

          {/* Main content */}
          <div className="flex-1">
            {/* Sort and count (desktop) */}
            <div className="hidden lg:flex items-center justify-between mb-8">
              <p className="text-sm text-velmora-text-secondary">
                {filteredProducts.length} piece{filteredProducts.length !== 1 ? "s" : ""}
              </p>
              <div className="relative">
                <select
                  value={sort}
                  onChange={(e) => updateFilter("sort", e.target.value)}
                  className="appearance-none bg-transparent border border-velmora-border text-sm text-velmora-text-secondary pr-8 pl-3 py-2 focus:outline-none focus:border-velmora-gold cursor-pointer"
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="name">Name A-Z</option>
                </select>
                <ChevronDown className="w-4 h-4 absolute right-2 top-1/2 -translate-y-1/2 text-velmora-text-muted pointer-events-none" />
              </div>
            </div>

            {/* Product grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-velmora-text-secondary mb-4">
                  No pieces match your filters
                </p>
                <button
                  onClick={clearFilters}
                  className="text-velmora-gold underline hover:text-velmora-gold-hover transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="group">
                    {/* Image */}
                    <Link to={`/product/${product.id}`} className="block">
                      <div className="relative aspect-[3/4] bg-velmora-border-light overflow-hidden mb-3 sm:mb-4">
                        <img
                          src={product.images[0]}
                          alt={product.shortName}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        {/* Quick add */}
                        <div className="absolute inset-x-0 bottom-0 p-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                          <button
                            onClick={(e) => {
                              e.preventDefault()
                              handleAddToCart(product)
                            }}
                            className="w-full bg-velmora-surface/95 backdrop-blur-sm text-velmora-text font-sans text-[11px] tracking-wider uppercase py-2.5 hover:bg-velmora-gold hover:text-white transition-colors flex items-center justify-center gap-2"
                          >
                            {addedId === product.id ? (
                              <span className="text-velmora-success">Added</span>
                            ) : (
                              <>
                                <ShoppingBag className="w-3.5 h-3.5" />
                                Add to Cart
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    </Link>

                    {/* Info */}
                    <Link to={`/product/${product.id}`}>
                      <h3 className="font-sans text-[11px] sm:text-xs tracking-wider uppercase text-velmora-text group-hover:text-velmora-gold transition-colors line-clamp-1">
                        {product.name}
                      </h3>
                      <div className="flex items-center gap-2 mt-1.5">
                        <StarRating rating={product.rating} size="sm" />
                        <span className="text-[10px] text-velmora-text-muted">
                          ({product.reviewCount})
                        </span>
                      </div>
                      <p className="font-sans text-sm text-velmora-text mt-1.5">
                        ${product.price}
                      </p>
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
