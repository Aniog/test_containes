import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import FilterSidebar from '@/components/shop/FilterSidebar'
import SortSelect from '@/components/shop/SortSelect'
import ImageLoaderSection from '@/components/shared/ImageLoaderSection'
import ProductCard from '@/components/shared/ProductCard'
import { filterOptions, products } from '@/data/products'
import { useCart } from '@/context/CartContext'

const matchesPrice = (product, value) => {
  if (value === 'under-50') return product.price < 50
  if (value === '50-80') return product.price >= 50 && product.price <= 80
  if (value === '80-120') return product.price > 80 && product.price <= 120
  return true
}

const sortProducts = (items, value) => {
  const nextItems = [...items]

  if (value === 'price-asc') return nextItems.sort((a, b) => a.price - b.price)
  if (value === 'price-desc') return nextItems.sort((a, b) => b.price - a.price)
  if (value === 'name-asc') return nextItems.sort((a, b) => a.name.localeCompare(b.name))

  return nextItems
}

const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [sortValue, setSortValue] = useState('featured')
  const { addToCart } = useCart()

  const filters = {
    category: searchParams.get('category') || 'All',
    price: searchParams.get('price') || 'all',
    material: searchParams.get('material') || 'All',
  }

  const filteredProducts = useMemo(() => {
    const items = products.filter((product) => {
      const categoryMatch =
        filters.category === 'All' || product.category === filters.category
      const materialMatch =
        filters.material === 'All' || product.material === filters.material
      const priceMatch = matchesPrice(product, filters.price)

      return categoryMatch && materialMatch && priceMatch
    })

    return sortProducts(items, sortValue)
  }, [filters.category, filters.material, filters.price, sortValue])

  const handleFilterChange = (key, value) => {
    const nextParams = new URLSearchParams(searchParams)

    if ((key === 'category' || key === 'material') && value === 'All') {
      nextParams.delete(key)
    } else if (key === 'price' && value === 'all') {
      nextParams.delete(key)
    } else {
      nextParams.set(key, value)
    }

    setSearchParams(nextParams)
  }

  return (
    <main className="pt-28 sm:pt-32">
      <section className="section-shell pb-8 pt-6">
        <div className="max-w-3xl space-y-5">
          <p className="text-xs uppercase tracking-luxury text-velmora-gold">Shop Velmora</p>
          <h1 className="font-display text-5xl text-velmora-ink sm:text-6xl">
            Quietly polished jewelry for everyday glow and thoughtful gifting.
          </h1>
          <p className="max-w-2xl text-sm leading-8 text-velmora-muted sm:text-base">
            Explore our full demi-fine edit, refine by category and material, and discover premium-but-accessible pieces that feel elevated from day to night.
          </p>
        </div>
      </section>

      <section className="section-shell grid gap-8 pt-0 lg:grid-cols-[18rem_minmax(0,1fr)]">
        <FilterSidebar
          filters={filters}
          filterOptions={filterOptions}
          onFilterChange={handleFilterChange}
        />

        <div className="space-y-6">
          <div className="flex flex-col gap-4 rounded-[2rem] border border-velmora-line bg-velmora-sand p-5 shadow-velmora-soft sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-velmora-muted">
              Showing <span className="font-medium text-velmora-ink">{filteredProducts.length}</span> refined pieces
            </p>
            <SortSelect value={sortValue} onChange={setSortValue} />
          </div>

          <ImageLoaderSection className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3" dependency={`${filteredProducts.length}-${sortValue}-${filters.category}-${filters.price}-${filters.material}`}>
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                context="shop-grid"
                sectionId="shop-grid-title"
                onQuickAdd={(entry) => addToCart(entry, entry.variantOptions[0], 1)}
              />
            ))}
          </ImageLoaderSection>

          {filteredProducts.length === 0 ? (
            <div className="rounded-[2rem] border border-velmora-line bg-velmora-mist p-10 text-center shadow-velmora-soft">
              <p className="font-display text-3xl text-velmora-ink">No pieces match this edit.</p>
              <p className="mt-3 text-sm leading-7 text-velmora-muted">
                Try another category, material, or price range to explore the full collection.
              </p>
            </div>
          ) : null}

          <h2 id="shop-grid-title" className="sr-only">
            Velmora collection product grid
          </h2>
        </div>
      </section>
    </main>
  )
}

export default ShopPage
