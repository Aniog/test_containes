import React, { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import ProductCard from '../components/ui/ProductCard'
import { products } from '../data/products'

const categories = ['All', 'Earrings', 'Necklaces', 'Huggies']
const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $80', min: 50, max: 80 },
  { label: 'Over $80', min: 80, max: Infinity },
]
const materials = ['All', 'Gold', 'Silver', 'Rose Gold']
const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Newest', value: 'newest' },
]

export default function ShopPage() {
  const [searchParams] = useSearchParams()
  const initialCategory = searchParams.get('category')
  const [activeCategory, setActiveCategory] = useState(
    initialCategory ? initialCategory.charAt(0).toUpperCase() + initialCategory.slice(1) : 'All'
  )
  const [activePrice, setActivePrice] = useState(null)
  const [activeMaterial, setActiveMaterial] = useState('All')
  const [sort, setSort] = useState('featured')
  const [showFilters, setShowFilters] = useState(false)

  const filtered = useMemo(() => {
    let result = [...products]

    if (activeCategory !== 'All') {
      result = result.filter(p => p.category === activeCategory)
    }
    if (activePrice) {
      result = result.filter(p => p.price >= activePrice.min && p.price < activePrice.max)
    }
    if (activeMaterial !== 'All') {
      result = result.filter(p => p.variants.includes(activeMaterial))
    }

    switch (sort) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        result.sort((a, b) => b.price - a.price)
        break
      case 'newest':
        result.sort((a, b) => b.id - a.id)
        break
      default:
        break
    }

    return result
  }, [activeCategory, activePrice, activeMaterial, sort])

  const clearFilters = () => {
    setActiveCategory('All')
    setActivePrice(null)
    setActiveMaterial('All')
  }

  const hasFilters = activeCategory !== 'All' || activePrice || activeMaterial !== 'All'

  return (
    <main className="pt-24 md:pt-28 pb-16 bg-ivory min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl md:text-4xl tracking-ultra-wide uppercase text-text-primary">
            The Collection
          </h1>
          <div className="w-12 h-px bg-muted-gold mx-auto mt-4" />
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-warm-charcoal/10">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 text-xs uppercase tracking-widest text-text-secondary hover:text-muted-gold transition-colors md:pointer-events-none"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          <div className="flex items-center gap-4">
            <span className="text-xs text-text-muted">{filtered.length} pieces</span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="text-xs text-text-secondary bg-transparent border-none focus:outline-none cursor-pointer"
            >
              {sortOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar Filters - Desktop */}
          <aside className={`fixed inset-0 z-50 bg-warm-white md:static md:z-auto md:bg-transparent md:block ${showFilters ? 'block' : 'hidden'} md:w-56 flex-shrink-0`}>
            <div className="p-6 md:p-0 h-full overflow-y-auto">
              <div className="flex items-center justify-between md:hidden mb-6">
                <h3 className="font-serif text-lg tracking-wide uppercase">Filters</h3>
                <button onClick={() => setShowFilters(false)} className="p-1">
                  <X className="w-5 h-5 text-text-secondary" />
                </button>
              </div>

              {/* Category */}
              <div className="mb-6">
                <h4 className="text-xs uppercase tracking-widest text-text-muted font-medium mb-3">Category</h4>
                <div className="space-y-2">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => { setActiveCategory(cat); setShowFilters(false) }}
                      className={`block text-sm transition-colors ${activeCategory === cat ? 'text-muted-gold font-medium' : 'text-text-secondary hover:text-muted-gold'}`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div className="mb-6">
                <h4 className="text-xs uppercase tracking-widest text-text-muted font-medium mb-3">Price</h4>
                <div className="space-y-2">
                  <button
                    onClick={() => setActivePrice(null)}
                    className={`block text-sm transition-colors ${!activePrice ? 'text-muted-gold font-medium' : 'text-text-secondary hover:text-muted-gold'}`}
                  >
                    All Prices
                  </button>
                  {priceRanges.map(range => (
                    <button
                      key={range.label}
                      onClick={() => { setActivePrice(range); setShowFilters(false) }}
                      className={`block text-sm transition-colors ${activePrice?.label === range.label ? 'text-muted-gold font-medium' : 'text-text-secondary hover:text-muted-gold'}`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material */}
              <div className="mb-6">
                <h4 className="text-xs uppercase tracking-widest text-text-muted font-medium mb-3">Material</h4>
                <div className="space-y-2">
                  {materials.map(mat => (
                    <button
                      key={mat}
                      onClick={() => { setActiveMaterial(mat); setShowFilters(false) }}
                      className={`block text-sm transition-colors ${activeMaterial === mat ? 'text-muted-gold font-medium' : 'text-text-secondary hover:text-muted-gold'}`}
                    >
                      {mat}
                    </button>
                  ))}
                </div>
              </div>

              {hasFilters && (
                <button
                  onClick={clearFilters}
                  className="text-xs uppercase tracking-widest text-muted-gold underline hover:text-bright-gold transition-colors"
                >
                  Clear All
                </button>
              )}
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-text-secondary">No pieces match your filters</p>
                <button
                  onClick={clearFilters}
                  className="mt-4 text-sm text-muted-gold underline hover:text-bright-gold transition-colors"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product, i) => (
                  <ProductCard key={product.id} product={product} index={i + 20} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
