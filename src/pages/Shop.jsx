import { useMemo, useState, useEffect, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { products, categories } from '@/data/products'
import ProductCard from '@/components/ProductCard'

const sortOptions = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'rating', label: 'Top Rated' },
]

const priceRanges = [
  { id: 'under-50', label: 'Under $50', min: 0, max: 50 },
  { id: '50-75', label: '$50 — $75', min: 50, max: 75 },
  { id: '75-plus', label: '$75+', min: 75, max: Infinity },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [sortOpen, setSortOpen] = useState(false)

  const initialCategory = searchParams.get('category') || ''
  const initialSort = searchParams.get('sort') || 'featured'

  const [activeCategory, setActiveCategory] = useState(initialCategory)
  const [activePrice, setActivePrice] = useState('')
  const [activeSort, setActiveSort] = useState(initialSort)
  const sortRef = useRef(null)

  useEffect(() => {
    const cat = searchParams.get('category') || ''
    setActiveCategory(cat)
  }, [searchParams])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [searchParams])

  useEffect(() => {
    function handleClickOutside(event) {
      if (sortRef.current && !sortRef.current.contains(event.target)) {
        setSortOpen(false)
      }
    }
    if (sortOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [sortOpen])

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (activeCategory) {
      result = result.filter((p) => p.category === activeCategory)
    }

    if (activePrice) {
      const range = priceRanges.find((r) => r.id === activePrice)
      if (range) {
        result = result.filter((p) => p.price >= range.min && p.price < range.max)
      }
    }

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
      default:
        break
    }

    return result
  }, [activeCategory, activePrice, activeSort])

  const updateCategory = (categoryId) => {
    setActiveCategory(categoryId)
    const next = new URLSearchParams(searchParams)
    if (categoryId) {
      next.set('category', categoryId)
    } else {
      next.delete('category')
    }
    setSearchParams(next, { replace: true })
  }

  const clearFilters = () => {
    setActiveCategory('')
    setActivePrice('')
    setSearchParams({}, { replace: true })
  }

  const activeFiltersCount =
    (activeCategory ? 1 : 0) + (activePrice ? 1 : 0)

  const activeSortLabel =
    sortOptions.find((o) => o.id === activeSort)?.label || 'Featured'

  const Filters = ({ isMobile = false }) => (
    <div className="space-y-8">
      <div>
        <h4 className="text-xs uppercase tracking-[0.2em] text-velmora-ink mb-4">
          Category
        </h4>
        <div className="space-y-2">
          {categories.map((cat) => (
            <label
              key={cat.id}
              className="flex items-center gap-3 text-sm text-velmora-taupe hover:text-velmora-ink cursor-pointer transition-colors"
            >
              <input
                type="radio"
                name={isMobile ? 'category-mobile' : 'category'}
                checked={activeCategory === cat.id}
                onChange={() => updateCategory(cat.id)}
                className="accent-velmora-gold"
              />
              {cat.label}
            </label>
          ))}
          <label className="flex items-center gap-3 text-sm text-velmora-taupe hover:text-velmora-ink cursor-pointer transition-colors">
            <input
              type="radio"
              name={isMobile ? 'category-mobile' : 'category'}
              checked={activeCategory === ''}
              onChange={() => updateCategory('')}
              className="accent-velmora-gold"
            />
            All Jewelry
          </label>
        </div>
      </div>

      <div>
        <h4 className="text-xs uppercase tracking-[0.2em] text-velmora-ink mb-4">
          Price
        </h4>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <label
              key={range.id}
              className="flex items-center gap-3 text-sm text-velmora-taupe hover:text-velmora-ink cursor-pointer transition-colors"
            >
              <input
                type="radio"
                name={isMobile ? 'price-mobile' : 'price'}
                checked={activePrice === range.id}
                onChange={() => setActivePrice(range.id)}
                className="accent-velmora-gold"
              />
              {range.label}
            </label>
          ))}
          <label className="flex items-center gap-3 text-sm text-velmora-taupe hover:text-velmora-ink cursor-pointer transition-colors">
            <input
              type="radio"
              name={isMobile ? 'price-mobile' : 'price'}
              checked={activePrice === ''}
              onChange={() => setActivePrice('')}
              className="accent-velmora-gold"
            />
            Any Price
          </label>
        </div>
      </div>

      <div>
        <h4 className="text-xs uppercase tracking-[0.2em] text-velmora-ink mb-4">
          Material
        </h4>
        <div className="space-y-2">
          {['18K Gold Plated', 'Hypoallergenic'].map((mat) => (
            <label
              key={mat}
              className="flex items-center gap-3 text-sm text-velmora-taupe hover:text-velmora-ink cursor-pointer transition-colors"
            >
              <input
                type="checkbox"
                defaultChecked
                disabled
                className="accent-velmora-gold"
              />
              {mat}
            </label>
          ))}
        </div>
      </div>

      {activeFiltersCount > 0 && (
        <button
          onClick={clearFilters}
          className="text-xs uppercase tracking-[0.18em] text-velmora-taupe hover:text-velmora-gold border-b border-transparent hover:border-velmora-gold transition-colors"
        >
          Clear Filters ({activeFiltersCount})
        </button>
      )}
    </div>
  )

  return (
    <div className="bg-velmora-cream pt-24 md:pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-xs uppercase tracking-[0.25em] text-velmora-gold mb-3">
            The Collection
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-velmora-ink">
            Shop All Jewelry
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-28">
              <Filters />
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-velmora-sand">
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="lg:hidden flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-velmora-ink"
              >
                <SlidersHorizontal size={16} />
                Filter
                {activeFiltersCount > 0 && (
                  <span className="w-5 h-5 bg-velmora-gold text-white text-[10px] rounded-full flex items-center justify-center">
                    {activeFiltersCount}
                  </span>
                )}
              </button>

              <p className="hidden lg:block text-sm text-velmora-taupe">
                {filteredProducts.length} piece
                {filteredProducts.length !== 1 ? 's' : ''}
              </p>

              <div className="relative" ref={sortRef}>
                <button
                  onClick={() => setSortOpen((v) => !v)}
                  className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-velmora-ink"
                >
                  Sort: {activeSortLabel}
                  <ChevronDown
                    size={14}
                    className={`transition-transform ${sortOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {sortOpen && (
                  <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-velmora-sand shadow-lg z-20">
                    {sortOptions.map((option) => (
                      <button
                        key={option.id}
                        onClick={() => {
                          setActiveSort(option.id)
                          setSortOpen(false)
                        }}
                        className={`w-full text-left px-4 py-3 text-xs uppercase tracking-[0.15em] hover:bg-velmora-sand transition-colors ${
                          activeSort === option.id
                            ? 'text-velmora-gold'
                            : 'text-velmora-ink'
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-2xl text-velmora-ink mb-3">
                  No pieces match your filters
                </p>
                <button
                  onClick={clearFilters}
                  className="text-xs uppercase tracking-[0.18em] text-velmora-gold border-b border-velmora-gold pb-1"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-12">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
          mobileFiltersOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setMobileFiltersOpen(false)}
        />
        <div
          className={`absolute left-0 top-0 h-full w-[85%] max-w-sm bg-velmora-cream shadow-xl p-6 overflow-y-auto transition-transform duration-300 ${
            mobileFiltersOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-serif text-2xl text-velmora-ink">Filters</h2>
            <button onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters">
              <X size={24} className="text-velmora-ink" />
            </button>
          </div>
          <Filters isMobile />
        </div>
      </div>
    </div>
  )
}
