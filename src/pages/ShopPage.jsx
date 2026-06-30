import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '@/components/shop/ProductCard'
import FilterSidebar from '@/components/shop/FilterSidebar'
import SortDropdown from '@/components/shop/SortDropdown'
import SectionHeading from '@/components/ui/SectionHeading'
import { products } from '@/data/products'

const defaultFilters = {
  category: 'All',
  material: 'All',
  price: 'All',
}

const matchesPrice = (price, range) => {
  if (range === 'Under $50') return price < 50
  if (range === '$50 to $80') return price >= 50 && price <= 80
  if (range === '$80+') return price > 80
  return true
}

const ShopPage = ({ onAddToCart }) => {
  const [searchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || 'All'
  const [filters, setFilters] = useState({ ...defaultFilters, category: initialCategory })
  const [sort, setSort] = useState('featured')

  useEffect(() => {
    setFilters((current) => ({ ...current, category: initialCategory }))
  }, [initialCategory])

  const filteredProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const categoryMatch = filters.category === 'All' || product.category === filters.category
      const materialMatch = filters.material === 'All' || product.material === filters.material
      const priceMatch = matchesPrice(product.price, filters.price)
      return categoryMatch && materialMatch && priceMatch
    })

    if (sort === 'price-asc') return [...filtered].sort((a, b) => a.price - b.price)
    if (sort === 'price-desc') return [...filtered].sort((a, b) => b.price - a.price)
    if (sort === 'rating-desc') return [...filtered].sort((a, b) => b.rating - a.rating)
    return filtered
  }, [filters, sort])

  return (
    <main className="bg-stone-50 pb-20 pt-8">
      <div className="page-shell">
        <SectionHeading
          eyebrow="The Collection"
          title="Everyday jewelry with an editorial finish."
          description="Browse Velmora’s full edit of earrings, necklaces, huggies, and giftable sets designed for gifting and self-purchase alike."
        />
        <div className="mt-10 grid gap-8 lg:grid-cols-[280px_1fr]">
          <FilterSidebar
            filters={filters}
            onChange={(group, option) => setFilters((current) => ({ ...current, [group]: option }))}
            onReset={() => setFilters(defaultFilters)}
          />
          <div>
            <div className="mb-6 flex flex-col gap-4 rounded-[2rem] border border-stone-200 bg-white p-5 shadow-sm shadow-stone-200/40 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-stone-600">
                Showing <span className="font-medium text-stone-900">{filteredProducts.length}</span> products
              </p>
              <SortDropdown value={sort} onChange={setSort} />
            </div>
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  scope="shop"
                  onAddToCart={onAddToCart}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default ShopPage
