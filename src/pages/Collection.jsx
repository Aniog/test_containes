import { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import { products, categories } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'

export default function Collection() {
  const [searchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || 'all'

  const [selectedCategory, setSelectedCategory] = useState(initialCategory)
  const [priceRange, setPriceRange] = useState('all')
  const [sortBy, setSortBy] = useState('featured')
  const [filterOpen, setFilterOpen] = useState(false)

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory)
    }

    if (priceRange === 'under50') {
      result = result.filter(p => p.price < 50)
    } else if (priceRange === '50to80') {
      result = result.filter(p => p.price >= 50 && p.price <= 80)
    } else if (priceRange === 'over80') {
      result = result.filter(p => p.price > 80)
    }

    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price)
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price)
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating)
    }

    return result
  }, [selectedCategory, priceRange, sortBy])

  return (
    <div className="pt-24 md:pt-28 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl md:text-4xl text-charcoal">The Collection</h1>
          <p className="mt-3 text-sm text-stone font-light">
            Timeless pieces crafted for everyday elegance
          </p>
        </div>

        <div className="flex gap-8">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <div className="sticky top-28 space-y-8">
              {/* Category filter */}
              <div>
                <h3 className="text-xs font-medium text-charcoal tracking-wider uppercase mb-3">Category</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className={`block text-sm transition-colors ${selectedCategory === 'all' ? 'text-charcoal font-medium' : 'text-stone hover:text-charcoal'}`}
                  >
                    All Jewelry
                  </button>
                  {categories.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`block text-sm transition-colors ${selectedCategory === cat.id ? 'text-charcoal font-medium' : 'text-stone hover:text-charcoal'}`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price filter */}
              <div>
                <h3 className="text-xs font-medium text-charcoal tracking-wider uppercase mb-3">Price</h3>
                <div className="space-y-2">
                  {[
                    { value: 'all', label: 'All Prices' },
                    { value: 'under50', label: 'Under $50' },
                    { value: '50to80', label: '$50 – $80' },
                    { value: 'over80', label: 'Over $80' },
                  ].map(opt => (
                    <button
                      key={opt.value}
                      onClick={() => setPriceRange(opt.value)}
                      className={`block text-sm transition-colors ${priceRange === opt.value ? 'text-charcoal font-medium' : 'text-stone hover:text-charcoal'}`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material */}
              <div>
                <h3 className="text-xs font-medium text-charcoal tracking-wider uppercase mb-3">Material</h3>
                <div className="space-y-2">
                  <span className="block text-sm text-charcoal font-medium">18K Gold Plated</span>
                  <span className="block text-sm text-stone">Sterling Silver</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
              <button
                onClick={() => setFilterOpen(true)}
                className="md:hidden flex items-center gap-2 text-sm text-charcoal"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
              </button>

              <p className="text-xs text-stone hidden md:block">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
              </p>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-xs text-charcoal bg-transparent border border-border px-3 py-2 focus:outline-none focus:border-gold"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

            {/* Product grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-charcoal">No products found</p>
                <p className="text-sm text-stone mt-2">Try adjusting your filters</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {filterOpen && (
        <>
          <div className="fixed inset-0 z-50 bg-charcoal/40 md:hidden" onClick={() => setFilterOpen(false)} />
          <div className="fixed bottom-0 left-0 right-0 z-50 bg-cream rounded-t-2xl p-6 max-h-[70vh] overflow-y-auto md:hidden">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-serif text-xl text-charcoal">Filters</h3>
              <button onClick={() => setFilterOpen(false)} aria-label="Close filters">
                <X className="w-5 h-5 text-stone" />
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-medium text-charcoal tracking-wider uppercase mb-3">Category</h4>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className={`px-4 py-2 text-xs border transition-colors ${selectedCategory === 'all' ? 'border-charcoal bg-charcoal text-cream' : 'border-border text-stone'}`}
                  >
                    All
                  </button>
                  {categories.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`px-4 py-2 text-xs border transition-colors ${selectedCategory === cat.id ? 'border-charcoal bg-charcoal text-cream' : 'border-border text-stone'}`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-medium text-charcoal tracking-wider uppercase mb-3">Price</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    { value: 'all', label: 'All' },
                    { value: 'under50', label: 'Under $50' },
                    { value: '50to80', label: '$50–$80' },
                    { value: 'over80', label: 'Over $80' },
                  ].map(opt => (
                    <button
                      key={opt.value}
                      onClick={() => setPriceRange(opt.value)}
                      className={`px-4 py-2 text-xs border transition-colors ${priceRange === opt.value ? 'border-charcoal bg-charcoal text-cream' : 'border-border text-stone'}`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={() => setFilterOpen(false)}
              className="mt-8 w-full bg-gold text-white py-3 text-sm font-medium tracking-wider"
            >
              APPLY FILTERS
            </button>
          </div>
        </>
      )}
    </div>
  )
}
