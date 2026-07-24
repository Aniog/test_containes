import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '../components/common/ProductCard'
import CollectionHero from '../components/shop/CollectionHero'
import FilterSidebar from '../components/shop/FilterSidebar'
import ShopToolbar from '../components/shop/ShopToolbar'
import {
  categoryOptions,
  materialOptions,
  products,
  sortOptions,
} from '../data/store'
import useStrkImages from '../lib/useStrkImages'

const matchesPrice = (price, priceFilter) => {
  if (priceFilter === 'under-50') return price < 50
  if (priceFilter === '50-80') return price >= 50 && price <= 80
  if (priceFilter === '80-plus') return price > 80
  return true
}

const sortProducts = (items, sort) => {
  const sorted = [...items]

  if (sort === 'price-low') {
    return sorted.sort((first, second) => first.price - second.price)
  }

  if (sort === 'price-high') {
    return sorted.sort((first, second) => second.price - first.price)
  }

  if (sort === 'rating') {
    return sorted.sort((first, second) => second.rating - first.rating)
  }

  return sorted
}

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [filters, setFilters] = useState({
    category: searchParams.get('category') || 'All Categories',
    price: 'all',
    material: 'All Materials',
  })
  const [sort, setSort] = useState('featured')
  const containerRef = useStrkImages([filters, sort])

  const filteredProducts = useMemo(() => {
    const nextProducts = products.filter((product) => {
      const matchesCategory =
        filters.category === 'All Categories' || product.category === filters.category
      const matchesMaterial =
        filters.material === 'All Materials' || product.material === filters.material

      return (
        matchesCategory &&
        matchesMaterial &&
        matchesPrice(product.price, filters.price)
      )
    })

    return sortProducts(nextProducts, sort)
  }, [filters, sort])

  const handleFilterChange = (key, value) => {
    setFilters((current) => {
      const nextFilters = { ...current, [key]: value }
      const nextParams = new URLSearchParams(searchParams)

      if (key === 'category') {
        if (value === 'All Categories') {
          nextParams.delete('category')
        } else {
          nextParams.set('category', value)
        }
        setSearchParams(nextParams)
      }

      return nextFilters
    })
  }

  return (
    <div ref={containerRef} className="bg-stone-950 text-stone-50">
      <CollectionHero />

      <section className="px-6 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[18rem_minmax(0,1fr)] lg:items-start">
          <FilterSidebar
            filters={filters}
            categoryOptions={categoryOptions}
            materialOptions={materialOptions}
            onFilterChange={handleFilterChange}
          />

          <div className="space-y-6">
            <ShopToolbar
              count={filteredProducts.length}
              sort={sort}
              sortOptions={sortOptions}
              onSortChange={setSort}
            />

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.slug} product={product} scope="shop" />
              ))}
            </div>

            {!filteredProducts.length ? (
              <div className="rounded-[2rem] border border-dashed border-stone-200/15 bg-stone-900/50 px-8 py-16 text-center">
                <p className="font-display text-4xl text-stone-50">No pieces match this edit.</p>
                <p className="mt-3 text-sm leading-7 text-stone-300">
                  Try switching filters to explore the full Velmora collection.
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Shop
