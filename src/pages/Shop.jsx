import { useState, useEffect, useRef, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'

const categoryOptions = [
  { value: 'all', label: 'All' },
  { value: 'earrings', label: 'Earrings' },
  { value: 'necklaces', label: 'Necklaces' },
  { value: 'huggies', label: 'Huggies' },
]

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'newest', label: 'Newest' },
]

export default function Shop() {
  const containerRef = useRef(null)
  const [searchParams, setSearchParams] = useSearchParams()
  const [filterOpen, setFilterOpen] = useState(false)
  const [sort, setSort] = useState('featured')

  const category = searchParams.get('category') || 'all'

  const setCategory = (cat) => {
    if (cat === 'all') {
      searchParams.delete('category')
    } else {
      searchParams.set('category', cat)
    }
    setSearchParams(searchParams)
  }

  const filteredProducts = useMemo(() => {
    let result = [...products]
    if (category !== 'all') {
      result = result.filter(p => p.category === category)
    }
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
  }, [category, sort])

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [category, sort])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <h1 className="font-serif text-3xl md:text-4xl text-charcoal text-center mb-2">Shop All Jewelry</h1>
        <p className="text-stone text-sm text-center">Timeless pieces designed for everyday elegance.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-16">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-taupe">
          <button
            onClick={() => setFilterOpen(!filterOpen)}
            className="md:hidden flex items-center gap-2 text-sm text-charcoal"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          <div className="hidden md:flex items-center gap-2">
            {categoryOptions.map(opt => (
              <button
                key={opt.value}
                onClick={() => setCategory(opt.value)}
                className={`px-4 py-1.5 rounded-full text-xs uppercase tracking-[0.1em] border transition-all duration-300 ${
                  category === opt.value
                    ? 'border-charcoal bg-charcoal text-cream'
                    : 'border-taupe text-stone hover:border-charcoal hover:text-charcoal'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-stone hidden sm:inline">Sort by:</span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="text-xs text-charcoal bg-transparent border border-taupe px-3 py-1.5 focus:outline-none focus:border-charcoal cursor-pointer"
            >
              {sortOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Mobile Filters */}
        {filterOpen && (
          <div className="md:hidden mb-6 p-4 border border-taupe bg-cream">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-charcoal">Category</span>
              <button onClick={() => setFilterOpen(false)} aria-label="Close filters">
                <X className="w-4 h-4 text-stone" />
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {categoryOptions.map(opt => (
                <button
                  key={opt.value}
                  onClick={() => { setCategory(opt.value); setFilterOpen(false) }}
                  className={`px-3 py-1.5 rounded-full text-xs uppercase tracking-[0.08em] border transition-all ${
                    category === opt.value
                      ? 'border-charcoal bg-charcoal text-cream'
                      : 'border-taupe text-stone'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="font-serif text-xl text-charcoal">No products found</p>
            <p className="text-sm text-stone mt-2">Try adjusting your filters.</p>
          </div>
        )}
      </div>
    </div>
  )
}
