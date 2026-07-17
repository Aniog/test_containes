import { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import { products, categories } from '@/data/products'
import ProductCard from '@/components/home/ProductCard'

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [showFilters, setShowFilters] = useState(false)
  const [sort, setSort] = useState('featured')

  const activeCategory = searchParams.get('category') || 'all'

  const filteredProducts = useMemo(() => {
    let filtered = [...products]
    if (activeCategory !== 'all') {
      filtered = filtered.filter(p => p.category === activeCategory)
    }
    switch (sort) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating)
        break
      default:
        break
    }
    return filtered
  }, [activeCategory, sort])

  const setCategory = (cat) => {
    if (cat === 'all') {
      searchParams.delete('category')
    } else {
      searchParams.set('category', cat)
    }
    setSearchParams(searchParams)
  }

  return (
    <div className="pt-24 lg:pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl sm:text-5xl text-charcoal">
            {activeCategory === 'all' ? 'All Jewelry' : categories.find(c => c.id === activeCategory)?.name || 'Shop'}
          </h1>
          <p className="mt-3 text-muted-fg font-sans text-sm">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-border-warm">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 font-sans text-sm text-charcoal hover:text-gold transition-colors lg:hidden"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          {/* Desktop category pills */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => setCategory('all')}
              className={`px-4 py-1.5 font-sans text-xs uppercase tracking-button border transition-colors ${
                activeCategory === 'all'
                  ? 'border-gold bg-gold/10 text-gold'
                  : 'border-border-warm text-muted-fg hover:border-gold'
              }`}
            >
              All
            </button>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setCategory(cat.id)}
                className={`px-4 py-1.5 font-sans text-xs uppercase tracking-button border transition-colors ${
                  activeCategory === cat.id
                    ? 'border-gold bg-gold/10 text-gold'
                    : 'border-border-warm text-muted-fg hover:border-gold'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="font-sans text-sm text-charcoal bg-transparent border border-border-warm px-3 py-1.5 focus:outline-none focus:border-gold cursor-pointer"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>

        {/* Mobile Filters */}
        {showFilters && (
          <div className="lg:hidden mb-8 p-4 bg-muted border border-border-warm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-sans text-sm font-medium text-charcoal">Category</h3>
              <button onClick={() => setShowFilters(false)} aria-label="Close filters">
                <X className="w-4 h-4 text-muted-fg" />
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setCategory('all')}
                className={`px-4 py-1.5 font-sans text-xs uppercase tracking-button border transition-colors ${
                  activeCategory === 'all'
                    ? 'border-gold bg-gold/10 text-gold'
                    : 'border-border-warm text-muted-fg hover:border-gold'
                }`}
              >
                All
              </button>
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setCategory(cat.id)}
                  className={`px-4 py-1.5 font-sans text-xs uppercase tracking-button border transition-colors ${
                    activeCategory === cat.id
                      ? 'border-gold bg-gold/10 text-gold'
                      : 'border-border-warm text-muted-fg hover:border-gold'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="font-serif text-xl text-charcoal">No pieces found</p>
            <p className="mt-2 text-sm text-muted-fg">Try adjusting your filters.</p>
          </div>
        )}
      </div>
    </div>
  )
}
