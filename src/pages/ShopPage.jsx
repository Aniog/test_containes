import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '@/components/common/ProductCard'
import SectionHeader from '@/components/common/SectionHeader'
import FilterSidebar from '@/components/shop/FilterSidebar'
import SortDropdown from '@/components/shop/SortDropdown'
import { products } from '@/data/products'

const matchesPrice = (price, filter) => {
  if (filter === 'Under $50') return price < 50
  if (filter === '$50 - $80') return price >= 50 && price <= 80
  if (filter === '$80+') return price > 80
  return true
}

const sortProducts = (items, sortValue) => {
  if (sortValue === 'price-low') return [...items].sort((a, b) => a.price - b.price)
  if (sortValue === 'price-high') return [...items].sort((a, b) => b.price - a.price)
  if (sortValue === 'rating') return [...items].sort((a, b) => b.rating - a.rating)
  return items
}

const ShopPage = () => {
  const [searchParams] = useSearchParams()
  const [filters, setFilters] = useState({
    category: searchParams.get('category') || 'All',
    price: 'All',
    material: 'All',
  })
  const [sortValue, setSortValue] = useState('featured')

  useEffect(() => {
    const categoryFromUrl = searchParams.get('category') || 'All'

    setFilters((current) =>
      current.category === categoryFromUrl ? current : { ...current, category: categoryFromUrl },
    )
  }, [searchParams])

  const filteredProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const matchesCategory =
        filters.category === 'All' || product.category === filters.category
      const materialMatch =
        filters.material === 'All' || product.material === filters.material

      return (
        matchesCategory && materialMatch && matchesPrice(product.price, filters.price)
      )
    })

    return sortProducts(filtered, sortValue)
  }, [filters, sortValue])

  return (
    <section className="bg-stone-100 px-4 pb-16 pt-32 sm:px-6 sm:pb-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Collection"
          title="Shop the Velmora edit"
          description="Elevated demi-fine jewelry with warm metallic finishes, polished proportions, and premium packaging designed for gifting or keeping."
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">
          <FilterSidebar filters={filters} setFilters={setFilters} />

          <div>
            <div className="flex flex-col gap-4 rounded-[2rem] border border-stone-200 bg-stone-50 p-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-stone-600">
                Showing <span className="font-medium text-stone-950">{filteredProducts.length}</span> products
              </p>
              <SortDropdown sortValue={sortValue} setSortValue={setSortValue} />
            </div>

            {filteredProducts.length > 0 ? (
              <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="mt-6 rounded-[2rem] border border-stone-200 bg-white p-8 text-center shadow-xl shadow-stone-900/5 sm:p-12">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-500">
                  No pieces found
                </p>
                <h2 className="mt-4 font-display text-4xl text-stone-950">
                  Try a different combination
                </h2>
                <p className="mt-4 text-sm leading-7 text-stone-600">
                  Adjust your category, price, or material filters to explore more of the Velmora collection.
                </p>
                <button
                  type="button"
                  className="mt-6 rounded-full border border-stone-950 px-6 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-stone-950 transition hover:border-amber-500 hover:bg-amber-50 hover:text-amber-700"
                  onClick={() => setFilters({ category: 'All', price: 'All', material: 'All' })}
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ShopPage
