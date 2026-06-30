import { useEffect, useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { fetchProducts } from '@/api/products'
import ProductCard from '@/components/shared/ProductCard'
import Spinner from '@/components/ui/Spinner'
import { useImageLoader } from '@/hooks/useImageLoader'
import { SlidersHorizontal, X } from 'lucide-react'

const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets']
const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
]

const priceRanges = [
  { label: 'All', min: 0, max: Infinity },
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $80', min: 50, max: 80 },
  { label: 'Over $80', min: 80, max: Infinity },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [products, setProducts] = useState([])
  const [status, setStatus] = useState('loading')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const categoryParam = searchParams.get('category') || 'All'
  const sortParam = searchParams.get('sort') || 'featured'
  const priceParam = searchParams.get('price') || 'All'

  const containerRef = useImageLoader([products])

  useEffect(() => {
    let mounted = true
    setStatus('loading')

    fetchProducts({ category: categoryParam === 'All' ? '' : categoryParam, sortBy: sortParam })
      .then((rows) => {
        if (!mounted) return
        setProducts(rows)
        setStatus('ready')
      })
      .catch(() => {
        if (!mounted) return
        setStatus('error')
      })

    return () => {
      mounted = false
    }
  }, [categoryParam, sortParam])

  const filteredProducts = useMemo(() => {
    const range = priceRanges.find((r) => r.label === priceParam) || priceRanges[0]
    return products.filter((product) => {
      return product.price >= range.min && product.price <= range.max
    })
  }, [products, priceParam])

  const updateParam = (key, value) => {
    const next = new URLSearchParams(searchParams)
    if (value === 'All' || !value) {
      next.delete(key)
    } else {
      next.set(key, value)
    }
    setSearchParams(next)
  }

  const FilterSection = ({ title, options, selected, onSelect }) => (
    <div className="mb-8">
      <h4 className="mb-3 font-sans text-xs uppercase tracking-[0.2em] text-velmora-ivory">
        {title}
      </h4>
      <div className="space-y-2">
        {options.map((option) => (
          <button
            key={typeof option === 'string' ? option : option.value}
            type="button"
            onClick={() => onSelect(typeof option === 'string' ? option : option.value)}
            className={`block w-full text-left text-sm transition-colors ${
              selected === (typeof option === 'string' ? option : option.value)
                ? 'text-velmora-gold'
                : 'text-velmora-taupe-light hover:text-velmora-ivory'
            }`}
          >
            {typeof option === 'string' ? option : option.label}
          </button>
        ))}
      </div>
    </div>
  )

  return (
    <main ref={containerRef} className="min-h-screen bg-velmora-base">
      <div className="border-b border-velmora-taupe/30 bg-velmora-base-light">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <p className="mb-2 font-sans text-xs uppercase tracking-[0.25em] text-velmora-gold">
            The Collection
          </p>
          <h1 className="font-serif text-4xl tracking-wide sm:text-5xl">
            Shop All
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between">
          <button
            type="button"
            onClick={() => setMobileFiltersOpen(true)}
            className="flex items-center gap-2 font-sans text-xs uppercase tracking-[0.15em] text-velmora-ivory md:hidden"
          >
            <SlidersHorizontal size={16} />
            Filters
          </button>

          <div className="flex items-center gap-3">
            <label htmlFor="sort" className="hidden text-sm text-velmora-taupe-light sm:block">
              Sort by
            </label>
            <select
              id="sort"
              value={sortParam}
              onChange={(e) => updateParam('sort', e.target.value)}
              className="border border-velmora-taupe/50 bg-velmora-base px-3 py-2 text-sm text-velmora-ivory focus:border-velmora-gold focus:outline-none"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex gap-12">
          {/* Desktop sidebar */}
          <aside className="hidden w-56 flex-shrink-0 md:block">
            <FilterSection
              title="Category"
              options={categories}
              selected={categoryParam}
              onSelect={(value) => updateParam('category', value)}
            />
            <FilterSection
              title="Price"
              options={priceRanges}
              selected={priceParam}
              onSelect={(value) => updateParam('price', value)}
            />
          </aside>

          {/* Mobile filters */}
          {mobileFiltersOpen && (
            <div className="fixed inset-0 z-50 bg-velmora-base md:hidden">
              <div className="flex items-center justify-between border-b border-velmora-taupe/30 p-4">
                <span className="font-serif text-xl tracking-wide">Filters</span>
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(false)}
                  aria-label="Close filters"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="p-6">
                <FilterSection
                  title="Category"
                  options={categories}
                  selected={categoryParam}
                  onSelect={(value) => updateParam('category', value)}
                />
                <FilterSection
                  title="Price"
                  options={priceRanges}
                  selected={priceParam}
                  onSelect={(value) => updateParam('price', value)}
                />
              </div>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1">
            {status === 'loading' && (
              <div className="flex h-64 items-center justify-center">
                <Spinner className="text-velmora-gold" />
              </div>
            )}

            {status === 'error' && (
              <div className="text-center text-velmora-taupe-light">
                Failed to load products. Please try again.
              </div>
            )}

            {status === 'ready' && filteredProducts.length === 0 && (
              <div className="py-20 text-center text-velmora-taupe-light">
                <p className="font-serif text-xl">No products match your filters.</p>
              </div>
            )}

            {status === 'ready' && filteredProducts.length > 0 && (
              <>
                <p className="mb-6 text-sm text-velmora-taupe-light">
                  {filteredProducts.length} product{filteredProducts.length > 1 ? 's' : ''}
                </p>
                <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
