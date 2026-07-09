import { useState, useMemo, useRef, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'

const categories = ['all', 'earrings', 'necklaces', 'huggies']
const priceRanges = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 – $60', min: 40, max: 60 },
  { label: '$60 – $100', min: 60, max: 100 },
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

  const initialCategory = searchParams.get('category') || 'all'
  const [category, setCategory] = useState(initialCategory)
  const [priceRange, setPriceRange] = useState(0)
  const [sort, setSort] = useState('featured')
  const [showFilters, setShowFilters] = useState(false)

  useEffect(() => {
    const cat = searchParams.get('category')
    if (cat && categories.includes(cat)) {
      setCategory(cat)
    }
  }, [searchParams])

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [category, priceRange, sort])

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (category !== 'all') {
      result = result.filter(p => p.category === category)
    }

    const range = priceRanges[priceRange]
    result = result.filter(p => p.price >= range.min && p.price < range.max)

    switch (sort) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        result.sort((a, b) => b.price - a.price)
        break
      default:
        break
    }

    return result
  }, [category, priceRange, sort])

  const handleCategoryChange = (cat) => {
    setCategory(cat)
    if (cat === 'all') {
      searchParams.delete('category')
    } else {
      searchParams.set('category', cat)
    }
    setSearchParams(searchParams)
  }

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      {/* Header */}
      <div className="bg-brand-ivory py-12 md:py-16 border-b border-brand-sand">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h1 className="font-serif text-3xl md:text-5xl text-brand-charcoal font-light">
            {category === 'all' ? 'All Jewelry' : category.charAt(0).toUpperCase() + category.slice(1)}
          </h1>
          <p className="text-sm text-brand-muted mt-3 font-sans">
            Discover our curated collection of demi-fine pieces
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="md:hidden flex items-center gap-2 text-sm font-sans text-brand-charcoal"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>
          <p className="text-sm text-brand-muted font-sans hidden md:block">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="text-sm font-sans text-brand-charcoal bg-transparent border border-brand-sand px-3 py-2 focus:outline-none focus:border-brand-gold"
          >
            {sortOptions.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>

        <div className="flex gap-8">
          {/* Sidebar filters */}
          <aside className={`${showFilters ? 'fixed inset-0 z-50 bg-brand-cream p-6 overflow-y-auto' : 'hidden'} md:block md:static md:w-56 flex-shrink-0`}>
            {showFilters && (
              <div className="flex justify-between items-center mb-6 md:hidden">
                <h3 className="font-serif text-xl text-brand-charcoal">Filters</h3>
                <button onClick={() => setShowFilters(false)} aria-label="Close filters">
                  <X className="w-5 h-5" />
                </button>
              </div>
            )}

            {/* Category filter */}
            <div className="mb-8">
              <h4 className="text-xs font-sans font-medium tracking-widest uppercase text-brand-charcoal mb-4">Category</h4>
              <div className="space-y-2">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => handleCategoryChange(cat)}
                    className={`block w-full text-left text-sm font-sans py-1.5 transition-colors capitalize ${
                      category === cat ? 'text-brand-gold font-medium' : 'text-brand-muted hover:text-brand-charcoal'
                    }`}
                  >
                    {cat === 'all' ? 'All Jewelry' : cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Price filter */}
            <div className="mb-8">
              <h4 className="text-xs font-sans font-medium tracking-widest uppercase text-brand-charcoal mb-4">Price</h4>
              <div className="space-y-2">
                {priceRanges.map((range, i) => (
                  <button
                    key={i}
                    onClick={() => setPriceRange(i)}
                    className={`block w-full text-left text-sm font-sans py-1.5 transition-colors ${
                      priceRange === i ? 'text-brand-gold font-medium' : 'text-brand-muted hover:text-brand-charcoal'
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>

            {showFilters && (
              <button
                onClick={() => setShowFilters(false)}
                className="md:hidden w-full bg-brand-gold text-white py-3 text-sm tracking-widest uppercase font-sans font-medium mt-4"
              >
                Apply Filters
              </button>
            )}
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="font-serif text-xl text-brand-charcoal">No pieces found</p>
                <p className="text-sm text-brand-muted mt-2 font-sans">Try adjusting your filters</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map(product => (
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
