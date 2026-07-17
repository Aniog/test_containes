import { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import { products, categories } from '@/data/products'
import ProductCard from '@/components/home/ProductCard'

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [showFilters, setShowFilters] = useState(false)
  const [sort, setSort] = useState('featured')

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

    switch (sort) {
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
  }, [activeCategory, sort])

  return (
    <div className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 py-8 md:py-12">
        {/* Header */}
        <div className="mb-8 md:mb-12">
          <h1 className="font-serif text-3xl md:text-4xl font-medium text-charcoal">
            {activeCategory === 'all' ? 'All Jewelry' : categories.find(c => c.id === activeCategory)?.name || 'Shop'}
          </h1>
          <p className="mt-2 text-sm text-muted-fg">
            {filteredProducts.length} piece{filteredProducts.length !== 1 ? 's' : ''}
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Sidebar filters - desktop */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <div className="sticky top-28">
              <h3 className="text-xs font-sans font-semibold uppercase tracking-widest text-charcoal mb-4">
                Category
              </h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => setCategory('all')}
                    className={`text-sm font-sans transition-colors ${
                      activeCategory === 'all' ? 'text-gold font-medium' : 'text-muted-fg hover:text-charcoal'
                    }`}
                  >
                    All Jewelry
                  </button>
                </li>
                {categories.map(cat => (
                  <li key={cat.id}>
                    <button
                      onClick={() => setCategory(cat.id)}
                      className={`text-sm font-sans transition-colors ${
                        activeCategory === cat.id ? 'text-gold font-medium' : 'text-muted-fg hover:text-charcoal'
                      }`}
                    >
                      {cat.name}
                    </button>
                  </li>
                ))}
              </ul>

              <div className="mt-8 border-t border-border pt-6">
                <h3 className="text-xs font-sans font-semibold uppercase tracking-widest text-charcoal mb-4">
                  Price
                </h3>
                <ul className="space-y-2">
                  <li><span className="text-sm text-muted-fg">Under $40</span></li>
                  <li><span className="text-sm text-muted-fg">$40 – $70</span></li>
                  <li><span className="text-sm text-muted-fg">$70 – $100</span></li>
                  <li><span className="text-sm text-muted-fg">Over $100</span></li>
                </ul>
              </div>

              <div className="mt-8 border-t border-border pt-6">
                <h3 className="text-xs font-sans font-semibold uppercase tracking-widest text-charcoal mb-4">
                  Material
                </h3>
                <ul className="space-y-2">
                  <li><span className="text-sm text-muted-fg">18K Gold Plated</span></li>
                  <li><span className="text-sm text-muted-fg">Sterling Silver</span></li>
                </ul>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="md:hidden flex items-center gap-2 text-sm text-charcoal"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
              </button>

              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="text-sm font-sans text-charcoal bg-transparent border border-border px-3 py-2 focus:outline-none focus:border-gold"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>

            {/* Mobile filters */}
            {showFilters && (
              <div className="md:hidden mb-6 p-4 bg-muted border border-border">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xs font-sans font-semibold uppercase tracking-widest text-charcoal">
                    Category
                  </h3>
                  <button onClick={() => setShowFilters(false)}>
                    <X className="w-4 h-4 text-muted-fg" />
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setCategory('all')}
                    className={`px-3 py-1.5 text-xs font-sans border transition-colors ${
                      activeCategory === 'all'
                        ? 'border-gold bg-gold text-cream'
                        : 'border-border text-charcoal'
                    }`}
                  >
                    All
                  </button>
                  {categories.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => setCategory(cat.id)}
                      className={`px-3 py-1.5 text-xs font-sans border transition-colors ${
                        activeCategory === cat.id
                          ? 'border-gold bg-gold text-cream'
                          : 'border-border text-charcoal'
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
                <p className="font-serif text-lg text-muted-fg">No products found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
