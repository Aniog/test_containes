import React, { useState, useMemo } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { Star, ShoppingBag, SlidersHorizontal, X } from 'lucide-react'
import { products, categories, materials } from '../data/products'
import { useCart } from '../context/CartContext'

export default function CollectionPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const { addItem } = useCart()
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [hoveredId, setHoveredId] = useState(null)

  const categoryFilter = searchParams.get('category') || 'all'
  const materialFilter = searchParams.get('material') || 'all'
  const priceSort = searchParams.get('sort') || 'default'

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (categoryFilter !== 'all') {
      result = result.filter(p => p.category === categoryFilter)
    }
    if (materialFilter !== 'all') {
      result = result.filter(p => p.material === materialFilter)
    }

    if (priceSort === 'low') {
      result.sort((a, b) => a.price - b.price)
    } else if (priceSort === 'high') {
      result.sort((a, b) => b.price - a.price)
    } else if (priceSort === 'rating') {
      result.sort((a, b) => b.rating - a.rating)
    }

    return result
  }, [categoryFilter, materialFilter, priceSort])

  const updateFilter = (key, value) => {
    const newParams = new URLSearchParams(searchParams)
    if (value === 'all') {
      newParams.delete(key)
    } else {
      newParams.set(key, value)
    }
    setSearchParams(newParams)
  }

  const clearFilters = () => {
    setSearchParams({})
  }

  const hasActiveFilters = categoryFilter !== 'all' || materialFilter !== 'all' || priceSort !== 'default'

  return (
    <main className="bg-velmora-cream min-h-screen">
      {/* Header */}
      <div className="bg-velmora-base text-velmora-cream py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-velmora-gold text-xs tracking-super-wide uppercase mb-3">The Collection</p>
          <h1 className="font-serif text-4xl md:text-5xl">Shop All</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filter Sidebar - Desktop */}
          <aside className="hidden md:block w-64 flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              {/* Category Filter */}
              <div>
                <h3 className="text-xs tracking-super-wide uppercase text-velmora-base mb-4">Category</h3>
                <ul className="space-y-2">
                  {categories.map((cat) => (
                    <li key={cat.id}>
                      <button
                        onClick={() => updateFilter('category', cat.id)}
                        className={`text-sm transition-colors ${
                          categoryFilter === cat.id
                            ? 'text-velmora-gold font-medium'
                            : 'text-velmora-muted hover:text-velmora-base'
                        }`}
                      >
                        {cat.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Material Filter */}
              <div>
                <h3 className="text-xs tracking-super-wide uppercase text-velmora-base mb-4">Material</h3>
                <ul className="space-y-2">
                  {materials.map((mat) => (
                    <li key={mat.id}>
                      <button
                        onClick={() => updateFilter('material', mat.id)}
                        className={`text-sm transition-colors ${
                          materialFilter === mat.id
                            ? 'text-velmora-gold font-medium'
                            : 'text-velmora-muted hover:text-velmora-base'
                        }`}
                      >
                        {mat.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sort */}
              <div>
                <h3 className="text-xs tracking-super-wide uppercase text-velmora-base mb-4">Sort By</h3>
                <select
                  value={priceSort}
                  onChange={(e) => updateFilter('sort', e.target.value)}
                  className="w-full px-3 py-2 bg-transparent border border-velmora-taupe-light text-sm text-velmora-base focus:outline-none focus:border-velmora-gold"
                >
                  <option value="default">Featured</option>
                  <option value="low">Price: Low to High</option>
                  <option value="high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>

              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-xs text-velmora-muted hover:text-velmora-base underline transition-colors"
                >
                  Clear all filters
                </button>
              )}
            </div>
          </aside>

          {/* Mobile Filter Button */}
          <div className="md:hidden flex items-center justify-between mb-4">
            <p className="text-sm text-velmora-muted">{filteredProducts.length} products</p>
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center gap-2 px-4 py-2 border border-velmora-taupe-light text-xs tracking-wide"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>
          </div>

          {/* Mobile Filter Panel */}
          {isFilterOpen && (
            <div className="md:hidden fixed inset-0 z-50 bg-velmora-cream">
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="font-serif text-2xl">Filters</h2>
                  <button onClick={() => setIsFilterOpen(false)}>
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-xs tracking-super-wide uppercase text-velmora-base mb-4">Category</h3>
                    <div className="flex flex-wrap gap-2">
                      {categories.map((cat) => (
                        <button
                          key={cat.id}
                          onClick={() => { updateFilter('category', cat.id); setIsFilterOpen(false) }}
                          className={`px-4 py-2 text-xs tracking-wide border transition-colors ${
                            categoryFilter === cat.id
                              ? 'border-velmora-gold bg-velmora-gold/10 text-velmora-base'
                              : 'border-velmora-taupe-light text-velmora-muted'
                          }`}
                        >
                          {cat.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xs tracking-super-wide uppercase text-velmora-base mb-4">Material</h3>
                    <div className="flex flex-wrap gap-2">
                      {materials.map((mat) => (
                        <button
                          key={mat.id}
                          onClick={() => { updateFilter('material', mat.id); setIsFilterOpen(false) }}
                          className={`px-4 py-2 text-xs tracking-wide border transition-colors ${
                            materialFilter === mat.id
                              ? 'border-velmora-gold bg-velmora-gold/10 text-velmora-base'
                              : 'border-velmora-taupe-light text-velmora-muted'
                          }`}
                        >
                          {mat.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xs tracking-super-wide uppercase text-velmora-base mb-4">Sort By</h3>
                    <select
                      value={priceSort}
                      onChange={(e) => { updateFilter('sort', e.target.value); setIsFilterOpen(false) }}
                      className="w-full px-3 py-2 bg-transparent border border-velmora-taupe-light text-sm text-velmora-base focus:outline-none focus:border-velmora-gold"
                    >
                      <option value="default">Featured</option>
                      <option value="low">Price: Low to High</option>
                      <option value="high">Price: High to Low</option>
                      <option value="rating">Highest Rated</option>
                    </select>
                  </div>

                  {hasActiveFilters && (
                    <button
                      onClick={() => { clearFilters(); setIsFilterOpen(false) }}
                      className="text-xs text-velmora-muted hover:text-velmora-base underline transition-colors"
                    >
                      Clear all filters
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Product Grid */}
          <div className="flex-1">
            <div className="hidden md:flex items-center justify-between mb-6">
              <p className="text-sm text-velmora-muted">{filteredProducts.length} products</p>
              <select
                value={priceSort}
                onChange={(e) => updateFilter('sort', e.target.value)}
                className="px-3 py-2 bg-transparent border border-velmora-taupe-light text-sm text-velmora-base focus:outline-none focus:border-velmora-gold"
              >
                <option value="default">Featured</option>
                <option value="low">Price: Low to High</option>
                <option value="high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-2xl text-velmora-muted mb-4">No products found</p>
                <button
                  onClick={clearFilters}
                  className="text-xs tracking-super-wide uppercase text-velmora-gold hover:text-velmora-base transition-colors underline"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="group"
                    onMouseEnter={() => setHoveredId(product.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    <Link to={`/product/${product.slug}`} className="block relative overflow-hidden bg-velmora-warm aspect-[3/4]">
                      <img
                        src={hoveredId === product.id ? product.images[1] : product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                      />
                      {product.isNew && (
                        <span className="absolute top-3 left-3 px-2 py-1 bg-velmora-base text-velmora-cream text-[10px] tracking-wider uppercase">
                          New
                        </span>
                      )}
                      <div className={`absolute bottom-0 left-0 right-0 p-3 transition-all duration-300 ${
                        hoveredId === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                      }`}>
                        <button
                          onClick={(e) => {
                            e.preventDefault()
                            addItem(product, product.variants[0])
                          }}
                          className="w-full py-3 bg-velmora-base/90 backdrop-blur-sm text-velmora-cream text-[10px] tracking-super-wide uppercase flex items-center justify-center gap-2 hover:bg-velmora-gold hover:text-velmora-base transition-colors"
                        >
                          <ShoppingBag className="w-3.5 h-3.5" />
                          Add to Bag
                        </button>
                      </div>
                    </Link>
                    <div className="mt-4">
                      <div className="flex items-center gap-1 mb-1.5">
                        <Star className="w-3 h-3 fill-velmora-gold text-velmora-gold" />
                        <span className="text-[11px] text-velmora-muted">{product.rating}</span>
                      </div>
                      <Link to={`/product/${product.slug}`}>
                        <h3 className="font-serif text-sm tracking-wide text-velmora-base group-hover:text-velmora-gold transition-colors">
                          {product.name}
                        </h3>
                      </Link>
                      <p className="text-sm text-velmora-muted mt-1">${product.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
