import { useEffect, useMemo, useRef, useState } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import { useLocation } from 'react-router-dom'
import ProductCard from '@/components/storefront/ProductCard'
import SectionHeader from '@/components/storefront/SectionHeader'
import ShopFilters from '@/components/storefront/ShopFilters'
import { products } from '@/data/products'
import strkImgConfig from '@/strk-img-config.json'

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
]

function getInitialCategory(search) {
  const params = new URLSearchParams(search)
  return params.get('category') || 'All'
}

function filterByPrice(product, selectedPrice) {
  if (selectedPrice === 'Under $50') return product.price < 50
  if (selectedPrice === '$50 to $80') return product.price >= 50 && product.price <= 80
  if (selectedPrice === '$80+') return product.price > 80
  return true
}

export default function ShopPage({ onAddToCart }) {
  const location = useLocation()
  const containerRef = useRef(null)
  const [filters, setFilters] = useState({
    category: getInitialCategory(location.search),
    price: 'All',
    material: 'All',
  })
  const [sort, setSort] = useState('featured')

  useEffect(() => {
    const nextCategory = getInitialCategory(location.search)
    setFilters((current) =>
      current.category === nextCategory ? current : { ...current, category: nextCategory },
    )
  }, [location.search])

  const filteredProducts = useMemo(() => {
    const nextProducts = products
      .filter((product) =>
        filters.category === 'All' ? true : product.category === filters.category,
      )
      .filter((product) => filterByPrice(product, filters.price))
      .filter((product) =>
        filters.material === 'All' ? true : product.material === filters.material,
      )

    if (sort === 'price-asc') {
      return [...nextProducts].sort((a, b) => a.price - b.price)
    }

    if (sort === 'price-desc') {
      return [...nextProducts].sort((a, b) => b.price - a.price)
    }

    if (sort === 'rating') {
      return [...nextProducts].sort((a, b) => b.rating - a.rating)
    }

    return nextProducts
  }, [filters, sort])

  useEffect(() => {
    let cleanup = () => {}
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current) || (() => {})
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      cleanup()
    }
  }, [filteredProducts, sort])

  return (
    <section ref={containerRef} className="px-4 pb-20 pt-28 md:px-8 md:pb-28 md:pt-36">
      <div className="mx-auto max-w-7xl space-y-10">
        <SectionHeader
          eyebrow="Collection"
          title="The Velmora shop"
          description="An accessible luxury edit of polished gold essentials, crystal details, and gift-ready sets for every occasion."
        />

        <div className="flex flex-col gap-6 lg:grid lg:grid-cols-[280px_minmax(0,1fr)]">
          <ShopFilters filters={filters} setFilters={setFilters} />

          <div className="space-y-6">
            <div className="flex flex-col gap-4 rounded-[1.5rem] border border-velmora-stone/15 bg-white px-5 py-4 shadow-soft sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-velmora-stone">
                Showing <span className="font-semibold text-velmora-ink">{filteredProducts.length}</span> pieces
              </p>
              <label className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-velmora-stone">
                Sort
                <select
                  value={sort}
                  onChange={(event) => setSort(event.target.value)}
                  className="rounded-full border border-velmora-stone/20 bg-velmora-ivory px-4 py-2 text-xs uppercase tracking-[0.18em] text-velmora-ink focus:border-velmora-gold focus:outline-none"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={onAddToCart}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
