import { useState, useMemo } from 'react'
import { SlidersHorizontal, X } from 'lucide-react'
import { PRODUCTS, CATEGORIES } from '@/data/products'
import { ProductCard } from '@/components/ui/ProductCard'
import { cn } from '@/lib/utils'

const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
]

const PRICE_RANGES = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $75', min: 50, max: 75 },
  { label: '$75 – $100', min: 75, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
]

export default function Shop() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [selectedCategories, setSelectedCategories] = useState([])
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([])
  const [sort, setSort] = useState('featured')

  const toggleCategory = (cat) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    )
  }

  const togglePriceRange = (range) => {
    setSelectedPriceRanges((prev) =>
      prev.includes(range.label)
        ? prev.filter((r) => r !== range.label)
        : [...prev, range.label]
    )
  }

  const filtered = useMemo(() => {
    let result = [...PRODUCTS]

    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category))
    }

    if (selectedPriceRanges.length > 0) {
      result = result.filter((p) =>
        selectedPriceRanges.some((label) => {
          const range = PRICE_RANGES.find((r) => r.label === label)
          return range && p.price >= range.min && p.price <= range.max
        })
      )
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
  }, [selectedCategories, selectedPriceRanges, sort])

  const FilterContent = () => (
    <div className="space-y-8">
      <div>
        <h3 className="font-sans text-xs uppercase tracking-[0.16em] text-cream mb-4">
          Category
        </h3>
        <div className="space-y-3">
          {CATEGORIES.map((cat) => (
            <label
              key={cat}
              className="flex items-center gap-3 text-sm text-warm-gray hover:text-cream cursor-pointer transition-colors"
            >
              <span
                className={cn(
                  'w-4 h-4 border flex items-center justify-center transition-colors',
                  selectedCategories.includes(cat)
                    ? 'bg-accent border-accent'
                    : 'border-cream/30'
                )}
              >
                {selectedCategories.includes(cat) && (
                  <span className="block w-2 h-2 bg-velvet" />
                )}
              </span>
              <input
                type="checkbox"
                className="sr-only"
                checked={selectedCategories.includes(cat)}
                onChange={() => toggleCategory(cat)}
              />
              {cat}
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-sans text-xs uppercase tracking-[0.16em] text-cream mb-4">
          Price
        </h3>
        <div className="space-y-3">
          {PRICE_RANGES.map((range) => (
            <label
              key={range.label}
              className="flex items-center gap-3 text-sm text-warm-gray hover:text-cream cursor-pointer transition-colors"
            >
              <span
                className={cn(
                  'w-4 h-4 border flex items-center justify-center transition-colors',
                  selectedPriceRanges.includes(range.label)
                    ? 'bg-accent border-accent'
                    : 'border-cream/30'
                )}
              >
                {selectedPriceRanges.includes(range.label) && (
                  <span className="block w-2 h-2 bg-velvet" />
                )}
              </span>
              <input
                type="checkbox"
                className="sr-only"
                checked={selectedPriceRanges.includes(range.label)}
                onChange={() => togglePriceRange(range)}
              />
              {range.label}
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-sans text-xs uppercase tracking-[0.16em] text-cream mb-4">
          Material
        </h3>
        <label className="flex items-center gap-3 text-sm text-warm-gray">
          <span className="w-2 h-2 rounded-full bg-accent" />
          18K Gold Plated
        </label>
      </div>
    </div>
  )

  return (
    <main className="pt-20 md:pt-24 pb-20 md:pb-28 bg-velvet min-h-screen">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-10">
        <div className="mb-10 md:mb-14">
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-accent mb-3">
            Velmora Fine Jewelry
          </p>
          <h1 className="font-serif text-3xl md:text-5xl text-cream">Shop the Collection</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Mobile filter overlay */}
          {mobileFiltersOpen && (
            <div className="fixed inset-0 z-50 lg:hidden">
              <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={() => setMobileFiltersOpen(false)}
              />
              <div className="absolute left-0 top-0 h-full w-80 max-w-[85vw] bg-velvet-secondary border-r border-cream/10 p-6 overflow-y-auto">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="font-serif text-xl uppercase tracking-widest text-cream">
                    Filters
                  </h2>
                  <button
                    type="button"
                    onClick={() => setMobileFiltersOpen(false)}
                    className="text-warm-gray hover:text-cream"
                  >
                    <X size={22} />
                  </button>
                </div>
                <FilterContent />
              </div>
            </div>
          )}

          <section className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="lg:hidden flex items-center gap-2 font-sans text-xs uppercase tracking-[0.16em] text-cream border border-cream/20 px-4 py-2.5 hover:border-accent hover:text-accent transition-colors"
              >
                <SlidersHorizontal size={14} /> Filters
              </button>

              <div className="flex items-center gap-3 ml-auto">
                <span className="hidden sm:inline text-xs text-warm-gray uppercase tracking-[0.12em]">
                  Sort
                </span>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="bg-transparent border border-cream/20 text-cream text-sm px-3 py-2 focus:outline-none focus:border-accent"
                >
                  {SORT_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value} className="bg-velvet-secondary">
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <p className="text-sm text-warm-gray mb-6">
              {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
            </p>

            {filtered.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="py-20 text-center border border-cream/10">
                <p className="font-serif text-xl text-cream mb-2">No pieces match your filters</p>
                <p className="text-sm text-warm-gray mb-6">Try adjusting your selection.</p>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategories([])
                    setSelectedPriceRanges([])
                  }}
                  className="px-6 py-3 bg-cream text-velvet text-xs font-sans uppercase tracking-[0.16em] font-medium hover:bg-ivory-dark transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  )
}
