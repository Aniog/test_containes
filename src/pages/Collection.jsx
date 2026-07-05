import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ChevronDown, SlidersHorizontal, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { categories, materials, products } from '@/data/products'
import ProductCard from '@/components/ProductCard'

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
]

export default function Collection() {
  const [searchParams, setSearchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || ''

  const [selectedCategories, setSelectedCategories] = useState(
    initialCategory ? [initialCategory] : []
  )
  const [selectedMaterials, setSelectedMaterials] = useState([])
  const [priceRange, setPriceRange] = useState({ min: '', max: '' })
  const [sort, setSort] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

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

  const filteredProducts = useMemo(() => {
    let list = [...products]

    if (selectedCategories.length) {
      list = list.filter((p) => selectedCategories.includes(p.category))
    }

    if (selectedMaterials.length) {
      list = list.filter((p) => selectedMaterials.includes(p.material))
    }

    const min = priceRange.min ? Number(priceRange.min) : 0
    const max = priceRange.max ? Number(priceRange.max) : Infinity
    list = list.filter((p) => p.price >= min && p.price <= max)

    switch (sort) {
      case 'price-asc':
        list.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        list.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        list.sort((a, b) => b.rating - a.rating)
        break
      default:
        break
    }

    return list
  }, [selectedCategories, selectedMaterials, priceRange, sort])

  const FilterPanel = ({ mobile = false }) => (
    <div className="space-y-8">
      {mobile && (
        <div className="flex items-center justify-between">
          <h3 className="font-serif text-xl">Filters</h3>
          <button onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters">
            <X size={20} />
          </button>
        </div>
      )}

      <div>
        <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest">
          Category
        </h4>
        <div className="space-y-2">
          {categories.map((cat) => (
            <label
              key={cat.id}
              className="flex cursor-pointer items-center gap-3 text-sm text-muted-foreground"
            >
              <input
                type="checkbox"
                checked={selectedCategories.includes(cat.id)}
                onChange={() => toggleCategory(cat.id)}
                className="h-4 w-4 accent"
              />
              {cat.label}
            </label>
          ))}
        </div>
      </div>

      <div>
        <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest">
          Material
        </h4>
        <div className="space-y-2">
          {materials.map((mat) => (
            <label
              key={mat.id}
              className="flex cursor-pointer items-center gap-3 text-sm text-muted-foreground"
            >
              <input
                type="checkbox"
                checked={selectedMaterials.includes(mat.id)}
                onChange={() => toggleMaterial(mat.id)}
                className="h-4 w-4 accent"
              />
              {mat.label}
            </label>
          ))}
        </div>
      </div>

      <div>
        <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest">
          Price
        </h4>
        <div className="flex items-center gap-2">
          <input
            type="number"
            placeholder="Min"
            value={priceRange.min}
            onChange={(e) =>
              setPriceRange((prev) => ({ ...prev, min: e.target.value }))
            }
            className="w-full rounded-md border border-border bg-card px-3 py-2 text-sm"
          />
          <span className="text-muted-foreground">—</span>
          <input
            type="number"
            placeholder="Max"
            value={priceRange.max}
            onChange={(e) =>
              setPriceRange((prev) => ({ ...prev, max: e.target.value }))
            }
            className="w-full rounded-md border border-border bg-card px-3 py-2 text-sm"
          />
        </div>
      </div>

      <button
        onClick={() => {
          setSelectedCategories([])
          setSelectedMaterials([])
          setPriceRange({ min: '', max: '' })
        }}
        className="text-xs font-semibold uppercase tracking-widest underline underline-offset-4 text-muted-foreground"
      >
        Clear all filters
      </button>
    </div>
  )

  return (
    <div className="pt-20 md:pt-24">
      <div className="border-b border-border bg-card py-10">
        <div className="mx-auto max-w-7xl px-4 text-center md:px-6">
          <p className="mb-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">
            The Collection
          </p>
          <h1 className="font-serif text-4xl font-light md:text-5xl">
            Shop All Jewelry
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-10 md:flex md:gap-10 md:px-6">
        {/* Desktop filters */}
        <aside className="hidden w-56 flex-shrink-0 md:block">
          <FilterPanel />
        </aside>

        {/* Mobile filter button + drawer */}
        <div className="mb-6 flex items-center justify-between md:hidden">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2 text-sm font-medium"
          >
            <SlidersHorizontal size={16} /> Filters
          </button>
          <div className="relative">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="appearance-none rounded-md border border-border bg-card py-2 pl-3 pr-9 text-sm"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <ChevronDown
              size={16}
              className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground"
            />
          </div>
        </div>

        <div
          className={cn(
            'fixed inset-0 z-[60] bg-background transition-transform duration-300 md:hidden',
            mobileFiltersOpen ? 'translate-x-0' : '-translate-x-full'
          )}
        >
          <div className="h-full overflow-y-auto p-6">
            <FilterPanel mobile />
          </div>
        </div>

        {/* Product grid */}
        <div className="flex-1">
          <div className="mb-6 hidden items-center justify-between md:flex">
            <span className="text-sm text-muted-foreground">
              {filteredProducts.length} products
            </span>
            <div className="relative">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="appearance-none rounded-md border border-border bg-card py-2 pl-3 pr-9 text-sm"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <ChevronDown
                size={16}
                className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground"
              />
            </div>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="py-20 text-center">
              <p className="font-serif text-xl">No pieces match your filters.</p>
              <button
                onClick={() => {
                  setSelectedCategories([])
                  setSelectedMaterials([])
                  setPriceRange({ min: '', max: '' })
                }}
                className="mt-4 text-sm underline"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
