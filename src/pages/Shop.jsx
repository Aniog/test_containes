import { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { products, categories, priceRanges } from '@/data/products'
import { ProductCard } from '@/components/product/ProductCard'

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const sort = searchParams.get('sort') || 'featured'

  const activeCategories = useMemo(
    () => searchParams.getAll('category'),
    [searchParams]
  )
  const activePriceRanges = useMemo(
    () => searchParams.getAll('price'),
    [searchParams]
  )

  const toggleParam = (key, value) => {
    const next = new URLSearchParams(searchParams)
    const values = next.getAll(key)
    if (values.includes(value)) {
      next.delete(key)
      values.filter((v) => v !== value).forEach((v) => next.append(key, v))
    } else {
      next.append(key, value)
    }
    next.delete('page')
    setSearchParams(next, { replace: true })
  }

  const clearFilters = () => {
    const next = new URLSearchParams(searchParams)
    next.delete('category')
    next.delete('price')
    setSearchParams(next, { replace: true })
  }

  const filtered = useMemo(() => {
    let list = [...products]

    if (activeCategories.length > 0) {
      list = list.filter((p) => activeCategories.includes(p.category))
    }

    if (activePriceRanges.length > 0) {
      list = list.filter((p) =>
        priceRanges.some(
          (r) =>
            activePriceRanges.includes(r.id) &&
            p.price > r.min &&
            p.price <= r.max
        )
      )
    }

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
  }, [activeCategories, activePriceRanges, sort])

  const FilterGroup = ({ title, options, paramKey, activeValues }) => (
    <div className="border-b border-velmora-hairline py-5">
      <h4 className="mb-3 text-xs font-semibold uppercase tracking-widest text-velmora-dark">
        {title}
      </h4>
      <div className="space-y-2">
        {options.map((option) => {
          const checked = activeValues.includes(option.id)
          return (
            <label
              key={option.id}
              className="flex cursor-pointer items-center gap-3 text-sm text-velmora-muted transition hover:text-velmora-dark"
            >
              <span
                className={`pointer-events-none flex h-4 w-4 items-center justify-center border ${
                  checked ? 'border-velmora-gold bg-velmora-gold' : 'border-velmora-hairline bg-white'
                }`}
              >
                {checked && <span className="h-1.5 w-1.5 bg-white" />}
              </span>
              <input
                type="checkbox"
                className="sr-only"
                checked={checked}
                onChange={() => toggleParam(paramKey, option.id)}
              />
              {option.label}
            </label>
          )
        })}
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-velmora-light pb-16 pt-24 md:pt-28">
      <div className="container-velmora">
        <div className="mb-8 flex items-end justify-between border-b border-velmora-hairline pb-6">
          <div>
            <h1 className="font-serif text-3xl text-velmora-dark md:text-4xl">The Collection</h1>
            <p className="mt-2 text-sm text-velmora-muted">
              {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="flex items-center gap-2 border border-velmora-hairline bg-white px-4 py-2.5 text-xs font-semibold uppercase tracking-widest text-velmora-dark md:hidden"
            >
              <SlidersHorizontal size={14} strokeWidth={1.5} />
              Filter
            </button>
            <select
              value={sort}
              onChange={(e) => {
                const next = new URLSearchParams(searchParams)
                if (e.target.value === 'featured') {
                  next.delete('sort')
                } else {
                  next.set('sort', e.target.value)
                }
                setSearchParams(next, { replace: true })
              }}
              className="border border-velmora-hairline bg-white px-4 py-2.5 text-xs uppercase tracking-widest text-velmora-dark focus:border-velmora-gold focus:outline-none"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex gap-12">
          {/* Desktop sidebar */}
          <aside className="hidden w-64 flex-shrink-0 md:block">
            <div className="sticky top-28">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-velmora-dark">
                  Filters
                </h3>
                {(activeCategories.length > 0 || activePriceRanges.length > 0) && (
                  <button
                    onClick={clearFilters}
                    className="text-xs text-velmora-muted underline transition hover:text-velmora-gold"
                  >
                    Clear
                  </button>
                )}
              </div>
              <FilterGroup
                title="Category"
                options={categories}
                paramKey="category"
                activeValues={activeCategories}
              />
              <FilterGroup
                title="Price"
                options={priceRanges}
                paramKey="price"
                activeValues={activePriceRanges}
              />
            </div>
          </aside>

          {/* Mobile filters drawer */}
          <AnimatePresence>
            {mobileFiltersOpen && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-50 bg-velmora-dark/40 backdrop-blur-sm md:hidden"
                  onClick={() => setMobileFiltersOpen(false)}
                />
                <motion.div
                  initial={{ x: '-100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '-100%' }}
                  transition={{ type: 'tween', duration: 0.3 }}
                  className="fixed left-0 top-0 z-50 h-full w-4/5 max-w-sm overflow-y-auto bg-white p-6 md:hidden"
                >
                  <div className="mb-6 flex items-center justify-between">
                    <h3 className="font-serif text-2xl text-velmora-dark">Filters</h3>
                    <button
                      onClick={() => setMobileFiltersOpen(false)}
                      className="text-velmora-muted"
                    >
                      <X size={22} strokeWidth={1.5} />
                    </button>
                  </div>
                  <FilterGroup
                    title="Category"
                    options={categories}
                    paramKey="category"
                    activeValues={activeCategories}
                  />
                  <FilterGroup
                    title="Price"
                    options={priceRanges}
                    paramKey="price"
                    activeValues={activePriceRanges}
                  />
                  <button
                    onClick={() => setMobileFiltersOpen(false)}
                    className="btn-primary mt-6 w-full"
                  >
                    Show {filtered.length} Results
                  </button>
                </motion.div>
              </>
            )}
          </AnimatePresence>

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="py-20 text-center">
                <p className="font-serif text-xl text-velmora-dark">No pieces match your filters.</p>
                <button
                  onClick={clearFilters}
                  className="btn-secondary mt-4"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-3">
                {filtered.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.06 }}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
