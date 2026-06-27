import { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import { products, categories } from '@/data/products'
import ProductCard from '@/components/home/ProductCard'

const Shop = () => {
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
    <main className="pt-24 lg:pt-32 pb-16 lg:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl lg:text-4xl text-text">
            {activeCategory === 'all' ? 'All Jewelry' : categories.find(c => c.id === activeCategory)?.name || 'Shop'}
          </h1>
          <p className="mt-2 text-sm text-text-muted">
            {filteredProducts.length} piece{filteredProducts.length !== 1 ? 's' : ''}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters - Desktop */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <div className="sticky top-28">
              <h3 className="text-xs font-semibold uppercase tracking-product text-text mb-4">
                Category
              </h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => setCategory('all')}
                    className={`text-sm transition-colors ${
                      activeCategory === 'all' ? 'text-accent font-medium' : 'text-text-muted hover:text-text'
                    }`}
                  >
                    All Jewelry
                  </button>
                </li>
                {categories.map(cat => (
                  <li key={cat.id}>
                    <button
                      onClick={() => setCategory(cat.id)}
                      className={`text-sm transition-colors ${
                        activeCategory === cat.id ? 'text-accent font-medium' : 'text-text-muted hover:text-text'
                      }`}
                    >
                      {cat.name}
                    </button>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-border">
                <h3 className="text-xs font-semibold uppercase tracking-product text-text mb-4">
                  Price
                </h3>
                <ul className="space-y-2 text-sm text-text-muted">
                  <li className="hover:text-text cursor-pointer transition-colors">Under $40</li>
                  <li className="hover:text-text cursor-pointer transition-colors">$40 – $70</li>
                  <li className="hover:text-text cursor-pointer transition-colors">$70 – $100</li>
                  <li className="hover:text-text cursor-pointer transition-colors">Over $100</li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <h3 className="text-xs font-semibold uppercase tracking-product text-text mb-4">
                  Material
                </h3>
                <ul className="space-y-2 text-sm text-text-muted">
                  <li className="hover:text-text cursor-pointer transition-colors">18K Gold Plated</li>
                  <li className="hover:text-text cursor-pointer transition-colors">Sterling Silver</li>
                </ul>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden flex items-center gap-2 text-sm text-text-muted hover:text-text transition-colors"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
              </button>

              <div className="flex items-center gap-2 ml-auto">
                <label className="text-xs text-text-muted">Sort:</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="text-sm text-text bg-transparent border border-border rounded-sm px-3 py-1.5 focus:outline-none focus:border-accent"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
              </div>
            </div>

            {/* Mobile Filters */}
            {showFilters && (
              <div className="lg:hidden mb-6 p-4 bg-surface border border-border rounded-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-medium text-text">Filters</h3>
                  <button onClick={() => setShowFilters(false)}>
                    <X className="w-4 h-4 text-text-muted" />
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setCategory('all')}
                    className={`px-3 py-1.5 text-xs rounded-sm border transition-colors ${
                      activeCategory === 'all'
                        ? 'border-accent bg-accent text-white'
                        : 'border-border text-text-muted hover:border-border-dark'
                    }`}
                  >
                    All
                  </button>
                  {categories.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => setCategory(cat.id)}
                      className={`px-3 py-1.5 text-xs rounded-sm border transition-colors ${
                        activeCategory === cat.id
                          ? 'border-accent bg-accent text-white'
                          : 'border-border text-text-muted hover:border-border-dark'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Product Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-text-muted">No products found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}

export default Shop
