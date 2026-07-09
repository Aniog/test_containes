import { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { products, categories, materials } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'
import { cn } from '@/lib/utils'

const priceRanges = [
  { id: 'under-50', label: 'Under $50', min: 0, max: 50 },
  { id: '50-75', label: '$50 – $75', min: 50, max: 75 },
  { id: 'over-75', label: 'Over $75', min: 75, max: Infinity },
]

const sortOptions = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'rating', label: 'Highest Rated' },
  { id: 'newest', label: 'Newest' },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [sortOpen, setSortOpen] = useState(false)

  const activeCategory = searchParams.get('category') || 'all'
  const activePrice = searchParams.get('price') || 'all'
  const activeMaterial = searchParams.get('material') || 'all'
  const activeSort = searchParams.get('sort') || 'featured'

  const updateFilter = (key, value) => {
    const params = new URLSearchParams(searchParams)
    if (value === 'all') {
      params.delete(key)
    } else {
      params.set(key, value)
    }
    setSearchParams(params)
  }

  const clearFilters = () => {
    setSearchParams({})
  }

  const hasActiveFilters = activeCategory !== 'all' || activePrice !== 'all' || activeMaterial !== 'all'

  const filteredProducts = useMemo(() => {
    let result = [...products]

    // Category filter
    if (activeCategory !== 'all') {
      result = result.filter((p) => p.category === activeCategory)
    }

    // Price filter
    if (activePrice !== 'all') {
      const range = priceRanges.find((r) => r.id === activePrice)
      if (range) {
        result = result.filter((p) => p.price >= range.min && p.price < range.max)
      }
    }

    // Material filter
    if (activeMaterial !== 'all') {
      result = result.filter((p) => p.material === activeMaterial)
    }

    // Sort
    switch (activeSort) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        result.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        result.sort((a, b) => b.rating - a.rating)
        break
      case 'newest':
        result.reverse()
        break
      default:
        break
    }

    return result
  }, [activeCategory, activePrice, activeMaterial, activeSort])

  const FilterSidebar = ({ mobile = false }) => (
    <div className={cn(mobile ? 'p-6' : '')}>
      {mobile && (
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-serif text-xl text-brand-charcoal">Filters</h2>
          <button onClick={() => setMobileFiltersOpen(false)} className="p-2">
            <X className="w-5 h-5 text-brand-charcoal" />
          </button>
        </div>
      )}

      {/* Category */}
      <div className="mb-8">
        <h3 className="font-sans text-xs tracking-[0.15em] uppercase text-brand-charcoal font-medium mb-4">
          Category
        </h3>
        <div className="space-y-2">
          <button
            onClick={() => updateFilter('category', 'all')}
            className={cn(
              'block font-sans text-sm transition-colors',
              activeCategory === 'all' ? 'text-brand-gold font-medium' : 'text-brand-taupe hover:text-brand-charcoal'
            )}
          >
            All Jewelry
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => updateFilter('category', cat.id)}
              className={cn(
                'block font-sans text-sm transition-colors',
                activeCategory === cat.id ? 'text-brand-gold font-medium' : 'text-brand-taupe hover:text-brand-charcoal'
              )}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="mb-8">
        <h3 className="font-sans text-xs tracking-[0.15em] uppercase text-brand-charcoal font-medium mb-4">
          Price
        </h3>
        <div className="space-y-2">
          <button
            onClick={() => updateFilter('price', 'all')}
            className={cn(
              'block font-sans text-sm transition-colors',
              activePrice === 'all' ? 'text-brand-gold font-medium' : 'text-brand-taupe hover:text-brand-charcoal'
            )}
          >
            All Prices
          </button>
          {priceRanges.map((range) => (
            <button
              key={range.id}
              onClick={() => updateFilter('price', range.id)}
              className={cn(
                'block font-sans text-sm transition-colors',
                activePrice === range.id ? 'text-brand-gold font-medium' : 'text-brand-taupe hover:text-brand-charcoal'
              )}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div className="mb-8">
        <h3 className="font-sans text-xs tracking-[0.15em] uppercase text-brand-charcoal font-medium mb-4">
          Material
        </h3>
        <div className="space-y-2">
          <button
            onClick={() => updateFilter('material', 'all')}
            className={cn(
              'block font-sans text-sm transition-colors',
              activeMaterial === 'all' ? 'text-brand-gold font-medium' : 'text-brand-taupe hover:text-brand-charcoal'
            )}
          >
            All Materials
          </button>
          {materials.map((mat) => (
            <button
              key={mat.id}
              onClick={() => updateFilter('material', mat.id)}
              className={cn(
                'block font-sans text-sm transition-colors',
                activeMaterial === mat.id ? 'text-brand-gold font-medium' : 'text-brand-taupe hover:text-brand-charcoal'
              )}
            >
              {mat.name}
            </button>
          ))}
        </div>
      </div>

      {hasActiveFilters && (
        <button
          onClick={clearFilters}
          className="font-sans text-xs text-brand-taupe hover:text-brand-charcoal underline transition-colors"
        >
          Clear all filters
        </button>
      )}
    </div>
  )

  return (
    <main className="pt-20 md:pt-24 min-h-screen bg-brand-ivory">
      {/* Page header */}
      <div className="section-padding py-8 md:py-12 text-center">
        <p className="font-sans text-[0.65rem] tracking-[0.3em] uppercase text-brand-gold mb-3">
          Our Collection
        </p>
        <h1 className="section-title text-3xl md:text-heading">
          {activeCategory !== 'all'
            ? categories.find((c) => c.id === activeCategory)?.name || 'Shop'
            : 'All Jewelry'}
        </h1>
        <p className="font-sans text-sm text-brand-taupe mt-2">
          {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
        </p>
      </div>

      <div className="section-padding pb-16 md:pb-24">
        <div className="flex gap-8 lg:gap-12 max-w-7xl mx-auto">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <div className="sticky top-28">
              <FilterSidebar />
            </div>
          </aside>

          {/* Product grid area */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8">
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="lg:hidden flex items-center gap-2 font-sans text-xs tracking-[0.1em] uppercase text-brand-charcoal"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
              </button>

              {/* Active filter tags */}
              {hasActiveFilters && (
                <div className="hidden lg:flex items-center gap-2 flex-wrap">
                  {activeCategory !== 'all' && (
                    <span className="inline-flex items-center gap-1.5 font-sans text-[0.65rem] tracking-[0.08em] uppercase bg-brand-warm text-brand-charcoal px-3 py-1.5">
                      {categories.find((c) => c.id === activeCategory)?.name}
                      <button onClick={() => updateFilter('category', 'all')}>
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  )}
                  {activePrice !== 'all' && (
                    <span className="inline-flex items-center gap-1.5 font-sans text-[0.65rem] tracking-[0.08em] uppercase bg-brand-warm text-brand-charcoal px-3 py-1.5">
                      {priceRanges.find((r) => r.id === activePrice)?.label}
                      <button onClick={() => updateFilter('price', 'all')}>
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  )}
                </div>
              )}

              {/* Sort dropdown */}
              <div className="relative ml-auto">
                <button
                  onClick={() => setSortOpen(!sortOpen)}
                  className="flex items-center gap-2 font-sans text-xs tracking-[0.1em] uppercase text-brand-charcoal"
                >
                  Sort: {sortOptions.find((s) => s.id === activeSort)?.label}
                  <ChevronDown className={cn('w-3.5 h-3.5 transition-transform', sortOpen && 'rotate-180')} />
                </button>
                {sortOpen && (
                  <>
                    <div className="fixed inset-0 z-10" onClick={() => setSortOpen(false)} />
                    <div className="absolute right-0 top-full mt-2 w-48 bg-brand-ivory border border-brand-taupe/15 shadow-lg z-20">
                      {sortOptions.map((option) => (
                        <button
                          key={option.id}
                          onClick={() => {
                            updateFilter('sort', option.id)
                            setSortOpen(false)
                          }}
                          className={cn(
                            'block w-full text-left px-4 py-2.5 font-sans text-sm transition-colors',
                            activeSort === option.id
                              ? 'text-brand-gold bg-brand-gold/5'
                              : 'text-brand-charcoal hover:bg-brand-warm'
                          )}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Product grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-brand-charcoal mb-2">
                  No pieces found
                </p>
                <p className="font-sans text-sm text-brand-taupe mb-6">
                  Try adjusting your filters to find what you&apos;re looking for.
                </p>
                <button onClick={clearFilters} className="btn-outline text-xs">
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <>
          <div
            className="fixed inset-0 bg-brand-charcoal/40 z-50 lg:hidden"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 w-full max-w-sm bg-brand-ivory z-50 overflow-y-auto lg:hidden animate-slide-in-right">
            <FilterSidebar mobile />
          </div>
        </>
      )}
    </main>
  )
}
