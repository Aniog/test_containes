import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { filters, products } from '@/data/products'
import FilterSidebar from '@/components/shop/FilterSidebar'
import ProductCard from '@/components/shop/ProductCard'
import SectionHeading from '@/components/layout/SectionHeading'
import { useStockImages } from '@/lib/useStockImages'

const getInitialCategory = (searchParams) => {
  const category = searchParams.get('category')
  if (!category) return 'All'

  const matched = filters.categories.find(
    (option) => option.toLowerCase() === category.toLowerCase(),
  )

  return matched ?? 'All'
}

const matchesPrice = (price, selected) => {
  if (selected === 'All') return true
  if (selected === 'Under $50') return price < 50
  if (selected === '$50 to $80') return price >= 50 && price <= 80
  if (selected === '$80 to $120') return price >= 80 && price <= 120
  return true
}

const sortProducts = (items, selectedSort) => {
  const nextItems = [...items]

  if (selectedSort === 'price-asc') {
    return nextItems.sort((first, second) => first.price - second.price)
  }

  if (selectedSort === 'price-desc') {
    return nextItems.sort((first, second) => second.price - first.price)
  }

  if (selectedSort === 'rating-desc') {
    return nextItems.sort((first, second) => second.rating - first.rating)
  }

  return nextItems
}

const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const categoryParam = searchParams.get('category') ?? ''
  const [selectedFilters, setSelectedFilters] = useState({
    category: getInitialCategory(searchParams),
    price: 'All',
    material: 'All',
  })
  const [sortBy, setSortBy] = useState('featured')
  const containerRef = useRef(null)

  useEffect(() => {
    setSelectedFilters((current) => ({
      ...current,
      category: getInitialCategory(searchParams),
    }))
  }, [categoryParam, searchParams])

  useStockImages(containerRef, [selectedFilters, sortBy])

  const displayedProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const matchesCategory =
        selectedFilters.category === 'All' ||
        product.category === selectedFilters.category ||
        product.categorySlug === selectedFilters.category.toLowerCase()
      const matchesMaterial =
        selectedFilters.material === 'All' ||
        product.material === selectedFilters.material ||
        (selectedFilters.material === 'Mixed Crystals' &&
          product.material.toLowerCase().includes('crystal'))

      return (
        matchesCategory &&
        matchesMaterial &&
        matchesPrice(product.price, selectedFilters.price)
      )
    })

    return sortProducts(filtered, sortBy)
  }, [selectedFilters, sortBy])

  const handleFilterChange = (nextFilters) => {
    setSelectedFilters(nextFilters)

    const nextParams = new URLSearchParams(searchParams)
    if (nextFilters.category !== 'All') {
      nextParams.set('category', nextFilters.category.toLowerCase())
    } else {
      nextParams.delete('category')
    }
    setSearchParams(nextParams, { replace: true })
  }

  return (
    <div ref={containerRef} className="mx-auto max-w-7xl px-5 pb-20 pt-28 sm:px-8 lg:px-10 lg:pb-24 lg:pt-32">
      <div className="rounded-[2.5rem] border border-velmora-line bg-white/55 px-6 py-10 shadow-soft sm:px-10 lg:px-14">
        <SectionHeading
          eyebrow="Shop Velmora"
          title="Elevated demi-fine jewelry for gifting and self-purchase"
          description="Filter by category, material, and price to discover polished staples and occasion-ready pieces."
        />
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[280px_1fr] xl:grid-cols-[300px_1fr]">
        <FilterSidebar
          filters={filters}
          selected={selectedFilters}
          onChange={handleFilterChange}
        />

        <div>
          <div className="flex flex-col gap-4 rounded-[2rem] border border-velmora-line bg-white/60 px-5 py-5 shadow-soft sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <p className="text-sm text-velmora-muted">
              Showing <span className="text-velmora-ink">{displayedProducts.length}</span> pieces
            </p>

            <label className="flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-velmora-muted">
              Sort
              <select
                value={sortBy}
                onChange={(event) => setSortBy(event.target.value)}
                className="rounded-full border border-velmora-line bg-velmora-ivory px-4 py-3 text-xs uppercase tracking-[0.24em] text-velmora-ink outline-none"
              >
                {filters.sort.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {displayedProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>

          {!displayedProducts.length ? (
            <div className="mt-6 rounded-[2rem] border border-dashed border-velmora-line px-6 py-12 text-center text-sm text-velmora-muted">
              No pieces matched the current filters.
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default ShopPage
