import { useEffect, useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import ProductCard from '@/components/storefront/ProductCard.jsx'
import FilterSidebar from '@/components/storefront/FilterSidebar.jsx'
import { products, sortOptions } from '@/data/products.js'

function applyPriceFilter(product, price) {
  if (price === 'Under $50') return product.price < 50
  if (price === '$50-$80') return product.price >= 50 && product.price <= 80
  if (price === '$80+') return product.price > 80
  return true
}

function sortProducts(productList, sortValue) {
  const nextProducts = [...productList]

  if (sortValue === 'Price: Low to High') {
    return nextProducts.sort((a, b) => a.price - b.price)
  }

  if (sortValue === 'Price: High to Low') {
    return nextProducts.sort((a, b) => b.price - a.price)
  }

  if (sortValue === 'Top Rated') {
    return nextProducts.sort((a, b) => b.rating - a.rating)
  }

  return nextProducts
}

export default function Shop() {
  const containerRef = useRef(null)
  const [searchParams] = useSearchParams()
  const incomingCategory = searchParams.get('category') || 'All'
  const [filters, setFilters] = useState({
    category: incomingCategory,
    price: 'All',
    material: 'All',
  })
  const [sortValue, setSortValue] = useState('Featured')

  useEffect(() => {
    setFilters((current) => ({ ...current, category: incomingCategory }))
  }, [incomingCategory])

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [filters, sortValue])

  const filteredProducts = useMemo(() => {
    const result = products.filter((product) => {
      const categoryMatch =
        filters.category === 'All' || product.category === filters.category
      const materialMatch =
        filters.material === 'All' || product.material === filters.material
      return categoryMatch && materialMatch && applyPriceFilter(product, filters.price)
    })

    return sortProducts(result, sortValue)
  }, [filters, sortValue])

  const updateFilter = (key, value) => {
    setFilters((current) => ({ ...current, [key]: value }))
  }

  return (
    <main ref={containerRef} className="bg-[#f6f0ea] pt-20 text-[#241d1f]">
      <section className="border-b border-[#d9c7b7] bg-[#efe3d6]/70">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 lg:px-12 lg:py-20">
          <p className="text-xs uppercase tracking-[0.3em] text-[#8a6c5d]">Collection</p>
          <h1 className="mt-4 font-['Cormorant_Garamond'] text-5xl text-[#241d1f] md:text-6xl">
            Shop all pieces
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-[#5a4745]">
            Premium demi-fine jewelry thoughtfully priced for gifting and everyday wear.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:px-8 lg:grid-cols-[280px_1fr] lg:px-12 lg:py-14">
        <FilterSidebar filters={filters} onChange={updateFilter} />

        <div>
          <div className="mb-6 flex flex-col gap-4 rounded-[1.75rem] border border-[#e5d5c8] bg-white/75 p-5 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-[#5a4745]">{filteredProducts.length} pieces</p>
            <label className="flex items-center gap-3 text-sm text-[#241d1f]">
              <span className="text-xs uppercase tracking-[0.28em] text-[#6d5a57]">Sort</span>
              <select
                value={sortValue}
                onChange={(event) => setSortValue(event.target.value)}
                className="rounded-full border border-[#d9c7b7] bg-[#f8f2ec] px-4 py-2 text-sm text-[#241d1f] outline-none"
              >
                {sortOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
