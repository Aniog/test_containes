import { useState, useMemo, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import { products } from '@/data/products'
import { ProductCard } from '@/components/product/ProductCard'
import { cn } from '@/lib/utils'

const categories = [
  { value: 'earrings', label: 'Earrings' },
  { value: 'necklaces', label: 'Necklaces' },
  { value: 'huggies', label: 'Huggies' },
  { value: 'sets', label: 'Gift Sets' },
]

const materials = [
  { value: '18k gold plated', label: '18K Gold Plated' },
  { value: 'sterling silver', label: 'Sterling Silver' },
  { value: 'mixed', label: 'Mixed' },
]

const priceRanges = [
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 – $60', min: 40, max: 60 },
  { label: '$60 – $80', min: 60, max: 80 },
  { label: '$80+', min: 80, max: Infinity },
]

export function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || ''

  const [selectedCategories, setSelectedCategories] = useState(
    initialCategory ? [initialCategory] : []
  )
  const [selectedMaterials, setSelectedMaterials] = useState([])
  const [selectedPrices, setSelectedPrices] = useState([])
  const [sort, setSort] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  useEffect(() => {
    const cat = searchParams.get('category')
    if (cat) setSelectedCategories([cat])
  }, [searchParams])

  const toggle = (value, list, setList) => {
    setList((current) =>
      current.includes(value) ? current.filter((v) => v !== value) : [...current, value]
    )
  }

  const filtered = useMemo(() => {
    let result = products.filter((p) => {
      const catOk = selectedCategories.length === 0 || selectedCategories.includes(p.category)
      const matOk = selectedMaterials.length === 0 || selectedMaterials.includes(p.material)
      const priceOk =
        selectedPrices.length === 0 ||
        selectedPrices.some((r) => {
          const range = priceRanges[Number(r)]
          return p.price >= range.min && p.price < range.max
        })
      return catOk && matOk && priceOk
    })

    switch (sort) {
      case 'price-asc':
        result = [...result].sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        result = [...result].sort((a, b) => b.price - a.price)
        break
      case 'rating':
        result = [...result].sort((a, b) => b.rating - a.rating)
        break
      default:
        result = [...result].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
    }
    return result
  }, [selectedCategories, selectedMaterials, selectedPrices, sort])

  const FilterGroup = ({ title, options, selected, onToggle }) => (
    <div className="border-b border-[#E2DDD5] py-6">
      <h3 className="mb-4 font-sans text-xs font-medium uppercase tracking-[0.14em] text-[#1A1614]">
        {title}
      </h3>
      <ul className="space-y-3">
        {options.map((opt) => (
          <li key={opt.value}>
            <label className="flex cursor-pointer items-center gap-3 text-sm text-[#6B625B]">
              <span
                className={cn(
                  'flex h-4 w-4 items-center justify-center border transition-colors',
                  selected.includes(opt.value)
                    ? 'border-[#B9975B] bg-[#B9975B]'
                    : 'border-[#E2DDD5] bg-white'
                )}
              >
                {selected.includes(opt.value) && (
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path
                      d="M1 4L3.5 6.5L9 1"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </span>
              <input
                type="checkbox"
                className="sr-only"
                checked={selected.includes(opt.value)}
                onChange={() => onToggle(opt.value)}
              />
              {opt.label}
            </label>
          </li>
        ))}
      </ul>
    </div>
  )

  return (
    <div className="bg-[#F9F7F2] pb-24 pt-28 md:pt-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-3xl font-light uppercase tracking-[0.08em] text-[#1A1614] md:text-4xl">
          Shop All
        </h1>
        <p className="mt-3 max-w-xl font-sans text-base font-light text-[#6B625B]">
          Discover demi-fine pieces designed for everyday elegance and
          treasured moments.
        </p>

        <div className="mt-10 flex items-center justify-between border-b border-[#E2DDD5] pb-4">
          <button
            type="button"
            onClick={() => setMobileFiltersOpen(true)}
            className="flex items-center gap-2 font-sans text-xs font-medium uppercase tracking-[0.12em] text-[#1A1614] md:hidden"
          >
            <SlidersHorizontal size={16} strokeWidth={1.5} />
            Filter
          </button>
          <span className="hidden text-sm text-[#6B625B] md:block">
            {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
          </span>
          <div className="flex items-center gap-2">
            <label className="text-xs font-medium uppercase tracking-[0.12em] text-[#6B625B]">
              Sort
            </label>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="border border-[#E2DDD5] bg-white px-3 py-2 text-xs uppercase tracking-[0.1em] text-[#1A1614] outline-none focus:border-[#B9975B]"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>

        <div className="mt-8 flex gap-12">
          <aside className="hidden w-64 flex-shrink-0 md:block">
            <FilterGroup
              title="Category"
              options={categories}
              selected={selectedCategories}
              onToggle={(v) => toggle(v, selectedCategories, setSelectedCategories)}
            />
            <FilterGroup
              title="Price"
              options={priceRanges.map((r, i) => ({ value: String(i), label: r.label }))}
              selected={selectedPrices}
              onToggle={(v) => toggle(v, selectedPrices, setSelectedPrices)}
            />
            <FilterGroup
              title="Material"
              options={materials}
              selected={selectedMaterials}
              onToggle={(v) => toggle(v, selectedMaterials, setSelectedMaterials)}
            />
          </aside>

          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="py-20 text-center">
                <p className="font-serif text-xl uppercase tracking-[0.1em] text-[#1A1614]">
                  No pieces match your filters
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategories([])
                    setSelectedMaterials([])
                    setSelectedPrices([])
                  }}
                  className="mt-4 text-xs font-medium uppercase tracking-[0.12em] text-[#B9975B] hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-[#1A1614]/40 backdrop-blur-sm"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute bottom-0 left-0 right-0 max-h-[80vh] overflow-y-auto rounded-t-2xl bg-[#F9F7F2] p-6">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="font-serif text-lg uppercase tracking-[0.12em] text-[#1A1614]">
                Filters
              </h2>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                aria-label="Close filters"
              >
                <X size={22} strokeWidth={1.5} className="text-[#6B625B]" />
              </button>
            </div>
            <FilterGroup
              title="Category"
              options={categories}
              selected={selectedCategories}
              onToggle={(v) => toggle(v, selectedCategories, setSelectedCategories)}
            />
            <FilterGroup
              title="Price"
              options={priceRanges.map((r, i) => ({ value: String(i), label: r.label }))}
              selected={selectedPrices}
              onToggle={(v) => toggle(v, selectedPrices, setSelectedPrices)}
            />
            <FilterGroup
              title="Material"
              options={materials}
              selected={selectedMaterials}
              onToggle={(v) => toggle(v, selectedMaterials, setSelectedMaterials)}
            />
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(false)}
              className="mt-6 w-full bg-[#1A1614] py-3 text-xs font-medium uppercase tracking-[0.14em] text-white"
            >
              Show {filtered.length} Results
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
