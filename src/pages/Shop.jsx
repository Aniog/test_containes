import { useState, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Star, SlidersHorizontal, ChevronDown, ShoppingBag } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { useCart } from '@/context/CartContext'
import { products, categories } from '@/data/products'

const priceRanges = [
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 - $60', min: 40, max: 60 },
  { label: '$60 - $80', min: 60, max: 80 },
  { label: '$80 & Above', min: 80, max: Infinity },
]

const sortOptions = [
  { label: 'Newest', value: 'newest' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rated', value: 'rating' },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const { addItem } = useCart()
  const [sort, setSort] = useState('newest')
  const [priceFilter, setPriceFilter] = useState(null)
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false)
  const [hoveredId, setHoveredId] = useState(null)

  const activeCategory = searchParams.get('category') || 'all'

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (activeCategory && activeCategory !== 'all') {
      result = result.filter((p) => p.category === activeCategory)
    }

    if (priceFilter !== null) {
      const range = priceRanges[priceFilter]
      result = result.filter((p) => p.price >= range.min && p.price < range.max)
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
  }, [activeCategory, priceFilter, sort])

  const setCategory = (cat) => {
    const params = new URLSearchParams(searchParams)
    if (cat === 'all') {
      params.delete('category')
    } else {
      params.set('category', cat)
    }
    setSearchParams(params)
  }

  const FilterSidebar = () => (
    <div className="space-y-8">
      {/* Categories */}
      <div>
        <h3 className="text-xs uppercase tracking-wider text-cream-800 font-medium mb-4">Category</h3>
        <div className="space-y-2.5">
          <button
            onClick={() => setCategory('all')}
            className={cn(
              'block text-sm transition-colors w-full text-left',
              activeCategory === 'all' ? 'text-gold font-medium' : 'text-cream-600 hover:text-cream-800'
            )}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategory(cat.id)}
              className={cn(
                'block text-sm transition-colors w-full text-left',
                activeCategory === cat.id ? 'text-gold font-medium' : 'text-cream-600 hover:text-cream-800'
              )}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="text-xs uppercase tracking-wider text-cream-800 font-medium mb-4">Price</h3>
        <div className="space-y-2.5">
          <button
            onClick={() => setPriceFilter(null)}
            className={cn(
              'block text-sm transition-colors w-full text-left',
              priceFilter === null ? 'text-gold font-medium' : 'text-cream-600 hover:text-cream-800'
            )}
          >
            All Prices
          </button>
          {priceRanges.map((range, index) => (
            <button
              key={index}
              onClick={() => setPriceFilter(index)}
              className={cn(
                'block text-sm transition-colors w-full text-left',
                priceFilter === index ? 'text-gold font-medium' : 'text-cream-600 hover:text-cream-800'
              )}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="text-xs uppercase tracking-wider text-cream-800 font-medium mb-4">Material</h3>
        <div className="space-y-2.5">
          {['18K Gold Plated', 'Silver Tone'].map((mat) => (
            <button
              key={mat}
              className="block text-sm text-cream-600 hover:text-cream-800 transition-colors w-full text-left"
            >
              {mat}
            </button>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <div className="pt-20 md:pt-24">
      {/* Header */}
      <div className="border-b border-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-gold text-xs uppercase tracking-[0.2em] font-medium mb-2">Our Collection</p>
              <h1 className="font-serif text-3xl md:text-4xl text-cream-900">
                {activeCategory === 'all' ? 'All Jewelry' : `${categories.find((c) => c.id === activeCategory)?.name || 'Jewelry'}`}
              </h1>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative">
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="appearance-none bg-transparent border border-cream-300 text-xs uppercase tracking-wider text-cream-600 px-4 py-2.5 pr-8 rounded-none focus:outline-none focus:border-gold transition-colors cursor-pointer"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
                <ChevronDown className="w-3 h-3 absolute right-3 top-1/2 -translate-y-1/2 text-cream-400 pointer-events-none" />
              </div>
              <button
                onClick={() => setMobileFilterOpen(true)}
                className="md:hidden border border-cream-300 p-2.5 text-cream-600 hover:text-gold hover:border-gold transition-colors"
                aria-label="Filters"
              >
                <SlidersHorizontal className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="flex gap-10">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <FilterSidebar />
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-cream-400 mb-2">No products found</p>
                <p className="text-sm text-cream-400 mb-6">Try adjusting your filters.</p>
                <Button onClick={() => { setPriceFilter(null); setCategory('all') }}>
                  Clear Filters
                </Button>
              </div>
            ) : (
              <>
                <p className="text-xs text-cream-400 mb-6">{filteredProducts.length} styles</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                  {filteredProducts.map((product) => (
                    <div
                      key={product.id}
                      className="group"
                      onMouseEnter={() => setHoveredId(product.id)}
                      onMouseLeave={() => setHoveredId(null)}
                    >
                      <Link to={`/product/${product.id}`} className="block">
                        <div className="relative aspect-[3/4] bg-cream-100 overflow-hidden mb-3">
                          <img
                            src={hoveredId === product.id && product.images[1] ? product.images[1] : product.images[0]}
                            alt={product.name}
                            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                          />
                        </div>
                      </Link>
                      <button
                        onClick={() => addItem(product, 'gold', 1)}
                        className="w-full py-2.5 mb-2 text-xs uppercase tracking-wider text-cream-600 border border-cream-200 hover:bg-gold hover:text-white hover:border-gold transition-all duration-300"
                      >
                        <span className="flex items-center justify-center gap-2">
                          <ShoppingBag className="w-3.5 h-3.5" />
                          Add to Cart
                        </span>
                      </button>
                      <Link to={`/product/${product.id}`} className="block">
                        <h3 className="font-serif text-xs uppercase tracking-wider text-cream-800">
                          {product.name}
                        </h3>
                        <div className="flex items-center gap-1 mt-0.5">
                          <Star className="w-3 h-3 fill-gold text-gold" />
                          <span className="text-[11px] text-cream-500">{product.rating}</span>
                        </div>
                        <p className="text-sm font-medium text-cream-900 mt-0.5">${product.price}</p>
                      </Link>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFilterOpen && (
        <>
          <div
            className="fixed inset-0 z-50 bg-black/40 md:hidden"
            onClick={() => setMobileFilterOpen(false)}
          />
          <div className="fixed top-0 left-0 bottom-0 z-50 w-72 bg-white transform transition-transform duration-300 md:hidden overflow-y-auto">
            <div className="p-6 pt-20">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-xs uppercase tracking-wider text-cream-800 font-medium">Filters</h3>
                <button
                  onClick={() => setMobileFilterOpen(false)}
                  className="text-cream-400 hover:text-cream-700 text-sm"
                >
                  Close
                </button>
              </div>
              <FilterSidebar />
            </div>
          </div>
        </>
      )}
    </div>
  )
}