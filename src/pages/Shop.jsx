import { Link, useSearchParams } from 'react-router-dom'
import { products, categories } from '@/data/products'
import { useCart } from '@/components/cart/CartContext'
import { useState, useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ShoppingBag, Filter, X, ChevronDown } from 'lucide-react'

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const { addItem } = useCart()
  const containerRef = useRef(null)

  const categoryParam = searchParams.get('category') || 'all'
  const [selectedCategory, setSelectedCategory] = useState(categoryParam)
  const [selectedPrice, setSelectedPrice] = useState('all')
  const [selectedMaterial, setSelectedMaterial] = useState('all')
  const [sortBy, setSortBy] = useState('featured')
  const [hoveredId, setHoveredId] = useState(null)
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  useEffect(() => {
    if (categoryParam !== selectedCategory) {
      setSelectedCategory(categoryParam)
    }
  }, [categoryParam])

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [selectedCategory, selectedPrice, selectedMaterial])

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat)
    if (cat === 'all') {
      setSearchParams({})
    } else {
      setSearchParams({ category: cat })
    }
  }

  // Filter products
  let filtered = [...products]
  if (selectedCategory !== 'all') {
    filtered = filtered.filter(p => p.category === selectedCategory)
  }
  if (selectedPrice === 'under50') {
    filtered = filtered.filter(p => p.price < 50)
  } else if (selectedPrice === '50to80') {
    filtered = filtered.filter(p => p.price >= 50 && p.price <= 80)
  } else if (selectedPrice === 'over80') {
    filtered = filtered.filter(p => p.price > 80)
  }

  // Sort
  if (sortBy === 'price-low') {
    filtered.sort((a, b) => a.price - b.price)
  } else if (sortBy === 'price-high') {
    filtered.sort((a, b) => b.price - a.price)
  } else if (sortBy === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating)
  }

  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: 'under50', label: 'Under $50' },
    { value: '50to80', label: '$50 – $80' },
    { value: 'over80', label: 'Over $80' },
  ]

  const materials = [
    { value: 'all', label: 'All Materials' },
    { value: 'gold', label: '18K Gold Plated' },
    { value: 'silver', label: 'Silver Plated' },
  ]

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Category */}
      <div>
        <h3 className="font-sans text-xs uppercase tracking-[0.08em] text-velmora-textSecondary mb-3">
          Category
        </h3>
        <div className="space-y-2">
          <button
            onClick={() => handleCategoryChange('all')}
            className={`block font-sans text-sm transition-colors ${
              selectedCategory === 'all' ? 'text-velmora-gold' : 'text-velmora-textPrimary hover:text-velmora-gold'
            }`}
          >
            All Jewelry
          </button>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`block font-sans text-sm transition-colors ${
                selectedCategory === cat.id ? 'text-velmora-gold' : 'text-velmora-textPrimary hover:text-velmora-gold'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="font-sans text-xs uppercase tracking-[0.08em] text-velmora-textSecondary mb-3">
          Price
        </h3>
        <div className="space-y-2">
          {priceRanges.map(range => (
            <button
              key={range.value}
              onClick={() => setSelectedPrice(range.value)}
              className={`block font-sans text-sm transition-colors ${
                selectedPrice === range.value ? 'text-velmora-gold' : 'text-velmora-textPrimary hover:text-velmora-gold'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="font-sans text-xs uppercase tracking-[0.08em] text-velmora-textSecondary mb-3">
          Material
        </h3>
        <div className="space-y-2">
          {materials.map(mat => (
            <button
              key={mat.value}
              onClick={() => setSelectedMaterial(mat.value)}
              className={`block font-sans text-sm transition-colors ${
                selectedMaterial === mat.value ? 'text-velmora-gold' : 'text-velmora-textPrimary hover:text-velmora-gold'
              }`}
            >
              {mat.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <div ref={containerRef} className="min-h-screen bg-velmora-surface pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-serif text-3xl md:text-4xl text-velmora-textPrimary tracking-[0.05em]">
            {selectedCategory === 'all' ? 'All Jewelry' : categories.find(c => c.id === selectedCategory)?.name || 'Shop'}
          </h1>

          <div className="flex items-center gap-4">
            {/* Mobile filter toggle */}
            <button
              onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
              className="md:hidden flex items-center gap-2 font-sans text-sm text-velmora-textSecondary"
            >
              <Filter className="w-4 h-4" />
              Filters
            </button>

            {/* Sort dropdown */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-transparent font-sans text-sm text-velmora-textSecondary pr-6 cursor-pointer focus:outline-none"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
              <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-velmora-textSecondary pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Mobile Filters */}
        {mobileFiltersOpen && (
          <div className="md:hidden bg-velmora-cream p-6 rounded-sm mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-sans text-sm uppercase tracking-[0.08em] text-velmora-textPrimary">Filters</h2>
              <button onClick={() => setMobileFiltersOpen(false)}>
                <X className="w-4 h-4 text-velmora-textSecondary" />
              </button>
            </div>
            <FilterContent />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden md:block">
            <FilterContent />
          </aside>

          {/* Product Grid */}
          <div>
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-lg text-velmora-textSecondary">No products match your filters.</p>
                <button
                  onClick={() => { setSelectedCategory('all'); setSelectedPrice('all'); setSearchParams({}); }}
                  className="font-sans text-sm text-velmora-gold mt-4 uppercase tracking-[0.1em] hover:text-velmora-goldLight transition-colors"
                >
                  View All Jewelry
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filtered.map(product => (
                  <div
                    key={product.id}
                    className="group relative"
                    onMouseEnter={() => setHoveredId(product.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    <Link to={`/product/${product.id}`} className="block">
                      <div className="relative aspect-[3/4] bg-velmora-cream overflow-hidden rounded-sm">
                        <img
                          data-strk-img-id={`${product.imgId}-shop`}
                          data-strk-img={`[${product.descId}] [${product.titleId}]`}
                          data-strk-img-ratio="3x4"
                          data-strk-img-width="600"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          alt={product.name}
                          className={`w-full h-full object-cover transition-opacity duration-500 ${
                            hoveredId === product.id ? 'opacity-0' : 'opacity-100'
                          }`}
                        />
                        <img
                          data-strk-img-id={`${product.imgId}-shop-hover`}
                          data-strk-img={`[${product.descId}] worn [${product.titleId}]`}
                          data-strk-img-ratio="3x4"
                          data-strk-img-width="600"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          alt={`${product.name} worn`}
                          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                            hoveredId === product.id ? 'opacity-100' : 'opacity-0'
                          }`}
                        />
                        {/* Quick Add */}
                        <button
                          onClick={(e) => { e.preventDefault(); addItem(product); }}
                          className={`absolute bottom-3 left-1/2 -translate-x-1/2 bg-velmora-gold text-velmora-base px-4 py-2 font-sans text-xs uppercase tracking-[0.08em] flex items-center gap-2 transition-all duration-300 rounded-sm z-10 ${
                            hoveredId === product.id
                              ? 'opacity-100 translate-y-0'
                              : 'opacity-0 translate-y-2 md:pointer-events-none'
                          }`}
                        >
                          <ShoppingBag className="w-3 h-3" />
                          Add to Cart
                        </button>
                      </div>
                    </Link>

                    <div className="mt-3 md:mt-4">
                      <Link to={`/product/${product.id}`}>
                        <h3 id={product.titleId} className="font-serif text-sm md:text-base uppercase tracking-[0.15em] text-velmora-textPrimary">
                          {product.name}
                        </h3>
                      </Link>
                      <p id={product.descId} className="font-sans text-xs text-velmora-textSecondary mt-1 hidden md:block">
                        {product.shortDescription}
                      </p>
                      <p className="font-serif text-sm md:text-base text-velmora-gold mt-1">${product.price}</p>
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
