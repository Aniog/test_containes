import { useEffect, useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import ProductCard from '@/components/product/ProductCard'
import FilterSidebar from '@/components/shop/FilterSidebar'
import { products } from '@/data/products'

const priceRanges = {
  '$30–$50': [30, 50],
  '$50–$80': [50, 80],
  '$80–$120': [80, 120],
}

export default function ShopPage({ onAddToCart }) {
  const [searchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || 'All'
  const [filters, setFilters] = useState({ category: initialCategory, price: 'All', material: 'All' })
  const [sort, setSort] = useState('Featured')
  const containerRef = useRef(null)

  const filteredProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const categoryMatch = filters.category === 'All' || product.category === filters.category
      const materialMatch = filters.material === 'All' || product.material === filters.material
      const priceRange = priceRanges[filters.price]
      const priceMatch = !priceRange || (product.price >= priceRange[0] && product.price <= priceRange[1])
      return categoryMatch && materialMatch && priceMatch
    })

    return [...filtered].sort((a, b) => {
      if (sort === 'Price: Low to High') return a.price - b.price
      if (sort === 'Price: High to Low') return b.price - a.price
      if (sort === 'Top Rated') return b.rating - a.rating
      return products.findIndex((item) => item.id === a.id) - products.findIndex((item) => item.id === b.id)
    })
  }, [filters, sort])

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [filters, sort])

  const updateFilter = (key, value) => setFilters((current) => ({ ...current, [key]: value }))

  return (
    <main ref={containerRef} className="bg-velmora-cream pt-28 text-velmora-ink">
      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 lg:px-12">
        <div className="border-b border-velmora-linen pb-8">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-sage">Collection</p>
          <div className="mt-3 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 id="shop-page-title" className="font-serifDisplay text-6xl font-light text-velmora-ink">Shop Velmora</h1>
              <p id="shop-page-subtitle" className="mt-4 max-w-xl text-base leading-8 text-velmora-espresso/75">Editorial demi-fine pieces in gold tones, crystal accents, and giftable silhouettes.</p>
            </div>
            <label className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-velmora-ink">
              Sort
              <select value={sort} onChange={(event) => setSort(event.target.value)} className="border border-velmora-linen bg-velmora-porcelain px-4 py-3 text-sm font-semibold normal-case tracking-normal text-velmora-ink focus:border-velmora-champagne focus:outline-none">
                {['Featured', 'Top Rated', 'Price: Low to High', 'Price: High to Low'].map((option) => <option key={option}>{option}</option>)}
              </select>
            </label>
          </div>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-8 px-5 pb-24 sm:px-8 lg:grid-cols-[17rem_1fr] lg:px-12">
        <FilterSidebar filters={filters} onChange={updateFilter} />
        <div>
          <div className="mb-6 flex items-center justify-between text-sm text-velmora-espresso/75">
            <span>{filteredProducts.length} products</span>
            <span className="hidden sm:inline">Free worldwide shipping on all orders</span>
          </div>
          {filteredProducts.length > 0 ? (
            <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />)}
            </div>
          ) : (
            <div className="border border-velmora-linen bg-velmora-porcelain p-10 text-center text-velmora-ink">
              <p className="font-serifDisplay text-4xl">No pieces match these filters.</p>
              <button type="button" onClick={() => setFilters({ category: 'All', price: 'All', material: 'All' })} className="mt-5 bg-velmora-ink px-6 py-3 text-xs font-bold uppercase tracking-[0.22em] text-velmora-cream transition hover:bg-velmora-champagne hover:text-velmora-ink">Reset filters</button>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
