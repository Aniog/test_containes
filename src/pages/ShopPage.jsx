import React, { useMemo, useRef, useState } from 'react'
import { Filter, SlidersHorizontal, X } from 'lucide-react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '@/components/ProductCard'
import SectionHeading from '@/components/SectionHeading'
import { materials, priceFilters, products } from '@/data/products'
import { useStrkImages } from '@/lib/use-strk-images'

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Highest Rated', value: 'rating' },
]

function ShopPage() {
  const containerRef = useRef(null)
  const [searchParams, setSearchParams] = useSearchParams()
  const [selectedCategories, setSelectedCategories] = useState(
    searchParams.get('category') ? [searchParams.get('category')] : [],
  )
  const [selectedMaterials, setSelectedMaterials] = useState([])
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([])
  const [sortBy, setSortBy] = useState('featured')
  const [filtersOpen, setFiltersOpen] = useState(false)
  const searchQuery = searchParams.get('query')?.toLowerCase() ?? ''

  useStrkImages(containerRef, [selectedCategories, selectedMaterials, selectedPriceRanges, sortBy, searchQuery])

  const visibleProducts = useMemo(() => {
    const filteredProducts = products.filter((product) => {
      const matchesCategory =
        selectedCategories.length === 0 || selectedCategories.includes(product.category)
      const matchesMaterial =
        selectedMaterials.length === 0 || selectedMaterials.includes(product.material)
      const matchesQuery =
        !searchQuery ||
        `${product.name} ${product.category} ${product.shortDescription}`
          .toLowerCase()
          .includes(searchQuery)
      const matchesPrice =
        selectedPriceRanges.length === 0 ||
        selectedPriceRanges.some((range) => {
          if (range === 'Under $50') return product.price < 50
          if (range === '$50 to $80') return product.price >= 50 && product.price < 80
          return product.price >= 80
        })

      return matchesCategory && matchesMaterial && matchesPrice && matchesQuery
    })

    if (sortBy === 'price-asc') {
      return [...filteredProducts].sort((left, right) => left.price - right.price)
    }

    if (sortBy === 'price-desc') {
      return [...filteredProducts].sort((left, right) => right.price - left.price)
    }

    if (sortBy === 'rating') {
      return [...filteredProducts].sort((left, right) => right.rating - left.rating)
    }

    return filteredProducts
  }, [searchQuery, selectedCategories, selectedMaterials, selectedPriceRanges, sortBy])

  const toggleValue = (currentValues, nextValue, setter) => {
    setter(
      currentValues.includes(nextValue)
        ? currentValues.filter((value) => value !== nextValue)
        : [...currentValues, nextValue],
    )
  }

  const clearFilters = () => {
    setSelectedCategories([])
    setSelectedMaterials([])
    setSelectedPriceRanges([])
    setSearchParams((current) => {
      const nextParams = new URLSearchParams(current)
      nextParams.delete('category')
      nextParams.delete('query')
      return nextParams
    })
  }

  const sidebar = (
    <div className="space-y-8 rounded-[2rem] border border-stone-300/70 bg-stone-50 p-6 shadow-[0_18px_50px_rgba(28,25,23,0.06)]">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-stone-500">Filters</p>
          <h2 className="mt-2 font-serif text-3xl text-stone-950">Refine your edit</h2>
        </div>
        <button className="text-sm text-stone-500 transition hover:text-stone-950" onClick={clearFilters} type="button">
          Clear
        </button>
      </div>

      <FilterGroup
        options={[...new Set(products.map((product) => product.category))]}
        selected={selectedCategories}
        title="Category"
        onToggle={(value) => toggleValue(selectedCategories, value, setSelectedCategories)}
      />
      <FilterGroup
        options={priceFilters}
        selected={selectedPriceRanges}
        title="Price"
        onToggle={(value) => toggleValue(selectedPriceRanges, value, setSelectedPriceRanges)}
      />
      <FilterGroup
        options={materials}
        selected={selectedMaterials}
        title="Material"
        onToggle={(value) => toggleValue(selectedMaterials, value, setSelectedMaterials)}
      />
    </div>
  )

  return (
    <div className="bg-stone-100 px-5 pb-20 pt-32 sm:px-8 lg:px-12 lg:pb-24 lg:pt-36" ref={containerRef}>
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[2.5rem] border border-stone-300/70 bg-stone-50 px-6 py-10 shadow-[0_18px_50px_rgba(28,25,23,0.08)] sm:px-10">
          <SectionHeading
            eyebrow="Collection"
            title="A modern jewelry wardrobe"
            description="Explore Velmora’s edit of demi-fine favorites — polished earrings, luminous necklaces, and giftable sets created to feel premium yet within reach."
          />
        </div>

        <div className="mt-8 flex items-center justify-between gap-4 lg:hidden">
          <button
            className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-stone-50 px-5 py-3 text-sm font-medium text-stone-900"
            onClick={() => setFiltersOpen((current) => !current)}
            type="button"
          >
            <Filter className="h-4 w-4" />
            Filters
          </button>
          <div className="relative">
            <SlidersHorizontal className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-500" />
            <select
              className="h-11 rounded-full border border-stone-300 bg-stone-50 pl-11 pr-5 text-sm text-stone-900 focus:border-stone-950 focus:outline-none"
              onChange={(event) => setSortBy(event.target.value)}
              value={sortBy}
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {filtersOpen ? <div className="mt-6 lg:hidden">{sidebar}</div> : null}

        <div className="mt-10 grid gap-8 lg:grid-cols-[300px_1fr] lg:items-start">
          <aside className="sticky top-28 hidden lg:block">{sidebar}</aside>

          <section>
            <div className="mb-8 flex flex-col gap-4 rounded-[2rem] border border-stone-300/70 bg-stone-50 px-6 py-5 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-stone-500">Shop Velmora</p>
                <p className="mt-2 text-sm text-stone-700">
                  {visibleProducts.length} pieces available
                  {searchQuery ? ` for “${searchQuery}”` : ''}
                </p>
              </div>
              <div className="hidden md:block">
                <div className="relative">
                  <SlidersHorizontal className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-500" />
                  <select
                    className="h-11 rounded-full border border-stone-300 bg-stone-50 pl-11 pr-5 text-sm text-stone-900 focus:border-stone-950 focus:outline-none"
                    onChange={(event) => setSortBy(event.target.value)}
                    value={sortBy}
                  >
                    {sortOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="mb-6 flex flex-wrap gap-3">
              {selectedCategories.map((category) => (
                <FilterPill key={category} label={category} onRemove={() => toggleValue(selectedCategories, category, setSelectedCategories)} />
              ))}
              {selectedMaterials.map((material) => (
                <FilterPill key={material} label={material} onRemove={() => toggleValue(selectedMaterials, material, setSelectedMaterials)} />
              ))}
              {selectedPriceRanges.map((range) => (
                <FilterPill key={range} label={range} onRemove={() => toggleValue(selectedPriceRanges, range, setSelectedPriceRanges)} />
              ))}
            </div>

            {visibleProducts.length === 0 ? (
              <div className="rounded-[2rem] border border-dashed border-stone-300 bg-stone-50 px-8 py-16 text-center">
                <h3 className="font-serif text-3xl text-stone-950">No pieces match your edit</h3>
                <p className="mt-4 text-sm leading-7 text-stone-600">
                  Try clearing a filter or exploring another category.
                </p>
              </div>
            ) : (
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {visibleProducts.map((product, index) => (
                  <ProductCard
                    imagePrefix={`shop-grid-${product.slug}-${index}`}
                    key={product.slug}
                    product={product}
                  />
                ))}
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  )
}

function FilterGroup({ title, options, selected, onToggle }) {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-stone-500">{title}</h3>
      <div className="mt-4 space-y-3">
        {options.map((option) => {
          const isChecked = selected.includes(option)

          return (
            <label className="flex cursor-pointer items-center gap-3 text-sm text-stone-700" key={option}>
              <input
                checked={isChecked}
                className="h-4 w-4 rounded border-stone-300 text-stone-950 focus:ring-stone-950"
                onChange={() => onToggle(option)}
                type="checkbox"
              />
              <span>{option}</span>
            </label>
          )
        })}
      </div>
    </div>
  )
}

function FilterPill({ label, onRemove }) {
  return (
    <button
      className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-stone-50 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-stone-700 transition hover:border-stone-950 hover:text-stone-950"
      onClick={onRemove}
      type="button"
    >
      {label}
      <X className="h-3.5 w-3.5" />
    </button>
  )
}

export default ShopPage
