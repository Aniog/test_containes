import { useEffect, useMemo, useRef, useState } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '@/components/shared/ProductCard'
import FilterSidebar from '@/components/shop/FilterSidebar'
import SectionHeader from '@/components/shared/SectionHeader'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/store'

const sortOptions = ['Featured', 'Price: Low to High', 'Price: High to Low', 'Top Rated']

const Shop = () => {
  const containerRef = useRef(null)
  const [searchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || 'All'
  const [filters, setFilters] = useState({
    category: initialCategory,
    price: 'All',
    material: 'All',
  })
  const [sortBy, setSortBy] = useState('Featured')

  const handleFilterChange = (key, value) => {
    setFilters((current) => ({ ...current, [key]: value }))
  }

  const filteredProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const categoryMatch =
        filters.category === 'All' || product.category === filters.category
      const materialMatch =
        filters.material === 'All' || product.material === filters.material
      const priceMatch =
        filters.price === 'All' ||
        (filters.price === 'Under $50' && product.price < 50) ||
        (filters.price === '$50 to $80' && product.price >= 50 && product.price <= 80) ||
        (filters.price === '$80+' && product.price > 80)

      return categoryMatch && materialMatch && priceMatch
    })

    if (sortBy === 'Price: Low to High') {
      return [...filtered].sort((a, b) => a.price - b.price)
    }

    if (sortBy === 'Price: High to Low') {
      return [...filtered].sort((a, b) => b.price - a.price)
    }

    if (sortBy === 'Top Rated') {
      return [...filtered].sort((a, b) => b.rating - a.rating)
    }

    return filtered
  }, [filters, sortBy])

  useEffect(() => {
    let cleanup = () => {}
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      cleanup()
    }
  }, [filters.category, filters.price, filters.material, sortBy, filteredProducts.length])

  return (
    <div className="pb-16 pt-28 md:pb-24" ref={containerRef}>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2.5rem] border border-stone-200 bg-stone-100/70 px-6 py-10 sm:px-8 lg:px-10">
          <SectionHeader
            description="Explore demi-fine earrings, necklaces, huggies, and gifting sets designed with a warm editorial finish."
            eyebrow="Collection"
            title="Shop Velmora"
          />
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)] lg:items-start">
          <FilterSidebar filters={filters} onFilterChange={handleFilterChange} />
          <div>
            <div className="mb-6 flex flex-col gap-4 rounded-[1.75rem] border border-stone-200 bg-white p-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-stone-600">
                Showing <span className="font-medium text-neutral-950">{filteredProducts.length}</span> pieces
              </p>
              <label className="flex items-center gap-3 text-sm text-stone-600">
                <span>Sort by</span>
                <select
                  className="rounded-full border border-stone-300 bg-stone-50 px-4 py-2.5 text-sm text-neutral-950 outline-none"
                  onChange={(event) => setSortBy(event.target.value)}
                  value={sortBy}
                >
                  {sortOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
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
    </div>
  )
}

export default Shop
