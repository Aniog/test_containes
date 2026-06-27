import { useState, useRef, useEffect, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products, categories } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { ShoppingBag, SlidersHorizontal, X } from 'lucide-react'

export default function Shop() {
  const containerRef = useRef(null)
  const [searchParams, setSearchParams] = useSearchParams()
  const [sortBy, setSortBy] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const activeCategory = searchParams.get('category') || 'all'
  const priceRange = searchParams.get('price') || 'all'

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [activeCategory, priceRange, sortBy])

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (activeCategory !== 'all') {
      result = result.filter(p => p.category === activeCategory)
    }

    if (priceRange === 'under50') {
      result = result.filter(p => p.price < 50)
    } else if (priceRange === '50to80') {
      result = result.filter(p => p.price >= 50 && p.price <= 80)
    } else if (priceRange === 'over80') {
      result = result.filter(p => p.price > 80)
    }

    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price)
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price)
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating)
    }

    return result
  }, [activeCategory, priceRange, sortBy])

  const setFilter = (key, value) => {
    const params = new URLSearchParams(searchParams)
    if (value === 'all') {
      params.delete(key)
    } else {
      params.set(key, value)
    }
    setSearchParams(params)
  }

  return (
    <div ref={containerRef} className="pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl md:text-4xl text-charcoal">
            {activeCategory === 'all' ? 'All Jewelry' : categories.find(c => c.id === activeCategory)?.name || 'Shop'}
          </h1>
          <p className="mt-2 text-muted text-sm">
            {filteredProducts.length} piece{filteredProducts.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Mobile filter toggle */}
        <div className="md:hidden flex items-center justify-between mb-6">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="flex items-center gap-2 text-sm text-charcoal border border-border px-4 py-2"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="text-sm border border-border px-3 py-2 bg-cream text-charcoal"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>

        <div className="flex gap-8">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <FilterPanel
              activeCategory={activeCategory}
              priceRange={priceRange}
              setFilter={setFilter}
            />
          </aside>

          {/* Mobile filter drawer */}
          {mobileFiltersOpen && (
            <>
              <div className="fixed inset-0 bg-black/40 z-50 md:hidden" onClick={() => setMobileFiltersOpen(false)} />
              <div className="fixed top-0 left-0 h-full w-72 bg-cream z-[60] p-6 overflow-y-auto md:hidden">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-serif text-lg">Filters</h3>
                  <button onClick={() => setMobileFiltersOpen(false)}>
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <FilterPanel
                  activeCategory={activeCategory}
                  priceRange={priceRange}
                  setFilter={(key, value) => {
                    setFilter(key, value)
                    setMobileFiltersOpen(false)
                  }}
                />
              </div>
            </>
          )}

          {/* Product grid */}
          <div className="flex-1">
            {/* Desktop sort */}
            <div className="hidden md:flex justify-end mb-6">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-sm border border-border px-3 py-2 bg-cream text-charcoal"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-muted">No products match your filters.</p>
                <button
                  onClick={() => setSearchParams({})}
                  className="mt-4 text-accent text-sm hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map(product => (
                  <ShopProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function FilterPanel({ activeCategory, priceRange, setFilter }) {
  return (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h4 className="text-xs uppercase tracking-widest text-muted mb-3">Category</h4>
        <div className="space-y-2">
          <FilterButton
            active={activeCategory === 'all'}
            onClick={() => setFilter('category', 'all')}
          >
            All
          </FilterButton>
          {categories.map(cat => (
            <FilterButton
              key={cat.id}
              active={activeCategory === cat.id}
              onClick={() => setFilter('category', cat.id)}
            >
              {cat.name}
            </FilterButton>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="text-xs uppercase tracking-widest text-muted mb-3">Price</h4>
        <div className="space-y-2">
          <FilterButton active={priceRange === 'all'} onClick={() => setFilter('price', 'all')}>
            All Prices
          </FilterButton>
          <FilterButton active={priceRange === 'under50'} onClick={() => setFilter('price', 'under50')}>
            Under $50
          </FilterButton>
          <FilterButton active={priceRange === '50to80'} onClick={() => setFilter('price', '50to80')}>
            $50 – $80
          </FilterButton>
          <FilterButton active={priceRange === 'over80'} onClick={() => setFilter('price', 'over80')}>
            Over $80
          </FilterButton>
        </div>
      </div>

      {/* Material */}
      <div>
        <h4 className="text-xs uppercase tracking-widest text-muted mb-3">Material</h4>
        <div className="space-y-2">
          <FilterButton active={true} onClick={() => {}}>
            18K Gold Plated
          </FilterButton>
        </div>
      </div>
    </div>
  )
}

function FilterButton({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`block w-full text-left text-sm py-1.5 transition-colors ${
        active ? 'text-accent font-medium' : 'text-charcoal hover:text-accent'
      }`}
    >
      {children}
    </button>
  )
}

function ShopProductCard({ product }) {
  const { addItem } = useCart()
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] bg-ivory overflow-hidden mb-3">
          <img
            data-strk-img-id={`shop-${product.id}-img1-e5f6`}
            data-strk-img={`[shop-name-${product.id}] gold jewelry product`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="500"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.images[0].alt}
            className="absolute inset-0 w-full h-full object-cover"
          />

          <button
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              addItem(product)
            }}
            className={`absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-sm text-charcoal py-2.5 text-xs uppercase tracking-widest font-medium flex items-center justify-center gap-2 transition-all duration-300 hover:bg-accent hover:text-white ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Add to Cart
          </button>
        </div>

        <h3
          id={`shop-name-${product.id}`}
          className="font-serif text-xs md:text-sm uppercase tracking-wider text-charcoal"
        >
          {product.name}
        </h3>
        <div className="flex items-center gap-2 mt-1">
          <p className="text-sm text-muted">${product.price}</p>
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-accent text-accent' : 'text-border'}`} />
            ))}
          </div>
        </div>
      </Link>
    </div>
  )
}

function Star({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  )
}
