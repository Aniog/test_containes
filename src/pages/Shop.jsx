import { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import ProductCard from '@/components/shop/ProductCard'
import { products } from '@/data/products'

const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
]

const FILTER_CATEGORIES = [
  { value: 'all', label: 'All Jewelry' },
  { value: 'earrings', label: 'Earrings' },
  { value: 'necklaces', label: 'Necklaces' },
  { value: 'huggies', label: 'Huggies' },
  { value: 'sets', label: 'Gift Sets' },
]

const PRICE_RANGES = [
  { value: 'all', label: 'All Prices' },
  { value: '0-50', label: 'Under $50' },
  { value: '50-75', label: '$50 – $75' },
  { value: '75-100', label: '$75 – $100' },
  { value: '100+', label: '$100+' },
]

const MATERIALS = [
  { value: 'all', label: 'All Materials' },
  { value: 'gold', label: '18K Gold Plated' },
  { value: 'silver', label: 'Sterling Silver' },
]

export default function Shop() {
  const [searchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || 'all'

  const [category, setCategory] = useState(initialCategory)
  const [priceRange, setPriceRange] = useState('all')
  const [material, setMaterial] = useState('all')
  const [sort, setSort] = useState('featured')
  const [filtersOpen, setFiltersOpen] = useState(false)

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (category !== 'all') {
      result = result.filter(p => p.category === category)
    }

    if (material !== 'all') {
      result = result.filter(p => p.material === material)
    }

    if (priceRange !== 'all') {
      result = result.filter(p => {
        if (priceRange === '0-50') return p.price < 50
        if (priceRange === '50-75') return p.price >= 50 && p.price < 75
        if (priceRange === '75-100') return p.price >= 75 && p.price < 100
        if (priceRange === '100+') return p.price >= 100
        return true
      })
    }

    switch (sort) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        result.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        result.sort((a, b) => (b.rating || 0) - (a.rating || 0))
        break
      default:
        break
    }

    return result
  }, [category, priceRange, material, sort])

  const activeFilters = [
    category !== 'all' && { key: 'category', label: FILTER_CATEGORIES.find(c => c.value === category)?.label },
    priceRange !== 'all' && { key: 'price', label: PRICE_RANGES.find(p => p.value === priceRange)?.label },
    material !== 'all' && { key: 'material', label: MATERIALS.find(m => m.value === material)?.label },
  ].filter(Boolean)

  const clearFilters = () => {
    setCategory('all')
    setPriceRange('all')
    setMaterial('all')
  }

  return (
    <main className="pt-20 md:pt-24 pb-16 md:pb-24">
      {/* Page header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 md:mb-14">
        <div className="text-center">
          <p className="text-gold text-xs font-medium tracking-[0.25em] uppercase mb-3">
            Our Collection
          </p>
          <h1 className="font-serif text-heading-lg text-warm-black">
            Shop All Jewelry
          </h1>
          <p className="mt-3 text-muted-text text-sm max-w-lg mx-auto">
            Discover our curated collection of demi-fine gold jewelry, designed to
            be treasured every day.
          </p>
          <div className="w-12 h-px bg-gold mx-auto mt-5" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setFiltersOpen(!filtersOpen)}
              className="lg:hidden flex items-center gap-2 text-xs font-medium tracking-[0.08em] uppercase text-muted-text hover:text-warm-black transition-colors"
            >
              <SlidersHorizontal size={16} />
              Filters
            </button>
            {activeFilters.length > 0 && (
              <button
                onClick={clearFilters}
                className="text-xs text-gold hover:text-gold-dark transition-colors"
              >
                Clear all
              </button>
            )}
          </div>

          {/* Sort */}
          <div className="relative">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="appearance-none bg-transparent text-xs font-medium tracking-[0.08em] uppercase text-muted-text hover:text-warm-black pr-6 cursor-pointer focus:outline-none"
            >
              {SORT_OPTIONS.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
            <ChevronDown size={14} className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-muted-text" />
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar - Desktop */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <FilterContent
              category={category}
              setCategory={setCategory}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              material={material}
              setMaterial={setMaterial}
            />
          </aside>

          {/* Mobile filter overlay */}
          {filtersOpen && (
            <div className="lg:hidden fixed inset-0 z-50">
              <div className="absolute inset-0 bg-warm-black/40" onClick={() => setFiltersOpen(false)} />
              <div className="absolute left-0 top-0 h-full w-80 max-w-[85vw] bg-ivory p-6 overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-serif text-lg">Filters</h3>
                  <button onClick={() => setFiltersOpen(false)} className="p-1">
                    <X size={20} className="text-muted-text" />
                  </button>
                </div>
                <FilterContent
                  category={category}
                  setCategory={setCategory}
                  priceRange={priceRange}
                  setPriceRange={setPriceRange}
                  material={material}
                  setMaterial={setMaterial}
                />
              </div>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1">
            {/* Active filter chips */}
            {activeFilters.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {activeFilters.map(filter => (
                  <span
                    key={filter.key}
                    className="inline-flex items-center gap-1.5 bg-cream px-3 py-1.5 text-xs text-warm-black border border-border"
                  >
                    {filter.label}
                    <button
                      onClick={() => {
                        if (filter.key === 'category') setCategory('all')
                        if (filter.key === 'price') setPriceRange('all')
                        if (filter.key === 'material') setMaterial('all')
                      }}
                      className="text-muted-text hover:text-warm-black"
                    >
                      <X size={12} />
                    </button>
                  </span>
                ))}
              </div>
            )}

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-muted-text">No pieces found</p>
                <p className="text-sm text-warm-gray mt-2">Try adjusting your filters</p>
                <button
                  onClick={clearFilters}
                  className="mt-4 text-xs text-gold hover:text-gold-dark underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}

function FilterContent({ category, setCategory, priceRange, setPriceRange, material, setMaterial }) {
  return (
    <div className="space-y-8">
      {/* Category */}
      <FilterGroup title="Category">
        {FILTER_CATEGORIES.map(opt => (
          <FilterRadio
            key={opt.value}
            name="category"
            value={opt.value}
            label={opt.label}
            checked={category === opt.value}
            onChange={() => setCategory(opt.value)}
          />
        ))}
      </FilterGroup>

      {/* Price */}
      <FilterGroup title="Price">
        {PRICE_RANGES.map(opt => (
          <FilterRadio
            key={opt.value}
            name="price"
            value={opt.value}
            label={opt.label}
            checked={priceRange === opt.value}
            onChange={() => setPriceRange(opt.value)}
          />
        ))}
      </FilterGroup>

      {/* Material */}
      <FilterGroup title="Material">
        {MATERIALS.map(opt => (
          <FilterRadio
            key={opt.value}
            name="material"
            value={opt.value}
            label={opt.label}
            checked={material === opt.value}
            onChange={() => setMaterial(opt.value)}
          />
        ))}
      </FilterGroup>
    </div>
  )
}

function FilterGroup({ title, children }) {
  return (
    <div>
      <h4 className="text-xs font-medium tracking-[0.12em] uppercase text-muted-text mb-3">
        {title}
      </h4>
      <div className="space-y-2">{children}</div>
    </div>
  )
}

function FilterRadio({ name, value, label, checked, onChange }) {
  return (
    <label className="flex items-center gap-2.5 cursor-pointer group">
      <span
        className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors ${
          checked ? 'border-gold' : 'border-border group-hover:border-warm-gray'
        }`}
      >
        {checked && <span className="w-2 h-2 rounded-full bg-gold" />}
      </span>
      <span className={`text-sm transition-colors ${checked ? 'text-warm-black font-medium' : 'text-muted-text group-hover:text-warm-black'}`}>
        {label}
      </span>
    </label>
  )
}
