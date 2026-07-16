import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import FilterSidebar from '@/components/store/FilterSidebar'
import ProductCard from '@/components/store/ProductCard'
import { useCart } from '@/components/store/CartProvider'
import { products } from '@/lib/store-data'

const sortOptions = [
  'Featured',
  'Price: Low to High',
  'Price: High to Low',
  'Top Rated',
]

const defaultFilters = {
  category: 'All',
  price: 'All',
  material: 'All',
}

function matchesPrice(price, filter) {
  if (filter === 'Under $50') return price < 50
  if (filter === '$50–$80') return price >= 50 && price <= 80
  if (filter === '$80+') return price > 80
  return true
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [activeFilters, setActiveFilters] = useState(defaultFilters)
  const [sortBy, setSortBy] = useState(sortOptions[0])
  const { addItem } = useCart()

  useEffect(() => {
    const nextCategory = searchParams.get('category') || 'All'
    setActiveFilters((current) => ({ ...current, category: nextCategory }))
  }, [searchParams])

  const filteredProducts = useMemo(() => {
    const visibleProducts = products.filter((product) => {
      const matchesCategory =
        activeFilters.category === 'All' || product.category === activeFilters.category
      const matchesMaterial =
        activeFilters.material === 'All' || product.material === activeFilters.material

      return matchesCategory && matchesMaterial && matchesPrice(product.price, activeFilters.price)
    })

    const sortedProducts = [...visibleProducts]

    if (sortBy === 'Price: Low to High') {
      sortedProducts.sort((a, b) => a.price - b.price)
    } else if (sortBy === 'Price: High to Low') {
      sortedProducts.sort((a, b) => b.price - a.price)
    } else if (sortBy === 'Top Rated') {
      sortedProducts.sort((a, b) => b.rating - a.rating)
    }

    return sortedProducts
  }, [activeFilters, sortBy])

  const handleFilterChange = (key, value) => {
    setActiveFilters((current) => ({
      ...current,
      [key]: value,
    }))

    if (key === 'category') {
      const nextParams = new URLSearchParams(searchParams)
      if (value === 'All') {
        nextParams.delete('category')
      } else {
        nextParams.set('category', value)
      }
      setSearchParams(nextParams)
    }
  }

  return (
    <main className="bg-velmora-ivory pt-28 sm:pt-32">
      <section className="px-4 pb-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-velmora-paper px-6 py-10 text-velmora-ink shadow-velmora-card sm:px-8 lg:px-12 lg:py-14">
          <p className="text-xs uppercase tracking-editorial text-velmora-muted">Collection</p>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl text-velmora-ink sm:text-5xl lg:text-6xl">
            A quietly luxurious edit of demi-fine essentials.
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-velmora-muted sm:text-base">
            Explore sculpted earrings, luminous necklaces, and polished huggies designed to feel premium, wearable, and gift-ready.
          </p>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[280px_1fr] lg:items-start">
          <FilterSidebar activeFilters={activeFilters} onFilterChange={handleFilterChange} />

          <div>
            <div className="mb-6 flex flex-col gap-4 rounded-[2rem] border border-velmora-line/70 bg-velmora-paper px-5 py-4 shadow-velmora-card sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-velmora-muted">
                Showing <span className="font-semibold text-velmora-ink">{filteredProducts.length}</span> refined styles
              </p>

              <label className="flex items-center gap-3 text-sm text-velmora-muted">
                Sort
                <select
                  value={sortBy}
                  onChange={(event) => setSortBy(event.target.value)}
                  className="rounded-full border border-velmora-line/70 bg-velmora-ivory px-4 py-2 text-sm text-velmora-ink outline-none"
                >
                  {sortOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </label>
            </div>

            {filteredProducts.length ? (
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.slug}
                    product={product}
                    context="shop"
                    sectionId="shop-grid-title"
                    onAddToCart={addItem}
                  />
                ))}
              </div>
            ) : (
              <div className="rounded-[2rem] border border-velmora-line/70 bg-velmora-paper px-6 py-12 text-center text-velmora-ink shadow-velmora-card">
                <h2 className="font-serif text-3xl">No pieces match this filter set</h2>
                <p className="mt-3 text-sm leading-7 text-velmora-muted">
                  Try resetting a filter to see the full Velmora collection again.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
      <span id="shop-grid-title" className="sr-only">
        Velmora collection grid
      </span>
    </main>
  )
}
