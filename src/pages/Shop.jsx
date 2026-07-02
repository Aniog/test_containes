import { useState, useMemo, useRef, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products, categories } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const containerRef = useRef(null)
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [sortBy, setSortBy] = useState('featured')

  const activeCategory = searchParams.get('category') || 'all'

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (activeCategory !== 'all') {
      result = result.filter(p => p.category === activeCategory)
    }

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
    if (cat === 'all') {
      searchParams.delete('category')
    } else {
      searchParams.set('category', cat)
    }
    setSearchParams(searchParams)
  }

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Page header */}
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl md:text-5xl font-light text-brand-charcoal">
            {activeCategory === 'all' ? 'All Jewelry' : categories.find(c => c.id === activeCategory)?.name || 'Shop'}
          </h1>
          <p className="text-sm text-brand-muted mt-2 font-sans">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        <div className="flex gap-8">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <div className="sticky top-28">
              {/* Category filter */}
              <div className="mb-8">
                <h3 className="text-xs font-sans font-medium tracking-wide-xl uppercase text-brand-charcoal mb-4">
                  Category
                </h3>
                <ul className="space-y-2">
                  <li>
                    <button
                      onClick={() => setCategory('all')}
                      className={`text-sm font-sans transition-colors ${
                        activeCategory === 'all' ? 'text-brand-charcoal font-medium' : 'text-brand-muted hover:text-brand-charcoal'
                      }`}
                    >
                      All Jewelry
                    </button>
                  </li>
                  {categories.map(cat => (
                    <li key={cat.id}>
                      <button
                        onClick={() => setCategory(cat.id)}
                        className={`text-sm font-sans transition-colors ${
                          activeCategory === cat.id ? 'text-brand-charcoal font-medium' : 'text-brand-muted hover:text-brand-charcoal'
                        }`}
                      >
                        {cat.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price filter */}
              <div className="mb-8">
                <h3 className="text-xs font-sans font-medium tracking-wide-xl uppercase text-brand-charcoal mb-4">
                  Price
                </h3>
                <ul className="space-y-2">
                  <li><span className="text-sm text-brand-muted">$30 – $50</span></li>
                  <li><span className="text-sm text-brand-muted">$50 – $75</span></li>
                  <li><span className="text-sm text-brand-muted">$75 – $120</span></li>
                </ul>
              </div>

              {/* Material filter */}
              <div>
                <h3 className="text-xs font-sans font-medium tracking-wide-xl uppercase text-brand-charcoal mb-4">
                  Material
                </h3>
                <ul className="space-y-2">
                  <li><span className="text-sm text-brand-muted">18K Gold Plated</span></li>
                  <li><span className="text-sm text-brand-muted">Sterling Silver</span></li>
                </ul>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-brand-sand">
              {/* Mobile filter button */}
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="md:hidden flex items-center gap-2 text-sm text-brand-charcoal"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
              </button>

              <div className="hidden md:block" />

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-sm font-sans text-brand-charcoal bg-transparent border border-brand-sand px-3 py-2 focus:outline-none focus:border-brand-gold cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>

            {/* Product grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <p className="font-serif text-xl text-brand-muted">No pieces found</p>
                <button
                  onClick={() => setCategory('all')}
                  className="text-sm text-brand-gold mt-4 hover:underline"
                >
                  View all jewelry
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filters overlay */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-[60] bg-brand-cream md:hidden">
          <div className="flex items-center justify-between px-4 h-16 border-b border-brand-sand">
            <span className="text-sm font-sans font-medium tracking-wide-xl uppercase text-brand-charcoal">Filters</span>
            <button onClick={() => setMobileFiltersOpen(false)} className="p-2 text-brand-charcoal" aria-label="Close filters">
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="p-6 space-y-8">
            <div>
              <h3 className="text-xs font-sans font-medium tracking-wide-xl uppercase text-brand-charcoal mb-4">Category</h3>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => { setCategory('all'); setMobileFiltersOpen(false) }}
                    className={`text-sm ${activeCategory === 'all' ? 'text-brand-charcoal font-medium' : 'text-brand-muted'}`}
                  >
                    All Jewelry
                  </button>
                </li>
                {categories.map(cat => (
                  <li key={cat.id}>
                    <button
                      onClick={() => { setCategory(cat.id); setMobileFiltersOpen(false) }}
                      className={`text-sm ${activeCategory === cat.id ? 'text-brand-charcoal font-medium' : 'text-brand-muted'}`}
                    >
                      {cat.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
