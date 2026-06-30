import { useState, useMemo } from "react"
import { Link, useSearchParams } from "react-router-dom"
import { ShoppingBag, SlidersHorizontal, X, Star } from "lucide-react"
import { PRODUCTS, CATEGORIES } from "../data/products"
import { useCart } from "../context/CartContext"
import { cn } from "../lib/utils"

const SORT_OPTIONS = [
  { label: "Newest", value: "newest" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Best Rated", value: "rating" },
]

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const { addItem } = useCart()
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const activeCategory = searchParams.get("category") || "all"
  const activeSort = searchParams.get("sort") || "newest"

  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS]

    if (activeCategory !== "all") {
      result = result.filter((p) => p.category === activeCategory)
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
      default:
        break
    }

    return result
  }, [activeCategory, activeSort])

  const updateFilter = (key, value) => {
    const params = new URLSearchParams(searchParams)
    if (value === "all" || value === "") {
      params.delete(key)
    } else {
      params.set(key, value)
    }
    setSearchParams(params)
  }

  const clearFilters = () => {
    setSearchParams({})
  }

  const hasActiveFilters = activeCategory !== "all"

  return (
    <div className="min-h-screen pt-16 lg:pt-20">
      {/* Page header */}
      <div className="bg-brand-white border-b border-brand-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <p className="text-brand-gold text-xs font-sans uppercase tracking-[0.2em] mb-2">
                Our Collection
              </p>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-dark font-light tracking-[0.05em]">
                {activeCategory === "all"
                  ? "All Jewelry"
                  : CATEGORIES.find((c) => c.id === activeCategory)?.name ||
                    "All Jewelry"}
              </h1>
            </div>
            <div className="flex items-center gap-4">
              {/* Sort */}
              <select
                value={activeSort}
                onChange={(e) => updateFilter("sort", e.target.value)}
                className="border border-brand-warm bg-brand-white text-brand-dark font-sans text-sm px-4 py-2.5 focus:outline-none focus:border-brand-gold"
              >
                {SORT_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>

              {/* Mobile filter button */}
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="lg:hidden border border-brand-warm p-2.5 text-brand-dark hover:bg-brand-warm transition-colors"
                aria-label="Open filters"
              >
                <SlidersHorizontal className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="flex gap-8 lg:gap-12">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <div className="lg:sticky lg:top-28 space-y-8">
              {/* Categories */}
              <div>
                <h3 className="font-sans text-xs uppercase tracking-[0.15em] text-brand-dark font-semibold mb-4">
                  Category
                </h3>
                <ul className="space-y-2">
                  <li>
                    <button
                      onClick={() => updateFilter("category", "all")}
                      className={`font-sans text-sm transition-colors ${
                        activeCategory === "all"
                          ? "text-brand-gold font-medium"
                          : "text-brand-stone hover:text-brand-dark"
                      }`}
                    >
                      All
                    </button>
                  </li>
                  {CATEGORIES.map((cat) => (
                    <li key={cat.id}>
                      <button
                        onClick={() => updateFilter("category", cat.id)}
                        className={`font-sans text-sm transition-colors ${
                          activeCategory === cat.id
                            ? "text-brand-gold font-medium"
                            : "text-brand-stone hover:text-brand-dark"
                        }`}
                      >
                        {cat.name} ({cat.count})
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Active filters */}
              {hasActiveFilters && (
                <div>
                  <button
                    onClick={clearFilters}
                    className="text-xs font-sans text-brand-stone uppercase tracking-wider hover:text-brand-dark transition-colors underline"
                  >
                    Clear all
                  </button>
                </div>
              )}
            </div>
          </aside>

          {/* Mobile filter sidebar */}
          {mobileFiltersOpen && (
            <>
              <div
                className="fixed inset-0 bg-black/40 z-50 lg:hidden"
                onClick={() => setMobileFiltersOpen(false)}
              />
              <div className="fixed left-0 top-0 bottom-0 w-72 bg-brand-white z-50 lg:hidden p-6 shadow-2xl animate-fade-in">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-serif text-lg uppercase tracking-[0.1em] text-brand-dark">
                    Filters
                  </h3>
                  <button
                    onClick={() => setMobileFiltersOpen(false)}
                    className="p-2 hover:text-brand-gold"
                    aria-label="Close filters"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-sans text-xs uppercase tracking-[0.15em] text-brand-dark font-semibold mb-3">
                      Category
                    </h4>
                    <ul className="space-y-2">
                      <li>
                        <button
                          onClick={() => {
                            updateFilter("category", "all")
                            setMobileFiltersOpen(false)
                          }}
                          className={`font-sans text-sm ${
                            activeCategory === "all"
                              ? "text-brand-gold font-medium"
                              : "text-brand-stone"
                          }`}
                        >
                          All
                        </button>
                      </li>
                      {CATEGORIES.map((cat) => (
                        <li key={cat.id}>
                          <button
                            onClick={() => {
                              updateFilter("category", cat.id)
                              setMobileFiltersOpen(false)
                            }}
                            className={`font-sans text-sm ${
                              activeCategory === cat.id
                                ? "text-brand-gold font-medium"
                                : "text-brand-stone"
                            }`}
                          >
                            {cat.name}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {hasActiveFilters && (
                    <button
                      onClick={() => {
                        clearFilters()
                        setMobileFiltersOpen(false)
                      }}
                      className="text-xs font-sans text-brand-stone uppercase tracking-wider underline"
                    >
                      Clear all
                    </button>
                  )}
                </div>
              </div>
            </>
          )}

          {/* Product grid */}
          <div className="flex-1">
            {/* Results count */}
            <p className="font-sans text-sm text-brand-stone mb-6 lg:hidden">
              {filteredProducts.length} piece{filteredProducts.length !== 1 && "s"}
            </p>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-sans text-brand-stone mb-4">
                  No pieces found in this category.
                </p>
                <button
                  onClick={clearFilters}
                  className="text-brand-gold font-sans text-sm uppercase tracking-wider hover:underline"
                >
                  View all
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="group relative">
                    <Link
                      to={`/product/${product.id}`}
                      className="block aspect-[3/4] bg-brand-warm overflow-hidden relative"
                    >
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/10 transition-colors duration-300" />

                      <button
                        onClick={(e) => {
                          e.preventDefault()
                          addItem(product, product.variants[0])
                        }}
                        className="absolute bottom-3 right-3 bg-brand-white/90 backdrop-blur-sm text-brand-dark p-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-brand-gold hover:text-brand-white shadow-md"
                        aria-label={`Add ${product.name} to cart`}
                      >
                        <ShoppingBag className="w-4 h-4" />
                      </button>
                    </Link>

                    <div className="mt-3">
                      <Link to={`/product/${product.id}`}>
                        <h3 className="font-serif text-xs uppercase tracking-[0.15em] text-brand-dark group-hover:text-brand-gold transition-colors">
                          {product.name}
                        </h3>
                      </Link>
                      <div className="flex items-center gap-1 mt-0.5">
                        <Star className="w-3 h-3 fill-brand-gold text-brand-gold" />
                        <span className="text-xs font-sans text-brand-stone">
                          {product.rating}
                        </span>
                      </div>
                      <p className="font-sans text-sm font-medium text-brand-dark mt-0.5">
                        ${product.price}
                      </p>
                    </div>
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