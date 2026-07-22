import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import ProductCard from '@/components/common/ProductCard'
import SectionHeading from '@/components/common/SectionHeading'
import FilterSidebar from '@/components/shop/FilterSidebar'
import SortDropdown from '@/components/shop/SortDropdown'
import { useStore } from '@/context/StoreContext'

const sortProducts = (products, sortKey) => {
  switch (sortKey) {
    case 'price-asc':
      return [...products].sort((left, right) => left.price - right.price)
    case 'price-desc':
      return [...products].sort((left, right) => right.price - left.price)
    case 'rating':
      return [...products].sort((left, right) => right.rating - left.rating)
    case 'name':
      return [...products].sort((left, right) => left.name.localeCompare(right.name))
    default:
      return products
  }
}

const Shop = () => {
  const [searchParams] = useSearchParams()
  const categoryParam = searchParams.get('category')
  const { products, searchQuery } = useStore()
  const [filters, setFilters] = useState({
    category: categoryParam || 'All',
    price: 120,
    material: 'All',
  })
  const [sortBy, setSortBy] = useState('featured')

  const filteredProducts = useMemo(() => {
    const normalizedSearch = searchQuery.trim().toLowerCase()

    const visibleProducts = products.filter((product) => {
      const matchesCategory =
        filters.category === 'All' || product.category === filters.category
      const matchesPrice = product.price <= filters.price
      const matchesMaterial =
        filters.material === 'All' || product.material === filters.material
      const matchesSearch =
        !normalizedSearch ||
        [product.name, product.category, product.material, product.shortDescription]
          .join(' ')
          .toLowerCase()
          .includes(normalizedSearch)

      return matchesCategory && matchesPrice && matchesMaterial && matchesSearch
    })

    return sortProducts(visibleProducts, sortBy)
  }, [filters, products, searchQuery, sortBy])

  return (
    <main className="pb-20 pt-32 sm:pt-36">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 sm:px-8 lg:px-10">
        <section className="rounded-[2rem] bg-white/70 px-6 py-8 shadow-soft sm:px-8 sm:py-10">
          <SectionHeading
            eyebrow="Collection"
            title="Shop the full Velmora edit"
            description="Browse sculptural earrings, warm gold necklaces, and polished huggies designed for effortless gifting and everyday wear."
          />
        </section>

        <section className="grid gap-8 lg:grid-cols-[280px_1fr] lg:items-start">
          <FilterSidebar
            filters={filters}
            setFilters={setFilters}
            priceCap={120}
          />

          <div className="space-y-8">
            <div className="flex flex-col gap-4 rounded-[2rem] border border-velmora-mist/20 bg-white/70 px-5 py-5 shadow-soft sm:flex-row sm:items-center sm:justify-between sm:px-6">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-velmora-mist">
                  Showing {filteredProducts.length} pieces
                </p>
                <p className="mt-2 text-sm leading-7 text-velmora-rose">
                  Curated for premium-but-accessible self-purchase and gifting moments.
                </p>
              </div>
              <SortDropdown value={sortBy} onChange={setSortBy} />
            </div>

            {filteredProducts.length ? (
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {filteredProducts.map((product, index) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    priority={index < 2}
                  />
                ))}
              </div>
            ) : (
              <div className="rounded-[2rem] border border-dashed border-velmora-mist/30 bg-white/70 px-6 py-14 text-center shadow-soft">
                <h2 className="font-display text-4xl text-velmora-ink">
                  No pieces match your filters
                </h2>
                <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-velmora-rose">
                  Try broadening the category, material, or price selection to reveal more of the collection.
                </p>
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  )
}

export default Shop
