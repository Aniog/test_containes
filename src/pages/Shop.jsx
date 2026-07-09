import { useState, useRef, useEffect, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products, categories } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const containerRef = useRef(null)
  const [filterOpen, setFilterOpen] = useState(false)

  const activeCategory = searchParams.get('category') || 'all'
  const sortBy = searchParams.get('sort') || 'featured'

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [activeCategory, sortBy])

  const filteredProducts = useMemo(() => {
    let result = activeCategory === 'all'
      ? [...products]
      : products.filter(p => p.category === activeCategory)

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
      default:
        break
    }

    return result
  }, [activeCategory, sortBy])

  const setCategory = (cat) => {
    const params = new URLSearchParams(searchParams)
    if (cat === 'all') {
      params.delete('category')
    } else {
      params.set('category', cat)
    }
    setSearchParams(params)
  }

  const setSort = (sort) => {
    const params = new URLSearchParams(searchParams)
    params.set('sort', sort)
    setSearchParams(params)
  }

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <h1 className="font-serif text-3xl md:text-4xl text-charcoal text-center">
          {activeCategory === 'all' ? 'All Jewelry' : categories.find(c => c.id === activeCategory)?.name || 'Shop'}
        </h1>
        <p className="mt-3 text-muted-fg text-sm text-center">
          {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-16 md:pb-24">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filter sidebar - desktop */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <div className="sticky top-28">
              <h3 className="text-xs uppercase tracking-product font-medium text-charcoal mb-4">Category</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => setCategory('all')}
                    className={`text-sm transition-colors ${activeCategory === 'all' ? 'text-gold font-medium' : 'text-muted-fg hover:text-charcoal'}`}
                  >
                    All Jewelry
                  </button>
                </li>
                {categories.map(cat => (
                  <li key={cat.id}>
                    <button
                      onClick={() => setCategory(cat.id)}
                      className={`text-sm transition-colors ${activeCategory === cat.id ? 'text-gold font-medium' : 'text-muted-fg hover:text-charcoal'}`}
                    >
                      {cat.name}
                    </button>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-border">
                <h3 className="text-xs uppercase tracking-product font-medium text-charcoal mb-4">Price</h3>
                <ul className="space-y-2">
                  <li><button onClick={() => setSort('price-low')} className={`text-sm ${sortBy === 'price-low' ? 'text-gold font-medium' : 'text-muted-fg hover:text-charcoal'} transition-colors`}>Low to High</button></li>
                  <li><button onClick={() => setSort('price-high')} className={`text-sm ${sortBy === 'price-high' ? 'text-gold font-medium' : 'text-muted-fg hover:text-charcoal'} transition-colors`}>High to Low</button></li>
                </ul>
              </div>
            </div>
          </aside>

          {/* Mobile filter bar */}
          <div className="md:hidden flex items-center justify-between mb-4">
            <button
              onClick={() => setFilterOpen(true)}
              className="flex items-center gap-2 text-sm text-charcoal"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filter
            </button>
            <select
              value={sortBy}
              onChange={(e) => setSort(e.target.value)}
              className="text-sm bg-transparent border border-border px-3 py-1.5 text-charcoal"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>

          {/* Mobile filter drawer */}
          {filterOpen && (
            <div className="fixed inset-0 z-50 md:hidden">
              <div className="absolute inset-0 bg-charcoal/40" onClick={() => setFilterOpen(false)} />
              <div className="absolute left-0 top-0 bottom-0 w-72 bg-cream p-6 overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-serif text-lg">Filters</h3>
                  <button onClick={() => setFilterOpen(false)}><X className="w-5 h-5" /></button>
                </div>
                <h4 className="text-xs uppercase tracking-product font-medium text-charcoal mb-3">Category</h4>
                <ul className="space-y-2 mb-6">
                  <li>
                    <button onClick={() => { setCategory('all'); setFilterOpen(false) }} className={`text-sm ${activeCategory === 'all' ? 'text-gold font-medium' : 'text-muted-fg'}`}>All Jewelry</button>
                  </li>
                  {categories.map(cat => (
                    <li key={cat.id}>
                      <button onClick={() => { setCategory(cat.id); setFilterOpen(false) }} className={`text-sm ${activeCategory === cat.id ? 'text-gold font-medium' : 'text-muted-fg'}`}>{cat.name}</button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1">
            {/* Desktop sort */}
            <div className="hidden md:flex justify-end mb-6">
              <select
                value={sortBy}
                onChange={(e) => setSort(e.target.value)}
                className="text-sm bg-transparent border border-border px-3 py-1.5 text-charcoal"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-fg">No products found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
