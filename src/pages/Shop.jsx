import { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import { products, categories } from '../lib/data'
import ProductCard from '../components/product/ProductCard'

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
    <div className="pt-24 md:pt-32 pb-20">
      {/* Page header */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 mb-12">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold font-sans font-light mb-3">
            Collection
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-charcoal mb-3">
            {activeCategory === 'all' ? 'All Jewelry' : categories.find(c => c.id === activeCategory)?.name || 'Shop'}
          </h1>
          <p className="text-sm text-taupe font-light">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-sand">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 text-xs uppercase tracking-wider text-charcoal font-sans bg-transparent border-none hover:text-gold transition-colors"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="text-xs uppercase tracking-wider text-charcoal font-sans bg-transparent border border-sand px-3 py-2 focus:outline-none focus:border-gold cursor-pointer"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>

        <div className="flex gap-8">
          {/* Filter sidebar */}
          <aside className={`${showFilters ? 'block' : 'hidden'} md:block w-full md:w-56 flex-shrink-0`}>
            <div className="sticky top-28">
              {/* Close on mobile */}
              <div className="flex items-center justify-between mb-6 md:hidden">
                <span className="text-xs uppercase tracking-wider font-medium text-charcoal">Filters</span>
                <button onClick={() => setShowFilters(false)} className="p-1 bg-transparent border-none text-charcoal">
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Category filter */}
              <div className="mb-8">
                <h3 className="text-xs uppercase tracking-wider font-medium text-charcoal mb-4">Category</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setCategory('all')}
                    className={`block w-full text-left text-sm font-light py-1.5 bg-transparent border-none transition-colors ${activeCategory === 'all' ? 'text-gold' : 'text-charcoal/70 hover:text-charcoal'}`}
                  >
                    All Jewelry
                  </button>
                  {categories.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => setCategory(cat.id)}
                      className={`block w-full text-left text-sm font-light py-1.5 bg-transparent border-none transition-colors ${activeCategory === cat.id ? 'text-gold' : 'text-charcoal/70 hover:text-charcoal'}`}
                    >
                      {cat.name} ({cat.count})
                    </button>
                  ))}
                </div>
              </div>

              {/* Price filter */}
              <div className="mb-8">
                <h3 className="text-xs uppercase tracking-wider font-medium text-charcoal mb-4">Price</h3>
                <div className="space-y-2">
                  <button className="block w-full text-left text-sm font-light py-1.5 text-charcoal/70 hover:text-charcoal bg-transparent border-none transition-colors">
                    Under $40
                  </button>
                  <button className="block w-full text-left text-sm font-light py-1.5 text-charcoal/70 hover:text-charcoal bg-transparent border-none transition-colors">
                    $40 – $70
                  </button>
                  <button className="block w-full text-left text-sm font-light py-1.5 text-charcoal/70 hover:text-charcoal bg-transparent border-none transition-colors">
                    Over $70
                  </button>
                </div>
              </div>

              {/* Material filter */}
              <div>
                <h3 className="text-xs uppercase tracking-wider font-medium text-charcoal mb-4">Material</h3>
                <div className="space-y-2">
                  <button className="block w-full text-left text-sm font-light py-1.5 text-charcoal/70 hover:text-charcoal bg-transparent border-none transition-colors">
                    18K Gold Plated
                  </button>
                  <button className="block w-full text-left text-sm font-light py-1.5 text-charcoal/70 hover:text-charcoal bg-transparent border-none transition-colors">
                    Sterling Silver
                  </button>
                </div>
              </div>
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-charcoal mb-2">No pieces found</p>
                <p className="text-sm text-taupe">Try adjusting your filters.</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
