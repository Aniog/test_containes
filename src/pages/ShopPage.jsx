import { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, ChevronDown, X } from 'lucide-react'
import { products, categories } from '@/data/products'
import ProductCard from '@/components/products/ProductCard'
import { cn } from '@/lib/utils'

const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 — $75', min: 50, max: 75 },
  { label: '$75 — $100', min: 75, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
]

const materials = ['Gold', 'Silver']

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Selling', value: 'bestselling' },
  { label: 'Newest', value: 'newest' },
]

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const categoryFilter = searchParams.get('category') || ''
  const [selectedCategory, setSelectedCategory] = useState(categoryFilter)
  const [selectedPrice, setSelectedPrice] = useState(null)
  const [selectedMaterial, setSelectedMaterial] = useState('')
  const [sortBy, setSortBy] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (selectedCategory) {
      result = result.filter(p => p.category === selectedCategory)
    }

    if (selectedPrice) {
      result = result.filter(
        p => p.price >= selectedPrice.min && p.price < selectedPrice.max
      )
    }

    if (selectedMaterial) {
      result = result.filter(p =>
        p.variants.some(v => v.name.toLowerCase() === selectedMaterial.toLowerCase())
      )
    }

    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        result.sort((a, b) => b.price - a.price)
        break
      case 'bestselling':
        result.sort((a, b) => b.reviewCount - a.reviewCount)
        break
    }

    return result
  }, [selectedCategory, selectedPrice, selectedMaterial, sortBy])

  const activeFiltersCount = [selectedCategory, selectedPrice, selectedMaterial].filter(Boolean).length

  const clearFilters = () => {
    setSelectedCategory('')
    setSelectedPrice(null)
    setSelectedMaterial('')
    setSearchParams({})
  }

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="font-serif text-sm tracking-widest-xl uppercase text-brand-charcoal mb-4">
          Category
        </h3>
        <div className="space-y-2">
          <button
            onClick={() => {
              setSelectedCategory('')
              setSearchParams({})
            }}
            className={cn(
              'block text-sm transition-colors',
              !selectedCategory ? 'text-brand-gold font-medium' : 'text-brand-muted-light hover:text-brand-charcoal'
            )}
          >
            All Jewelry
          </button>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id)
                setSearchParams({ category: cat.id })
              }}
              className={cn(
                'block text-sm transition-colors',
                selectedCategory === cat.id ? 'text-brand-gold font-medium' : 'text-brand-muted-light hover:text-brand-charcoal'
              )}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="font-serif text-sm tracking-widest-xl uppercase text-brand-charcoal mb-4">
          Price
        </h3>
        <div className="space-y-2">
          {priceRanges.map(range => (
            <button
              key={range.label}
              onClick={() =>
                setSelectedPrice(selectedPrice?.label === range.label ? null : range)
              }
              className={cn(
                'block text-sm transition-colors',
                selectedPrice?.label === range.label ? 'text-brand-gold font-medium' : 'text-brand-muted-light hover:text-brand-charcoal'
              )}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="font-serif text-sm tracking-widest-xl uppercase text-brand-charcoal mb-4">
          Material
        </h3>
        <div className="space-y-2">
          {materials.map(mat => (
            <button
              key={mat}
              onClick={() =>
                setSelectedMaterial(selectedMaterial === mat ? '' : mat)
              }
              className={cn(
                'block text-sm transition-colors',
                selectedMaterial === mat ? 'text-brand-gold font-medium' : 'text-brand-muted-light hover:text-brand-charcoal'
              )}
            >
              {mat}
            </button>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <div className="pt-20 lg:pt-24 min-h-screen">
      {/* Page header */}
      <div className="bg-brand-ivory py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-gold text-xs tracking-widest-2xl uppercase mb-3 font-medium">
            Collection
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-charcoal font-light">
            {selectedCategory
              ? categories.find(c => c.id === selectedCategory)?.name || 'Shop'
              : 'All Jewelry'}
          </h1>
          <div className="w-16 h-px bg-brand-gold mx-auto mt-6" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Top bar: count + sort + filter toggle */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
              className="lg:hidden flex items-center gap-2 text-sm text-brand-charcoal"
            >
              <SlidersHorizontal size={16} />
              Filters
              {activeFiltersCount > 0 && (
                <span className="bg-brand-gold text-brand-charcoal text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {activeFiltersCount}
                </span>
              )}
            </button>
            <p className="text-sm text-brand-muted-light hidden sm:block">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-brand-muted-light hidden sm:block">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-sm text-brand-charcoal bg-transparent border-none focus:outline-none cursor-pointer appearance-none pr-6"
              style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'12\' height=\'12\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%238a8278\' stroke-width=\'2\'%3E%3Cpolyline points=\'6 9 12 15 18 9\'/%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right center' }}
            >
              {sortOptions.map(opt => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex gap-8 lg:gap-12">
          {/* Sidebar (desktop) */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <FilterContent />
            {activeFiltersCount > 0 && (
              <button
                onClick={clearFilters}
                className="mt-6 text-xs text-brand-gold hover:text-brand-gold-dark transition-colors"
              >
                Clear all filters
              </button>
            )}
          </aside>

          {/* Mobile filters overlay */}
          {mobileFiltersOpen && (
            <div className="fixed inset-0 z-50 lg:hidden">
              <div className="absolute inset-0 bg-black/40" onClick={() => setMobileFiltersOpen(false)} />
              <div className="absolute top-0 left-0 h-full w-80 bg-brand-warm-white p-6 overflow-y-auto">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="font-serif text-lg tracking-wider uppercase">Filters</h2>
                  <button onClick={() => setMobileFiltersOpen(false)}>
                    <X size={20} />
                  </button>
                </div>
                <FilterContent />
              </div>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-brand-muted-light text-sm mb-4">
                  No pieces match your filters
                </p>
                <button
                  onClick={clearFilters}
                  className="text-brand-gold text-sm hover:underline"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                {filteredProducts.map(product => (
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
