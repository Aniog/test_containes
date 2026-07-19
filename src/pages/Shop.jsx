import { useState, useMemo, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { products, categories } from '@/data/products'
import ProductGrid from '@/components/product/ProductGrid'
import { cn } from '@/lib/utils'

const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $75', min: 50, max: 75 },
  { label: '$75 – $100', min: 75, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
]

const materials = ['Gold-Plated', 'Rhodium-Plated']

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Top Rated', value: 'rating' },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [sortBy, setSortBy] = useState('featured')
  const [openSections, setOpenSections] = useState({
    category: true,
    price: true,
    material: true,
  })

  const initialCategory = searchParams.get('category') || ''
  const [selectedCategories, setSelectedCategories] = useState(
    initialCategory ? [initialCategory] : [],
  )
  const [selectedPrices, setSelectedPrices] = useState([])
  const [selectedMaterials, setSelectedMaterials] = useState([])

  useEffect(() => {
    const category = searchParams.get('category')
    if (category) {
      setSelectedCategories([category])
    }
  }, [searchParams])

  const toggleCategory = (id) => {
    setSelectedCategories((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id],
    )
  }

  const togglePrice = (label) => {
    setSelectedPrices((prev) =>
      prev.includes(label) ? prev.filter((p) => p !== label) : [...prev, label],
    )
  }

  const toggleMaterial = (material) => {
    setSelectedMaterials((prev) =>
      prev.includes(material)
        ? prev.filter((m) => m !== material)
        : [...prev, material],
    )
  }

  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }))
  }

  const clearFilters = () => {
    setSelectedCategories([])
    setSelectedPrices([])
    setSelectedMaterials([])
    setSearchParams({})
  }

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (selectedCategories.length) {
      result = result.filter((p) => selectedCategories.includes(p.category))
    }

    if (selectedPrices.length) {
      result = result.filter((p) =>
        selectedPrices.some((label) => {
          const range = priceRanges.find((r) => r.label === label)
          return p.price >= range.min && p.price <= range.max
        }),
      )
    }

    if (selectedMaterials.length) {
      result = result.filter((p) =>
        selectedMaterials.some((m) =>
          p.material.toLowerCase().includes(m.toLowerCase()),
        ),
      )
    }

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
  }, [selectedCategories, selectedPrices, selectedMaterials, sortBy])

  const activeFilterCount =
    selectedCategories.length + selectedPrices.length + selectedMaterials.length

  const FilterContent = () => (
    <div className="space-y-8">
      <div>
        <button
          onClick={() => toggleSection('category')}
          className="w-full flex items-center justify-between text-xs uppercase tracking-[0.2em] font-medium text-espresso mb-4"
        >
          Category
          <ChevronDown
            size={16}
            className={`transition-transform ${
              openSections.category ? 'rotate-180' : ''
            }`}
          />
        </button>
        {openSections.category && (
          <div className="space-y-3">
            {categories.map((cat) => (
              <label
                key={cat.id}
                className="flex items-center gap-3 text-sm text-taupe cursor-pointer hover:text-espresso"
              >
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(cat.id)}
                  onChange={() => toggleCategory(cat.id)}
                  className="w-4 h-4 accent-gold border-stone rounded"
                />
                {cat.label}
              </label>
            ))}
          </div>
        )}
      </div>

      <div>
        <button
          onClick={() => toggleSection('price')}
          className="w-full flex items-center justify-between text-xs uppercase tracking-[0.2em] font-medium text-espresso mb-4"
        >
          Price
          <ChevronDown
            size={16}
            className={`transition-transform ${
              openSections.price ? 'rotate-180' : ''
            }`}
          />
        </button>
        {openSections.price && (
          <div className="space-y-3">
            {priceRanges.map((range) => (
              <label
                key={range.label}
                className="flex items-center gap-3 text-sm text-taupe cursor-pointer hover:text-espresso"
              >
                <input
                  type="checkbox"
                  checked={selectedPrices.includes(range.label)}
                  onChange={() => togglePrice(range.label)}
                  className="w-4 h-4 accent-gold border-stone rounded"
                />
                {range.label}
              </label>
            ))}
          </div>
        )}
      </div>

      <div>
        <button
          onClick={() => toggleSection('material')}
          className="w-full flex items-center justify-between text-xs uppercase tracking-[0.2em] font-medium text-espresso mb-4"
        >
          Material
          <ChevronDown
            size={16}
            className={`transition-transform ${
              openSections.material ? 'rotate-180' : ''
            }`}
          />
        </button>
        {openSections.material && (
          <div className="space-y-3">
            {materials.map((material) => (
              <label
                key={material}
                className="flex items-center gap-3 text-sm text-taupe cursor-pointer hover:text-espresso"
              >
                <input
                  type="checkbox"
                  checked={selectedMaterials.includes(material)}
                  onChange={() => toggleMaterial(material)}
                  className="w-4 h-4 accent-gold border-stone rounded"
                />
                {material}
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  )

  return (
    <div className="bg-ivory min-h-screen pt-28 md:pt-32 pb-20">
      <div className="mx-auto px-5 md:px-8 lg:px-12 xl:px-16">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-xs uppercase tracking-[0.2em] text-gold mb-3">
            The Collection
          </p>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-espresso">
            Shop All Jewelry
          </h1>
        </div>

        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="md:hidden flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-espresso"
          >
            <SlidersHorizontal size={16} strokeWidth={1.5} />
            Filter {activeFilterCount > 0 && `(${activeFilterCount})`}
          </button>

          <div className="hidden md:flex items-center gap-2">
            {activeFilterCount > 0 && (
              <button
                onClick={clearFilters}
                className="text-xs uppercase tracking-[0.15em] text-taupe hover:text-gold transition-colors"
              >
                Clear all
              </button>
            )}
          </div>

          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-transparent border border-stone pl-4 pr-10 py-2 text-xs uppercase tracking-[0.15em] text-espresso focus:outline-none focus:border-gold cursor-pointer"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <ChevronDown
              size={14}
              className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
            />
          </div>
        </div>

        <div className="flex gap-12">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-64 flex-shrink-0">
            <div className="sticky top-28">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xs uppercase tracking-[0.2em] font-medium text-espresso">
                  Filters
                </h2>
                {activeFilterCount > 0 && (
                  <button
                    onClick={clearFilters}
                    className="text-[10px] uppercase tracking-[0.15em] text-taupe hover:text-gold transition-colors"
                  >
                    Clear
                  </button>
                )}
              </div>
              <FilterContent />
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1 min-w-0">
            <p className="text-sm text-taupe mb-6">
              {filteredProducts.length} piece
              {filteredProducts.length !== 1 ? 's' : ''}
            </p>
            <ProductGrid products={filteredProducts} />
          </div>
        </div>
      </div>

      {/* Mobile filters drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <div
            className="absolute inset-0 bg-espresso/40"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full w-[85%] max-w-sm bg-ivory shadow-2xl p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-2xl">Filters</h2>
              <button onClick={() => setMobileFiltersOpen(false)}>
                <X size={22} strokeWidth={1.5} />
              </button>
            </div>
            <FilterContent />
            <button
              onClick={() => setMobileFiltersOpen(false)}
              className="w-full mt-8 bg-gold text-white py-3.5 text-xs uppercase tracking-[0.2em] font-medium hover:bg-gold-dark transition-colors"
            >
              Show {filteredProducts.length} Results
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
