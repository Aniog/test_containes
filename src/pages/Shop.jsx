import { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import { products, categories } from '@/data/products'
import ProductCard from '@/components/shop/ProductCard'

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [sortBy, setSortBy] = useState('featured')
  const [showFilters, setShowFilters] = useState(false)

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
    <div className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-16">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <h1 className="font-serif text-3xl md:text-5xl text-charcoal">
            {activeCategory === 'all' ? 'All Jewelry' : categories.find(c => c.id === activeCategory)?.name || 'Shop'}
          </h1>
          <p className="mt-2 text-taupe text-sm">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-sand">
          {/* Filter toggle (mobile) */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="md:hidden flex items-center gap-2 text-sm text-charcoal bg-transparent border-none cursor-pointer"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          {/* Category pills (desktop) */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => setCategory('all')}
              className={`px-4 py-1.5 text-xs uppercase tracking-wider border transition-all cursor-pointer ${
                activeCategory === 'all'
                  ? 'border-gold bg-gold text-cream'
                  : 'border-sand text-charcoal bg-transparent hover:border-gold'
              }`}
            >
              All
            </button>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setCategory(cat.id)}
                className={`px-4 py-1.5 text-xs uppercase tracking-wider border transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'border-gold bg-gold text-cream'
                    : 'border-sand text-charcoal bg-transparent hover:border-gold'
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
            className="text-xs text-charcoal bg-transparent border border-sand px-3 py-1.5 cursor-pointer focus:outline-none focus:border-gold"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>

        {/* Mobile filters */}
        {showFilters && (
          <div className="md:hidden mb-6 p-4 bg-ivory border border-sand">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs uppercase tracking-wider text-charcoal font-medium">Category</span>
              <button onClick={() => setShowFilters(false)} className="text-taupe bg-transparent border-none cursor-pointer">
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setCategory('all')}
                className={`px-3 py-1 text-xs uppercase tracking-wider border transition-all cursor-pointer ${
                  activeCategory === 'all'
                    ? 'border-gold bg-gold text-cream'
                    : 'border-sand text-charcoal bg-transparent'
                }`}
              >
                All
              </button>
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setCategory(cat.id)}
                  className={`px-3 py-1 text-xs uppercase tracking-wider border transition-all cursor-pointer ${
                    activeCategory === cat.id
                      ? 'border-gold bg-gold text-cream'
                      : 'border-sand text-charcoal bg-transparent'
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
          <div className="text-center py-20">
            <p className="text-taupe">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  )
}
