import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '@/components/shop/ProductCard'
import FilterSidebar from '@/components/shop/FilterSidebar'
import SortSelect from '@/components/shop/SortSelect'
import SectionHeading from '@/components/ui/SectionHeading'
import { useCart } from '@/components/cart/CartContext'
import { products } from '@/data/catalog'
import { useStrkImages } from '@/lib/useStrkImages'

const applyPriceFilter = (product, price) => {
  if (price === 'under-50') return product.price < 50
  if (price === '50-80') return product.price >= 50 && product.price <= 80
  if (price === '80-plus') return product.price > 80
  return true
}

const sortProducts = (items, sortValue) => {
  const sorted = [...items]

  if (sortValue === 'price-asc') {
    return sorted.sort((a, b) => a.price - b.price)
  }

  if (sortValue === 'price-desc') {
    return sorted.sort((a, b) => b.price - a.price)
  }

  if (sortValue === 'rating-desc') {
    return sorted.sort((a, b) => b.rating - a.rating)
  }

  return sorted
}

const ShopPage = () => {
  const [searchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || 'All'
  const [filters, setFilters] = useState({
    category: initialCategory,
    price: 'all',
    material: 'all',
  })
  const [sortValue, setSortValue] = useState('featured')
  const { addToCart } = useCart()
  const containerRef = useStrkImages([filters.category, filters.price, filters.material, sortValue])

  const filteredProducts = useMemo(() => {
    const byFilters = products.filter((product) => {
      const matchesCategory =
        filters.category === 'All' || product.category === filters.category
      const matchesPrice = applyPriceFilter(product, filters.price)
      const matchesMaterial =
        filters.material === 'all' ||
        product.materialTags.includes(filters.material) ||
        product.material === filters.material

      return matchesCategory && matchesPrice && matchesMaterial
    })

    return sortProducts(byFilters, sortValue)
  }, [filters.category, filters.material, filters.price, sortValue])

  const handleFilterChange = (key, value) => {
    setFilters((current) => ({ ...current, [key]: value }))
  }

  return (
    <div ref={containerRef} className="bg-stone-50 pt-28 md:pt-32">
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Shop the collection"
            title="Editorial demi-fine pieces for everyday polish"
            description="Browse earrings, necklaces, huggies, and gift-ready sets designed to look elevated and feel easy to wear."
          />
        </div>
      </section>

      <section className="py-10 md:py-14">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[280px_1fr] lg:px-8">
          <FilterSidebar filters={filters} onFilterChange={handleFilterChange} />

          <div>
            <div className="flex flex-col gap-4 rounded-[28px] border border-stone-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-stone-600">
                Showing <span className="font-medium text-stone-900">{filteredProducts.length}</span>{' '}
                pieces
              </p>
              <SortSelect value={sortValue} onChange={setSortValue} />
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  sectionId="shop-grid-title"
                  onAddToCart={addToCart}
                />
              ))}
            </div>

            {filteredProducts.length === 0 ? (
              <div className="mt-6 rounded-[28px] border border-dashed border-stone-300 bg-white px-6 py-10 text-center text-stone-700">
                <p className="font-serif text-3xl text-stone-900">No pieces found</p>
                <p className="mt-3 text-sm leading-6 text-stone-600">
                  Try adjusting the category, price, or material filters to broaden your edit.
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ShopPage
