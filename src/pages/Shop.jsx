import React, { useState, useMemo, useRef, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Star, SlidersHorizontal, X } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products, categories } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [sortBy, setSortBy] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const { addItem, openCart } = useCart()
  const sectionRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, sectionRef.current)
  }, [])

  const activeCategory = searchParams.get('category') || 'all'
  const priceRange = searchParams.get('price') || 'all'

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (activeCategory !== 'all') {
      result = result.filter((p) => p.category === activeCategory)
    }

    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number)
      result = result.filter((p) => p.price >= min && (max ? p.price <= max : true))
    }

    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        result.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        result.sort((a, b) => b.rating - a.rating)
        break
      default:
        break
    }

    return result
  }, [activeCategory, priceRange, sortBy])

  const handleCategoryChange = (cat) => {
    const params = new URLSearchParams(searchParams)
    if (cat === 'all') {
      params.delete('category')
    } else {
      params.set('category', cat)
    }
    setSearchParams(params)
  }

  const handlePriceChange = (range) => {
    const params = new URLSearchParams(searchParams)
    if (range === 'all') {
      params.delete('price')
    } else {
      params.set('price', range)
    }
    setSearchParams(params)
  }

  const handleAddToCart = (e, product) => {
    e.preventDefault()
    e.stopPropagation()
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      variant: 'Gold Tone',
      quantity: 1,
      image: product.images[0],
      titleId: product.titleId,
    })
    openCart()
  }

  const priceRanges = [
    { label: 'All Prices', value: 'all' },
    { label: 'Under $50', value: '0-50' },
    { label: '$50 - $75', value: '50-75' },
    { label: '$75 - $100', value: '75-100' },
    { label: 'Over $100', value: '100-1000' },
  ]

  const FilterSidebar = () => (
    <div className="space-y-8">
      {/* Categories */}
      <div>
        <h3 className="text-xs uppercase tracking-[0.12em] text-dark font-medium mb-3">Category</h3>
        <div className="space-y-2">
          <button
            onClick={() => handleCategoryChange('all')}
            className={cn(
              'block text-sm w-full text-left py-1 transition-colors',
              activeCategory === 'all' ? 'text-gold font-medium' : 'text-taupe hover:text-dark'
            )}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={cn(
                'block text-sm w-full text-left py-1 transition-colors',
                activeCategory === cat.id ? 'text-gold font-medium' : 'text-taupe hover:text-dark'
              )}
            >
              {cat.name} ({cat.count})
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="text-xs uppercase tracking-[0.12em] text-dark font-medium mb-3">Price</h3>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <button
              key={range.value}
              onClick={() => handlePriceChange(range.value)}
              className={cn(
                'block text-sm w-full text-left py-1 transition-colors',
                priceRange === range.value ? 'text-gold font-medium' : 'text-taupe hover:text-dark'
              )}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <div ref={sectionRef} className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page header */}
        <div className="mb-10">
          <h1 className="font-serif text-3xl md:text-4xl text-dark font-light">
            {activeCategory === 'all' ? 'All Jewelry' : categories.find((c) => c.id === activeCategory)?.name || 'Jewelry'}
          </h1>
          <div className="w-12 h-0.5 bg-gold mt-3" />
          <p className="text-taupe text-sm mt-3">{filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}</p>
        </div>

        <div className="flex gap-8">
          {/* Sidebar (desktop) */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <FilterSidebar />
          </aside>

          {/* Main content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-taupe-sand">
              <button
                className="lg:hidden flex items-center gap-2 text-sm text-taupe hover:text-dark transition-colors"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
              </button>

              <div className="flex items-center gap-2 ml-auto">
                <label className="text-xs text-taupe">Sort by:</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="text-sm bg-transparent border border-taupe-sand px-3 py-1.5 focus:outline-none focus:border-gold"
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>

            {/* Product grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-lg text-taupe">No pieces found</p>
                <p className="text-sm text-taupe-light mt-1">Try adjusting your filters</p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => {
                    setSearchParams({})
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <Link
                    key={product.id}
                    to={`/product/${product.id}`}
                    className="group"
                  >
                    <div className="relative aspect-[3/4] overflow-hidden bg-taupe-sand/20">
                      <img
                        data-strk-img-id={`shop-${product.imgId}`}
                        data-strk-img={`[${product.descId}] [${product.titleId}] [shop-title]`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="600"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                        <button
                          onClick={(e) => handleAddToCart(e, product)}
                          className="w-full bg-white/95 backdrop-blur-sm text-dark text-xs uppercase tracking-[0.08em] py-2.5 hover:bg-gold hover:text-white transition-all duration-300"
                        >
                          Quick Add
                        </button>
                      </div>
                    </div>
                    <div className="mt-3 space-y-1">
                      <h3 id={product.titleId} className="font-serif text-xs uppercase tracking-[0.12em] text-dark">
                        {product.name}
                      </h3>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 fill-gold text-gold" />
                        <span className="text-xs text-taupe">{product.rating}</span>
                      </div>
                      <p className="text-sm text-dark font-medium">${product.price}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      <div
        className={cn(
          'fixed inset-0 z-50 lg:hidden',
          mobileFiltersOpen ? 'pointer-events-auto' : 'pointer-events-none'
        )}
      >
        <div
          className={cn(
            'absolute inset-0 bg-black/40 transition-opacity duration-300',
            mobileFiltersOpen ? 'opacity-100' : 'opacity-0'
          )}
          onClick={() => setMobileFiltersOpen(false)}
        />
        <div
          className={cn(
            'absolute top-0 left-0 bottom-0 w-72 bg-cream shadow-xl transform transition-transform duration-300',
            mobileFiltersOpen ? 'translate-x-0' : '-translate-x-full'
          )}
        >
          <div className="flex items-center justify-between px-6 py-5 border-b border-taupe-sand">
            <h3 className="text-xs uppercase tracking-[0.12em] text-dark font-medium">Filters</h3>
            <button onClick={() => setMobileFiltersOpen(false)} className="p-1 hover:opacity-60">
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="px-6 py-6">
            <FilterSidebar />
          </div>
        </div>
      </div>

      <h2 id="shop-title" className="sr-only">Shop Velmora</h2>
    </div>
  )
}