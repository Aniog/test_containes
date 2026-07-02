import { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { products } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'

const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets']
const priceRanges = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 – $60', min: 40, max: 60 },
  { label: '$60 – $80', min: 60, max: 80 },
  { label: 'Over $80', min: 80, max: Infinity },
]
const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rated', value: 'rating' },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || 'all'

  const [activeCategory, setActiveCategory] = useState(
    categories.find(c => c.toLowerCase() === initialCategory) || 'All'
  )
  const [activePriceRange, setActivePriceRange] = useState(priceRanges[0])
  const [sortBy, setSortBy] = useState('featured')
  const [filterOpen, setFilterOpen] = useState(false)
  const [sortOpen, setSortOpen] = useState(false)

  const filtered = useMemo(() => {
    let result = [...products]

    if (activeCategory !== 'All') {
      result = result.filter(p => p.category === activeCategory.toLowerCase())
    }

    result = result.filter(p => p.price >= activePriceRange.min && p.price <= activePriceRange.max)

    switch (sortBy) {
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
  }, [activeCategory, activePriceRange, sortBy])

  const activeSortLabel = sortOptions.find(s => s.value === sortBy)?.label

  return (
    <div className="bg-ivory-cream min-h-screen">
      {/* Page header */}
      <div className="bg-surface border-b border-divider pt-24 lg:pt-28 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-manrope text-xs tracking-widest uppercase text-gold-dust mb-3">
            Explore
          </p>
          <h1 className="font-cormorant text-4xl lg:text-5xl font-light text-ink">
            {activeCategory === 'All' ? 'All Jewelry' : activeCategory}
          </h1>
          <p className="font-manrope text-xs text-muted mt-2">
            {filtered.length} piece{filtered.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row gap-10">

          {/* Sidebar filters — desktop */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <div className="sticky top-28">
              {/* Category filter */}
              <div className="mb-8">
                <h3 className="font-manrope text-xs tracking-widest uppercase text-ink mb-4">
                  Category
                </h3>
                <div className="flex flex-col gap-2">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`text-left font-manrope text-sm transition-colors duration-300 ${
                        activeCategory === cat
                          ? 'text-gold-dust font-medium'
                          : 'text-muted hover:text-ink'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="w-full h-px bg-divider mb-8" />

              {/* Price filter */}
              <div className="mb-8">
                <h3 className="font-manrope text-xs tracking-widest uppercase text-ink mb-4">
                  Price
                </h3>
                <div className="flex flex-col gap-2">
                  {priceRanges.map(range => (
                    <button
                      key={range.label}
                      onClick={() => setActivePriceRange(range)}
                      className={`text-left font-manrope text-sm transition-colors duration-300 ${
                        activePriceRange.label === range.label
                          ? 'text-gold-dust font-medium'
                          : 'text-muted hover:text-ink'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Clear filters */}
              {(activeCategory !== 'All' || activePriceRange.label !== 'All Prices') && (
                <button
                  onClick={() => {
                    setActiveCategory('All')
                    setActivePriceRange(priceRanges[0])
                  }}
                  className="flex items-center gap-1.5 font-manrope text-xs text-muted hover:text-ink transition-colors duration-300"
                >
                  <X size={12} strokeWidth={1.5} />
                  Clear Filters
                </button>
              )}
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1">
            {/* Mobile filter + Sort bar */}
            <div className="flex items-center justify-between mb-6 gap-4">
              {/* Mobile filter toggle */}
              <button
                onClick={() => setFilterOpen(v => !v)}
                className="lg:hidden flex items-center gap-2 font-manrope text-xs tracking-widest uppercase text-muted hover:text-ink transition-colors duration-300 border border-divider px-4 py-2.5"
              >
                <SlidersHorizontal size={14} strokeWidth={1.5} />
                Filter
              </button>

              {/* Sort dropdown */}
              <div className="relative ml-auto">
                <button
                  onClick={() => setSortOpen(v => !v)}
                  className="flex items-center gap-2 font-manrope text-xs tracking-widest uppercase text-muted hover:text-ink transition-colors duration-300 border border-divider px-4 py-2.5"
                >
                  {activeSortLabel}
                  <ChevronDown size={14} strokeWidth={1.5} className={`transition-transform duration-300 ${sortOpen ? 'rotate-180' : ''}`} />
                </button>
                {sortOpen && (
                  <div className="absolute right-0 top-full mt-1 bg-warm-white border border-divider shadow-lg z-20 min-w-[180px] animate-fade-in">
                    {sortOptions.map(opt => (
                      <button
                        key={opt.value}
                        onClick={() => { setSortBy(opt.value); setSortOpen(false) }}
                        className={`w-full text-left px-4 py-3 font-manrope text-xs transition-colors duration-300 ${
                          sortBy === opt.value ? 'text-gold-dust bg-surface' : 'text-muted hover:text-ink hover:bg-surface'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Mobile filter panel */}
            {filterOpen && (
              <div className="lg:hidden bg-warm-white border border-divider p-6 mb-6 animate-fade-in">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-manrope text-xs tracking-widest uppercase text-ink mb-4">Category</h3>
                    <div className="flex flex-col gap-2">
                      {categories.map(cat => (
                        <button
                          key={cat}
                          onClick={() => setActiveCategory(cat)}
                          className={`text-left font-manrope text-sm transition-colors duration-300 ${
                            activeCategory === cat ? 'text-gold-dust font-medium' : 'text-muted hover:text-ink'
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-manrope text-xs tracking-widest uppercase text-ink mb-4">Price</h3>
                    <div className="flex flex-col gap-2">
                      {priceRanges.map(range => (
                        <button
                          key={range.label}
                          onClick={() => setActivePriceRange(range)}
                          className={`text-left font-manrope text-sm transition-colors duration-300 ${
                            activePriceRange.label === range.label ? 'text-gold-dust font-medium' : 'text-muted hover:text-ink'
                          }`}
                        >
                          {range.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Product grid */}
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-cormorant text-3xl text-muted font-light mb-3">No pieces found</p>
                <p className="font-manrope text-xs text-whisper">Try adjusting your filters</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
                {filtered.map(product => (
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
