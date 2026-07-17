import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import CollectionHero from '../components/shop/CollectionHero'
import FilterSidebar from '../components/shop/FilterSidebar'
import SortBar from '../components/shop/SortBar'
import ProductCard from '../components/shared/ProductCard'
import { products } from '../data/products'

function applyPriceFilter(product, range) {
  if (!range) {
    return true
  }

  if (range === 'under-50') {
    return product.price < 50
  }

  if (range === '50-80') {
    return product.price >= 50 && product.price <= 80
  }

  if (range === '80-plus') {
    return product.price > 80
  }

  return true
}

export default function ShopPage() {
  const [searchParams] = useSearchParams()
  const [filters, setFilters] = useState({
    category: searchParams.get('category') || '',
    price: '',
    material: '',
  })
  const [sort, setSort] = useState('featured')

  useEffect(() => {
    setFilters((current) => ({
      ...current,
      category: searchParams.get('category') || '',
    }))
  }, [searchParams])

  const filteredProducts = useMemo(() => {
    const results = products.filter((product) => {
      if (filters.category && product.category !== filters.category) {
        return false
      }

      if (filters.material && product.material !== filters.material) {
        return false
      }

      if (!applyPriceFilter(product, filters.price)) {
        return false
      }

      return true
    })

    if (sort === 'price-asc') {
      return [...results].sort((a, b) => a.price - b.price)
    }

    if (sort === 'price-desc') {
      return [...results].sort((a, b) => b.price - a.price)
    }

    if (sort === 'rating') {
      return [...results].sort((a, b) => b.rating - a.rating)
    }

    return results
  }, [filters, sort])

  const handleFilterChange = (key, value) => {
    setFilters((current) => ({
      ...current,
      [key]: value,
    }))
  }

  return (
    <>
      <CollectionHero />
      <section className="section-shell pb-16 pt-8 md:pb-24 md:pt-10">
        <div className="section-frame grid gap-6 lg:grid-cols-[300px_minmax(0,1fr)] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <FilterSidebar filters={filters} onChange={handleFilterChange} />
          </div>

          <div className="space-y-6">
            <SortBar sort={sort} onSortChange={setSort} resultCount={filteredProducts.length} />

            {filteredProducts.length > 0 ? (
              <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
                {filteredProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} priority={index < 2} />
                ))}
              </div>
            ) : (
              <div className="rounded-[32px] border border-velmora-ink/10 bg-white/70 px-6 py-12 text-center shadow-card md:px-10">
                <p className="text-xs uppercase tracking-luxe text-velmora-truffle">No exact match</p>
                <h2 className="mt-4 font-display text-4xl text-velmora-ink">Try a softer filter mix</h2>
                <p className="mx-auto mt-4 max-w-xl text-base leading-8 text-velmora-cocoa">
                  Adjust category, price, or material to discover more pieces from the Velmora collection.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
