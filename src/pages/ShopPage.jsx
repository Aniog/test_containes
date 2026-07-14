import { useMemo, useState } from 'react'
import ProductCard from '@/components/products/ProductCard'
import FilterSidebar from '@/components/shop/FilterSidebar'
import SectionHeader from '@/components/common/SectionHeader'
import { products } from '@/data/products'
import { useStockImages } from '@/hooks/use-stock-images'

const sortOptions = {
  featured: 'Featured',
  priceAsc: 'Price: Low to High',
  priceDesc: 'Price: High to Low',
  rating: 'Top Rated',
}

const ShopPage = () => {
  const containerRef = useStockImages([])
  const [filters, setFilters] = useState({
    category: 'All',
    price: 'All',
    material: 'All',
  })
  const [sort, setSort] = useState('featured')

  const filteredProducts = useMemo(() => {
    let nextProducts = [...products]

    if (filters.category !== 'All') {
      nextProducts = nextProducts.filter((product) => product.category === filters.category)
    }

    if (filters.material !== 'All') {
      nextProducts = nextProducts.filter((product) => product.material === filters.material)
    }

    if (filters.price === 'Under $50') {
      nextProducts = nextProducts.filter((product) => product.price < 50)
    }

    if (filters.price === '$50 to $80') {
      nextProducts = nextProducts.filter((product) => product.price >= 50 && product.price <= 80)
    }

    if (filters.price === '$80+') {
      nextProducts = nextProducts.filter((product) => product.price > 80)
    }

    if (sort === 'priceAsc') {
      nextProducts.sort((a, b) => a.price - b.price)
    }

    if (sort === 'priceDesc') {
      nextProducts.sort((a, b) => b.price - a.price)
    }

    if (sort === 'rating') {
      nextProducts.sort((a, b) => b.rating - a.rating)
    }

    return nextProducts
  }, [filters, sort])

  const handleFilterChange = (group, option) => {
    setFilters((current) => ({
      ...current,
      [group]: option,
    }))
  }

  return (
    <div ref={containerRef} className="bg-velmora-cream text-velmora-ink">
      <section className="bg-velmora-panel pb-16 pt-32 text-velmora-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-velmora-gold">Collections</p>
          <h1 className="mt-5 max-w-3xl font-display text-5xl leading-none sm:text-6xl">
            The Velmora shop, curated for gifting and self-adornment
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-velmora-cream/78 sm:text-lg">
            Browse earrings, necklaces, huggies, and gift sets with refined filters and a responsive grid built for discovery.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[300px_1fr] lg:items-start">
          <FilterSidebar filters={filters} onChange={handleFilterChange} />

          <div>
            <div className="flex flex-col gap-6 border-b border-velmora-line pb-8 sm:flex-row sm:items-end sm:justify-between">
              <SectionHeader
                eyebrow="Shop all"
                title="Everyday pieces with an editorial finish"
                description={`${filteredProducts.length} pieces available across elevated staples and giftable favorites.`}
              />
              <label className="flex flex-col gap-2 text-sm text-velmora-muted sm:min-w-[220px]">
                Sort by
                <select
                  value={sort}
                  onChange={(event) => setSort(event.target.value)}
                  className="h-12 rounded-full border border-velmora-line bg-white px-5 text-sm text-velmora-ink focus:border-velmora-gold focus:outline-none"
                >
                  {Object.entries(sortOptions).map(([value, label]) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ShopPage
