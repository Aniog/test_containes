import React, { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, ChevronDown, X } from 'lucide-react'
import { products, categories } from '@/data/products'
import { Button } from '@/components/ui/button'

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [sortBy, setSortBy] = useState('featured')

  const activeCategory = searchParams.get('category') || 'all'

  const filtered = useMemo(() => {
    let result = [...products]
    if (activeCategory !== 'all') {
      result = result.filter((p) => p.category === activeCategory)
    }
    if (sortBy === 'price-asc') result.sort((a, b) => a.price - b.price)
    if (sortBy === 'price-desc') result.sort((a, b) => b.price - a.price)
    if (sortBy === 'rating') result.sort((a, b) => b.rating - a.rating)
    return result
  }, [activeCategory, sortBy])

  const setCategory = (cat) => {
    if (cat === 'all') {
      searchParams.delete('category')
    } else {
      searchParams.set('category', cat)
    }
    setSearchParams(searchParams)
  }

  return (
    <div className="min-h-screen bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="section-title mb-1">
              {activeCategory === 'all' ? 'All Pieces' : categories.find(c => c.id === activeCategory)?.name || 'Shop'}
            </h1>
            <p className="text-sm text-brand-muted">{filtered.length} pieces</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
              className="md:hidden flex items-center gap-2 px-4 py-2 border border-brand-line rounded-full text-sm"
            >
              <SlidersHorizontal className="w-4 h-4" /> Filters
            </button>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-white border border-brand-line rounded-full px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
              <ChevronDown className="w-4 h-4 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-brand-subtle" />
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar */}
          <aside className={`${mobileFiltersOpen ? 'fixed inset-0 z-50 bg-white p-6' : 'hidden'} md:block md:static md:w-64 md:flex-shrink-0`}>
            {mobileFiltersOpen && (
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-serif text-xl">Filters</h3>
                <button onClick={() => setMobileFiltersOpen(false)}><X className="w-5 h-5" /></button>
              </div>
            )}
            <div className="space-y-6">
              <div>
                <h3 className="text-xs uppercase tracking-widest text-brand-muted mb-3">Category</h3>
                <div className="space-y-2">
                  {['all', ...categories.map(c => c.id)].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => { setCategory(cat); setMobileFiltersOpen(false) }}
                      className={`block w-full text-left text-sm py-1.5 transition-colors ${
                        activeCategory === cat ? 'text-brand-ink font-medium' : 'text-brand-muted hover:text-brand-ink'
                      }`}
                    >
                      {cat === 'all' ? 'All' : categories.find(c => c.id === cat)?.name}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-widest text-brand-muted mb-3">Price</h3>
                <div className="space-y-2">
                  {['Under $50', '$50 - $75', '$75 - $100', 'Over $100'].map((range) => (
                    <label key={range} className="flex items-center gap-2 text-sm text-brand-muted cursor-pointer">
                      <input type="checkbox" className="rounded border-brand-line" />
                      {range}
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-widest text-brand-muted mb-3">Material</h3>
                <div className="space-y-2">
                  {['18K Gold Plated', 'Sterling Silver', 'Crystal'].map((mat) => (
                    <label key={mat} className="flex items-center gap-2 text-sm text-brand-muted cursor-pointer">
                      <input type="checkbox" className="rounded border-brand-line" />
                      {mat}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {filtered.map((product) => (
                <a
                  key={product.id}
                  href={`/product/${product.id}`}
                  className="group bg-white rounded-xl overflow-hidden shadow-soft hover:shadow-glow transition-all duration-300"
                >
                  <div className="relative aspect-[3/4] overflow-hidden bg-brand-warm">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-3 md:p-4">
                    <h3 className="product-name text-xs md:text-sm mb-1">{product.name}</h3>
                    <p className="text-sm font-medium text-brand-ink">${product.price}</p>
                  </div>
                </a>
              ))}
            </div>
            {filtered.length === 0 && (
              <div className="text-center py-20">
                <p className="text-brand-muted">No pieces found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
