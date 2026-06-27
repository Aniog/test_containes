import { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, ChevronDown, X } from 'lucide-react'
import products from '@/data/products'
import ProductCard from '@/components/product/ProductCard'

const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets']
const materials = ['All', '18K Gold Plated']
const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rated', value: 'rating' },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const activeCategory = searchParams.get('category') || 'All'
  const activeMaterial = searchParams.get('material') || 'All'
  const activeSort = searchParams.get('sort') || 'featured'

  const setFilter = (key, value) => {
    const params = new URLSearchParams(searchParams)
    if (value === 'All') {
      params.delete(key)
    } else {
      params.set(key, value)
    }
    setSearchParams(params)
  }

  const filtered = useMemo(() => {
    let result = [...products]

    if (activeCategory !== 'All') {
      result = result.filter((p) => p.category === activeCategory)
    }
    if (activeMaterial !== 'All') {
      result = result.filter((p) => p.materials.includes(activeMaterial))
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

  const FilterSidebar = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h4 className="text-[11px] tracking-[0.15em] uppercase font-medium text-rich-brown mb-4">
          Category
        </h4>
        <div className="space-y-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter('category', cat)}
              className={`block text-sm transition-colors ${
                activeCategory === cat
                  ? 'text-gold font-medium'
                  : 'text-deep-taupe hover:text-rich-brown'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h4 className="text-[11px] tracking-[0.15em] uppercase font-medium text-rich-brown mb-4">
          Material
        </h4>
        <div className="space-y-2">
          {materials.map((mat) => (
            <button
              key={mat}
              onClick={() => setFilter('material', mat)}
              className={`block text-sm transition-colors ${
                activeMaterial === mat
                  ? 'text-gold font-medium'
                  : 'text-deep-taupe hover:text-rich-brown'
              }`}
            >
              {mat}
            </button>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 pt-28 pb-20">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-[28px] md:text-[36px] tracking-[0.04em] text-rich-brown">
            {activeCategory !== 'All' ? activeCategory : 'Shop All'}
          </h1>
          <p className="mt-3 text-sm text-deep-taupe">{filtered.length} pieces</p>
        </div>

        <div className="flex gap-10">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-[200px] flex-shrink-0">
            <FilterSidebar />
          </aside>

          {/* Products */}
          <div className="flex-1 min-w-0">
            {/* Sort & mobile filter toggle */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-soft-sand">
              <button
                className="md:hidden flex items-center gap-2 text-xs tracking-[0.08em] uppercase font-medium text-rich-brown"
                onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                Filters
                {(activeCategory !== 'All' || activeMaterial !== 'All') && (
                  <span className="w-5 h-5 bg-gold text-espresso text-[10px] rounded-full flex items-center justify-center font-bold">
                    {[activeCategory, activeMaterial].filter((f) => f !== 'All').length}
                  </span>
                )}
              </button>

              <div className="relative ml-auto">
                <select
                  value={activeSort}
                  onChange={(e) => setFilter('sort', e.target.value)}
                  className="appearance-none bg-transparent text-xs tracking-[0.06em] uppercase text-rich-brown pr-6 py-1 cursor-pointer focus:outline-none"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 text-deep-taupe pointer-events-none" />
              </div>
            </div>

            {/* Mobile filter panel */}
            {mobileFiltersOpen && (
              <div className="md:hidden bg-cream p-6 mb-6 space-y-6 animate-[fadeIn_0.3s_ease]">
                <div className="flex items-center justify-between">
                  <span className="text-xs tracking-[0.1em] uppercase font-medium">Filters</span>
                  <button onClick={() => setMobileFiltersOpen(false)}>
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <FilterSidebar />
              </div>
            )}

            {/* Product Grid */}
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-lg text-deep-taupe">No products match your filters.</p>
                <button
                  onClick={() => setSearchParams({})}
                  className="mt-4 text-sm underline text-gold"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
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
