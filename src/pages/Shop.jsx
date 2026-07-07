import { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import { products, categories } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [showFilters, setShowFilters] = useState(false)
  const [sortBy, setSortBy] = useState('featured')

  const activeCategory = searchParams.get('category') || ''
  const activeMaterial = searchParams.get('material') || ''

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (activeCategory) {
      result = result.filter(p => p.category === activeCategory)
    }
    if (activeMaterial) {
      result = result.filter(p => p.material.toLowerCase().includes(activeMaterial.toLowerCase()))
    }

    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        result.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        result.sort((a, b) => b.rating - a.rating)
        break
      default:
        break
    }

    return result
  }, [activeCategory, activeMaterial, sortBy])

  const setCategory = (cat) => {
    const params = new URLSearchParams(searchParams)
    if (cat) {
      params.set('category', cat)
    } else {
      params.delete('category')
    }
    setSearchParams(params)
  }

  return (
    <div className="pt-20 md:pt-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <h1 className="font-serif text-3xl md:text-4xl text-charcoal text-center">
          {activeCategory ? categories.find(c => c.id === activeCategory)?.name || 'Shop' : 'All Jewelry'}
        </h1>
        <p className="mt-2 text-muted font-sans text-sm text-center">
          {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-16 md:pb-24">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-border">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 text-sm text-charcoal font-sans bg-transparent border-none cursor-pointer hover:text-accent transition-colors"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="text-sm text-charcoal font-sans bg-transparent border border-border px-3 py-2 focus:outline-none focus:border-accent cursor-pointer"
          >
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>

        <div className="flex gap-8">
          {/* Filter Sidebar */}
          <aside className={`${showFilters ? 'block' : 'hidden'} md:block w-full md:w-56 flex-shrink-0`}>
            <div className="space-y-6">
              {/* Category Filter */}
              <div>
                <h3 className="text-xs uppercase tracking-wider text-muted font-sans font-medium mb-3">Category</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setCategory('')}
                    className={`block text-sm font-sans bg-transparent border-none cursor-pointer transition-colors ${!activeCategory ? 'text-accent font-medium' : 'text-charcoal hover:text-accent'}`}
                  >
                    All
                  </button>
                  {categories.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => setCategory(cat.id)}
                      className={`block text-sm font-sans bg-transparent border-none cursor-pointer transition-colors ${activeCategory === cat.id ? 'text-accent font-medium' : 'text-charcoal hover:text-accent'}`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div>
                <h3 className="text-xs uppercase tracking-wider text-muted font-sans font-medium mb-3">Price</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setSortBy('price-asc')}
                    className="block text-sm font-sans text-charcoal hover:text-accent bg-transparent border-none cursor-pointer transition-colors"
                  >
                    Under $50
                  </button>
                  <button
                    onClick={() => setSortBy('price-desc')}
                    className="block text-sm font-sans text-charcoal hover:text-accent bg-transparent border-none cursor-pointer transition-colors"
                  >
                    $50 – $100
                  </button>
                </div>
              </div>

              {/* Material */}
              <div>
                <h3 className="text-xs uppercase tracking-wider text-muted font-sans font-medium mb-3">Material</h3>
                <div className="space-y-2">
                  <span className="block text-sm font-sans text-charcoal">18K Gold Plated</span>
                </div>
              </div>
            </div>

            {/* Active filters */}
            {activeCategory && (
              <div className="mt-6 pt-4 border-t border-border">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted font-sans">Active:</span>
                  <button
                    onClick={() => setCategory('')}
                    className="flex items-center gap-1 text-xs text-accent font-sans bg-transparent border border-accent/30 px-2 py-1 cursor-pointer hover:bg-accent hover:text-white transition-colors"
                  >
                    {activeCategory}
                    <X className="w-3 h-3" />
                  </button>
                </div>
              </div>
            )}
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-muted font-sans">No products found matching your filters.</p>
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
