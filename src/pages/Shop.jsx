import { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import { products } from '@/data/products'
import ProductCard from '@/components/home/ProductCard'

const categories = [
  { id: 'all', label: 'All' },
  { id: 'earrings', label: 'Earrings' },
  { id: 'necklaces', label: 'Necklaces' },
  { id: 'huggies', label: 'Huggies' },
  { id: 'sets', label: 'Sets' },
]

const materials = [
  { id: 'all', label: 'All Materials' },
  { id: 'gold', label: '18K Gold' },
  { id: 'silver', label: 'Silver Tone' },
]

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const activeCategory = searchParams.get('category') || 'all'
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

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (activeCategory !== 'all') {
      result = result.filter((p) => p.category === activeCategory)
    }
    if (activeMaterial !== 'all') {
      result = result.filter((p) => p.material === activeMaterial)
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
  }, [activeCategory, activeMaterial, activeSort])

  const hasActiveFilters = activeCategory !== 'all' || activeMaterial !== 'all'

  return (
    <main className="pt-20 md:pt-24 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="py-8 md:py-12">
          <h1 className="font-serif text-3xl md:text-4xl text-ink-800 font-light text-center">
            Shop Our Collection
          </h1>
          <div className="w-12 h-px bg-gold-400 mx-auto mt-4" />
        </div>

        {/* Mobile filter toggle */}
        <div className="flex items-center justify-between md:hidden mb-6">
          <button
            onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
            className="flex items-center gap-2 font-sans text-sm tracking-wider uppercase text-ink-600"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          <select
            value={activeSort}
            onChange={(e) => updateFilter('sort', e.target.value)}
            className="font-sans text-sm text-ink-600 border border-velvet-300 px-3 py-2 bg-transparent"
          >
            {sortOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>

        <div className="flex gap-10">
          {/* Sidebar Filters */}
          <aside className={`${mobileFiltersOpen ? 'block' : 'hidden'} md:block w-full md:w-56 flex-shrink-0`}>
            <div className="md:sticky md:top-28 space-y-8">
              {/* Category */}
              <div>
                <h3 className="font-sans text-xs tracking-widest uppercase text-ink-800 font-semibold mb-4">
                  Category
                </h3>
                <div className="space-y-2.5">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => updateFilter('category', cat.id)}
                      className={`block w-full text-left font-sans text-sm transition-colors py-1 ${
                        activeCategory === cat.id
                          ? 'text-ink-800 font-medium'
                          : 'text-ink-400 hover:text-ink-800'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material */}
              <div>
                <h3 className="font-sans text-xs tracking-widest uppercase text-ink-800 font-semibold mb-4">
                  Material
                </h3>
                <div className="space-y-2.5">
                  {materials.map((mat) => (
                    <button
                      key={mat.id}
                      onClick={() => updateFilter('material', mat.id)}
                      className={`block w-full text-left font-sans text-sm transition-colors py-1 ${
                        activeMaterial === mat.id
                          ? 'text-ink-800 font-medium'
                          : 'text-ink-400 hover:text-ink-800'
                      }`}
                    >
                      {mat.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Clear filters */}
              {hasActiveFilters && (
                <button
                  onClick={() => {
                    const params = new URLSearchParams()
                    setSearchParams(params)
                  }}
                  className="flex items-center gap-1.5 font-sans text-xs tracking-wider uppercase text-gold-600 hover:text-gold-700 transition-colors"
                >
                  <X className="w-3 h-3" />
                  Clear Filters
                </button>
              )}

              {/* Desktop sort */}
              <div className="hidden md:block">
                <h3 className="font-sans text-xs tracking-widest uppercase text-ink-800 font-semibold mb-4">
                  Sort By
                </h3>
                <select
                  value={activeSort}
                  onChange={(e) => updateFilter('sort', e.target.value)}
                  className="w-full font-sans text-sm text-ink-600 border border-velvet-300 px-3 py-2.5 bg-transparent"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="font-serif text-xl text-ink-400 mb-4">No pieces found</p>
                <button
                  onClick={() => {
                    const params = new URLSearchParams()
                    setSearchParams(params)
                  }}
                  className="font-sans text-sm tracking-wider uppercase text-gold-600 hover:text-gold-700"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <>
                <p className="font-sans text-sm text-ink-400 mb-6 hidden md:block">
                  Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}