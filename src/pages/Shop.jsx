import { useState, useEffect, useRef, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import ProductCard from '@/components/ProductCard'
import { SortSelect } from '@/components/ui/SortSelect'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
]

const categoryOptions = [
  { value: 'earrings', label: 'Earrings' },
  { value: 'necklaces', label: 'Necklaces' },
  { value: 'huggies', label: 'Huggies' },
  { value: 'sets', label: 'Gift Sets' },
]

const materialOptions = [
  { value: '18k-gold-plated', label: '18K Gold Plated' },
  { value: 'sterling-silver', label: 'Sterling Silver' },
]

export default function Shop() {
  const containerRef = useRef(null)
  const [searchParams, setSearchParams] = useSearchParams()

  const [sort, setSort] = useState('featured')
  const [selectedCategories, setSelectedCategories] = useState(() => {
    const cat = searchParams.get('category')
    return cat ? [cat] : []
  })
  const [selectedMaterials, setSelectedMaterials] = useState([])
  const [priceRange, setPriceRange] = useState(120)
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  useEffect(() => {
    const cat = searchParams.get('category')
    if (cat) {
      setSelectedCategories([cat])
    }
  }, [searchParams])

  const filtered = useMemo(() => {
    let result = [...products]

    if (selectedCategories.length) {
      result = result.filter((p) => selectedCategories.includes(p.category))
    }

    if (selectedMaterials.length) {
      result = result.filter((p) => selectedMaterials.includes(p.material))
    }

    result = result.filter((p) => p.price <= priceRange)

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
  }, [selectedCategories, selectedMaterials, priceRange, sort])

  const toggleCategory = (value) => {
    setSelectedCategories((prev) =>
      prev.includes(value)
        ? prev.filter((v) => v !== value)
        : [...prev, value],
    )
  }

  const toggleMaterial = (value) => {
    setSelectedMaterials((prev) =>
      prev.includes(value)
        ? prev.filter((v) => v !== value)
        : [...prev, value],
    )
  }

  const clearFilters = () => {
    setSelectedCategories([])
    setSelectedMaterials([])
    setPriceRange(120)
    setSearchParams({})
  }

  const FilterGroup = ({ title, options, selected, toggle }) => (
    <div className="mb-8">
      <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-velmora-stone">
        {title}
      </h3>
      <div className="space-y-2">
        {options.map((option) => (
          <label
            key={option.value}
            className="flex cursor-pointer items-center gap-3 text-sm text-velmora-charcoal"
          >
            <span
              className={cn(
                'flex h-4 w-4 items-center justify-center border transition-colors',
                selected.includes(option.value)
                  ? 'border-velmora-gold bg-velmora-gold'
                  : 'border-velmora-taupe',
              )}
            >
              {selected.includes(option.value) && (
                <span className="block h-1.5 w-1.5 bg-white" />
              )}
            </span>
            <input
              type="checkbox"
              className="sr-only"
              checked={selected.includes(option.value)}
              onChange={() => toggle(option.value)}
            />
            {option.label}
          </label>
        ))}
      </div>
    </div>
  )

  return (
    <div ref={containerRef} className="bg-velmora-cream">
      <div className="mx-auto max-w-7xl px-4 py-8 md:px-8 md:py-12">
        <div className="mb-10 text-center">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.25em] text-velmora-gold">
            The Collection
          </p>
          <h1 className="font-serif text-4xl md:text-5xl">Shop All</h1>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Mobile filter toggle */}
          <div className="flex items-center justify-between lg:hidden">
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest"
            >
              <SlidersHorizontal className="h-4 w-4" /> Filters
            </button>
            <SortSelect
              value={sort}
              onChange={setSort}
              options={sortOptions}
            />
          </div>

          {/* Sidebar */}
          <aside
            className={cn(
              'fixed inset-y-0 left-0 z-40 w-72 transform bg-velmora-ivory p-6 shadow-2xl transition-transform duration-500 lg:static lg:z-auto lg:w-64 lg:transform-none lg:bg-transparent lg:p-0 lg:shadow-none',
              mobileFiltersOpen ? 'translate-x-0' : '-translate-x-full',
            )}
          >
            <div className="flex items-center justify-between lg:hidden">
              <h2 className="font-serif text-2xl">Filters</h2>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                aria-label="Close filters"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-6 lg:mt-0">
              <FilterGroup
                title="Category"
                options={categoryOptions}
                selected={selectedCategories}
                toggle={toggleCategory}
              />
              <FilterGroup
                title="Material"
                options={materialOptions}
                selected={selectedMaterials}
                toggle={toggleMaterial}
              />

              <div className="mb-8">
                <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-velmora-stone">
                  Max Price: ${priceRange}
                </h3>
                <input
                  type="range"
                  min="30"
                  max="120"
                  step="5"
                  value={priceRange}
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                  className="w-full accent-velmora-gold"
                />
                <div className="mt-2 flex justify-between text-xs text-velmora-stone">
                  <span>$30</span>
                  <span>$120</span>
                </div>
              </div>

              <button
                onClick={clearFilters}
                className="text-sm font-semibold uppercase tracking-widest text-velmora-stone underline underline-offset-4 transition-colors hover:text-velmora-gold"
              >
                Clear Filters
              </button>
            </div>
          </aside>

          {mobileFiltersOpen && (
            <div
              className="fixed inset-0 z-30 bg-velmora-charcoal/30 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileFiltersOpen(false)}
            />
          )}

          {/* Product grid */}
          <main className="flex-1">
            <div className="mb-6 hidden items-center justify-between lg:flex">
              <p className="text-sm text-velmora-stone">
                {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
              </p>
              <SortSelect
                value={sort}
                onChange={setSort}
                options={sortOptions}
              />
            </div>

            {filtered.length === 0 ? (
              <div className="py-16 text-center">
                <p className="font-serif text-2xl">No pieces match your filters.</p>
                <Button className="mt-6" onClick={clearFilters}>
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3">
                {filtered.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    queryContext="[shop all] [the collection]"
                  />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  )
}
