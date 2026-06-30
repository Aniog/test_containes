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
    <div className="pt-20 md:pt-24">
      {/* Header */}
      <div className="bg-ivory py-10 md:py-14 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h1 className="font-serif text-3xl md:text-4xl text-charcoal">
            {activeCategory === 'all' ? 'All Jewelry' : categories.find(c => c.id === activeCategory)?.name || 'Shop'}
          </h1>
          <p className="mt-2 text-sm text-muted font-sans">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar filters - desktop */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <h3 className="text-xs font-sans font-semibold uppercase tracking-widest text-muted mb-4">
              Category
            </h3>
            <ul className="space-y-2 list-none p-0 m-0">
              <li>
                <button
                  onClick={() => setCategory('all')}
                  className={`text-sm font-sans transition-colors bg-transparent border-none cursor-pointer p-0 ${
                    activeCategory === 'all' ? 'text-accent font-medium' : 'text-charcoal hover:text-accent'
                  }`}
                >
                  All Jewelry
                </button>
              </li>
              {categories.map(cat => (
                <li key={cat.id}>
                  <button
                    onClick={() => setCategory(cat.id)}
                    className={`text-sm font-sans transition-colors bg-transparent border-none cursor-pointer p-0 ${
                      activeCategory === cat.id ? 'text-accent font-medium' : 'text-charcoal hover:text-accent'
                    }`}
                  >
                    {cat.name}
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-border">
              <h3 className="text-xs font-sans font-semibold uppercase tracking-widest text-muted mb-4">
                Price Range
              </h3>
              <ul className="space-y-2 list-none p-0 m-0">
                <li className="text-sm font-sans text-charcoal">$30 – $50</li>
                <li className="text-sm font-sans text-charcoal">$50 – $75</li>
                <li className="text-sm font-sans text-charcoal">$75 – $120</li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-border">
              <h3 className="text-xs font-sans font-semibold uppercase tracking-widest text-muted mb-4">
                Material
              </h3>
              <ul className="space-y-2 list-none p-0 m-0">
                <li className="text-sm font-sans text-charcoal">18K Gold Plated</li>
                <li className="text-sm font-sans text-charcoal">Sterling Silver</li>
              </ul>
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="md:hidden flex items-center gap-2 text-sm font-sans text-charcoal bg-transparent border border-border px-3 py-2 cursor-pointer"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
              </button>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-sm font-sans text-charcoal bg-transparent border border-border px-3 py-2 cursor-pointer focus:outline-none focus:border-accent"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

            {/* Mobile filters */}
            {showFilters && (
              <div className="md:hidden mb-6 p-4 bg-ivory border border-border">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-sans font-semibold text-charcoal">Filters</h3>
                  <button
                    onClick={() => setShowFilters(false)}
                    className="p-1 text-muted bg-transparent border-none cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setCategory('all')}
                    className={`px-3 py-1.5 text-xs font-sans rounded-full border cursor-pointer transition-colors ${
                      activeCategory === 'all'
                        ? 'bg-accent text-white border-accent'
                        : 'bg-transparent text-charcoal border-border hover:border-accent'
                    }`}
                  >
                    All
                  </button>
                  {categories.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => setCategory(cat.id)}
                      className={`px-3 py-1.5 text-xs font-sans rounded-full border cursor-pointer transition-colors ${
                        activeCategory === cat.id
                          ? 'bg-accent text-white border-accent'
                          : 'bg-transparent text-charcoal border-border hover:border-accent'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Product grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <p className="font-serif text-xl text-charcoal">No products found</p>
                <p className="mt-2 text-sm text-muted font-sans">Try adjusting your filters</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
