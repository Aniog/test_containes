import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import FiltersSidebar from '@/components/store/FiltersSidebar'
import ProductCard from '@/components/store/ProductCard'
import SectionHeading from '@/components/store/SectionHeading'
import { useStockImages } from '@/hooks/useStockImages'
import { products } from '@/data/storeData'

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Top Rated', value: 'rating' },
]

const inPriceRange = (price, range) => {
  if (!range) return true
  if (range === 'under-50') return price < 50
  if (range === '50-80') return price >= 50 && price <= 80
  if (range === '80-120') return price > 80 && price <= 120
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
  const containerRef = useStockImages([filters.category, filters.price, filters.material, sort])

  const filteredProducts = useMemo(() => {
    const nextProducts = products.filter((product) => {
      const categoryMatch =
        !filters.category || product.category.toLowerCase() === filters.category
      const priceMatch = inPriceRange(product.price, filters.price)
      const materialMatch =
        !filters.material || product.material === filters.material

      return categoryMatch && priceMatch && materialMatch
    })

    if (sort === 'price-asc') {
      return [...nextProducts].sort((a, b) => a.price - b.price)
    }

    if (sort === 'price-desc') {
      return [...nextProducts].sort((a, b) => b.price - a.price)
    }

    if (sort === 'rating') {
      return [...nextProducts].sort((a, b) => b.rating - a.rating)
    }

    return [...nextProducts].sort((a, b) => Number(b.featured) - Number(a.featured))
  }, [filters.category, filters.material, filters.price, sort])

  const handleFilterChange = (key, value) => {
    setFilters((current) => ({ ...current, [key]: value }))
  }

  return (
    <main ref={containerRef} className="bg-velmora-ivory pt-32 sm:pt-36">
      <section className="border-b border-velmora-mist/70 bg-velmora-panel/35 py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Collection"
            title="A refined storefront of demi-fine jewelry for gifting and self-purchase."
            description="Filter by category, price, or material to build your own Velmora edit."
          />
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[280px_minmax(0,1fr)] lg:px-10">
          <FiltersSidebar filters={filters} onChange={handleFilterChange} />
          <div>
            <div className="mb-6 flex flex-col gap-4 rounded-[2rem] border border-velmora-mist/70 bg-white/70 p-5 text-velmora-ink shadow-soft sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-velmora-muted">
                Showing <span className="font-semibold text-velmora-ink">{filteredProducts.length}</span> pieces
              </p>
              <label className="flex items-center gap-3 text-sm text-velmora-muted">
                Sort by
                <select
                  value={sort}
                  onChange={(event) => setSort(event.target.value)}
                  className="rounded-full border border-velmora-mist/70 bg-velmora-ivory px-4 py-2 text-sm text-velmora-ink focus:outline-none"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
