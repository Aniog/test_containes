import { useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import FilterSidebar from '@/components/storefront/FilterSidebar'
import ProductCard from '@/components/storefront/ProductCard'
import SectionHeading from '@/components/storefront/SectionHeading'
import { filterOptions, products } from '@/data/storefront'
import { useStrkImages } from '@/hooks/useStrkImages'

function filterProducts(items, selectedFilters) {
  return items.filter((product) => {
    const matchesCategory =
      selectedFilters.category === 'All' || product.category === selectedFilters.category

    const matchesPrice =
      selectedFilters.price === 'All' ||
      (selectedFilters.price === 'Under $50' && product.price < 50) ||
      (selectedFilters.price === '$50 - $80' && product.price >= 50 && product.price <= 80) ||
      (selectedFilters.price === '$80+' && product.price > 80)

    const matchesMaterial =
      selectedFilters.material === 'All' ||
      product.material === selectedFilters.material ||
      (selectedFilters.material === 'Crystal Accent' && /crystal/i.test(product.type + product.description))

    return matchesCategory && matchesPrice && matchesMaterial
  })
}

function sortProducts(items, sortValue) {
  const nextItems = [...items]

  if (sortValue === 'price-asc') {
    return nextItems.sort((left, right) => left.price - right.price)
  }

  if (sortValue === 'price-desc') {
    return nextItems.sort((left, right) => right.price - left.price)
  }

  if (sortValue === 'rating-desc') {
    return nextItems.sort((left, right) => right.rating - left.rating)
  }

  return nextItems
}

export default function ShopPage({ onAddToCart }) {
  const [searchParams, setSearchParams] = useSearchParams()
  const containerRef = useRef(null)
  const [selectedFilters, setSelectedFilters] = useState({
    category: searchParams.get('category') || 'All',
    price: 'All',
    material: 'All',
  })
  const [sortValue, setSortValue] = useState(searchParams.get('sort') || 'featured')

  const filteredProducts = useMemo(() => {
    const visibleProducts = filterProducts(products, selectedFilters)
    return sortProducts(visibleProducts, sortValue)
  }, [selectedFilters, sortValue])

  useStrkImages(containerRef, [selectedFilters.category, selectedFilters.price, selectedFilters.material, sortValue])

  const handleFilterChange = (group, value) => {
    setSelectedFilters((current) => {
      const next = { ...current, [group]: value }
      const nextParams = new URLSearchParams(searchParams)

      if (group === 'category') {
        if (value === 'All') nextParams.delete('category')
        else nextParams.set('category', value)
      }

      setSearchParams(nextParams)
      return next
    })
  }

  const handleSortChange = (event) => {
    const nextSortValue = event.target.value
    setSortValue(nextSortValue)

    const nextParams = new URLSearchParams(searchParams)
    if (nextSortValue === 'featured') nextParams.delete('sort')
    else nextParams.set('sort', nextSortValue)
    setSearchParams(nextParams)
  }

  return (
    <div className="section-shell py-10 sm:py-14" ref={containerRef}>
      <div className="grid gap-10 lg:grid-cols-[300px_1fr] lg:items-start">
        <FilterSidebar
          filters={filterOptions}
          selectedFilters={selectedFilters}
          onFilterChange={handleFilterChange}
        />

        <section>
          <div className="flex flex-col gap-6 border-b border-line/70 pb-8 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Velmora shop"
              title="Quietly striking jewelry for every day"
              description="Explore earrings, necklaces, huggies, and gift sets designed with a warm editorial sensibility and an accessible luxury feel."
            />

            <div className="flex flex-col gap-4 sm:items-end">
              <p className="text-sm uppercase tracking-button text-muted">
                {filteredProducts.length} pieces
              </p>
              <label className="text-sm text-muted">
                <span className="sr-only">Sort products</span>
                <select
                  value={sortValue}
                  onChange={handleSortChange}
                  className="min-h-12 rounded-full border border-line bg-surface px-4 text-sm text-ink outline-none focus:border-gold"
                >
                  {filterOptions.sort.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </div>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
