import { useState, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ShoppingBag, SlidersHorizontal, ChevronDown } from 'lucide-react'
import { products } from '@/lib/products'
import { useCart } from '@/context/CartContext'
import FilterSidebar from '@/components/shop/FilterSidebar'

const sortOptions = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'rating', label: 'Highest Rated' },
]

export default function Shop() {
  const [searchParams] = useSearchParams()
  const { addItem } = useCart()
  const [filters, setFilters] = useState({
    category: searchParams.get('category') || null,
    price: null,
    material: null,
  })
  const [sort, setSort] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [sortOpen, setSortOpen] = useState(false)
  const [hoveredId, setHoveredId] = useState(null)

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (filters.category) {
      result = result.filter((p) => p.category === filters.category)
    }
    if (filters.material) {
      result = result.filter((p) => p.material === filters.material)
    }
    if (filters.price) {
      const priceMap = {
        under40: [0, 40],
        '40to70': [40, 70],
        '70to100': [70, 100],
        over100: [100, 999],
      }
      const [min, max] = priceMap[filters.price]
      result = result.filter((p) => p.price >= min && p.price <= max)
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
  }, [filters, sort])

  const activeSortLabel = sortOptions.find((o) => o.id === sort)?.label || 'Featured'

  return (
    <main className="pt-24 md:pt-28 pb-16 md:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1A1A1A]">
            Shop All
          </h1>
          <p className="text-muted-text text-sm mt-2">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        <div className="flex gap-8">
          {/* Filter sidebar */}
          <FilterSidebar
            filters={filters}
            setFilters={setFilters}
            mobileOpen={mobileFiltersOpen}
            setMobileOpen={setMobileFiltersOpen}
          />

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6">
              {/* Mobile filter button */}
              <button
                className="md:hidden flex items-center gap-1.5 text-xs uppercase tracking-[0.15em] text-muted-text hover:text-[#1A1A1A] transition-colors"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                Filters
              </button>

              {/* Sort */}
              <div className="relative ml-auto">
                <button
                  onClick={() => setSortOpen(!sortOpen)}
                  className="flex items-center gap-1 text-xs uppercase tracking-[0.15em] text-muted-text hover:text-[#1A1A1A] transition-colors"
                >
                  Sort: {activeSortLabel}
                  <ChevronDown className={`w-3 h-3 transition-transform ${sortOpen ? 'rotate-180' : ''}`} />
                </button>
                {sortOpen && (
                  <>
                    <div className="fixed inset-0 z-10" onClick={() => setSortOpen(false)} />
                    <div className="absolute right-0 top-full mt-2 z-20 bg-white border border-warm-border shadow-lg min-w-[180px]">
                      {sortOptions.map((opt) => (
                        <button
                          key={opt.id}
                          onClick={() => {
                            setSort(opt.id)
                            setSortOpen(false)
                          }}
                          className={`w-full text-left px-4 py-2.5 text-xs uppercase tracking-[0.05em] transition-colors ${
                            sort === opt.id
                              ? 'bg-gold/10 text-gold'
                              : 'text-muted-text hover:bg-warm'
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Product grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-muted-text">No products match your filters.</p>
                <button
                  onClick={() => setFilters({ category: null, price: null, material: null })}
                  className="text-gold text-sm mt-2 hover:text-gold-dark transition-colors"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="group relative"
                    onMouseEnter={() => setHoveredId(product.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    <Link to={`/product/${product.id}`} className="block">
                      <div className="relative aspect-[3/4] bg-warm rounded overflow-hidden">
                        <img
                          src={hoveredId === product.id ? product.images.hover : product.images.front}
                          alt={product.name}
                          className="w-full h-full object-cover transition-opacity duration-500"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                      </div>
                    </Link>

                    {/* Quick add */}
                    <button
                      onClick={() => addItem({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        image: product.images.front,
                      })}
                      className="absolute bottom-16 left-2 right-2 md:left-3 md:right-3 py-2.5 bg-white/90 backdrop-blur-sm text-[#1A1A1A] text-xs uppercase tracking-[0.15em] font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2 shadow-md"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      Add to Cart
                    </button>

                    <div className="mt-3 px-1">
                      <h3 className="font-serif text-sm tracking-[0.15em] uppercase text-[#1A1A1A]">
                        {product.name}
                      </h3>
                      <p className="text-sm text-muted-text mt-0.5">${product.price}</p>
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