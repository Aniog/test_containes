import React, { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { products, categories } from '@/data/products'
import ProductCard from '@/components/ProductCard'

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [showFilters, setShowFilters] = useState(false)
  const [sortBy, setSortBy] = useState('featured')

  const activeCategory = searchParams.get('category') || 'all'

  const filteredProducts = useMemo(() => {
    let result = [...products]

    // Category filter
    if (activeCategory !== 'all') {
      result = result.filter(p => p.category === activeCategory)
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        result.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        result.sort((a, b) => b.rating - a.rating)
        break
      case 'newest':
        result.sort((a, b) => b.reviews - a.reviews)
        break
      default:
        break
    }

    return result
  }, [activeCategory, sortBy])

  const handleCategoryChange = (category) => {
    if (category === 'all') {
      searchParams.delete('category')
    } else {
      searchParams.set('category', category)
    }
    setSearchParams(searchParams)
  }

  const allCategories = [
    { id: 'all', name: 'All Jewelry' },
    ...categories,
  ]

  return (
    <main className="pt-20 md:pt-24 min-h-screen">
      {/* Page header */}
      <div className="bg-cream-200/30 border-b border-cream-300/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 text-center">
          <h1 className="section-heading">
            {activeCategory !== 'all'
              ? categories.find(c => c.id === activeCategory)?.name || 'Shop'
              : 'Our Collection'}
          </h1>
          <p className="section-subheading">
            {activeCategory !== 'all'
              ? categories.find(c => c.id === activeCategory)?.description
              : 'Premium demi-fine jewelry, crafted to be treasured'}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8">
          {/* Filter toggle (mobile) */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="md:hidden flex items-center gap-2 text-xs uppercase tracking-wider text-slate-850 font-sans font-medium"
          >
            <SlidersHorizontal size={14} />
            Filters
          </button>

          {/* Category pills (desktop) */}
          <div className="hidden md:flex items-center gap-1">
            {allCategories.map(cat => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`px-4 py-2 text-[11px] uppercase tracking-wider font-sans font-medium transition-all duration-200 ${
                  activeCategory === cat.id
                    ? 'bg-gold-600 text-cream-50'
                    : 'text-slate-850/60 hover:text-gold-600 bg-transparent'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Sort */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-transparent border border-cream-400 px-4 py-2 pr-8 text-xs uppercase tracking-wider font-sans font-medium text-slate-850/60 focus:outline-none focus:border-gold-400 cursor-pointer"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
              <option value="newest">Most Popular</option>
            </select>
            <ChevronDown size={12} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-850/40 pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar filters (desktop) */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <div className="sticky top-28 space-y-8">
              {/* Category filter */}
              <div>
                <h3 className="font-sans text-[10px] uppercase tracking-mega-wide text-slate-850/40 mb-4 font-medium">
                  Category
                </h3>
                <div className="space-y-2">
                  {allCategories.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => handleCategoryChange(cat.id)}
                      className={`block text-sm font-sans transition-colors duration-200 ${
                        activeCategory === cat.id
                          ? 'text-gold-600 font-medium'
                          : 'text-slate-850/60 hover:text-slate-850'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price filter */}
              <div>
                <h3 className="font-sans text-[10px] uppercase tracking-mega-wide text-slate-850/40 mb-4 font-medium">
                  Price Range
                </h3>
                <div className="space-y-2">
                  {['Under $50', '$50 – $75', '$75 – $100', 'Over $100'].map(range => (
                    <label key={range} className="flex items-center gap-2 cursor-pointer group">
                      <span className="w-4 h-4 border border-cream-400 group-hover:border-gold-400 transition-colors flex items-center justify-center">
                        <span className="w-2 h-2 bg-gold-600 scale-0 transition-transform" />
                      </span>
                      <span className="text-sm font-sans text-slate-850/60 group-hover:text-slate-850 transition-colors">
                        {range}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Material filter */}
              <div>
                <h3 className="font-sans text-[10px] uppercase tracking-mega-wide text-slate-850/40 mb-4 font-medium">
                  Material
                </h3>
                <div className="space-y-2">
                  {['18K Gold Plated', 'Sterling Silver', 'Rose Gold'].map(material => (
                    <label key={material} className="flex items-center gap-2 cursor-pointer group">
                      <span className="w-4 h-4 border border-cream-400 group-hover:border-gold-400 transition-colors flex items-center justify-center">
                        <span className="w-2 h-2 bg-gold-600 scale-0 transition-transform" />
                      </span>
                      <span className="text-sm font-sans text-slate-850/60 group-hover:text-slate-850 transition-colors">
                        {material}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Mobile filters drawer */}
          {showFilters && (
            <div className="fixed inset-0 z-50 md:hidden">
              <div className="absolute inset-0 bg-black/40" onClick={() => setShowFilters(false)} />
              <div className="absolute left-0 top-0 bottom-0 w-80 bg-cream-50 p-6 overflow-y-auto animate-slide-in-right" style={{ animationDirection: 'reverse', animationName: 'none' }}>
                <div className="flex items-center justify-between mb-8">
                  <h2 className="font-serif text-xl text-slate-850">Filters</h2>
                  <button onClick={() => setShowFilters(false)} className="p-2">
                    <X size={20} className="text-slate-850" />
                  </button>
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="font-sans text-[10px] uppercase tracking-mega-wide text-slate-850/40 mb-4">Category</h3>
                    <div className="space-y-3">
                      {allCategories.map(cat => (
                        <button
                          key={cat.id}
                          onClick={() => { handleCategoryChange(cat.id); setShowFilters(false) }}
                          className={`block text-sm font-sans ${activeCategory === cat.id ? 'text-gold-600 font-medium' : 'text-slate-850/60'}`}
                        >
                          {cat.name}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1">
            <p className="text-xs text-slate-850/40 font-sans mb-6">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
            </p>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-slate-850 mb-2">No pieces found</p>
                <p className="text-sm text-slate-850/50 font-sans">Try adjusting your filters</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
