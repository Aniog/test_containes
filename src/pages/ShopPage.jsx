import { useState, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X, ShoppingBag } from 'lucide-react'
import { products, categories } from '@/data/products'
import { useCart } from '@/context/CartContext'

export default function ShopPage() {
  const { addItem } = useCart()
  const [searchParams, setSearchParams] = useSearchParams()
  const [mobileFilters, setMobileFilters] = useState(false)

  const activeCategory = searchParams.get('category') || 'all'
  const activeMaterial = searchParams.get('material') || 'all'
  const sortBy = searchParams.get('sort') || 'popular'

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (activeCategory !== 'all') {
      result = result.filter((p) => p.category === activeCategory)
    }

    if (activeMaterial !== 'all') {
      result = result.filter((p) => p.material === activeMaterial)
    }

    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        result.sort((a, b) => b.price - a.price)
        break
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name))
        break
      default:
        result.sort((a, b) => b.reviewCount - a.reviewCount)
    }

    return result
  }, [activeCategory, activeMaterial, sortBy])

  const updateFilter = (key, value) => {
    const params = new URLSearchParams(searchParams)
    if (value === 'all' || value === '') {
      params.delete(key)
    } else {
      params.set(key, value)
    }
    setSearchParams(params)
  }

  const clearFilters = () => {
    setSearchParams({})
  }

  const hasActiveFilters = activeCategory !== 'all' || activeMaterial !== 'all'

  const FilterContent = ({ mobile = false }) => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="text-xs tracking-widest uppercase font-sans font-medium text-dark-900 mb-4">Category</h3>
        <ul className="space-y-2.5">
          <li>
            <button
              onClick={() => updateFilter('category', 'all')}
              className={`text-sm transition-colors ${
                activeCategory === 'all' ? 'text-dark-900 font-medium' : 'text-dark-400 hover:text-dark-900'
              }`}
            >
              All
            </button>
          </li>
          {categories.map((cat) => (
            <li key={cat.id}>
              <button
                onClick={() => updateFilter('category', cat.id)}
                className={`text-sm transition-colors ${
                  activeCategory === cat.id ? 'text-dark-900 font-medium' : 'text-dark-400 hover:text-dark-900'
                }`}
              >
                {cat.name} ({cat.count})
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Material */}
      <div>
        <h3 className="text-xs tracking-widest uppercase font-sans font-medium text-dark-900 mb-4">Material</h3>
        <ul className="space-y-2.5">
          {[
            { id: 'all', label: 'All' },
            { id: 'gold', label: '18K Gold Plated' },
          ].map((m) => (
            <li key={m.id}>
              <button
                onClick={() => updateFilter('material', m.id)}
                className={`text-sm transition-colors ${
                  activeMaterial === m.id ? 'text-dark-900 font-medium' : 'text-dark-400 hover:text-dark-900'
                }`}
              >
                {m.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {mobile && hasActiveFilters && (
        <button
          onClick={clearFilters}
          className="text-xs tracking-widest uppercase font-sans text-goldDark hover:text-dark-900 transition-colors"
        >
          Clear All
        </button>
      )}
    </div>
  )

  return (
    <main className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Page header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <p className="section-subtitle text-xs mb-2">Shop</p>
            <h1 className="font-serif text-3xl md:text-4xl text-dark-900">
              {activeCategory === 'all' ? 'All Jewelry' : categories.find((c) => c.id === activeCategory)?.name || 'All Jewelry'}
            </h1>
          </div>

          <div className="flex items-center gap-4">
            {/* Mobile filter toggle */}
            <button
              onClick={() => setMobileFilters(true)}
              className="md:hidden flex items-center gap-2 text-sm text-dark-600 font-sans"
            >
              <SlidersHorizontal size={16} />
              Filters
              {hasActiveFilters && <span className="w-1.5 h-1.5 rounded-full bg-gold" />}
            </button>

            {/* Sort */}
            <div className="flex items-center gap-2">
              <label className="text-xs text-dark-400 font-sans hidden md:block">Sort by:</label>
              <select
                value={sortBy}
                onChange={(e) => updateFilter('sort', e.target.value)}
                className="text-sm font-sans text-dark-700 bg-transparent border border-dark-200 px-3 py-2 focus:outline-none focus:border-dark-400"
              >
                <option value="popular">Most Popular</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name">Name: A-Z</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex gap-10">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <FilterContent />
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="mt-6 text-xs tracking-widest uppercase font-sans text-goldDark hover:text-dark-900 transition-colors"
              >
                Clear All Filters
              </button>
            )}
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-dark-400 font-serif text-xl mb-4">No products found</p>
                <button onClick={clearFilters} className="btn-outline text-sm">Clear Filters</button>
              </div>
            ) : (
              <>
                <p className="text-sm text-dark-400 font-sans mb-6">{filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                  {filteredProducts.map((product) => (
                    <div key={product.id} className="group">
                      <Link to={`/product/${product.id}`} className="block">
                        <div className="relative aspect-square bg-dark-50 rounded-sm overflow-hidden mb-3">
                          <img
                            src={product.images[0]}
                            alt={product.name}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-dark-900/0 group-hover:bg-dark-900/20 transition-all duration-300" />
                          <button
                            onClick={(e) => {
                              e.preventDefault()
                              addItem(product)
                            }}
                            className="absolute bottom-3 left-3 right-3 bg-cream text-dark-900 py-2.5 text-xs tracking-widest uppercase font-sans font-medium flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                          >
                            <ShoppingBag size={14} />
                            Quick Add
                          </button>
                        </div>
                      </Link>
                      <div>
                        <h3 className="product-name text-xs text-dark-900 mb-0.5">{product.name}</h3>
                        <p className="text-sm text-dark-500 font-sans">${product.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFilters && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-50 md:hidden"
            onClick={() => setMobileFilters(false)}
          />
          <div className="fixed bottom-0 left-0 right-0 z-50 bg-cream rounded-t-xl max-h-[80vh] overflow-y-auto md:hidden">
            <div className="sticky top-0 bg-cream flex items-center justify-between px-6 py-4 border-b border-dark-200/40">
              <h3 className="text-sm font-medium font-sans text-dark-900">Filters</h3>
              <button onClick={() => setMobileFilters(false)} className="p-1">
                <X size={18} className="text-dark-400" />
              </button>
            </div>
            <div className="px-6 py-6">
              <FilterContent mobile />
            </div>
          </div>
        </>
      )}
    </main>
  )
}