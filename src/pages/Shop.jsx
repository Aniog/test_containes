import { useState, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import { products, categories } from '../data/products'
import ProductCard from '../components/ProductCard'

const Shop = () => {
  const { category } = useParams()
  const [selectedCategory, setSelectedCategory] = useState(category || 'all')
  const [priceRange, setPriceRange] = useState('all')
  const [sortBy, setSortBy] = useState('featured')
  const [filtersOpen, setFiltersOpen] = useState(false)

  const filteredProducts = useMemo(() => {
    let filtered = [...products]

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(p => p.category === selectedCategory)
    }

    if (priceRange === 'under50') {
      filtered = filtered.filter(p => p.price < 50)
    } else if (priceRange === '50to80') {
      filtered = filtered.filter(p => p.price >= 50 && p.price <= 80)
    } else if (priceRange === 'over80') {
      filtered = filtered.filter(p => p.price > 80)
    }

    if (sortBy === 'price-low') {
      filtered.sort((a, b) => a.price - b.price)
    } else if (sortBy === 'price-high') {
      filtered.sort((a, b) => b.price - a.price)
    } else if (sortBy === 'rating') {
      filtered.sort((a, b) => b.rating - a.rating)
    }

    return filtered
  }, [selectedCategory, priceRange, sortBy])

  // Sync URL param
  useState(() => {
    if (category) setSelectedCategory(category)
  })

  return (
    <div className="pt-20 md:pt-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <h1 className="font-serif text-3xl md:text-4xl text-charcoal text-center">
          {selectedCategory === 'all' ? 'All Jewelry' : categories.find(c => c.slug === selectedCategory)?.name || 'Shop'}
        </h1>
        <p className="text-center text-sm text-taupe mt-3">
          {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-16 md:pb-24">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-warm-gray">
          <button
            onClick={() => setFiltersOpen(!filtersOpen)}
            className="flex items-center gap-2 text-xs uppercase tracking-ultra-wide text-charcoal hover:text-gold transition-colors md:hidden"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>
          <div className="hidden md:flex items-center gap-6">
            <span className="text-xs uppercase tracking-ultra-wide text-taupe">Category:</span>
            <button
              onClick={() => setSelectedCategory('all')}
              className={`text-xs uppercase tracking-wide transition-colors ${selectedCategory === 'all' ? 'text-gold' : 'text-charcoal hover:text-gold'}`}
            >
              All
            </button>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.slug)}
                className={`text-xs uppercase tracking-wide transition-colors ${selectedCategory === cat.slug ? 'text-gold' : 'text-charcoal hover:text-gold'}`}
              >
                {cat.name}
              </button>
            ))}
          </div>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="text-xs uppercase tracking-wide text-charcoal bg-transparent border border-warm-gray px-3 py-2 focus:outline-none focus:border-gold"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>

        <div className="flex gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden md:block w-48 flex-shrink-0">
            <div className="sticky top-28">
              <div className="mb-8">
                <h3 className="text-xs uppercase tracking-ultra-wide text-charcoal font-medium mb-4">Price</h3>
                <div className="space-y-2">
                  {[
                    { value: 'all', label: 'All Prices' },
                    { value: 'under50', label: 'Under $50' },
                    { value: '50to80', label: '$50 – $80' },
                    { value: 'over80', label: 'Over $80' },
                  ].map(option => (
                    <button
                      key={option.value}
                      onClick={() => setPriceRange(option.value)}
                      className={`block text-sm transition-colors ${priceRange === option.value ? 'text-gold' : 'text-taupe hover:text-charcoal'}`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Mobile Filters */}
          {filtersOpen && (
            <div className="fixed inset-0 z-50 md:hidden">
              <div className="absolute inset-0 bg-charcoal/40" onClick={() => setFiltersOpen(false)} />
              <div className="absolute bottom-0 left-0 right-0 bg-cream p-6 rounded-t-2xl max-h-[60vh] overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-serif text-lg text-charcoal">Filters</h3>
                  <button onClick={() => setFiltersOpen(false)} className="p-2">
                    <X className="w-5 h-5 text-charcoal" />
                  </button>
                </div>
                <div className="mb-6">
                  <h4 className="text-xs uppercase tracking-ultra-wide text-charcoal font-medium mb-3">Category</h4>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => setSelectedCategory('all')}
                      className={`px-4 py-2 text-xs uppercase tracking-wide border ${selectedCategory === 'all' ? 'border-gold text-gold' : 'border-warm-gray text-charcoal'}`}
                    >
                      All
                    </button>
                    {categories.map(cat => (
                      <button
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.slug)}
                        className={`px-4 py-2 text-xs uppercase tracking-wide border ${selectedCategory === cat.slug ? 'border-gold text-gold' : 'border-warm-gray text-charcoal'}`}
                      >
                        {cat.name}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="mb-6">
                  <h4 className="text-xs uppercase tracking-ultra-wide text-charcoal font-medium mb-3">Price</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { value: 'all', label: 'All' },
                      { value: 'under50', label: 'Under $50' },
                      { value: '50to80', label: '$50–$80' },
                      { value: 'over80', label: 'Over $80' },
                    ].map(option => (
                      <button
                        key={option.value}
                        onClick={() => setPriceRange(option.value)}
                        className={`px-4 py-2 text-xs uppercase tracking-wide border ${priceRange === option.value ? 'border-gold text-gold' : 'border-warm-gray text-charcoal'}`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
                <button
                  onClick={() => setFiltersOpen(false)}
                  className="w-full bg-gold text-cream py-3 text-xs uppercase tracking-ultra-wide font-medium"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          )}

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="font-serif text-lg text-charcoal">No pieces found</p>
                <p className="text-sm text-taupe mt-2">Try adjusting your filters.</p>
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

export default Shop
