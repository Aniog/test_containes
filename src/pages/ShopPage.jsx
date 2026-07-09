import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import FilterSidebar from '@/components/shop/FilterSidebar'
import ProductCard from '@/components/shop/ProductCard'
import SectionHeading from '@/components/shared/SectionHeading'
import { products, sortOptions } from '@/data/products'

const applyPriceFilter = (product, priceFilter) => {
  if (priceFilter === 'under-50') return product.price < 50
  if (priceFilter === '50-80') return product.price >= 50 && product.price <= 80
  if (priceFilter === '80-120') return product.price > 80 && product.price <= 120
  return true
}

export default function ShopPage() {
  const [searchParams] = useSearchParams()
  const categoryParam = searchParams.get('category')
  const [filters, setFilters] = useState({
    category: categoryParam || 'All',
    price: 'all',
    material: 'All',
    sort: 'featured',
  })

  useEffect(() => {
    setFilters((current) => ({
      ...current,
      category: categoryParam || 'All',
    }))
  }, [categoryParam])

  const filteredProducts = useMemo(() => {
    const nextProducts = products
      .filter((product) =>
        filters.category === 'All' ? true : product.category === filters.category,
      )
      .filter((product) => applyPriceFilter(product, filters.price))
      .filter((product) =>
        filters.material === 'All' ? true : product.material === filters.material,
      )

    if (filters.sort === 'price-asc') {
      return [...nextProducts].sort((a, b) => a.price - b.price)
    }

    if (filters.sort === 'price-desc') {
      return [...nextProducts].sort((a, b) => b.price - a.price)
    }

    if (filters.sort === 'rating') {
      return [...nextProducts].sort((a, b) => b.rating - a.rating)
    }

    return nextProducts
  }, [filters])

  const handleFilterChange = (key, value) => {
    setFilters((current) => ({ ...current, [key]: value }))
  }

  return (
    <main className="bg-velmora-paper pt-28">
      <section className="border-b border-velmora-line bg-velmora-ink px-4 py-14 text-velmora-ivory sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.3em] text-velmora-gold">
            Collection
          </p>
          <h1 className="mt-4 font-display text-5xl leading-none sm:text-6xl">
            The Velmora shop
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-velmora-muted">
            Modern demi-fine jewelry designed to elevate every day with an editorial, quietly polished finish.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Curated for layering"
              title="Filter your favorites"
              description="Browse by silhouette, material, and price point to find a piece that feels immediately wearable."
            />
            <div className="w-full max-w-xs">
              <label className="mb-3 block text-xs uppercase tracking-[0.28em] text-velmora-cocoa">
                Sort by
              </label>
              <select
                value={filters.sort}
                onChange={(event) => handleFilterChange('sort', event.target.value)}
                className="h-12 w-full rounded-full border border-velmora-line bg-velmora-panel px-5 text-sm text-velmora-cocoa focus:border-velmora-gold focus:outline-none"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">
            <FilterSidebar filters={filters} onFilterChange={handleFilterChange} />

            <div>
              <div className="mb-6 flex items-center justify-between border-b border-velmora-line pb-4">
                <p className="text-xs uppercase tracking-[0.28em] text-velmora-stone">
                  Showing {filteredProducts.length} pieces
                </p>
              </div>

              {filteredProducts.length > 0 ? (
                <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="rounded-[2rem] border border-velmora-line bg-velmora-panel px-6 py-10 text-center">
                  <p className="font-display text-4xl text-velmora-cocoa">
                    Nothing here yet
                  </p>
                  <p className="mt-4 text-sm leading-7 text-velmora-stone">
                    Try broadening the filters to rediscover the collection.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
