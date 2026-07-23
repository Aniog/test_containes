import React, { useState, useEffect, useRef } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { ShoppingBag, Filter, X, ChevronDown } from 'lucide-react'
import { products, categories } from '@/lib/data'
import { useCart } from '@/lib/CartContext'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const containerRef = useRef(null)
  const { addItem } = useCart()

  const [mobileFilterOpen, setMobileFilterOpen] = useState(false)
  const [hoveredProduct, setHoveredProduct] = useState(null)

  const activeCategory = searchParams.get('category') || 'all'
  const sortBy = searchParams.get('sort') || 'default'
  const priceRange = searchParams.get('price') || 'all'

  const setCategory = (cat) => {
    const params = new URLSearchParams(searchParams)
    if (cat === 'all') params.delete('category')
    else params.set('category', cat)
    setSearchParams(params)
  }

  const setSort = (sort) => {
    const params = new URLSearchParams(searchParams)
    if (sort === 'default') params.delete('sort')
    else params.set('sort', sort)
    setSearchParams(params)
  }

  const setPrice = (price) => {
    const params = new URLSearchParams(searchParams)
    if (price === 'all') params.delete('price')
    else params.set('price', price)
    setSearchParams(params)
  }

  // Filter and sort products
  let filtered = [...products]

  if (activeCategory !== 'all') {
    filtered = filtered.filter(p => p.category === activeCategory)
  }

  if (priceRange === 'under50') {
    filtered = filtered.filter(p => p.price < 50)
  } else if (priceRange === '50to80') {
    filtered = filtered.filter(p => p.price >= 50 && p.price <= 80)
  } else if (priceRange === 'over80') {
    filtered = filtered.filter(p => p.price > 80)
  }

  if (sortBy === 'price-low') {
    filtered.sort((a, b) => a.price - b.price)
  } else if (sortBy === 'price-high') {
    filtered.sort((a, b) => b.price - a.price)
  } else if (sortBy === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating)
  }

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [activeCategory, sortBy, priceRange])

  const FilterPanel = ({ mobile = false }) => (
    <div className={`${mobile ? 'p-6' : ''}`}>
      {/* Category filter */}
      <div className="mb-6">
        <p className="font-sans text-xs uppercase tracking-nav text-foreground mb-3">Category</p>
        <div className="space-y-2">
          <button
            onClick={() => setCategory('all')}
            className={`block font-sans text-sm transition-colors duration-300 ${
              activeCategory === 'all' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            All Jewelry
          </button>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setCategory(cat.id)}
              className={`block font-sans text-sm transition-colors duration-300 ${
                activeCategory === cat.id ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price filter */}
      <div className="mb-6">
        <p className="font-sans text-xs uppercase tracking-nav text-foreground mb-3">Price</p>
        <div className="space-y-2">
          {[
            { value: 'all', label: 'All Prices' },
            { value: 'under50', label: 'Under $50' },
            { value: '50to80', label: '$50 – $80' },
            { value: 'over80', label: 'Over $80' },
          ].map(option => (
            <button
              key={option.value}
              onClick={() => setPrice(option.value)}
              className={`block font-sans text-sm transition-colors duration-300 ${
                priceRange === option.value ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material filter */}
      <div>
        <p className="font-sans text-xs uppercase tracking-nav text-foreground mb-3">Material</p>
        <div className="space-y-2">
          <button className="block font-sans text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
            18K Gold Plated
          </button>
          <button className="block font-sans text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
            Sterling Silver
          </button>
        </div>
      </div>
    </div>
  )

  return (
    <section ref={containerRef} className="pt-24 md:pt-28 pb-20 md:pb-28">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Page header */}
        <div className="text-center mb-12">
          <h1 className="font-serif font-light text-3xl md:text-4xl text-foreground">The Collection</h1>
          <p className="font-sans text-sm text-muted-foreground mt-3">Explore our curated selection of demi-fine jewelry</p>
        </div>

        {/* Sort bar + mobile filter toggle */}
        <div className="flex items-center justify-between mb-8 border-b border-border pb-4">
          <button
            onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
            className="md:hidden font-sans text-xs uppercase tracking-nav text-foreground flex items-center gap-2"
          >
            <Filter className="w-4 h-4" />
            Filters
          </button>

          <p className="font-sans text-xs text-muted-foreground">{filtered.length} pieces</p>

          {/* Sort dropdown */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSort(e.target.value)}
              className="font-sans text-xs uppercase tracking-nav text-muted-foreground bg-transparent border border-border rounded-sm px-3 py-2 appearance-none cursor-pointer focus:outline-none focus:border-primary"
            >
              <option value="default">Sort: Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
            <ChevronDown className="w-3 h-3 text-muted-foreground absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Mobile filter overlay */}
        {mobileFilterOpen && (
          <div className="md:hidden fixed inset-0 z-40 bg-black/50" onClick={() => setMobileFilterOpen(false)}>
            <div className="absolute left-0 top-0 h-full w-72 bg-background shadow-lg p-6" onClick={e => e.stopPropagation()}>
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-sans text-xs uppercase tracking-nav text-foreground">Filters</h3>
                <button onClick={() => setMobileFilterOpen(false)} className="text-muted-foreground hover:text-foreground">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <FilterPanel mobile />
            </div>
          </div>
        )}

        <div className="flex gap-8">
          {/* Desktop sidebar */}
          <div className="hidden md:block w-56 flex-shrink-0">
            <FilterPanel />
          </div>

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-lg text-foreground">No pieces found</p>
                <p className="font-sans text-sm text-muted-foreground mt-2">Try adjusting your filters</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {filtered.map(product => (
                  <div
                    key={product.id}
                    className="group relative"
                    onMouseEnter={() => setHoveredProduct(product.id)}
                    onMouseLeave={() => setHoveredProduct(null)}
                  >
                    <Link to={`/product/${product.id}`} className="block">
                      <div className="relative aspect-[3x4] bg-dark-gray overflow-hidden rounded-sm">
                        <img
                          data-strk-img-id={hoveredProduct === product.id ? product.imgId2 : product.imgId}
                          data-strk-img={`[${product.descId}] [${product.titleId}] collection`}
                          data-strk-img-ratio="3x4"
                          data-strk-img-width="600"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    </Link>

                    {/* Quick add */}
                    <button
                      onClick={() => addItem(product)}
                      className={`absolute bottom-4 right-4 bg-primary text-primary-foreground font-sans text-xs uppercase tracking-nav px-4 py-2 hover:bg-muted-gold transition-all duration-300 flex items-center gap-2 ${
                        hoveredProduct === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                      }`}
                    >
                      <ShoppingBag className="w-3 h-3" />
                      Add to Cart
                    </button>

                    <div className="mt-4">
                      <Link to={`/product/${product.id}`}>
                        <h3 className="font-serif font-light text-sm uppercase tracking-product text-foreground group-hover:text-primary transition-colors duration-300">
                          {product.name}
                        </h3>
                      </Link>
                      <p className="font-sans text-sm font-medium text-primary mt-2">${product.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Shop
