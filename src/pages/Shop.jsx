import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import EmptyState from '@/components/shared/EmptyState'
import ProductCard from '@/components/shared/ProductCard'
import SectionHeading from '@/components/shared/SectionHeading'
import FilterSidebar from '@/components/shop/FilterSidebar'
import SortSelect from '@/components/shop/SortSelect'
import { useStrkImages } from '@/hooks/useStrkImages'
import { products } from '@/lib/products'

const defaultFilters = {
  categories: [],
  prices: [],
  materials: [],
}

function priceMatches(product, selectedBands) {
  if (selectedBands.length === 0) {
    return true
  }

  return selectedBands.some((band) => {
    if (band === 'Under $50') return product.price < 50
    if (band === '$50 to $80') return product.price >= 50 && product.price <= 80
    if (band === '$80 to $120') return product.price > 80 && product.price <= 120
    return true
  })
}

export default function Shop() {
  const [searchParams] = useSearchParams()
  const categoryParam = searchParams.get('category')
  const [filters, setFilters] = useState(() => ({
    ...defaultFilters,
    categories: categoryParam ? [categoryParam] : [],
  }))
  const [sortBy, setSortBy] = useState('featured')
  const containerRef = useStrkImages([filters, sortBy])

  const filteredProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const categoryMatch =
        filters.categories.length === 0 || filters.categories.includes(product.category)
      const materialMatch =
        filters.materials.length === 0 || filters.materials.includes(product.material)

      return categoryMatch && materialMatch && priceMatches(product, filters.prices)
    })

    const sorted = [...filtered]

    if (sortBy === 'price-low') {
      sorted.sort((left, right) => left.price - right.price)
    }

    if (sortBy === 'price-high') {
      sorted.sort((left, right) => right.price - left.price)
    }

    if (sortBy === 'rating') {
      sorted.sort((left, right) => right.rating - left.rating)
    }

    return sorted
  }, [filters, sortBy])

  return (
    <div ref={containerRef} className="bg-velmora-ivory pt-28">
      <section className="px-4 pb-20 pt-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Shop Velmora"
            title="Quiet luxury, ready to wear"
            description="Explore demi-fine earrings, necklaces, huggies, and giftable sets crafted for elevated everyday dressing."
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-[290px_minmax(0,1fr)]">
            <FilterSidebar filters={filters} setFilters={setFilters} />

            <div>
              <div className="mb-6 flex flex-col gap-4 rounded-[2rem] border border-velmora-sand/50 bg-white p-5 shadow-soft sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-stone-600">
                  Showing <span className="font-medium text-stone-900">{filteredProducts.length}</span> refined pieces
                </p>
                <SortSelect value={sortBy} onChange={setSortBy} />
              </div>

              {filteredProducts.length > 0 ? (
                <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <EmptyState
                  title="No products match those filters"
                  description="Try broadening your selection to view all demi-fine styles across earrings, necklaces, huggies, and giftable sets."
                  onReset={() => setFilters(defaultFilters)}
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
