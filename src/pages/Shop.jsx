import { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import { products, categories } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [showFilters, setShowFilters] = useState(false)
  const [sortBy, setSortBy] = useState('featured')

  const activeCategory = searchParams.get('category') || 'all'

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

  return (
    <main className="pt-20 md:pt-24">
      {/* Page header */}
      <div className="bg-brand-ivory border-b border-brand-sand">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16 text-center">
          <h1 className="font-serif text-3xl md:text-5xl text-brand-espresso">
            {activeCategory === 'all' ? 'The Collection' : activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}
          </h1>
          <p className="font-sans text-sm text-brand-muted mt-3">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 font-sans text-xs uppercase tracking-wide-xl text-brand-charcoal hover:text-brand-gold transition-colors md:hidden"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          {/* Desktop category pills */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setCategory('all')}
              className={`px-4 py-2 font-sans text-xs uppercase tracking-wider border transition-colors ${
                activeCategory === 'all'
                  ? 'border-brand-gold bg-brand-gold/5 text-brand-gold'
                  : 'border-brand-sand text-brand-muted hover:border-brand-charcoal'
              }`}
            >
              All
            </button>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setCategory(cat.id)}
                className={`px-4 py-2 font-sans text-xs uppercase tracking-wider border transition-colors ${
                  activeCategory === cat.id
                    ? 'border-brand-gold bg-brand-gold/5 text-brand-gold'
                    : 'border-brand-sand text-brand-muted hover:border-brand-charcoal'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Sort */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="font-sans text-xs uppercase tracking-wider text-brand-muted bg-transparent border border-brand-sand px-4 py-2 focus:outline-none focus:border-brand-gold cursor-pointer"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>

        {/* Mobile filters panel */}
        {showFilters && (
          <div className="md:hidden mb-8 p-4 bg-brand-ivory border border-brand-sand animate-fade-in">
            <div className="flex items-center justify-between mb-4">
              <span className="font-sans text-xs uppercase tracking-wide-xl text-brand-charcoal font-medium">
                Category
              </span>
              <button onClick={() => setShowFilters(false)} className="text-brand-muted">
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => { setCategory('all'); setShowFilters(false) }}
                className={`px-4 py-2 font-sans text-xs uppercase tracking-wider border transition-colors ${
                  activeCategory === 'all'
                    ? 'border-brand-gold bg-brand-gold/5 text-brand-gold'
                    : 'border-brand-sand text-brand-muted'
                }`}
              >
                All
              </button>
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => { setCategory(cat.id); setShowFilters(false) }}
                  className={`px-4 py-2 font-sans text-xs uppercase tracking-wider border transition-colors ${
                    activeCategory === cat.id
                      ? 'border-brand-gold bg-brand-gold/5 text-brand-gold'
                      : 'border-brand-sand text-brand-muted'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Product grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="font-serif text-xl text-brand-muted">No pieces found</p>
            <button
              onClick={() => setCategory('all')}
              className="mt-4 font-sans text-sm text-brand-gold hover:underline"
            >
              View all pieces
            </button>
          </div>
        )}
      </div>
    </main>
  )
}
