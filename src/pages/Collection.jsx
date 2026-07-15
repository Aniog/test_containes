import { useState, useMemo, useRef, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import { PRODUCTS, CATEGORIES, MATERIALS, formatPrice } from '@/data/products'
import { ProductCard } from '@/components/product/ProductCard'
import { Select } from '@/components/ui/Select'
import { Sheet } from '@/components/ui/Sheet'
import { useStrkImages } from '@/hooks/useStrkImages'
import { cn } from '@/lib/utils'

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
]

const priceOptions = [
  { value: 'all', label: 'All Prices' },
  { value: 'under50', label: 'Under $50' },
  { value: '50to75', label: '$50 – $75' },
  { value: '75plus', label: '$75+' },
]

function matchesPrice(product, priceFilter) {
  if (priceFilter === 'all') return true
  if (priceFilter === 'under50') return product.price < 50
  if (priceFilter === '50to75') return product.price >= 50 && product.price <= 75
  if (priceFilter === '75plus') return product.price > 75
  return true
}

export function Collection() {
  const [searchParams, setSearchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || ''

  const [selectedCategories, setSelectedCategories] = useState(
    initialCategory ? [initialCategory] : []
  )
  const [selectedMaterials, setSelectedMaterials] = useState([])
  const [priceFilter, setPriceFilter] = useState('all')
  const [sort, setSort] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const containerRef = useRef(null)
  useStrkImages(containerRef, [selectedCategories.join(','), selectedMaterials.join(','), priceFilter, sort])

  useEffect(() => {
    const cat = searchParams.get('category')
    if (cat) setSelectedCategories([cat])
    else setSelectedCategories([])
  }, [searchParams])

  const toggleCategory = (id) => {
    setSelectedCategories((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    )
  }

  const toggleMaterial = (id) => {
    setSelectedMaterials((prev) =>
      prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id]
    )
  }

  const filtered = useMemo(() => {
    let list = PRODUCTS.filter((p) => {
      const categoryMatch =
        selectedCategories.length === 0 || selectedCategories.includes(p.category)
      const materialMatch =
        selectedMaterials.length === 0 || selectedMaterials.includes(p.material)
      const priceMatch = matchesPrice(p, priceFilter)
      return categoryMatch && materialMatch && priceMatch
    })

    if (sort === 'price-asc') list = [...list].sort((a, b) => a.price - b.price)
    if (sort === 'price-desc') list = [...list].sort((a, b) => b.price - a.price)
    if (sort === 'rating') list = [...list].sort((a, b) => b.rating - a.rating)

    return list
  }, [selectedCategories, selectedMaterials, priceFilter, sort])

  const activeFilterCount =
    selectedCategories.length + selectedMaterials.length + (priceFilter !== 'all' ? 1 : 0)

  const Filters = ({ onClose }) => (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between md:hidden">
        <h3 className="font-serif text-xl uppercase tracking-wide">Filters</h3>
        <button onClick={onClose} className="p-2">
          <X size={20} />
        </button>
      </div>

      <div>
        <h4 className="mb-3 text-xs font-semibold uppercase tracking-widest text-vel-muted">
          Category
        </h4>
        <div className="flex flex-col gap-2">
          {CATEGORIES.map((cat) => (
            <label
              key={cat.id}
              className="flex cursor-pointer items-center gap-2 text-sm text-vel-base"
            >
              <input
                type="checkbox"
                checked={selectedCategories.includes(cat.id)}
                onChange={() => toggleCategory(cat.id)}
                className="h-4 w-4 accent-vel-accent"
              />
              {cat.label}
            </label>
          ))}
        </div>
      </div>

      <div>
        <h4 className="mb-3 text-xs font-semibold uppercase tracking-widest text-vel-muted">
          Price
        </h4>
        <div className="flex flex-col gap-2">
          {priceOptions.map((opt) => (
            <label
              key={opt.value}
              className="flex cursor-pointer items-center gap-2 text-sm text-vel-base"
            >
              <input
                type="radio"
                name="price"
                checked={priceFilter === opt.value}
                onChange={() => setPriceFilter(opt.value)}
                className="h-4 w-4 accent-vel-accent"
              />
              {opt.label}
            </label>
          ))}
        </div>
      </div>

      <div>
        <h4 className="mb-3 text-xs font-semibold uppercase tracking-widest text-vel-muted">
          Material
        </h4>
        <div className="flex flex-col gap-2">
          {MATERIALS.map((mat) => (
            <label
              key={mat.id}
              className="flex cursor-pointer items-center gap-2 text-sm text-vel-base"
            >
              <input
                type="checkbox"
                checked={selectedMaterials.includes(mat.id)}
                onChange={() => toggleMaterial(mat.id)}
                className="h-4 w-4 accent-vel-accent"
              />
              {mat.label}
            </label>
          ))}
        </div>
      </div>

      {activeFilterCount > 0 && (
        <button
          type="button"
          onClick={() => {
            setSelectedCategories([])
            setSelectedMaterials([])
            setPriceFilter('all')
          }}
          className="text-left text-sm text-vel-accent underline underline-offset-4"
        >
          Clear all filters
        </button>
      )}
    </div>
  )

  return (
    <div ref={containerRef} className="py-8 md:py-14">
      <div className="container-vel">
        <div className="mb-8 md:mb-12">
          <p className="mb-2 text-xs font-medium uppercase tracking-widest text-vel-accent">
            The Collection
          </p>
          <h1 id="shop-title" className="heading-serif text-4xl md:text-5xl">
            Shop All Jewelry
          </h1>
        </div>

        <div className="flex flex-col gap-8 md:flex-row">
          {/* Desktop sidebar */}
          <aside className="hidden w-56 flex-shrink-0 md:block">
            <Filters />
          </aside>

          {/* Mobile filter toggle + grid */}
          <div className="flex-1">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="flex items-center gap-2 border border-vel-border px-4 py-2.5 text-xs font-medium uppercase tracking-wide md:hidden"
              >
                <SlidersHorizontal size={14} />
                Filters
                {activeFilterCount > 0 && (
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-vel-accent text-[10px] text-white">
                    {activeFilterCount}
                  </span>
                )}
              </button>

              <span className="text-sm text-vel-muted">
                {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
              </span>

              <Select
                label={null}
                value={sort}
                onChange={setSort}
                options={sortOptions}
                className="w-48"
                aria-label="Sort products"
              />
            </div>

            {filtered.length === 0 ? (
              <div className="py-20 text-center">
                <p className="font-serif text-xl text-vel-base">
                  No pieces match your filters.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategories([])
                    setSelectedMaterials([])
                    setPriceFilter('all')
                  }}
                  className="mt-4 text-sm text-vel-accent underline"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-3 md:gap-x-6 md:gap-y-12">
                {filtered.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    contextId="shop-title"
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filters */}
      <Sheet open={mobileFiltersOpen} onClose={() => setMobileFiltersOpen(false)}>
        <div className="h-full overflow-y-auto p-6">
          <Filters onClose={() => setMobileFiltersOpen(false)} />
        </div>
      </Sheet>
    </div>
  )
}
