import React, { useState, useEffect, useMemo, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { products, categories } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'

const priceRanges = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $80', min: 50, max: 80 },
  { label: '$80+', min: 80, max: Infinity },
]

const materials = [
  { label: 'All Materials', value: 'all' },
  { label: 'Gold', value: 'gold' },
  { label: 'Silver', value: 'silver' },
]

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Top Rated', value: 'rating' },
  { label: 'Most Reviewed', value: 'reviews' },
]

export default function Collection() {
  const [searchParams, setSearchParams] = useSearchParams()
  const containerRef = useRef(null)

  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all')
  const [selectedPrice, setSelectedPrice] = useState(0)
  const [selectedMaterial, setSelectedMaterial] = useState('all')
  const [sortBy, setSortBy] = useState('featured')
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false)

  useEffect(() => {
    const cat = searchParams.get('category')
    if (cat) setSelectedCategory(cat)
  }, [searchParams])

  useEffect(() => {
    if (containerRef.current) {
      const frameId = requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current)
      })
      return () => cancelAnimationFrame(frameId)
    }
  }, [selectedCategory, selectedPrice, selectedMaterial, sortBy])

  const filteredProducts = useMemo(() => {
    let filtered = [...products]

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(p => p.category === selectedCategory)
    }

    const priceRange = priceRanges[selectedPrice]
    filtered = filtered.filter(p => p.price >= priceRange.min && p.price < priceRange.max)

    if (selectedMaterial !== 'all') {
      filtered = filtered.filter(p => p.material === selectedMaterial)
    }

    switch (sortBy) {
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating)
        break
      case 'reviews':
        filtered.sort((a, b) => b.reviewCount - a.reviewCount)
        break
      default:
        break
    }

    return filtered
  }, [selectedCategory, selectedPrice, selectedMaterial, sortBy])

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat)
    if (cat === 'all') {
      searchParams.delete('category')
    } else {
      searchParams.set('category', cat)
    }
    setSearchParams(searchParams)
  }

  const FilterSidebar = ({ mobile = false }) => (
    <div className={`${mobile ? '' : 'hidden lg:block'} space-y-8`}>
      {/* Category */}
      <div>
        <h3 className="font-sans text-xs tracking-wider uppercase text-charcoal mb-4">Category</h3>
        <div className="space-y-2">
          <button
            onClick={() => handleCategoryChange('all')}
            className={`block text-sm transition-colors ${
              selectedCategory === 'all' ? 'text-charcoal font-medium' : 'text-charcoal-400 hover:text-charcoal'
            }`}
          >
            All Jewelry
          </button>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`block text-sm transition-colors ${
                selectedCategory === cat.id ? 'text-charcoal font-medium' : 'text-charcoal-400 hover:text-charcoal'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="font-sans text-xs tracking-wider uppercase text-charcoal mb-4">Price</h3>
        <div className="space-y-2">
          {priceRanges.map((range, idx) => (
            <button
              key={range.label}
              onClick={() => setSelectedPrice(idx)}
              className={`block text-sm transition-colors ${
                selectedPrice === idx ? 'text-charcoal font-medium' : 'text-charcoal-400 hover:text-charcoal'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="font-sans text-xs tracking-wider uppercase text-charcoal mb-4">Material</h3>
        <div className="space-y-2">
          {materials.map(mat => (
            <button
              key={mat.value}
              onClick={() => setSelectedMaterial(mat.value)}
              className={`block text-sm transition-colors ${
                selectedMaterial === mat.value ? 'text-charcoal font-medium' : 'text-charcoal-400 hover:text-charcoal'
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
    <main ref={containerRef} className="bg-cream min-h-screen">
      {/* Header */}
      <div className="bg-charcoal py-20 md:py-28 text-center">
        <p className="font-sans text-xs tracking-superwide uppercase text-gold mb-3">Explore</p>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white">
          {selectedCategory !== 'all'
            ? categories.find(c => c.id === selectedCategory)?.name || 'Collection'
            : 'Our Collection'}
        </h1>
        <p className="font-sans text-sm text-white/50 mt-3 max-w-lg mx-auto">
          Every piece is 18K gold plated, hypoallergenic, and designed to be worn every day.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMobileFilterOpen(true)}
              className="lg:hidden flex items-center gap-2 text-xs tracking-wider uppercase text-charcoal-500 hover:text-charcoal transition-colors"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>
            <p className="text-sm text-charcoal-400">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
            </p>
          </div>

          <div className="relative">
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
              className="appearance-none bg-transparent text-xs tracking-wider uppercase text-charcoal-500 pr-8 pl-2 py-2 border-b border-charcoal-200 focus:outline-none focus:border-charcoal cursor-pointer"
            >
              {sortOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
            <ChevronDown className="w-3 h-3 text-charcoal-400 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-12">
          {/* Desktop sidebar */}
          <aside className="w-48 flex-shrink-0">
            <FilterSidebar />
          </aside>

          {/* Mobile filter overlay */}
          {mobileFilterOpen && (
            <div className="fixed inset-0 z-50 lg:hidden">
              <div className="absolute inset-0 bg-charcoal/50" onClick={() => setMobileFilterOpen(false)} />
              <div className="absolute top-0 left-0 h-full w-80 bg-cream shadow-2xl p-6 overflow-y-auto">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="font-serif text-xl text-charcoal">Filters</h2>
                  <button onClick={() => setMobileFilterOpen(false)} className="p-2 text-charcoal-400">
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <FilterSidebar mobile />
              </div>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-charcoal-300 mb-4">No pieces found</p>
                <button
                  onClick={() => {
                    setSelectedCategory('all')
                    setSelectedPrice(0)
                    setSelectedMaterial('all')
                  }}
                  className="btn-outline"
                >
                  Clear Filters
                </button>
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
    </main>
  )
}
