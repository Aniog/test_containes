import { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import { products, categories } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [filterOpen, setFilterOpen] = useState(false)
  const [sortBy, setSortBy] = useState('featured')

  const activeCategory = searchParams.get('category') || 'all'

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
    <div className="pt-20 md:pt-24">
      {/* Header */}
      <div className="bg-ivory border-b border-sand">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-10 md:py-14">
          <h1 className="font-serif text-3xl md:text-4xl text-espresso font-medium text-center">
            {activeCategory === 'all' ? 'All Jewelry' : categories.find(c => c.id === activeCategory)?.name || 'Shop'}
          </h1>
          <p className="mt-2 text-stone text-sm text-center">
            Timeless pieces crafted with intention.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 py-8 md:py-12">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => setFilterOpen(!filterOpen)}
            className="md:hidden flex items-center gap-2 text-sm text-charcoal"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          <div className="hidden md:flex items-center gap-2 flex-wrap">
            <button
              onClick={() => setCategory('all')}
              className={`px-4 py-1.5 text-xs font-medium uppercase tracking-product border transition-colors ${
                activeCategory === 'all' ? 'border-gold bg-gold text-cream' : 'border-sand text-charcoal hover:border-gold'
              }`}
            >
              All
            </button>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setCategory(cat.id)}
                className={`px-4 py-1.5 text-xs font-medium uppercase tracking-product border transition-colors ${
                  activeCategory === cat.id ? 'border-gold bg-gold text-cream' : 'border-sand text-charcoal hover:border-gold'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="text-xs border border-sand px-3 py-2 bg-transparent text-charcoal focus:outline-none focus:border-gold"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>

        {/* Mobile Filter Panel */}
        {filterOpen && (
          <div className="md:hidden mb-6 p-4 border border-sand bg-ivory">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-medium uppercase tracking-wide text-charcoal">Category</span>
              <button onClick={() => setFilterOpen(false)} aria-label="Close filters">
                <X className="w-4 h-4 text-stone" />
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setCategory('all')}
                className={`px-3 py-1.5 text-xs font-medium uppercase tracking-product border transition-colors ${
                  activeCategory === 'all' ? 'border-gold bg-gold text-cream' : 'border-sand text-charcoal hover:border-gold'
                }`}
              >
                All
              </button>
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setCategory(cat.id)}
                  className={`px-3 py-1.5 text-xs font-medium uppercase tracking-product border transition-colors ${
                    activeCategory === cat.id ? 'border-gold bg-gold text-cream' : 'border-sand text-charcoal hover:border-gold'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16">
            <p className="font-serif text-xl text-espresso">No products found</p>
            <p className="text-sm text-stone mt-2">Try adjusting your filters.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
