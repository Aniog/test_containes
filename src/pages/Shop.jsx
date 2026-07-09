import { useState, useMemo } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import { products, categories } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [showFilters, setShowFilters] = useState(false)
  const [sortBy, setSortBy] = useState('featured')

  const activeCategory = searchParams.get('category') || 'all'

  const filteredProducts = useMemo(() => {
    let filtered = [...products]

    if (activeCategory !== 'all') {
      filtered = filtered.filter(p => p.category === activeCategory)
    }

    switch (sortBy) {
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
    <main className="pt-24 md:pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <h1 className="font-serif text-3xl md:text-5xl text-charcoal font-light">
            {activeCategory === 'all' ? 'All Jewelry' : categories.find(c => c.id === activeCategory)?.name || 'Shop'}
          </h1>
          <p className="mt-3 text-sm text-muted font-sans">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Sidebar filters - desktop */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <div className="sticky top-28">
              <h3 className="text-xs font-sans font-semibold tracking-widest uppercase text-charcoal mb-4">
                Category
              </h3>
              <ul className="list-none p-0 m-0 space-y-2">
                <li>
                  <button
                    onClick={() => setCategory('all')}
                    className={`text-sm font-sans bg-transparent border-none cursor-pointer transition-colors p-0 ${
                      activeCategory === 'all' ? 'text-gold font-medium' : 'text-muted hover:text-charcoal'
                    }`}
                  >
                    All Jewelry
                  </button>
                </li>
                {categories.map(cat => (
                  <li key={cat.id}>
                    <button
                      onClick={() => setCategory(cat.id)}
                      className={`text-sm font-sans bg-transparent border-none cursor-pointer transition-colors p-0 ${
                        activeCategory === cat.id ? 'text-gold font-medium' : 'text-muted hover:text-charcoal'
                      }`}
                    >
                      {cat.name}
                    </button>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-border">
                <h3 className="text-xs font-sans font-semibold tracking-widest uppercase text-charcoal mb-4">
                  Price
                </h3>
                <ul className="list-none p-0 m-0 space-y-2">
                  <li><span className="text-sm text-muted font-sans">$30 – $50</span></li>
                  <li><span className="text-sm text-muted font-sans">$50 – $75</span></li>
                  <li><span className="text-sm text-muted font-sans">$75 – $120</span></li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <h3 className="text-xs font-sans font-semibold tracking-widest uppercase text-charcoal mb-4">
                  Material
                </h3>
                <ul className="list-none p-0 m-0 space-y-2">
                  <li><span className="text-sm text-muted font-sans">18K Gold Plated</span></li>
                  <li><span className="text-sm text-muted font-sans">Sterling Silver</span></li>
                </ul>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
              {/* Mobile filter toggle */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="md:hidden flex items-center gap-2 text-sm font-sans text-charcoal bg-transparent border-none cursor-pointer p-0"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
              </button>

              <div className="hidden md:block" />

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-sm font-sans text-charcoal bg-transparent border border-border px-3 py-2 cursor-pointer focus:outline-none focus:border-gold"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

            {/* Mobile filters */}
            {showFilters && (
              <div className="md:hidden mb-6 p-4 bg-surface border border-border">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xs font-sans font-semibold tracking-widest uppercase text-charcoal">
                    Filters
                  </h3>
                  <button
                    onClick={() => setShowFilters(false)}
                    className="text-muted bg-transparent border-none p-0 cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setCategory('all')}
                    className={`px-4 py-2 text-xs font-sans tracking-wider uppercase border cursor-pointer transition-colors ${
                      activeCategory === 'all'
                        ? 'bg-charcoal text-white border-charcoal'
                        : 'bg-transparent text-charcoal border-border'
                    }`}
                  >
                    All
                  </button>
                  {categories.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => setCategory(cat.id)}
                      className={`px-4 py-2 text-xs font-sans tracking-wider uppercase border cursor-pointer transition-colors ${
                        activeCategory === cat.id
                          ? 'bg-charcoal text-white border-charcoal'
                          : 'bg-transparent text-charcoal border-border'
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
    </main>
  )
}

export default Shop
