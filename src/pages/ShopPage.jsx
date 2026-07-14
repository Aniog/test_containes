import { SlidersHorizontal, X } from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ProductCard } from '@/components/storefront/ProductCard.jsx'
import { SectionHeading } from '@/components/storefront/storefront-utils.jsx'
import { filters, products, sortOptions } from '@/data/products.js'
import { useStrkImages } from '@/hooks/useStrkImages.js'

function getPriceBucket(price) {
  if (price < 50) return 'Under $50'
  if (price <= 80) return '$50 - $80'
  return '$80+'
}

function sortProducts(items, sort) {
  switch (sort) {
    case 'price-asc':
      return [...items].sort((a, b) => a.price - b.price)
    case 'price-desc':
      return [...items].sort((a, b) => b.price - a.price)
    case 'rating':
      return [...items].sort((a, b) => b.rating - a.rating)
    default:
      return items
  }
}

export function ShopPage() {
  const pageRef = useRef(null)
  const [searchParams, setSearchParams] = useSearchParams()
  const [isFiltersOpen, setIsFiltersOpen] = useState(false)

  const initialCategory = searchParams.get('category') || 'All'
  const [selectedCategory, setSelectedCategory] = useState(initialCategory)
  const [selectedMaterial, setSelectedMaterial] = useState('All')
  const [selectedPrice, setSelectedPrice] = useState('All')
  const [sortValue, setSortValue] = useState('featured')

  useEffect(() => {
    const categoryFromUrl = searchParams.get('category') || 'All'
    setSelectedCategory(categoryFromUrl)
  }, [searchParams])

  useStrkImages(pageRef, [selectedCategory, selectedMaterial, selectedPrice, sortValue])

  const visibleProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory
      const matchesMaterial = selectedMaterial === 'All' || product.material === selectedMaterial
      const matchesPrice = selectedPrice === 'All' || getPriceBucket(product.price) === selectedPrice
      return matchesCategory && matchesMaterial && matchesPrice
    })

    return sortProducts(filtered, sortValue)
  }, [selectedCategory, selectedMaterial, selectedPrice, sortValue])

  const updateCategory = (category) => {
    setSelectedCategory(category)
    setSearchParams(category === 'All' ? {} : { category })
  }

  const FilterGroup = ({ title, options, value, onChange }) => (
    <div className="space-y-4 border-b border-stone-200 pb-6 last:border-b-0 last:pb-0">
      <p className="text-xs uppercase tracking-[0.28em] text-stone-500">{title}</p>
      <div className="space-y-3">
        {options.map((option) => (
          <label key={option} className="flex items-center justify-between gap-4 text-sm text-stone-700">
            <span>{option}</span>
            <input
              type="radio"
              name={title}
              checked={value === option}
              onChange={() => onChange(option)}
              className="h-4 w-4 border-stone-300 text-stone-900 focus:ring-stone-900"
            />
          </label>
        ))}
      </div>
    </div>
  )

  return (
    <main ref={pageRef} className="bg-stone-50 pt-28 text-stone-900 md:pt-32">
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-10 xl:px-16">
          <SectionHeading
            eyebrow="Shop"
            title="Velmora collection"
            description="A considered range of demi-fine gold jewelry designed for self-purchase, gifting, and elevated everyday styling."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-6 lg:px-10 xl:px-16">
        <div className="flex items-center justify-between gap-4 border-b border-stone-200 pb-5">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-stone-500">Collection</p>
            <p className="mt-2 text-sm text-stone-700">{visibleProducts.length} pieces</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full border border-stone-300 px-4 py-2 text-xs uppercase tracking-[0.24em] text-stone-800 lg:hidden"
              onClick={() => setIsFiltersOpen(true)}
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filters
            </button>
            <label className="flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-stone-500">
              Sort
              <select
                value={sortValue}
                onChange={(event) => setSortValue(event.target.value)}
                className="rounded-full border border-stone-300 bg-white px-4 py-2 text-xs uppercase tracking-[0.24em] text-stone-900 focus:border-stone-900 focus:outline-none"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[270px,1fr]">
          <aside className="hidden h-fit rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm lg:block">
            <div className="space-y-6">
              <FilterGroup title="Category" options={filters.categories} value={selectedCategory} onChange={updateCategory} />
              <FilterGroup title="Price" options={filters.prices} value={selectedPrice} onChange={setSelectedPrice} />
              <FilterGroup title="Material" options={filters.materials} value={selectedMaterial} onChange={setSelectedMaterial} />
            </div>
          </aside>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {visibleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {isFiltersOpen ? (
        <div className="fixed inset-0 z-[60] bg-stone-950/45 lg:hidden">
          <div className="ml-auto flex h-full w-[88%] max-w-sm flex-col bg-stone-50 p-6 text-stone-900 shadow-2xl">
            <div className="flex items-center justify-between border-b border-stone-200 pb-4">
              <p className="font-serif text-3xl">Filters</p>
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-stone-300"
                onClick={() => setIsFiltersOpen(false)}
                aria-label="Close filters"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="mt-6 space-y-6 overflow-y-auto">
              <FilterGroup title="Category" options={filters.categories} value={selectedCategory} onChange={updateCategory} />
              <FilterGroup title="Price" options={filters.prices} value={selectedPrice} onChange={setSelectedPrice} />
              <FilterGroup title="Material" options={filters.materials} value={selectedMaterial} onChange={setSelectedMaterial} />
            </div>
          </div>
        </div>
      ) : null}
    </main>
  )
}
