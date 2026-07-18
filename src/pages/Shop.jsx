import { useEffect, useMemo, useRef, useState } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import { useSearchParams } from 'react-router-dom'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/storefront'
import { ShopHeader } from '@/components/shop/ShopHeader'
import { ShopFilters } from '@/components/shop/ShopFilters'
import { ProductCard } from '@/components/shop/ProductCard'

const defaultFilters = {
  category: 'All',
  price: 'All',
  material: 'All',
}

function Shop() {
  const containerRef = useRef(null)
  const [searchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || 'All'
  const [filters, setFilters] = useState({ ...defaultFilters, category: initialCategory })
  const [sortValue, setSortValue] = useState('featured')

  useEffect(() => {
    const category = searchParams.get('category') || 'All'
    setFilters((current) => ({ ...current, category }))
  }, [searchParams])

  useEffect(() => {
    let cleanup
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      cleanup?.()
    }
  }, [filters.category, filters.price, filters.material, sortValue])

  const filteredProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const matchesCategory =
        filters.category === 'All' || product.category === filters.category
      const matchesPrice =
        filters.price === 'All' || product.priceRange === filters.price
      const matchesMaterial =
        filters.material === 'All' || product.materialFilter === filters.material

      return matchesCategory && matchesPrice && matchesMaterial
    })

    if (sortValue === 'price-asc') {
      return [...filtered].sort((a, b) => a.price - b.price)
    }

    if (sortValue === 'price-desc') {
      return [...filtered].sort((a, b) => b.price - a.price)
    }

    if (sortValue === 'rating') {
      return [...filtered].sort((a, b) => b.rating - a.rating)
    }

    return filtered
  }, [filters, sortValue])

  const handleFilterChange = (group, value) => {
    setFilters((current) => ({
      ...current,
      [group]: current[group] === value ? 'All' : value,
    }))
  }

  return (
    <section ref={containerRef} className="bg-velmora-porcelain py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ShopHeader total={filteredProducts.length} />
        <div className="mt-10 grid gap-8 lg:grid-cols-[320px_minmax(0,1fr)] lg:items-start">
          <ShopFilters
            filters={filters}
            onFilterChange={handleFilterChange}
            sortValue={sortValue}
            onSortChange={setSortValue}
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Shop
