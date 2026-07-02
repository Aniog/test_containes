import React, { useState, useMemo } from 'react'
import { products, categories } from '../data/products'
import ProductCard from '../components/ui/ProductCard'
import { ChevronDown, SlidersHorizontal } from 'lucide-react'

const ShopPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('featured')
  const [priceRange, setPriceRange] = useState('all')
  const [showFilters, setShowFilters] = useState(false)

  const filteredProducts = useMemo(() => {
    let result = [...products]

    // Filter by category
    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category === selectedCategory)
    }

    // Filter by price
    if (priceRange === 'under50') {
      result = result.filter((p) => p.price < 50)
    } else if (priceRange === '50to100') {
      result = result.filter((p) => p.price >= 50 && p.price <= 100)
    } else if (priceRange === 'over100') {
      result = result.filter((p) => p.price > 100)
    }

    // Sort
    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price)
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price)
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating)
    } else if (sortBy === 'newest') {
      result.reverse()
    }

    return result
  }, [selectedCategory, sortBy, priceRange])

  return (
    <main className="pt-20 md:pt-24">
      {/* Page header */}
      <div className="bg-[var(--velmora-bg-secondary)] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-3">
            The Collection
          </h1>
          <p className="text-sm text-[var(--velmora-text-muted)]">
            {filteredProducts.length} piece{filteredProducts.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Mobile filter toggle */}
          <button
            className="md:hidden flex items-center justify-center gap-2 py-3 border border-[var(--velmora-border)] text-sm"
            onClick={() => setShowFilters(!showFilters)}
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          {/* Sidebar filters */}
          <aside
            className={`md:w-64 flex-shrink-0 ${
              showFilters ? 'block' : 'hidden md:block'
            }`}
          >
            <div className="sticky top-24 space-y-8">
              {/* Category filter */}
              <div>
                <h3 className="text-xs tracking-wider-luxury uppercase mb-4">
                  Category
                </h3>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`block w-full text-left text-sm py-1.5 transition-colors ${
                        selectedCategory === cat.id
                          ? 'text-[var(--velmora-accent)] font-medium'
                          : 'text-[var(--velmora-text-secondary)] hover:text-[var(--velmora-text)]'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price filter */}
              <div>
                <h3 className="text-xs tracking-wider-luxury uppercase mb-4">
                  Price
                </h3>
                <div className="space-y-2">
                  {[
                    { id: 'all', label: 'All Prices' },
                    { id: 'under50', label: 'Under $50' },
                    { id: '50to100', label: '$50 – $100' },
                    { id: 'over100', label: 'Over $100' },
                  ].map((range) => (
                    <button
                      key={range.id}
                      onClick={() => setPriceRange(range.id)}
                      className={`block w-full text-left text-sm py-1.5 transition-colors ${
                        priceRange === range.id
                          ? 'text-[var(--velmora-accent)] font-medium'
                          : 'text-[var(--velmora-text-secondary)] hover:text-[var(--velmora-text)]'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material filter */}
              <div>
                <h3 className="text-xs tracking-wider-luxury uppercase mb-4">
                  Material
                </h3>
                <div className="space-y-2">
                  {['18K Gold Plated', 'Sterling Silver'].map((mat) => (
                    <label key={mat} className="flex items-center gap-2 text-sm text-[var(--velmora-text-secondary)] cursor-pointer">
                      <input type="checkbox" className="accent-[var(--velmora-accent)]" />
                      {mat}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {/* Sort dropdown */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-[var(--velmora-text-muted)]">
                Showing {filteredProducts.length} result{filteredProducts.length !== 1 ? 's' : ''}
              </p>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent border border-[var(--velmora-border)] text-sm py-2 pl-3 pr-8 focus:outline-none focus:border-[var(--velmora-accent)] cursor-pointer"
                >
                  <option value="featured">Featured</option>
                  <option value="newest">Newest</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--velmora-text-muted)] pointer-events-none" />
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="font-serif text-xl mb-2">No pieces found</p>
                <p className="text-sm text-[var(--velmora-text-muted)]">
                  Try adjusting your filters
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}

export default ShopPage
