import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import SectionHeading from '@/components/common/SectionHeading'
import ProductCard from '@/components/product/ProductCard'
import FilterSidebar from '@/components/shop/FilterSidebar'
import { priceFilters, products, sortOptions } from '@/data/storeData'

const sortProducts = (items, sort) => {
  switch (sort) {
    case 'price-low':
      return [...items].sort((a, b) => a.price - b.price)
    case 'price-high':
      return [...items].sort((a, b) => b.price - a.price)
    case 'rating':
      return [...items].sort((a, b) => b.rating - a.rating)
    default:
      return items
  }
}

const Shop = () => {
  const [searchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || 'all'
  const [filters, setFilters] = useState({
    category: initialCategory,
    price: 'all',
    material: 'all',
  })
  const [sort, setSort] = useState('featured')

  const filteredProducts = useMemo(() => {
    const byCategory = filters.category === 'all'
      ? products
      : products.filter((product) => product.productType === filters.category)

    const activePrice = priceFilters.find((range) => range.id === filters.price)

    const byPrice = activePrice
      ? byCategory.filter(
          (product) => product.price >= activePrice.min && product.price <= activePrice.max,
        )
      : byCategory

    const byMaterial =
      filters.material === 'all'
        ? byPrice
        : byPrice.filter((product) => product.material === filters.material)

    return sortProducts(byMaterial, sort)
  }, [filters, sort])

  return (
    <div className="pb-16 md:pb-24">
      <section className="border-b border-stone-300/70 bg-stone-100/60 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Collection"
            title="Jewelry designed to layer, gift, and keep close."
            description="Discover demi-fine earrings, necklaces, and huggies in warm metallic finishes and refined silhouettes."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <p className="text-sm text-stone-600">
            Showing <span className="font-medium text-stone-900">{filteredProducts.length}</span> curated pieces
          </p>
          <div className="flex items-center gap-3">
            <label htmlFor="sort" className="text-sm text-stone-600">
              Sort by
            </label>
            <select
              id="sort"
              value={sort}
              onChange={(event) => setSort(event.target.value)}
              className="h-11 rounded-full border border-stone-300 bg-stone-50 px-4 text-sm text-stone-900 outline-none"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[18rem_1fr] lg:gap-10">
          <FilterSidebar filters={filters} setFilters={setFilters} />
          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Shop
