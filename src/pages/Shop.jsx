import React, { useState, useMemo, useEffect, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import ProductCard from '@/components/ui/ProductCard'

const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
]

const PRICE_RANGES = [
  { value: 'all', label: 'All Prices' },
  { value: '0-50', label: 'Under $50' },
  { value: '50-80', label: '$50 – $80' },
  { value: '80-120', label: '$80 – $120' },
]

export default function ShopPage() {
  const containerRef = useRef(null)
  const [searchParams, setSearchParams] = useSearchParams()
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [sort, setSort] = useState('featured')

  const categoryParam = searchParams.get('category') || 'all'
  const [category, setCategory] = useState(categoryParam)
  const [priceRange, setPriceRange] = useState('all')
  const [material, setMaterial] = useState('all')

  useEffect(() => {
    const cat = searchParams.get('category')
    if (cat) setCategory(cat)
  }, [searchParams])

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [category, priceRange, material, sort])

  const filtered = useMemo(() => {
    let result = [...products]

    if (category !== 'all') {
      result = result.filter(p => p.category === category)
    }
    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number)
      result = result.filter(p => p.price >= min && p.price <= max)
    }
    if (material !== 'all') {
      result = result.filter(p => p.material === material)
    }

    switch (sort) {
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
  }, [category, priceRange, material, sort])

  const handleCategoryChange = (cat) => {
    setCategory(cat)
    if (cat === 'all') {
      setSearchParams({})
    } else {
      setSearchParams({ category: cat })
    }
  }

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="text-xs tracking-[0.1em] uppercase font-medium text-warm-black mb-3">Category</h3>
        <div className="space-y-2">
          {['all', 'earrings', 'necklaces', 'huggies'].map(cat => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`block w-full text-left text-sm py-1 transition-colors ${
                category === cat ? 'text-gold font-medium' : 'text-warm-tan hover:text-warm-black'
              }`}
            >
              {cat === 'all' ? 'All Jewelry' : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="text-xs tracking-[0.1em] uppercase font-medium text-warm-black mb-3">Price</h3>
        <div className="space-y-2">
          {PRICE_RANGES.map(range => (
            <button
              key={range.value}
              onClick={() => setPriceRange(range.value)}
              className={`block w-full text-left text-sm py-1 transition-colors ${
                priceRange === range.value ? 'text-gold font-medium' : 'text-warm-tan hover:text-warm-black'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="text-xs tracking-[0.1em] uppercase font-medium text-warm-black mb-3">Material</h3>
        <div className="space-y-2">
          {['all', '18K Gold Plated'].map(mat => (
            <button
              key={mat}
              onClick={() => setMaterial(mat)}
              className={`block w-full text-left text-sm py-1 transition-colors ${
                material === mat ? 'text-gold font-medium' : 'text-warm-tan hover:text-warm-black'
              }`}
            >
              {mat === 'all' ? 'All Materials' : mat}
            </button>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <div ref={containerRef} className="pt-24 md:pt-28 pb-16 bg-ivory min-h-screen">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl md:text-4xl text-warm-black font-light">The Collection</h1>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="md:hidden flex items-center gap-2 text-xs tracking-[0.1em] uppercase text-warm-tan"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>
          <p className="text-sm text-warm-tan">{filtered.length} pieces</p>
          <div className="relative">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="appearance-none bg-transparent text-xs tracking-[0.1em] uppercase text-warm-tan pr-6 cursor-pointer focus:outline-none"
            >
              {SORT_OPTIONS.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 text-warm-tan pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-8">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-warm-tan">No pieces match your filters</p>
                <button
                  onClick={() => { setCategory('all'); setPriceRange('all'); setMaterial('all'); setSearchParams({}); }}
                  className="btn-secondary mt-6"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filtered.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <>
          <div className="fixed inset-0 bg-black/40 z-40" onClick={() => setMobileFiltersOpen(false)} />
          <div className="fixed left-0 top-0 h-full w-72 bg-ivory z-50 shadow-2xl p-6 overflow-y-auto animate-fade-in">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xs tracking-[0.1em] uppercase font-medium text-warm-black">Filters</h3>
              <button onClick={() => setMobileFiltersOpen(false)} className="p-1">
                <X className="w-5 h-5 text-warm-tan" />
              </button>
            </div>
            <FilterContent />
          </div>
        </>
      )}
    </div>
  )
}
