import { useState, useEffect, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Star, ShoppingBag, SlidersHorizontal } from 'lucide-react'
import products from '@/data/products'
import { useCart } from '@/lib/CartContext'
import FilterSidebar from '@/components/shop/FilterSidebar'

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
  { value: 'newest', label: 'Newest' },
]

export default function ShopPage() {
  const [searchParams] = useSearchParams()
  const { addToCart } = useCart()
  const [filters, setFilters] = useState({
    category: searchParams.get('category') || '',
    price: '',
    material: '',
    sort: 'featured',
  })
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false)
  const [hoveredId, setHoveredId] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Sync URL category param
  useEffect(() => {
    const cat = searchParams.get('category') || ''
    setFilters((prev) => ({ ...prev, category: cat }))
  }, [searchParams])

  const filteredProducts = useMemo(() => {
    let result = [...products]

    // Category filter
    if (filters.category) {
      result = result.filter((p) => p.category === filters.category)
    }

    // Price filter
    if (filters.price) {
      const [min, max] = filters.price.split('-').map(Number)
      result = result.filter((p) => {
        if (max) return p.price >= min && p.price <= max
        return p.price >= min
      })
    }

    // Material filter
    if (filters.material) {
      result = result.filter((p) => p.material === filters.material)
    }

    // Sort
    switch (filters.sort) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        result.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        result.sort((a, b) => b.rating - a.rating)
        break
      case 'newest':
        result.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded))
        break
      default:
        break
    }

    return result
  }, [filters])

  const categoryLabel =
    filters.category
      ? filters.category.charAt(0).toUpperCase() + filters.category.slice(1)
      : 'All Jewelry'

  return (
    <div className="bg-velvet-950 pt-24 md:pt-28 min-h-screen">
      <div className="container-site">
        {/* Header */}
        <div className="mb-10">
          <p className="text-xs tracking-super-wide uppercase text-gold-400 mb-3 font-medium">Shop</p>
          <h1 className="heading-lg text-velvet-50 mb-2">{categoryLabel}</h1>
          <p className="text-velvet-500 text-sm">{filteredProducts.length} products</p>
        </div>

        <div className="flex gap-10">
          {/* Sidebar */}
          <FilterSidebar
            filters={filters}
            setFilters={setFilters}
            mobileOpen={mobileFilterOpen}
            setMobileFilterOpen={setMobileFilterOpen}
          />

          {/* Main */}
          <div className="flex-1">
            {/* Sort + mobile filter toggle */}
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-velvet-800">
              <button
                onClick={() => setMobileFilterOpen(true)}
                className="lg:hidden flex items-center gap-2 text-xs tracking-wider uppercase text-velvet-400 hover:text-velvet-200 transition-colors"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                Filters
              </button>
              <div className="flex items-center gap-3 ml-auto">
                <span className="text-xs text-velvet-500 hidden sm:inline">Sort by:</span>
                <select
                  value={filters.sort}
                  onChange={(e) => setFilters((prev) => ({ ...prev, sort: e.target.value }))}
                  className="bg-velvet-900 border border-velvet-700 text-velvet-300 text-sm px-3 py-2 rounded-sm
                           focus:outline-none focus:border-gold-500/50 cursor-pointer"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Product grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-velvet-400 text-lg mb-4">No products match your filters</p>
                <button
                  onClick={() => setFilters({ category: '', price: '', material: '', sort: 'featured' })}
                  className="btn-outline"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="group"
                    onMouseEnter={() => setHoveredId(product.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    <Link to={`/product/${product.id}`} className="block">
                      {/* Image */}
                      <div className="relative aspect-[3/4] bg-velvet-800 rounded-sm overflow-hidden mb-4">
                        <div className="w-full h-full bg-gradient-to-b from-velvet-700 to-velvet-800 flex items-center justify-center">
                          <span className="text-velvet-500 text-xs tracking-wider">GOLD JEWELRY</span>
                        </div>

                        {/* Quick add overlay */}
                        <div
                          className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 ${
                            hoveredId === product.id ? 'opacity-100' : 'opacity-0'
                          }`}
                        >
                          <button
                            onClick={(e) => {
                              e.preventDefault()
                              e.stopPropagation()
                              addToCart(product, product.variants[0])
                            }}
                            className="bg-velvet-50 text-velvet-950 px-6 py-2.5 text-xs tracking-wider uppercase font-medium
                                     hover:bg-gold-400 transition-all duration-300 flex items-center gap-2"
                          >
                            <ShoppingBag className="w-3.5 h-3.5" />
                            Add to Cart
                          </button>
                        </div>
                      </div>

                      {/* Info */}
                      <p className="text-[10px] tracking-super-wide uppercase text-velvet-500 mb-1.5">
                        {product.material}
                      </p>
                      <h3 className="text-xs tracking-wider text-velvet-100 font-medium mb-1.5 leading-snug">
                        {product.name}
                      </h3>
                      <div className="flex items-center gap-1.5 mb-1.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-gold-500 text-gold-500" />
                        ))}
                        <span className="text-[10px] text-velvet-500 ml-1">({product.reviewCount})</span>
                      </div>
                      <p className="text-sm text-gold-400 font-medium">${product.price}</p>
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