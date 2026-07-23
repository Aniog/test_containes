import { useState, useEffect, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import ProductCard from '@/components/product/ProductCard'
import { products, categories } from '@/data/products'

const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 - $75', min: 50, max: 75 },
  { label: '$75 - $100', min: 75, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
]

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Newest', value: 'newest' },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const containerRef = useRef(null)

  const initialCategory = searchParams.get('category') || ''
  const [selectedCategory, setSelectedCategory] = useState(initialCategory)
  const [selectedPrice, setSelectedPrice] = useState('')
  const [selectedMaterial, setSelectedMaterial] = useState('')
  const [sortBy, setSortBy] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  useEffect(() => {
    const cat = searchParams.get('category') || ''
    setSelectedCategory(cat)
  }, [searchParams])

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [selectedCategory, selectedPrice, sortBy])

  const filteredProducts = products.filter(p => {
    if (selectedCategory && p.category !== selectedCategory) return false
    if (selectedPrice) {
      const range = priceRanges.find(r => r.label === selectedPrice)
      if (range && (p.price < range.min || p.price >= range.max)) return false
    }
    return true
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price
    if (sortBy === 'price-desc') return b.price - a.price
    return 0
  })

  const clearFilters = () => {
    setSelectedCategory('')
    setSelectedPrice('')
    setSelectedMaterial('')
    setSearchParams({})
  }

  const hasFilters = selectedCategory || selectedPrice || selectedMaterial

  return (
    <div ref={containerRef} className="pt-20 md:pt-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h1 id="shop-title" className="font-serif text-3xl md:text-4xl text-velmora-charcoal tracking-wide">
            {selectedCategory ? `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}` : 'All Jewelry'}
          </h1>
          <p id="shop-subtitle" className="font-sans text-sm text-velmora-muted mt-3">
            Discover pieces crafted to complement your everyday
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Mobile filter toggle */}
          <button
            onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
            className="md:hidden flex items-center gap-2 font-sans text-sm tracking-product text-velmora-charcoal"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters {hasFilters ? '(Active)' : ''}
          </button>

          {/* Sidebar filters */}
          <aside className={`${mobileFiltersOpen ? 'block' : 'hidden'} md:block w-full md:w-56 flex-shrink-0`}>
            <div className="md:sticky md:top-24">
              {/* Category */}
              <div className="mb-6">
                <h3 className="font-sans text-xs tracking-product text-velmora-muted mb-3">CATEGORY</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => { setSelectedCategory(''); setSearchParams({}) }}
                    className={`block font-sans text-sm transition-colors ${!selectedCategory ? 'text-velmora-gold' : 'text-velmora-charcoal hover:text-velmora-gold'}`}
                  >
                    All
                  </button>
                  {categories.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => { setSelectedCategory(cat.id); setSearchParams({ category: cat.id }) }}
                      className={`block font-sans text-sm transition-colors ${selectedCategory === cat.id ? 'text-velmora-gold' : 'text-velmora-charcoal hover:text-velmora-gold'}`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div className="mb-6">
                <h3 className="font-sans text-xs tracking-product text-velmora-muted mb-3">PRICE</h3>
                <div className="space-y-2">
                  {priceRanges.map(range => (
                    <button
                      key={range.label}
                      onClick={() => setSelectedPrice(selectedPrice === range.label ? '' : range.label)}
                      className={`block font-sans text-sm transition-colors ${selectedPrice === range.label ? 'text-velmora-gold' : 'text-velmora-charcoal hover:text-velmora-gold'}`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material */}
              <div className="mb-6">
                <h3 className="font-sans text-xs tracking-product text-velmora-muted mb-3">MATERIAL</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedMaterial(selectedMaterial === 'gold' ? '' : 'gold')}
                    className={`block font-sans text-sm transition-colors ${selectedMaterial === 'gold' ? 'text-velmora-gold' : 'text-velmora-charcoal hover:text-velmora-gold'}`}
                  >
                    18K Gold Plated
                  </button>
                  <button
                    onClick={() => setSelectedMaterial(selectedMaterial === 'silver' ? '' : 'silver')}
                    className={`block font-sans text-sm transition-colors ${selectedMaterial === 'silver' ? 'text-velmora-gold' : 'text-velmora-charcoal hover:text-velmora-gold'}`}
                  >
                    Silver Tone
                  </button>
                </div>
              </div>

              {/* Clear filters */}
              {hasFilters && (
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-1 font-sans text-xs tracking-product text-velmora-gold hover:text-velmora-gold-dark transition-colors"
                >
                  <X className="w-3 h-3" />
                  Clear All Filters
                </button>
              )}
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {/* Sort bar */}
            <div className="flex items-center justify-between mb-6">
              <p className="font-sans text-xs text-velmora-muted">{sortedProducts.length} products</p>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="font-sans text-xs text-velmora-charcoal bg-transparent border border-velmora-sand rounded px-3 py-2 focus:outline-none focus:border-velmora-gold"
              >
                {sortOptions.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>

            {sortedProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="font-serif text-xl text-velmora-charcoal">No products found</p>
                <p className="font-sans text-sm text-velmora-muted mt-2">Try adjusting your filters</p>
                <button
                  onClick={clearFilters}
                  className="mt-4 font-sans text-sm tracking-product text-velmora-gold hover:text-velmora-gold-dark transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {sortedProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
