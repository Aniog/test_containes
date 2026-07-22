import React, { useState, useMemo } from "react"
import { useSearchParams } from "react-router-dom"
import { SlidersHorizontal, X, ChevronDown } from "lucide-react"
import ProductCard from "@/components/home/ProductCard"
import { products, categories } from "@/data/products"

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [sortBy, setSortBy] = useState("featured")

  const activeCategory = searchParams.get("category") || "all"

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (activeCategory !== "all") {
      result = result.filter((p) => p.category.toLowerCase() === activeCategory.toLowerCase())
    }

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
      default:
        break
    }

    return result
  }, [activeCategory, sortBy])

  const setCategory = (category) => {
    if (category === "all") {
      searchParams.delete("category")
    } else {
      searchParams.set("category", category)
    }
    setSearchParams(searchParams)
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-stone-50 border-b border-stone-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <h1 className="font-serif text-3xl md:text-4xl tracking-wide text-center">
            {activeCategory === "all" ? "All Jewelry" : activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}
          </h1>
          <p className="mt-3 text-stone-500 text-sm text-center max-w-md mx-auto">
            Discover our collection of demi-fine jewelry, designed to be worn and treasured.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="md:hidden flex items-center gap-2 px-4 py-2 border border-stone-300 text-xs uppercase tracking-[0.12em]"
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filters
            </button>
            <p className="text-sm text-stone-500">
              {filteredProducts.length} {filteredProducts.length === 1 ? "product" : "products"}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <label htmlFor="sort" className="text-xs uppercase tracking-[0.12em] text-stone-500 hidden sm:block">
              Sort by
            </label>
            <div className="relative">
              <select
                id="sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-transparent border border-stone-300 px-4 py-2 pr-8 text-xs uppercase tracking-[0.12em] focus:outline-none focus:border-stone-900"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 pointer-events-none text-stone-500" />
            </div>
          </div>
        </div>

        <div className="flex gap-12">
          <aside className="hidden md:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <h3 className="text-xs uppercase tracking-[0.15em] mb-4">Categories</h3>
              <div className="space-y-2">
                <button
                  onClick={() => setCategory("all")}
                  className={`block w-full text-left text-sm py-1 transition-colors ${
                    activeCategory === "all" ? "text-stone-900 font-medium" : "text-stone-500 hover:text-stone-900"
                  }`}
                >
                  All
                </button>
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setCategory(category.id)}
                    className={`block w-full text-left text-sm py-1 transition-colors ${
                      activeCategory === category.id ? "text-stone-900 font-medium" : "text-stone-500 hover:text-stone-900"
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>

              <div className="mt-8">
                <h3 className="text-xs uppercase tracking-[0.15em] mb-4">Price Range</h3>
                <div className="space-y-2">
                  {["Under $50", "$50 - $75", "$75 - $100", "Over $100"].map((range) => (
                    <label key={range} className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-stone-300 text-stone-900 focus:ring-stone-900" />
                      <span className="text-sm text-stone-600">{range}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xs uppercase tracking-[0.15em] mb-4">Material</h3>
                <div className="space-y-2">
                  {["18K Gold Plated", "Silver Plated", "Crystal", "Pearl"].map((material) => (
                    <label key={material} className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-stone-300 text-stone-900 focus:ring-stone-900" />
                      <span className="text-sm text-stone-600">{material}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-stone-500">No products found in this category.</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm md:hidden" onClick={() => setMobileFiltersOpen(false)}>
          <div
            className="absolute right-0 top-0 h-full w-80 bg-white shadow-2xl overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-6 border-b border-stone-100">
              <h2 className="font-serif text-lg">Filters</h2>
              <button onClick={() => setMobileFiltersOpen(false)} className="p-2 -mr-2">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-6 space-y-8">
              <div>
                <h3 className="text-xs uppercase tracking-[0.15em] mb-4">Categories</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => { setCategory("all"); setMobileFiltersOpen(false) }}
                    className={`block w-full text-left text-sm py-1 ${activeCategory === "all" ? "text-stone-900 font-medium" : "text-stone-500"}`}
                  >
                    All
                  </button>
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => { setCategory(category.id); setMobileFiltersOpen(false) }}
                      className={`block w-full text-left text-sm py-1 ${activeCategory === category.id ? "text-stone-900 font-medium" : "text-stone-500"}`}
                    >
                      {category.label}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-[0.15em] mb-4">Price Range</h3>
                <div className="space-y-2">
                  {["Under $50", "$50 - $75", "$75 - $100", "Over $100"].map((range) => (
                    <label key={range} className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-stone-300" />
                      <span className="text-sm text-stone-600">{range}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Shop
