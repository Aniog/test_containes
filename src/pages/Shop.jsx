import { useState, useMemo, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { products } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'
import { useStrkImages } from '@/hooks/useStrkImages'
import { SlidersHorizontal, X } from 'lucide-react'

const categoryOptions = ['Earrings', 'Necklaces', 'Huggies', 'Sets']
const materialOptions = ['18K Gold Plated']
const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $100', min: 50, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
]

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const ref = useStrkImages([])

  const initialCategory = searchParams.get('category') || ''
  const [selectedCategories, setSelectedCategories] = useState(
    initialCategory ? [initialCategory] : []
  )
  const [selectedPrice, setSelectedPrice] = useState(null)
  const [selectedMaterials, setSelectedMaterials] = useState([])
  const [sort, setSort] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  // Keep URL in sync when category filter changes via nav
  useEffect(() => {
    const cat = searchParams.get('category')
    if (cat) {
      setSelectedCategories([cat])
    }
  }, [searchParams])

  const toggleCategory = (cat) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    )
  }

  const toggleMaterial = (m) => {
    setSelectedMaterials((prev) =>
      prev.includes(m) ? prev.filter((x) => x !== m) : [...prev, m]
    )
  }

  const clearAll = () => {
    setSelectedCategories([])
    setSelectedPrice(null)
    setSelectedMaterials([])
    setSearchParams({})
  }

  const filtered = useMemo(() => {
    let list = [...products]

    if (selectedCategories.length > 0) {
      // "Huggies" maps to subcategory; others to category
      list = list.filter((p) => {
        return selectedCategories.some((c) => {
          if (c === 'Huggies') return p.subcategory === 'Huggies'
          return p.category === c
        })
      })
    }

    if (selectedPrice) {
      list = list.filter(
        (p) => p.price >= selectedPrice.min && p.price < selectedPrice.max
      )
    }

    if (selectedMaterials.length > 0) {
      list = list.filter((p) => selectedMaterials.includes(p.material))
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
  }, [selectedCategories, selectedPrice, selectedMaterials, sort])

  const activeFilterCount =
    selectedCategories.length +
    (selectedPrice ? 1 : 0) +
    selectedMaterials.length

  const FilterPanel = (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="font-sans text-xs uppercase tracking-widest2 text-ink">
          Category
        </h3>
        <ul className="mt-4 space-y-2.5">
          {categoryOptions.map((cat) => (
            <li key={cat}>
              <label className="flex cursor-pointer items-center gap-3 text-sm text-stone hover:text-ink">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(cat)}
                  onChange={() => toggleCategory(cat)}
                  className="h-4 w-4 accent-gold"
                />
                {cat}
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Price */}
      <div>
        <h3 className="font-sans text-xs uppercase tracking-widest2 text-ink">
          Price
        </h3>
        <ul className="mt-4 space-y-2.5">
          {priceRanges.map((range) => (
            <li key={range.label}>
              <label className="flex cursor-pointer items-center gap-3 text-sm text-stone hover:text-ink">
                <input
                  type="radio"
                  name="price"
                  checked={selectedPrice?.label === range.label}
                  onChange={() => setSelectedPrice(range)}
                  className="h-4 w-4 accent-gold"
                />
                {range.label}
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Material */}
      <div>
        <h3 className="font-sans text-xs uppercase tracking-widest2 text-ink">
          Material
        </h3>
        <ul className="mt-4 space-y-2.5">
          {materialOptions.map((m) => (
            <li key={m}>
              <label className="flex cursor-pointer items-center gap-3 text-sm text-stone hover:text-ink">
                <input
                  type="checkbox"
                  checked={selectedMaterials.includes(m)}
                  onChange={() => toggleMaterial(m)}
                  className="h-4 w-4 accent-gold"
                />
                {m}
              </label>
            </li>
          ))}
        </ul>
      </div>

      {activeFilterCount > 0 && (
        <button
          type="button"
          onClick={clearAll}
          className="text-xs uppercase tracking-widest2 text-gold underline-offset-4 hover:underline"
        >
          Clear All ({activeFilterCount})
        </button>
      )}
    </div>
  )

  return (
    <div ref={ref} className="pt-24 md:pt-28">
      {/* Header */}
      <div className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-5 py-12 text-center md:px-8 md:py-16">
          <p className="text-xs uppercase tracking-widest2 text-gold">
            The Collection
          </p>
          <h1 className="mt-3 font-serif text-4xl text-ink md:text-5xl">
            Shop All
          </h1>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-stone">
            Demi-fine gold jewelry, crafted to be treasured and worn every day.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-10 md:px-8">
        {/* Toolbar */}
        <div className="mb-8 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => setMobileFiltersOpen(true)}
            className="flex items-center gap-2 text-xs uppercase tracking-widest2 text-ink lg:hidden"
          >
            <SlidersHorizontal size={15} strokeWidth={1.5} />
            Filters
            {activeFilterCount > 0 && (
              <span className="bg-gold px-1.5 text-[10px] text-ivory">
                {activeFilterCount}
              </span>
            )}
          </button>
          <p className="hidden text-sm text-stone lg:block">
            {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
          </p>
          <div className="flex items-center gap-3">
            <label className="text-xs uppercase tracking-widest2 text-stone">
              Sort
            </label>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="border border-hairline bg-ivory px-3 py-2 text-sm text-ink focus:border-ink focus:outline-none"
            >
              {sortOptions.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex gap-10">
          {/* Sidebar (desktop) */}
          <aside className="hidden w-56 shrink-0 lg:block">
            <div className="sticky top-28">{FilterPanel}</div>
          </aside>

          {/* Grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="flex min-h-[40vh] flex-col items-center justify-center gap-4 text-center">
                <p className="font-serif text-2xl text-ink">No pieces found</p>
                <p className="text-sm text-stone">
                  Try adjusting your filters.
                </p>
                <button
                  type="button"
                  onClick={clearAll}
                  className="border border-ink px-8 py-3 text-xs uppercase tracking-widest2 text-ink hover:bg-ink hover:text-ivory"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3">
                {filtered.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    titleId={`shop-${product.id}-title`}
                    descId={`shop-${product.id}-desc`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-[80] lg:hidden">
          <div
            className="absolute inset-0 bg-espresso/40 backdrop-blur-sm"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full w-80 max-w-[85vw] overflow-y-auto bg-ivory p-6">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="font-serif text-xl text-ink">Filters</h2>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                aria-label="Close filters"
                className="text-ink"
              >
                <X size={22} strokeWidth={1.5} />
              </button>
            </div>
            {FilterPanel}
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(false)}
              className="mt-8 w-full bg-gold py-3.5 text-xs uppercase tracking-widest2 text-ivory"
            >
              Show {filtered.length} Results
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
