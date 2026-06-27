import { useState, useMemo } from "react"
import { useSearchParams } from "react-router-dom"
import { SlidersHorizontal, X, ChevronDown } from "lucide-react"
import products from "@/data/products"
import ProductCard from "@/components/ProductCard"

const categories = [
  { id: "all", name: "All" },
  { id: "earrings", name: "Earrings" },
  { id: "necklaces", name: "Necklaces" },
  { id: "huggies", name: "Huggies" },
  { id: "sets", name: "Gift Sets" },
]

const priceRanges = [
  { id: "all", name: "All Prices", min: 0, max: Infinity },
  { id: "under50", name: "Under $50", min: 0, max: 50 },
  { id: "50to75", name: "$50 – $75", min: 50, max: 75 },
  { id: "75plus", name: "$75+", min: 75, max: Infinity },
]

const sortOptions = [
  { id: "featured", name: "Featured" },
  { id: "price-asc", name: "Price: Low to High" },
  { id: "price-desc", name: "Price: High to Low" },
  { id: "rating", name: "Highest Rated" },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [mobileFilters, setMobileFilters] = useState(false)

  const activeCategory = searchParams.get("category") || "all"
  const activePrice = searchParams.get("price") || "all"
  const activeSort = searchParams.get("sort") || "featured"

  const setFilter = (key, value) => {
    const params = new URLSearchParams(searchParams)
    if (value === "all" || value === "featured") {
      params.delete(key)
    } else {
      params.set(key, value)
    }
    setSearchParams(params)
  }

  const filteredProducts = useMemo(() => {
    let result = [...products]

    // Category filter
    if (activeCategory !== "all") {
      result = result.filter((p) => p.category === activeCategory)
    }

    // Price filter
    const range = priceRanges.find((r) => r.id === activePrice)
    if (range && range.id !== "all") {
      result = result.filter((p) => p.price >= range.min && p.price < range.max)
    }

    // Sort
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

  const activeFilters = [activeCategory, activePrice].filter((f) => f !== "all")

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="text-xs uppercase tracking-[0.12em] font-medium mb-4">Category</h3>
        <div className="space-y-2.5">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter("category", cat.id)}
              className={`block text-sm transition-colors ${
                activeCategory === cat.id ? "text-gold font-medium" : "text-muted hover:text-foreground"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      <hr className="hairline" />

      {/* Price */}
      <div>
        <h3 className="text-xs uppercase tracking-[0.12em] font-medium mb-4">Price</h3>
        <div className="space-y-2.5">
          {priceRanges.map((range) => (
            <button
              key={range.id}
              onClick={() => setFilter("price", range.id)}
              className={`block text-sm transition-colors ${
                activePrice === range.id ? "text-gold font-medium" : "text-muted hover:text-foreground"
              }`}
            >
              {range.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <main className="pt-20 md:pt-24 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Page header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 md:mb-12">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-light font-medium">Our Collection</p>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl mt-2 font-light">
              All Jewelry
            </h1>
          </div>

          <div className="flex items-center gap-4 mt-4 md:mt-0">
            {/* Mobile filter toggle */}
            <button
              className="md:hidden flex items-center gap-2 text-xs uppercase tracking-[0.12em] font-medium text-muted hover:text-foreground transition-colors"
              onClick={() => setMobileFilters(true)}
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              Filters
              {activeFilters.length > 0 && (
                <span className="w-4 h-4 bg-gold text-white text-[10px] flex items-center justify-center rounded-full">
                  {activeFilters.length}
                </span>
              )}
            </button>

            {/* Sort */}
            <div className="relative">
              <select
                value={activeSort}
                onChange={(e) => setFilter("sort", e.target.value)}
                className="appearance-none text-xs uppercase tracking-[0.08em] font-medium text-muted bg-transparent border border-border px-4 py-2 pr-8 focus:outline-none focus:border-gold transition-colors cursor-pointer"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.id} value={opt.id}>{opt.name}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3 text-muted pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex gap-10">
          {/* Sidebar - desktop */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Mobile filter drawer */}
          <div
            className={`md:hidden fixed inset-0 z-50 transition-opacity duration-300 ${
              mobileFilters ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="absolute inset-0 bg-black/40" onClick={() => setMobileFilters(false)} />
            <div className={`absolute left-0 top-0 h-full w-80 bg-cream p-6 transform transition-transform duration-300 ${
              mobileFilters ? "translate-x-0" : "-translate-x-full"
            }`}>
              <div className="flex items-center justify-between mb-8">
                <span className="text-xs uppercase tracking-[0.12em] font-medium">Filters</span>
                <button onClick={() => setMobileFilters(false)} className="p-1 hover:text-gold transition-colors">
                  <X className="w-4 h-4" />
                </button>
              </div>
              <FilterContent />
            </div>
          </div>

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-muted mb-2">No products found</p>
                <p className="text-sm text-muted-light mb-6">Try adjusting your filters</p>
                <button
                  onClick={() => setSearchParams({})}
                  className="text-xs uppercase tracking-[0.12em] text-gold underline underline-offset-4"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <>
                <p className="text-xs text-muted-light mb-6">
                  Showing {filteredProducts.length} {filteredProducts.length === 1 ? "product" : "products"}
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}