import { useEffect, useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import ProductCard from '@/components/common/ProductCard.jsx'
import FilterSidebar from '@/components/shop/FilterSidebar.jsx'
import CollectionHero from '@/components/shop/CollectionHero.jsx'
import { collectionFilters, products } from '@/data/products.js'

const getPriceBucket = (price) => {
  if (price < 50) return 'under-$50'
  if (price <= 80) return '$50-to-$80'
  return '$80-to-$120'
}

const sortOptions = {
  featured: (items) => items,
  'price-low': (items) => [...items].sort((a, b) => a.price - b.price),
  'price-high': (items) => [...items].sort((a, b) => b.price - a.price),
  newest: (items) => [...items].reverse(),
}

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const containerRef = useRef(null)
  const [selectedFilters, setSelectedFilters] = useState({
    category: searchParams.get('category') || 'all',
    price: 'all',
    material: 'all',
  })
  const [sortBy, setSortBy] = useState('featured')

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => window.cancelAnimationFrame(frameId)
  }, [selectedFilters, sortBy])

  const filteredProducts = useMemo(() => {
    const nextProducts = products.filter((product) => {
      const categoryMatch =
        selectedFilters.category === 'all' || product.category === selectedFilters.category
      const materialMatch =
        selectedFilters.material === 'all' ||
        product.material.toLowerCase().replace(/\s+/g, '-') === selectedFilters.material
      const priceMatch =
        selectedFilters.price === 'all' || getPriceBucket(product.price) === selectedFilters.price

      return categoryMatch && materialMatch && priceMatch
    })

    return sortOptions[sortBy](nextProducts)
  }, [selectedFilters, sortBy])

  const handleFilterChange = (key, value) => {
    setSelectedFilters((current) => {
      const nextFilters = { ...current, [key]: value }
      if (key === 'category') {
        if (value === 'all') {
          searchParams.delete('category')
          setSearchParams(searchParams)
        } else {
          setSearchParams({ category: value })
        }
      }
      return nextFilters
    })
  }

  return (
    <main ref={containerRef} className="bg-ivory pb-16 md:pb-24">
      <CollectionHero />
      <section className="mx-auto max-w-7xl px-5 pt-10 md:px-8 md:pt-14">
        <div className="grid gap-8 md:grid-cols-[290px_minmax(0,1fr)]">
          <FilterSidebar
            filters={collectionFilters}
            selectedFilters={selectedFilters}
            onChange={handleFilterChange}
          />
          <div className="space-y-8">
            <div className="flex flex-col gap-4 rounded-[1.75rem] border border-line bg-white p-5 shadow-soft sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-muted">
                Showing <span className="font-medium text-ink">{filteredProducts.length}</span> Velmora pieces
              </p>
              <label className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-muted">
                Sort
                <select
                  value={sortBy}
                  onChange={(event) => setSortBy(event.target.value)}
                  className="h-11 rounded-full border border-line bg-ivory px-4 text-xs uppercase tracking-[0.18em] text-ink outline-none"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="newest">Newest</option>
                </select>
              </label>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
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

export default Shop
