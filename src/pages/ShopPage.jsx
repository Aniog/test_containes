import { useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { products } from '../data/products'
import FilterSidebar from '../components/store/FilterSidebar'
import ProductCard from '../components/store/ProductCard'
import SectionHeading from '../components/ui/SectionHeading'
import { useCart } from '../components/store/CartContext'
import { useStrkImages } from '../lib/useStrkImages'

const sortOptions = {
  featured: 'Featured',
  priceLow: 'Price: Low to High',
  priceHigh: 'Price: High to Low',
  newest: 'Newest Edit',
}

export default function ShopPage() {
  const [searchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || 'All'
  const [filters, setFilters] = useState({
    category: initialCategory,
    priceRange: 'All',
    material: 'All',
  })
  const [sortBy, setSortBy] = useState('featured')
  const { addItem } = useCart()
  const containerRef = useRef(null)

  useStrkImages(containerRef, [filters.category, filters.priceRange, filters.material, sortBy])

  const filteredProducts = useMemo(() => {
    const nextProducts = products.filter((product) => {
      const categoryMatch =
        filters.category === 'All' || product.category === filters.category

      const priceMatch =
        filters.priceRange === 'All' ||
        (filters.priceRange === 'Under $50' && product.price < 50) ||
        (filters.priceRange === '$50 to $80' && product.price >= 50 && product.price <= 80) ||
        (filters.priceRange === '$80+' && product.price > 80)

      const materialMatch =
        filters.material === 'All' ||
        product.material === filters.material ||
        product.materialTag === filters.material

      return categoryMatch && priceMatch && materialMatch
    })

    if (sortBy === 'priceLow') {
      return [...nextProducts].sort((a, b) => a.price - b.price)
    }

    if (sortBy === 'priceHigh') {
      return [...nextProducts].sort((a, b) => b.price - a.price)
    }

    if (sortBy === 'newest') {
      return [...nextProducts].reverse()
    }

    return nextProducts
  }, [filters.category, filters.material, filters.priceRange, sortBy])

  return (
    <div ref={containerRef} className="bg-shell px-4 pb-20 pt-32 text-ink md:px-8 md:pb-28">
      <div className="mx-auto max-w-7xl space-y-12">
        <SectionHeading
          eyebrow="Collection"
          title="An elevated jewelry edit for gifting and self-purchase"
          description="Filter by silhouette, price, and finish to find a piece that layers beautifully into everyday dressing."
        />

        <div className="grid gap-10 lg:grid-cols-[300px_minmax(0,1fr)]">
          <FilterSidebar filters={filters} setFilters={setFilters} />

          <section className="space-y-6">
            <div className="flex flex-col gap-4 rounded-[28px] border border-parchment bg-mist p-5 md:flex-row md:items-center md:justify-between">
              <p className="text-sm leading-6 text-stone">
                Showing <span className="font-medium text-ink">{filteredProducts.length}</span> pieces from the Velmora collection.
              </p>
              <label className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-stone">
                Sort
                <select
                  value={sortBy}
                  onChange={(event) => setSortBy(event.target.value)}
                  className="h-11 rounded-full border border-parchment bg-shell px-4 text-xs uppercase tracking-[0.18em] text-ink focus:outline-none focus:ring-2 focus:ring-champagne/60"
                >
                  {Object.entries(sortOptions).map(([value, label]) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="grid gap-10 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={(item) => addItem(item, item.tones[0], 1)}
                />
              ))}
            </div>

            {filteredProducts.length === 0 ? (
              <div className="rounded-[30px] border border-parchment bg-mist p-10 text-center">
                <h3 className="font-serif text-3xl text-ink">No pieces match this edit</h3>
                <p className="mt-3 text-sm leading-7 text-stone">
                  Try widening the filters to browse the full Velmora collection again.
                </p>
              </div>
            ) : null}
          </section>
        </div>
      </div>
    </div>
  )
}
