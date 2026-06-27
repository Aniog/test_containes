import { useState, useMemo } from "react"
import { Link, useSearchParams } from "react-router-dom"
import { Star, ShoppingBag, SlidersHorizontal, X } from "lucide-react"
import { products, categories } from "@/data/products"
import { useCart } from "@/context/CartContext"

const priceRanges = [
  { label: "Under $40", min: 0, max: 40 },
  { label: "$40 – $60", min: 40, max: 60 },
  { label: "$60 – $80", min: 60, max: 80 },
  { label: "$80 & Above", min: 80, max: Infinity },
]

const materials = ["18K Gold Plated", "Silver Tone", "Cubic Zirconia"]

const sortOptions = [
  { label: "Featured", value: "featured" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Top Rated", value: "rating" },
]

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const { addItem } = useCart()

  const [categoryFilter, setCategoryFilter] = useState(searchParams.get("category") || "")
  const [priceFilter, setPriceFilter] = useState("")
  const [materialFilter, setMaterialFilter] = useState("")
  const [sort, setSort] = useState("featured")
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [quickAddId, setQuickAddId] = useState(null)

  const filtered = useMemo(() => {
    let result = [...products]

    if (categoryFilter) {
      result = result.filter((p) => p.category.toLowerCase() === categoryFilter.toLowerCase())
    }

    if (priceFilter) {
      const range = priceRanges.find((r) => r.label === priceFilter)
      if (range) {
        result = result.filter((p) => p.price >= range.min && p.price < range.max)
      }
    }

    if (materialFilter) {
      result = result.filter((p) =>
        p.variants.some((v) => v.toLowerCase().includes(materialFilter.toLowerCase()))
      )
    }

    switch (sort) {
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
        result.sort((a, b) => (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0))
    }

    return result
  }, [categoryFilter, priceFilter, materialFilter, sort])

  const clearFilters = () => {
    setCategoryFilter("")
    setPriceFilter("")
    setMaterialFilter("")
    setSort("featured")
    setSearchParams({})
  }

  const hasFilters = categoryFilter || priceFilter || materialFilter

  const FilterSidebar = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h4 className="text-xs uppercase tracking-widest text-charcoal mb-4">Category</h4>
        <div className="space-y-2">
          <button
            onClick={() => setCategoryFilter("")}
            className={`block w-full text-left text-sm py-1.5 transition-colors ${
              !categoryFilter ? "text-charcoal font-medium" : "text-taupe hover:text-charcoal"
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategoryFilter(cat.id)}
              className={`block w-full text-left text-sm py-1.5 transition-colors ${
                categoryFilter === cat.id ? "text-charcoal font-medium" : "text-taupe hover:text-charcoal"
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
        <h4 className="text-xs uppercase tracking-widest text-charcoal mb-4">Price</h4>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <button
              key={range.label}
              onClick={() => setPriceFilter(priceFilter === range.label ? "" : range.label)}
              className={`block w-full text-left text-sm py-1.5 transition-colors ${
                priceFilter === range.label ? "text-charcoal font-medium" : "text-taupe hover:text-charcoal"
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      <hr className="hairline" />

      {/* Material */}
      <div>
        <h4 className="text-xs uppercase tracking-widest text-charcoal mb-4">Material</h4>
        <div className="space-y-2">
          {materials.map((m) => (
            <button
              key={m}
              onClick={() => setMaterialFilter(materialFilter === m ? "" : m)}
              className={`block w-full text-left text-sm py-1.5 transition-colors ${
                materialFilter === m ? "text-charcoal font-medium" : "text-taupe hover:text-charcoal"
              }`}
            >
              {m}
            </button>
          ))}
        </div>
      </div>

      {hasFilters && (
        <button
          onClick={clearFilters}
          className="text-xs uppercase tracking-widest text-muted hover:text-charcoal transition-colors underline underline-offset-2"
        >
          Clear All Filters
        </button>
      )}
    </div>
  )

  return (
    <div className="py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl text-charcoal font-semibold text-center" style={{ fontFamily: "Cormorant Garamond, Georgia, serif" }}>
            {categoryFilter
              ? categories.find((c) => c.id === categoryFilter)?.name || "Shop"
              : "All Jewelry"}
          </h1>
          <div className="w-12 h-[1px] bg-gold mx-auto mt-4" />
        </div>

        <div className="flex gap-10">
          {/* Desktop Sidebar */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <FilterSidebar />
          </aside>

          {/* Main */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                {/* Mobile filter button */}
                <button
                  onClick={() => setMobileFiltersOpen(true)}
                  className="md:hidden flex items-center gap-2 text-sm text-charcoal border border-hairline px-4 py-2"
                >
                  <SlidersHorizontal size={14} />
                  Filters
                  {hasFilters && <span className="w-2 h-2 rounded-full bg-gold" />}
                </button>
                <p className="text-xs text-muted">
                  {filtered.length} {filtered.length === 1 ? "product" : "products"}
                </p>
              </div>

              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="text-xs text-charcoal bg-transparent border border-hairline px-3 py-2 focus:outline-none focus:border-charcoal uppercase tracking-wider"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Product Grid */}
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-taupe font-serif text-lg mb-3">No products found</p>
                <button
                  onClick={clearFilters}
                  className="text-xs uppercase tracking-widest text-gold hover:text-gold-hover underline underline-offset-2"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
                  <Link
                    key={product.id}
                    to={`/product/${product.id}`}
                    className="group block"
                  >
                    <div
                      className="relative aspect-[3/4] bg-hairline/30 overflow-hidden mb-3"
                      onMouseEnter={() => setQuickAddId(product.id)}
                      onMouseLeave={() => setQuickAddId(null)}
                    >
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                      />
                      {product.images[1] && (
                        <img
                          src={product.images[1]}
                          alt=""
                          className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                          aria-hidden="true"
                        />
                      )}
                      {quickAddId === product.id && (
                        <button
                          onClick={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                            addItem(product, "18K Gold", 1)
                          }}
                          className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm text-charcoal p-2.5 rounded-full shadow-md hover:bg-white transition-all duration-300"
                          aria-label={`Quick add ${product.name}`}
                        >
                          <ShoppingBag size={16} />
                        </button>
                      )}
                    </div>
                    <h3 className="text-product-name text-xs text-charcoal mb-1">{product.name}</h3>
                    <div className="flex items-center gap-1 mb-1">
                      <Star size={10} className="text-star fill-star" />
                      <span className="text-xs text-muted">{product.rating}</span>
                    </div>
                    <p className="text-sm text-charcoal font-medium">${product.price}</p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filters Overlay */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
          mobileFiltersOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-charcoal/40" onClick={() => setMobileFiltersOpen(false)} />
        <div
          className={`absolute bottom-0 left-0 right-0 bg-cream max-h-[80vh] overflow-y-auto transition-transform duration-300 ${
            mobileFiltersOpen ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <div className="flex items-center justify-between px-6 py-4 border-b border-hairline sticky top-0 bg-cream z-10">
            <span className="text-sm uppercase tracking-widest">Filters</span>
            <button onClick={() => setMobileFiltersOpen(false)}>
              <X size={18} />
            </button>
          </div>
          <div className="p-6">
            <FilterSidebar />
          </div>
        </div>
      </div>
    </div>
  )
}