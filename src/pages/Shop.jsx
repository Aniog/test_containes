import { useState, useMemo } from "react"
import { useSearchParams } from "react-router-dom"
import { products, categories } from "@/data/products"
import ProductCard from "@/components/ProductCard"
import { Separator } from "@/components/ui/separator"
import { SlidersHorizontal, X, ChevronDown } from "lucide-react"
import { motion } from "framer-motion"

const priceRanges = [
  { label: "Under $40", min: 0, max: 40 },
  { label: "$40 – $60", min: 40, max: 60 },
  { label: "$60 – $80", min: 60, max: 80 },
  { label: "$80+", min: 80, max: Infinity },
]

const materials = ["18k-gold-plated", "sterling-silver"]

const sortOptions = [
  { label: "Featured", value: "featured" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Best Rated", value: "rating" },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [sortOpen, setSortOpen] = useState(false)

  const activeCategory = searchParams.get("category") || ""
  const activePrice = searchParams.get("price") || ""
  const activeMaterial = searchParams.get("material") || ""
  const activeSort = searchParams.get("sort") || "featured"

  const filtered = useMemo(() => {
    let result = [...products]

    if (activeCategory) {
      result = result.filter((p) => p.category === activeCategory)
    }

    if (activePrice) {
      const range = priceRanges.find((r) => r.label === activePrice)
      if (range) {
        result = result.filter((p) => p.price >= range.min && p.price < range.max)
      }
    }

    if (activeMaterial) {
      result = result.filter((p) => p.material === activeMaterial)
    }

    if (activeSort === "price-asc") {
      result.sort((a, b) => a.price - b.price)
    } else if (activeSort === "price-desc") {
      result.sort((a, b) => b.price - a.price)
    } else if (activeSort === "rating") {
      result.sort((a, b) => b.rating - a.rating)
    }

    return result
  }, [activeCategory, activePrice, activeMaterial, activeSort])

  const updateFilter = (key, value) => {
    const params = new URLSearchParams(searchParams)
    if (value) {
      params.set(key, value)
    } else {
      params.delete(key)
    }
    setSearchParams(params)
  }

  const activeFiltersCount = [activeCategory, activePrice, activeMaterial].filter(Boolean).length

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h4 className="text-xs uppercase tracking-[0.15em] text-[#1C1C1C] font-medium mb-4">
          Category
        </h4>
        <div className="space-y-2.5">
          {categories.map((cat) => (
            <label key={cat.id} className="flex items-center gap-3 cursor-pointer group">
              <div
                className={`w-4 h-4 rounded-full border transition-all ${
                  activeCategory === cat.id
                    ? "border-[#C9A96E] bg-[#C9A96E]"
                    : "border-[#D4C8BA] group-hover:border-[#8A7E72]"
                }`}
              />
              <button
                onClick={() => updateFilter("category", activeCategory === cat.id ? "" : cat.id)}
                className={`text-sm transition-colors ${
                  activeCategory === cat.id ? "text-[#1C1C1C] font-medium" : "text-[#5C534A]"
                }`}
              >
                {cat.name}
              </button>
              <span className="text-xs text-[#8A7E72] ml-auto">{cat.count}</span>
            </label>
          ))}
        </div>
      </div>

      <Separator className="bg-[#E2D9CF]" />

      {/* Price */}
      <div>
        <h4 className="text-xs uppercase tracking-[0.15em] text-[#1C1C1C] font-medium mb-4">
          Price
        </h4>
        <div className="space-y-2.5">
          {priceRanges.map((range) => (
            <label key={range.label} className="flex items-center gap-3 cursor-pointer group">
              <div
                className={`w-4 h-4 rounded-full border transition-all ${
                  activePrice === range.label
                    ? "border-[#C9A96E] bg-[#C9A96E]"
                    : "border-[#D4C8BA] group-hover:border-[#8A7E72]"
                }`}
              />
              <button
                onClick={() => updateFilter("price", activePrice === range.label ? "" : range.label)}
                className={`text-sm transition-colors ${
                  activePrice === range.label ? "text-[#1C1C1C] font-medium" : "text-[#5C534A]"
                }`}
              >
                {range.label}
              </button>
            </label>
          ))}
        </div>
      </div>

      <Separator className="bg-[#E2D9CF]" />

      {/* Material */}
      <div>
        <h4 className="text-xs uppercase tracking-[0.15em] text-[#1C1C1C] font-medium mb-4">
          Material
        </h4>
        <div className="space-y-2.5">
          {materials.map((mat) => (
            <label key={mat} className="flex items-center gap-3 cursor-pointer group">
              <div
                className={`w-4 h-4 rounded-full border transition-all ${
                  activeMaterial === mat
                    ? "border-[#C9A96E] bg-[#C9A96E]"
                    : "border-[#D4C8BA] group-hover:border-[#8A7E72]"
                }`}
              />
              <button
                onClick={() => updateFilter("material", activeMaterial === mat ? "" : mat)}
                className={`text-sm transition-colors ${
                  activeMaterial === mat ? "text-[#1C1C1C] font-medium" : "text-[#5C534A]"
                }`}
              >
                {mat === "18k-gold-plated" ? "18K Gold Plated" : "Sterling Silver"}
              </button>
            </label>
          ))}
        </div>
      </div>

      {activeFiltersCount > 0 && (
        <button
          onClick={() => setSearchParams({})}
          className="text-xs uppercase tracking-[0.15em] text-[#C9A96E] hover:text-[#b8975e] transition-colors"
        >
          Clear All Filters
        </button>
      )}
    </div>
  )

  return (
    <div className="pt-20 sm:pt-24 pb-16 bg-[#F8F5F2] min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1C1C1C] mb-3">
            Shop All
          </h1>
          <p className="text-sm text-[#5C534A]">
            {filtered.length} {filtered.length === 1 ? "piece" : "pieces"} found
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Mobile filter toggle */}
          <div className="lg:hidden flex items-center justify-between mb-4">
            <button
              onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
              className="flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-[#1C1C1C] font-medium"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
              {activeFiltersCount > 0 && (
                <span className="w-5 h-5 rounded-full bg-[#C9A96E] text-white text-[10px] flex items-center justify-center">
                  {activeFiltersCount}
                </span>
              )}
            </button>

            {/* Sort */}
            <div className="relative">
              <button
                onClick={() => setSortOpen(!sortOpen)}
                className="flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-[#1C1C1C] font-medium"
              >
                Sort by: {sortOptions.find((s) => s.value === activeSort)?.label}
                <ChevronDown className="w-3 h-3" />
              </button>
              {sortOpen && (
                <div className="absolute right-0 top-full mt-2 bg-white border border-[#E2D9CF] rounded-sm shadow-lg z-20 min-w-[180px]">
                  {sortOptions.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => {
                        updateFilter("sort", opt.value)
                        setSortOpen(false)
                      }}
                      className={`block w-full text-left px-4 py-2.5 text-sm hover:bg-[#F8F5F2] transition-colors ${
                        activeSort === opt.value ? "text-[#C9A96E] font-medium" : "text-[#5C534A]"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile filters panel */}
          {mobileFiltersOpen && (
            <div className="lg:hidden bg-white p-6 rounded-sm border border-[#E2D9CF] mb-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-sm uppercase tracking-[0.15em] font-medium">Filters</h3>
                <button onClick={() => setMobileFiltersOpen(false)}>
                  <X className="w-4 h-4" />
                </button>
              </div>
              <FilterContent />
            </div>
          )}

          {/* Products grid */}
          <div className="flex-1">
            {/* Desktop sort */}
            <div className="hidden lg:flex items-center justify-end mb-6">
              <div className="relative">
                <button
                  onClick={() => setSortOpen(!sortOpen)}
                  className="flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-[#1C1C1C] font-medium"
                >
                  Sort by: {sortOptions.find((s) => s.value === activeSort)?.label}
                  <ChevronDown className="w-3 h-3" />
                </button>
                {sortOpen && (
                  <div className="absolute right-0 top-full mt-2 bg-white border border-[#E2D9CF] rounded-sm shadow-lg z-20 min-w-[180px]">
                    {sortOptions.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => {
                          updateFilter("sort", opt.value)
                          setSortOpen(false)
                        }}
                        className={`block w-full text-left px-4 py-2.5 text-sm hover:bg-[#F8F5F2] transition-colors ${
                          activeSort === opt.value ? "text-[#C9A96E] font-medium" : "text-[#5C534A]"
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-[#8A7E72] mb-4">No products match your filters.</p>
                <button
                  onClick={() => setSearchParams({})}
                  className="text-xs uppercase tracking-[0.15em] text-[#C9A96E] hover:text-[#b8975e] transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-10">
                {filtered.map((product, i) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
