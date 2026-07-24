import { useState, useMemo, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { useStrkImages } from '@/hooks/useStrkImages.jsx'
import ProductCard from '@/components/products/ProductCard'
import { useProducts } from '@/hooks/useProducts'
import { Skeleton } from '@/components/ui/skeleton'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Separator } from '@/components/ui/separator'

const categories = ['Earrings', 'Necklaces', 'Huggies', 'Sets']
const materials = ['Gold Plated', 'Silver Plated']
const priceRanges = [
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 – $70', min: 40, max: 70 },
  { label: '$70 – $100', min: 70, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
]

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Name: A–Z', value: 'name-asc' },
]

function getFields(p) {
  return p?.data ?? p ?? {}
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const { products, loading, error } = useProducts()
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [sort, setSort] = useState('featured')

  const initialCategory = (searchParams.get('category') || '').toLowerCase()
  const [selectedCategories, setSelectedCategories] = useState(
    initialCategory ? [initialCategory] : []
  )
  const [selectedMaterials, setSelectedMaterials] = useState([])
  const [selectedPrice, setSelectedPrice] = useState(null)

  useEffect(() => {
    const cat = searchParams.get('category')
    if (cat) {
      setSelectedCategories([cat.toLowerCase()])
    }
  }, [searchParams])

  const filtered = useMemo(() => {
    let list = [...products]

    if (selectedCategories.length > 0) {
      list = list.filter((p) => {
        const cat = (getFields(p).category || '').toLowerCase()
        return selectedCategories.some((c) => cat.includes(c))
      })
    }

    if (selectedMaterials.length > 0) {
      list = list.filter((p) => {
        const variants = getFields(p).variants || ['gold']
        return selectedMaterials.some((m) =>
          variants.some((v) => v.toLowerCase().includes(m.toLowerCase().replace(' plated', '')))
        )
      })
    }

    if (selectedPrice) {
      list = list.filter((p) => {
        const price = getFields(p).price ?? 0
        return price >= selectedPrice.min && price <= selectedPrice.max
      })
    }

    if (sort === 'price-asc') {
      list.sort((a, b) => (getFields(a).price ?? 0) - (getFields(b).price ?? 0))
    } else if (sort === 'price-desc') {
      list.sort((a, b) => (getFields(b).price ?? 0) - (getFields(a).price ?? 0))
    } else if (sort === 'name-asc') {
      list.sort((a, b) => (getFields(a).name || '').localeCompare(getFields(b).name || ''))
    }

    return list
  }, [products, selectedCategories, selectedMaterials, selectedPrice, sort])

  const gridRef = useStrkImages([loading, filtered])

  const toggleCategory = (cat) => {
    const key = cat.toLowerCase()
    setSelectedCategories((prev) =>
      prev.includes(key) ? prev.filter((c) => c !== key) : [...prev, key]
    )
  }

  const toggleMaterial = (mat) => {
    setSelectedMaterials((prev) =>
      prev.includes(mat) ? prev.filter((m) => m !== mat) : [...prev, mat]
    )
  }

  const clearFilters = () => {
    setSelectedCategories([])
    setSelectedMaterials([])
    setSelectedPrice(null)
    setSearchParams({})
  }

  const activeFiltersCount =
    selectedCategories.length + selectedMaterials.length + (selectedPrice ? 1 : 0)

  const FilterContent = () => (
    <div className="space-y-8">
      <div>
        <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-velmora-espresso">
          Category
        </h4>
        <div className="space-y-2">
          {categories.map((cat) => (
            <label key={cat} className="flex cursor-pointer items-center gap-3 text-sm text-velmora-taupe hover:text-velmora-espresso">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-velmora-taupe/30 text-velmora-gold focus:ring-velmora-gold"
                checked={selectedCategories.includes(cat.toLowerCase())}
                onChange={() => toggleCategory(cat)}
              />
              {cat}
            </label>
          ))}
        </div>
      </div>

      <Separator className="bg-velmora-taupe/15" />

      <div>
        <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-velmora-espresso">
          Price
        </h4>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <label key={range.label} className="flex cursor-pointer items-center gap-3 text-sm text-velmora-taupe hover:text-velmora-espresso">
              <input
                type="radio"
                name="price"
                className="h-4 w-4 border-velmora-taupe/30 text-velmora-gold focus:ring-velmora-gold"
                checked={selectedPrice?.label === range.label}
                onChange={() => setSelectedPrice(range)}
              />
              {range.label}
            </label>
          ))}
        </div>
      </div>

      <Separator className="bg-velmora-taupe/15" />

      <div>
        <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-velmora-espresso">
          Material
        </h4>
        <div className="space-y-2">
          {materials.map((mat) => (
            <label key={mat} className="flex cursor-pointer items-center gap-3 text-sm text-velmora-taupe hover:text-velmora-espresso">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-velmora-taupe/30 text-velmora-gold focus:ring-velmora-gold"
                checked={selectedMaterials.includes(mat)}
                onChange={() => toggleMaterial(mat)}
              />
              {mat}
            </label>
          ))}
        </div>
      </div>

      {activeFiltersCount > 0 && (
        <button
          onClick={clearFilters}
          className="text-sm font-medium text-velmora-gold underline-offset-4 hover:underline"
        >
          Clear all filters
        </button>
      )}
    </div>
  )

  return (
    <div className="animate-fade-in">
      <div className="bg-velmora-cream-dark py-12 pt-28 md:pt-32">
        <div className="mx-auto max-w-[1440px] px-4 text-center md:px-8">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.22em] text-velmora-gold">
            Velmora Fine Jewelry
          </p>
          <h1 className="font-serif text-4xl font-medium text-velmora-espresso md:text-5xl">
            The Collection
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-[1440px] px-4 py-8 md:px-8 md:py-12">
        <div className="flex flex-col gap-8 md:flex-row md:gap-12">
          <aside className="hidden w-64 flex-shrink-0 md:block">
            <FilterContent />
          </aside>

          <div className="flex-1" ref={gridRef}>
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Sheet open={mobileFiltersOpen} onOpenChange={setMobileFiltersOpen}>
                  <SheetTrigger asChild>
                    <button className="flex h-10 items-center gap-2 rounded-md border border-velmora-taupe/30 px-4 text-sm font-medium uppercase tracking-wider text-velmora-espresso md:hidden">
                      <SlidersHorizontal className="h-4 w-4" />
                      Filter
                      {activeFiltersCount > 0 && (
                        <span className="ml-1 flex h-5 w-5 items-center justify-center rounded-full bg-velmora-gold text-[10px] font-semibold text-velmora-espresso">
                          {activeFiltersCount}
                        </span>
                      )}
                    </button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-3/4 max-w-xs bg-velmora-cream">
                    <h3 className="mb-6 font-serif text-xl text-velmora-espresso">Filters</h3>
                    <FilterContent />
                  </SheetContent>
                </Sheet>
                <p className="text-sm text-velmora-taupe">
                  {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
                </p>
              </div>

              <div className="relative">
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="h-10 appearance-none rounded-md border border-velmora-taupe/30 bg-transparent pl-4 pr-10 text-sm text-velmora-espresso focus:outline-none focus:ring-1 focus:ring-velmora-gold"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-velmora-taupe" />
              </div>
            </div>

            {loading ? (
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 md:gap-6">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="space-y-3">
                    <Skeleton className="aspect-[3/4] w-full" />
                    <Skeleton className="h-4 w-2/3" />
                    <Skeleton className="h-4 w-1/3" />
                  </div>
                ))}
              </div>
            ) : error ? (
              <p className="text-velmora-taupe">Unable to load products.</p>
            ) : filtered.length === 0 ? (
              <div className="py-20 text-center">
                <p className="font-serif text-xl text-velmora-espresso">No products match your filters.</p>
                <button
                  onClick={clearFilters}
                  className="mt-4 text-sm font-medium text-velmora-gold hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 md:gap-6">
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
