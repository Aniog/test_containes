import { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import ProductCard from '@/components/home/ProductCard'
import products from '@/data/products'

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
  { value: 'newest', label: 'Newest' },
]

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [sort, setSort] = useState('featured')

  const activeCategory = searchParams.get('category') || ''
  const activeTag = searchParams.get('tag') || ''
  const activeMaterial = searchParams.get('material') || ''

  const setFilter = (key, value) => {
    const next = new URLSearchParams(searchParams)
    if (value) {
      next.set(key, value)
    } else {
      next.delete(key)
    }
    setSearchParams(next)
  }

  const clearAll = () => setSearchParams({})

  const categories = [...new Set(products.map((p) => p.category))]
  const materials = [...new Set(products.map((p) => p.material))]
  const hasActiveFilters = activeCategory || activeTag || activeMaterial

  const filtered = useMemo(() => {
    let result = [...products]

    if (activeCategory) {
      result = result.filter((p) => p.category === activeCategory)
    }
    if (activeTag) {
      result = result.filter((p) => p.tags.includes(activeTag))
    }
    if (activeMaterial) {
      result = result.filter((p) => p.material === activeMaterial)
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
      case 'newest':
        result.sort((a, b) => (b.newArrival ? 1 : 0) - (a.newArrival ? 1 : 0))
        break
      default:
        break
    }

    return result
  }, [activeCategory, activeTag, activeMaterial, sort])

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h4 className="text-xs uppercase tracking-wider text-velvet-500 font-sans mb-3">Category</h4>
        <div className="flex flex-col gap-2">
          <button
            onClick={() => setFilter('category', '')}
            className={`text-left text-sm transition-colors ${
              !activeCategory ? 'text-velvet-900 font-medium' : 'text-velvet-500 hover:text-velvet-700'
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter('category', activeCategory === cat ? '' : cat)}
              className={`text-left text-sm transition-colors ${
                activeCategory === cat ? 'text-velvet-900 font-medium' : 'text-velvet-500 hover:text-velvet-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h4 className="text-xs uppercase tracking-wider text-velvet-500 font-sans mb-3">Material</h4>
        <div className="flex flex-col gap-2">
          {materials.map((mat) => (
            <button
              key={mat}
              onClick={() => setFilter('material', activeMaterial === mat ? '' : mat)}
              className={`text-left text-sm transition-colors ${
                activeMaterial === mat ? 'text-velvet-900 font-medium' : 'text-velvet-500 hover:text-velvet-700'
              }`}
            >
              {mat}
            </button>
          ))}
        </div>
      </div>

      {/* Tags */}
      <div>
        <h4 className="text-xs uppercase tracking-wider text-velvet-500 font-sans mb-3">Style</h4>
        <div className="flex flex-col gap-2">
          {['huggies', 'cuff', 'pendant', 'drop', 'gift'].map((tag) => (
            <button
              key={tag}
              onClick={() => setFilter('tag', activeTag === tag ? '' : tag)}
              className={`text-left text-sm transition-colors capitalize ${
                activeTag === tag ? 'text-velvet-900 font-medium' : 'text-velvet-500 hover:text-velvet-700'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <main className="pt-24 md:pt-32 pb-16">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="section-title mb-2">Shop All</h1>
          <p className="text-sm text-velvet-500 font-sans">
            {activeCategory || activeTag
              ? `Showing ${filtered.length} ${filtered.length === 1 ? 'piece' : 'pieces'}`
              : 'Discover the full collection'}
          </p>
        </div>

        <div className="flex gap-10">
          {/* Sidebar (desktop) */}
          <aside className="hidden lg:block w-48 flex-shrink-0">
            <div className="sticky top-28">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xs uppercase tracking-wider text-velvet-800 font-sans font-medium">
                  Filters
                </h3>
                {hasActiveFilters && (
                  <button
                    onClick={clearAll}
                    className="text-[10px] uppercase tracking-wider text-gold-600 hover:text-gold-700 font-sans"
                  >
                    Clear all
                  </button>
                )}
              </div>
              <FilterContent />
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1 min-w-0">
            {/* Mobile filter & sort bar */}
            <div className="flex items-center justify-between mb-6 lg:mb-8 gap-4">
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="lg:hidden flex items-center gap-2 text-xs uppercase tracking-wider text-velvet-600 font-sans border border-velvet-200 px-4 py-2 hover:border-velvet-400 transition-colors"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                Filters
                {hasActiveFilters && (
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                )}
              </button>

              <div className="flex items-center gap-3 ml-auto">
                <label className="text-xs uppercase tracking-wider text-velvet-500 font-sans hidden sm:block">
                  Sort by
                </label>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="text-xs font-sans text-velvet-700 border border-velvet-200 bg-cream px-3 py-2 focus:outline-none focus:border-velvet-400 appearance-none cursor-pointer pr-8"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23866b59' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 8px center',
                  }}
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Active filter chips */}
            {hasActiveFilters && (
              <div className="flex flex-wrap gap-2 mb-6">
                {activeCategory && (
                  <span className="inline-flex items-center gap-1.5 bg-velvet-100 text-xs text-velvet-700 px-3 py-1.5 font-sans">
                    {activeCategory}
                    <button onClick={() => setFilter('category', '')}>
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {activeTag && (
                  <span className="inline-flex items-center gap-1.5 bg-velvet-100 text-xs text-velvet-700 px-3 py-1.5 font-sans capitalize">
                    {activeTag}
                    <button onClick={() => setFilter('tag', '')}>
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {activeMaterial && (
                  <span className="inline-flex items-center gap-1.5 bg-velvet-100 text-xs text-velvet-700 px-3 py-1.5 font-sans">
                    {activeMaterial}
                    <button onClick={() => setFilter('material', '')}>
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
              </div>
            )}

            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-velvet-400 mb-2">No pieces match your filters</p>
                <button onClick={clearAll} className="text-sm text-gold-600 hover:text-gold-700 font-sans">
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
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
          mobileFiltersOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-velvet-950/40 backdrop-blur-sm" onClick={() => setMobileFiltersOpen(false)} />
        <div
          className={`absolute left-0 top-0 bottom-0 w-72 bg-cream shadow-2xl transition-transform duration-300 overflow-y-auto ${
            mobileFiltersOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between p-5">
            <h3 className="text-xs uppercase tracking-wider text-velvet-800 font-sans font-medium">Filters</h3>
            <button onClick={() => setMobileFiltersOpen(false)} className="p-1 text-velvet-500">
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="hairline" />
          <div className="p-5">
            {hasActiveFilters && (
              <button onClick={clearAll} className="text-[10px] uppercase tracking-wider text-gold-600 font-sans mb-6">
                Clear all filters
              </button>
            )}
            <FilterContent />
          </div>
        </div>
      </div>
    </main>
  )
}