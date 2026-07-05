import { useState, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Star, ShoppingBag, SlidersHorizontal, ChevronDown, X } from 'lucide-react'
import { products, categories } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { cn } from '@/lib/utils'

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const { addItem, openCart } = useCart()
  const [sort, setSort] = useState('featured')
  const [priceRange, setPriceRange] = useState([0, 200])
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false)

  const activeCategory = searchParams.get('category') || 'all'
  const activeMaterial = searchParams.get('material') || 'all'

  const updateFilter = (key, value) => {
    const params = new URLSearchParams(searchParams)
    if (value === 'all' || value === '') {
      params.delete(key)
    } else {
      params.set(key, value)
    }
    setSearchParams(params)
  }

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (activeCategory !== 'all') {
      result = result.filter((p) => p.category === activeCategory)
    }
    if (activeMaterial !== 'all') {
      result = result.filter((p) => p.material === activeMaterial)
    }
    result = result.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1])

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
  }, [activeCategory, activeMaterial, priceRange, sort])

  const handleAddToCart = (e, product) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product)
    openCart()
  }

  const clearFilters = () => {
    setSearchParams({})
    setPriceRange([0, 200])
    setSort('featured')
  }

  const hasActiveFilters = activeCategory !== 'all' || activeMaterial !== 'all' || priceRange[0] > 0 || priceRange[1] < 200

  const FilterSidebar = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="text-xs uppercase tracking-widest text-velvet-50 mb-4 font-sans">Category</h3>
        <div className="space-y-2">
          <button
            onClick={() => updateFilter('category', 'all')}
            className={cn(
              'block text-xs font-sans transition-colors w-full text-left',
              activeCategory === 'all' ? 'text-gold' : 'text-velvet-200/60 hover:text-velvet-50'
            )}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => updateFilter('category', cat.id)}
              className={cn(
                'block text-xs font-sans transition-colors w-full text-left',
                activeCategory === cat.id ? 'text-gold' : 'text-velvet-200/60 hover:text-velvet-50'
              )}
            >
              {cat.name} ({cat.count})
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="text-xs uppercase tracking-widest text-velvet-50 mb-4 font-sans">Material</h3>
        <div className="space-y-2">
          {['all', 'gold', 'silver'].map((mat) => (
            <button
              key={mat}
              onClick={() => updateFilter('material', mat)}
              className={cn(
                'block text-xs font-sans transition-colors w-full text-left capitalize',
                activeMaterial === mat ? 'text-gold' : 'text-velvet-200/60 hover:text-velvet-50'
              )}
            >
              {mat === 'all' ? 'All' : `${mat} Tone`}
            </button>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="text-xs uppercase tracking-widest text-velvet-50 mb-4 font-sans">Price Range</h3>
        <div className="flex items-center gap-3">
          <input
            type="number"
            value={priceRange[0]}
            onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
            className="w-full bg-velvet-600 border border-velvet-400/30 rounded-sm px-3 py-2 text-xs text-velvet-50 placeholder:text-velvet-200/40 focus:outline-none focus:border-gold/60"
            placeholder="Min"
          />
          <span className="text-velvet-200/40 text-xs">—</span>
          <input
            type="number"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
            className="w-full bg-velvet-600 border border-velvet-400/30 rounded-sm px-3 py-2 text-xs text-velvet-50 placeholder:text-velvet-200/40 focus:outline-none focus:border-gold/60"
            placeholder="Max"
          />
        </div>
      </div>
    </div>
  )

  return (
    <main className="pt-20">
      {/* Page Header */}
      <div className="border-b border-velvet-400/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 md:py-12">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-serif text-3xl md:text-4xl text-velvet-50 capitalize">
                {activeCategory === 'all' ? 'All Jewelry' : activeCategory}
              </h1>
              <p className="text-velvet-200/60 text-sm mt-2 font-sans">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
              </p>
            </div>
            <div className="flex items-center gap-4">
              {/* Mobile filter button */}
              <button
                className="md:hidden flex items-center gap-2 text-xs uppercase tracking-wider text-velvet-200 hover:text-velvet-50 transition-colors font-sans"
                onClick={() => setMobileFilterOpen(true)}
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
              </button>

              {/* Sort */}
              <div className="relative">
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="appearance-none bg-transparent text-xs uppercase tracking-wider text-velvet-200 pr-6 py-2 focus:outline-none cursor-pointer hover:text-velvet-50 transition-colors font-sans"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value} className="bg-velvet text-velvet-50">
                      {opt.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 text-velvet-200 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Active filters */}
          {hasActiveFilters && (
            <div className="flex items-center gap-2 mt-4">
              <button
                onClick={clearFilters}
                className="text-[10px] uppercase tracking-wider text-velvet-200/60 hover:text-gold transition-colors font-sans"
              >
                Clear all
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
        <div className="flex gap-10">
          {/* Sidebar - Desktop */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <FilterSidebar />
          </aside>

          {/* Mobile filter overlay */}
          {mobileFilterOpen && (
            <div className="fixed inset-0 z-50 md:hidden">
              <div className="absolute inset-0 bg-black/60" onClick={() => setMobileFilterOpen(false)} />
              <div className="absolute left-0 top-0 bottom-0 w-72 bg-velvet p-6 overflow-y-auto shadow-2xl">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-xs uppercase tracking-widest text-velvet-50 font-sans">Filters</h3>
                  <button onClick={() => setMobileFilterOpen(false)} className="text-velvet-200 hover:text-velvet-50">
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <FilterSidebar />
              </div>
            </div>
          )}

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-velvet-200/60 text-sm font-sans">No products match your filters.</p>
                <button onClick={clearFilters} className="text-gold text-xs uppercase tracking-wider mt-4 hover:text-gold-light transition-colors font-sans">
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <Link
                    key={product.id}
                    to={`/product/${product.id}`}
                    className="group"
                  >
                    <div className="relative aspect-[3/4] bg-velvet-600 rounded-sm overflow-hidden mb-3">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        <button
                          onClick={(e) => handleAddToCart(e, product)}
                          className="w-full bg-velvet/90 backdrop-blur-sm text-velvet-50 text-xs uppercase tracking-wider py-3 rounded-sm flex items-center justify-center gap-2 hover:bg-gold hover:text-velvet transition-all duration-300"
                        >
                          <ShoppingBag className="w-3.5 h-3.5" />
                          Add to Cart
                        </button>
                      </div>
                      {product.price >= 80 && (
                        <div className="absolute top-3 left-3 bg-gold/90 text-velvet text-[10px] uppercase tracking-widest px-2 py-1 rounded-sm font-medium">
                          Best Value
                        </div>
                      )}
                    </div>

                    <div className="flex items-center gap-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={cn('w-3 h-3', i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-velvet-400/40')} />
                      ))}
                    </div>
                    <h3 className="font-serif text-xs uppercase tracking-widest text-velvet-50/90 group-hover:text-gold transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-gold text-sm mt-1 font-sans">${product.price}</p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}