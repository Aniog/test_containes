import { useState, useEffect, useRef } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { ShoppingBag, Filter, X, ChevronDown } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products, categories } from '@/data/products'
import { useCart } from '@/context/CartContext'

const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const containerRef = useRef(null)
  const { addItem } = useCart()

  const categoryParam = searchParams.get('category') || ''
  const [selectedCategory, setSelectedCategory] = useState(categoryParam)
  const [selectedPrice, setSelectedPrice] = useState('')
  const [selectedMaterial, setSelectedMaterial] = useState('')
  const [sortBy, setSortBy] = useState('default')
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false)
  const [hoveredProduct, setHoveredProduct] = useState(null)

  useEffect(() => {
    setSelectedCategory(categoryParam)
  }, [categoryParam])

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => cancelAnimationFrame(frameId)
  }, [selectedCategory, selectedPrice, selectedMaterial, sortBy])

  const priceRanges = [
    { value: '', label: 'All Prices' },
    { value: '0-50', label: 'Under $50' },
    { value: '50-100', label: '$50 – $100' },
    { value: '100+', label: 'Over $100' },
  ]

  const filtered = products.filter(p => {
    if (selectedCategory && p.category !== selectedCategory) return false
    if (selectedPrice) {
      if (selectedPrice === '0-50' && p.price >= 50) return false
      if (selectedPrice === '50-100' && (p.price < 50 || p.price > 100)) return false
      if (selectedPrice === '100+' && p.price < 100) return false
    }
    return true
  })

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price
    if (sortBy === 'price-high') return b.price - a.price
    if (sortBy === 'rating') return b.rating - a.rating
    return 0
  })

  const clearFilters = () => {
    setSelectedCategory('')
    setSelectedPrice('')
    setSelectedMaterial('')
    setSearchParams({})
  }

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat)
    if (cat) {
      setSearchParams({ category: cat })
    } else {
      setSearchParams({})
    }
  }

  const FilterSidebar = ({ mobile = false }) => (
    <div className={`${mobile ? 'p-6' : ''}`}>
      {/* Category */}
      <div className="mb-6">
        <h3 className="font-sans text-xs tracking-section uppercase text-muted mb-3">Category</h3>
        <div className="space-y-2">
          <button
            onClick={() => handleCategoryChange('')}
            className={`font-sans text-sm font-light transition-colors ${!selectedCategory ? 'text-gold' : 'text-warm-dark/60 hover:text-warm-dark'}`}
          >
            All
          </button>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`font-sans text-sm font-light transition-colors ${selectedCategory === cat.id ? 'text-gold' : 'text-warm-dark/60 hover:text-warm-dark'}`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="mb-6">
        <h3 className="font-sans text-xs tracking-section uppercase text-muted mb-3">Price</h3>
        <div className="space-y-2">
          {priceRanges.map(range => (
            <button
              key={range.value}
              onClick={() => setSelectedPrice(range.value)}
              className={`font-sans text-sm font-light transition-colors ${selectedPrice === range.value ? 'text-gold' : 'text-warm-dark/60 hover:text-warm-dark'}`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div className="mb-6">
        <h3 className="font-sans text-xs tracking-section uppercase text-muted mb-3">Material</h3>
        <div className="space-y-2">
          <button
            onClick={() => setSelectedMaterial('')}
            className={`font-sans text-sm font-light transition-colors ${!selectedMaterial ? 'text-gold' : 'text-warm-dark/60 hover:text-warm-dark'}`}
          >
            All
          </button>
          <button
            onClick={() => setSelectedMaterial('gold')}
            className={`font-sans text-sm font-light transition-colors ${selectedMaterial === 'gold' ? 'text-gold' : 'text-warm-dark/60 hover:text-warm-dark'}`}
          >
            18K Gold Plated
          </button>
        </div>
      </div>

      {/* Clear */}
      {(selectedCategory || selectedPrice || selectedMaterial) && (
        <button
          onClick={clearFilters}
          className="font-sans text-xs tracking-btn uppercase text-muted hover:text-warm-dark transition-colors"
        >
          Clear All Filters
        </button>
      )}
    </div>
  )

  return (
    <div ref={containerRef} className="bg-cream min-h-screen pt-24 md:pt-28">
      <div className="max-w-content mx-auto px-6 md:px-8 py-8 md:py-12">
        {/* Page header */}
        <div className="text-center mb-10">
          <h1 className="font-sans text-xs tracking-section uppercase text-muted mb-3">
            Collection
          </h1>
          <p className="font-serif text-3xl md:text-4xl text-warm-dark font-light">
            {selectedCategory ? categories.find(c => c.id === selectedCategory)?.name || 'All Jewelry' : 'All Jewelry'}
          </p>
        </div>

        {/* Mobile filter toggle */}
        <div className="md:hidden flex items-center justify-between mb-6">
          <button
            onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
            className="font-sans text-xs tracking-btn uppercase text-warm-dark flex items-center gap-2"
          >
            <Filter className="w-4 h-4" />
            Filters
          </button>
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="font-sans text-xs tracking-btn uppercase text-warm-dark bg-transparent appearance-none pr-6 cursor-pointer"
            >
              <option value="default">Sort: Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
            <ChevronDown className="w-3 h-3 absolute right-0 top-1/2 -translate-y-1/2 text-warm-dark" />
          </div>
        </div>

        {/* Mobile filter drawer */}
        {mobileFilterOpen && (
          <div className="md:hidden bg-warm-white border border-warm-border rounded-lg mb-6">
            <div className="flex items-center justify-between px-6 py-4 border-b border-warm-border">
              <span className="font-sans text-xs tracking-section uppercase text-warm-dark">Filters</span>
              <button onClick={() => setMobileFilterOpen(false)} className="text-warm-dark/60">
                <X className="w-4 h-4" />
              </button>
            </div>
            <FilterSidebar mobile />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Desktop sidebar */}
          <div className="hidden md:block">
            <FilterSidebar />
          </div>

          {/* Product grid */}
          <div className="md:col-span-3">
            {/* Desktop sort */}
            <div className="hidden md:flex items-center justify-between mb-6">
              <p className="font-sans text-sm text-muted font-light">
                {sorted.length} pieces
              </p>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="font-sans text-xs tracking-btn uppercase text-warm-dark bg-transparent appearance-none pr-6 cursor-pointer"
                >
                  <option value="default">Sort: Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
                <ChevronDown className="w-3 h-3 absolute right-0 top-1/2 -translate-y-1/2 text-warm-dark" />
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {sorted.map(product => (
                <div
                  key={product.id}
                  className="group relative"
                  onMouseEnter={() => setHoveredProduct(product.id)}
                  onMouseLeave={() => setHoveredProduct(null)}
                >
                  <Link to={`/product/${product.id}`} className="block">
                    <div className="relative aspect-[3/4] overflow-hidden bg-warm-white mb-4">
                      <img
                        data-strk-img-id={product.images[0].imgId}
                        data-strk-img={`[${product.descId}] [${product.titleId}]`}
                        data-strk-img-ratio={product.images[0].ratio}
                        data-strk-img-width={String(product.images[0].width)}
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={product.name}
                        className={`w-full h-full object-cover transition-opacity duration-500 ${hoveredProduct === product.id ? 'opacity-0' : 'opacity-100'}`}
                      />
                      <img
                        data-strk-img-id={product.images[1].imgId}
                        data-strk-img={`[${product.descId}] [${product.titleId}] worn`}
                        data-strk-img-ratio={product.images[1].ratio}
                        data-strk-img-width={String(product.images[1].width)}
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={product.name}
                        className={`w-full h-full object-cover transition-opacity duration-500 absolute inset-0 ${hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'}`}
                      />
                    </div>

                    <h3
                      id={product.titleId}
                      className="font-serif text-sm tracking-product uppercase text-warm-dark group-hover:text-gold transition-colors duration-200"
                    >
                      {product.name}
                    </h3>
                    <p
                      id={product.descId}
                      className="font-sans text-xs text-muted mt-1 font-light"
                    >
                      {product.description}
                    </p>
                    <p className="font-sans text-sm text-warm-dark font-medium mt-2">
                      ${product.price}
                    </p>
                  </Link>

                  {/* Quick add */}
                  <button
                    onClick={(e) => { e.preventDefault(); addItem(product) }}
                    className={`absolute bottom-4 left-1/2 -translate-x-1/2 font-sans text-xs tracking-btn uppercase bg-charcoal text-cream px-6 py-2.5 hover:bg-gold transition-all duration-300 ${
                      hoveredProduct === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                  >
                    <ShoppingBag className="w-3.5 h-3.5 inline mr-2" />
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>

            {sorted.length === 0 && (
              <div className="text-center py-16">
                <p className="font-serif text-xl text-warm-dark mb-4">No pieces match your filters</p>
                <button
                  onClick={clearFilters}
                  className="font-sans text-xs tracking-btn uppercase text-gold hover:text-gold-light transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShopPage
